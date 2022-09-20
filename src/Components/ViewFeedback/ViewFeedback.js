import "./ViewFeedback.css";
import NavBar from "../NavBarAdmin/NavBarAdmin";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "react-quill/dist/quill.bubble.css";
import Stack from "@mui/material/Stack";
import Table from "react-bootstrap/Table";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import SearchBar from "material-ui-search-bar";
import SearchInput, { createFilter } from "react-search-input";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
function ViewFeedback() {
  const currentUser = useParams();
  // const [Customers, updateCustomers] = useState(0);
  const [allQuery, updateAllQuery] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  const [limit, updateLimit] = useState(5);
  const [searchTerm, updateSearchTerm] = useState("");
  const [open, setOpen] = useState("");
  const [propertyToUpdate, updatePropertyToUpdate] = useState("FirstName");
  const [value, updateValue] = useState("");
  const [customertoUpdate, updateCustomertoUpdate] = useState("");
  const [focused, setFocused] = useState(false);
  const [reply, updateReply] = useState();
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleClickOpen = (e, c) => {
    console.log(c.customerName);
    updateCustomertoUpdate(c.customerName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigation = new useNavigate();

  useEffect(() => {
    getQuery();
  }, []);
  const handleGetAccountDetails = (c) => {
    console.log(c);
    navigation(`/adminDashboard/GetAccountDetails/${currentUser.username}`, {
      state: c,
    });
  };

  // const handleUpdate = (username) => {
  //   navigation(`/adminDashboard/UpdateCustomer/${currentUser.username}`, {
  //     state: username,
  //   });
  // };
  async function getQuery() {
    axios
      .get("http://localhost:8082/api/v1/getAllQuery")
      .then((resp) => {
        updateAllQuery(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  const handleReply = async (e) => {
    const queryId = e.target.id;
    console.log(queryId);
    await axios
      .post(`http://localhost:8082/api/v1/replytQuery`, {
        reply,
        queryId,
      })
      .then((resp) => {
        getQuery();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    setOpen(false);
  };
  const toogleActiveFlag = (e, c) => {
    const queryId = c._id;

    const userName = currentUser.username;
    console.log(queryId);
    axios
      .post(`http://localhost:8082/api/v1/deleteQuery`, {
        queryId,
      })
      .then((resp) => {
        getQuery();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const searchUpdated = (term) => {
    updateSearchTerm(term);
  };
  let rowOfEmployee;

  if (allQuery != null) {
    if (allQuery != null) {
      const KEYS_TO_FILTERS = ["customerName"];
      const filteredEmails = Object.values(allQuery).filter(
        createFilter(searchTerm, KEYS_TO_FILTERS)
      );
      rowOfEmployee = filteredEmails.map((c) => {
        return (
          <tr id={c.customerName}>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.customerName}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.title}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.message}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.reply ? (
                <div dangerouslySetInnerHTML={{ __html: c.reply }}></div>
              ) : (
                <p style={{ color: "red" }}>Not Replied Yet</p>
              )}
            </td>

            {/* <td
              id={c.customerName}
              style={{ width: "15%", padding: "10px" }}
            >
              {c.isActive ? "true" : "false"}
            </td> */}
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              <span
                onClick={(event) => handleClickOpen(event, c)}
                style={{ cursor: "pointer", color: "blue" }}
                id={c.customerName}
              >
                Reply
              </span>
              <Dialog id={c.customerName} open={open} onClose={handleClose}>
                <DialogTitle>Reply</DialogTitle>

                <DialogContent>
                  <ReactQuill
                    theme="snow"
                    // value={reply}
                    onChange={updateReply}
                    //   style={{ height: "20vh" }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>cancel</Button>
                  <Button
                    id={c._id}
                    onClick={(event) => {
                      handleReply(event);
                    }}
                  >
                    Reply
                  </Button>
                </DialogActions>
              </Dialog>
            </td>
            <td id={c.customerName} style={{ width: "10%" }}>
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={(event) => {
                  toogleActiveFlag(event, c);
                }}
                id={c.customerName}
              >
                Delete
              </span>
            </td>
            {/* <td style={{ width: "10%" }}>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => handleGetAccountDetails(c)}
              style={{ width: "auto" }}
            >
              account details
            </button>
          </td> */}
          </tr>
        );
      });
    }
  }
  return (
    <>
      <NavBar />
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <div>
              <span id="login100-form-title2" style={{ color: "#27CCFD" }}>
                View Queries
              </span>
              <br />
              <SearchInput
                className="search-input"
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={searchUpdated}
                style={{
                  width: "50%",
                  height: "40px",
                  background: "#F2F2F2",
                  color: "black",
                  border: "1px solid #E1D9D1",
                }}
              />
              <br />
              {/* <div className="pagination" style={{ display: "inline-flex" }}>
                <label class="fw-bold">limit:</label>
                <select
                  style={{ width: "140px" }}
                  id="role"
                  name="role"
                  onChange={(e) => {
                    updateLimit(e.target.value);
                    updatePageNumber(1);
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="pagination" style={{ display: "inline-flex" }}>
                <Stack spacing={2}>
                  <Pagination
                    count={Math.ceil(allQuery.length / limit)}
                    color="primary"
                    onChange={(e, value) => updatePageNumber(value)}
                  />
                </Stack>
              </div>{" "}
              <br />
              <br /> */}
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "15%" }}>
                      Customer Name
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Title
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Message
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Reply Message
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Reply
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>{rowOfEmployee}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewFeedback;

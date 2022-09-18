import NavBar from "../NavBarAdmin/NavBarAdmin";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "react-bootstrap/Table";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchInput, { createFilter } from "react-search-input";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
function ViewInsuranceScheme() {
  const [pageNumber, updatePageNumber] = useState(1);
  const [limit, updateLimit] = useState(5);
  const [searchTerm, updateSearchTerm] = useState("");
  const [open, setOpen] = useState("");
  const [propertyToUpdate, updatePropertyToUpdate] = useState("FirstName");
  const [value, updateValue] = useState("");
  const [employetoUpdate, updateEmployetoUpdate] = useState("");
  const [focused, setFocused] = useState(false);
  const [allInsuranceScheme, updateAllInsuranceScheme] = useState("");
  const [allInsuranceTypes, updateallInsuranceTypes] = useState("");
  const [insuranceType, updateInsuranceType] = useState("");

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleClickOpen = (e) => {
    // console.log(e.target.id);
    updateEmployetoUpdate(e.target.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const searchUpdated = (term) => {
    updateSearchTerm(term);
  };
  useEffect(() => {
    getAllInsuranceScheme();
  }, [insuranceType]);
  useEffect(() => {
    getInsuranceTypes();
  }, []);
  const InsTypes = Object.values(allInsuranceTypes).map((s) => {
    return <MenuItem value={s.insuranceType}>{s.insuranceType}</MenuItem>;
  });
  async function getInsuranceTypes() {
    await axios
      .get("http://localhost:8082/api/v1/getAllInsuranceType")
      .then((resp) => {
        updateallInsuranceTypes(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  async function getAllInsuranceScheme() {
    console.log("in get scheme");
    await axios
      .post("http://localhost:8082/api/v1/getAllInsuranceScheme", {
        insuranceType,
      })
      .then((resp) => {
        updateAllInsuranceScheme(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  let rowOfAllInsuranceScheme;
  if (allInsuranceScheme != null) {
    const KEYS_TO_FILTERS = ["allInsuranceTypes"];
    const filteredEmails = Object.values(allInsuranceScheme).filter(
      createFilter(searchTerm, KEYS_TO_FILTERS)
    );
    rowOfAllInsuranceScheme = filteredEmails.map((c) => {
      const binaryString = Array.from(new Uint8Array(c.image.data), (v) =>
        String.fromCharCode(v)
      ).join("");
      const theImage = btoa(binaryString);
      return (
        <tr id={c.insuranceScheme}>
          <td id={c.insuranceScheme} style={{ width: "15%" }}>
            <img
              src={`data:image/png;base64,${theImage}`}
              style={{ width: "80px" }}
            />
          </td>
          <td id={c.insuranceScheme} style={{ width: "15%" }}>
            <p style={{ color: "black" }}>
              <b>Commission for new registration:</b>
              {c.commissionNewReg}
            </p>
            <br />{" "}
            <p style={{ color: "black" }}>
              <b>Commission for installment payment:</b>
              {c.commissionInstall}
            </p>
          </td>
          <td id={c.insuranceScheme} style={{ width: "15%" }}>
            <p style={{ color: "black" }}>{c.insuranceScheme}</p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: c.insuranceNote }}></div>
          </td>
          <td id={c.insuranceScheme} style={{ width: "15%" }}>
            {c.isActive ? "true" : "false"}
          </td>
          <td id={c.insuranceScheme} style={{ width: "10%" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={c.isActive}
                    onChange={(event) => {
                      // toogleActiveFlag(event, c);
                    }}
                    id={c.insuranceScheme}
                  />
                }
              />
            </FormGroup>
          </td>
        </tr>
      );
    });
  }
  return (
    <>
      <NavBar />
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <div>
              <span id="login100-form-title2" style={{ color: "#27CCFD" }}>
                View Insurance Scheme
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
                  font: "black",
                  border: "1px solid #E1D9D1",
                }}
              />
              <br />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 270 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Insurance Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={insuranceType}
                  autoWidth
                  onChange={(event) => {
                    updateInsuranceType(event.target.value);
                  }}
                  label="Insurance Type"
                >
                  {InsTypes}
                </Select>
              </FormControl>
              &nbsp;&nbsp;&nbsp;
              <div className="pagination" style={{ display: "inline-flex" }}>
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
                    // count={Math.ceil(allEmployes.length / limit)}
                    color="primary"
                    onChange={(e, value) => updatePageNumber(value)}
                  />
                </Stack>
              </div>{" "}
              <br />
              <br />
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "15%" }}>
                      Image
                    </th>

                    <th scope="col" style={{ width: "15%" }}>
                      Agent Commission
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Insurance Scheme and Note
                    </th>

                    <th scope="col" style={{ width: "10%" }}>
                      status
                    </th>
                    {/* <th scope="col" style={{ width: "10%" }}>
                Account Details
              </th> */}
                    <th scope="col" style={{ width: "12%" }}>
                      edit
                    </th>
                    <th scope="col" style={{ width: "12%" }}>
                      is Active
                    </th>
                  </tr>
                </thead>
                <tbody>{rowOfAllInsuranceScheme}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewInsuranceScheme;

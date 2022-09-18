import { useEffect, useState } from "react";
import NavBar from "../NavBarAdmin/NavBarAdmin";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "react-bootstrap/Table";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchInput, { createFilter } from "react-search-input";
import axios from "axios";
function ViewInsuranceType() {
  const [focused, setFocused] = useState(false);
  const [limit, updateLimit] = useState(5);
  const [searchTerm, updateSearchTerm] = useState("");
  const [open, setOpen] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  const [allInsuranceType, updateAllInsuranceType] = useState("");
  const [image, updateImage] = useState();
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleClickOpen = (e) => {
    // console.log(e.target.id);
    // updateEmployetoUpdate(e.target.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const searchUpdated = (term) => {
    updateSearchTerm(term);
  };
  useEffect(() => {
    getInsuranceTypes();
  }, []);
  async function getInsuranceTypes() {
    await axios
      .get("http://localhost:8082/api/v1/getAllInsuranceType")
      .then((resp) => {
        updateAllInsuranceType(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  let rowOfAllInsuranceType;
  if (allInsuranceType != null) {
    const KEYS_TO_FILTERS = ["insuranceType"];
    const filteredEmails = Object.values(allInsuranceType).filter(
      createFilter(searchTerm, KEYS_TO_FILTERS)
    );
    rowOfAllInsuranceType = filteredEmails.map((c) => {
      console.log(c.image.data);
      // const base64String = btoa(
      //   String.fromCharCode(...new Uint8Array((c.image.data)))
      // );
      const binaryString = Array.from(new Uint8Array(c.image.data), (v) =>
        String.fromCharCode(v)
      ).join("");
      const theImage = btoa(binaryString);

      return (
        <tr id={c.insuranceType}>
          <td id={c.insuranceType} style={{ width: "15%" }}>
            {c.insuranceType}
          </td>
          <td id={c.insuranceType} style={{ width: "15%" }}>
            <img
              src={`data:image/png;base64,${theImage}`}
              style={{ width: "80px" }}
            />
          </td>
          <td id={c.insuranceType} style={{ width: "10%" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={c.isActive}
                    onChange={(event) => {
                      // toogleActiveFlag(event, c);
                    }}
                    id={c.insuranceType}
                  />
                }
              />
            </FormGroup>
          </td>
          <td id={c.insuranceType} style={{ width: "15%" }}>
            {c.isActive ? "true" : "false"}
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
                ViewEmployee
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

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "15%" }}>
                      Insurance Type
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Status
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Edit
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Is Active
                    </th>
                  </tr>
                </thead>
                <tbody>{rowOfAllInsuranceType}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewInsuranceType;

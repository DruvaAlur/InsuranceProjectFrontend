import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import swal from "sweetalert"
import "./AddEmployee.css";
import NavBar from "../NavBarAdmin/NavBarAdmin";
import axios from "axios";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
function AddEmployee() {
  const [role, updateRole] = useState("employee");
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [isActive, updateIsActive] = useState(true);
  // const [roles,updateRoles= ]
  const onAddEmployee = async (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      swal({
        title: "Are you sure?",
        text: "Click OK for Adding an Employee",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (AddingAgent) => {
        if (AddingAgent === true) {
      await axios
        .post(`http://localhost:8082/api/v1/createEmployee`, {
          userName,
          password,
          firstName,
          lastName,
          role,
          isActive,
        })
        .then((resp) => {
          swal(
            (resp.data),"Created Succesfully",
            {
              icon: "success",
            }
          );
        })
        .catch((error) => {
          swal((error.response.data),"Employee not Created","warning");
        });    
      }
    });
  }
  else{
    swal("Employee not Created","Password and Confirm Password are not same","warning");
  }
}
  return (
    <>
      <NavBar />

      <div id="limiter1">
        <div id="container-login1001">
          <div id="wrap-login1001">
            <form id="login100-form1 validate-form">
              <span id="login100-form-title1" style={{ color: "#27CCFD" }}>
                Add Employee
              </span>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 270 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={role}
                  onChange={(event) => {
                    updateRole(event.target.value);
                  }}
                  label="Role"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="employee">Employee</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>

              <Box
                // component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Employee FirstName"
                  variant="standard"
                  onChange={(e) => updateFirstName(e.target.value)}
                />
              </Box>
              <Box
                // component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Employee LastName"
                  variant="standard"
                  onChange={(e) => updateLastName(e.target.value)}
                />
              </Box>
              <Box
                // component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Username"
                  variant="standard"
                  onChange={(e) => updateUserName(e.target.value)}
                />
              </Box>
              <Box
                // component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  onChange={(e) => updatePassword(e.target.value)}
                />
              </Box>
              <Box
                // component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                  onChange={(e) => updateConfirmPassword(e.target.value)}
                />
              </Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 270 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={isActive}
                  onChange={(event) => {
                    updateIsActive(event.target.value);
                  }}
                  label="Status"
                >
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>

              <br />

              <div id="container-login100-form-btn1">
                <div id="wrap-login100-form-btn1">
                  <div id="login100-form-bgbtn1"></div>
                  <button
                    id="login100-form-btn1"
                    onClick={onAddEmployee}
                    style={{ width: "100%" }}
                  >
                    Add Employee
                  </button>
                </div>
              </div>

              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddEmployee;

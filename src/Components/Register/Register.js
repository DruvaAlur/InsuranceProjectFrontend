import "./Register.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for Day.js

// or for Luxon
// import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// // or for Moment.js
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
function Login() {
  const navigation = new useNavigate();
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [dateOfBirth, updateDateOfBirth] = useState(dayjs("2014-08-18"));
  const [address, updateAddress] = useState("");
  const [email, updateEmail] = useState("");
  const [state, updateState] = useState("");
  const [city, updateCity] = useState("");
  const [pincode, updatePincode] = useState("");
  const [nominee, updateNominee] = useState("");
  const [nomineeRelation, updateNomineeRelation] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8082/api/v1/createCustomer", {
        firstName,
        lastName,
        userName,
        password,
        dateOfBirth,
        address,
        email,
        state,
        city,
        pincode,
        nominee,
        nomineeRelation,
      })
      .then((resp) => {
        console.log(resp.data);
        navigation("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font" style={{ color: "#AE2CFF" }}>
                E-Insurance
              </i>
            </span>
            <br></br>
            <span
              className="login100-form-title p-b-26"
              style={{ color: "#27CCFD" }}
            >
              Register
            </span>

            <form className="login100-form validate-form">
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Firstname"
                  variant="standard"
                  onChange={(e) => updateFirstName(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Lastname"
                  variant="standard"
                  onChange={(e) => updateLastName(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Username"
                  onChange={(e) => updateUserName(e.target.value)}
                  variant="standard"
                />
              </Box>

              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
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
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <TextField
                  id="standard-basic"
                  label="DOB"
                  variant="standard"
                  onChange={(e) => updateDateOfBirth(e.target.value)}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date Of Birth"
                    inputFormat="DD/MM/YYYY"
                    value={dateOfBirth}
                    onChange={(value) => updateDateOfBirth(value)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Address"
                  onChange={(e) => updateAddress(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  onChange={(e) => updateEmail(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="State"
                  onChange={(e) => updateState(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                  onChange={(e) => updateCity(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Pincode"
                  onChange={(e) => updatePincode(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  onChange={(e) => updateNominee(e.target.value)}
                  label="Nominee"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "32ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {" "}
                <TextField
                  id="standard-basic"
                  label="Nominee Relation"
                  onChange={(e) => updateNomineeRelation(e.target.value)}
                  variant="standard"
                />
              </Box>
            </form>
            <br />
            <br />

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </div>
            <br></br>
            {/* <div className="text-center">
              <span className="txt1">Don’t have an account?</span>

              <a className="txt2" href="/">
                Sign Up
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

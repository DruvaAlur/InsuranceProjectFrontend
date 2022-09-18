import NavBar from "../NavBarAdmin/NavBarAdmin";
import ReactQuill from "react-quill";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for Day.js

// or for Luxon
// import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// // or for Moment.js
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
function AddInsuranceScheme() {
  const navigation = new useNavigate();
  const [insuranceType, updateInsuranceType] = useState("");
  const [insuranceScheme, updateInsuranceScheme] = useState("");
  const [image, updateImage] = useState("");
  const [commissionNewReg, updateCommissionNewReg] = useState(0);
  const [commissionInstall, updateCommissionInstall] = useState(0);
  const [insuranceNote, updateInsuranceNote] = useState("");
  const [minTermPlan, updateMinTermPlan] = useState("");
  const [maxTermPlan, updateMaxTermPlan] = useState("");
  const [minAge, updateMinAge] = useState("");
  const [maxAge, updateMaxAge] = useState("");
  const [minInvestment, updateMinInvestment] = useState("");
  const [maxInvestment, updateMaxInvestment] = useState("");
  const [profitRatio, updateProfitRatio] = useState("");
  const [isActive, updateIsActive] = useState("");
  const handleAddInsuranceScheme = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8082/api/v1/createInsuranceScheme", {
        insuranceType,
        insuranceScheme,
        image,
        commissionNewReg,
        commissionInstall,
        insuranceNote,
        minTermPlan,
        maxTermPlan,
        minAge,
        maxAge,
        minInvestment,
        maxInvestment,
        profitRatio,
        isActive,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <NavBar />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span id="login100-form-title1" style={{ color: "#27CCFD" }}>
              Add Insurance Scheme
            </span>
            <form className="login100-form validate-form">
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Insurance Type"
                  variant="standard"
                  onChange={(e) => updateInsuranceType(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Insurance Scheme"
                  variant="standard"
                  onChange={(e) => updateInsuranceScheme(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Image"
                  onChange={(e) => updateImage(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Commission For New Registration (in %)"
                  variant="standard"
                  onChange={(e) => updateCommissionNewReg(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Commission Installment Payment (in %)"
                  variant="standard"
                  onChange={(e) => updateCommissionInstall(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div></div>
              </Box>
              <div style={{ display: "block", width: "70vw" }}>
                <label>Insurance Note:</label>
                <br />
                <ReactQuill
                  theme="snow"
                  value={insuranceNote}
                  onChange={updateInsuranceNote}
                  //   style={{ height: "20vh" }}
                />
              </div>

              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Minimum Termplan"
                  onChange={(e) => updateMinTermPlan(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Maximum Termplan"
                  onChange={(e) => updateMaxTermPlan(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Minimum Age"
                  variant="standard"
                  onChange={(e) => updateMinAge(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Maximum Age"
                  onChange={(e) => updateMaxAge(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  onChange={(e) => updateMinInvestment(e.target.value)}
                  label="Minimum Investment"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {" "}
                <TextField
                  id="standard-basic"
                  label="Minimum Investment Relation"
                  onChange={(e) => updateMaxInvestment(e.target.value)}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {" "}
                <TextField
                  id="standard-basic"
                  label="Profit Ratio"
                  onChange={(e) => updateProfitRatio(e.target.value)}
                  variant="standard"
                />
              </Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: "50ch" }}>
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
            </form>
            <br />
            <br />

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button
                  className="login100-form-btn"
                  onClick={handleAddInsuranceScheme}
                >
                  Add Insurance Scheme
                </button>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddInsuranceScheme;

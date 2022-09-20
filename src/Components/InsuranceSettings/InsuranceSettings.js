import NavBar from "../NavBarAdmin/NavBarAdmin";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

function InsuranceSettings() {
  const [value, setValue] = useState(0);
  return (
    <>
    <NavBar />
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <h1
              className="h1"
              style={{
                color: "purple",
                textAlign: "center",
                textStyle: "bold",
              }}
            >
              Insurance Settings
            </h1>
            <br />
            <br />
            
            <form  noValidate autoComplete="off" style={{ textAlign: 'center'}}>
            <label>Claim Deduction (in  %):</label>
            <TextField type="number" min ="0" step="1"
            value={value && Math.max(0, value)}
            onChange={e => setValue(e.target.value ? Number(e.target.value) : e.target.value)}
            id="outlined-basic" label="Policy Claim %" variant="outlined" />
            <br />
            <br />
            <label>Penatly Amount (in  %) : </label>
            <TextField type="number" min ="0" step="1"
            value={value && Math.max(0, value)}
            onChange={e => setValue(e.target.value ? Number(e.target.value) : e.target.value)}
            id="outlined-basic" label="Policy Claim %" variant="outlined" />
            <br />
            <br />
            <div className="container-login100-form-btn1">
                <div className="wrap-login100-form-btn1">
                  <div className="login100-form-bgbtn1"></div>
                  <button
                    className="login100-form-btn1"
                    style={{ width: "100%" }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
export default InsuranceSettings;

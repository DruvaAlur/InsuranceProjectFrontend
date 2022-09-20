import { useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "react-bootstrap/Table";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Button } from "react-bootstrap";
function InterestCalculator() {
  const [noOfYears, updateNoOfYears] = useState("");
  const [totalInvestmentAmount, updateTotalInvestmentAmount] = useState("");
  const [months, updateMonths] = useState("");
  const [installmentAmount, updateInstallmentAmount] = useState("");
  const [interestAmount, updateInterestAmount] = useState("");
  const [totalAmount, updateTotalAmount] = useState("");
  const profit = 5;
  const handleCalculate = () => {
    const interest = (totalInvestmentAmount * profit) / 100;
    updateInstallmentAmount(totalInvestmentAmount / noOfYears);
    updateInterestAmount(interest);
    updateTotalAmount(Number(totalInvestmentAmount) + Number(interest));
  };
  return (
    <>
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <h3
              className="h3"
              style={{
                color: "purple",
                textAlign: "center",
                textStyle: "bold",
              }}
            >
              Interest Calculator
            </h3>
            <br />
            <Table striped bordered hover size="sm">
              {
                <tbody>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Number Of Years :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {" "}
                      <TextField
                        id="standard-basic"
                        label=""
                        variant="standard"
                        fullWidth
                        onChange={(e) => updateNoOfYears(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Total Investment Amount :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {" "}
                      <TextField
                        id="standard-basic"
                        label=""
                        variant="standard"
                        fullWidth
                        onChange={(e) =>
                          updateTotalInvestmentAmount(e.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      <br />
                      Months :
                    </th>
                    <td>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 270 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={months}
                          onChange={(event) => {
                            updateMonths(event.target.value);
                          }}
                          label="Status"
                        >
                          <MenuItem value={1}>1 Month</MenuItem>
                          <MenuItem value={3}>3 Month</MenuItem>
                          <MenuItem value={6}>6 Month</MenuItem>
                          <MenuItem value={12}>1 Year</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <td style={{ float: "center", alignSelf: "center" }}>
                      <div id="container-login100-form-btn1">
                        <div id="wrap-login100-form-btn1">
                          <div id="login100-form-bgbtn1"></div>
                          <button
                            id="login100-form-btn1"
                            onClick={handleCalculate}
                            style={{ width: "100%" }}
                          >
                            Calculate
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Installment Amount :
                    </th>
                    <td style={{ padding: "10px" }}>{installmentAmount}</td>
                  </tr>

                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Interest Amount :
                    </th>
                    <td style={{ padding: "10px" }}>{interestAmount}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Total Amount :
                    </th>
                    <td style={{ padding: "10px" }}>{totalAmount}</td>
                  </tr>
                </tbody>
              }
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
export default InterestCalculator;

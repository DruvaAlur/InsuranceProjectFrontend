import NavBar from "../NavBar/NavBar";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import Table from "react-bootstrap/Table";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Select from "@mui/material/Select";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function InstallmentPayment() {
  const navigate = new useNavigate();
  const username = useParams().username;

  const accountNo = useLocation().state[0];
  console.log(accountNo);
  const insuranceScheme = useLocation().state[1];
  console.log(insuranceScheme);
  const installmentLeftId = useLocation().state[2];
  console.log(installmentLeftId);

  const getdate = useLocation().state[5];
  let tempdate = getdate; // value from your state
  let date = moment(tempdate).format("DD/MM/YYYY");
  console.log(date);
  const [paymentType, updatePaymentType] = useState("");
  const [cardHolder, updateCardHolder] = useState("");
  const [cardNumber, updateCardNumber] = useState("");
  const [cvvNumber, updateCvvNumber] = useState("");
  const [expDate, updateExpireDate] = useState("");
  const [ammountDesc, updateAmmountDesc] = useState();
  //   const tax = (installmentAmount * 12) / 100;
  //   const totalAmount = tax + installmentAmount;
  useEffect(() => {
    getAmountDescription();
  }, []);
  async function getAmountDescription() {
    await axios
      .post(`http://localhost:8082/api/v1/getAmountDescrip`, {
        installmentLeftId,
      })
      .then((resp) => {
        console.log(resp.data);
        updateAmmountDesc(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  const handleSubmit = () => {
    let tempdate = expDate; // value from your state
    let expireDate = moment(tempdate).format("DD/MM/YYYY");
    console.log(username);
    axios
      .post(`http://localhost:8082/api/v1/payInstallment/${username}`, {
        accountNo,
        insuranceScheme,
        installmentLeftId,

        paymentType,
        cardHolder,
        cardNumber,
        cvvNumber,
        expireDate,
      })
      .then((resp) => {
        console.log(resp.data);
        navigate(`/CustomerDashboard/InstallmentPaymentReceipt/${username}`, {
          state: [
            username,
            accountNo,
            date,
            paymentType,
            ammountDesc.installAmount,
            ammountDesc.penaltyfee,
            ammountDesc.taxAmount,
            ammountDesc.totalPayAmount,
          ],
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate(`/CustomerDashboard/InstallmentPaymentReceipt/${username}`, {
          state: [
            username,
            accountNo,
            date,
            paymentType,
            ammountDesc.installAmount,
            ammountDesc.penaltyfee,
            ammountDesc.taxAmount,
            ammountDesc.totalPayAmount,
          ],
        });
      });
  };
  if (ammountDesc != null) {
    return (
      <>
        <NavBar />
        <div className="container-Insurance">
          <div className="wrap-login100">
            <h2
              className="h2"
              style={{
                color: "purple",
                alignContent: "center",
                textStyle: "bold",
              }}
            >
              Insurance Account Detail
            </h2>
            <br />
            <Table striped bordered hover size="sm">
              {
                <tbody>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Date :
                    </th>
                    {date}
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Installment Amount :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {ammountDesc.installAmount}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Penalty :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {ammountDesc.penaltyfee}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Tax Amount :
                    </th>
                    <td style={{ padding: "10px" }}>{ammountDesc.taxAmount}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Total Amount :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {ammountDesc.totalPayAmount}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Payment Type :
                    </th>
                    <td style={{ padding: "10px" }}>
                      <FormControl
                        fullWidth
                        variant="standard"
                        sx={{ m: 1, minWidth: 270 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Select
                        </InputLabel>
                        <Select
                          fullWidth="true"
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={paymentType}
                          onChange={(event) => {
                            updatePaymentType(event.target.value);
                          }}
                          label="Status"
                        >
                          <MenuItem value="CreditCard">Credit Card</MenuItem>
                          <MenuItem value="DebitCard">Debit Card</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Card Holder :
                    </th>
                    <td style={{ padding: "10px" }}>
                      <TextField
                        id="standard-basic"
                        label=""
                        variant="standard"
                        fullWidth
                        onChange={(e) => updateCardHolder(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Card Number :
                    </th>
                    <td style={{ padding: "10px" }}>
                      <TextField
                        id="standard-basic"
                        label=""
                        variant="standard"
                        fullWidth
                        onChange={(e) => updateCardNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Cvv Number :
                    </th>
                    <td style={{ padding: "10px" }}>
                      <TextField
                        id="standard-basic"
                        label=""
                        variant="standard"
                        fullWidth
                        onChange={(e) => updateCvvNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Expire Date :
                    </th>
                    <td style={{ padding: "10px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Date Of Birth"
                          inputFormat="DD/MM/YYYY"
                          value={expDate}
                          onChange={(value) => updateExpireDate(value)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </td>
                  </tr>
                </tbody>
              }
            </Table>
            <div id="wrap-login100-form-btn1" style={{ width: "300px" }}>
              <div id="login100-form-bgbtn1"></div>
              <button
                id="login100-form-btn1"
                onClick={handleSubmit}
                style={{ width: "100%" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
}
export default InstallmentPayment;
import NavBar from "../AgentNavBar/AgentNavBar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
const htmlToFormattedText = require("html-to-formatted-text");
// const { convert } = require("html-to-text");
function AgentMarketing() {
  const [to, updateTo] = useState("");
  const [subject, updateSubject] = useState("");
  const [message, updateMessage] = useState("");
  const handleSendMail = () => {
    const text = htmlToFormattedText(message);
    // console.log(text);
    axios
      .post("http://localhost:8082/api/v1/marketing", { to, subject, text })
      .then((resp) => {
        console.log(resp.data);
        swal(resp.data, `Congrats!!, Email Sent Successfully`, {
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        swal(error.response.data, "Email Not Sent", "warning");
      });
  };
  return (
    <>
      <NavBar />

      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <Box
              // component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "115ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Email Id"
                variant="standard"
                onChange={(e) => updateTo(e.target.value)}
              />
            </Box>
            <Box
              // component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "115ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Subject"
                variant="standard"
                onChange={(e) => updateSubject(e.target.value)}
              />
            </Box>
            <br />
            <label>Message</label>

            <ReactQuill
              theme="snow"
              // value={insuranceNote}
              onChange={updateMessage}
              style={{ height: "40vh" }}
            />
            <br />
            <br />

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleSendMail}>
                  Send Mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AgentMarketing;

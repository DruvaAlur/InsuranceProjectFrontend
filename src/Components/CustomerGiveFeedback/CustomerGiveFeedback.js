import NavBar from "../NavBar/NavBar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";
const htmlToFormattedText = require("html-to-formatted-text");
function CustomerGiveFeedback() {
  const [title, updateTitle] = useState();
  const [Msg, updateMessage] = useState();
  const customerName = useParams().username;
  const handleEnquiry = async () => {
    // const parser = new DOMParser();
    // const floatingElement = parser.parseFromSrting(Msg, "text/xml");
    const message = htmlToFormattedText(Msg);
    // const message = Msg.replace(/<[^>]+>/g, "");
    console.log(message);
    await axios
      .post(`http://localhost:8082/api/v1/createQuery/${customerName}`, {
        title,
        message,
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
                label="Title"
                variant="standard"
                onChange={(e) => updateTitle(e.target.value)}
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
                <button className="login100-form-btn" onClick={handleEnquiry}>
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
export default CustomerGiveFeedback;

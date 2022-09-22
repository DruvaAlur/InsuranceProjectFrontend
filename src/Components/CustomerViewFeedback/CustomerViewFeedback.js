import NavBar from "../NavBar/NavBar";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";

import "react-quill/dist/quill.bubble.css";

import Table from "react-bootstrap/Table";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import SearchInput, { createFilter } from "react-search-input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function CustomerViewFeedback() {
  const [focused, setFocused] = useState(false);
  const [searchTerm, updateSearchTerm] = useState("");
  const [open, setOpen] = useState("");
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const searchUpdated = (term) => {
    updateSearchTerm(term);
  };
  const [allQuery, updateAllQuery] = useState("");
  useEffect(() => {
    getQuery();
  }, []);
  let rowOfEmployee;
  async function getQuery() {
    axios
      .get("http://localhost:8082/api/v1/getAllQuery")
      .then((resp) => {
        updateAllQuery(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  if (allQuery != null) {
    if (allQuery != null) {
      const KEYS_TO_FILTERS = ["customerName", "message", "title"];
      const filteredEmails = Object.values(allQuery).filter(
        createFilter(searchTerm, KEYS_TO_FILTERS)
      );
      rowOfEmployee = filteredEmails.map((c) => {
        return (
          <tr id={c.customerName}>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.customerName}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.title}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.message}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.createdAt.split("T")[0].split("-").reverse().join("-")}
            </td>
            <td id={c.customerName} style={{ width: "15%", padding: "10px" }}>
              {c.reply === "" ? <>No Reply Yet</> : c.reply}
            </td>
          </tr>
        );
      });
    }
  }
  return (
    <>
      <NavBar />

      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <div>
              <span id="login100-form-title2" style={{ color: "#27CCFD" }}>
                View Queries
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
                  color: "black",
                  border: "1px solid #E1D9D1",
                }}
              />
              <br />

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "15%" }}>
                      Customer Name
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Title
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Message
                    </th>

                    <th scope="col" style={{ width: "10%" }}>
                      Contact Date
                    </th>
                    <th scope="col" style={{ width: "10%" }}>
                      Reply Message
                    </th>
                  </tr>
                </thead>
                <tbody>{rowOfEmployee}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CustomerViewFeedback;

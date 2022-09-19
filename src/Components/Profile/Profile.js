import NavBar from "../NavBarAdmin/NavBarAdmin";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  const currentUser = useParams();
  const [user, updateuser] = useState("");

  useEffect(() => {
    getProfile();
  }, []);
  async function getProfile() {
    axios
      .get(`http://localhost:8082/api/v1/profile/${currentUser.username}`)
      .then((resp) => {
        console.log(resp.data);
        updateuser(resp.data);
      })
      .catch((error) => {
        swal(error.response.data, "Error Occured", "warning");
      });
  }
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
              Profile
            </h1>
            <br />
            <Table striped bordered hover size="sm">
              {
                /* <tbody>{rowOfProfile}</tbody> */
                <tbody>
                  <tr>
                    <th style={{ width: "30%", height: "50%" }}>FirstName :</th>
                    <td>{user.firstName}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%", height: "50%" }}>LastName :</th>
                    <td>{user.lastName}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%", height: "50%" }}>UserName :</th>
                    <td>{currentUser.username}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%", height: "50%" }}>Status :</th>
                    <td>{user.isActive ? "Active" : "InActive"}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%", height: "50%" }}>Role :</th>
                    <td>{user.role}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%", height: "100%" }}>
                      Account Created On :
                    </th>
                    <td>
                      {user.createdAt
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </td>
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

export default Profile;

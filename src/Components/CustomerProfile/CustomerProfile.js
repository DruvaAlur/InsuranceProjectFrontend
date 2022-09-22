import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function CustomerProfile() {
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
                <tbody>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Customer Name :
                    </th>
                    <td style={{ padding: "10px" }}>{user.firstName}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Date Of Birth :
                    </th>
                    <td style={{ padding: "10px" }}>{user.lastName}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Login ID :
                    </th>
                    <td style={{ padding: "10px" }}>{currentUser.username}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Address :
                    </th>
                    <td style={{ padding: "10px" }}>
                      {user.isActive ? "Active" : "InActive"}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Email ID :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      State :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      City :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Pincode :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Mobile Number :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Nominee :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
                  </tr>
                  <tr>
                    <th
                      style={{ width: "30%", height: "50%", padding: "10px" }}
                    >
                      Nominee Relation :
                    </th>
                    <td style={{ padding: "10px" }}>{user.role}</td>
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
export default CustomerProfile;

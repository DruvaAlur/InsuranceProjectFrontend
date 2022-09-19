import NavBar from "../NavBarAdmin/NavBarAdmin";
import Table from "react-bootstrap/Table";
function Profile() {
  return (
    <>
      <NavBar />
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <Table striped bordered hover size="sm">
              {/* <tbody>{rowOfProfile}</tbody> */}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;

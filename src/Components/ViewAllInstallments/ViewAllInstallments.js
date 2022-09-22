import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function ViewAllInstallments() {
  const policy = useLocation().state;
  const username = useParams().username;
  console.log(policy);
  const hanldePayInstallment = () => {
    navigation(`/adminDashboard/GetAccountDetails/${currentUser.username}`, {
      state: c,
    });
  };
  const rowOfPaymentDetails = Object.values(policy.installmentLeft).map((i) => {
    return (
      <tr>
        <td>{i.installmentNo}</td>
        <td>{i.installmentDate.split("T")[0]}</td>
        <td>{i.installAmount}</td>
        <td>{i.payDate.split("GMT")[0]}</td>
        <td>{i.paymentStatus}</td>
        <td>
          {i.paymentStatus == "Paid" ? (
            <button style={{ color: "blue" }} disabled>
              pay
            </button>
          ) : (
            <button
              style={{ color: "blue" }}
              onClick={{ hanldePayInstallment }}
            >
              pay
            </button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <NavBar />
      <div id="limiter2">
        <div id="container-login1002">
          <div id="wrap-login1002">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Customer Name
                  </th>

                  <th scope="col" style={{ width: "15%" }}>
                    Customer Address
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Email-ID
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Mobile No
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Login Id
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{username}</td>
                  <td>{username}</td>
                  <td>{username}</td>
                  <td>{username}</td>
                  <td>{username}</td>
                </tr>
              </tbody>
              {/* <tbody>{rowOfCustomerDetails}</tbody> */}
            </Table>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Account Number
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Insurance Type
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Insurance Scheme
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Date Created
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Maturity Date
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Premium Type
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{policy.accountno}</td>
                  <td>{policy.insuranceType}</td>
                  <td>{policy.insuranceScheme}</td>
                  <td>{policy.dateCreated.split("T")[0]}</td>
                  <td>{policy.maturityDate}</td>
                  <td>{policy.premiumType}</td>
                </tr>
              </tbody>
              {/* <tbody>{rowOfAccountDetails}</tbody> */}
            </Table>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Total Premium Amount
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Profit Ratio
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Sum Assured
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{policy.totalAmount}</td>
                  <td>{policy.profitRatio}</td>
                  <td>{policy.sumAssuredAfterYears}</td>
                </tr>
              </tbody>
              {/* <tbody>{rowOfPremiumDetails}</tbody> */}
            </Table>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Installment Number
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Installment Date
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Installment Amount
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Paid Date
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Payment Status
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Receipt
                  </th>
                </tr>
              </thead>
              <tbody>{rowOfPaymentDetails}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewAllInstallments;

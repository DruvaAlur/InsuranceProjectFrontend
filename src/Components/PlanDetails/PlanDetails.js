import { useState } from "react";
import Table from "react-bootstrap/Table";
function PlanDetails() {
  const [policyTermMinimum, updatePolicyTermMinimum] = useState("");
  const [policyTermMaximum, updatePolicyTermMaximum] = useState("");
  const [minimumAge, updateMinimumAge] = useState("");
  const [maximumAge, updateMaximumAge] = useState("");
  const [minimumInvestmentAmount, updateMinimumInvestmentAmount] = useState("");
  const [maximumInvestmentAmount, updateMaximumInvestmentAmount] = useState("");
  const [profitRatio, updateProfitRatio] = useState("");

  return (
    <>
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
                Plan Details
              </h1>
              <br />
              <Table striped bordered hover size="sm">
                {
                  <tbody>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Policy term-minimum :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Policy term-maximum :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Minimum Age :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Maximum Age :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Minimum Investment Amount :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Maximum Investment Amount :
                      </th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th style={{ width: "30%", height: "50%" }}>
                        Profit Ratio :
                      </th>
                      <td>{}</td>
                    </tr>
                  </tbody>
                }
              </Table>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default PlanDetails;

import NavBar from "../NavBar/NavBar";
import "./PolicyPaymentReceipt.css";
import jsPDF from "jspdf";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
function PolicyPaymentReceipt() {
  const username = useParams().username;
  const printDocument = () => {
    console.log("in here");
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = 0;
      pdf.addImage(
        imgData,
        "JPEG",
        marginX,
        marginY,
        canvasWidth,
        canvasHeight
      );
      //   pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <NavBar />

      <div class="body-wrap">
        <button
          style={{
            color: "white",
            background: "blue",
            width: "100px",
            height: "50px",
            margin: "20px",
            float: "right",
            padding: "10px",
          }}
          onClick={printDocument}
        >
          Download
        </button>
        <table class="body-wrap">
          <tbody>
            <tr>
              <td></td>
              <td class="containerPPR1" width="600">
                <div class="contentPPR">
                  <table
                    class="main"
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    id="divToPrint"
                  >
                    <tbody>
                      <tr>
                        <td class="contentPPR-wrap aligncenter">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td class="contentPPR-block">
                                  <h2>Thanks for using E-Insurance</h2>
                                </td>
                              </tr>
                              <tr>
                                <td class="contentPPR-block">
                                  <table class="invoice">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <b>Name:</b> Anna Smith
                                          <br />
                                          <b>Policy Number:</b>Invoice #12345
                                          <br />
                                          <b>Date:</b>June 01 2015
                                          <br />
                                          <b>Payment Method:</b> Credit Card
                                        </td>
                                      </tr>
                                      <br />
                                      <tr>
                                        <td>
                                          <table
                                            class="invoice-items"
                                            cellpadding="0"
                                            cellspacing="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td>Amount</td>
                                                <td class="alignright">
                                                  $ 20.00
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Tax</td>
                                                <td class="alignright">
                                                  $ 10.00
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Service 3</td>
                                                <td class="alignright">
                                                  $ 6.00
                                                </td>
                                              </tr>
                                              <tr class="total">
                                                <td
                                                  class="alignright"
                                                  width="80%"
                                                >
                                                  Total
                                                </td>
                                                <td class="alignright">
                                                  $ 36.00
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="contentPPR-block">
                                  {/* <a href="#">View in browser</a> */}
                                </td>
                              </tr>
                              <tr>
                                <td class="contentPPR-block">
                                  E-Insurance Technopulse 3rd Floor Mangalore
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div class="footer">
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td class="aligncenter contentPPR-block">
                            Questions? Email{" "}
                            <a href="mailto:">support@company.inc</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default PolicyPaymentReceipt;

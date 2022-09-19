import "./App.css";
import Login from "./Components/Login/Login";
import CustomerDashboard from "./Components/CustomerDashboard/CustomerDashboard.";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
import Register from "./Components/Register/Register";
import ViewEmployee from "./Components/ViewEmployee/ViewEmployee";
import { Route, Routes } from "react-router-dom";
import AddAgent from "./Components/AddAgent/AddAgent";
import AdminProfile from "./Components/AdminProfile/AdminProfile";
import ViewAgent from "./Components/ViewAgent/ViewAgent";
import ViewFeedback from "./Components/ViewFeedback/ViewFeedback";
import ViewCommission from "./Components/ViewCommission/ViewCommission";
import ViewCustomer from "./Components/ViewCustomer/ViewCustomer";
import AddCity from "./Components/AddCity/AddCity";
import AddState from "./Components/AddState/AddState";
import ViewCity from "./Components/ViewCity/ViewCity";
import ViewCommissionWithdrawal from "./Components/ViewCommissionWithdrawal/ViewCommissionWithdrawal";
import ViewState from "./Components/ViewState/ViewState";
import InsuranceAccount from "./Components/InsuranceAccount/InsuranceAccount";
import ViewPolicyPayment from "./Components/ViewPolicyPayment/ViewPolicyPayment";
import ViewPolicyClaim from "./Components/ViewPolicyClaim/ViewPolicyClaim";
import AddInsuranceType from "./Components/AddInsuranceType/AddInsuranceType";
import ViewInsuranceType from "./Components/ViewInsuranceType/ViewInsuranceType";
import AddInsuranceScheme from "./Components/AddInsuranceScheme/AddInsuranceScheme";
import ViewInsuranceScheme from "./Components/ViewInsuranceScheme/ViewInsuranceScheme";
import AddInsurancePlan from "./Components/AddInsurancePlan/AddInsurancePlan";
import ViewInsurancePlan from "./Components/ViewInsurancePlan/ViewInsurancePlan";
import TaxSettings from "./Components/TaxSettings/TaxSettings";
import InsuranceSettings from "./Components/InsuranceSettings/InsuranceSettings";
import Profile from "./Components/Profile/Profile";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route
          exact
          path="/CustomerDashboard/:username"
          element={<CustomerDashboard />}
        />
        <Route
          exact
          path="/AdminDashboard/:username"
          element={<AdminDashboard />}
        />
        <Route
          exact
          path="/AdminDashboard/AddEmployee/:username"
          element={<AddEmployee />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewEmployee/:username"
          element={<ViewEmployee />}
        />
        <Route
          exact
          path="/AdminDashboard/AdminProfile/:username"
          element={<AdminProfile />}
        />
        <Route
          exact
          path="/AdminDashboard/AddAgent/:username"
          element={<AddAgent />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewAgent/:username"
          element={<ViewAgent />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewFeedback/:username"
          element={<ViewFeedback />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewCommission/:username"
          element={<ViewCommission />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewCommissionWithdrawal/:username"
          element={<ViewCommissionWithdrawal />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewCustomer/:username"
          element={<ViewCustomer />}
        />
        <Route
          exact
          path="/AdminDashboard/AddCity/:username"
          element={<AddCity />}
        />
        <Route
          exact
          path="/AdminDashboard/AddState/:username"
          element={<AddState />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewCity/:username"
          element={<ViewCity />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewState/:username"
          element={<ViewState />}
        />
        <Route
          exact
          path="/AdminDashboard/InsuranceAccount/:username"
          element={<InsuranceAccount />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewPolicyPayment/:username"
          element={<ViewPolicyPayment />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewPolicyClaim/:username"
          element={<ViewPolicyClaim />}
        />
        <Route
          exact
          path="/AdminDashboard/AddInsuranceType/:username"
          element={<AddInsuranceType />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewInsuranceType/:username"
          element={<ViewInsuranceType />}
        />
        <Route
          exact
          path="/AdminDashboard/AddInsuranceScheme/:username"
          element={<AddInsuranceScheme />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewInsuranceScheme/:username"
          element={<ViewInsuranceScheme />}
        />
        <Route
          exact
          path="/AdminDashboard/AddInsurancePlan/:username"
          element={<AddInsurancePlan />}
        />
        <Route
          exact
          path="/AdminDashboard/ViewInsurancePlan/:username"
          element={<ViewInsurancePlan />}
        />
        <Route
          exact
          path="/AdminDashboard/TaxSettings/:username"
          element={<TaxSettings />}
        />
        <Route
          exact
          path="/AdminDashboard/InsuranceSettings/:username"
          element={<InsuranceSettings />}
        />
        <Route
          exact
          path="/AdminDashboard/Profile/:username"
          element={<Profile />}
        />
        <Route
          exact
          path="/AdminDashboard/ChangePassword/:username"
          element={<ChangePassword />}
        />
      </Routes>
    </ScrollToTop>
  );
}

export default App;

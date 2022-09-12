import "./App.css";
import Login from "./Components/Login/Login";
import CustomerDashboard from "./Components/CustomerDashboard/CustomerDashboard.";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Register from "./Components/Register/Register";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/CustomerDashboard" element={<CustomerDashboard />} />
      <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminComponent from "./Container/AdminComponent";
import MomComponent from "./Container/MomComponent";
import CustomerComponent from "./Container/CustomerComponent";
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/mom" element={<MomComponent />} />
        <Route path="/customer" element={<CustomerComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

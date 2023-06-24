import React from "react";
import Dashboard from "../Pages/Dashboard";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Form from "../Pages/Form";
import { Route, Routes } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}

export default AllRoutes;

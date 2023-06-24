import React from "react";
import Dashboard from "../Pages/Dashboard";
import Service from "../Pages/Service";
import Login from "../Pages/Login";
import Form from "../Pages/Form";
import { Route, Routes } from "react-router-dom";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
}

export default AllRoutes;

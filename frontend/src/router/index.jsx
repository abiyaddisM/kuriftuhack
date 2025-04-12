// src/router/index.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home"
import Shop from "../page/Shop";
import MembershipPlan from "../page/MambershipPlans";
import Refferal from "../page/Refferal";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/membership" element={<MembershipPlan />} />
        <Route path="/refferals" element={<Refferal />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

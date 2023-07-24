import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/basket/Basket";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default Index;

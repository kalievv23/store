import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Header from "../layouts/Header";
import Aside from "../layouts/Aside";
import Products from "../pages/products/Products";
import Product from "../pages/products/Product";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Index;

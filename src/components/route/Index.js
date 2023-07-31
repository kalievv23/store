import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/signUp/SignUp";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="sign_up" element={<SignUp/>}/>
      </Routes>
    </>
  );
};

export default Index;

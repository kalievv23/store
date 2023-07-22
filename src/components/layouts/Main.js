import React from "react";
import Products from "../pages/products/Products";
import { styled } from "styled-components";

const Main = () => {
  return (
    <div>
      <Header>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Header>
      <Products />
    </div>
  );
};

export default Main;

const Header = styled.header`
  border: 1px solid;
`

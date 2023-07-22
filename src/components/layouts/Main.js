import React from "react";
import Products from "../pages/products/Products";
import { styled } from "styled-components";

const Main = () => {
  return (
    <div>
      <Header>
        <span>Сортировать по:</span>
        <span>Популярности</span>
        <span>Возврастанию цены</span>
        <span>Новизне</span>
      </Header>
      <Products />
    </div>
  );
};

export default Main;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #999999;
  width: 60%;
  padding: 20px;
  font-size: 17px;
`;

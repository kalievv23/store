import React from "react";
import Products from "../pages/products/Products";
import { styled } from "styled-components";

const Main = () => {
  return (
    <div>
      <Header>
        <span>Сортировать по:</span>
        <span className="sort">Популярности</span>
        <span className="sort">Возврастанию цены</span>
        <span className="sort">Убыванию цены</span>
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
  color: #666666;
  width: 800px;
  padding: 20px;
  font-size: 17px;
  & .sort {
    cursor: pointer;
    &:hover {
      color: #999999;
    }
  }
`;

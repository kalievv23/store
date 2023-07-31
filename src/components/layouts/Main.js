import React, { useState } from "react";
import Products from "../pages/products/Products";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { setAscendingSort, setDescendingSort } from "../store/slices/SortSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [ascending, setAscending] = useState(false);
  const [descending, setDescendign] = useState(false);

  const ascendingHandler = () => {
    setAscending((prev) => !prev)
    setDescendign(false)
    if (!ascending) {
      dispatch(setAscendingSort('ascending'))
    }
    if (ascending) {
      dispatch(setAscendingSort('none'))
    }
  };
  const descendingHandler = () => {
    setDescendign((prev) => !prev)
    setAscending(false)
    if (!descending) {
      dispatch(setDescendingSort('descending'))
    }
    if (descending) {
      dispatch(setDescendingSort('none'))
    }
  }

  return (
    <div>
      <Header>
        <span>Сортировать по:</span>
        <span
          onClick={ascendingHandler}
          className="sort"
        >
          Возврастанию цены
        </span>
        <span
          onClick={descendingHandler}
          className="sort"
        >
          Убыванию цены
        </span>
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
  width: 650px;
  padding: 20px;
  font-size: 17px;
  & .sort {
    cursor: pointer;
    &:hover {
      color: #999999;
    }
  }
`;

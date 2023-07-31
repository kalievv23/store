import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { changeQuantityProduct, removeProduct } from "../../store/slices/BasketSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../UI/Modal";
import MuiButton from "../../UI/MuiButton";

function Caunter(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(props.quantity);
  const [searchParams, setSearchParams] = useSearchParams();
  const obj = {
    count: count,
    id: props.id,
  };
  dispatch(changeQuantityProduct(obj));

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
    if (count === 1) {
      searchParams.set("modal", "delete_product");
      setSearchParams(searchParams);
    }
  };

  const removeProductHandler = (id) => {
    dispatch(removeProduct(id))
    searchParams.delete("modal")
    setSearchParams(searchParams)
  }

  return (
    <>
      {searchParams.get("modal") && (
        <Modal>
          <h3>Are you sure?</h3>
          <MuiButton variant={"contained"} onClick={() => navigate(-1)}>
            NO
          </MuiButton>
          <MuiButton variant={"contained"} onClick={() => removeProductHandler(props.id)}>YES</MuiButton>
        </Modal>
      )}
      <Count>
        <BTN onClick={handleDecrement}>-</BTN>
        <BTN> {count}</BTN>
        <BTN onClick={handleIncrement}>+</BTN>
      </Count>
      <Exit>
        <svg
          width="14"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L5.586 7 .293 1.707a1 1 0 0 1 0-1.414Z"
            fill="#464646"
          ></path>
        </svg>
      </Exit>
    </>
  );
}

export default Caunter;

const Count = styled.div`
  border: 1px solid;
  border-radius: 10px;
  border: none;
  background-color: #f5f5dc;
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const Exit = styled.div`
  cursor: pointer;
`;

const BTN = styled.button`
  height: 10px;
  margin-top: 20px;
  border: none;
  outline: none;
  background-color: #f5f5dc;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9px;
  cursor: pointer;
`;

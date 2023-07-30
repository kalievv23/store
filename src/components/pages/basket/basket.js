import React, { useState } from "react";
import { styled } from "styled-components";
import Caunter from "./Caunter";
import Modal from "../../UI/Modal";
import { useSelector } from "react-redux";

const Basket = (props) => {
  let { products } = useSelector((state) => state.basket);

  const totalPrice = products.reduce((total, el) => {
    return el.price * el.quantity + total;
  }, 0);

  const hideBasket = () => {
    props.hideBasket();
  };
  const showBasket = () => {
    props.showBasket();
  };
  return (
    <Modal top='21%' left='56%'>
      <div onMouseEnter={showBasket} onMouseLeave={hideBasket}>
        <Title>Корзина</Title>
        <Images>
          {products.length > 0 ? (
            products.map((el) => (
              <Iphonplus>
                <img width={60} height={60} src={el.url} alt="" />
                <Imo>
                  <p>{el.title}</p>
                  <span>
                    {el.quantity} {iconMultiply} {el.price}
                  </span>
                </Imo>
                <COUNT>
                  <Caunter quantity={el.quantity} id={el.id} />
                </COUNT>
              </Iphonplus>
            ))
          ) : (
            <h3>Товаров пока нет!</h3>
          )}
        </Images>
        <hr />

        {products.length === 0 || (
          <Itog>
            <Itog1>
              <span>Итого:{products.length} товара</span>
              <h2>{totalPrice}c</h2>
            </Itog1>
            <Btn>
              <Butt>Перейти в корзину</Butt>
            </Btn>
          </Itog>
        )}
      </div>
    </Modal>
  );
};

export default Basket;

const Iphonplus = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px 0.1px #bbbbbb;
  transition: all ease 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  margin-top: 10px;
  width: 530px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
  & span {
    color: #777777;
    font-weight: 600;
  }
`;
const Title = styled.h2`
  margin-left: 20px;
`;

const Imo = styled.div`
  height: 100px;
  width: 250px;
  /* border: 1px solid; */
`;

const Images = styled.div`
  width: 500px;
  min-height: 50px;
  max-height: 200px;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;

const Itog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Itog1 = styled.div`
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.div`
  width: 150px;
`;

const Butt = styled.button`
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: azure;
  background-color: #ff8c00;
`;

const COUNT = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const iconMultiply = (
  <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L7 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L5.586 7 .293 1.707a1 1 0 0 1 0-1.414Z"
      fill="#464646"
    ></path>
  </svg>
);

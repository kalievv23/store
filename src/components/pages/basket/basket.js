import React from "react";
import { styled } from "styled-components";
import Caunter from "./Caunter";




const Basket = () => {
  return (
    <>

      <Container>
        <Images>
          <h2>Корзина</h2> 
          <Iphonplus>
            <img
                width={60} height={60}
                src="https://yabloko-lg.ru/image/cache/catalog/img/iphone/iphone14/iPhone-14Plus-Blue-1000x1000.jpg"
                alt=""
                />
            <Imo>
            <p>iphone 14 plus</p>
            <span>Продавец: Калиев ИмамАзим</span>
            <br />
            <h3>
              1
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
              91500
            </h3>
            </Imo>
            <COUNT>
                  <Caunter/>
            </COUNT>
          </Iphonplus>
        </Images>
        <hr />

        <Itog>
          <Itog1>
          <span>Итого:1 товара</span>
          <h2>91500</h2>
          </Itog1>
          <Btn>

          <Butt>Перейти в корзину</Butt>
          </Btn>
        </Itog>
      </Container>
    </>
  );
};

export default Basket;

const Container = styled.div`
  border: 1px solid;
  width: 550px;
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 15px;
  border: none;
  background-color: #F0FFFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Iphonplus = styled.div`
  /* border: 1px solid; */
  width: 530px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
  /* height: 200px; */
  /* & .Iphone {
    border: 1px solid;
    width: 100px;
    margin-left: 20px;
    
  } */
  & span {
    color: #777777;
    font-weight: 600;

  }
`;

const Imo = styled.div`
  /* border: 1px solid; */
  height: 100px;
  width: 250px;
`

const Images = styled.div`
  /* display: flex; */
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  /* border: 1px solid; */
`

const Itog = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Itog1 = styled.div`
  /* border: 1px solid; */
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Btn = styled.div`
  width: 150px;
`

const Butt = styled.button`
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: azure;
  background-color: #FF8C00;
` 


const COUNT = styled.div`
  /* border: 1px solid; */
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
` 
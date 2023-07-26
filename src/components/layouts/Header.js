import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderCont>
        <h1>Phone Stores</h1>
      </HeaderCont>

      <HeaderInp>
        <img src="https://stores.kg/static/img/Logo.svg" alt="" />
        <div>
          <input type="search" />
          <button>Поиск</button>
        </div>

        <Sections>
          <div>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 23.625c.26-.8.684-1.535 1.25-2.145.992-1.068 2.335-1.668 3.737-1.668h7.526c1.401 0 2.745.6 3.736 1.668.567.61.991 1.345 1.251 2.145M18.703 9.948A4.7 4.7 0 0 1 14 14.645a4.7 4.7 0 0 1-4.703-4.697A4.7 4.7 0 0 1 14 5.25a4.7 4.7 0 0 1 4.703 4.698Z"
                stroke="#383838"
                stroke-width="1.75"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span>Войти</span>
          </div>
          <Contdiv>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21.412 15.15.037-.036.032-.039.031-.038a5.33 5.33 0 0 0 1.238-3.406c0-3.103-2.652-5.506-5.779-5.506-1.082 0-2.1.284-2.971.783a5.976 5.976 0 0 0-2.971-.783c-3.127 0-5.779 2.403-5.779 5.506 0 1.455.594 2.772 1.544 3.747l.013.013.013.013.013.013 6.605 6.22.605.57.6-.575 6.769-6.483Z"
                stroke="#383838"
                stroke-width="1.75"
              ></path>
            </svg>
            <span>Избранное</span>
          </Contdiv>
          <Contdiv>
            <svg
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.375 5.849h.335c.828 0 1.558.522 1.795 1.283l.64 2.135L9.939 17.5l9.208-.876c1.037-.2 1.87-.942 2.153-1.92l1.451-5.437M14.787 5.25v5.986m-3.062-2.993h6.125M8.366 23.625c.755 0 1.367-.588 1.367-1.313 0-.724-.612-1.312-1.367-1.312C7.612 21 7 21.588 7 22.313c0 .724.612 1.312 1.366 1.312ZM19.634 23.625c.754 0 1.366-.588 1.366-1.313 0-.724-.612-1.312-1.366-1.312-.755 0-1.367.588-1.367 1.313 0 .724.612 1.312 1.367 1.312Z"
                stroke="#383838"
                stroke-width="1.75"
                stroke-linecap="square"
              ></path>
            </svg>
            <span>Корзина</span>
          </Contdiv>
        </Sections>
      </HeaderInp>
    </>
  );
};

export default Header;

const HeaderCont = styled.div`
  border: 1px solid;
  width: 100%;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 3%,
    rgba(9, 9, 121, 1) 24%,
    rgba(255, 0, 181, 1) 100%
  );
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin-top: 0px;
  & h1 {
    height: 40px;
    color: #f0ffff;
  }
`;

const HeaderInp = styled.div`
  margin-top: 15px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  & input {
    width: 450px;
    height: 50px;
    outline: none;
  }
  & button {
    width: 90px;
    height: 50px;
    border: none;
    border-radius: 0 8px 8px 0;
    background-color: #ff8c00;
  }
`;

const Sections = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Contdiv = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

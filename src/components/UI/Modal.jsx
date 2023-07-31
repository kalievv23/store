import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={() => navigate(-1)}></Backdrop>
      <ModalContent style={props}>{props.children}</ModalContent>
    </>,
    modalRoot
  );
};
export default Modal;
const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid;
  width: 100%;
  background-color: #000000;
  opacity: 30%;
  height: 100vh;
`;
const ModalContent = styled.div`
  z-index: 3;
  background-color: #f2f2f2;
  box-shadow: 0 0 7px 0.01px #d1d1d1;
  padding: 10px;
  border-radius: 10px;
  position: fixed;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
`;

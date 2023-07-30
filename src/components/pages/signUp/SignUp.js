import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { setUser } from "../../store/slices/UserSlice";
import { FadeLoader } from "react-spinners";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phoneNumber } = useSelector((state) => state.user);
  console.log(phoneNumber);
  const [numberValue, setNumberValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const numberValueHandler = (e) => {
    let value = e.target.value;
    let chunks = value.replace(/\s/g, "").match(/.{1,3}/g);
    if (chunks) {
      value = chunks.join(" ");
    } else {
      value = "";
    }
    if (value.length <= 11) {
      setButtonDisabled(true);
      setNumberValue(value);
    }
    if (value.length === 11) {
      setButtonDisabled(false);
    }
  };
  const clickHandler = () => {
    if (numberValue.length === 11) {
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
        navigate("/home");
      }, 500);
      dispatch(setUser(numberValue.trim()));
    }
  };

  return (
    <>
      <Container>
        <Section>
          <Stilh1>Добро пожаловать в Stores!</Stilh1>
          <Stilp>Войдите или создайте учетную запись.</Stilp>
        </Section>

        <Section1>
          <Imj>
            <img
              width="30"
              height="20"
              src="https://4.bp.blogspot.com/-Trq3DOm6PKE/UUe4L4RDS4I/AAAAAAAACac/PEzWkP8WLeY/s320/Kyrgyz+flag.gif"
              alt="fghjk"
            />
            <span>+996</span>
          </Imj>
          <Inp
            onChange={numberValueHandler}
            value={numberValue}
            placeholder="Номер телефона"
            type="text"
          />
        </Section1>
        <div>
          <Btn disabled={buttonDisabled} onClick={clickHandler}>
            {spinner && (
              <FadeLoader
                color="#dfdfdf"
                height={10}
                margin={1}
                radius={111}
                width={3}
              />
            )}
            {!spinner && "Далее"}
          </Btn>
          <p>
            Нажимая на кнопку,я соглашаюсь с ползовательским
            <br />
            соглашением
          </p>
        </div>
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.div`
  width: 568px;
  height: 345px;
  margin-left: 35%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  height: 130px;
  text-align: center;
`;

const Section1 = styled.div`
  width: 450px;
  height: 51px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f5f5;
`;
const Imj = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-left: 15px;
`;
const Inp = styled.input`
  width: 350px;
  height: 20px;
  font-size: 15px;
  margin-top: 3px;
  border: none;
  background: none;
  outline: none;
`;
const Btn = styled.button`
  width: 450px;
  height: 51px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: all ease 0.2s;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;
const Stilh1 = styled.h1`
  color: #2a3650;
`;
const Stilp = styled.p`
  color: #2a3650;
`;

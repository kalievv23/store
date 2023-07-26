import { red } from '@mui/material/colors'
import React from 'react'
import { styled } from 'styled-components'

const SignUp = () => {
  return (

<>

    <Container>
      <Section>
      <Stilh1>Добро пожаловать в Stores!</Stilh1>
      <Stilp>Войдите или создайте учетную запись.</Stilp>
      </Section>

      <Section1>
        <Imj>
        <img width="30" height="20" src="https://4.bp.blogspot.com/-Trq3DOm6PKE/UUe4L4RDS4I/AAAAAAAACac/PEzWkP8WLeY/s320/Kyrgyz+flag.gif" alt="fghjk" />
        <span>+996</span>
        </Imj>
        <Inp placeholder='Номер телефона' type="text" />
      </Section1>
      <div>
        <Btn>Далее</Btn>
        <p>Нажимая на кнопку,я соглашаюсь с ползовательским<br />
          соглашением
        </p>
      </div>


        

      
    </Container>
</>
  )
}

export default SignUp

const Container = styled.div`
  width: 568px;
  height: 345px;
  margin-left: 35%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Section = styled.div`
  height: 130px;
  text-align: center;

`

const Section1 = styled.div`
  width: 450px;
  height: 51px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f5f5;
`
const Imj = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-left: 15px;
`
const Inp = styled.input`
  width: 350px;
  height: 20px;
  font-size: 15px;
  margin-top: 3px;
  border: none;
  background: none;
  outline: none;
`

const Btn = styled.button`
  width: 450px;
  height: 51px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`
const Stilh1 = styled.h1`
  color: #2A3650;
`
const Stilp = styled.p`
  color: #2A3650;
`
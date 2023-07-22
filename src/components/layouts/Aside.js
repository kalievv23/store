import React from 'react'
import { styled } from 'styled-components'

const Aside = () => {
  return (
    
<>
      <InpContainer>
        <div>
        <h4>Цена</h4>
  
        </div>
        <Inpclass placeholder='от 1400' type="text" />
        <Inpclass placeholder='до 149000' type="text" />
      </InpContainer>
  
      <BrendCont>
        <h4>Бренд</h4>
        <div><input type="checkbox" /><span>Xiaomi</span></div>
        <div><input type="checkbox" /><span>Realmi</span></div>
        <div><input type="checkbox" /><span>Iphone</span></div>
        <div><input type="checkbox" /><span>Samsung</span></div>
        <div><input type="checkbox" /><span>Huawei</span></div>

      </BrendCont>
      <PamitCont>
        <h4>Память</h4>
        <div><input type="checkbox" /><span>32гб</span></div>
        <div><input type="checkbox" /><span>64гб</span></div>
        <div><input type="checkbox" /><span>128гб</span></div>
        <div><input type="checkbox" /><span>256гб</span></div>

      </PamitCont>
</>
  )
}

export default Aside


const InpContainer = styled.div`
  /* border: 1px solid ; */
  width: 290px;
  padding: 30px;
  /* height: 100px; */
  /* display: flex; */
  margin-left: 30px;
  & div{
    /* border: 1px solid; */
    width: 50px;
    height: 30px;
    text-align: center;
    display: flex;
    /* align-items: center; */
  }

`

const Inpclass = styled.input`
  width: 120px;
  height: 30px;
  /* border: 1px solid; */
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 5px;
  
  
`

const BrendCont = styled.div`
  /* border: 1px solid; */
  width: 290px;
  margin-left: 60px;
`

const PamitCont = styled.div`
  /* border: 1px solid ; */
  width: 290px;
  margin-left: 60px;
`
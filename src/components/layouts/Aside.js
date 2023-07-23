import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { filterByTitle } from '../store/slices/ProductSlice'
 
const Aside = () => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState({
    xiaomi: false,
    realmi: false,
    iphone: false,
    samsung: false,
    huawei: false,
  })

  const brendPhoenHandler = (e) => {
    const { name, checked } = e.target
    setIsChecked({
      ...isChecked,
      [name]: checked
    })
    dispatch(filterByTitle(name))
  }

  return (
    
<Wrapper>
      <InpContainer>
        <div>
        <h4>Цена</h4>
  
        </div>
        <Inpclass placeholder='от 1400' type="text" />
        <Inpclass placeholder='до 149000' type="text" />
      </InpContainer>
  
      <BrendCont>
        <h4>Бренд</h4>
        <div><input name='xiaomi' checked={isChecked.xiaomi} onChange={brendPhoenHandler} type="checkbox" /><span>Xiaomi</span></div>
        <div><input name='realme' checked={isChecked.realmi} onChange={brendPhoenHandler} type="checkbox" /><span>Realmi</span></div>
        <div><input name='iphone' checked={isChecked.iphone} onChange={brendPhoenHandler} type="checkbox" /><span>Iphone</span></div>
        <div><input name='samsung' checked={isChecked.samsung} onChange={brendPhoenHandler} type="checkbox" /><span>Samsung</span></div>
        <div><input name='huawei' checked={isChecked.huawei} onChange={brendPhoenHandler} type="checkbox" /><span>Huawei</span></div>

      </BrendCont>
      <PamitCont>
        <h4>Память</h4>
        <div><input type="checkbox" /><span>32гб</span></div>
        <div><input type="checkbox" /><span>64гб</span></div>
        <div><input type="checkbox" /><span>128гб</span></div>
        <div><input type="checkbox" /><span>256гб</span></div>

      </PamitCont>
</Wrapper>
  )
}

export default Aside

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 0 0 20px;
`

const InpContainer = styled.div`
  width: 290px;
  & div{
    width: 50px;
    height: 30px;
    text-align: center;
    display: flex;
  }

`

const Inpclass = styled.input`
  width: 120px;
  height: 30px;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 5px;
  
  
`

const BrendCont = styled.div`
  width: 290px;
`

const PamitCont = styled.div`
  width: 290px;
`
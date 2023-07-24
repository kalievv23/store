import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import {
  filterByMemory,
  filterByPrice,
  filterByTitle,
  removeFilterByMemory,
  removeFilterByTitle,
} from "../store/slices/FilterSlice";

const Aside = () => {
  const dispatch = useDispatch();

  const brendPhoneHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(filterByTitle(name));
    }
    if (!checked) {
      dispatch(removeFilterByTitle(name));
    }
  };

  const memoryPhoneHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(filterByMemory(name));
    }
    if (!checked) {
      dispatch(removeFilterByMemory(name));
    }
  };

  const pricePhoneHandler = (e) => {
    const { value, name } = e.target
    if (value.length) {
      dispatch(filterByPrice({
        [name]: value
      }))
    }
  }

  return (
    <Wrapper>
      <InpContainer>
        <div>
          <h4>Цена</h4>
        </div>
        <Inpclass name="min" onChange={pricePhoneHandler} min={1400} placeholder="от 1400" type="text" />
        <Inpclass name="max" onChange={pricePhoneHandler} max={149000} placeholder="до 149000" type="text" />
      </InpContainer>

      <BrendCont>
        <h4>Бренд</h4>
        <div>
          <input name="xiaomi" onChange={brendPhoneHandler} type="checkbox" />
          <span>Xiaomi</span>
        </div>
        <div>
          <input name="realme" onChange={brendPhoneHandler} type="checkbox" />
          <span>Realme</span>
        </div>
        <div>
          <input name="iphone" onChange={brendPhoneHandler} type="checkbox" />
          <span>Iphone</span>
        </div>
        <div>
          <input name="samsung" onChange={brendPhoneHandler} type="checkbox" />
          <span>Samsung</span>
        </div>
        <div>
          <input name="huawei" onChange={brendPhoneHandler} type="checkbox" />
          <span>Huawei</span>
        </div>
      </BrendCont>
      <PamitCont>
        <h4>Память</h4>
        <div>
          <input name="32" onChange={memoryPhoneHandler} type="checkbox" />
          <span>32гб</span>
        </div>
        <div>
          <input name="64" onChange={memoryPhoneHandler} type="checkbox" />
          <span>64гб</span>
        </div>
        <div>
          <input name="128" onChange={memoryPhoneHandler} type="checkbox" />
          <span>128гб</span>
        </div>
        <div>
          <input name="256" onChange={memoryPhoneHandler} type="checkbox" />
          <span>256гб</span>
        </div>
        <div>
          <input name="512" onChange={memoryPhoneHandler} type="checkbox" />
          <span>512гб</span>
        </div>
      </PamitCont>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 0 0 20px;
`;

const InpContainer = styled.div`
  width: 290px;
  & div {
    width: 50px;
    height: 30px;
    text-align: center;
    display: flex;
  }
`;

const Inpclass = styled.input`
  width: 120px;
  height: 30px;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 5px;
`;

const BrendCont = styled.div`
  width: 290px;
`;

const PamitCont = styled.div`
  width: 290px;
`;

import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { Items } from "../../store/Products";

const Products = () => {
  return (
    <Wrapper>
      {Items.map((el) => (
        <Card>
          <Product key={el.id} title={el.title} url={el.url} price={el.price}/>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

const Card = styled.div`
  padding: 5px;
`
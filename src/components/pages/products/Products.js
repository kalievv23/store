import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const Products = () => {

  const { filteredItems, items } = useSelector(state => state.products)
  console.log(filteredItems);

  return (
    <Wrapper>
      {filteredItems.map((el) => (
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
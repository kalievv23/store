import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Items } from "../../store/Products";

const Products = () => {
  const { title, memory, price } = useSelector(
    (state) => state.filters.filters
  );
  console.log(price);

  const filteredProducts = Items.filter(
    (product) =>
      (title.length === 0 ||
        title.some((filterWord) =>
          product.title.toLowerCase().includes(filterWord)
        )) &&
      (memory.length === 0 ||
        memory.some((filterWord) => product.title.includes(filterWord))) &&
      ((price.min <= 1400 && price.max <= price.min) ||
        (product.price > price.min && product.price < price.max))
  );

  return (
    <Wrapper>
      {filteredProducts.map((el) => (
        <Card>
          <Product key={el.id} title={el.title} url={el.url} price={el.price} />
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
`;

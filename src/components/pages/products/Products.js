import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Items } from "../../store/Products";

const Products = () => {
  const { title, memory, price } = useSelector(
    (state) => state.filters.filters
  );
  const { sortType } = useSelector((state) => state.sorts);

  let filteredProducts = Items.filter(
    (product) =>
      (title.length === 0 ||
        title.some((filterWord) =>
          product.title.toLowerCase().includes(filterWord)
        )) &&
      (memory.length === 0 ||
        memory.some((filterWord) => product.title.includes(filterWord))) &&
      ((price.none === "none") ||
        (+product.price > +price.min && +product.price < +price.max))
  );

  if (sortType === "none") {
    filteredProducts = filteredProducts;
  }
  if (sortType === "ascending") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortType === "descending") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <Wrapper>
      {filteredProducts.map((el) => (
        <Card>
          <Product key={el.id} id={el.id} title={el.title} url={el.url} price={el.price} />
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

import React from "react";
import Product from "./Product";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../../store/Products";
import { addProduct, basketAnimated } from "../../store/slices/BasketSlice";
import FlyingProduct from "../../animation/FlyingProduct";

const Products = () => {
  const dispatch = useDispatch();
  const { title, memory, price } = useSelector(
    (state) => state.filters.filters
  );
  const { filterBySearch } = useSelector((state) => state.filters);
  const { sortType } = useSelector((state) => state.sorts);
  const { products } = useSelector((state) => state.basket);

  let filteredProducts = Items.filter(
    (product) =>
      (title.length === 0 ||
        title.some((filterWord) =>
          product.title.toLowerCase().includes(filterWord)
        )) &&
      (memory.length === 0 ||
        memory.some((filterWord) => product.title.includes(filterWord))) &&
      (price.none === "none" ||
        (+product.price > +price.min && +product.price < +price.max)) &&
      (filterBySearch === "" ||
        product.title.toLowerCase().includes(filterBySearch.toLowerCase()))
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

  const addProductToBasket = (e, product) => {
    const rect = e.target.getBoundingClientRect();

    const basket = document.getElementById("basket");
    const basketRect = basket.getBoundingClientRect();

    const startPosition = [rect.left, rect.top-280];
    const endPosition = [basketRect.left-20, basketRect.top-20];

    const obj = {
      ...product,
      startPosition,
      endPosition,
    };
    dispatch(addProduct(obj));
    setTimeout(() => {
      dispatch(basketAnimated(true));
    }, 600);
    setTimeout(() => {
      dispatch(basketAnimated(false));
    }, 800);
  };

  return (
    <Wrapper>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((el) => (
          <Card>
            <Product
              onAddToBasket={addProductToBasket}
              key={el.id}
              id={el.id}
              title={el.title}
              url={el.url}
              price={el.price}
            />
          </Card>
        ))
      ) : (
        <h1>Not found</h1>
      )}
      {products.map((product) => (
        <FlyingProduct
          key={product.id}
          url={product.url}
          startPosition={product.startPosition}
          endPosition={product.endPosition}
        />
      ))}
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & h1 {
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const Card = styled.div`
  padding: 5px;
`;

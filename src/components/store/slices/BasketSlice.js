import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketAnimated: false,
  products: [],
};

const BasketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const find = state.products.find((el) => {
        return el.id === product.id;
      });
      if (!find) {
        state.products.push(product);
      }
      if (find) {
        find.quantity += product.quantity
      }
    },
    changeQuantityProduct: (state, action) => {
      const { id, count } = action.payload;
      state.products.map((el) => {
        if (el.id === id) {
          el.quantity = count;
        }
      });
    },
    removeProduct: (state, action) => {
      const id = action.payload
      const filter = state.products.filter(el => el.id !== id)
      state.products = filter
    },
    basketAnimated: (state, action) => {
      state.basketAnimated = action.payload
    }
  },
});

export const { addProduct, changeQuantityProduct, removeProduct, basketAnimated } = BasketSlice.actions;
export default BasketSlice.reducer;

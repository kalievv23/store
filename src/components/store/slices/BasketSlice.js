import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const BasketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      console.log(product);
      const find = state.products.find((el) => {
        return el.id === product.id;
      });
      if (!find) {
        console.log("noFind");
        state.products.push(product);
      }
      if (find) {
        console.log("find");
        const newData = state.products.map((el) => {
          if (el.id === product.id) {
            el.quantity = el.quantity + product.quantity;
          }
          return el;
        });
        state.products = newData;
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
    }
  },
});

export const { addProduct, changeQuantityProduct, removeProduct } = BasketSlice.actions;
export default BasketSlice.reducer;

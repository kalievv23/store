import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../Products";

const initialState = {
  items: Items,
  filteredItems: Items,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByTitle: (state, action) => {
      console.log(action.payload);
      const filteredItems = state.items.filter((el) =>
        el.title.toLowerCase().includes(action.payload)
      );
      state.filteredItems = filteredItems;
    },
  },
});

export const { filterByTitle } = ProductSlice.actions;
export default ProductSlice.reducer;

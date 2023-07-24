import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    title: [],
    memory: [],
    price: {
      min: "",
      max: "",
    },
  },
};

const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterByTitle: (state, action) => {
      state.filters.title.push(action.payload);
    },
    removeFilterByTitle: (state, action) => {
      const filterRemoved = state.filters.title.filter(
        (el) => el !== action.payload
      );
      state.filters.title = filterRemoved;
    },
    filterByMemory: (state, action) => {
      state.filters.memory.push(action.payload);
    },
    removeFilterByMemory: (state, action) => {
      const filterRemoved = state.filters.memory.filter(
        (el) => el !== action.payload
      );
      state.filters.memory = filterRemoved;
    },
    filterByPrice: (state, action) => {
      const { min, max } = action.payload;
      if (min >= 1400 && 149000 >= min) {
        state.filters.price = {
          ...state.filters.price,
          min: min,
        };
      } else if (max <= 149000 && 1400 <= max) {
        state.filters.price = {
          ...state.filters.price,
          max: max,
        }
      }
    },
  },
});

export const {
  filterByTitle,
  removeFilterByTitle,
  filterByMemory,
  removeFilterByMemory,
  filterByPrice,
} = FilterSlice.actions;
export default FilterSlice.reducer;
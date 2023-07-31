import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    title: [],
    memory: [],
    price: {
      min: "",
      max: "",
      none: "none",
    },
  },
  filterBySearch: ""
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
      const price = state.filters.price;
      if (min >= 1400 && 149000 > min) {
        state.filters.price = {
          ...price,
          min: min,
          none: "",
        };
      } else if (max <= 149000 && 1400 < max && state.filters.price.min < max) {
        state.filters.price = {
          ...price,
          max: max,
          none: "",
        };
      }
      else if (
        price.min > price.max ||
        max === "" ||
        min === "" ||
        price.min === "" ||
        price.max === ""
      ) {
        state.filters.price = {
          ...price,
          none: "none",
        };
      }
    },
    filterBySearch: (state, action) => {
      state.filterBySearch = action.payload
    }
  },
});

export const {
  filterByTitle,
  removeFilterByTitle,
  filterByMemory,
  removeFilterByMemory,
  filterByPrice,
  filterBySearch,
} = FilterSlice.actions;
export default FilterSlice.reducer;

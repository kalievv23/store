import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: "none",
};

const SortSlice = createSlice({
  name: "sorts",
  initialState,
  reducers: {
    setAscendingSort: (state, action) => {
        state.sortType = action.payload
    },
    setDescendingSort: (state, action) => {
        state.sortType = action.payload
    },
  },
});

export const { setAscendingSort, setDescendingSort } = SortSlice.actions;
export default SortSlice.reducer;

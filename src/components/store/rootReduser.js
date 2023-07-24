import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/FilterSlice";
import SortSlice from "./slices/SortSlice";

const rootReduser = combineReducers({
    filters: ProductSlice,
    sorts: SortSlice,
});

export default rootReduser;

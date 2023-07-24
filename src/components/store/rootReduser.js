import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/FilterSlice";

const rootReduser = combineReducers({
    filters: ProductSlice
});

export default rootReduser;

import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";

const rootReduser = combineReducers({
    products: ProductSlice
});

export default rootReduser;

import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/FilterSlice";
import SortSlice from "./slices/SortSlice";
import BasketSlice from "./slices/BasketSlice";

const rootReduser = combineReducers({
    filters: ProductSlice,
    sorts: SortSlice,
    basket: BasketSlice,
});

export default rootReduser;

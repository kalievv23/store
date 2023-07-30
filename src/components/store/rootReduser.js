import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./slices/FilterSlice";
import SortSlice from "./slices/SortSlice";
import BasketSlice from "./slices/BasketSlice";
import UserSlice from "./slices/UserSlice";

const rootReduser = combineReducers({
    filters: ProductSlice,
    sorts: SortSlice,
    basket: BasketSlice,
    user: UserSlice
});

export default rootReduser;

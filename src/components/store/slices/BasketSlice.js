import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const BasketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload
            const find = state.products.find(el => el.id === product.id)
            if (find) {
                
            }
        }
    }
})

export const {addProduct} = BasketSlice.actions
export default BasketSlice.reducer

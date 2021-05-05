import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addproducttocart: (state, action) => {
			state.products.push(action.payload);
		},
	},
	extraReducers: {},
});

export const { addproducttocart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;

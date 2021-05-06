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
		removeByIDfromcart: (state, action) => {
			var index = state.products.map(x => {
				return x._id;
			  }).indexOf(action.payload.id);
			  
			  state.products.splice(index, 1);
			//   console.log(list);
		},
	},
	extraReducers: {},
});

export const { addproducttocart } = cartSlice.actions;
export const { removeByIDfromcart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;

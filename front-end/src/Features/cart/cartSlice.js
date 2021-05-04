import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'


const initialState = {
    products : [
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200},
        {name : "p1",price : 200}
    ]
    
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        
    
        addproducttocart : (state,action) => {
            state.products.push(action.payload)
        }

    },
    extraReducers : {
        
    }
  })


  export const {addtocart} = cartSlice.actions;

  export const selectProducts = (state) => state.cart.products
  

  export default cartSlice.reducer
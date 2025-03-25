import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    isModalOpen: false
}


const productDetailsSlice = createSlice({
    name: "productDetails", 
    initialState,
    reducers: {
        showProductDetails: (state,action)=> {
          state.id = action.id,
          state.isModalOpen = action.isModalOpen

        },
        closeProductDetails: (state,action)=> {
            state.id = action.id,
            state.isModalOpen = action.isModalOpen
  
          }

    }
    
})

export const {showProductDetails, closeProductDetails} = productDetailsSlice.actions
export default productDetailsSlice.reducer
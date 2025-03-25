import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchProduct", async ()=> {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
})

const initialState = {
    data: [],
    isLoading: false,
    error: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchProduct.pending, (state)=> {
            state.isLoading = true,
            state.error = "",
            state.data = []
        })

        builder.addCase(fetchProduct.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.error = "",
            state.data = action.payload
        })

        builder.addCase(fetchProduct.rejected, (state)=> {
            state.isLoading = false,
            state.error = "server error",
            state.data = []
        })
    }
})

export default productSlice.reducer
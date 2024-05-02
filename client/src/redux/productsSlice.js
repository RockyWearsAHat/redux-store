import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    updateProductsRedux: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateProductsRedux } = productsSlice.actions;
export default productsSlice.reducer;

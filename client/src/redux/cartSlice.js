import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCartRedux: (state, action) => {
      state.cart.push(action.payload.product);
    },
    addMultipleToCartRedux: (state, action) => {
      state.cart.push(...action.payload);
    },
    removeFromCartRedux: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    updateCartQuantityRedux: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          item.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return item;
      });
    },
    clearCartRedux: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCartRedux,
  addMultipleToCartRedux,
  removeFromCartRedux,
  updateCartQuantityRedux,
  clearCartRedux,
} = cartSlice.actions;
export default cartSlice.reducer;

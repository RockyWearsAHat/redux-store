import { createSlice } from "@reduxjs/toolkit";

export const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: {
    cartOpen: false,
  },
  reducers: {
    toggleCartRedux: (state) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const { toggleCartRedux } = toggleCartSlice.actions;
export default toggleCartSlice.reducer;

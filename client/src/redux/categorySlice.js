import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    currentCategory: "",
  },
  reducers: {
    updateCategoriesRedux: (state, action) => {
      state.categories = action.payload;
    },
    updateCurrentCategoryRedux: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { updateCategoriesRedux, updateCurrentCategoryRedux } =
  categorySlice.actions;
export default categorySlice.reducer;

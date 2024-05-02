import { configureStore } from "@reduxjs/toolkit";

import toggleCartReducer from "./toggleCartSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categorySlice";

export default configureStore({
  reducer: {
    toggleCart: toggleCartReducer,
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import toggleCartReducer from "./toggleCartSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    toggleCart: toggleCartReducer,
    cart: cartReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./features/categories/categorySlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/Modal/modalSlice"
export const store = configureStore({
  reducer: {
    cat: catReducer,
    product: productReducer,
    cart: cartReducer,
    modal:modalReducer,
  }
});

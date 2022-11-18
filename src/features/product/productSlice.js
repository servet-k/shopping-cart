import { createSlice } from "@reduxjs/toolkit";

const data = require("../../db.json");

//console.log(data.products);
const initialState = {
  products: data.products
};
//console.log(initialState);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCategory: (state, action) => {
      const catid = action.payload;
      state.products = state.products.filter(
        (item) => item.categoryId === catid
      );
    },
    reset: () => {
      return { ...initialState };
    }
  }
});

export default productSlice.reducer;
export const { getCategory, reset } = productSlice.actions;

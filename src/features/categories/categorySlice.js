import { createSlice } from "@reduxjs/toolkit";

const data = require("../../db.json");

const data_last=data.categories.map(obj=>{return {...obj,isSelected:false}})
const initialState = {
  categories: data_last,
  
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    select:(state,action)=>{
          
      state.categories.map(item=>{
      return  item.id===action.payload ? item.isSelected=true:item.isSelected=false
      })
        

    }
  }
});

export default categorySlice.reducer;
export const {select}=categorySlice.actions;
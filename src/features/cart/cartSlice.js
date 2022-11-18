
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const newItem = action.payload;
      //console.log(newItem);
      const index = state.cart.findIndex((x) => x.id === newItem.id);
      //console.log(index);
      index >= 0
        ? (state.cart[index].amount += 1)
        : (state.cart = [...state.cart, { ...newItem, amount: 1 }]);
    },
    removeItem:(state,action)=>{
      const itemId=action.payload;
      
      state.cart=state.cart.filter(item=>
        item.id !==itemId)
      },
    clearCart:(state,action)=>{
      state.cart=[];
    }
    }
  }
);

export default cartSlice.reducer;
export const { addtoCart,removeItem,clearCart } = cartSlice.actions;

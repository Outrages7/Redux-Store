import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    // ADD PRODUCT TO CART
    add(state, action) {
      state.push(action.payload);
    },

    // REMOVE PRODUCT FROM CART
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

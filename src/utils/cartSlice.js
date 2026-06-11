import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action", action);

      // action = { type: "cart/addItem", payload: "Pizza" };

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload,
      );
    },
    clearStore: (state, action) => {
      // state.items.length = 0
      return { items: [] }; // here both are valid
    },
  },
});

export const { addItem, removeItem, clearStore } = cartSlice.actions;

export default cartSlice.reducer;

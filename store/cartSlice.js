import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload * action.payload.quantity;
    },

    reset(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
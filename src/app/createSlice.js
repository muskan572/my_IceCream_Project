import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  products: [],
  totalItems: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalItems += 1;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    addProduct(state, action) {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalItems += 1;
      }
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },

    remove(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
    increment(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalItems = state.items.length;
    },
    incrementProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      state.totalItems = state.products.length;
    },
    decrement(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else {
          item.quantity -= 1;
        }
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalItems = state.items.length;
    },
    decrementProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        if (product.quantity === 1) {
          state.products = state.products.filter(
            (p) => p.id !== action.payload
          );
        } else {
          product.quantity -= 1;
        }
      }
      state.totalPrice = state.products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      state.totalItems = state.products.length;
    },
    clearCart: (state) => {
      state.items = [];
      state.products = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});
export const {
  add,
  remove,
  increment,
  decrement,
  clearCart,
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

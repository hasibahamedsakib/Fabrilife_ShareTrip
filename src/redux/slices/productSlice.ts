import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types/types.product";

// Define the initial state using that type
const initialState: TProduct[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload
      );

      if (existingProductIndex !== -1) {
        const product = state[existingProductIndex];
        if (product.quantity && product.quantity > 1) {
          // If the quantity is greater than 1, decrease the quantity
          product.quantity -= 1;
        } else {
          // If the quantity is 1, remove the product from the cart
          state.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;

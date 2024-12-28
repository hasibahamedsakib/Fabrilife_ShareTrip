import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/redux/service/api";
import productReducer from "@/redux/slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "@/types/types.product";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
      keepUnusedDataFor: 60 * 2,
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;
import { PRODUCTS_URL } from '../constants.js'
import { apiSlice } from './apiSlice.js'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // Note: We don't need an axios or fetch request. We do it all through Redux Toolkit.
      keepUnusedDataFor: 5, //seconds
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
    }),
    keepUnusedDataFor: 5,
  }),
})

// Need to use this convention: export const { use<what you called the query for the builder above>Query } = productsApiSlice
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice

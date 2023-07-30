import { PRODUCTS_URL, URL_CONSTANT } from '../constants.js'
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
  }),
})

// Need to use this convention: export const { use<what you called the query for the builder above>Query } = productsApiSlice
export const { useGetProductsQuery } = productsApiSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// We use createApi here, not createSlice, because this is async
import { BASE_URL } from '../constants.js'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
})

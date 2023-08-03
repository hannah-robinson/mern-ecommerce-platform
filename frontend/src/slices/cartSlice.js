import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] } // localStorage only holds strings. But it will be in the format of an object, so we use JSON.parse to parse it as an object.

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload

      const existItem = state.cartItems.find((x) => x._id === item._id)

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item] // state is immutable, so we don't just .push() we make a copy and add our new item
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )
      // Calculate shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

      // Calculate tax price
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2))

      // Calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)

      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

// Any functiion we create here we need to export as an action
export const { addToCart } = cartSlice.actions

// Can imported to another file as: import cartSliceReducer from './slices/cartSlice.js'
export default cartSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../assets/images/products/1.jpg";
import product2 from "../../assets/images/products/2.jpg";
import product3 from "../../assets/images/products/3.jpg";
import product4 from "../../assets/images/products/4.jpg";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      image: product1,
      brand: '',
      title: 'Baby fabric shoes',
      rating: 3,
      discount_price: 4.00,
      price: 5.00
    },
    {
      image: product2,
      brand: '',
      title: 'men\'s hoodies t-shirt',
      rating: 4,
      discount_price: 7.00,
      price: 17.00
    },
    {
      image: product3,
      brand: '',
      title: 'girls t-shirt',
      rating: 4,
      discount_price: 3.00,
      price: 5.00
    },
    {
      image: product4,
      brand: '',
      title: 'woolen hat for men',
      rating: 5,
      discount_price: 12.00,
      price: 15.00
    }
  ],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

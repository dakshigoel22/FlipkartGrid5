import { createSlice } from "@reduxjs/toolkit";
import jacket3 from "../../assets/images/products/jacket-3.jpg";

const favouriteReducer = createSlice({
  name: "favourites",
  initialState: [
    {
      image: jacket3,
      brand: 'Allen Solly',
      title: 'Mens Winter Leathers Jackets',
      rating: 3,
      discount_price: 48.00,
      price: 75.00
    }
  ],
  reducers: {
    addFavourite: (state, action) => {
      return [...state, action.payload];
    },
    removeFavourite: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
});

export const { addFavourite, removeFavourite } = favouriteReducer.actions;

export default favouriteReducer.reducer;

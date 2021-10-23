import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [
      { key: 246100, cityName: "Tepic", countryName: "Mexico" },
      { key: 215854, cityName: "Tel Aviv", countryName: "Israel" },
    ],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(fav => fav.key !== action.payload.key);
    },
    replaceFavorites: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, replaceFavorites } = slice.actions;

export const selectFavorites = state => state.favorites.items;
export default slice;

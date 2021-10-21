import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [
      { key: 246100, cityName: 'Tepic', countryName: 'Mexico' },
      { key: 215854, cityName: 'Tel Aviv', countryName: 'Israel' },
    ],
  },
  reducers: {
    addFavorite: (state, newFavorite) => {
      state.favorites.push(newFavorite);
    },
    removeFavorite: (state, favorite) => {
      state.favorites = state.favorites.filter(
        (_favorite) => _favorite !== favorite
      );
    },
    replaceFavorites: (state, newFavoritesArray) => {
      state.favorites = newFavoritesArray;
    },
  },
});

export const { addFavorite, removeFavorite, replaceFavorites } = slice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export default slice.reducer;

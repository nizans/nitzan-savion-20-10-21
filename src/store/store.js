import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from 'features/favorites/Favorites.slice';
import defaultLocationSlice from './defaultLocationSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    defaultLocation: defaultLocationSlice,
  },
});

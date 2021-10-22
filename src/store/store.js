import { configureStore } from '@reduxjs/toolkit';
import errorsSlice from 'features/notifications/notifications.slice';
import favoritesSlice from 'features/favorites/Favorites.slice';
import themeSlice from 'features/theme/theme.slice';
import defaultLocationSlice from '../features/home/Home.slice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    defaultLocation: defaultLocationSlice,
    errors: errorsSlice,
    theme: themeSlice,
  },
});

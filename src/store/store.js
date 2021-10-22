import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from 'features/favorites/Favorites.slice';
import notificationsSlice from 'features/notifications/notifications.slice';
import themeSlice from 'features/theme/theme.slice';
import defaultLocationSlice from '../features/home/Home.slice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    defaultLocation: defaultLocationSlice,
    notifications: notificationsSlice,
    theme: themeSlice,
  },
});

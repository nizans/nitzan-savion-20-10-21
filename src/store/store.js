import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "features/favorites/Favorites.slice";
import notificationsSlice from "features/notifications/notifications.slice";
import themeSlice from "features/theme/theme.slice";
import storage from "utils/storage";
import defaultLocationSlice from "../features/home/Home.slice";

export const store = configureStore({
  preloadedState: storage.get("state"),
  reducer: {
    favorites: favoritesSlice.reducer,
    defaultLocation: defaultLocationSlice.reducer,
    notifications: notificationsSlice.reducer,
    theme: themeSlice.reducer,
  },
});

store.subscribe(() => {
  storage.set("state", { theme: store.getState().theme, favorites: store.getState().favorites });
});

const { createSlice } = require("@reduxjs/toolkit");

export const slice = createSlice({
  name: "notifications",
  initialState: {
    items: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    dismissNotification: (state, action) => {
      state.items = state.items.filter(notif => notif.id !== action.payload.id);
    },
    clearNotifications: state => {
      state.items = [];
    },
  },
});

export const { addNotification, dismissNotification, clearNotifications } = slice.actions;

export const selectNotification = state => state.notifications.items;

export default slice;

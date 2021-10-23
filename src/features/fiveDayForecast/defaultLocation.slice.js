import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "defaultLocation",
  initialState: {
    location: { key: 215854, cityName: "Tel Aviv", countryName: "Israel" },
  },
  reducers: {
    setDefaultLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setDefaultLocation } = slice.actions;
export const selectDefaultLocation = state => state.defaultLocation.location;
export default slice;

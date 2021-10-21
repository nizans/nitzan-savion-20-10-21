import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'defaultLocation',
  initialState: {
    location: { key: 215854, cityName: 'Tel Aviv', countryName: 'Israel' },
  },
  reducers: {
    setLocation: (state, newLocation) => (state = newLocation),
  },
});

export const { setLocation } = slice.actions;
export const selectDefaultLocation = (state) => state.defaultLocation.location;
export default slice.reducer;

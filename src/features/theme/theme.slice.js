const { createSlice } = require("@reduxjs/toolkit");

export const slice = createSlice({
  name: "theme",
  initialState: {
    dark: true,
    celsius: true,
  },
  reducers: {
    toggleDarkMode: state => {
      state.dark = !state.dark;
    },
    toggleCelsius: state => {
      state.celsius = !state.celsius;
    },
    setTheme: (state, action) => {
      state = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleCelsius, setTheme } = slice.actions;
export const selectTheme = state => state.theme;
export default slice;

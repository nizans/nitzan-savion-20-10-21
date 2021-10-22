const { createSlice } = require('@reduxjs/toolkit');

export const slice = createSlice({
  name: 'errors',
  initialState: {
    errors: [],
  },
  reducers: {
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    dismissError: (state, action) => {
      state.errors = state.errors.filter((err) => err !== action.payload.errId);
    },
    clearErrors: (state) => {
      state = [];
    },
  },
});

export const { addError, dismissError } = slice.actions;

export const selectErrors = (state) => state.errors.errors;

export default slice.reducer;

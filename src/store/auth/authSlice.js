import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    clearInputs(state, action) {
      state.email = "";
      state.password = "";
      state.name = "";
      state.surname = "";
    },
    clearErrors(state, action) {
      state.emailError = "";
      state.passwordError = "";
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setSurname(state, action) {
      state.surname = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setPasswordError(state, action) {
      state.passwordError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const {
  clearInputs,
  clearErrors,
  setUser,
  setEmail,
  setPassword,
  setName,
  setSurname,
  setEmailError,
  setPasswordError,
} = authSlice.actions;

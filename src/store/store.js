import { configureStore } from "@reduxjs/toolkit";
import { pictureReducer } from "./pictures/picturesSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    pictures: pictureReducer,
    auth: authReducer,
  },
});

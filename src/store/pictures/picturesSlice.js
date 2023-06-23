import { createSlice } from "@reduxjs/toolkit";
import { getOnePicture } from "./picturesActions";

const initialState = {
  pictures: [],
  pictureDetails: {},
};

export const pictureSlice = createSlice({
  name: "@pictures",
  initialState,
  reducers: {
    setPicture(state, action) {
      state.pictures = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOnePicture.fulfilled, (state, action) => {
      state.pictureDetails = action.payload;
    });
  },
});

export const { setPicture } = pictureSlice.actions;

export const pictureReducer = pictureSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPicture } from "./picturesSlice";
import { API } from "../../helpers/consts";

export const getPictures = createAsyncThunk(
  "@pictures/getPictures",
  async (_, { dispatch }) => {
    const { data } = await axios(API);
    dispatch(setPicture(data));
  }
);

export const addPicture = createAsyncThunk(
  "@pictures/addPicture",
  async (picturesObj, { dispatch }) => {
    await axios.post(API, picturesObj);
    dispatch(getPictures());
  }
);

export const getOnePicture = createAsyncThunk(
  "@pictures/getOnePicture",
  async (id) => {
    const { data } = await axios(`${API}/${id}`);
    return data;
  }
);

export const editPictures = createAsyncThunk(
  "@pictureDetails/editPictures",
  async (editedPictures, { dispatch }) => {
    await axios.patch(`${API}/${editedPictures.id}`, editedPictures);
    dispatch(getPictures());
  }
);

export const deletePictures = createAsyncThunk(
  "@pictures/deletePictures",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getPictures());
  }
);

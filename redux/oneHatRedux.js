import { createSlice } from "@reduxjs/toolkit";

export const oneHatSlice = createSlice({
  name: "hat",
  initialState: {
    hats: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHatSuccess: (state, action) => {
      state.isFetching = false;
      state.hats = action.payload;
    },
    getHatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHatSuccess: (state, action) => {
      state.isFetching = false;
      state.hats.splice(
        state.hats.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateHatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateHatSuccess: (state, action) => {
      state.isFetching = false;
      state.hats[
        state.hats.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Hat;
    },
    updateHatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //CREATE
    addHatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHatSuccess: (state, action) => {
      state.isFetching = false;
      state.hats.push(action.payload);
    },
    addHatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearHats: (state) => {
      state.hats = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  getHatStart,
  getHatSuccess,
  getHatFailure,
  clearHats,
} = oneHatSlice.actions;

export default oneHatSlice.reducer;

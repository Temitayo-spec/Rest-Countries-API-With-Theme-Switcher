/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

// const modalSlice = createSlice({
//   name: "modal",
//   initialState: {
//     modalState: false,
//     modalStateTwo: false,
//   },
//   reducers: {
//     setModal: (state, action) => {
//       state.modalState = action.payload;
//     },
//     setModalTwo: (state, action) => {
//       state.modalStateTwo = action.payload;
//     },
//   },
// });

// export const selectModal = (state) => state.modal.modalState;
// export const selectModalTwo = (state) => state.modal.modalStateTwo;

// export const { setModal, setModalTwo } = modalSlice.actions;
// export default modalSlice.reducer;

const dataSlice = createSlice({
  name: "data",
  initialState: {
    theme: false,
    searchInput: "",
    restData: null,
    isLoading: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setRestData: (state, action) => {
      state.restData = action.payload;
    },
  },
});

export const selectTheme = (state) => state.data.theme;
export const selectSearchInput = (state) => state.data.searchInput;
export const selectRestData = (state) => state.data.restData;

export const { setTheme, setSearchInput, setRestData } = dataSlice.actions;
export default dataSlice.reducer;

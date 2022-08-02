import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep:0,
  generalInformation: {
    gender: '',
    age: 0,
  },
  knownSymptom: [{}],
};

export const identifier = createSlice({
  name: "identifier",
  initialState,
  reducers: {
    //adding user information
    general: (state, action) => {
      state.generalInformation = {...state.generalInformation, ...action.payload};
      state.activeStep += 1;
    },
    prevPage :(state, action) =>{
      state.activeStep -= 1;
    },
    known: (state, action) => {
      state.knownSymptom = action.payload;
    },
  },
});

export const { general, known, prevPage } = identifier.actions;
export default identifier.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "identifier",
  // generalInformation: localStorage.getItem('GENDER') ? JSON.parse(localStorage.getItem('GENDER')) : [{
  //     age: '',
  //     gender: ''
  // }],
  generalInformation: [{}],
  knownSymptom: [{}],
};

export const identifier = createSlice({
  name: "identifier",
  initialState,
  reducers: {
    general: (state, action) => {
      //Taking information from the corresponding components, pake spread biar sebelumnya ketarik juga ke present contoh: dispatch(disease(componensatu([...prevComp, stateygdiambil])))
      //Terus cek kondisi kalo memenuhi = demam ato = covid
      state.generalInformation = action.payload;
    },
    known: (state, action) => {
      state.knownSymptom = action.payload;
    },
  },
});

export const { general, known } = identifier.actions;
export default identifier.reducer;

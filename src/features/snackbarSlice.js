import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSnackOpen:false,
    option:'error',
    message:'',
}

const snackbar = createSlice ({
    name: "snackbar",
    initialState,
    reducers: {
        openSnack:(state, action) =>{ 
            state.isSnackOpen  = true; 
            state.option =  action.payload.option;
            state.message =  action.payload.message;
            console.log(state.isSnackOpen)
        },
        closeSnack:(state) =>{ 
            state.isSnackOpen  = false;  
        }
    }
})

export const { openSnack, closeSnack } = snackbar.actions;
export default snackbar.reducer;
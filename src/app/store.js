import { configureStore } from "@reduxjs/toolkit";
import identifier from "../features/identifierSlice";
import snackbar from "../features/snackbarSlice"

export const store = configureStore({
    reducer:{
        identifier,
        snackbar
    }
})

export default store
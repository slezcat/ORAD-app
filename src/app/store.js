import { configureStore } from "@reduxjs/toolkit";
import identifier from "../features/identifierSlice";


export const store = configureStore({
    reducer:{
        identifier: identifier
    }
})

export default store
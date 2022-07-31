import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage:[1],
    isAllowed: false,
}

const navigator = createSlice ({
    name: "navigator",
    initialState,
    reducers: {
        nextPage:(state, action) =>{
            state.isAllowed = true;
            state.currentPage = action.payload
            state.isAllowed = false;
        },
        prevPage:(state, action) =>{
            state.currentPage = action.payload
        }
    }
})

export const { nextPage, prevPage } = navigator.actions;
export default navigator.reducer;
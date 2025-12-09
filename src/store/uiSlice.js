import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        lightMode: (state) => {
            state.mode = "light";
        },

        darkMode: (state) => {
            state.mode = "dark";
        },
    }
})

export default uiSlice;

export const { lightMode, darkMode } = uiSlice.actions
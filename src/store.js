import { configureStore, createSlice } from "@reduxjs/toolkit";


let dark = createSlice({
    name : "darkMode",
    initialState : localStorage.getItem('darkMode') || 'light' ,
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const {toggleTheme} = dark.actions;
export default configureStore({
    reducer : {
        dark : dark.reducer
    }
});
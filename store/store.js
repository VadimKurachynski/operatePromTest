import {configureStore} from "@reduxjs/toolkit";
import {themesSlice} from "../features/themes/themesSlice";



export const store = configureStore({
    reducer: {
        themes:themesSlice,
    },
})
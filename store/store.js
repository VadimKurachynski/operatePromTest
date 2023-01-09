import {configureStore} from "@reduxjs/toolkit";
import {themesSlice} from "../features/tems/themesSlice";



export const store = configureStore({
    reducer: {
        themes:themesSlice,
    },
})
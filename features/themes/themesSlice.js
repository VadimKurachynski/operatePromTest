import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    themes: []
}

export const getThemes = createAsyncThunk('themes/getThemes', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get('http://localhost:5000/api/themesname',{withCredentials:true})
    dispatch(setThemes(res.data))
})

export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setThemes: (state, action) => {
            state.themes = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getThemes.pending, () => console.log('getThemes: pending'))
    //         .addCase(getThemes.fulfilled, () => console.log('getThemes: fulfilled'))
    //         .addCase(getThemes.rejected, () => console.log('getThemes: rejected'))
    //     //pending : Вызывается прямо перед выполнением запроса
    //     //fulfilled : Вызывается в том случае если запрос успешно выполнился
    //     //rejected : Вызывается в случае ошибки
    // }
})

export const {setThemes} = themesSlice.actions
export default themesSlice.reducer
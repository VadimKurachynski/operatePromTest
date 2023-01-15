import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    themes: [],
    questionsSelectTheme:[],
    selectTheme:0,
}

export const getTheme = createAsyncThunk('themes/getNumberTheme', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get(`http://localhost:5000/api/theme?numberTheme=${selectTheme}`,{withCredentials:true})
    dispatch(setThemes(res.data))
})

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
        setSelectTheme:(state,action)=> {
            state.selectTheme = action.payload
        },
        setQuestionsSelectTheme: (state, action) => {
            state.questionsSelectTheme = action.payload
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

export const {setThemes, setSelectTheme,setQuestionsSelectTheme} = themesSlice.actions
export default themesSlice.reducer
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useSelector} from "react-redux";

const initialState = {
    themes: [],
    questionsSelectTheme: [],
    selectTheme: 0,
    selectQuestions:[],
    mixQuestions: false,
    mixAnswers: true,
}

export const getThemeQuestions = createAsyncThunk('theme/getThemeQuestions', async (numberThemes, {
    rejectWithValue,
    dispatch
}) => {
    const res = await axios.get(`http://localhost:5000/api/theme?numberTheme=${numberThemes}`, {withCredentials: true})
    dispatch(setQuestionsSelectTheme(res.data))
    console.log(res.data)
})

export const getThemes = createAsyncThunk('themes/getThemes', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get('http://localhost:5000/api/themesname', {withCredentials: true})
    dispatch(setThemes(res.data))
})

export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setThemes: (state, action) => {
            state.themes = action.payload
        },
        setSelectTheme: (state, action) => {
            state.selectTheme = action.payload
        },
        setQuestionsSelectTheme: (state, action) => {
            state.questionsSelectTheme = action.payload
        },
        setQuestionsSelectThemeRandom: (state, action) => {
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

export const {setThemes, setSelectTheme, setQuestionsSelectTheme, setQuestionsSelectThemeRandom} = themesSlice.actions
export default themesSlice.reducer
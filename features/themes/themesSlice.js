import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    themes: [],
    questionsSelectTheme: [],
    selectTheme: 0,
    selectNameTheme: '',
    selectQuestionsRange: [],
    mixQuestions: false,
    mixAnswers: true,
    isLoader: false,
    noCorrect:0,
    correct:0,
    isAuth:false,
}


export const getThemeQuestions = createAsyncThunk(
    'theme/getThemeQuestions',
    async ({
               numberThemes,
               inputValueOne,
               inputValueTwo,
               disabledMixQuestions,
               disabledMixAnswers,
           }, {
               rejectWithValue,
               dispatch
           }) => {
        const res = await axios.get(`http://localhost:5000/api/theme?numberTheme=${numberThemes}`, {withCredentials: true})

        let massiv = [...res.data]
        massiv.sort((a, b) => a.nomvoprosa - b.nomvoprosa)//сортировка по номеру вопроса
        massiv = massiv.filter(a => a.nomvoprosa >= inputValueOne && a.nomvoprosa <= inputValueTwo)//фильтр по выбранному диапазону
        if (disabledMixQuestions) {
            massiv = massiv.sort(() => 0.5 - Math.random())
        }

        dispatch(setQuestionsSelectTheme(massiv))
        dispatch(setmixQuestions(disabledMixQuestions))
        dispatch(setmixAnswers(disabledMixAnswers))
        dispatch(setSelectQuestionsRange([inputValueOne, inputValueTwo]))

    })


export const getThemes = createAsyncThunk('themes/getThemes', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get('http://localhost:5000/api/themesname', {withCredentials: true})
    dispatch(setThemes(res.data))
})

export const postAunt = createAsyncThunk('aunt/postAunt', async ({username,password}, {rejectWithValue, dispatch}) => {
    const res = await axios.post(`http://localhost:5000/login`,{ username:username, password:password },{withCredentials: true})

            console.log(res);
            console.log(res.data);
        })





export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setThemes: (state, action) => {
            state.themes = action.payload
        },
        setSelectQuestionsRange: (state, action) => {
            state.selectQuestionsRange = action.payload
        },
        setSelectTheme: (state, action) => {
            state.selectTheme = action.payload
        },
        setmixQuestions: (state, action) => {
            state.mixQuestions = action.payload
        },
        setCorrectS: (state, action) => {
            state.correct = action.payload
        },
        setNoCorrectS: (state, action) => {
            state.noCorrect = action.payload
        },
        setmixAnswers: (state, action) => {
            state.mixAnswers = action.payload
        },
        setIsLoader: (state, action) => {
            state.isLoader = action.payload
        },
        setSelectNameTheme: (state, action) => {
            state.selectNameTheme = action.payload
        },
        setQuestionsSelectTheme: (state, action) => {
            state.questionsSelectTheme = action.payload
        },
        setQuestionsSelectThemeRandom: (state, action) => {
            state.questionsSelectTheme = action.payload
        },
        setThemeSetting: (state, action) => {
            const {inputValueOne, inputValueTwo, disabledMixQuestions, disabledMixAnswers} = action.payload;
            state.mixQuestions = disabledMixQuestions;
            state.mixAnswers = disabledMixAnswers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getThemeQuestions.pending, (state,action)=> {state.isLoader=true})
            .addCase(getThemeQuestions.fulfilled, (state,action)=> {state.isLoader=false})
            .addCase(getThemeQuestions.rejected, () => console.log('getThemeQuestions: rejected'))
            .addCase(getThemes.pending,  (state,action)=> {state.isLoader=true})
            .addCase(getThemes.fulfilled, (state,action)=> {state.isLoader=false})
            .addCase(getThemes.rejected, () => console.log('getThemes: rejected'))
    }
})

//pending : Вызывается прямо перед выполнением запроса
//fulfilled : Вызывается в том случае если запрос успешно выполнился
//rejected : Вызывается в случае ошибки


export const {
    setThemes,
    setSelectTheme,
    setQuestionsSelectTheme,
    setThemeSetting,
    setSelectNameTheme,
    setSelectQuestionsRange,
    setmixAnswers,
    setmixQuestions,
    setIsLoader,
    setQuestionsSelectThemeRandom,
    setCorrectS,
    setNoCorrectS
} = themesSlice.actions
export default themesSlice.reducer
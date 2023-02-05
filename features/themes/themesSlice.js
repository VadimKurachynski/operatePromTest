import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// const URL='http://test.operate.su:5001';
const URL='http://localhost:5001';

const initialState = {
    themes: [],
    questionsSelectTheme: [],
    selectTheme: 0,
    selectNameTheme: '',
    selectQuestionsRange: [],
    mixQuestions: false,
    mixAnswers: true,
    isLoader: false,
    noCorrect: 0,
    correct: 0,
    isAuth: false,
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
        const res = await axios.get(`${URL}/api/theme?numberTheme=${numberThemes}`, {withCredentials: true})
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
    const res = await axios.get(`${URL}/api/themesname`, {withCredentials: true})
    dispatch(setThemes(res.data))
})

export const getAuth = createAsyncThunk('themes/getThemes', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get(`${URL}/api/auth`, {withCredentials: true})
    const {Auth} = res.data;
    dispatch(setIsAuth(Auth));
})

export const postAuth = createAsyncThunk('aunt/postAunt', async ({username, password}, {rejectWithValue, dispatch}) => {
    const res = await axios.post(`${URL}/login`, {
        username: username,
        password: password
    }, {withCredentials: true})
    const {Auth} = res.data;
    if (Auth === 1) {
        dispatch(setIsAuth(true));
    }
})

export const postLogOut = createAsyncThunk('logOut/postLogOut', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.post(`${URL}/logout`, _, {withCredentials: true})
    const {Auth} = res.data;
    // console.log(`вы вышли ${Auth}`);
    if (Auth === 0) {
        dispatch(setIsAuth(false));
    }
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
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setThemeSetting: (state, action) => {
            const {inputValueOne, inputValueTwo, disabledMixQuestions, disabledMixAnswers} = action.payload;
            state.mixQuestions = disabledMixQuestions;
            state.mixAnswers = disabledMixAnswers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getThemeQuestions.pending, (state, action) => {
                state.isLoader = true
            })
            .addCase(getThemeQuestions.fulfilled, (state, action) => {
                state.isLoader = false
            })
            .addCase(getThemeQuestions.rejected, () => console.log('getThemeQuestions: rejected'))
            .addCase(getThemes.pending, (state, action) => {
                state.isLoader = true
            })
            .addCase(getThemes.fulfilled, (state, action) => {
                state.isLoader = false
            })
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
    setSelectNameTheme,
    setSelectQuestionsRange,
    setmixAnswers,
    setmixQuestions,
    setCorrectS,
    setNoCorrectS,
    setIsAuth
} = themesSlice.actions
export default themesSlice.reducer
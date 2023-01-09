import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    themes: [],
}


export const getThemes = createAsyncThunk('themes/getThemes', async (_, {rejectWithValue,dispatch}) => {
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(setPosts(res.data))
})


export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setThemes:(state,action)=>{
            state.themes=action.payload
        },

    },
    extraReducers:{
        [getThemes.fulfilled]:()=> console.log('getPosts: fullfield'),//вызывается тогда когда запрос прошел успешно
        [getThemes.pending]:()=> console.log('getPosts: pending'),//вызывается тогда когда вызывается getPosts, когда отправился запрос
        [getThemes.rejected]:()=> console.log('getPosts: rejected'),//если получили ошибку

    }
})
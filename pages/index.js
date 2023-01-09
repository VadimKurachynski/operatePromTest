import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {getThemes} from "../features/themes/themesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import s from "../styles/styleMe.module.css"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getThemes());
    },[]);



    const themes=useSelector((state)=>state.themes.themes)
    console.log(themes)


  return (
    <>
        <button onClick={()=> dispatch(getThemes())}>нажми</button>

     {themes.map((theme)=>(
         <span key={theme.themenumber}>
           <div className={s.title}>Тема {theme.themenumber<9?'0'+theme.themenumber:theme.themenumber}</div>
             <div className={s.title}>Название: {theme.themename}</div>
             <div className={s.title}>Кол-во вопросов: {theme.numberofquestions}</div>
         </span>  ))}


    </>

     )




}







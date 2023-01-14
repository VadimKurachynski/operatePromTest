import React, {useEffect, useState} from 'react';
import s from "../styles/test.module.css";
import Head from 'next/head'
import {Roboto} from '@next/font/google'
import Theme from "../component/IntegerStep/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getThemes} from "../features/themes/themesSlice";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


const PageThemes = () => {

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getThemes());
    },[]);

    const themes=useSelector((state)=>state.themes.themes)





    return (
        <>
            <div className={roboto.className}>
                <Head>
                    <title>Выбор темы</title>
                </Head>







                <div className={s.wrapper}>
                    <div className={s.header}>header</div>
                    <div className={s.content}>
                        <div className={s.container}>

                            {/*<Theme/>*/}

         {/*                   {themes.map((theme)=>(*/}
         {/*                       <span key={theme.themenumber}>*/}
         {/*  <div className={s.title}>Тема {theme.themenumber<9?'0'+theme.themenumber:theme.themenumber}</div>*/}
         {/*    <div className={s.title}>Название: {theme.themename}</div>*/}
         {/*    <div className={s.title}>Кол-во вопросов: {theme.numberofquestions}</div>*/}
         {/*</span>  ))}*/}

                            {themes.map((theme)=>(
                                <Theme theme={theme}/>
                            ))}





                            {/*<div style={{display: false ? "block" : "none"}}><Theme/></div>*/}

                        </div>
                    </div>
                    <div className={s.footer}>footer</div>
                </div>
            </div>
        </>
    )
}
export default PageThemes;
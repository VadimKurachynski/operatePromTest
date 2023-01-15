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

    const {themes,selectTheme}=useSelector((state)=>state.themes)




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

                            {themes.map((theme)=>(
                                 <div key={theme.themenumber} style={{display: (theme.themenumber==selectTheme||selectTheme==0) ? "block" : "none"}}> <Theme theme={theme}/></div>
                            ))}


                        </div>
                    </div>
                    <div className={s.footer}>footer</div>
                </div>
            </div>
        </>
    )
}
export default PageThemes;
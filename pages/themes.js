import React, {useEffect, useState} from 'react';
import s from "../styles/themes.module.css";
import {Roboto} from '@next/font/google'
import Theme from "../component/theme/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getThemes} from "../features/themes/themesSlice";
import HeadTest from "../component/head/HeadThemes";
import HeaderTest from "../component/header/Header";
import FooterTest from "../component/footer/Footer";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


const PageThemes = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getThemes());
    }, []);

    const {themes, selectTheme} = useSelector((state) => state.themes)


    return (
        <>

            {themes.map((theme) => (
                <div key={theme.themenumber}
                     style={{display: (theme.themenumber === selectTheme || selectTheme === 0) ? "block" : "none"}}>
                    <Theme theme={theme}/>
                </div>))}

        </>
    )
}
export default PageThemes;
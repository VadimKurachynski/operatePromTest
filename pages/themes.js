import React, {useEffect, useState} from 'react';
import s from "../component/theme/themes.module.css";
import Theme from "../component/theme/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getThemes} from "../features/themes/themesSlice";
import Preloader from "../component/preloader/Preloader";


const PageThemes = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getThemes());
    }, []);


    const {themes, selectTheme, isLoader} = useSelector((state) => state.themes)


    return (
        <>
            {
                    themes.map((theme) => (
                        <div key={theme.themenumber}
                             style={{display: (theme.themenumber === selectTheme || selectTheme === 0) ? "block" : "none"}}>
                            <Theme theme={theme}/>
                        </div>))
            }


        </>
    )
}
export default PageThemes;
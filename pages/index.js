import React, {useEffect} from 'react';
import s from "../component/theme/themes.module.css";
import Theme from "../component/theme/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, getThemes} from "../features/themes/themesSlice";
import Head from "next/head";

const PageThemes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getThemes());
        dispatch(getAuth());
    }, []);
    const {themes, selectTheme} = useSelector((state) => state.themes)
    return (
        <>
            <Head>
                <title>Выбор темы</title>
            </Head>
            <div
                className={s.head}>{(selectTheme === 0) ? 'Выберите тему для тренировки' : 'Выберите нужные настройки'}</div>
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
import React, {useEffect, useState} from "react";
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";
import s from "../component/theme/themes.module.css";
import Preloader from "../component/preloader/Preloader";
import Head from "next/head";


const PageTest = () => {
    const {
        selectTheme,
        questionsSelectTheme,
        selectNameTheme,
        selectQuestionsRange,
        mixQuestions,
        mixAnswers,
        isLoader,
    } = useSelector((state) => state.themes)



    return (
        <>
            <Head>
                <title>Тест</title>
            </Head>


            {

                isLoader ? <div className={s.override}><Preloader/></div>
                    :

                questionsSelectTheme.length !== 0 &&
                <TestAnswer selectTheme={selectTheme} questionsSelectTheme={questionsSelectTheme}
                            selectNameTheme={selectNameTheme} selectQuestionsRange={selectQuestionsRange}
                            mixQuestions={mixQuestions} mixAnswers={mixAnswers}
                />



            }


        </>
    )

}


export default PageTest;



import React, {useEffect, useState} from "react";
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";
import s from "../component/theme/themes.module.css";
import Preloader from "../component/preloader/Preloader";


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



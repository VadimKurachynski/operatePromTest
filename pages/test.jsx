import React, {useState} from "react";
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";


const PageTest = () => {
        const {selectTheme,questionsSelectTheme,selectNameTheme,selectQuestionsRange,mixQuestions,mixAnswers} = useSelector((state) => state.themes)



    return (
        <>
              <TestAnswer selectTheme={selectTheme} questionsSelectTheme={questionsSelectTheme}
                selectNameTheme={selectNameTheme} selectQuestionsRange={selectQuestionsRange}
                mixQuestions={mixQuestions} mixAnswers={mixAnswers}
                />



        </>
    )
}


export default PageTest;



import React from "react";
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";


const PageTest = () => {
    console.log("я на странице pageTest")
    const {selectTheme,questionsSelectTheme,selectNameTheme,selectQuestionsRange} = useSelector((state) => state.themes)


    return (
        <>
            <TestAnswer selectTheme={selectTheme} questionsSelectTheme={questionsSelectTheme}
                        selectNameTheme={selectNameTheme} selectQuestionsRange={selectQuestionsRange}
            />
        </>
    )
}


export default PageTest;



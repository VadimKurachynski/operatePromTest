import {useSelector} from "react-redux";
import React from "react";
import ResultTable from "../component/resultTable/ResultTable";

const PageFinish = () => {
    const {
        selectTheme,
        questionsSelectTheme,
        selectNameTheme,
        selectQuestionsRange,
        isLoader,
        correct,
        noCorrect
    } = useSelector((state) => state.themes)
    const lengthQuestions=questionsSelectTheme.length;
    return (
        <>
    <div>Вы закончили тест</div>

            <ResultTable
                lengthQuestions={lengthQuestions}
                correct={correct}
                noCorrect={noCorrect}
            />




        </>
    )

}


export default PageFinish;



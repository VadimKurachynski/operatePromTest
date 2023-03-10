import {useDispatch, useSelector} from "react-redux";
import React from "react";
import ResultTable from "../component/resultTable/ResultTable";
import s from "../component/theme/themes.module.css";
import {Button} from "antd";
import {setCorrectS, setNoCorrectS} from "../features/themes/themesSlice";
import {useRouter} from "next/router";
import Head from "next/head";

const PageFinish = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const {
        selectTheme,
        questionsSelectTheme,
        selectNameTheme,
        selectQuestionsRange,
        correct,
        noCorrect
    } = useSelector((state) => state.themes)
    const lengthQuestions = questionsSelectTheme.length;
    const startThemes = () => {
        router.push('/')
        dispatch(setCorrectS(0));
        dispatch(setNoCorrectS(0));
    }
    return (
        <>
            <Head>
                <title>Результаты</title>
            </Head>
            {
                (selectTheme === 0) ? <div></div>
                    :
                    <>
                        <div style={{textAlign: "center", margin: "20px"}}>Вы закончили тест</div>
                        <div style={{textAlign: "center", fontWeight: "600"}}>Тема{selectTheme}</div>
                        <div style={{textAlign: "center"}}>{selectNameTheme}</div>
                        <div style={{textAlign: "center", margin: "10px"}}>диапазон пройденных вопросов из
                            темы:{selectQuestionsRange[0]}--{selectQuestionsRange[1]}</div>
                        <ResultTable
                            lengthQuestions={lengthQuestions}
                            correct={correct}
                            noCorrect={noCorrect}
                        />
                        <div className={s.mainButton}><Button type="primary" onClick={startThemes}>ПЕРЕЙТИ К ВЫБОРУ
                            ТЕМЫ</Button></div>

                    </>
            }
        </>

    )

}


export default PageFinish;



import s from "../resultTable/resultTable.module.css";
import {Progress} from "antd";
import React from "react";


const ResultTable=(props)=>{

    const lengthQuestions = props.lengthQuestions;
    const correct=props.correct
   const noCorrect=props.noCorrect
    const p1 = (100 * (correct + noCorrect) / lengthQuestions).toFixed(0);
    const p2 = (100 * (correct) / lengthQuestions).toFixed(0);
    const p3 = (100 * (noCorrect) / lengthQuestions).toFixed(0);

    return(
        <>

            <div className={s.table}>
                <div className={s.column}>
                    <div className={s.tableText}>кол-во пройденных вопросов</div>
                    <div className={s.tableS1}>{noCorrect + correct}</div>
                    <div className={s.circular}>
                        <Progress type="circle" percent={p1} strokeColor="blue" width={50}/>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.tableText}>кол-во правильных ответов</div>
                    <div className={s.tableS2}>{correct}</div>
                    <div className={s.circular}>
                        <Progress type="circle" percent={p2} strokeColor="green" width={50}/>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.tableText}>кол-во ошибок</div>
                    <div className={s.tableS3}>{noCorrect}</div>
                    <div className={s.circular}>
                        <Progress type="circle" percent={p3} strokeColor="red" width={50}/>
                    </div>
                </div>
            </div>









        </>




    )



}


export default ResultTable;
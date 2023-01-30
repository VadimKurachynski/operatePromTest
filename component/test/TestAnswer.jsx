import s from "../test/testAnswer.module.css";
import React, {useEffect, useState} from 'react';
import {Radio, Space, Progress} from 'antd';
import {Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import cn from 'classnames';
import ResultTable from "../resultTable/ResultTable";
import {useDispatch} from "react-redux";
import {getThemes, setCorrectS, setNoCorrectS} from "../../features/themes/themesSlice";

import {useRouter} from "next/router";
import Image from "next/image";

const {Panel} = Collapse;

const TestAnswer = (props) => {
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        // setCorrect(0);
        // setNoCorrect(0);
        // dispatch(setCorrectS(0));
        // dispatch(setNoCorrectS(0));
    }, []);


    const lengthQuestions = props.questionsSelectTheme.length;
    const selectTheme = props.selectTheme;
    const selectNameTheme = props.selectNameTheme;
    const selectQuestionsRange = props.selectQuestionsRange;
    const mixQuestions = props.mixQuestions;
    const [num, setNum] = useState(1);
    //-----------------------------------------------------
    let {
        vopros: question = "",
        otvet1: answer1 = "",
        otvet2: answer2 = "",
        otvet3: answer3 = "",
        pravotvet: correctAnswerString = "",
        nompravotveta: correctAnswer = 0,
        podskazka: hint = "",
        picture: picture = "",
        picturewidth: pictureW = 0,
        pictureheight: pictureH = 0,
    } = props.questionsSelectTheme[num - 1]
    //-------------------------------------------------
    const [valueRadio, setValueRadio] = useState(0);
    const [clickButton, setClickButton] = useState(false);
    const [disabledRadio, setDisabledRadio] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [noCorrect, setNoCorrect] = useState(0);
//-------------------------------------------------------
    const onChangeRadio = (e) => {
        setValueRadio(e.target.value);
        setClickButton(true)
        setDisabledRadio(true);
        (e.target.value === correctAnswer) ? setCorrect(correct + 1)
            : setNoCorrect(noCorrect + 1)
    };


    const onChangePanel = (key) => {
        console.log(key);
    };
    const startNew = () => {
        if (num === lengthQuestions) {
            dispatch(setCorrectS(correct));
            dispatch(setNoCorrectS(noCorrect));
            router.push('/finish')
        } else {
            setNum(num + 1);//следующий вопрос
            setValueRadio(0);
            setClickButton(false)
            setDisabledRadio(false);
        }
    };

    const data = [1, 2, 3];
    let questions = [answer1, answer2, answer3];
    const Answers = data.map((x) =>
        <div key={x} className={cn(
            s.radio,
            correctAnswer === x && valueRadio === x && s.radioAnswerOK,
            correctAnswer !== x && valueRadio === x && s.radioAnswerNO,
            correctAnswer === x && valueRadio !== x && valueRadio !== 0 && s.radioAnswerOK,
        )}>
            <Radio value={x} disabled={disabledRadio}> <span className={s.radioText}> {questions[x - 1]}</span></Radio>
        </div>
    );

    // picture="images__1.jpg";
    // pictureW=200;
    // pictureH=200;

    return (
        <>
            <div className={s.body}>


                <Collapse onChangePanel={onChangePanel}>
                    <Panel header={`Тема ${selectTheme} -- Вопрос ${num} из ${lengthQuestions}`} key="1">
                        <div className={s.nameTheme}>Тема {selectTheme} - {selectNameTheme}
                        </div>
                        <div style={{fontStyle: "italic", textAlign: "center", fontSize: "16px"}}>
                            {`(Вопросы из диапазона: ${selectQuestionsRange[0]}--${selectQuestionsRange[1]}, ${mixQuestions ? "перемешанные" : "не перемешанные"})`}
                        </div>
                        <div className={s.boxCountQuestions}>
                            <div>Вопрос № {num}</div>
                            <div>Вопросов: {lengthQuestions}</div>
                        </div>


                        <ResultTable
                            lengthQuestions={lengthQuestions}
                            correct={correct}
                            noCorrect={noCorrect}
                        />


                    </Panel>
                </Collapse>


                <div className={s.question}>
                    <div className={s.questionAva}><QuestionCircleOutlined style={{fontSize: '25px'}}/></div>
                    <div className={s.questionText}> {question}</div>


                    <div className={s.imageBox}
                         style={String(picture) !== "null" ? {display: 'block'} : {display: 'none'}}>

                        {(String(picture) !== "null") ?
                            <Image
                                src={`/image/${picture}`}
                                alt="Picture"
                                width={+pictureW / 2}
                                height={+pictureH / 2}
                            />
                            :
                            ""
                        }

                    </div>
                </div>

                <div className={s.boxRadio}>
                    <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                        <Space direction="vertical">
                            {Answers}
                        </Space>
                    </Radio.Group>
                </div>


                <div className={s.buttonNext} style={clickButton ? {display: 'block'} : {display: 'none'}}><Button
                    onClick={startNew}
                    type="primary"><span
                    className={s.buttonNextText}>{(num === lengthQuestions) ? 'ЗАКОНЧИТЬ ТЕСТ' : 'СЛЕДУЮЩИЙ ВОПРОС'}</span></Button>
                </div>
                <div className={s.blokCorrectAnswer}>
                    <div>
                    </div>
                    <Collapse onChangePanel={onChangePanel}
                              style={clickButton ? {display: 'block'} : {display: 'none'}}>
                        <Panel header="Литература" key="1">
                            <div><span className={s.latin}> Правильный ответ:</span></div>
                            {correctAnswerString}
                            <br/>
                            <br/>
                            <div><span className={s.latin}> Литература:</span></div>
                            <div> {hint}
                            </div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </>
    )
}
export default TestAnswer;
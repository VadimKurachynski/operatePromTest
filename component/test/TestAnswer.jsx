import s from "../test/testAnswer.module.css";
import React, {useState} from 'react';
import {Radio, Space, Progress} from 'antd';
import {Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import Image from "next/image";
import cn from 'classnames';
import {router} from "next/client";
import ResultTable from "../resultTable/ResultTable";
import {setCorrect, setmixQuestions, setNoCorrect} from "../../features/themes/themesSlice";
import {useDispatch} from "react-redux";

const {Panel} = Collapse;

const TestAnswer = (props) => {
    const dispatch = useDispatch()
    const lengthQuestions = props.questionsSelectTheme.length;
    const selectTheme = props.selectTheme;
    const selectNameTheme = props.selectNameTheme;
    const selectQuestionsRange = props.selectQuestionsRange;
    const mixQuestions = props.mixQuestions;
    const [num, setNum] = useState(1);
    //-----------------------------------------------------
    const {
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
    } = props.questionsSelectTheme[num-1]
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
            // (e.target.value === correctAnswer) ? dispatch(setCorrect(1))
            //     : dispatch(setNoCorrect(1))

                (e.target.value === correctAnswer) ? setCorrect(correct+1)
                    : setNoCorrect(setNoCorrect+1)


    };





    const onChangePanel = (key) => {
        console.log(key);
    };
    const startNew = () => {
        if(num===lengthQuestions){ router.push('/finish')}else {

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


    return (
        <>
            <div className={s.body}>




                <Collapse onChangePanel={onChangePanel}>
                    <Panel header={`Тема ${selectTheme} -- Вопрос ${num} из ${lengthQuestions}`} key="1">
                        <div className={s.nameTheme}>Тема {selectTheme} - {selectNameTheme}
                        </div>
                        <div style={{fontStyle: "italic", textAlign: "center"}}>
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
                    <div className={s.questionText}><QuestionCircleOutlined
                        style={{fontSize: '25px'}}/><br/> {question}
                    </div>

                    <div className={s.imageBox}
                         style={String(picture) !== "null" ? {display: 'block'} : {display: 'none'}}>

                        {/*<Image*/}
                        {picture + pictureW + pictureH}
                        {/*src={picture}*/}
                        {/*alt="Picture"*/}
                        {/*width={pictureW && pictureW}*/}
                        {/*height={pictureH && pictureH}*/}
                        {/*/>*/}
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
                    className={s.buttonNextText}>СЛЕДУЮЩИЙ ВОПРОС</span></Button></div>
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
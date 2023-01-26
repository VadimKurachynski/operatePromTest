import s from "../test/testAnswer.module.css";
import React, {useState} from 'react';
import {Radio, Space, Progress} from 'antd';
import {Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import Image from "next/image";
import cn from 'classnames';
const {Panel} = Collapse;


const TestAnswer = (props) => {
    const lengthQuestions = props.questionsSelectTheme.length;
    const selectTheme = props.selectTheme;
    const selectNameTheme=props.selectNameTheme;
    const questionsSelectTheme = props.questionsSelectTheme;
    const selectQuestionsRange=props.selectQuestionsRange;
    const mixQuestions=props.mixQuestions;
    const [valueRadio, setValueRadio] = useState(0);
    const [num, setNum] = useState(1);
    const [clickButton, setClickButton] = useState(false);
    const [disabledRadio, setDisabledRadio] = useState(false);
    const [correct, setCorrect]=useState(0);
    const [noCorrect, setNoCorrect]=useState(0);

    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValueRadio(e.target.value);
        setClickButton(true)
        setDisabledRadio(true);
        (e.target.value===correctAnswer)?setCorrect(correct+1):setNoCorrect(noCorrect+1)
    };
    const p1=(100*(correct+noCorrect)/lengthQuestions).toFixed(0);
    const p2=(100*(correct)/lengthQuestions).toFixed(0);
    const p3=(100*(noCorrect)/lengthQuestions).toFixed(0);
    debugger
    const onChangePanel = (key) => {
        console.log(key);
    };
    const t = `Тема ${selectTheme} -- Вопрос ${num} из ${lengthQuestions}`;
    const startNew = () => {
        setNum(num + 1);//следующий вопрос
        setValueRadio(0);
        setClickButton(false)
        setDisabledRadio(false);
    };

    const correctAnswer = questionsSelectTheme[num].nompravotveta;
    let questions=[props.questionsSelectTheme[num].otvet1,
        props.questionsSelectTheme[num].otvet2,
        props.questionsSelectTheme[num].otvet3]
    const data=[1,2,3];
    const Answers = data.map((x) =>
        <div key={x} className={cn(
            s.radio,
            correctAnswer === x && valueRadio === x && s.radioAnswerOK,
            correctAnswer !== x && valueRadio === x && s.radioAnswerNO,
            correctAnswer === x && valueRadio !== x && valueRadio !== 0 && s.radioAnswerOK,
        )}>
            <Radio value={x} disabled={disabledRadio}> <span className={s.radioText}> {questions[x-1]}</span></Radio>
        </div>
    );



    return (
        <>
            <div className={s.body}>
                <Collapse onChangePanel={onChangePanel}>
                    <Panel header={t} key="1">

                        <div className={s.nameTheme}>Тема {selectTheme} - {selectNameTheme}
                        </div>
                        <div style={{fontStyle:"italic", textAlign:"center"}}>
                            {`(Вопросы из диапазона: ${selectQuestionsRange[0]}--${selectQuestionsRange[1]}, ${mixQuestions?"перемешанные":"не перемешанные"})`}

                        </div>
                        <div className={s.boxCountQuestions}>
                            <div>Вопрос № {num}</div>
                            <div>Вопросов: {lengthQuestions}</div>
                        </div>


                        <div className={s.table}>


                            <div className={s.column}>
                                <div className={s.tableText}>кол-во пройденных вопросов</div>
                                <div className={s.tableS1}>{noCorrect+correct}</div>
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

                    </Panel>
                </Collapse>


                <div className={s.question}>

                    <div className={s.questionText}><QuestionCircleOutlined
                        style={{fontSize: '25px'}}/><br/> {questionsSelectTheme[num].vopros}
                    </div>

                    <div className={s.imageBox}>
                        <Image
                            src="/images__1.jpg"

                            alt="Picture"
                            width={100}
                            height={100}
                        />
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
                            {questionsSelectTheme[num].pravotvet}
                            <br/>
                            <br/>
                            <div><span className={s.latin}> Литература:</span></div>
                            <div> {questionsSelectTheme[num].podskazka}
                            </div>
                        </Panel>
                    </Collapse>


                </div>

            </div>


        </>
    )
}
export default TestAnswer;
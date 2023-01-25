import s from "../test/testAnswer.module.css";
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { Radio, Space, Progress, Tooltip} from 'antd';
import {Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import Image from "next/image";
import {getThemeQuestions} from "../../features/themes/themesSlice";

const {Panel} = Collapse;


const TestAnswer = (props) => {
    const lengthQuestions = props.questionsSelectTheme.length;
    const selectTheme = props.selectTheme;
    const questionsSelectTheme = props.questionsSelectTheme;
    const [value, setValue] = useState(1);
    const [num, setNum] = useState(1);
    const [checkedRadio, setCheckedRadio] = useState(0);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        setCheckedRadio(checkedRadio+1);
    };
    const onChangePanel = (key) => {
        console.log(key);
    };

     const t=`Тема ${selectTheme} -- Вопрос ${num} из ${lengthQuestions}`;
    const startNew=()=>{
        setNum(num + 1);
        setCheckedRadio(checkedRadio+1);
        console.log(checkedRadio)
        };



    return (
        <>
            <div className={s.body}>
                <Collapse onChangePanel={onChangePanel}>
                    <Panel header={t} key="1">

                        <div className={s.nameTheme}>Тема {selectTheme} - Председатель (заместитель председателя) комиссии для
                            проверки
                            знаний по вопросам промышленной
                            безопасности, созданной в субъекте промышленной безопасности
                        </div>
                        <div className={s.boxCountQuestions}>
                            <div>Вопрос № {num}</div>
                            <div>Вопросов: {lengthQuestions}</div>
                        </div>


                        <div className={s.table}>


                            <div className={s.column}>
                                <div className={s.tableText}>кол-во пройденных вопросов</div>
                                <div className={s.tableS1}>60</div>
                                <div className={s.circular}>
                                    <Progress type="circle" percent={45} strokeColor="blue" width={50}/>
                                </div>
                            </div>

                            <div className={s.column}>
                                <div className={s.tableText}>кол-во правильных ответов</div>
                                <div className={s.tableS2}>40</div>
                                <div className={s.circular}>
                                    <Progress type="circle" percent={75} strokeColor="green" width={50}/>
                                </div>
                            </div>
                            <div className={s.column}>
                                <div className={s.tableText}>кол-во ошибок</div>
                                <div className={s.tableS3}>20</div>
                                <div className={s.circular}>
                                    <Progress type="circle" percent={10} strokeColor="red" width={50}/>
                                </div>
                            </div>
                        </div>

                    </Panel>
                </Collapse>


                <div className={s.question}>

                    <div className={s.questionText}><QuestionCircleOutlined style={{fontSize: '25px'}}/><br/> {questionsSelectTheme[num].vopros}
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
                    <Radio.Group   onChange={onChange} value={2}>
                        <Space direction="vertical">
                            <div className={s.radio}><Radio  value={1} checked={checkedRadio === 0}> <span className={s.radioText}> {questionsSelectTheme[num].otvet1}</span></Radio>
                            </div>
                            <div className={s.radio}><Radio  value={2} checked="true"> <span className={s.radioText}>{questionsSelectTheme[num].otvet2}</span></Radio></div>
                            <div className={s.radio}><Radio  value={3} > <span className={s.radioText}>{questionsSelectTheme[num].otvet3}</span></Radio>
                            </div>
                        </Space>
                    </Radio.Group>
                </div>


                <div className={s.buttonNext}><Button onClick={startNew}
                type="primary"><span
                    className={s.buttonNextText}>СЛЕДУЮЩИЙ ВОПРОС</span></Button></div>
                <div className={s.blokCorrectAnswer}>



                    <Collapse onChangePanel={onChangePanel}>
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

            <Radio.Group label="Options" defaultValue="A">
                <Radio value="A">Option A</Radio>
                <Radio value="B">Option B</Radio>
                <Radio value="C">Option C</Radio>
                <Radio value="D">Option D</Radio>
            </Radio.Group>



        </>
    )
}
export default TestAnswer;
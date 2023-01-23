import s from "../test/testAnswer.module.css";
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Radio, Space, Progress, Tooltip} from 'antd';
import {Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import Image from "next/image";
import HeadTest from "../head/HeadThemes";

const {Panel} = Collapse;


const TestAnswer = () => {
    const {selectTheme, questionsSelectTheme} = useSelector((state) => state.themes)

    const [value, setValue] = useState(1);
    const [number, setNumber] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChangePanel = (key) => {
        console.log(key);
    };



    const t=`Тема -- Вопрос 1 из 80`;
    return (
        <>
            <div className={s.body}>

                <Collapse onChangePanel={onChangePanel}>
                    <Panel header={t} key="1">

                        <div className={s.nameTheme}>Тема 01 - Председатель (заместитель председателя) комиссии для
                            проверки
                            знаний по вопросам промышленной
                            безопасности, созданной в субъекте промышленной безопасности
                        </div>
                        <div className={s.boxCountQuestions}>
                            <div>Вопрос № 1</div>
                            <div>Вопросов: 80</div>
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

                    <div className={s.questionText}><QuestionCircleOutlined style={{fontSize: '25px'}}/><br/> Какими
                        полномочиями наделен работник службы промышленной
                        безопасности
                        (инженер по промышленной безопасности,
                        ответственное лицо, на которое возложены соответствующие обязанности)?
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
                    <Radio.Group style={{}} onChange={onChange}>
                        <Space direction="vertical">
                            <div className={s.radio}><Radio value={1}><span className={s.radioText}> отметка (ставится штамп) «зарегистрировано»</span></Radio>
                            </div>
                            <div className={s.radio}><Radio value={2}><span className={s.radioText}>Делается отметка (ставится штамп) о регистрации потенциально
                опасного объекта с указанием регистрирующего органа, регистрационного номера,
                даты регистрации и фамилии, собственного имени, отчества (если таковое имеется)
                должностного лица регистрирующего органа</span></Radio></div>
                            <div className={s.radio}><Radio value={3}><span className={s.radioText}>Регистрационный номер потенциально опасного объекта</span></Radio>
                            </div>
                        </Space>
                    </Radio.Group>
                </div>


                <div className={s.buttonNext}><Button type="primary"><span
                    className={s.buttonNextText}>СЛЕДУЮЩИЙ ВОПРОС</span></Button></div>

                <div className={s.blokCorrectAnswer}>
                    {/*<hr className={s.hr}/>*/}


                    <Collapse onChangePanel={onChangePanel}>
                        <Panel header="Литература" key="1">
                            <div><span className={s.latin}> Правильный ответ:</span></div>
                            Проводить анализ состояния промышленной безопасности, соблюдения требований промышленной
                            безопасности, рассматривать документы по вопросам промышленной безопасности
                            <br/>
                            <br/>
                            <div><span className={s.latin}> Литература:</span></div>
                            <div>Закон Республики Беларусь от 5 января 2016 г. № 354-З «О промышленной безопасности».
                                статья 30
                            </div>
                        </Panel>
                    </Collapse>


                </div>

            </div>
        </>
    )
}
export default TestAnswer;
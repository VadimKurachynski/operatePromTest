import {InputNumber,Slider, Switch, Button, Space } from "antd";
import React, {useState} from "react";
import s from "../../styles/test.module.css";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const Theme = () => {
    const [inputValueOne, setInputValueOne] = useState(1);
    const [inputValueTwo, setInputValueTwo] = useState(100);
    const [disabled, setDisabled] = useState(false);

    const onChange = (checked) => {
        setDisabled(checked);
    };
    const onChangeSlider = (newValue) => {
        setInputValueOne(newValue[0]);
        setInputValueTwo(newValue[1]);
    };
    const onChangeOne = (newValue) => {
        setInputValueOne(newValue);
    };
    const onChangeTwo = (newValue) => {
        setInputValueTwo(newValue);
    };

    function print(g1, g2) {
        console.log(g1, g2);
    }


    const tema = "Тема 999: Вопросов 1340";
    const theme = "999";
    const questions = "1340";
    const text = "Лица, ответственные за безопасную эксплуатацию объектов " +
        "газораспределительной системы и газопотребления = Лица, осуществляющие " +
        " и являющиеся ответственными за ведение работ при выполнении работ и (или)" +
        " оказании услуг по обслуживанию, ремонту объектов " +
        "газораспределительной системы и газопотребления"


    return (
        <>
            <div onClick={() => print(`${theme}`, `${questions}`)} className={s.myflexcont}>
                <div className={s.myflexboxName}>{tema}</div>
                <div className={s.myflexboxText}>{text}</div>
            </div>

            <div className={s.myButtonFlex}>
            <div className={s.allBlock}>
                <div className={s.nameBloсk}>
                    <div className={s.item}>Перемешать вопросы:</div>
                    <div className={s.item}>Перемешивать ответы:</div>
                    <div className={s.item}>Выбор диапазона вопросов:</div>
                </div>
                <div className={s.switchBlock}>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    defaultChecked={false}/></div>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    defaultChecked/></div>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    checked={disabled} onChange={onChange}
                    /></div>

                </div>

            </div>


            <div style={{display: disabled ? "block" : "none"}}>
                <div className={s.slider}>
                    <Slider range defaultValue={[0, 100]}
                            disabled={!disabled}
                            value={[inputValueOne, inputValueTwo]}
                            onChange={onChangeSlider}
                    />
                </div>

                <div className={s.inputNumber}>
                    <div>
                        <InputNumber
                            disabled={!disabled}
                            min={1}
                            max={100}
                            value={inputValueOne}
                            onChange={onChangeOne}
                            style={{
                                width: 60,
                            }}
                        />
                    </div>

                    <div>
                        <InputNumber
                            disabled={!disabled}
                            min={1}
                            max={100}
                            value={inputValueTwo}
                            onChange={onChangeTwo}
                            style={{
                                width: 60,
                            }}
                        />
                    </div>
                </div>
            </div>
               <div className={s.mainButton}><Button type="primary">НАЧАТЬ ТЕСТИРОВАНИЕ</Button></div>
            </div>
        </>
    )
};


export default Theme;
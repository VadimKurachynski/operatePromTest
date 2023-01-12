import {Col, InputNumber, Row, Slider, Switch} from "antd";
import React, {useState} from "react";
import s from "../../styles/test.module.css";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const IntegerStep = () => {
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


    return (
        <>

            <div className={s.allBlock}>

                <div className={s.nameBloсk}>
                    <div className={s.item}>Перемешать вопросы:</div>
                    <div className={s.item}>Перемешивать ответы:</div>
                    <div className={s.item}>Выбрать диапазон вопросов:</div>
                </div>


                <div className={s.switchBlock}>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    defaultChecked/></div>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    defaultChecked/></div>
                    <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                    unCheckedChildren={<CloseOutlined/>}
                                                    checked={disabled} onChange={onChange}
                    /></div>

                </div>
            </div>




            <div >
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
        </>
    )
};


export default IntegerStep;
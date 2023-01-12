import {Col, InputNumber, Row, Slider, Switch} from "antd";
import React, {useState} from "react";
import s from "../../styles/test.module.css";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const IntegerStep = () => {
    const [inputValueOne, setInputValueOne] = useState(1);
    const [inputValueTwo, setInputValueTwo] = useState(100);
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        console.log(checked)
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

            <div className={s.switchOne}>
                <div> Перемешать вопросы:</div>
                <div><Switch checkedChildren={<CheckOutlined/>}
                             unCheckedChildren={<CloseOutlined/>}
                             defaultChecked/></div>
            </div>
            <div className={s.switchTwo}>
                <div>Перемешивать ответы :</div>
                <div><Switch checkedChildren={<CheckOutlined/>}
                             unCheckedChildren={<CloseOutlined/>}
                             defaultChecked/></div>
            </div>


            <div className={s.switchThree}>
                <div>Выбрать диапазон вопросов:</div>
                <div><Switch checkedChildren={<CheckOutlined/>}
                             unCheckedChildren={<CloseOutlined/>}
                             // defaultChecked
                             checked={disabled} onChange={onChange}
                /></div>
            </div>
            <div>
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
                    />
                </div>

                <div>
                    <InputNumber
                        disabled={!disabled}
                        min={1}
                        max={100}
                        value={inputValueTwo}
                        onChange={onChangeTwo}
                    />
                </div>
            </div>

        </>
    )
};


export default IntegerStep;
import {Col, InputNumber, Row, Slider} from "antd";
import React, {useState} from "react";
import s from "../../styles/test.module.css";

const IntegerStep = () => {
    const [inputValueOne, setInputValueOne] = useState(1);
    const [inputValueTwo, setInputValueTwo] = useState(100);

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

            <div>
                <Slider range defaultValue={[0, 100]}
                        value={[inputValueOne,inputValueTwo]}
                        onChange={onChangeSlider}
                />
            </div>

<div className={s.inputNumber}>
            <div>
                <InputNumber
                    min={1}
                    max={100}
                    value={inputValueOne}
                    onChange={onChangeOne}
                />
            </div>

            <div>
                <InputNumber
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
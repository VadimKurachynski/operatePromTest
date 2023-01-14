import React, {useEffect, useState} from "react";
import s from "../../styles/test.module.css";
import {InputNumber, Slider, Switch, Button, Space} from "antd";
import {CheckOutlined, CloseOutlined, LeftCircleOutlined, IssuesCloseOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getThemes} from "../../features/themes/themesSlice";

const Theme = (props) => {
console.log(props)


    const idThema="444";
    // const theme = "Тема 999: Вопросов 1340";
    const theme = props.theme.themenumber;
    const text = props.theme.themename
    const countQuections=1340;


    const [inputValueOne, setInputValueOne] = useState(1);
    const [inputValueTwo, setInputValueTwo] = useState(countQuections);
    const [disabledRange, setDisabledRange] = useState(false);
    const [disabledSwitchBlock, setDisabledSwitchBlock] = useState(false);

    const onChange = (checked) => {
        setDisabledRange(checked);
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
    const onClickSwitchBlock=(e)=> {
        console.log(e.currentTarget)
        setDisabledSwitchBlock(!disabledSwitchBlock);
    }


    return (
        <>

            <div id={idThema} className={s.myflexcont} onClick={onClickSwitchBlock}>
                <div className={s.myflexboxName}>{theme}</div>
                <div className={s.myflexboxText}>{text}</div>
            </div>


            <div className={s.myButtonFlex} style={{display: disabledSwitchBlock ? "block" : "none"}}>
                <div className={s.allBlock}>
                    <div className={s.nameBloсk}>
                        <div className={s.item}>Перемешать вопросы:</div>
                        <div className={s.item}>Перемешивать ответы:</div>
                        <div className={s.item}>Диапазон вопросов:</div>
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
                                                        checked={disabledRange} onChange={onChange}
                        /></div>

                    </div>

                </div>

                <div style={{display: disabledRange ? "block" : "none"}}>
                    <div className={s.slider}>
                        <Slider range defaultValue={[1, countQuections]}
                                disabled={!disabledRange}
                                min={1}
                                max={countQuections}
                               value={[inputValueOne, inputValueTwo]}

                                onChange={onChangeSlider}
                        />
                    </div>

                    <div className={s.inputNumber}>
                        <div>
                            <InputNumber
                                disabled={!disabledRange}
                                min={1}
                                max={countQuections}
                                value={inputValueOne}
                                onChange={onChangeOne}
                                style={{
                                    width: 60,
                                }}
                            />
                        </div>

                        <div>
                            <InputNumber
                                disabled={!disabledRange}
                                min={1}
                                max={countQuections}
                                value={inputValueTwo}
                                onChange={onChangeTwo}
                                style={{
                                    width: 60,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={s.mainButton}><Button type="primary" icon={<IssuesCloseOutlined/>}>НАЧАТЬ
                    ТЕСТИРОВАНИЕ</Button></div>

            </div>


        </>
    )
};


export default Theme;
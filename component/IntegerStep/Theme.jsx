import React, {useEffect, useState} from "react";
import s from "../../styles/test.module.css";
import {InputNumber, Slider, Switch, Button, Space} from "antd";
import {CheckOutlined, CloseOutlined,  IssuesCloseOutlined} from "@ant-design/icons";
import {getThemeQuestions, getThemes, setSelectTheme} from "../../features/themes/themesSlice";
import {useDispatch} from "react-redux";

const Theme = (props) => {
    const dispatch=useDispatch()
    const idTheme=props.theme.themenumber;
    const theme = `Тема `+props.theme.themenumber+` / Вопросов: `+props.theme.numberofquestions;
    const text = props.theme.themename;
    const countQuections=props.theme.numberofquestions;


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
        const idT=e.currentTarget.id
        if (disabledSwitchBlock){
            dispatch(setSelectTheme(0))
        }else {
            dispatch(setSelectTheme(+idT))
        }
        setDisabledSwitchBlock(!disabledSwitchBlock);

    }

const startTest=(e)=>{
    dispatch(getThemeQuestions(e.currentTarget.id));
}

    return (
        <>
            <div id={idTheme} className={s.myflexcont} onClick={onClickSwitchBlock}>
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

                <div  className={s.mainButton}><Button id={idTheme} type="primary" icon={<IssuesCloseOutlined/>} onClick={startTest}>НАЧАТЬ
                    ТЕСТИРОВАНИЕ</Button></div>

            </div>


        </>
    )
};


export default Theme;
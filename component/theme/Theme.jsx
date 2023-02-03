import React, {useEffect, useState} from "react";
import s from "./themes.module.css";
import {InputNumber, Slider, Switch, Button} from "antd";
import {CheckOutlined, CloseOutlined,  IssuesCloseOutlined} from "@ant-design/icons";
import {
    getThemeQuestions,
    setSelectNameTheme,
    setSelectTheme,
} from "../../features/themes/themesSlice";
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router'

const Theme = (props) => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(setSelectTheme(0))

    }, [])

    const {isAuth} = useSelector((state) => state.themes)
    const idTheme=props.theme.themenumber;
    const theme = `Тема `+props.theme.themenumber+` / Вопросов: `+props.theme.numberofquestions;
    const text = props.theme.themename;
    const countQuections=props.theme.numberofquestions;
    const router = useRouter()
    const [inputValueOne, setInputValueOne] = useState(1);
    const [inputValueTwo, setInputValueTwo] = useState(countQuections);
    const [disabledRange, setDisabledRange] = useState(false);
    const [disabledSwitchBlock, setDisabledSwitchBlock] = useState(false);
    const [disabledMixQuestions, setDisabledMixQuestions] = useState(false);
    const [disabledMixAnswers, setDisabledMixAnswers] = useState(true);
    const onChangeMixQuestions = (checked) => {
        setDisabledMixQuestions(checked);
    };
    const onChangeMixAnswers = (checked) => {
        setDisabledMixAnswers(checked);
    };
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
        if(!isAuth){ router.push('/login')}
        const idT=e.currentTarget.id
        if (disabledSwitchBlock){
            dispatch(setSelectTheme(0))
        }else {
            dispatch(setSelectTheme(+idT))
            dispatch(setSelectNameTheme(text))
        }
        setDisabledSwitchBlock(!disabledSwitchBlock);
    }
const startTest=(e)=>{
    router.push('/test')
     dispatch(getThemeQuestions({
         numberThemes:e.currentTarget.id,
         inputValueOne:inputValueOne,
         inputValueTwo:inputValueTwo,
         disabledMixQuestions:disabledMixQuestions,
         disabledMixAnswers:disabledMixAnswers,
     }));
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
                                                        defaultChecked={false}
                                                        onChange={onChangeMixQuestions}
                            /></div>

                        <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                        unCheckedChildren={<CloseOutlined/>}
                                                        defaultChecked
                                                        onChange={onChangeMixAnswers}
                            /></div>
                        <div className={s.item}><Switch checkedChildren={<CheckOutlined/>}
                                                        unCheckedChildren={<CloseOutlined/>}
                                                        checked={disabledRange}
                                                        onChange={onChange}
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
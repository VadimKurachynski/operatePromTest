import s from "../styles/test.module.css";
import React, {useState} from 'react';
import {Button} from "antd";
import Head from 'next/head'
import {Roboto} from '@next/font/google'
import { ConfigProvider,Slider, Switch, } from 'antd';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

function handleClick(e) {
    e.preventDefault();
    console.log(e);
}
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};

function print(g1, g2) {
    //e.preventDefault();
    console.log(g1, g2);
}


const Der = () => {


    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };



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


            <div className={roboto.className}>
            <Head>
                <title>My page title</title>


            </Head>


            <div className={s.wrapper}>

                <div className={s.header}>header</div>

                <div className={s.content}>
                    <div className={s.container}>

                        <div onClick={() => print(`${theme}`, `${questions}`)} className={s.myflexcont}>
                            <div className={s.myflexboxName}>{tema}</div>
                            <div className={s.myflexboxText}>{text}</div>
                        </div>
                        <div className={s.myButtonFlex}>
                            <Switch   defaultChecked onChange={onChange} />
                            
                            <Slider style={{  borderColor: "yellow" }} range defaultValue={[20, 50]} disabled={disabled} />
                            Disabled: <Switch  size="small" checked={disabled} onChange={onChange} />
                        </div>



                    </div>
                </div>
                <div className={s.footer}>footer</div>

            </div>
            </div>
        </>
    )
}
export default Der;
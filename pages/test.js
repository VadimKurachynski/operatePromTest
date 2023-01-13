import React, {useState} from 'react';
import s from "../styles/test.module.css";
import {Button} from "antd";
import Head from 'next/head'
import {Roboto} from '@next/font/google'
import {Slider, Switch,} from 'antd';
import {Col, InputNumber, Row} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import Theme from "../component/IntegerStep/Theme";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


const Der = () => {

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
                            <Theme/>
                        </div>
                    </div>
                    <div className={s.footer}>footer</div>

                </div>
            </div>
        </>
    )
}
export default Der;
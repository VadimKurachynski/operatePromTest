import s from "../styles/themes.module.css";
import {Roboto} from '@next/font/google'
import HeadTest from "../component/head/HeadThemes";
import HeaderTest from "../component/header/Header";
import FooterTest from "../component/footer/Footer";
import React from "react";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})


const PageTest = () => {



    return (
        <>
            <div className={roboto.className}>
                <HeadTest />
                <div className={s.wrapper}>
                    <HeaderTest />
                    <div className={s.content}>
                        <div className={s.container}>


                            <div>САМ ТЕСТ</div>


                        </div>
                    </div>
                    <FooterTest />
                </div>
            </div>



        </>

    )
}


export default PageTest;



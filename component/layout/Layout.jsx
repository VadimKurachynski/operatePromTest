import React from "react";

import HeadTest from "../head/HeadThemes";
import s from "../../styles/themes.module.css";
import HeaderTest from "../header/Header";
import FooterTest from "../footer/Footer";
import {Roboto} from "@next/font/google";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const Layout = ({children}) => {
    return (
        <>
            <div className={roboto.className}>
                <HeadTest/>
                <div className={s.wrapper}>
                    <HeaderTest/>
                    <div className={s.content}>
                        <div className={s.container}>
                            {children}
                        </div>
                    </div>
                    <FooterTest/>
                </div>
            </div>
        </>
    )
}
export default Layout;
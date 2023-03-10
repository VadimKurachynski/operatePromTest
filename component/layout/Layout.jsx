import React from "react";
import s from "../layout/layout.module.css"
import HeaderTest from "../header/Header";
import FooterTest from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <div className={s.wrapper}>
                <HeaderTest/>
                <div className={s.content}>
                    <div className={s.container}>
                        {children}
                    </div>
                </div>
                <FooterTest/>
            </div>
        </>
    )
}
export default Layout;
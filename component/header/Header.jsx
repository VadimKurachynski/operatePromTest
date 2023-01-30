import s from "../header/header.module.css";
import React from "react";
import Link from "next/link";




const HeaderTest = () => {

    return(
        <div className={s.header}>
            <Link href="/themes" >Выбор темы </Link>
        </div>
    )
}
export default HeaderTest;
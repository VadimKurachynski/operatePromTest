import LoginForm from "../component/loginForm/Login";
import s from "../component/loginForm/loginForm.module.css"
import Head from "next/head";
import React from "react";




const Login = () => {
    return (
        <>
            <Head>
                <title>Авторизация</title>
            </Head>


            <div className={s.authorizBlock}>
            <div className={s.authorization}>Авторизация</div>
            <div className={s.loginForm}><LoginForm/></div>
        </div>

        </>
    )
}


export default Login
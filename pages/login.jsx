import LoginForm from "../component/loginForm/Login";
import s from "../component/loginForm/loginForm.module.css"
import Head from "next/head";
import React from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();
    const {isAuth} = useSelector((state) => state.themes)
    {
        if (isAuth) {
            router.push('/')
        }
    }
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
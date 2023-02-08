import s from "../header/header.module.css";
import React from "react";
import Link from "next/link";
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {postLogOut} from "../../features/themes/themesSlice";
import {useRouter} from "next/router";

const HeaderTest = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state) => state.themes)
    const ClickAvatarOut = () => {
        dispatch(postLogOut());
        router.push('/')
    }
    const ClickAvatarIn = () => {
        router.push('/login')
    }

    const AvatarNoAuth = <div title={"войти"} onClick={ClickAvatarIn}><Avatar icon={<UserOutlined/>}/></div>;
    const AvatarIsAuth = <div title={"выйти"} onClick={ClickAvatarOut}><Avatar style={{backgroundColor: '#87d068'}}
                                                                               icon={<UserOutlined/>}/></div>;
    return (
        <div className={s.header}>
            <div className={s.linksBox}>
                <div className={s.links}><Link href="/">Выбор темы</Link></div>
                <div className={s.links}></div>
                <div className={s.links}></div>
            </div>
            <div className={s.avatar}> {isAuth ? AvatarIsAuth : AvatarNoAuth}</div>
        </div>
    )
}
export default HeaderTest;
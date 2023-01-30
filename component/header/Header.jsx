import s from "../header/header.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {router} from "next/client";
import {setSelectTheme} from "../../features/themes/themesSlice";
import Link from "next/link";
import {UserOutlined} from '@ant-design/icons';
import {Avatar, Image} from 'antd';


const HeaderTest = () => {
    const AvatarNoAuth = <div><Avatar icon={<UserOutlined/>}/></div>;
    const AvatarIsAuth = <div><Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/></div>;
    const isAuth = false;

    return (
        <div className={s.header}>
            <div className={s.links}><Link href="/themes">Выбор темы</Link></div>
            {isAuth ? AvatarIsAuth : AvatarNoAuth}


        </div>
    )
}
export default HeaderTest;
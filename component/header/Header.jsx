import s from "../header/header.module.css";
import React from "react";
import Link from "next/link";
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {postLogOut} from "../../features/themes/themesSlice";


const HeaderTest = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state) => state.themes)



    const ClickAvatar =()=>{
        dispatch(postLogOut());
    }
    const AvatarNoAuth = <div><Avatar icon={<UserOutlined/>}/></div>;
    const AvatarIsAuth = <div><Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/></div>;
    // const isAuth = true;

    return (
        <div className={s.header}>
            <div className={s.linksBox}>
                <div className={s.links}><Link href="/">Выбор темы</Link></div>
                <div className={s.links}></div>
                <div className={s.links}></div>
            </div>
            <div className={s.avatar} onClick={ClickAvatar}> {isAuth ? AvatarIsAuth : AvatarNoAuth}</div>

        </div>
    )
}
export default HeaderTest;
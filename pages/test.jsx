import React from "react";

import {IssuesCloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";


const PageTest = () => {
    const {themes, selectTheme} = useSelector((state) => state.themes)
    console.log(selectTheme,themes)

    return (
        <>
            <TestAnswer selectTheme={selectTheme}/>
        </>
    )
}


export default PageTest;



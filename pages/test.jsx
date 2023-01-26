import React from "react";

import {IssuesCloseOutlined} from "@ant-design/icons";
import {Button} from "antd";
import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import TestAnswer from "../component/test/TestAnswer";
import {useSelector} from "react-redux";


const PageTest = () => {
    console.log("я на странице pageTest")
    const {selectTheme,questionsSelectTheme} = useSelector((state) => state.themes)


    return (
        <>
            <TestAnswer selectTheme={selectTheme} questionsSelectTheme={questionsSelectTheme} />
        </>
    )
}


export default PageTest;



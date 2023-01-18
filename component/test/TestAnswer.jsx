
import s from "../test/testAnswer.module.css";
import { useState } from 'react';
import {useSelector} from "react-redux";
import { Input, Radio, Space } from 'antd';

const TestAnswer = () => {
    const {themes, selectTheme,questionsSelectTheme} = useSelector((state) => state.themes)
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const arraySort = [...questionsSelectTheme]
    arraySort.sort((x, y) => x.nomvoprosa - y.nomvoprosa);
    arraySort.sort(() => 0.5-Math.random());

    return(
<>

        <div>Answer</div>

    <Radio.Group style={{

    }}onChange={onChange} >
        <Space direction="vertical">
          <div className={s.radio}> <Radio value={1}><span className={s.radioText}> отметка (ставится штамп) «зарегистрировано»</span></Radio></div>
            <div className={s.radio}> <Radio value={2}><span className={s.radioText}>Делается отметка (ставится штамп) о регистрации потенциально
                опасного объекта с указанием регистрирующего органа, регистрационного номера,
                даты регистрации и фамилии, собственного имени, отчества (если таковое имеется)
                должностного лица регистрирующего органа</span></Radio></div>
                <div className={s.radio}> <Radio value={3}><span className={s.radioText}>Регистрационный номер потенциально опасного объекта</span></Radio></div>
        </Space>
    </Radio.Group>





</>
    )
}
export default TestAnswer;
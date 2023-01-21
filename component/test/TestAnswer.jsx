
import s from "../test/testAnswer.module.css";
import { useState } from 'react';
import {useSelector} from "react-redux";
import { Input, Radio, Space } from 'antd';
import { Button} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';


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

    {/*<QuestionCircleOutlined style={{ fontSize: '30px' }}/>*/}
    <div>Тема 01 - Председатель (заместитель председателя) комиссии для проверки знаний по вопросам промышленной безопасности, созданной в субъекте промышленной безопасности</div>
    <div className={s.boxCountQuestions}><div>Вопрос № 1</div> <div>Вопросов: 80</div></div>

<div>
    <div>кол-во пройденных вопросов</div>
    <div>кол-во правильных ответов</div>
    <div>кол-во ошибок</div>
    <div>60</div>
    <div>40</div>
    <div>20</div>
</div>

    <div className={s.question}>    <div className={s.questionText}> Какими полномочиями наделен работник службы промышленной безопасности (инженер по промышленной безопасности,
    ответственное лицо, на которое возложены соответствующие обязанности)?</div></div>
<div className={s.boxRadio}>
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
</div>
<div className={s.correctAnswer}>Правильный ответ:
    Проводить анализ состояния промышленной безопасности, соблюдения требований промышленной безопасности,
    рассматривать документы по вопросам промышленной безопасности</div>

<div><Button type="primary">следующий вопрос</Button></div>

  <div>Литература:</div>
    <div>Закон Республики Беларусь от 5 января 2016 г. № 354-З «О промышленной безопасности». статья 30</div>




</>
    )
}
export default TestAnswer;
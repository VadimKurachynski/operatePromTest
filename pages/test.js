import s from "../styles/test.module.css";
import React from 'react';





function handleClick(e) {
    e.preventDefault();
    console.log(e);
}

const Der = () => {
    const tema = "Тема 999: Вопросов 1340";
    const text = "Лица, ответственные за безопасную эксплуатацию объектов " +
        "газораспределительной системы и газопотребления = Лица, осуществляющие " +
        " и являющиеся ответственными за ведение работ при выполнении работ и (или)" +
        " оказании услуг по обслуживанию, ремонту объектов " +
        "газораспределительной системы и газопотребления"
    return (
        <>
            <style jsx global>
                {`body {
                  font-family: sans-serif;
                  color: green;
                  background: #5d90a6;
                  //height: 100vh;
                } `}</style>

            <div className={s.wrapper}>
                <div className={s.header}>header</div>
                <div className={s.content}>
                    <div className={s.container}>
                        <div className={s.myflexcont}>
                            <div className={s.myflexbox}>{tema}</div>
                            <div className={s.myflexbox}>{text}</div>
                        </div>
                        <div className={s.myflexcont}>
                            <div className={s.myflexbox}>{tema}</div>
                            <div className={s.myflexbox}>{text}</div>
                        </div>
                    </div>
                </div>

                <div className={s.footer}>footer</div>
            </div>
        </>
    )
}
export default Der;
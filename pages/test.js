//import "../styles/new.module.css";
//import "../styles/globals.css"
import s from "../styles/test.module.css";



function handleClick(e) {
    e.preventDefault();
    console.log(e);
}


const Der=()=>{

    const text="Лица, ответственные за безопасную эксплуатацию объектов " +
        "газораспределительной системы и газопотребления = Лица, осуществляющие " +
        " и являющиеся ответственными за ведение работ при выполнении работ и (или)" +
        " оказании услуг по обслуживанию, ремонту объектов " +
        "газораспределительной системы и газопотребления"


    return(
        <>
            <div className={s.myflexcont}>
                <div className={s.myflexbox}>Тема 01: Вопросов 340</div>
                <div className={s.myflexbox}>{text}</div>
            </div>
            <style jsx global>{`
        body {
          font-family: sans-serif;
          background-color: green;
        }
      `}</style>



        </>
    )

}

export default Der;
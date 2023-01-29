import s from "/component/preloader/preloader.module.css"
import {Alert, Space, Spin} from "antd";


const Preloader=()=>{


    return(
        <>
                    <div className={s.content} >
                        <Spin tip="Loading..."/>
                    </div>

        </>




        )



}


export default Preloader;
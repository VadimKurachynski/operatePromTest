import React from "react";
import {useSelector} from "react-redux";




const PageTest = () => {
    const {themes, selectTheme,questionsSelectTheme} = useSelector((state) => state.themes)
    console.log(questionsSelectTheme)
    console.log(selectTheme)
    console.log(themes)
    return (
        <>
                            <div>САМ ТЕСТ</div>
            <div>
                { questionsSelectTheme.map((qu)=>(
                    <div key={qu.nomvoprosa}>
                        {qu.vopros}</div>
                ))
                }
            </div>





        </>

    )
}


export default PageTest;



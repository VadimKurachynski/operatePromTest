import React from "react";
import {useSelector} from "react-redux";




const PageTest = () => {
    const {themes, selectTheme,questionsSelectTheme} = useSelector((state) => state.themes)
     // console.log(questionsSelectTheme)
    // console.log(selectTheme)
    // console.log(themes)
   questionsSelectTheme.sort((x, y) => x.nomvoprosa - y.nomvoprosa);

    return (
        <>

                            <div>САМ ТЕСТ</div>
            <div>
                { questionsSelectTheme2.map((qu)=>(

                    <div key={qu.nomvoprosa}>
                        {qu.nomvoprosa}</div>
                ))
                }
            </div>





        </>

    )
}


export default PageTest;



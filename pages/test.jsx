import React from "react";
import {useSelector} from "react-redux";




const PageTest = () => {
    const {themes, selectTheme,questionsSelectTheme} = useSelector((state) => state.themes)
     // console.log(questionsSelectTheme)
    // console.log(selectTheme)
    // console.log(themes)

    const arraySort = [...questionsSelectTheme]
    arraySort.sort((x, y) => x.nomvoprosa - y.nomvoprosa);
    arraySort.sort(() => 0.5-Math.random());

    return (
        <>

                            <div>САМ ТЕСТ</div>
            <div>
                { arraySort.map((qu)=>(

                    <div key={qu.nomvoprosa}>
                        {qu.nomvoprosa}</div>
                ))
                }
            </div>





        </>

    )
}


export default PageTest;



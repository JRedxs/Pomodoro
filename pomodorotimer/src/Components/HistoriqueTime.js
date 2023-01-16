import React from "react";
import '../App.css';
function HistoriqueTime(props) {
    console.log('Mon tableau : ', props.stocktime)
    return (

       <>
            <div>
                {props.stocktime.map((time) => {

                    return <p>{time}</p>
                })}
            </div>
        </>

    )
}

export default HistoriqueTime;

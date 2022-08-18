import React from "react";
import { useParams } from "react-router-dom";

export default  function Detail(){
    let {id, nama} = useParams()
    return(
        <React.Fragment>
            <p>ini adalah detail</p>
            <p>id nya adalah {id} {nama}</p>
        </React.Fragment>
    )
}
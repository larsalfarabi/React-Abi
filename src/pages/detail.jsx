import React from "react";
import { useParams } from "react-router-dom";

export default  function Detail(){
    let {id, nama, kelas} = useParams()
    return(
        <React.Fragment>
            <p>ini adalah detail</p>
            <p>id nya adalah {id} {nama} {kelas}</p>
        </React.Fragment>
    )
}
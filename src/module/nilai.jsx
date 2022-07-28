import React from "react";
import "../style/style.css"

export default function Nilai({ nama,data }){

    console.log('nama', nama)
    console.table(data)
    return(
        <React.Fragment>
            <h2 className="nilai">Ini adalah nilai</h2>
            <div>
                <h1>Daftar Nilai</h1>
                <h3>{nama}</h3>
                {/* <ul>
                    <li>{data[0]}</li>
                    <li>{data[1]}</li>
                    <li>{data[2]}</li>
                    <li>{data[3]}</li>
                    <li>{data[4]}</li>
                </ul> */}

                {data?.map((item,index)=>{
                    return(
                        <li>
                            {""}
                            Nilai Ujian ke-{index+1} adalah {item+30}
                        </li>
                    )
                } )}
            </div>
        </React.Fragment>
    )
}
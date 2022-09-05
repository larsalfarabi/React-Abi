import React from "react";
import { Link }  from "react-router-dom";

export default function User() {

    const [user, setUser] = React.useState([
        {
            name: "akbar",
            kelas: "XI RPL",
        },
        {
            name: "bayu",
            kelas: "XI RPL",
        },
        {
            name: "hilmi",
            kelas: "XI RPL",
        },
        {
            name: "nabil",
            kelas: "XI RPL",
        },
        {
            name: "rauza",
            kelas: "XI TKJ",
        },
    ]);
    return (
        <div>
            <h1>User Page</h1>
            <div className="flex flex-col">
                {user?.map((item, index) => {
                    return (
                        <div>
                            <Link to={`${item.name}/${item.kelas}`} >{item.name}</Link>
                        </div>
                    );
                })}
                {/* <Link to={"/admin/user/akbar/XI RPL"} >Akbar</Link>
                <Link to={"bayu/XI RPL"} >Bayu</Link>
                <Link to={"hilmi/XI RPL"} >Hilmi</Link>
                <Link to={"nabil/XI RPL"} >Nabil</Link>
                <Link to={"rauza/XI RPL"} >Rauza</Link> */}
            </div>
        </div>
    );
}

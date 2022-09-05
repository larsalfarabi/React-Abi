import { useParams, useNavigate } from "react-router-dom";
import Button from "../../komponen/button";

export default function UserDetail() {
    let { nama, kelas } = useParams();
 const navigate = useNavigate();


    return (
        <div>
            <h1>User Detail </h1>
            <div className="mt-5">Nama : {nama}</div>
            <div>Kelas : {kelas}</div>
            <Button
                title={"Kembali ke page User"}
                onClick={() => {
                    return navigate("/admin/user" ,{replace: true});
                }}
            />
        </div>
    );
}

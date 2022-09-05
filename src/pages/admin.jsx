import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../komponen/button";

export default function Admin() {
    const navigate = useNavigate();
    let location = useLocation();
      let path = location.pathname.split("/")[2];
    return (
        <div className="grid grid-cols-5 gap-5 h-screen w-screen">
            <div className="col-span-1 ">
                <nav className="flex flex-col items-start">
                    <Link to={"dashboard"}>
                        <span
                            style={{
                                backgroundColor: path === "dashboard" ? "red" : "",
                                color: path === "dashboard" ? "white" : "",
                            }}
                        >
                            Dashboard
                        </span>
                    </Link>
                    <Link to={"user"}>
                        <span
                            style={{
                                backgroundColor: path === "user" ? "red" : "",
                                color: path === "user" ? "white" : "",
                            }}
                        >
                            User
                        </span>
                    </Link>
                    <Link to={"kelas"}>
                        <span
                            style={{
                                backgroundColor: path === "kelas" ? "red" : "",
                                color: path === "kelas" ? "white" : "",
                            }}
                        >
                            Kelas
                        </span>
                    </Link>
                    <Button
                        onClick={() => {
                            return navigate("/login", {replace: true});
                        }}
                        title={"Logout"}
                    />
                </nav>
            </div>
            <div className="col-span-4 ">
                <Outlet />
            </div>
        </div>
    );
}

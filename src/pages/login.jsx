import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    let handleRegister = () => {
        return navigate("/register", { replace: true });
    };
    let handleLogin = () => {
        return navigate("/admin", { replace: true });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <div className="flex">
                <Button title={"Register"} onClick={handleRegister}></Button>
                <Button title={"Login"} onClick={handleLogin} />
            </div>
        </div>
    );
}

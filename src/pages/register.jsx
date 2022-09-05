import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
  return (
      <div>
          <h1>Register Page</h1>
          <Button
              title={"Kembali ke Login"}
              onClick={() => {
                  return navigate("/login", {replace: true});
              }}
          />
      </div>
  );
}

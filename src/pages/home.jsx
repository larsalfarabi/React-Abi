import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [msg, setMsg] = React.useState('Belum Login');

  let handleLogin = () => {
    setMsg('Proses Login')

    return navigate('about', {replace: true})
  }
  return (
    <React.Fragment>
      <h1>ini adalah home</h1>
      <p>{msg}</p>
      <button onClick={handleLogin}>Login</button>
    </React.Fragment>
  );
}

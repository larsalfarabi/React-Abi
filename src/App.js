import "./style/style.css";
import React from "react";

export default function App() {
  let [message, setMessage] = React.useState(0);
  let [text, setText] = React.useState(true);
  let [count, setCount] = React.useState(0);
  let [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setMessage(message + 1);
    console.log("use effect berjalan");
  }, [count, text]);

  React.useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }, [])

  if(loading){
    return <h1>Loading...</h1>;
  }

  console.log(text);
  return (
    <React.Fragment>
      <h1>Belajar Use Effect</h1>
      <h1>Message: {message}</h1>
      <h1>Count: {count}</h1>
      <h3>{message === 10 ? 'ini sepuluh' : "bukan sepuluh"}</h3>
      <h3>{count === 15 ? 'ini lima belas' : "bukan lima belas"}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        Ubah
      </button>
    </React.Fragment>
  );
}

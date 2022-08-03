// import logo from './logo.svg';

import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./style/style.css";

export default function App(){

    let [name,setName]= React.useState('');
    let [email,setEmail]= React.useState('');
    let [password,setPassword]= React.useState('');
    let [confirmPassword,setConfirmPassword]= React.useState('');
    return(
        <React.Fragment>
            <form>test</form>
        </React.Fragment>
    )
}









// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   const handleResets = () => {
//     setCount(0);
//   };

//   return (
//     <React.Fragment>
//       <h1>Count = {count}</h1>
//       <Button onClick={handleTambah} title="Tambah" color="blue" />
//       <Button
//         disabled={count <= 0 ? true : false}
//         onClick={handleKurang}
//         title="Kurang"
//         color="blue"
//       />
//       <Button
//         disabled={count === 0 ? true : false}
//         onClick={handleResets}
//         title="Resets"
//       />
//     </React.Fragment>
//   );
// }

// export default App;


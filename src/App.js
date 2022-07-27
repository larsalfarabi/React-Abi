// import logo from './logo.svg';
// import './App.css';
import Header from "./Component/header"
import React from "react";
import Tes from "./Component/module/tes";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
//       </header>
//     </div>
//   );
// }

// Belajar React JS
// export default App;

// function App () {
//   return (
//     <div>
//       <h3>Freshly juice</h3>;
//     </div>
//   )
// }

// function App() {
//   let a = 20;
//   let b = 30;
//   return (
//     <React.Fragment>
//       <div>
//         <h1> Hello World ke - {a} </h1>
//         <h1> Hello World ke - {a + b} </h1>
//         <button>button</button>
//       </div>
//     </React.Fragment>
//   );
// }
function App () {
  return(
    <React.Fragment>
      <h1>Latihan Export Import</h1>
      <Header />
      <Tes />
    </React.Fragment>
  )
}

export default App;


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImg from "./assets/landScape.jpg";
import NavBar from "./NavBar";
import Home from "./Home";
import PlayersList from "./PlayersList";
import { Routes, Route, Link } from "react-router-dom";

// import "../public/public.css";

//
// function App() {
//   const [count, setCount] = useState(0);
//   let day = "Thursday";
//   let date = new Date();

//   return (
//     <>
//       <div>
//         <a href="https://google.com" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>
//         today is {day} and time is {date.toLocaleTimeString()}
//       </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//     // <>
//     //   <p>new content</p>
//     // </>
//   );
// }

function Greet(props) {
  return (
    <>
      <h1>hello {props.name}</h1>;
      <button onClick={() => props.promptFunction(props.name)}>
        Prompt my name{" "}
      </button>
    </>
  );
}

function promptName(name) {
  alert(`hello ${name}`);
}
function App() {
  let count = () => {
    return 2;
  };
  let input = <input type="text" placeholder="Name" />;
  let button = <button>Submit</button>;
  let form = (
    <form>
      <h1>form </h1>
      {input}
      {button}
    </form>
  );

  const getAge = (birthYear) => {
    return new Date().getFullYear() - birthYear;
  };

  let age = (
    <div>
      <h1>App componenet</h1>
      <br />
      <br />
      <Greet name="Serine" promptFunction={promptName} />
      <p className="age">{getAge(1888)}</p>

      <img
        src={myImg}
        alt="image of a landscape"
        style={{ height: 400, width: 400 }}
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/players" element={<PlayersList />} />
      </Routes>
    </div>
  );

  return age;
}
export default App;

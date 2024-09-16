import logo from "./logo.svg";
import "./App.css";

function App() {
  let input = <input type="text" placeholder="Name" />;
  let button = <button>Submit</button>;
  let form = (
    <form>
      {input}
      <br></br>
      {button}
      <ul className="bg">
        <li className="bg">Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      {/* ternary operator */}
      {true || false ? <p>True</p> : <p>False</p>}
      <p>True</p>
    </form>
  );

  return form;
}

export default App;

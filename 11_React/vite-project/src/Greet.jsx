import React from "react";

function Greet(props) {
  function handleClick(number) {
    alert("button clicked", number);
  }
  return (
    <div>
      Hello {props.children}
      <br />
      <button
        className="border-solid border-2 border-purple-600"
        onClick={() => handleClick(4)}
      >
        click me
      </button>
    </div>
  );
}

export default Greet;

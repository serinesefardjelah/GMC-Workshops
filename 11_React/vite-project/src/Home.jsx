import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Card from "./Card";
import Greet from "./Greet";
import Footer from "./Footer";
import PlayersList from "./PlayersList";
import Timer from "./Timer";

function Home() {
  const [price, setPrice] = useState(1);
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);

  const familyName = useRef("Doe");
  //<=>
  // {familyName.current = "Doe"}

  useEffect(() => {
    console.log(
      "the component was rendrered because it's its first time or color state was changed"
    );
  }, [color]);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }); // <- add empty brackets here

  function promptViews(viewss) {
    alert(`views: ${viewss}`);
  }

  const styleObject = { color: "red", fontSize: 50 };
  return (
    <div>
      <NavBar />
      <Greet>World</Greet>
      <h1>I've rendered {count} times!</h1>
      <h1>Price is {price}</h1>
      <h1>Color is {color}</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="family name"
        ref={familyName}
      />
      <button
        className="bg-purple-500 p-4 m-4  "
        onClick={() => familyName.current.focus()}
      >
        click to get focus on the input
      </button>

      <button
        onClick={() => {
          setColor("red");
        }}
      >
        chnage color
      </button>

      <button
        className="bg-green-400"
        onClick={() =>
          setPrice((oldPrice) => {
            return oldPrice + 1;
          })
        }
      >
        Increase price by 1
      </button>
      <h1 style={{ color: "red", fontSize: 50 }}> home page</h1>
      <div className="flex space-x-12 flex-wrap">
        <Card views={14} downloads={4599} onClickFunction={promptViews} />
        <Card
          reactions={156}
          views={145}
          downloads={8925}
          onClickFunction={promptViews}
        />
      </div>
      <PlayersList />
      <Footer />
    </div>
  );
}

export default Home;

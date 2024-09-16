import React, { useState } from "react";
import "./dict.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import axios from "axios";

function Dictionnary() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState("");

  function getMeaning() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        console.log(res);
        setWordData(res.data[0]);
      });
  }

  function playAudio() {
    let audio = new Audio(wordData.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">
      <h1>Free dictionnary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="type a word to get its meaning"
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={() => getMeaning()}>
          <FaSearch />
        </button>
        <br />
        {/* getting the value of the state named word */}

        {wordData && (
          <div className="showResults">
            {wordData.word}
            <button onClick={() => playAudio()}>
              <FcSpeaker />
            </button>

            <h4>Parts of Speech</h4>
            <p>{wordData.meanings[0].partOfSpeech}</p>
            <h4>Definition</h4>
            <p>{wordData.meanings[0].definitions[0].definition}</p>

            <h4>Example</h4>
            <p>
              {wordData.meanings[0].definitions[0].example
                ? wordData.meanings[0].definitions[0].example
                : "no exemple provided "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dictionnary;

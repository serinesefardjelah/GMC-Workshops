//documentation for the api
//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
import Axios from "axios";
import { useState } from "react";

function LyricsFinder() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics(e) {
    e.preventDefault();
    if (artist === "" || song === "") {
      return;
    }

    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      //console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  }

  return (
    <div className="App">
      <h1>Lyrics Finder</h1>

      <form>
        <input
          className="inp"
          type="text"
          placeholder="Artist name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="inp"
          type="text"
          placeholder="Song name"
          onChange={(e) => {
            setSong(e.target.value);
          }}
        />
        <br />
        <br />
        <button className="btn" onClick={(e) => searchLyrics(e)}>
          Search
        </button>
      </form>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default LyricsFinder;

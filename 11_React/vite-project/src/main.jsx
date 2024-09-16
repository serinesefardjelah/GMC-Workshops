import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Tod from "./Tod.jsx";
import Dictionnary from "./Dictionnary.jsx";
import LyricsFinder from "./LyricsFinder.jsx";
import Todo from "./Todo.jsx";
import MoviesList from "./MoviesList.jsx";
import Calculator from "./calculator/Calculator.jsx";
import MainQuiz from "./quiz/MainQuiz.jsx";
import PostUser from "./PostUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <MoviesList /> */}
      {/* <Dictionnary /> */}
      <PostUser />
    </BrowserRouter>
    {/* <Home /> */}
  </React.StrictMode>
);

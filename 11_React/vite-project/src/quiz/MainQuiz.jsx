import React from "react";
import Start from "./Start";
import Quiz from "./Quiz";
import Result from "./Result";
import { DataProvider } from "./dataContext";

function MainQuiz() {
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Start />

      {/* Quiz Page */}
      <Quiz />

      {/* Result Page */}
      <Result />
    </DataProvider>
  );
}

export default MainQuiz;

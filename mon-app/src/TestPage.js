import Navbar from "./components/Navbar";
import "./css/MoviePage.css";
import { useState } from "react";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

const [firstValue, SetfirstValue] = useState(0);
const [secondValue, SetsecondValue] = useState(0);
const [result, Setresult] = useState(0);

function calcul(operator) {
    if (operator === "+") {
      return result=firstValue + secondValue;
    }

    if (operator === "-") {
      return result=firstValue - secondValue;
    }
    if (operator === "x") {
      return result=firstValue * secondValue;
    }
    if (operator === "/") {
      return result=firstValue / secondValue;
    }
}
  return (
    <>
      <Navbar
        title={"Page test"}
        goToExercice={goToExercice}
        goToHome={goToHome}
        goToTest={() => { }}
        goToTest2={goToTest2}
      />

      <div className="test-page">
        {/* <button onClick={() => setMovie([])}>RESET</button> */}
      </div>
    </>
  );
}

export default TestPage;

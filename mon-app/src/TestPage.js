import Navbar from "./components/Navbar";
import './css/pageTest.css';
import "./css/MoviePage.css";
import { useState } from "react";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

const [firstValue, SetfirstValue] = useState(1);
const [secondValue, SetsecondValue] = useState(7);
const [result, Setresult] = useState(0);

function calcul(operator) {

    if (operator === "+") {
     console.log("Prout") 
     Setresult(firstValue + secondValue);
     console.log("Le résultat est:", result);
     return 
    }
    if (operator === "-") {
      Setresult(firstValue - secondValue);
      console.log("Le résultat est:", result); 
      return 
    }
    if (operator === "x") {
      Setresult(firstValue * secondValue);
      console.log("Le résultat est:", result);
      return 
    }
    if (operator === "/") {
      Setresult(firstValue / secondValue);
      console.log("Le résultat est:", result);
      return     
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

      <div className="plus-container">
        <button className="plus-btn" onClick={() => calcul("+")}>Fait +</button>
      </div>
    </>
  );
}

export default TestPage;

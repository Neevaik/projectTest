import Navbar from "./components/Navbar";
import './css/pageTest.css';
import "./css/MoviePage.css";
import { useState } from "react";
import { plus, multiply,minus,divide } from "./Tools.js";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

  const [firstValue, setFirstValue] = useState(1)
  const [secondValue, setSecondValue] = useState(3)
  const [result, setResult] = useState(0);
  

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
        <button className="operator-btn" onClick={() => multiply("*", firstValue, secondValue, result, setResult)}>Multiplie</button>
        <button className="operator-btn" onClick={() => minus("-", firstValue, secondValue, result, setResult)}>Soustraie</button>
        <button className="operator-btn" onClick={() => plus("+", firstValue, secondValue, result, setResult)}>Additionne</button>
        <button className="operator-btn" onClick={() => divide("/", firstValue, secondValue, result, setResult)}>Divise</button>
        <div className="Number-container">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>     
        </div>
        <p className="result">Résultat : {result} </p>
      </div>
    </>
  );
}

export default TestPage;

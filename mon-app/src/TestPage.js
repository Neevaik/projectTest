import Navbar from "./components/Navbar";
import "./data/data.js";
import './css/pageTest.css';
import "./css/MoviePage.css";
import { useState } from "react";
import { plus, multiply,minus,divide, isArray, isObject} from "./Tools.js";
import { firstArray, secondArray } from "./data/data.js"

function TestPage({ goToExercice, goToHome, goToTest2 }) {

  const [firstValue, setFirstValue] = useState(1)
  const [secondValue, setSecondValue] = useState(3)
  const [result, setResult] = useState(0);
  
  const array = [];
  isArray(array);

  isObject(firstArray, secondArray);

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
        <button className="operator-btn" onClick={() => multiply("*", firstValue, secondValue,setResult)}>Multiplie</button>
        <button className="operator-btn" onClick={() => minus("-", firstValue, secondValue, setResult)}>Soustraie</button>
        <button className="operator-btn" onClick={() => plus("+", firstValue, secondValue,setResult)}>Additionne</button>
        <button className="operator-btn" onClick={() => divide("/", firstValue, secondValue,setResult)}>Divise</button>
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
        <p className="result">{isArray(array) ? "Le tableau contient des éléments" : "Le tableau est vide"} </p>
        <p className="result">{isObject(firstArray) ? "C'est un objet" : "Ce n'est pas un objet"} </p>
        <p className="result">{isObject(secondArray) ? "C'est un objet" : "Ce n'est pas un objet"} </p>
      </div>
    </>
  );
}

console.log(isObject(firstArray));

export default TestPage;

import Navbar from "./components/Navbar";
import "./css/MoviePage.css";
import { useState } from "react";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

const [StateA, SetStateA] = useState((0));
const [StateB, SetStateB] = useState((0));

  {/*let a = 0
  let b = 0 */}

function calcul(operator) {
    if (operator === "+") {
      return StateA + StateB;
    }
}
    if (operator === "-") {
      return StateA - StateB;
    }
}    if (operator === "x") {
      return StateA * StateB;
    }
}    if (operator === "/") {
      return StateA / StateB;
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

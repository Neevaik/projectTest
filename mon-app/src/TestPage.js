import Navbar from "./components/Navbar";
import "./css/MoviePage.css";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

function calcul(operator) {
    if (operator === "+") {
      let a = 0
      let b = 0
      return a + b;
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

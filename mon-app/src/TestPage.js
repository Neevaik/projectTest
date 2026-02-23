import Navbar from "./components/Navbar";
import "./css/MoviePage.css";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

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

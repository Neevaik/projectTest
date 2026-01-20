import './App.css';
import { useState } from "react";

import Home from './Home';
import TestPage from './TestPage';
import TestPage2 from './TestPage2';
import Exercice from './Exercice';

function App() {
  const [page, setPage] = useState("home");

  const goToHome = () => setPage("home");
  const goToExercice = () => setPage("exercice");
  const goToTest = () => setPage("test");
  const goToTest2 = () => setPage("test2");

  return (
    <div>
      {page === "home" && (
        <Home
          goToHome={goToHome}
          goToExercice={goToExercice}
          goToTest={goToTest}
          goToTest2={goToTest2}
        />
      )}

      {page === "exercice" && (
        <Exercice
          goToHome={goToHome}
          goToExercice={goToExercice}
          goToTest={goToTest}
          goToTest2={goToTest2}
        />
      )}

      {page === "test" && (
        <TestPage
          goToHome={goToHome}
          goToExercice={goToExercice}
          goToTest2={goToTest2}
        />
      )}

      {page === "test2" && (
        <TestPage2
          goToHome={goToHome}
          goToExercice={goToExercice}
          goToTest={goToTest}
        />
      )}
    </div>
  );
}

export default App;

import './App.css';
import { useState } from "react";

import Home from './Home';
import TestPage from './TestPage';
import TestPage2 from './TestPage2';

function App() {
  const [page, setPage] = useState("home");

  const goToHome = () => setPage("home");
  const goToTest = () => setPage("test");
  const goToTest2 = () => setPage("test2");

  return (
    <div>
      {page === "home" && (
        <Home
          goToTest={goToTest}
          goToTest2={goToTest2}
        />
      )}

      {page === "test" && (
        <TestPage
          goToHome={goToHome}
          goToTest2={goToTest2}
        />
      )}

      {page === "test2" && (
        <TestPage2
          goToHome={goToHome}
          goToTest={goToTest}
        />
      )}
    </div>
  );
}

export default App;

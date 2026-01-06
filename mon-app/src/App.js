import './App.css';
import TestPage from './TestPage';
import TestPage2 from './TestPage2';
import Home from './Home';
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && (
        <Home
          goToTest={() => setPage("test")}
          goToTest2={() => setPage("test2")}
        />
      )}

      {page === "test" && (
        <TestPage goToHome={() => setPage("home")} />
      )}

      {page === "test2" && (
        <TestPage2 goToHome={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;

import './App.css';
import TestPage from './TestPage';
import Home from './Home';
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div>
      {page === "home" && <Home goToTest={() => setPage("test")} />}
      {page === "test" && <TestPage goToHome={() => setPage("home")} />}
    </div>
  );
}

export default App;



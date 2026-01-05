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

const styles = {
  parent: {
    width: "400px",
    height: "300px",
    backgroundColor: "#add8e6",
    border: "3px solid blue",
    padding: "20px",
    margin: "50px",
  },
  child: {
    width: "200px",
    height: "100px",
    backgroundColor: "#90ee90",
    border: "3px solid green",
    marginTop: "20px",
  },
};

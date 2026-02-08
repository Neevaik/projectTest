import Navbar from "./components/Navbar";
import './css/Exercice.css';
import { useState } from "react";

function Exercice({ goToHome, goToTest, goToTest2 }) {

        const [counter, setCounter] = useState(0);

    return (
        <>
           
                <Navbar
                    title="Page Exercice"
                    goToExercice={() => { }}
                    goToHome={goToHome}
                    goToTest={goToTest}
                    goToTest2={goToTest2}
                />
            

            <div className="counter-page">
                <h1>Counter</h1>
                
                <div className="counter-controls">
                <button onClick={() => setCounter(Math.max(0,counter - 1))}>-</button>
                <p className="counter-value"onClick={() => setCounter(0)} > {counter} </p> {/* En bonus j'ai mis un bouton reset au centre */}
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            </div>
        </>
    );
}

export default Exercice;
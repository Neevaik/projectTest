import Navbar from "./components/Navbar";
import './css/Exercice.css';

function Exercice({ goToHome, goToTest, goToTest2 }) {


    return (
        <>
            <div>
                <Navbar
                    title="Page Exercice"
                    goToExercice={() => { }}
                    goToHome={goToHome}
                    goToTest={goToTest}
                    goToTest2={goToTest2}
                />
            </div>

            <div className="counter-page">
                {/* <button onClick={() => setCounter(counter + 1)}>-</button> */}
            </div>
        </>
    );
}

export default Exercice;
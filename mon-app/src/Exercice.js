import Navbar from "./components/Navbar";

function Exercice({ goToHome, goToTest, goToTest2 }) {
    return (
        <>
            <Navbar title={"Page test"} goToExercice={() => { }} goToHome={goToHome} goToTest={goToTest} goToTest2={goToTest2} />

        </>
    )
}

export default Exercice;
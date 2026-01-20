import Navbar from "./components/Navbar";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

    return (
        <div>
            <Navbar title={"Page test"} goToExercice={goToExercice} goToHome={goToHome} goToTest={() => { }} goToTest2={goToTest2} />
            <div style={styles.parent}>
                <h1>Test</h1>
                <p style={styles.secondTitle}>Appuyez sur - ou + </p>
                <div>
                </div>
                <div style={styles.counter}>
                    <span>-</span>
                    <span style={styles.value}>0</span>
                    <span>+</span>
                </div>
            </div>
        </div>
    );
}

const styles = {
    parent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "50px",
    },
    counter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
    },
    secondTitle: {
        textDecoration: "underline",
    }
}
export default TestPage;
// test
import { useState } from "react";

function TestPage({ goToHome }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={goToHome}>Retour à Home</button>

            <div style={styles.parent}>
              {/* 1ere etape faire le design de la page */}
              <h1> Test  </h1>

              <p>Appuyez sur - ou + </p>  

                <div>

                </div>

              <div style={styles.counter}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <span style={styles.value}>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
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
        width: "400px",
        height: "300px",
        backgroundColor: "#add8e6",
        border: "3px solid blue",
        padding: "20px",
        margin: "50px",
    },
      counter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
      },
}  
export default TestPage;

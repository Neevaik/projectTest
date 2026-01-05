import './App.css';

function App() {
  return (
    <div style={styles.parent}>
      <h1>Div parent</h1>

      <div style={styles.child}>
        <h2>Div enfant</h2>
      </div>
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

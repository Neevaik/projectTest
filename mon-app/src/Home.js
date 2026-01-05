function Home({ goToTest }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#add8e6" }}>
      <h1>Page d'accueil</h1>
      <button onClick={goToTest}>Aller à TestPage</button>
    </div>
    
  );
}

export default Home;

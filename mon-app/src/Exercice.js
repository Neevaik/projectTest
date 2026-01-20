import Navbar from "./components/Navbar";
import './css/Exercice.css'; 

function Exercice({ goToHome, goToTest, goToTest2 }) {
       const exercices = [
        { id: 1, title: "Apprendre le café", description: "Aujourd'hui, on va découvrir comment préparer un café parfait." },
        { id: 2, title: "Explorer la lune", description: "Imagine que tu pars explorer la lune en combinaison spatiale." },
        { id: 3, title: "Cuisine italienne", description: "Préparer une pizza maison en suivant les instructions." },
    ];


    return (
        <div className="exercice-page">
            <Navbar
                title="Page Exercice"
                goToExercice={() => {}}
                goToHome={goToHome}
                goToTest={goToTest}
                goToTest2={goToTest2}
            />

            <main className="exercice-content">
                <h1>Liste des exercices</h1>

                <ul className="exercice-list">
                    {exercices.map(ex => (
                        <li key={ex.id} className="exercice-item">
                            <h3>{ex.title}</h3>
                            <p>{ex.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default Exercice;

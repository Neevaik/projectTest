import Navbar from './components/Navbar';
import './css/HomePage.css';

function Home({ goToHome, goToExercice, goToTest, goToTest2 }) {
    return (
        <div>
            <Navbar
                title="Homepage"
                goToHome={goToHome}
                goToExercice={goToExercice}
                goToTest={goToTest}
                goToTest2={goToTest2}
            />
            <div className="home">
                <main className="home-content">
                    <h1 className="home-title">Bienvenue 👋</h1>
                    <p className="home-subtitle">
                        Choisis une page pour commencer
                    </p>

                    <div className="home-actions">
                        <button className="home-button" onClick={goToExercice}>
                            Accéder aux exercices
                        </button>

                        <button className="home-button" onClick={goToTest}>
                            Lancer le test 1
                        </button>

                        <button className="home-button" onClick={goToTest2}>
                            Lancer le test 2
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;

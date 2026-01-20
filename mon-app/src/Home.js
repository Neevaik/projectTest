import Navbar from './components/Navbar';
import './css/HomePage.css';

function Home({ goToTest, goToTest2 }) {
    return (
        <div className="home">
            <Navbar
                title="Homepage"
                goToHome={() => { }}
                goToTest={goToTest}
                goToTest2={goToTest2}
            />

            <main className="home-content">
                <h1 className="home-title">Bienvenue 👋</h1>
                <p className="home-subtitle">
                    Choisis un test pour commencer
                </p>

                <div className="home-actions">
                    <button className="home-button" onClick={goToTest}>
                        Lancer le test 1
                    </button>

                    <button className="home-button" onClick={goToTest2}>
                        Lancer le test 2
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Home;

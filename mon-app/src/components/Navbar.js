import '../css/pageTest2.css';

function Navbar({ goToHome }) {
    return (
        <div className="navbar">
            <h1 className="navTitle">Titre</h1>
            <div className="navRight">
                <button onClick={goToHome}>Retour à Home</button>
                <button className="navButton" onClick={goToHome}>T2</button>
            </div>
        </div>
    )
}

export default Navbar;
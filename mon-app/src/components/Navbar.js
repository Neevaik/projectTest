import '../css/Navbar.css';

function Navbar({ title, goToHome, goToTest, goToTest2 }) {
    const buttons = [
        { label: "Accueil", action: goToHome },
        { label: "Test", action: goToTest },
        { label: "Test 2", action: goToTest2 },
    ];

    return (
        <header className="navbar">
            <h1 className="navTitle">{title}</h1>

            <nav className="navRight">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        className="navButton"
                        onClick={btn.action}
                    >
                        {btn.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;

import '../css/pageTest2.css';

function Navbar({ title, goToHome, goToTest, goToTest2 }) {

    const buttons = [
        { label: "Retour à Home", action: goToHome },
        { label: "Test", action: goToTest },
        { label: "Test 2", action: goToTest2 },
    ];

    return (
        <div className="navbar">
            <h1 className="navTitle">{title}</h1>
            <div className="navRight">
                {buttons.map((btn, index) => (
                    <button key={index} onClick={btn.action}>
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Navbar;
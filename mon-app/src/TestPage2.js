import Image from './img/GigaTchad.jpeg';
import Button from './components/Buttons';

function TestPage2({ goToHome }) {

    return (
        <div>
            <button onClick={goToHome}>Retour à Home</button>
        <Button/>
            <div style={styles.layout}>
                <div style={styles.navbar}>
                    <img src={Image} alt="Logo" style={styles.logo}/>
                    <div style={styles.navRight}>
                    <div style={styles.navItem}>Home</div>
                    <div style={styles.navItem}>Cart</div>
                    </div>
                </div>
                <div style={styles.rightColumn}>
                    <div style={styles.content}>
                        <h1 style={styles.title}>Login</h1>
                        <div style={styles.loginForm}>
                            <input
                            type="email"
                            placeholder="Email"
                            style={styles.inputField}
                            />
                            <input
                            type="password"
                            placeholder="Password"
                            style={styles.inputField}
                            />
                            <button style={styles.submitButton} type="submit">Valider</button>
                        </div>
                    </div>
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
    navbar: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between", 
        gap: "30px",
        padding: "15px 30px",
        backgroundColor: "#eee",
    },
    navItem: {
        cursor: "pointer", // Optionnel
        fontWeight: "bold", // Optionnel
    },
    navRight: {
        display: "flex",
        gap: "30px",
    },

    logo: {
        height: "40px",
        width: "auto",
    },
    layout: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },

    leftColumn: {
        width: "200px",          // colonne isolée
        backgroundColor: "#eee",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    rightColumn: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",       // centre horizontalement
        justifyContent: "center",   // centre verticalement
        minHeight: "80vh",          // hauteur pour le centrage vertical
        padding: "10px",
    },
    content: {
        width: "100%",
        maxWidth: "400px",   // largeur max pour le formulaire
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        width: "100%",
        maxWidth: "400px", // largeur du formulaire
        marginTop: "20px",
    },

    inputField: {
        width: "100%",
        padding: "10px 15px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
    },

    submitButton: {
        width: "100%",
        padding: "10px 15px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
    },


}
export default TestPage2;

// Test pour combler : https://www.lipsum.com/
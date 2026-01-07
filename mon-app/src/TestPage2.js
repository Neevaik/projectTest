
function TestPage2({ goToHome }) {

    return (
        <div>
            <button onClick={goToHome}>Retour à Home</button>

<div style={styles.layout}>

            <div style={styles.leftColumn}>
                <h1>Navigation</h1>
            </div>

            <div style={styles.rightColumn}>
            <div style={styles.content}>
                <h1 style={styles.title}>Homepage</h1>
                <div style={styles.columns}>
                    <p style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p style={styles.paragraph}>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

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
    columns: {
        display: "flex",
        gap: "20px",
        maxWidth: "1100px",
    },
    paragraph: {
        flex: 1,
        lineHeight: "1.5",
    },
    layout: {
    display: "flex",
    width: "100%",
    },
    title:{
    textAlign: "center",
    marginBottom: "20px",
    },

     leftColumn: {
    width: "200px",          // colonne isolée
    backgroundColor: "#eee",
    padding: "10px",
    },
    rightColumn: {
    flex: 1,                 // prend tout l’espace restant
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "10px",
    },

    content: {
    width: "100%",
    maxWidth: "1100px",   // largeur centrée
    paddingTop: "15vh",
    },
}
export default TestPage2;

// Test pour combler : https://www.lipsum.com/
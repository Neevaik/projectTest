import './css/pageTest2.css';
import Navbar from './components/Navbar';

function TestPage2({ goToExercice, goToHome, goToTest }) {

const exercices = [
  {
    id: 1,
    title: "Écrire ton nom",
    description: "Prends une feuille et écris ton nom en entier, puis relis-le à voix haute.",
    difficulty: "Facile"
  },
  {
    id: 2,
    title: "Compter jusqu'à 10",
    description: "Comptez de 1 à 10 à voix haute, puis essayez en sautant les chiffres pairs.",
    difficulty: "Facile"
  },
  {
    id: 3,
    title: "Dessiner un carré",
    description: "Dessine un carré sur une feuille et colorie-le avec ta couleur préférée.",
    difficulty: "Facile"
  },
  {
    id: 4,
    title: "Étirer ses bras",
    description: "Levez vos bras au-dessus de votre tête et faites trois grandes respirations profondes.",
    difficulty: "Facile"
  },
  {
    id: 5,
    title: "Lister tes fruits préférés",
    description: "Écris une liste de 5 fruits que tu aimes le plus et partage-la avec quelqu'un si possible.",
    difficulty: "Facile"
  }
];

    return (
        <div>
            <div >
                <Navbar title="Page test 2" goToExercice={goToExercice} goToHome={goToHome} goToTest={goToTest} goToTest2={() => { }} />
            </div>
        </div>
    );
}


export default TestPage2;
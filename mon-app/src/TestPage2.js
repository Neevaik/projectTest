import './css/pageTest2.css';
import Navbar from './components/Navbar';
import CardTest from './components/CardTest';
import userCard from './components/userCard';

function TestPage2({ goToExercice, goToHome, goToTest }) {

  const users = [
  {
    name: "Alice",
    age: 25,
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Bob",
    age: 30,
    isOnline: false,
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    name: "Charlie",
    age: 22,
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
    {
    name: "Paul",
    age: 33,
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  },
   {
    name: "Tom",
    age: 44,
    isOnline: false,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
   {
    name: "Lisa",
    age: 19,
    isOnline: true,
    avatar: "https://randomuser.me/api/portraits/men/19.jpg"
  },
];

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

  // const newExercices = exercices.map(e => console.log("chaque élément : ", e))

  return (
    <div>
      <div >
        <Navbar title="Page test 2" goToExercice={goToExercice} goToHome={goToHome} goToTest={goToTest} goToTest2={() => { }} />
      </div>
      <div>
        {exercices.map(x => (
          <CardTest a={x.title} b={x.description} jeanMichel={x.difficulty} />
        ))}
      </div>
      <div>
                {users.map(x => (
          <userCard name={x.name} age={x.age} avatar={x.avatar} />
        ))}
      </div>

    </div>
  );
}

export const exercices = [
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

export default TestPage2;
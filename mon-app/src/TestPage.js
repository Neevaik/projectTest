import Navbar from "./components/Navbar";
import Styles from "./css/Styles.css";
import Movies from "./components/Movies";
import { movies } from '../src/data'
import { watchedMovies } from '../src/data'

function TestPage({ goToExercice, goToHome, goToTest2 }) {

        const watchedOnly = movies.filter(movie =>
  watchedMovies.some(w => w.id === movie.id)
);
    return (
        <div>
            <Navbar title={"Page test"} goToExercice={goToExercice} goToHome={goToHome} goToTest={() => { }} goToTest2={goToTest2} />
            <div style={Styles.parent}>
                <h1>Films</h1>
                <div>
                </div>
                <div style={Styles.styles}>

                </div>
            </div>
        </div>
    );
}


export default TestPage;
// test
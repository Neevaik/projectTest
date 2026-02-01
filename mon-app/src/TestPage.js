import Navbar from "./components/Navbar";
import { movies } from '../src/data/movies'
import { watchedMovies } from '../src/data/watchedMovies'
import MovieCard from "./components/MovieCard";

function TestPage({ goToExercice, goToHome, goToTest2 }) {

    const notWatched = movies.filter(x => !watchedMovies.some(y => x.id === y.id));

    return (
        <>
            <div>
                <Navbar title={"Page test"} goToExercice={goToExercice} goToHome={goToHome} goToTest={() => { }} goToTest2={goToTest2} />
            </div>

            <div>
                {notWatched.map(movie => (
                    <MovieCard id={movie.id} title={movie.title} year={movie.year} />
                ))}
            </div>
        </>
    );
}

export default TestPage;
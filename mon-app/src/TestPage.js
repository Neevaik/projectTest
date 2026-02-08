import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { movies } from '../src/data/movies'
import "./css/MoviePage.css";
import { useState } from "react";

function TestPage({ goToExercice, goToHome, goToTest2 }) {
  const [movie, setMovie] = useState(movies);

  return (
    <>
      <Navbar
        title={"Page test"}
        goToExercice={goToExercice}
        goToHome={goToHome}
        goToTest={() => {}}
        goToTest2={goToTest2}
      />

      <div className="test-page">
        <div className="movies-container">
          {movie.map((m) => (
            <MovieCard
              key={m.id}
              title={m.title}
              year={m.year}
              like={m.like}
              image={m.image}
            />
          ))}
        </div>

        <button onClick={() => setMovie([])}>RESET</button>
      </div>
    </>
  );
}

export default TestPage;

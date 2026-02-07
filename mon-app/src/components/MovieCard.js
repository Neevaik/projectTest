import "../css/MovieCard.css";

function MovieCard({ id, title, year }) {
  return (
    <div className="movie-card">
      <p className="movie-id">{id}</p>
      <p className="movie-title">{title}</p>
      <p className="movie-year">{year}</p>
    </div>
  );
}

export default MovieCard;

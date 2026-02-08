import "../css/MovieCard.css";

function MovieCard({ title, year, like, image }) {
  
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <p className="movie-title">{title}</p>
      <p className="movie-year">{year}</p>

      {like === false ? (
        <button onClick={() => console.log()}>Like ❤️</button>
      ) : (
        <p>Film liké ✅</p>
      )}
    </div>
  );
}

export default MovieCard;

import React from "react";
import "./movieCard.css";

function MovieCard({
  title,
  year,
  rating,
  genre,
  description,
}) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {rating}
      </p>

      <p>
        <strong>Genre:</strong> {genre}
      </p>

      <p className="description">{description}</p>
    </div>
  );
}

export default MovieCard;
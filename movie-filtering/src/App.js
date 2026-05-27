import React, { useState } from "react";
import MovieCard from "./components/movieCard";
import moviesData from "./utils/movieDetails";
import "./App.css";

function App() {
  const [movies] = useState(moviesData);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", "Action", "Sci-Fi", "Romance"];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app">
      <h1>Movie List Filter & Search</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={
              selectedGenre === genre
                ? "active-btn"
                : ""
            }
          >
            {genre}
          </button>
        ))}
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genre={movie.genre}
              description={movie.description}
            />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">
          No movies found
        </h2>
      )}
    </div>
  );
}

export default App;
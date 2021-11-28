import "./App.css";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Header from "./components/UI/Header";
import Container from "./components/UI/Container";
import Footer from "./components/UI/Footer";
import Button from "./components/UI/Button";
import Movies from "./components/Movies";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://swapi.dev/api/films";

  function fetchMoviesHandler() {
    fetch(baseURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.realese_date,
          };
        });
        setMovies(transformedMovies)
      });
  }

  console.log(movies);

  return (
    <Container>
      <Header />
      <h1>Text in the container passed through props</h1>
      <MovieList movies={movies} />
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <Footer />
    </Container>
  );
}

export default App;

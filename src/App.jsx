import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import MovieProvider from "./context/MovieContext";

function App() {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [search, setSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options).then((res) => res.json()),
        fetch(url2, options).then((res) => res.json()),
      ]);
      setMovies(res1.results);
      setTopRated(res2.results);
    };

    fetchMovies();
  }, []);
  return (
    <MovieProvider>
      <div className="bg-black pb-10">
        <Header title={"Movie App"} onSearch={handleSearch} />
        <Banner />
        {search.length > 0 ? (
          <MovieSearch title={"Search Result"} data={search} />
        ) : (
          <>
            <MovieList title={"Popular Movies"} data={movies} />
            <MovieList title={"Top Rated Movies"} data={topRated} />
          </>
        )}
      </div>
    </MovieProvider>
  );
}

export default App;

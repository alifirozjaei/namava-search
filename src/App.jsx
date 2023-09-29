import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar/SideBar.jsx";
import SearchIcon from "./components/Icons/SearchIcon.jsx";
import CloseIcon from "./components/Icons/CloseIcon.jsx";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const BASE_URL = "https://www.namava.ir/api/v3.0/search/advance";
const moviesInitialValue = { total: 0, items: [] };

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(moviesInitialValue);
  const [isLoad, setIsLoad] = useState(false);

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const fetchData = async (movieType, pageNumber, searchQuery) => {
    let result = moviesInitialValue;
    try {
      setIsLoad(true);
      const { data } = await axios.get(BASE_URL, {
        params: {
          type: movieType,
          count: 20,
          page: pageNumber,
          query: searchQuery,
        },
      });

      if (data.succeeded) {
        result = data.result.result_items[0].groups.Media;
      }
    } catch (error) {
      console.log(error);
      result = moviesInitialValue;
    } finally {
      setIsLoad(false);
      return result;
    }
  };

  // load first page after search
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const data = await fetchData("all", 1, query);
        setMovies(data);
      } else {
        setMovies(moviesInitialValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchMoreData = () => {
    console.log("fetch more");
    fetchData("all", movies.items.length / 20 + 1, query).then((data) =>
      setMovies((prev) => ({
        total: prev.total,
        items: [...prev.items, ...data.items],
      }))
    );
  };

  return (
    <div className="container">
      <div className="main">
        {/* SideBar & Filter */}
        <SideBar />

        <div className="search-container">
          {/* Search From */}
          <div className="search-box">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="فیلم و سریال"
              onChange={searchHandler}
              value={query}
            />
            <span
              className="btn flex align-items-center"
              onClick={() => setQuery("")}
            >
              <CloseIcon />
            </span>
          </div>

          {/* Show Search Result */}
          <InfiniteScroll
            dataLength={movies.items.length}
            next={fetchMoreData}
            onScroll={() => console.log("scroll")}
            hasMore={movies.total != movies.items.length}
          >
            <div className="grid-3 grid-lg-5">
              {!!movies?.total &&
                movies.items.map((movie) => (
                  <MovieCard key={movie.id} data={movie} />
                ))}
            </div>
          </InfiniteScroll>

          
        </div>
      </div>
    </div>
  );
};

export default App;
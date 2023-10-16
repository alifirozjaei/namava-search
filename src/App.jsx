import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./components/SideBar/SideBar.jsx";
import SearchIcon from "./components/Icons/SearchIcon.jsx";
import CloseIcon from "./components/Icons/CloseIcon.jsx";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EmptyResult from "./components/EmptyResult/EmptyResult.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import fetchData from "./services/fetchData";

const moviesInitialValue = { total: 0, items: [] };

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 1000);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(moviesInitialValue);
  const [typeMovie, setTypeMovie] = useState(false);
  const [typeSeries, setTypeSeries] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setQuery(searchParams.get("query") ? searchParams.get("query") : "");
    setTypeMovie(searchParams.get("type") == "movie");
    setTypeSeries(searchParams.get("type") == "searies");
  }, []);

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const typeMoviesChangeHandler = (checked) => {
    setTypeMovie(checked);
  };

  const typeSeriesChangeHandler = (checked) => {
    setTypeSeries(checked);
  };

  const onClearHandler = () => {
    setTypeMovie(false);
    setTypeSeries(false);
  };

  const getType = () => {
    if (typeMovie && !typeSeries) {
      return "movie";
    } else if (!typeMovie && typeSeries) {
      return "series";
    } else {
      return "all";
    }
  };

  // load first page after search
  useEffect(() => {
    (async () => {
      let urlParams = {};
      if (debouncedQuery) {
        urlParams["query"] = debouncedQuery;
        const data = await fetchData(
          moviesInitialValue,
          getType(),
          1,
          debouncedQuery
        );
        setMovies(data);
        setPage(Math.ceil(data.total / 20) + 1);
      } else {
        setMovies(moviesInitialValue);
      }

      if (getType() != "all") {
        urlParams["type"] = getType();
      }
      setSearchParams(urlParams);
    })();
  }, [debouncedQuery, typeMovie, typeSeries]);

  const fetchMoreData = () => {
    if (Math.ceil(movies.items.length / 20) + 1 < page) {
      fetchData(
        moviesInitialValue,
        getType(),
        Math.ceil(movies.items.length / 20) + 1,
        query
      ).then((data) =>
        setMovies((prev) => ({
          total: prev.total,
          items: [...prev.items, ...data.items],
        }))
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main">
          {/* SideBar & Filter */}
          <SideBar
            onTypeMoviesChange={typeMoviesChangeHandler}
            onTypeSeriesChange={typeSeriesChangeHandler}
            movie={typeMovie}
            series={typeSeries}
            onClear={onClearHandler}
          />

          <div className="search-container">
            {/* Search From */}
            <div className="search-box">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="فیلم، سریال، بازیگر و ژانر"
                onChange={searchHandler}
                value={query}
              />
              {query && (
                <span
                  className="btn flex align-items-center"
                  onClick={() => setQuery("")}
                >
                  <CloseIcon />
                </span>
              )}
            </div>

            {/* Show Search Result */}
            <InfiniteScroll
              dataLength={movies.items.length}
              next={fetchMoreData}
              // onScroll={() => console.log("scroll")}
              hasMore={movies.total != movies.items.length}
            >
              <div className="grid-3 grid-lg-5 grid-xlg-7">
                {!!movies?.total &&
                  movies.items.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
              </div>
            </InfiniteScroll>

            {!movies?.total && !query && <EmptyResult />}
            {!movies?.total && !!query && <NotFound />}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;

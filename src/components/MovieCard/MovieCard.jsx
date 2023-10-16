import React, { useState } from "react";
import styles from "./MovieCard.module.css";
import HeartIcon from "../Icons/HeartIcon.jsx";
import IMDBIcon from "../Icons/IMDBIcon.jsx";
import MicIcon from "../Icons/MicIcon.jsx";
import TextIcon from "../Icons/TextIcon.jsx";
import fetchMovieDetail from "../../services/fetchMovieDetail";

const MovieCard = ({ data }) => {
  const [previw, setPreview] = useState({
    id: null,
    hit: null,
    year: null,
    imdb: null,
    hasPersianSubtitle: null,
    dubsType: null,
  });

  const [loaded, setLoaded] = useState(false);

  let hoverTimer;

  const fetchData = () => {
    if (previw.id == null) {
      fetchMovieDetail(data.id).then((data) => setPreview(data));
    }
  };

  const mouseEnterHandler = () => {
    hoverTimer = setTimeout(fetchData, 300);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(hoverTimer);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles["card-content"]}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img
          src={data.image_url}
          style={loaded ? {} : { display: "none" }}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        {!loaded && (
          <div
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "5px",
              backgroundColor: "#37383e",
            }}
          ></div>
        )}
        <div className={styles["card-overlay"]}>
          <p>
            {data.type.includes("Movie") ? "فیلم" : "سریال"} - {previw?.year}
          </p>
          {previw?.hit && (
            <p className="flex align-items-center">
              <HeartIcon />
              {previw.hit}%
            </p>
          )}
          {previw?.imdb && (
            <p className="flex align-items-center">
              <IMDBIcon />
              {previw.imdb}
            </p>
          )}
          {previw?.dubsType != "None" && (
            <p className="flex align-items-center">
              <MicIcon />
              دوبله نماوا
            </p>
          )}
          {previw?.hasPersianSubtitle && (
            <p className="flex align-items-center">
              <TextIcon />
              زیرنویس
            </p>
          )}
        </div>
      </div>
      <div className={styles["card-title"]}>{data.name}</div>
    </div>
  );
};

export default MovieCard;

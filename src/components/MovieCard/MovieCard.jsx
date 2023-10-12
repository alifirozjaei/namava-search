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

  const fetchData = () => {
    if (previw.id == null) {
      fetchMovieDetail(data.id).then((data) => setPreview(data));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles["card-content"]} onMouseEnter={fetchData}>
        <img src={data.image_url} />
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

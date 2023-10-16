import React from "react";
import styles from "./SideBar.module.css";
import CheckBox from "../CheckBox/CheckBox.jsx";

const SideBar = ({
  onTypeMoviesChange,
  onTypeSeriesChange,
  movie,
  series,
  onClear,
}) => {
  return (
    <div className={styles.sidebar}>
      <div
        className="flex justify-content-between"
        style={{ marginBottom: "15px" }}
      >
        <span className="font-size-16">فیلترها</span>
        <button className="btn color-info" onClick={() => onClear()}>
          حذف همه
        </button>
      </div>
      <div className="flex">
        <CheckBox onChange={onTypeMoviesChange} id="film" checked={movie}>
          فیلم
        </CheckBox>
        <CheckBox onChange={onTypeSeriesChange} id="series" checked={series}>
          سریال
        </CheckBox>
      </div>
    </div>
  );
};

export default SideBar;

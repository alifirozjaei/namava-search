import React from "react";
import styles from "./SideBar.module.css";
import CheckBox from "../CheckBox/CheckBox.jsx";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div
        className="flex justify-content-between"
        style={{ marginBottom: "15px" }}
      >
        <span className="font-size-16">فیلترها</span>
        <button className="btn color-info">حذف همه</button>
      </div>
      <div className="flex">
        <CheckBox id="film">فیلم</CheckBox>
        <CheckBox id="series">سریال</CheckBox>
      </div>
    </div>
  );
};

export default SideBar;

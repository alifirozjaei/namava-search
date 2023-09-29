import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ id, children }) => {
  return (
    <label className={styles["checkbox-container"]} htmlFor={id}>
      <input type="checkbox" id={id} />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
};

export default CheckBox;

import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ id, children, onChange }) => {
  return (
    <label className={styles["checkbox-container"]} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
};

export default CheckBox;

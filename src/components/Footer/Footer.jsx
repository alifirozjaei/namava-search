import React from "react";
import styles from "./footer.module.css";
import ChervonUp from "../Icons/ChervonUp.jsx";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>اپلیکیشن</li>
        <li>فرصت شغلی</li>
        <li>تبلیغ در نماوا</li>
        <li>خرید اشتراک</li>
        <li>کارت هدیه</li>
        <li>سوالات متداول</li>
        <li>تماس با ما</li>
        <li>درباره نماوا</li>
        <li>
          <span style={{ marginLeft: "3px" }}>سایر موارد</span>
          <ChervonUp />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

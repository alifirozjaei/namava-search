import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NamavaIcon from "../Icons/NamavaIcon.jsx";
import SearchIcon from "../Icons/SearchIcon.jsx";
import MessageIcon from "../Icons/MessageIcon.jsx";
const Navbar = () => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const onScroll = (e) => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // if scroll up show navbar
        setTop(0);
      } else {
        // if scroll down hide navbar
        setTop("-100px");
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [top]);

  return (
    <nav className={styles.navbar} style={{ top: top }}>
      <div className={styles["navbar-link"]}>
        <NamavaIcon />
        <span className={styles["navbar-link-item"]}>خانه</span>
        <span className={styles["navbar-link-item"]}>فیلم ها</span>
        <span className={styles["navbar-link-item"]}>سریال ها</span>
        <span className={styles["navbar-link-item"]}>دسته بندی</span>
        <span className={styles["navbar-link-item"]}>تازه ها</span>
        <span className={styles["navbar-link-item"]}>کودکان</span>
        <span className={styles["navbar-link-item"]}>پردیس نماوا</span>
        <span className={styles["navbar-link-item"]}>نماوا مگ</span>
      </div>

      <div className={styles["profile-box"]}>
        <SearchIcon />
        <MessageIcon />
        <img
          className={styles.profile}
          src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png"
        />
      </div>
    </nav>
  );
};

export default Navbar;

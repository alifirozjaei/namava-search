import React from "react";
import MovieIcon from "../Icons/MovieIcon.jsx";

const EmptyResult = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex align-items-center justify-content-between flex-column"
    >
      <MovieIcon />
      <p
        style={{
          fontSize: "14px",
          color: "#AAA",
          width: "400px",
          textAlign: "center",
        }}
      >
        عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق
        فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
      </p>
    </div>
  );
};

export default EmptyResult;

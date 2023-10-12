import React from "react";
import NotFoundIcon from "../Icons/NotFoundIcon.jsx";

const NotFound = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex align-items-center justify-content-between flex-column"
    >
      <NotFoundIcon />
      <p
        style={{
          fontSize: "14px",
          color: "#AAA",
          width: "400px",
          textAlign: "center",
        }}
      >
        موردی یافت نداشت.
      </p>
    </div>
  );
};

export default NotFound;

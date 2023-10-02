import React from "react";

const EmptyResult = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex align-items-center justify-content-between flex-column"
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 464 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M420.55 327.07C414.93 326.07 410.81 322.68 406.89 318.73C388.39 300.063 369.827 281.473 351.2 262.96C350.644 262.322 350.123 261.654 349.64 260.96C325.44 276.11 299.91 280.24 272.81 272.12C252.662 266.273 235.277 253.398 223.81 235.83C211.842 218.176 206.514 196.854 208.773 175.646C211.032 154.438 220.732 134.716 236.15 119.98C269.35 88.0596 320.23 85.5296 356.5 114.86C389.95 141.86 402.5 192.71 374.67 235.98C375.443 236.311 376.169 236.741 376.83 237.26C395.5 255.86 414 274.46 432.65 292.96C436.65 296.88 439.98 300.96 441 306.62V311.17C439.8 313.99 438.93 317.03 437.33 319.6C434.56 324.01 430.01 325.95 425.1 327.07H420.55ZM217.43 185.36C217.523 207.039 226.189 227.802 241.538 243.113C256.887 258.424 277.67 267.04 299.35 267.08C344.2 267.08 381.09 230.15 381.01 185.35C380.93 140.26 344.19 103.5 299.22 103.51C254.25 103.52 217.33 140.47 217.43 185.36ZM376.6 275.51C376.54 275.44 376.79 275.73 377.05 275.99C389.903 288.843 402.753 301.683 415.6 314.51C416.126 315.053 416.687 315.56 417.28 316.03C419.023 317.403 421.213 318.085 423.428 317.943C425.643 317.801 427.727 316.845 429.28 315.26C432.99 311.5 432.81 306.04 428.71 301.91C419.417 292.576 410.107 283.263 400.78 273.97C396.88 270.06 392.98 266.15 389.54 262.72L376.6 275.51ZM382.06 256.08L369.95 243.92L357.81 255.99L370.04 268.13C372.04 266.28 374.31 264.29 376.44 262.13C378.57 259.97 380.34 257.95 382.06 256.08Z"
          fill="#AAAAAA"
        ></path>
        <path
          d="M371.92 185.38C371.8 225.38 339.01 258.11 299.13 257.99C259.25 257.87 226.41 225.09 226.52 185.2C226.63 145.31 259.43 112.48 299.31 112.59C339.19 112.7 372.04 145.5 371.92 185.38ZM299.27 121.68C286.689 121.67 274.388 125.391 263.922 132.373C253.455 139.354 245.295 149.282 240.471 160.901C235.647 172.521 234.378 185.31 236.822 197.651C239.267 209.992 245.316 221.331 254.205 230.234C263.094 239.137 274.424 245.204 286.761 247.668C299.098 250.132 311.889 248.883 323.516 244.077C335.143 239.272 345.084 231.127 352.082 220.671C359.08 210.216 362.82 197.921 362.83 185.34C362.78 168.489 356.071 152.341 344.164 140.416C332.258 128.491 316.121 121.757 299.27 121.68Z"
          fill="#AAAAAA"
        ></path>
        <path
          d="M301.3 130.79C324.02 132.79 340.48 143.72 349.72 164.86C351.05 167.86 350.15 170.53 347.62 171.56C345.09 172.59 342.75 171.44 341.39 168.33C334.68 153.09 323.19 143.79 306.86 140.56C304.698 140.189 302.513 139.968 300.32 139.9C296.79 139.7 294.69 138.03 294.71 135.28C294.73 132.53 296.99 130.73 300.62 130.79H301.3Z"
          fill="#AAAAAA"
        ></path>
        <path
          d="M349.11 189.8C348.218 189.78 347.353 189.496 346.622 188.984C345.892 188.472 345.33 187.755 345.007 186.924C344.684 186.092 344.615 185.184 344.808 184.313C345.002 183.443 345.449 182.649 346.094 182.032C346.738 181.416 347.551 181.004 348.429 180.85C349.308 180.695 350.212 180.804 351.029 181.164C351.845 181.523 352.536 182.116 353.015 182.869C353.494 183.621 353.74 184.498 353.72 185.39C353.659 186.574 353.148 187.691 352.291 188.51C351.434 189.33 350.296 189.792 349.11 189.8Z"
          fill="#AAAAAA"
        ></path>
        <path
          d="M330.88 266.62H336.79V317.22H292.34V272.28C289.183 272.029 286.042 271.608 282.93 271.02V356.02H84.28V236.86H228.83C226.665 233.907 224.688 230.821 222.91 227.62H87.25C86.35 227.62 85.46 227.51 84.25 227.44V108.29H258.16C268.729 102.638 280.352 99.2331 292.3 98.29V87.14H336.76V106.51C339.66 107.897 342.481 109.442 345.21 111.14V83.55C345.21 78.72 344.59 78.04 339.74 78.03C322.867 78.03 306.003 78.03 289.15 78.03C284.5 78.03 283.15 79.5 283.08 84.22C283.01 88.94 283.08 93.74 283.08 98.74H84.14C84.14 93.74 84.14 88.98 84.14 84.22C84.14 79.46 82.72 78.03 78.06 78.03C61.2 77.99 44.3367 77.99 27.47 78.03C22.62 78.03 22 78.72 22 83.55V380.6C22 385.48 22.6 386.16 27.43 386.17C44.3033 386.17 61.1667 386.17 78.02 386.17C82.71 386.17 84.11 384.7 84.14 380.01C84.17 375.32 84.14 370.48 84.14 365.44H283.07C283.07 370.44 283.07 375.24 283.07 380.01C283.07 384.78 284.49 386.15 289.17 386.17C306.037 386.17 322.903 386.17 339.77 386.17C344.6 386.17 345.2 385.48 345.2 380.6V259.45C340.659 262.278 335.865 264.679 330.88 266.62ZM30.5 87.14H74.96V137.53H30.5V87.14ZM30.5 147.02H75.07V197.51H30.41L30.5 147.02ZM30.42 206.96H75.01V257.23H30.33L30.42 206.96ZM30.5 266.62H74.97V317.22H30.41L30.5 266.62ZM75.1 376.91H30.5V326.67H75.05L75.1 376.91ZM336.84 376.91H292.2V326.67H336.75L336.84 376.91Z"
          fill="#AAAAAA"
        ></path>
      </svg>
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

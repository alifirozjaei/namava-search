import React from "react";

const NotFound = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="flex align-items-center justify-content-between flex-column"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M76.1624 75.9562C75.8589 76.9957 75.2224 77.9068 74.3508 78.5494C73.4791 79.1921 72.4206 79.5307 71.3378 79.5132H27.4036C24.2106 79.5132 21.6185 77.0483 21.6185 74.0132V17.6931C21.6185 14.7106 24.1624 12.2939 27.2983 12.2939H65.5571L63.5834 10.101H26.1054C22.3466 10.101 19.2983 13.0001 19.2983 16.5746V75.2588C19.2983 78.8334 22.3466 81.7325 26.1054 81.7325H71.8334C73.1488 81.75 74.4412 81.3866 75.5548 80.6862C76.6684 79.9858 77.5557 78.9783 78.1097 77.7852L76.1624 75.9562Z"
          fill="#666666"
        ></path>
        <path
          d="M78.6449 73.1053V26.9035L76.3247 24.3114V70.9561L78.6449 73.1053Z"
          fill="#666666"
        ></path>
        <path
          d="M63.5835 10.0878L78.6449 26.9036V30.0308L60.0879 10.0878H63.5835Z"
          fill="#666666"
        ></path>
        <path
          d="M77.2765 28.7633H64.5572C64.1753 28.7696 63.7959 28.7007 63.4407 28.5605C63.0854 28.4202 62.7613 28.2113 62.4868 27.9458C62.2123 27.6802 61.9928 27.3632 61.8408 27.0128C61.6888 26.6624 61.6074 26.2855 61.6011 25.9036V11.2369H63.6098V25.9036C63.6234 26.1414 63.7308 26.3641 63.9084 26.5228C64.086 26.6815 64.3194 26.7633 64.5572 26.7501H77.2765V28.7633Z"
          fill="#666666"
        ></path>
        <path
          d="M49.5642 38.7049C54.5028 39.1435 58.0773 41.4418 60.0905 45.9154C60.3799 46.5558 60.1826 47.1128 59.6519 47.3321C59.1212 47.5514 58.5905 47.3058 58.2922 46.6479C56.8361 43.4242 54.3449 41.4549 50.7878 40.7751C50.3181 40.6937 49.8433 40.6453 49.3668 40.6304C48.5992 40.5909 48.1431 40.2356 48.1475 39.6567C48.1519 39.0777 48.6431 38.6918 49.4326 38.7049C49.4633 38.7093 49.5115 38.7049 49.5642 38.7049Z"
          fill="#666666"
        ></path>
        <path
          d="M59.9634 51.1874C59.7768 51.1771 59.5974 51.112 59.4476 51.0004C59.2977 50.8887 59.1841 50.7354 59.1207 50.5596C59.0574 50.3838 59.0473 50.1933 59.0915 50.0117C59.1358 49.8302 59.2325 49.6657 59.3696 49.5387C59.5068 49.4118 59.6782 49.328 59.8626 49.2979C60.047 49.2677 60.2362 49.2925 60.4066 49.3692C60.5771 49.4458 60.7211 49.571 60.8209 49.7289C60.9207 49.8869 60.9718 50.0708 60.9677 50.2576C60.9509 50.5116 60.8375 50.7495 60.6507 50.9225C60.4639 51.0954 60.2179 51.1902 59.9634 51.1874Z"
          fill="#666666"
        ></path>
        <path
          d="M79.4938 79.3146C78.7949 79.3178 78.1225 79.047 77.621 78.5602L62.7351 64.0865C62.2674 63.6382 61.9867 63.0295 61.9493 62.3827C61.9119 61.736 62.1205 61.099 62.5333 60.5997C64.9502 57.6654 66.2603 53.9757 66.235 50.1742C66.2 41.2795 59.0245 34.0032 49.9017 33.5646C47.5458 33.4415 45.1896 33.8017 42.978 34.6231C40.7665 35.4445 38.7464 36.7097 37.0421 38.3409C35.4179 39.8666 34.1232 41.7086 33.2376 43.7535C32.3521 45.7984 31.8945 48.0029 31.8929 50.2313C31.9039 52.963 32.5904 55.6497 33.8913 58.0518C35.1923 60.4539 37.0672 62.4969 39.3491 63.9988C39.8907 64.3628 40.2749 64.918 40.4245 65.5532C40.5742 66.1884 40.4783 66.8567 40.1561 67.4242C39.9774 67.7394 39.7356 68.0142 39.4458 68.2316C39.156 68.4489 38.8244 68.6041 38.4719 68.6874C38.1069 68.7721 37.7285 68.7815 37.3598 68.7152C36.9911 68.6488 36.6397 68.508 36.3271 68.3014C33.3402 66.3246 30.8875 63.641 29.1866 60.4887C27.4858 57.3365 26.5894 53.8131 26.5771 50.2313C26.5771 38.1523 36.6649 28.3234 49.0684 28.3234C61.4719 28.3234 71.5596 38.1523 71.5596 50.2532C71.5659 54.4062 70.3618 58.471 68.0947 61.9506L81.371 74.8672C81.6196 75.1081 81.8172 75.3964 81.9522 75.7151C82.0871 76.0338 82.1567 76.3764 82.1567 76.7225C82.1567 77.0686 82.0871 77.4112 81.9522 77.7299C81.8172 78.0486 81.6196 78.3369 81.371 78.5778C80.8651 79.0584 80.1916 79.3228 79.4938 79.3146ZM78.7219 77.4242C78.9289 77.6247 79.2057 77.7367 79.4938 77.7367C79.7819 77.7367 80.0588 77.6247 80.2657 77.4242C80.364 77.332 80.4423 77.2205 80.4958 77.0968C80.5494 76.9731 80.577 76.8397 80.577 76.7049C80.577 76.5702 80.5494 76.4368 80.4958 76.3131C80.4423 76.1894 80.364 76.0779 80.2657 75.9856L66.0333 62.1392L66.4193 61.5865C68.7439 58.2567 69.9873 54.2922 69.9807 50.2313C69.9807 39.0251 60.5991 29.9067 49.0684 29.9067C37.5377 29.9067 28.1605 39.0295 28.1605 50.2313C28.1743 53.5542 29.0087 56.8223 30.5895 59.7451C32.1703 62.668 34.4486 65.1552 37.2219 66.9856C37.3502 67.0691 37.4938 67.1264 37.6443 67.1543C37.7948 67.1821 37.9494 67.18 38.0991 67.1479C38.2417 67.1155 38.3761 67.054 38.4939 66.9672C38.6116 66.8804 38.7102 66.7702 38.7833 66.6435C38.9086 66.4258 38.9462 66.1684 38.8883 65.9239C38.8305 65.6794 38.6815 65.4662 38.4719 65.3278C35.9732 63.679 33.9211 61.4378 32.4985 58.8038C31.0759 56.1699 30.327 53.2249 30.3184 50.2313C30.3182 47.7893 30.8178 45.3731 31.7863 43.1314C32.7548 40.8897 34.1717 38.8698 35.95 37.1962C37.8102 35.4164 40.0151 34.0363 42.4288 33.141C44.8426 32.2456 47.4142 31.8539 49.985 31.99C59.95 32.4506 67.7877 40.433 67.8271 50.1611C67.8553 54.3294 66.4178 58.375 63.7657 61.5909C63.6073 61.785 63.5274 62.0316 63.542 62.2817C63.5567 62.5319 63.6647 62.7675 63.8447 62.9418L78.7219 77.4242Z"
          fill="#666666"
        ></path>
        <path
          d="M84.8643 84.636C84.2143 84.6214 83.5831 84.4152 83.0498 84.0433C82.5165 83.6714 82.1048 83.1503 81.8663 82.5454C81.6279 81.9406 81.5733 81.2788 81.7094 80.643C81.8455 80.0072 82.1662 79.4258 82.6313 78.9715C83.0965 78.5172 83.6854 78.2103 84.3242 78.0893C84.963 77.9683 85.6233 78.0385 86.2224 78.2912C86.8214 78.5439 87.3326 78.9678 87.6918 79.5097C88.051 80.0517 88.2422 80.6876 88.2415 81.3378C88.2299 82.2227 87.8679 83.0668 87.2348 83.6851C86.6017 84.3034 85.7492 84.6454 84.8643 84.636ZM84.8643 79.0922C84.4236 79.1068 83.997 79.2509 83.6377 79.5063C83.2783 79.7618 83.0021 80.1174 82.8435 80.5288C82.6849 80.9402 82.651 81.3892 82.7459 81.8198C82.8408 82.2504 83.0603 82.6435 83.3771 82.9502C83.6939 83.2568 84.094 83.4634 84.5275 83.5442C84.9609 83.6249 85.4086 83.5763 85.8146 83.4044C86.2206 83.2325 86.567 82.9448 86.8106 82.5773C87.0542 82.2098 87.1842 81.7787 87.1845 81.3378C87.1729 80.7329 86.9224 80.1571 86.4877 79.7363C86.0529 79.3155 85.4693 79.084 84.8643 79.0922Z"
          fill="#666666"
        ></path>
        <path
          d="M68.8686 81.3377V83.2544C68.8353 84.543 68.2918 85.7657 67.3576 86.6539C66.4234 87.542 65.1748 88.023 63.8862 87.9912H19.9475C16.7502 87.9912 14.1625 85.5263 14.1625 82.4912V26.1711C14.1947 24.7816 14.7501 23.4554 15.7178 22.4577C16.6854 21.46 17.9939 20.8642 19.3818 20.7895V18.5658H18.6493C14.8905 18.5658 11.8423 21.4649 11.8423 25.0395V83.7237C11.8423 87.2982 14.9125 90.1974 18.6493 90.1974H64.3774C68.1405 90.1974 71.1888 87.2982 71.1888 83.7237V81.3377H68.8686Z"
          fill="#666666"
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
        موردی یافت نداشت.
      </p>
    </div>
  );
};

export default NotFound;

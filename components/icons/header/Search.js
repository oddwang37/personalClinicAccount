import * as React from "react";

const SvgSearch = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        d="M10.617 0c-4.07 0-7.383 3.312-7.383 7.383a7.35 7.35 0 0 0 1.706 4.715l-4.732 4.7a.703.703 0 0 0 .99.998l4.74-4.707a7.349 7.349 0 0 0 4.68 1.677 7.387 7.387 0 0 0 3.613-.944.703.703 0 1 0-.689-1.226 5.977 5.977 0 0 1-8.901-5.213 5.983 5.983 0 0 1 5.976-5.977 5.983 5.983 0 0 1 5.977 5.977c0 1.038-.27 2.06-.781 2.956a.703.703 0 0 0 1.221.697A7.385 7.385 0 0 0 18 7.383C18 3.312 14.688 0 10.617 0Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSearch;

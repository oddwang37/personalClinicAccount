import * as React from "react";

const SvgShow = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={16} height={16} rx={5} fill="#fff" />
    <g clipPath="url(#show_svg__a)">
      <path
        d="m8.002 10.2-3.37-3.37a.458.458 0 0 0-.647.647l3.693 3.694a.458.458 0 0 0 .648 0l3.694-3.694.002-.002a.458.458 0 0 0-.647-.647l-.003.001-3.37 3.37Z"
        fill="#50CAFF"
        stroke="#50CAFF"
        strokeWidth={0.3}
      />
    </g>
    <defs>
      <clipPath id="show_svg__a">
        <path fill="#fff" transform="rotate(-90 8.5 5.5)" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgShow;

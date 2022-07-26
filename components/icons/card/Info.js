import * as React from "react";

const SvgInfo = (props) => (
  <svg
    width={40}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.134 37.5v-4.883H13.25a1.953 1.953 0 0 1 0-3.906h4.883v-4.883a1.953 1.953 0 0 1 3.906 0v4.883h4.883a1.953 1.953 0 1 1 0 3.906H22.04V37.5a1.953 1.953 0 1 1-3.906 0Zm17.773-4.98V12.695A3.91 3.91 0 0 0 32 8.79h-6.153v.977a5.866 5.866 0 0 1-5.86 5.859 5.866 5.866 0 0 1-5.858-5.86V8.79H7.988a3.91 3.91 0 0 0-3.906 3.906v29.492a3.91 3.91 0 0 0 3.906 3.907h24.013a3.91 3.91 0 0 0 3.906-3.907 1.953 1.953 0 0 1 3.906 0c0 4.308-3.504 7.813-7.812 7.813H7.988C3.68 50 .176 46.495.176 42.187V12.695c0-4.308 3.504-7.812 7.812-7.812h6.142v-2.93C14.13.874 15.004 0 16.083 0h7.813c1.078 0 1.953.874 1.953 1.953v2.93H32c4.308 0 7.813 3.504 7.813 7.812V32.52a1.953 1.953 0 0 1-3.907 0ZM21.942 3.905h-3.906v5.86c0 1.076.876 1.953 1.953 1.953a1.956 1.956 0 0 0 1.953-1.953v-5.86Z"
      fill="#fff"
    />
  </svg>
);

export default SvgInfo;

import React from "react";
import { Global, css } from "@emotion/core";
export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          background: #f7f8f7;
        }
      `}
    />
  );
}

//FONTS
// font-family: 'Abril Fatface', cursive;
// font-family: "Merriweather", serif;
// font-family: 'Source Sans Pro', sans-serif;

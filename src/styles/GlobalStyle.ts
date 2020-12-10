import { createGlobalStyle } from "styled-components";
import { colors } from "./utils";

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding-top: 100px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
    color: ${colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.375;
    margin: 0 auto;
    height: 100%;
    #__next {
      height: 100%;
    }
  }
`;

/*
 * Global styles
 *
 * defines global css resets and base styles applied to the entire application.
 * includes box-sizing, font-family, and root element styling.
*/

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
                 "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  #root {
    height: 100%;
  }
`;

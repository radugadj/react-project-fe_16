import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import { GlobalContext } from "./globalContext";

// 1.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body, .wrapper {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    background: ${(props) => props.theme.background};
  }

`;

// 2.
const Layout = ({ children }) => {
  const darkTheme = {
    background: "#2f2f2f",
    secondaryBackground: "#374151",
    text: "#F9FAFB",
    button: "#E5E7EB",
  };

  const lightTheme = {
    background: "#F9FAFB",
    secondaryBackground: "#E5E7EB",
    text: "#111827",
    button: "#374151",
  };

	// 3.
  const currentTheme = useContext(GlobalContext);
  
	// 4.
  let theme;
  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = lightTheme;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
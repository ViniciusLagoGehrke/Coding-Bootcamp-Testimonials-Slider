import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --BGcolor: #ffffff;
    --DarkBlue: hsl(240, 38%, 20%);
    --GrayishBlue: hsl(240, 18%, 77%);
    --ImgSize: 254px;

    font-size: 32px;
    font-family: 'Inter', sans-serif;
  }

  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
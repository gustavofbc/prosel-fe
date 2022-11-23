import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --black: #202021;
  --blue: #1C6AE4;
  --blue-dark: #000A51;
  --yellow: #FCFDD1;
	--white: #F4F4F5;
	
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'GTAmerica', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'GTAmerica', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: var(--black);
    text-decoration: none;

    &:hover {
      color: var(--blue);
    }
  }

`;
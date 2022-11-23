import { createGlobalStyle } from "styled-components";
import GTAmerica from "./fonts/GTAmerica.Regular.ttf";
import GTAmericaBold from "./fonts/GTAmerica.Black.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: "GTAmerica";
  src: local("GTAmerica"), url(${GTAmerica}) format("truetype");
  font-weight: normal;
}

@font-face {
  font-family: "GTAmericaBold";
  src: local("GTAmericaBold"), url(${GTAmericaBold}) format("truetype");
  font-weight: bold;
}
`;

export default FontStyles;

import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Krona from 'fonts/Krona.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
@font-face {
  font-family: 'Krona One';
  src: url(${Krona});
}
  body {
    padding: 0;
    margin: 0;
    font-family: 'Krona One', 'sans-serif';
  }
  a {
    text-decoration: none;
  }
  ul {
    margin:0;
    padding: 0;
    li {
      list-style: none;
      width: 100vw;
    }
  }
`

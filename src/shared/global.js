import { createGlobalStyle } from 'styled-components'
import AvenirBlack from '../../assets/fonts/Avenir-Black.woff2'
import AvenirHeavy from '../../assets/fonts/Avenir-Heavy.woff2'
import AvenirMedium from '../../assets/fonts/Avenir-Medium.woff2'
import AvenirRoman from '../../assets/fonts/Avenir-Roman.woff2'
import AvenirBook from '../../assets/fonts/Avenir-Book.woff2'
import AvenirLight from '../../assets/fonts/Avenir-Light.woff2'
import { fonts } from '../tokens'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBlack}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirHeavy}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirRoman}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBook}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirLight}) format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: ${fonts.size.base};
    font-family: ${fonts.family};
  }
`

export default GlobalStyle
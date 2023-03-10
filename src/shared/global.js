import { createGlobalStyle } from 'styled-components'
import { fonts } from '../tokens'

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Black.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Heavy.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Roman.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Book.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir';
    src: url('/fonts/Avenir-Light.woff2') format('woff2');
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
    box-sizing: border-box;
    font-size: ${fonts.size.base};
    font-family: ${fonts.family};
  }

  input, button, textarea, select  {
    font-family: ${fonts.family};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`

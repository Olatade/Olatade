import { createGlobalStyle } from 'styled-components';
import Quicksand from '../assets/fonts/Quicksand.ttf'
import ScreenSizes from './Responsive';

const Typography = createGlobalStyle`

    html {
      margin: 0 !important;
      // this defines what one rem is
      // so changing this will re-define what 1 rem is
      font-size: 62.25%; //1rem = 10px; 10px/16px = 62.25%
      
      @media only screen and (min-width: ${ScreenSizes.tablet}) {
         font-size: 62.25%; //1rem = 10px; 10px/16px = 62.25%
      }
      
      @media only screen and (min-width: ${ScreenSizes.laptop}) {
        font-size: 68.75%; //1rem = 11px; 11px/16px = 68.75%
      }
      
      @media only screen and (min-width: ${ScreenSizes.tv}) {
        font-size: 75%; //1rem = 12px; 12px/16px = 75%
      }
    }

    @font-face {
      font-family: "QuickSand";
      src: url(${Quicksand});
      font-weight: 300 700;
      // from the page style location
    }

    body{
      font-family: "QuickSand", serif;
      margin: 0;
    }
    
    p, li {
      //letter-spacing: 0.5px;
    }
    
    h1,h2,h3,h4,h5,h6 {
      font-weight: normal;
      margin: 0;
    }
    ul{
      list-style-type: none;
    }
    
    a {
      text-decoration: none;
      color: var(--black);
      /* Chrome renders this weird with this font, so we turn it off */
      text-decoration-skip-ink: none;
    }
    img {
      max-width: 100%;
    }
    
    :root{

    }
    
`;

export default Typography
import { createGlobalStyle } from 'styled-components';
import ScreenSizes from "./Responsive";

const GlobalStyles  = createGlobalStyle`
  :root {
    // GREYS
    --color-grey-1: #fafafa;
    --color-grey-2: #f0f0f0;
    --color-grey-3: #e8e8e8;
    --color-grey-4: #e0e0e0;
    --color-grey-5: #d8d8d8;
    --color-grey-6: #d0d0d0;
    --color-grey-7: #a8a8a8;
    --color-grey-8: #787878;
    --color-grey-9: #505050;
    --color-grey-10: #282828;
  
    --color-primary: #A03F57;
    --color-primary-light: #ECEFFF;
    --color-white: #fff;
    --color-black: #000;
    --color-error: #ff5646;
    --color-warning: orange;
    --color-success: #2bb421;
    --color-text-dark: var(--color-grey-8);
    --color-text-light: var(--color-grey-3);
    
    --tablet: 48em;
    --laptop: 75em;
    --tv: 100em;
    
    
    // BOX SHADOWS
    --box-shadow-1: 0px 1px 5px rgba(0, 0, 0, 0.15);
    --box-shadow-2:  .1rem .1rem 2rem rgba(0,0,0,.1);
    --box-shadow-3: 2px 0px 8px 1px rgba(0,0,0,0.54);
    --box-shadow-4:  2px 0px 8px 23px rgba(0,0,0,0.54);

    --box-shadow-s1: 0 .5rem .8rem rgba(var(--color-black), .15);
    --box-shadow-s2: 0 .5rem .8rem rgba(var(--color-black), .15);
    --box-shadow-s3: 0 .5rem .8rem rgba(var(--color-black), .15);
    --box-shadow-s4: 0 .5rem .8rem rgba(var(--color-black), .15);
    
    .gatsby-image-wrapper img[src*=base64\\,] {
      image-rendering: -moz-crisp-edges;
      image-rendering: pixelated;
    }
    
    
    // PARAGRAPHS
    --p-sm: 1.2rem;
    --p-xs: 1.3rem;
    
    .p-sm{
      font-size: var(--p-sm);
    }
    .p-xs{
      font-size: var(--p-xs);
      line-height: 150%;
      margin: .5rem 0;
    }
   
    
    .h-lg{
      font-size: 3rem;
    }
    .h-xl{
      font-size: 4.5rem;
    }
    .h-md{
      font-size: 1.7rem;
    }
    
    .bold{
      font-weight: 900;
    }
    
    --side-pad-xs: 1.6rem;
    --side-pad-sm: 2rem;
    --side-pad-md: 2.3rem;
    --side-pad-lg: 15rem;
    @media only screen and (min-width: ${ScreenSizes.tablet}) {
    --side-pad-xs: 4rem;
    --side-pad-sm: 2rem;
    --side-pad-md: 2.3rem;
    --side-pad-lg: 15rem;
    }
  }
 `;

export default GlobalStyles;
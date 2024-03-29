import styled from 'styled-components'
import ScreenSizes from "../../Responsive";
import header_bg_mobile from "../../../assets/img/header_bg_mobile.jpg";
import header_bg_tablet from "../../../assets/img/header_bg_tablet.png";
import header_bg_laptop from "../../../assets/img/header_bg_laptop.jpg";



export const HeaderStyle = styled.div`
  display: grid;
  margin: 0 !important;
  grid-auto-flow: row;
  height: calc(100vh);
  background: url(${header_bg_mobile});
  background-repeat: no-repeat;
  background-size: cover;


  //change background image on tablets
  @media only screen and (min-width: ${ScreenSizes.tablet}) {
    background: url(${header_bg_tablet});
    background-size: cover;
  }

  //change background image  on laptop
  @media only screen and (min-width: ${ScreenSizes.laptop}) {
    background: url(${header_bg_laptop});
    background-size: cover;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background: #fff;
  box-shadow: 0px -2px 18px 3px rgba(0, 0, 0, 0.2);
  align-self: start;
  align-items: center;
  height: 3.5rem;
  padding: .7rem var(--side-pad-xs);

  .brand{
    padding: 0;
    display: flex;
    align-items: center;
    &__image{height: 3rem; margin-right: .5rem;}
    &__name{ color: var(--color-primary); font-size: 1.5rem; font-weight: 700; padding: 0; margin: 0; letter-spacing: 1px;}

    // increase brand logo size and brand logo name on laptop device
    @media only screen and (min-width: ${ScreenSizes.laptop}) {
      &__image{height: 3.5rem; }
      &__name{ font-size: 1.8rem; font-weight: 700;}
    }
  }

  .link{
    color: var(--color-primary);
    font-size: 1.2rem;
    font-weight: bold;
    justify-self: right;
    transition: .2s ease-in-out;
    &:hover{
      color: var(--color-grey-4);
    }
  }
  .menu{
    font-size: 2.7rem;
  }
`;

export const AboutMeSummary = styled.article`
  align-self: start;
  padding: 0 var(--side-pad-xs);
  max-width: 50rem;

  .title .name{
    color: var(--color-primary);
    font-weight: 600;
  }
  .title .job-title{
    color: var(--color-primary);
  }

  .description .link{
    font-weight: 500;
    color: var(--color-primary);
    transition: .2s ease-out;
  }
  .description .link:hover{
    color: var(--color-grey-4);
  }

  .social-icons{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-gap: 1rem;
    svg{
      fill: var(--color-primary);
      font-size: 2rem;
      transition: .2s ease-out;
      cursor: pointer;

      @media only screen and (min-width: ${ScreenSizes.tablet}) {
        font-size: 2.5rem;
      }
    }
    svg:hover{
      fill: var(--color-grey-4);
    }
  }
`;


import React from 'react';
import SEO from '../components/SEO';
import {Nav } from '../styles/pages/HomePageStyles/HeaderStyle';
import olatade_logo from "../assets/img/olatade_logo_primary.png";
import header_bg_mobile from "../assets/img/header_bg_mobile.jpg";
import header_bg_tablet from "../assets/img/header_bg_tablet.png";
import header_bg_laptop from "../assets/img/header_bg_laptop.jpg";
import ScreenSizes from "../styles/Responsive";
import { FaGithub, FaMedium, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiAdobephotoshop, SiAdobeillustrator, SiTrello, SiJavascript, SiGatsby, SiJest, SiReact, SiGithub, SiPhp, SiMysql, SiGoogletagmanager, SiGoogleanalytics, SiComposer  } from 'react-icons/si';
import { TiFlowMerge} from 'react-icons/ti';
import styled from 'styled-components';
import { Link } from 'gatsby';


const StackPageStyle = styled.nav`
  display: grid;
  margin: 0 !important;
  grid-auto-flow: row;
  align-content: flex-start;
  min-height: calc(100vh);
  background: url(${header_bg_mobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

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

  .stack{
    display: grid;
    grid-template-columns: minmax(35rem, 70rem);
    justify-content: center;
    grid-row-gap: 1rem;
    border: 1px solid red;
    padding: 4rem 1.5rem;
  }

  .step{
    display: grid;
    grid-template-columns: 7rem 1fr;
    grid-template-rows: min-content 1fr;
    border-radius: .4rem;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-2);
    box-shadow: var(--box-shadow-1);

    &__number{
      display: grid;
      border-radius: .4rem 0 0 .4rem;
      background-color: var(--color-primary);
      color: white;
      grid-column: 1 / 2;
      grid-row: 1 / -1;
      font-size: 3rem;
      font-weight: 900;
      align-content: center;
      justify-content: center;

    }

    &__tools{
      display: grid;
      justify-content: left;
      grid-auto-flow: column;
      grid-gap: .5rem;
      grid-column: 2 / -1;
      grid-row: 1 / 2;
      padding: 1.5rem;
      border-bottom: 1px solid var(--color-grey-3);

      svg{
        font-size: 2.5rem;
        padding: 1rem;
        border-radius: 30%;
        border: 2px solid yellow;
        background-color: yellow;
      }

    }

    &__description{
      grid-column: 2 / -1;
      padding: 1.5rem;
      font-size: 1rem;
    }

  }

`;

export default function StackPage({ data }){
  return (
    <StackPageStyle>
      <SEO/>
      <Nav>
        <a href="/" className="brand">
          <img className="brand__image" src={olatade_logo} />
          <p className="brand__name">OLATADE</p>
        </a>
        <Link to="/stack">How i Build</Link>
      </Nav>

      <div className="stack">

      <div className="step">
          <div className="step__number">
            <span>1</span>
          </div>
          <div className="step__tools">
            <span className="logo"><SiTrello/></span>
            <span className="logo"><TiFlowMerge/></span>
            
          </div>
          <div className="step__description">
            <p>Visualizing what i am gonna build is important, so i start with  figma. It’s super important when what i am building will need it’s own api. I dont want to</p>
               
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>2</span>
          </div>
          <div className="step__tools">
            <span className="logo"><FiFigma/></span>
            <span className="logo"><SiAdobephotoshop/></span>
            <span className="logo"><SiAdobeillustrator/></span>
            
          </div>
          <div className="step__description">
            Visualizing what i am gonna build is important, so i start with  figma. It’s super important when what i am building will need it’s own api. I dont want to   
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>3</span>
          </div>
          <div className="step__tools">
            <span className="logo"><SiGithub/></span>
            <span className="logo"><SiJavascript/></span>
            <span className="logo"><SiGatsby/></span>
            <span className="logo"><SiReact/></span>
            <span className="logo"><SiJest/></span>
            
          </div>
          <div className="step__description">
            Visualizing what i am gonna build is important, so i start with  figma. It’s super important when what i am building will need it’s own api. I dont want to   
          </div>
        </div>

        
        <div className="step">
          <div className="step__number">
            <span>4</span>
          </div>
          <div className="step__tools">
            <span className="logo"><SiGithub/></span>
            <span className="logo"><SiPhp/></span>
            <span className="logo"><SiComposer/></span>
            <span className="logo"><SiMysql/></span>
            
          </div>
          <div className="step__description">
            Visualizing what i am gonna build is important, so i start with  figma. It’s super important when what i am building will need it’s own api. I dont want to   
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>5</span>
          </div>
          <div className="step__tools">
            <span className="logo"><SiGoogletagmanager/></span>
            <span className="logo"><SiGoogleanalytics/></span>          
          </div>
          <div className="step__description">
            Visualizing what i am gonna build is important, so i start with  figma. It’s super important when what i am building will need it’s own api. I dont want to   
          </div>
        </div>


      </div>
    </StackPageStyle>
  )
}
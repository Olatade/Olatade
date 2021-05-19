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
import {SiGit, SiAdobephotoshop, SiAdobeillustrator, SiTrello, SiJavascript, SiGatsby, SiJest, SiReact, SiGithub, SiPhp, SiMysql, SiGoogletagmanager, SiGoogleanalytics, SiComposer  } from 'react-icons/si';
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
    background-attachment: fixed;
  }

  //change background image  on laptop
  @media only screen and (min-width: ${ScreenSizes.laptop}) {
    background: url(${header_bg_laptop});
    background-size: cover;
    background-attachment: fixed;
  }

  .stack{
    display: grid;
    grid-template-columns: minmax(35rem, 70rem);
    justify-content: center;
    grid-row-gap: 1rem;
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
            <span className="logo" title="Trello"><SiTrello/></span>
            <span className="logo" title="Diagrams.net"><TiFlowMerge/></span>
            
          </div>
          <div className="step__description">

            <p className="p-xs">
              Planning is quite important because it is quite easy to get carried away while working on a project. So, for time management and project tracking, i use <a href="https://trello.com/en">Trello</a>.               
            </p>

            <p className="p-xs">
            If the project is considerably complex, I use <a href="https://www.diagrams.net/">Diagrams.net</a> a powerful team based open source diagramming tool to map out the user flow.
            </p>
               
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>2</span>
          </div>
          <div className="step__tools">
            <span className="logo" title="Figma"><FiFigma/></span>
            <span className="logo" title="Adobe photoshop" ><SiAdobephotoshop/></span>
            <span className="logo" title="Adobe illustrator"><SiAdobeillustrator/></span>
            
          </div>
          <div className="step__description">
            <p className="p-xs">
            Seeing what I am building prevents me from writing a bunch of css and realizing that it does not look good. I make sure my User Interface looks good on <a href="https://www.diagrams.net/">Figma</a> before writing
            any CSS.
            </p>
            <p className="p-xs">Ofcourse I edit, create and resize my images with <a href="https://www.photoshop.com/en">Photoshop</a> and <a href="https://www.adobe.com/products/illustrator.html">Illustrator</a> </p>
            
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>3</span>
          </div>
          <div className="step__tools">
            <span className="logo" title="Git"><SiGit/></span>
            <span className="logo" title="Git"><SiGithub/></span>
            <span className="logo" title="Vanilla js"><SiJavascript/></span>
            <span className="logo" title="Gatsby.js"><SiGatsby/></span>
            <span className="logo" title="React"><SiReact/></span>
            <span className="logo" title="Jest"><SiJest/></span>
            
          </div>
          <div className="step__description">
            <p className="p-xs">
              I build my front-end with <a href="https://www.gatsbyjs.com/docs/">Gatsby.js</a>. a react based framework that works really well for building modern platforms. It comes with data management, a good routing strategy and provides a really good build process. I do my javascript code testing with <a href="https://jestjs.io/">Jest</a> 
            </p> 
          </div>
        </div>

        
        <div className="step">
          <div className="step__number">
            <span>4</span>
          </div>
          <div className="step__tools">
            <span className="logo" title="Git"><SiGit/></span>
            <span className="logo" title="Github"><SiGithub/></span>
            <span className="logo" title="Php"><SiPhp/></span>
            <span className="logo" title="composer"><SiComposer/></span>
            <span className="logo" title="Mysql"><SiMysql/></span>
            
          </div>
          <div className="step__description">
            <p className="p-xs">Because I like to control as much as possible, I use cleverly written object oriented PHP and MySql to build advanced REST APIs. I am currently working on switching permanenlty using <a href="https://nodejs.org/en/">Node.js</a> + <a href="https://nodejs.org/en/">mongoDB</a> or any other NoSql database</p>
          </div>
        </div>

        <div className="step">
          <div className="step__number">
            <span>5</span>
          </div>
          <div className="step__tools">
            <span className="logo" title="Google tag manager"><SiGoogletagmanager/></span>
            <span className="logo" title="Google analytics"><SiGoogleanalytics/></span>          
          </div>
          <div className="step__description">
            <p className="p-xs">
              Combining google tag manager and google analytics helps me track my website and app usage accurately.
            </p>   
          </div>
        </div>


      </div>
    </StackPageStyle>
  )
}
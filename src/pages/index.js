import React from 'react';
import SEO from '../components/SEO';
import { HeaderStyle, AboutMeSummary, Nav } from '../styles/pages/HomePageStyles/HeaderStyle';
import olatade_logo from "../assets/img/olatade_logo_primary.png";
import { FaGithub, FaMedium, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function HomePage({ data }){
  return (
    <div>
      <SEO/>
      <HeaderStyle>
        <Nav>
          <a href="/" className="brand">
            <img className="brand__image" src={olatade_logo} />
            <p className="brand__name">OLATADE</p>
          </a>
          <Link className="link" to="/stack">HOW I BUILD</Link>
        </Nav>

        <AboutMeSummary>
          <div className="title">
            <h1><span className="h-xl bold name">Olatade</span> <span className="h-lg bold">Abiona</span></h1>
            <h2 className="h-md job-title">Software Engineer</h2>
          </div>
          <div className="description">
            <p className="p-xs">Asides from being alive, I love building stuff for the web. I use HTML, CSS, Javascript and PHP together with numerous tools to build for the web.</p>
            <p className="p-xs">I love building rich and easy to use APIs. I design and document my APIs with <a className="link" href="https://swagger.io/tools/swaggerhub/">SwaggerHub</a> and test with <a className="link" href="https://www.postman.com/">Postman</a>.</p>
            <p className="p-xs">My focus right now is <a className="link" href="https://reactjs.org/">React.js</a>, <a className="link" href="https://nodejs.org/">Node.js</a>, and <a className="link" href="https://www.gatsbyjs.com/">Gatsby.js</a>.</p>
            <p className="p-xs">I recently started documenting my development journey. Read <a className="link" href="https://olatade.medium.com/how-the-show-silicon-valley-changed-my-life-47a075a9899">how the show silicon valley changed my life</a>.</p>
          </div>
          <div className="social-icons">
            <a href="https://github.com/olatade"><FaGithub/></a>
            <a href="https://olatade.medium.com/"><FaMedium/></a>
            <a href="https://www.linkedin.com/in/olatade/"><FaLinkedin/></a>
            <a href="https://twitter.com/4tade"><FaTwitterSquare/></a>
          </div>
        </AboutMeSummary>
      </HeaderStyle>
    </div>
  )
}
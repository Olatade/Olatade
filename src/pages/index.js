import React from 'react';
import SEO from '../components/SEO';
import { HeaderStyle, AboutMeSummary, Nav } from '../styles/pages/HomePageStyles/HeaderStyle';


export default function HomePage({ data }){
  return (
    <div>
      <SEO/>
      <HeaderStyle>
        <Nav>
          <span className="menu">&#x2630;</span>
          {/*<a href="">About me</a>*/}
          {/*<a href="">Reach me</a>*/}
        </Nav>
        <AboutMeSummary>
          <div className="title">
            <h1><span className="h-xl bold">Olatade</span> <span className="h-lg bold">Abiona</span></h1>
            <h2 className="h-md">Software Engineer</h2>
          </div>
          <div className="description">
            <p className="p-sm">Asides from being alive, I love building stuff for the web. I use HTML, CSS, Javascript and PHP together with numerous tools to build for the web.</p>
            <p className="p-sm">My focus right now is React.js, Node, and Gatsby</p>
            <p className="p-sm">I recently started documenting my development journey. Read how the show silicon valley changed my life on my medium.</p>
          </div>
        </AboutMeSummary>

      </HeaderStyle>
    </div>
  )
}
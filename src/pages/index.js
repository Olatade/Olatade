import React from 'react';
import SEO from '../components/SEO';
import { HeaderStyle } from '../styles/pages/HomePageStyles/HeaderStyle';


export default function HomePage({ data }){
  return (
    <div>
      <SEO/>
      <HeaderStyle>This is the homepage</HeaderStyle>
    </div>
  )
}
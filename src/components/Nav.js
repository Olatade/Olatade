import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/img/black_logo.png'
import ScreenSizes from '../styles/Responsive';

const NavStyles = styled.nav`
  display: grid;
  position: sticky;
  grid-column: 1 / -1;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  padding: 1rem var(--side-padding);
  align-items: center;
  box-shadow: var(--box-shadow-1);
  
  .menu-icon{
    justify-self: left;
    color: var(--color-black);
    font-size: 2rem;
    cursor: pointer;
      @media only screen and (min-width: ${ScreenSizes.laptop}) {
        font-size: 2.5rem;
      }
  }
  
  .brand-logo{
    justify-self: center;
    img{
      max-height: 4rem;
      @media only screen and (min-width: ${ScreenSizes.laptop}) {
        max-height: 5rem;
      }
    }
  }

  .links{
    display: grid;
    justify-content: end;
    grid-auto-flow: column;
    grid-column-gap: 3rem;
    align-items: center;
    
    .email{
      display: none;
      color: var(--color-black);
      font-size: 1.3rem;
      @media only screen and (min-width: ${ScreenSizes.tablet}) {
        display: block;
      }
    }
    
    .blog-link{
      font-size: 1.2rem;
      font-weight: bold;
      padding-top: .3rem;
      color: black;
      @media only screen and (min-width: ${ScreenSizes.laptop}) {
        font-size: 1.3rem;
      }
      
      &:hover{
        color: var(--color-primary);
      }
    }
  }
  `;

export default function Nav() {
  return (
    <NavStyles>
      <a href='/' className='menu-icon'>&#x2630;</a>
      <Link to='/' className='brand-logo'>
        <img src={logo} alt="our pastiche logo"/>
      </Link>

      <div className="links">
        <a href='mailto:hello@our-pastiche.com' className='email'>&#9742; hello@our-pastiche.com</a>
        <a href='https://medium.com/our-pastiche' className='blog-link'><b>BL<br/>OG</b></a>
      </div>
    </NavStyles>
  );
}
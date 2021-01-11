import styled from 'styled-components'
import ScreenSizes from "../../Responsive";


export const HeaderStyle = styled.div`
  border: 1px solid red; 
  display: grid;
  height: 100vh;
  background: var(--color-grey-1);
`;

export const Nav = styled.nav`
  border: 1px solid red;
  align-self: start;
  padding: .7rem var(--side-pad-xs);
  .menu{
    font-size: 2.7rem;
  }
`;

export const AboutMeSummary = styled.article`
  align-self: start;
  padding: 20rem var(--side-pad-xs);
  max-width: 50rem;
`;


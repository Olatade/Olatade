import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  /* border: 2px solid red; */
  background-color: var(--color-primary);
`;

export default function Footer(){
  return (
    <FooterStyle>
      <p>&copy; Olatade {new Date().getFullYear() }</p>
    </FooterStyle>
  );
}
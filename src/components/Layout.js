import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css'; // to normalize css across browsers
import GlobalStyles from '../styles/GlobalStyles'; // global styles
import Typography from '../styles/Typography'; // typography styles

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles/>
      <Typography/>
      {children}
      <Footer/>
    </div>
  );
}
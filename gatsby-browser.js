import React from 'react';
import Layout from "./src/components/Layout";


export function wrapPageElement({ element, props }){
  // putting every page element available into the layout
  // also passing down any props from the element into the Layout component
  return <Layout {...props}>{element}</Layout>
}
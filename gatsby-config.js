// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: `Olatade`,
    siteUrl: 'https://olatade.me',
    description: 'Olatade - Software Engineer',
    twitter: '@4tade',
  },
  plugins: [
    'gatsby-plugin-react-helmet', // making sure our sever render has access to those
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`, // processes images
    `gatsby-plugin-sharp`, // processes images
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "	GTM-MNRC9KB",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    // {
    //   // this is the name of the plugin we are adding
    //   resolve: 'gatsby-source-sanity',
    //   options:{
    //     projectId: 'zlpo6lr5',
    //     dataset: 'production',
    //     watchMode: true, // get real time editing experience when in development mode
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
  ],
};

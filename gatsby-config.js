// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: `Olatade`,
    siteUrl: 'https://olatade.com',
    description: 'olatade\'s website',
    twitter: '@ourpastiche',
  },
  plugins: [
    'gatsby-plugin-react-helmet', // making sure our sever render has access to those
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`, // processes images
    `gatsby-plugin-sharp`, // processes images
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

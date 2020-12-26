import React from "react";
import { useStaticQuery, graphql} from "gatsby";

// Query all the images in the img folder
export default function findImageFluid(base){
  const data = useStaticQuery(graphql`
      query {
          allImages: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)|(svg)/"}}) {
              edges {
                  node {
                      id
                      base
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }

      }
  `);
  
  const images = data.allImages.edges; // get the array of nodes/images
  // find the node that matches the name of the image passed in
  const found = data.allImages.edges.find((image) => image.node.base === base);
  // return the image value
  return found.node.childImageSharp.fluid;
}
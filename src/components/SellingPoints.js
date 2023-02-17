import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState } from "react";

const SellingPoints = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicSellingpoint {
        nodes {
          data {
            description {
              text
            }
            icon {
              gatsbyImageData(layout: CONSTRAINED, width: 125)
            }
            title {
              text
            }
          }
        }
      }
    }
  `);
  const sellingPoints = data.allPrismicSellingpoint.nodes;

  return (
    <section>
      {sellingPoints.map((sellingPoint) => {
        const pathToImage = getImage(sellingPoint.data.icon);
        return (
          <div>
            <div>
              <GatsbyImage image={pathToImage} />
            </div>
            <h2>{sellingPoint.data.title.text}</h2>
            <p>{sellingPoint.data.description.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default SellingPoints;

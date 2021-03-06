import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Portfolio.scss";
import Pricing from "components/Pricing";
import ContactForm from "components/Form";


const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;

  return (
    <div>
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {portfolios.map(
          ({header, imageFileName,  }) => (
            <PortfolioItem
              key={header}
              imageFileName={imageFileName}
              
            />
          ),
        )}
      </Row>
      </PageSection>
      <PageSection style={{ marginTop:"-100px" }} className={clsx("Pricing", className)} id={anchor}>

<Pricing  />

      </PageSection>
<PageSection section className={clsx("Contact", className)} id={anchor}>
<ContactForm   />

</PageSection>
</div>
   
 
  
  );


};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;

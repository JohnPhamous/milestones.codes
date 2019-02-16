import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Container from "../Container";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  height: 100vh;
`;

export default Layout;

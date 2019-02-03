import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'already-styled-components';

import { graphql } from 'gatsby';
import { Box, Heading, Text } from '../components/Primitives';
import Link from '../components/Link';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => (
  <Layout>
    <Navbar
      bc="rebeccapurple"
      brand={(
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
)}
    >
      <Link fontFamily="playfair" to="/">
        Home
      </Link>
      <Link fontFamily="playfair" to="/page-2">
        Page 2
      </Link>
    </Navbar>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box height="calc(100vh - 100px)" width={[1, '80%']} m="auto" px={[3, 5]} pt={5}>
      <Heading as="h1" variant="h1">
        Sliders with react-slick
      </Heading>
      <ul>
        <Box as="li" mt={5}>
          <Text variant="wide">Example #1:</Text>
          <Text variant="normal">
            <Box>
              <Link to="/easy/"> Easy</Link>
            </Box>
          </Text>
        </Box>
        <Box as="li" mt={4}>
          <Text variant="wide">Example #2:</Text>
          <Text variant="normal">
            <Box>
              <Link to="/hotel/"> See example 2</Link>
            </Box>
            <Box>
              <a href="https://themes.themegoods.com/hoteller/beach"> Source page</a>
            </Box>
          </Text>
        </Box>
      </ul>
    </Box>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;

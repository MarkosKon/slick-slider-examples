import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Navbar } from 'already-styled-components';

import { graphql } from 'gatsby';
import {
  Box, Centered, Heading, Text,
} from '../components/Primitives';
import Link from '../components/Link';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Easy = ({ data }) => (
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
    <SEO title="Page two" />
    <Box mb={4} width={[1, '80%']} m="auto" px={[3, 5]} py={4}>
      <Heading as="h1" fontSize={7}>
        Hi from the second page
      </Heading>
      <Text variant="wide" mt={4} mb={4}>
        Here&apos;s a random slider:
      </Text>
      <Slider {...sliderSettings}>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #1</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #2</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
        <Box>
          <Centered minHeight="500px" bg="pink">
            <Heading variant="h2">Slide #3</Heading>
            <Text variant="wide">Lorem, ipsum dolor sit amet consectetur. </Text>
            <Text variant="normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa?
            </Text>
          </Centered>
        </Box>
      </Slider>
      <Link mt={4} to="/">
        Go back to the homepage
      </Link>
    </Box>
  </Layout>
);

Easy.propTypes = {
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

export default Easy;

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Navbar, DesktopList as BaseDL, MobileList as BaseML } from 'already-styled-components';
import Slider from 'react-slick';

import Layout from '../layouts/Layout';
import {
  Box, Heading, Text, Centered,
} from '../components/Primitives';
import BgImage from '../components/BgImage';
import Link from '../components/Link';
import { Next as NextIcon, Prev as PrevIcon } from '../components/Icons';
import SEO from '../components/SEO';

const DesktopList = styled(BaseDL)`
  display: flex;
  align-items: center;
  padding: 0 90px;
  z-index: 1;
  a {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
  }

  &.fixed-top-enter {
    background-color: ${({ bc }) => bc};
  }
  &.fixed-top-enter-done {
    background-color: white;
    color: black;
    transition: height 0.15s ease-out, background-color 0.15s ease-out;
    a {
      color: black;
    }
    path {
      fill: black;
    }
  }
  &.fixed-top-exit {
    background-color: white;
  }
  &.fixed-top-exit-done {
    background-color: ${({ bc }) => bc};
    transition: height 0.15s ease-in, background-color 0.15s ease-in;
  }
`;
const MobileList = styled(BaseML)`
  z-index: 2;
`;
// eslint-disable-next-line react/prop-types
const Brand = ({ fixed }) => <Image title="logo" fixed={fixed} />;

const ArrowContainer = styled.div`
  z-index: 1;
  width: 50px;
  height: 50px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  & > svg {
    will-change: transform;
    transition: transform 0.3s ease-out;
  }
  &:hover > svg {
    transform: translateY(-4px);
  }
  &::before {
    content: '';
  }
`;
const Next = (
  { className, style, onClick }, // eslint-disable-line react/prop-types
) => (
  <ArrowContainer
    className={className}
    style={{
      ...style,
      right: '30px',
    }}
    onClick={onClick}
  >
    <NextIcon />
  </ArrowContainer>
);
const Prev = (
  { className, style, onClick }, // eslint-disable-line react/prop-types
) => (
  <ArrowContainer
    className={className}
    style={{
      ...style,
      left: '30px',
    }}
    onClick={onClick}
  >
    <PrevIcon />
  </ArrowContainer>
);
const DotList = styled.ul`
  margin: 0;
  li {
    margin: 0 10px;
  }
  & > li.slick-active div {
    opacity: 1;
  }
`;
const Dot = styled.div`
  opacity: 0.5;
  background-color: white;
  border-bottom: 2px solid white;
  padding-right: 2px;
  width: 30px;
  height: 2px;
  &:hover {
    opacity: 1;
  }
`;
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 550,
  cssEase: 'cubic-bezier(.86,-0.01,.92,.92)',
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  appendDots: dots => (
    <div
      style={{
        padding: '10px',
        bottom: '85px',
      }}
    >
      <DotList>{dots}</DotList>
    </div>
  ),
  customPaging: () => (
    <Centered height="40px">
      <Dot />
    </Centered>
  ),
};

const Hotel = ({ data }) => (
  <Layout>
    <SEO title="Hotel" keywords={['gatsby', 'application', 'react']} />
    <Navbar
      brand={<Brand fixed={data.logo.childImageSharp.fixed} />}
      desktopList={props => (
        <DesktopList {...props} mobileBreakpoint={1024} bc="transparent" c="white" />
      )}
      mobileList={props => <MobileList {...props} bc="white" c="black" />}
    >
      <Link fontFamily="playfair" to="/">
        Home
      </Link>
      <Link fontFamily="playfair" to="/page-2">
        Page 2
      </Link>
    </Navbar>
    <Box color="white" mt="-100px" fontFamily="raleway">
      <Slider {...sliderSettings}>
        <Box>
          <BgImage
            title="slider 1"
            fluid={data.slider1.childImageSharp.fluid}
            height="93vh"
            overlayColor="#0000004d"
          >
            <Centered>
              <Heading
                as="h1"
                fontSize={9}
                fontFamily="raleway"
                fontWeight="600"
                lineHeight="normal"
                maxWidth="600px"
                textAlign="center"
              >
                Santorini Retreat
              </Heading>
              <Text variant="normal" mt={3}>
                Unlock the door to a wonder of the world
              </Text>
            </Centered>
          </BgImage>
        </Box>
        <Box>
          <BgImage
            title="slider 2"
            fluid={data.slider2.childImageSharp.fluid}
            height="93vh"
            overlayColor="#0000004d"
          >
            <Centered>
              <Heading
                as="h1"
                fontSize={9}
                fontFamily="raleway"
                fontWeight="600"
                lineHeight="normal"
                maxWidth="600px"
                textAlign="center"
              >
                Beachfront Hotel
              </Heading>
              <Text variant="normal" mt={3}>
                More than a place to stay!
              </Text>
            </Centered>
          </BgImage>
        </Box>
        <Box>
          <BgImage
            title="slider 3"
            fluid={data.slider3.childImageSharp.fluid}
            height="93vh"
            overlayColor="#0000004d"
          >
            <Centered>
              <Heading
                as="h1"
                fontSize={9}
                fontFamily="raleway"
                fontWeight="600"
                lineHeight="normal"
                maxWidth="600px"
                textAlign="center"
              >
                Luxury Comfort
              </Heading>
              <Text variant="normal" mt={3}>
                Design, curated art and welcoming teams
              </Text>
            </Centered>
          </BgImage>
        </Box>
      </Slider>
    </Box>
    <Box height="50vh" />
    <NextIcon />
  </Layout>
);

Hotel.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.object,
    slider1: PropTypes.object,
    slider2: PropTypes.object,
    slider3: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo_white.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    slider1: file(relativePath: { eq: "slider-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider2: file(relativePath: { eq: "slider-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slider3: file(relativePath: { eq: "slider-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Hotel;

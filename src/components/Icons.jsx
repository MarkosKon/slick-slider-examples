import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { FontAwesomeIcon as Base } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlus,
  faLinkedin,
  faSkype,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';

const FontAwesomeIcon = styled(Base)`
  ${space}
`;

const Facebook = props => <FontAwesomeIcon {...props} icon={faFacebookF} />;
const GooglePlus = props => <FontAwesomeIcon {...props} icon={faGooglePlus} />;
const Linkedin = props => <FontAwesomeIcon {...props} icon={faLinkedin} />;
const Skype = props => <FontAwesomeIcon {...props} icon={faSkype} />;
const Twitter = props => <FontAwesomeIcon {...props} icon={faTwitter} />;
const Instagram = props => <FontAwesomeIcon {...props} icon={faInstagram} />;
const Envelope = props => <FontAwesomeIcon {...props} icon={faEnvelope} />;
const Heart = props => <FontAwesomeIcon {...props} icon={faHeart} />;
const FaLink = props => <FontAwesomeIcon {...props} icon={faLink} />;

const Next = () => (
  <svg
    version="1.1"
    id="svg5-Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="14px"
    height="26px"
    viewBox="0 0 14 26"
    enableBackground="new 0 0 14 26"
    xmlSpace="preserve"
  >
    <path
      d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"
      fill="white"
    />
  </svg>
);

const Prev = () => (
  <svg
    version="1.1"
    id="svg4-Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="14px"
    height="26px"
    viewBox="0 0 14 26"
    enableBackground="new 0 0 14 26"
    xmlSpace="preserve"
  >
    <path
      d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"
      fill="white"
    />
  </svg>
);

export {
  Facebook,
  GooglePlus,
  Linkedin,
  Skype,
  Twitter,
  Instagram,
  Envelope,
  Heart,
  FaLink,
  Next,
  Prev,
};

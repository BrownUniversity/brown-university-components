import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';
import brownLogoWhite from '../images/brown-logo-white.svg';
import brownLogoBlack from '../images/brown-logo-black.svg';

// TODO: children

/*
  inner *Tag components
*/
const DivTag = styled.div`
  background-color: ${({ color }) => colors[color]};
  box-shadow: 0 1px 10px 5px #00000026;
  min-height: 75px;
  padding: 0 1rem;
  position: relative;
  z-index: 20;
`;

const ImgTag = styled.img`
  height: 65px;
  margin-top: 4px;
  width: 131px;
`;

/*
  outer Navbar component
*/

const Navbar = ({ color, children }) => (
  <DivTag color={color}>
    <ImgTag src={color === 'white' ? brownLogoBlack : brownLogoWhite} />
    <span>{children}</span>
  </DivTag>
);

Navbar.propTypes = {
  color: PropTypes.oneOf(['brown', 'white']),
  children: PropTypes.node
};

Navbar.defaultProps = {
  color: 'brown',
  children: null
};

export default Navbar;

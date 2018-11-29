import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import LogoBlackSVG from '../svg/logo-black.svg';
import LogoWhiteSVG from '../svg/logo-white.svg';
import colors from '../constants/colors';

// TODO: children

/*
  inner components
*/
const NavbarWrapper = styled.div`
  background-color: ${({ color }) => colors[color]};
  box-shadow: 0 1px 10px 5px #00000026;
  min-height: 75px;
  padding: 0 1rem;
  position: relative;
  z-index: 20;
`;

const LogoWrapper = styled.div`
  height: 65px;
  padding-top: 7px;
  width: 131px;
`;

/*
  outer Navbar component
*/

const Navbar = ({ color, children }) => (
  <NavbarWrapper color={color}>
    <LogoWrapper>
      {color === 'white' ? <LogoBlackSVG /> : <LogoWhiteSVG />}
    </LogoWrapper>
    <span>{children}</span>
  </NavbarWrapper>
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

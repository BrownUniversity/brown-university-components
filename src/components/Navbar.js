import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import LogoBlackSVG from '../svg/logo-black.svg';
import LogoWhiteSVG from '../svg/logo-white.svg';
import colors from '../constants/colors';

// TODO: padding (left/right)

/*
  inner components
*/
const NavbarWrapper = styled.div`
  align-items: center;
  box-shadow: 0 1px 10px 5px #00000026;
  display: flex;
  justify-content: space-between;
  min-height: 75px;
  padding: 0 1rem;
  position: relative;
  z-index: 20;
  background-color: ${({ color }) => colors[color]};
`;

const NavbarLogoLink = styled.a`
  text-decoration: none;
`;

const NavbarChildrenWrapper = styled.div`
  align-items: center;
  display: flex;
`;

/*
  outer Navbar component
*/
const logoProps = { height: 65, width: 131 };

const Navbar = ({ color, children }) => (
  <NavbarWrapper color={color}>
    <NavbarLogoLink
      href="http://www.brown.edu/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {color === 'white' ? (
        <LogoBlackSVG {...logoProps} />
      ) : (
        <LogoWhiteSVG {...logoProps} />
      )}
    </NavbarLogoLink>
    <NavbarChildrenWrapper>{children}</NavbarChildrenWrapper>
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

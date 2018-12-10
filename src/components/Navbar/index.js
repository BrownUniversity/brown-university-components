import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NavbarNav from './NavbarNav';
import LogoBlackSVG from '../../svg/inline/logo-black.svg';
import LogoWhiteSVG from '../../svg/inline/logo-white.svg';
import colors from '../../constants/colors';
import media from '../../constants/media';

/*
  inner components
*/
// TODO: revisit when filtering props from DOM is supported
// https://github.com/styled-components/styled-components/issues/439
const NavbarWrapper = styled(({ color, ...restProps }) => (
  <div {...restProps} />
))`
  align-items: center;
  box-shadow: 0 5px 10px 0 #00000026;
  display: flex;
  height: 75px;
  justify-content: space-between;
  padding: 0 7vw;
  position: relative;
  z-index: 20;
  background-color: ${({ color }) => colors[color]};

  ${media.md`
    padding: 0 33px;
  `};
`;

const NavbarLogoLink = styled.a`
  text-decoration: none;
`;

const NavbarChildrenWrapper = styled.div`
  text-align: right;
`;

/*
  outer Navbar component
*/
const logoProps = { height: 65, width: 131 };

const Navbar = ({ color, children, ...restProps }) => (
  <NavbarWrapper {...restProps} color={color}>
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

Navbar.Nav = NavbarNav;

export default Navbar;

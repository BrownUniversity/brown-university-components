import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "brown-university-styles";
import NavbarContext from "./NavbarContext";
import NavbarNav from "./NavbarNav";
import NavbarGlobalNav from "./NavbarGlobalNav";
import LogoFullColorSVG from "../../assets/svg/inline/logo-full-color.svg";
import LogoTwoColorSVG from "../../assets/svg/inline/logo-two-color.svg";
import media from "../../media";

/*
  inner components
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
const NavbarWrapper = styled(
  ({ color, mobileBreakpoint, toggleTitle, ...restProps }) => (
    <nav {...restProps} />
  ),
)`
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
const logoProps = { display: "block", height: 65, width: 131 };

const Navbar = ({
  color,
  mobileBreakpoint,
  toggleTitle,
  children,
  ...restProps
}) => (
  <NavbarWrapper {...restProps} color={color}>
    <NavbarLogoLink
      href="http://www.brown.edu/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {color === "white" ? (
        <LogoFullColorSVG {...logoProps} />
      ) : (
        <LogoTwoColorSVG {...logoProps} />
      )}
    </NavbarLogoLink>
    <NavbarChildrenWrapper>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <NavbarContext.Provider value={{ color, mobileBreakpoint, toggleTitle }}>
        {children}
      </NavbarContext.Provider>
    </NavbarChildrenWrapper>
  </NavbarWrapper>
);

Navbar.propTypes = {
  color: PropTypes.oneOf(["brown", "white"]),
  mobileBreakpoint: PropTypes.number,
  toggleTitle: PropTypes.string,
  children: PropTypes.node,
};

Navbar.defaultProps = {
  color: "brown",
  mobileBreakpoint: breakpoints.md,
  toggleTitle: "Global Navigation",
  children: null,
};

Navbar.Nav = NavbarNav;
Navbar.GlobalNav = NavbarGlobalNav;

export default Navbar;

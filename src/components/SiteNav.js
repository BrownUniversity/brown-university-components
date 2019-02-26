import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { WindowSize } from "react-fns";

import Hamburger from "./Hamburger";
import Nav from "./Nav";
import Collapse from "./utils/Collapse";
import VisibilityToggle from "./utils/VisibilityToggle";
import breakpoints from "../constants/breakpoints";
import colors from "../constants/colors";
import { sansBold } from "../constants/typography";

/*
  inner components
*/
const MobileBannerPositioningWrapper = styled.div`
  ${props =>
    props.banner &&
    css`
      margin: 0 auto;
      margin-top: 2rem;
      position: relative;
      width: 95%;
      z-index: 10;
    `};
`;

const MobileWrapper = styled.nav`
  background-color: ${colors.white};
  border: 1px solid #ddd;
`;

const MobileToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 1rem 0 1rem;
  width: 100%;
`;

const MobileToggleButtonInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 92%;
`;

const MobileToggleTitle = styled.span`
  color: ${colors.red};
  font-family: ${sansBold};
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 11px 5px;
  text-transform: uppercase;
`;

const MobileNavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 16px 0;
  width: 92%;
  z-index: 10;
`;

const BannerPositioningWrapper = styled.div`
  ${props =>
    props.banner &&
    css`
      background-color: ${colors.white};
      margin: 0 auto;
      margin-top: -50px;
      max-width: 1300px;
      position: relative;
      width: 96%;
      z-index: 10;
    `}
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 30px;
`;

/*
  outer SiteNav component
*/
const SiteNav = ({
  banner,
  mobileBreakpoint,
  mobileToggleTitle,
  children,
  ...restProps
}) => (
  <WindowSize
    render={({ width }) => {
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      const currentWidth = width === 0 ? window.innerWidth : width;
      const renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        return (
          <MobileBannerPositioningWrapper banner={banner}>
            <MobileWrapper {...restProps}>
              <VisibilityToggle>
                {({
                  isOpen: mobileNavIsOpen,
                  toggleIsOpen: toggleMobileNav
                }) => (
                  <React.Fragment>
                    <MobileToggleButton
                      type="button"
                      aria-controls="site-nav-mobile-collapse"
                      aria-expanded={mobileNavIsOpen}
                      aria-label="Toggle site navigation"
                      onClick={toggleMobileNav}
                    >
                      <MobileToggleButtonInner>
                        <MobileToggleTitle>
                          {mobileToggleTitle}
                        </MobileToggleTitle>
                        <Hamburger tag="div" isOpen={mobileNavIsOpen} />
                      </MobileToggleButtonInner>
                    </MobileToggleButton>
                    <Collapse
                      id="site-nav-mobile-collapse"
                      isOpen={mobileNavIsOpen}
                    >
                      <MobileNavWrapper>
                        <Nav mobile>{children}</Nav>
                      </MobileNavWrapper>
                    </Collapse>
                  </React.Fragment>
                )}
              </VisibilityToggle>
            </MobileWrapper>
          </MobileBannerPositioningWrapper>
        );
      }

      return (
        <BannerPositioningWrapper banner={banner}>
          <nav {...restProps}>
            <NavWrapper>
              <Nav>{children}</Nav>
            </NavWrapper>
          </nav>
        </BannerPositioningWrapper>
      );
    }}
  />
);

SiteNav.propTypes = {
  banner: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  mobileToggleTitle: PropTypes.string,
  children: PropTypes.node.isRequired
};

SiteNav.defaultProps = {
  banner: false,
  mobileBreakpoint: breakpoints.md,
  mobileToggleTitle: "Site Navigation"
};

SiteNav.Item = Nav.Item;
SiteNav.Link = Nav.Link;

export default SiteNav;

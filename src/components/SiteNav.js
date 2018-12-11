import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { WindowSize } from 'react-fns';
import { Collapse } from 'react-collapse';

import Hamburger from './Hamburger';
import Nav from './Nav';
import breakpoints from '../constants/breakpoints';
import colors from '../constants/colors';
import { sansBold } from '../constants/typography';

/*
  inner components
*/
const MobileBannerWrapper = styled.div`
  ${props =>
    props.banner &&
    css`
      background-color: ${colors.white};
      margin: 0 auto;
      margin-top: 2rem;
      position: relative;
      width: 95%;
      z-index: 10;
    `};
`;

const MobileWrapper = styled.div`
  border: 1px solid #ddd;
`;

const MobileToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 0 1rem;
  width: 92%;
`;

const MobileToggleTitle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.red};
  font-family: ${sansBold};
  font-size: 1em;
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

const BannerWrapper = styled.div`
  background-color: ${colors.white};
  ${props =>
    props.banner &&
    css`
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
class SiteNav extends Component {
  state = {
    mobileNavIsOpen: false
  };

  handleMobileNavToggle = () =>
    this.setState(({ mobileNavIsOpen }) => ({
      mobileNavIsOpen: !mobileNavIsOpen
    }));

  render() {
    const {
      mobileToggleTitle,
      mobileBreakpoint,
      banner,
      ...restProps
    } = this.props;
    const { mobileNavIsOpen } = this.state;

    return (
      <WindowSize
        render={({ width }) => {
          // TODO: update when width doesn't return 0 on initial render
          // https://github.com/jaredpalmer/react-fns/issues/84
          const currentWidth = width === 0 ? window.innerWidth : width;
          const renderMobile = currentWidth < mobileBreakpoint;

          if (renderMobile) {
            return (
              <MobileBannerWrapper {...restProps} banner={banner}>
                <MobileWrapper>
                  <MobileToggleWrapper>
                    <MobileToggleTitle
                      type="button"
                      aria-controls="site-nav-mobile-collapse"
                      aria-expanded={mobileNavIsOpen}
                      aria-label="Toggle navigation"
                      onClick={this.handleMobileNavToggle}
                    >
                      {mobileToggleTitle}
                    </MobileToggleTitle>
                    <Hamburger
                      tabIndex="-1"
                      isOpen={mobileNavIsOpen}
                      onOpen={this.handleMobileNavToggle}
                      onClose={this.handleMobileNavToggle}
                    />
                  </MobileToggleWrapper>
                  <Collapse
                    isOpened={mobileNavIsOpen}
                    id="site-nav-mobile-collapse"
                  >
                    <MobileNavWrapper>
                      <Nav mobile>{this.props.children}</Nav>
                    </MobileNavWrapper>
                  </Collapse>
                </MobileWrapper>
              </MobileBannerWrapper>
            );
          }

          return (
            <BannerWrapper {...restProps} banner={banner}>
              <NavWrapper>
                <Nav>{this.props.children}</Nav>
              </NavWrapper>
            </BannerWrapper>
          );
        }}
      />
    );
  }
}

SiteNav.propTypes = {
  mobileToggleTitle: PropTypes.string,
  mobileBreakpoint: PropTypes.number,
  banner: PropTypes.bool,
  children: PropTypes.node.isRequired
};

SiteNav.defaultProps = {
  mobileToggleTitle: 'Site Navigation',
  mobileBreakpoint: breakpoints.md,
  banner: false
};

SiteNav.Item = Nav.Item;
SiteNav.Link = Nav.Link;

export default SiteNav;

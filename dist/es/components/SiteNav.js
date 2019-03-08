function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { WindowSize } from "react-fns";
import { colors, typography } from "brown-university-styles";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import Collapse from "./utils/Collapse";
import VisibilityToggle from "./utils/VisibilityToggle";
import breakpoints from "../constants/breakpoints";
var sansBold = typography.sansBold;
/*
  inner components
*/

var MobileBannerPositioningWrapper = styled.div.withConfig({
  displayName: "SiteNav__MobileBannerPositioningWrapper",
  componentId: "iasm8j-0"
})(["", ";"], function (props) {
  return props.banner && css(["margin:0 auto;margin-top:2rem;position:relative;width:95%;z-index:10;"]);
});
var MobileWrapper = styled.nav.withConfig({
  displayName: "SiteNav__MobileWrapper",
  componentId: "iasm8j-1"
})(["background-color:", ";border:1px solid #ddd;"], colors.white);
var MobileToggleButton = styled.button.withConfig({
  displayName: "SiteNav__MobileToggleButton",
  componentId: "iasm8j-2"
})(["background-color:transparent;border:none;cursor:pointer;font-size:1em;padding:1rem 0 1rem;width:100%;"]);
var MobileToggleButtonInner = styled.div.withConfig({
  displayName: "SiteNav__MobileToggleButtonInner",
  componentId: "iasm8j-3"
})(["align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:0 auto;width:92%;"]);
var MobileToggleTitle = styled.span.withConfig({
  displayName: "SiteNav__MobileToggleTitle",
  componentId: "iasm8j-4"
})(["color:", ";font-family:", ";font-weight:bold;letter-spacing:0.5px;padding:11px 5px;text-transform:uppercase;"], colors.red, sansBold);
var MobileNavWrapper = styled.div.withConfig({
  displayName: "SiteNav__MobileNavWrapper",
  componentId: "iasm8j-5"
})(["align-items:center;display:flex;justify-content:center;margin:0 auto;padding:16px 0;width:92%;z-index:10;"]);
var BannerPositioningWrapper = styled.div.withConfig({
  displayName: "SiteNav__BannerPositioningWrapper",
  componentId: "iasm8j-6"
})(["", ""], function (props) {
  return props.banner && css(["background-color:", ";margin:0 auto;margin-top:-50px;max-width:1300px;position:relative;width:96%;z-index:10;"], colors.white);
});
var NavWrapper = styled.div.withConfig({
  displayName: "SiteNav__NavWrapper",
  componentId: "iasm8j-7"
})(["display:flex;justify-content:center;padding:20px 0 30px;"]);
/*
  outer SiteNav component
*/

var SiteNav = function SiteNav(_ref) {
  var banner = _ref.banner,
      mobileBreakpoint = _ref.mobileBreakpoint,
      mobileToggleTitle = _ref.mobileToggleTitle,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["banner", "mobileBreakpoint", "mobileToggleTitle", "children"]);

  return React.createElement(WindowSize, {
    render: function render(_ref2) {
      var width = _ref2.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        return React.createElement(MobileBannerPositioningWrapper, {
          banner: banner
        }, React.createElement(MobileWrapper, restProps, React.createElement(VisibilityToggle, null, function (_ref3) {
          var mobileNavIsOpen = _ref3.isOpen,
              toggleMobileNav = _ref3.toggleIsOpen;
          return React.createElement(React.Fragment, null, React.createElement(MobileToggleButton, {
            type: "button",
            "aria-controls": "site-nav-mobile-collapse",
            "aria-expanded": mobileNavIsOpen,
            "aria-label": "Toggle site navigation",
            onClick: toggleMobileNav
          }, React.createElement(MobileToggleButtonInner, null, React.createElement(MobileToggleTitle, null, mobileToggleTitle), React.createElement(Hamburger, {
            tag: "div",
            isOpen: mobileNavIsOpen
          }))), React.createElement(Collapse, {
            id: "site-nav-mobile-collapse",
            isOpen: mobileNavIsOpen
          }, React.createElement(MobileNavWrapper, null, React.createElement(Nav, {
            mobile: true
          }, children))));
        })));
      }

      return React.createElement(BannerPositioningWrapper, {
        banner: banner
      }, React.createElement("nav", restProps, React.createElement(NavWrapper, null, React.createElement(Nav, null, children))));
    }
  });
};

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
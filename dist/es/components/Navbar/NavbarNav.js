function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { WindowSize } from "react-fns";
import { colors } from "brown-university-styles";
import NavbarContext from "./NavbarContext";
import Hamburger from "../Hamburger";
import Nav from "../Nav";
import Collapse from "../utils/Collapse";
import VisibilityToggle from "../utils/VisibilityToggle";
import media from "../../constants/media";
/*
  inner components
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)

var MobileCollapseWrapper = styled(function (_ref) {
  var color = _ref.color,
      restProps = _objectWithoutProperties(_ref, ["color"]);

  return React.createElement("div", restProps);
}).withConfig({
  displayName: "NavbarNav__MobileCollapseWrapper",
  componentId: "hl2s13-0"
})(["box-shadow:0 5px 10px 0 #00000026;left:0;position:absolute;top:75px;width:100%;background-color:", ";"], function (_ref2) {
  var color = _ref2.color;
  return colors[color];
});
var MobileNavWrapper = styled.div.withConfig({
  displayName: "NavbarNav__MobileNavWrapper",
  componentId: "hl2s13-1"
})(["padding:0 7vw 1rem;", ";"], media.md(_templateObject()));
/*
  outer NavbarNav component
*/

var getChildColor = function getChildColor(color) {
  switch (color) {
    case "white":
      return "red";
    // brown

    default:
      return "white";
  }
};

var NavbarNav = function NavbarNav(_ref3) {
  var children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, ["children"]);

  return React.createElement(WindowSize, {
    render: function render(_ref4) {
      var width = _ref4.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      return React.createElement(NavbarContext.Consumer, null, function (_ref5) {
        var color = _ref5.color,
            mobileBreakpoint = _ref5.mobileBreakpoint;
        var childColor = getChildColor(color);
        var renderMobile = currentWidth < mobileBreakpoint;

        if (renderMobile) {
          return React.createElement("div", restProps, React.createElement(VisibilityToggle, null, function (_ref6) {
            var mobileNavIsOpen = _ref6.isOpen,
                toggleMobileNav = _ref6.toggleIsOpen;
            return React.createElement(React.Fragment, null, React.createElement(Hamburger, {
              "aria-controls": "navbar-nav-mobile-collapse",
              color: childColor,
              isOpen: mobileNavIsOpen,
              onOpen: toggleMobileNav,
              onClose: toggleMobileNav
            }), React.createElement(MobileCollapseWrapper, {
              color: color
            }, React.createElement(Collapse, {
              id: "navbar-nav-mobile-collapse",
              isOpen: mobileNavIsOpen
            }, React.createElement(MobileNavWrapper, null, React.createElement(Nav, {
              mobile: true,
              color: childColor
            }, children)))));
          }));
        }

        return React.createElement(Nav, _extends({}, restProps, {
          navbar: true,
          color: childColor
        }), children);
      });
    }
  });
};

NavbarNav.propTypes = {
  children: PropTypes.node.isRequired
};
NavbarNav.Item = Nav.Item;
NavbarNav.Link = Nav.Link;
export default NavbarNav;
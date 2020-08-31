function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px 1rem 33px;\n  "]);

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
import { colors, typography } from "brown-university-styles";
import NavbarContext from "./NavbarContext";
import Hamburger from "../Hamburger";
import Nav from "../Nav";
import Collapse from "../utils/Collapse";
import VisibilityToggle from "../utils/VisibilityToggle";
import media from "../../media";
var sansBold = typography.sansBold;
/*
  inner components
*/

var ToggleButton = styled.button.withConfig({
  displayName: "NavbarGlobalNav__ToggleButton",
  componentId: "sc-1vdo48t-0"
})(["background-color:transparent;border:none;cursor:pointer;font-size:1em;padding:0;"]); // filter props so they don't become dom attributes (see `styled-components` issue 439)

var ToggleTitle = styled(function (_ref) {
  var color = _ref.color,
      restProps = _objectWithoutProperties(_ref, ["color"]);

  return React.createElement("span", restProps);
}).withConfig({
  displayName: "NavbarGlobalNav__ToggleTitle",
  componentId: "sc-1vdo48t-1"
})(["color:", ";font-family:", ";font-weight:bold;letter-spacing:0.5px;margin-left:10px;text-transform:uppercase;"], function (_ref2) {
  var color = _ref2.color;
  return colors[color];
}, sansBold); // filter props so they don't become dom attributes (see `styled-components` issue 439)

var CollapseWrapper = styled(function (_ref3) {
  var color = _ref3.color,
      restProps = _objectWithoutProperties(_ref3, ["color"]);

  return React.createElement("div", restProps);
}).withConfig({
  displayName: "NavbarGlobalNav__CollapseWrapper",
  componentId: "sc-1vdo48t-2"
})(["box-shadow:0 5px 10px 0 #00000026;left:0;position:absolute;top:75px;width:100%;background-color:", ";"], function (_ref4) {
  var color = _ref4.color;
  return colors[color];
});
var NavWrapper = styled.div.withConfig({
  displayName: "NavbarGlobalNav__NavWrapper",
  componentId: "sc-1vdo48t-3"
})(["padding:0 7vw 1rem;", ";"], media.md(_templateObject()));
/*
  outer NavbarGlobalNav component
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

var NavbarGlobalNav = function NavbarGlobalNav(_ref5) {
  var children = _ref5.children,
      restProps = _objectWithoutProperties(_ref5, ["children"]);

  return React.createElement(WindowSize, {
    render: function render(_ref6) {
      var width = _ref6.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      return React.createElement(NavbarContext.Consumer, null, function (_ref7) {
        var color = _ref7.color,
            mobileBreakpoint = _ref7.mobileBreakpoint,
            toggleTitle = _ref7.toggleTitle;
        var childColor = getChildColor(color);
        var renderMobile = currentWidth < mobileBreakpoint;
        return React.createElement("div", restProps, React.createElement(VisibilityToggle, null, function (_ref8) {
          var navIsOpen = _ref8.isOpen,
              toggleNav = _ref8.toggleIsOpen;
          return React.createElement(React.Fragment, null, React.createElement(ToggleButton, {
            type: "button",
            "aria-controls": "navbar-global-nav-collapse",
            "aria-expanded": navIsOpen,
            "aria-label": "Toggle global navigation",
            onClick: toggleNav
          }, React.createElement(Hamburger, {
            tag: "div",
            color: childColor,
            isOpen: navIsOpen
          }), !renderMobile && React.createElement(ToggleTitle, {
            color: childColor
          }, toggleTitle)), React.createElement(CollapseWrapper, {
            color: color
          }, React.createElement(Collapse, {
            id: "navbar-global-nav-collapse",
            isOpen: navIsOpen
          }, React.createElement(NavWrapper, null, React.createElement(Nav, {
            mobile: true,
            color: childColor
          }, children)))));
        }));
      });
    }
  });
};

NavbarGlobalNav.propTypes = {
  children: PropTypes.node.isRequired
};
NavbarGlobalNav.Item = Nav.Item;
NavbarGlobalNav.Link = Nav.Link;
export default NavbarGlobalNav;
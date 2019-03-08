function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "brown-university-styles";
import NavContext from "./NavContext";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
/*
  css prop getters
*/

var getBackgroundColor = function getBackgroundColor(_ref) {
  var sub = _ref.sub;

  if (sub) {
    return colors.lightGray;
  }

  return "transparent";
};

var getDisplay = function getDisplay(_ref2) {
  var mobile = _ref2.mobile,
      sub = _ref2.sub;

  if (mobile || sub) {
    return "block";
  }

  return "flex";
};

var getPadding = function getPadding(_ref3) {
  var sub = _ref3.sub;

  if (sub) {
    return "15px";
  }

  return "0";
};

var getWidth = function getWidth(_ref4) {
  var mobile = _ref4.mobile,
      sub = _ref4.sub;

  if (mobile || sub) {
    return "100%";
  }

  return "auto";
};
/*
  inner Tag component
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)


var Tag = styled(function (_ref5) {
  var color = _ref5.color,
      navbar = _ref5.navbar,
      mobile = _ref5.mobile,
      sub = _ref5.sub,
      restProps = _objectWithoutProperties(_ref5, ["color", "navbar", "mobile", "sub"]);

  return React.createElement("ul", restProps);
}).withConfig({
  displayName: "Nav__Tag",
  componentId: "axj96a-0"
})(["list-style:none;margin:0;background-color:", ";display:", ";padding:", ";width:", ";"], function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return getDisplay(props);
}, function (props) {
  return getPadding(props);
}, function (props) {
  return getWidth(props);
});
/*
  outer Nav component
*/

var Nav = function Nav(props) {
  var navbar = props.navbar,
      mobile = props.mobile,
      sub = props.sub,
      color = props.color;
  return React.createElement(NavContext.Provider, {
    value: {
      navbar: navbar,
      mobile: mobile,
      sub: sub,
      color: color
    }
  }, React.createElement(Tag, props));
};

Nav.propTypes = {
  navbar: PropTypes.bool,
  mobile: PropTypes.bool,
  sub: PropTypes.bool,
  color: PropTypes.oneOf(["red", "white"]),
  children: PropTypes.node.isRequired
};
Nav.defaultProps = {
  navbar: false,
  mobile: false,
  sub: false,
  color: "red"
};
Nav.Item = NavItem;
Nav.Link = NavLink;
export default Nav;
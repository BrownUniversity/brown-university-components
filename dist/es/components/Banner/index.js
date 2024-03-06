var _excluded = ["mobileBreakpoint", "size"],
  _excluded2 = ["color", "size", "src", "children", "mobileBreakpoint"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "brown-university-styles";
import BannerContext from "./BannerContext";
import BannerText from "./BannerText";

/*
  css prop getters
*/
var getMaxHeight = function getMaxHeight(_ref) {
  var size = _ref.size;
  switch (size) {
    case "small":
      return "150px";
    case "medium":
      return "300px";
    case "large":
      return "600px";
    default:
      return "200px";
  }
};

/*
  inner components
*/
var BannerWrapper = styled.div.withConfig({
  displayName: "Banner__BannerWrapper",
  componentId: "sc-11l4cxl-0"
})(["position:relative;z-index:5;"]);
var BannerImageColorWrapper = styled.div.withConfig({
  displayName: "Banner__BannerImageColorWrapper",
  componentId: "sc-11l4cxl-1"
})(["width:100%;overflow:hidden;max-height:", ";"], function (props) {
  return getMaxHeight(props);
});
var BannerImage = styled.img.withConfig({
  displayName: "Banner__BannerImage",
  componentId: "sc-11l4cxl-2"
})(["height:auto;min-width:320px;max-width:100%;width:100%;display:block;"]);
var BannerChildrenWrapper = styled(function (_ref2) {
  var mobileBreakpoint = _ref2.mobileBreakpoint,
    size = _ref2.size,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement("div", restProps);
}).withConfig({
  displayName: "Banner__BannerChildrenWrapper",
  componentId: "sc-11l4cxl-3"
})(["position:absolute;text-align:center;width:100%;z-index:15;top:", ";@media (min-width:", "px){top:", ";}"], function (props) {
  return props.size === "small" ? "5%" : "35%";
}, function (props) {
  return props.mobileBreakpoint;
}, function (_ref3) {
  var size = _ref3.size;
  return size === "small" ? "20%" : "35%";
});

/*
  outer Banner component
*/
var Banner = function Banner(_ref4) {
  var color = _ref4.color,
    size = _ref4.size,
    src = _ref4.src,
    children = _ref4.children,
    mobileBreakpoint = _ref4.mobileBreakpoint,
    restProps = _objectWithoutProperties(_ref4, _excluded2);
  return /*#__PURE__*/React.createElement(BannerWrapper, _extends({}, restProps, {
    role: "banner"
  }), /*#__PURE__*/React.createElement(BannerImageColorWrapper, {
    size: size
  }, src ? /*#__PURE__*/React.createElement(BannerImage, {
    src: src,
    alt: "Banner"
  }) : /*#__PURE__*/React.createElement("svg", {
    display: "block",
    viewBox: "0 0 2600 600",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("rect", {
    "aria-hidden": "true",
    width: "100%",
    height: "100%",
    fill: colors[color]
  }))), /*#__PURE__*/React.createElement(BannerChildrenWrapper, {
    size: size,
    mobileBreakpoint: mobileBreakpoint
  }, /*#__PURE__*/React.createElement(BannerContext.Provider, {
    value: {
      mobileBreakpoint: mobileBreakpoint
    }
  }, children)));
};
Banner.propTypes = {
  color: PropTypes.oneOf(["emerald", "darkEmerald", "red", "brown", "yellow", "gray", "sand", "lightBrown", "mediumBrown", "navy", "skyBlue"]),
  size: PropTypes.oneOf(["default", "small", "medium", "large"]),
  src: PropTypes.string,
  children: PropTypes.node,
  mobileBreakpoint: PropTypes.number
};
Banner.defaultProps = {
  color: "emerald",
  size: "default",
  src: null,
  children: null,
  mobileBreakpoint: breakpoints.md
};
Banner.Text = BannerText;
export default Banner;
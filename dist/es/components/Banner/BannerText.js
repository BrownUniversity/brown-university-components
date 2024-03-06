var _excluded = ["mobileBreakpoint"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import BannerContext from "./BannerContext";
var serif = typography.serif;

/*
  inner Tag component
*/
var Tag = styled(function (_ref) {
  var mobileBreakpoint = _ref.mobileBreakpoint,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", restProps);
}).withConfig({
  displayName: "BannerText__Tag",
  componentId: "sc-lrk5yo-0"
})(["color:", ";font-family:", ";font-size:1.9em;text-shadow:1px 1px 2px rgba(0,0,0,0.4);@media (min-width:", "px){font-size:2.5em;}"], colors.white, serif, function (props) {
  return props.mobileBreakpoint;
});

/*
  outer BannerText component
*/
var BannerText = function BannerText(props) {
  return /*#__PURE__*/React.createElement(BannerContext.Consumer, null, function (_ref2) {
    var mobileBreakpoint = _ref2.mobileBreakpoint;
    return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
      mobileBreakpoint: mobileBreakpoint
    }));
  });
};
BannerText.propTypes = {
  children: PropTypes.string.isRequired
};
export default BannerText;
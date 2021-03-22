function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import BannerContext from "./BannerContext";
var serif = typography.serif;
/*
  inner Tag component
*/

var Tag = styled.div.withConfig({
  displayName: "BannerText__Tag",
  componentId: "lrk5yo-0"
})(["color:", ";font-family:", ";font-size:1.9em;text-shadow:1px 1px 2px rgba(0,0,0,0.4);@media (min-width:", "px){font-size:2.5em;}"], colors.white, serif, function (props) {
  return props.mobileBreakpoint;
});
/*
  outer BannerText component
*/

var BannerText = function BannerText(props) {
  return /*#__PURE__*/React.createElement(BannerContext.Consumer, null, function (_ref) {
    var mobileBreakpoint = _ref.mobileBreakpoint;
    return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
      mobileBreakpoint: mobileBreakpoint
    }));
  });
};

BannerText.propTypes = {
  children: PropTypes.string.isRequired
};
export default BannerText;
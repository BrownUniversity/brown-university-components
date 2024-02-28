function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors } from "brown-university-styles";

/*
  inner Tag component
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
var Tag = styled(function (_ref) {
  var url = _ref.url,
    color = _ref.color,
    full = _ref.full,
    marginTop = _ref.marginTop,
    restProps = _objectWithoutProperties(_ref, ["url", "color", "full", "marginTop"]);
  return /*#__PURE__*/React.createElement("div", restProps);
}).withConfig({
  displayName: "Background__Tag",
  componentId: "uwuoy1-0"
})(["background-image:url('", "');background-repeat:repeat;background-size:1600px;background-color:", ";background-position-y:", "px;", ""], function (_ref2) {
  var url = _ref2.url;
  return url;
}, function (_ref3) {
  var color = _ref3.color;
  return colors[color];
}, function (_ref4) {
  var marginTop = _ref4.marginTop;
  return marginTop;
}, function (props) {
  return props.full && css(["@media (min-width:1600px){background-size:100%;}"]);
});

/*
  outer Background component
*/
var Background = function Background(_ref5) {
  var url = _ref5.url,
    color = _ref5.color,
    full = _ref5.full,
    restProps = _objectWithoutProperties(_ref5, ["url", "color", "full"]);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, restProps, {
    url: url,
    color: color,
    full: full
  }));
};
Background.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["white", "lightGray"]),
  full: PropTypes.bool,
  marginTop: PropTypes.number,
  children: PropTypes.node.isRequired
};
Background.defaultProps = {
  color: "white",
  full: true,
  marginTop: 0
};
export default Background;
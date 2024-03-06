var _excluded = ["mobile", "sub"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import NavContext from "./NavContext";

/*
  css prop getters
*/
var getPadding = function getPadding(_ref) {
  var mobile = _ref.mobile,
    sub = _ref.sub;
  if (mobile) {
    return "1rem 0";
  }
  if (sub) {
    return "8px 0 8px 0";
  }
  return "9px 15px";
};

/*
  inner Tag component
*/
var Tag = styled(function (_ref2) {
  var mobile = _ref2.mobile,
    sub = _ref2.sub,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement("li", restProps);
}).withConfig({
  displayName: "NavItem__Tag",
  componentId: "sc-1xpcbp5-0"
})(["display:list-item;border-top:", ";padding:", ";"], function (_ref3) {
  var mobile = _ref3.mobile;
  return mobile && "0.5px solid #C8C8C880";
}, function (props) {
  return getPadding(props);
});

/*
  outer NavItem component
*/
var NavItem = function NavItem(props) {
  return /*#__PURE__*/React.createElement(NavContext.Consumer, null, function (_ref4) {
    var mobile = _ref4.mobile,
      sub = _ref4.sub;
    return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
      mobile: mobile,
      sub: sub
    }));
  });
};
NavItem.propTypes = {
  children: PropTypes.node.isRequired
};
export default NavItem;
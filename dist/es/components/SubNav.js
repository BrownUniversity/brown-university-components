var _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import Nav from "./Nav";
var SubNav = function SubNav(_ref) {
  var children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("nav", restProps, /*#__PURE__*/React.createElement(Nav, {
    sub: true
  }, children));
};
SubNav.propTypes = {
  children: PropTypes.node.isRequired
};
SubNav.Item = Nav.Item;
SubNav.Link = Nav.Link;
export default SubNav;
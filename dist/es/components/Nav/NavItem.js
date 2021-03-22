function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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


var Tag = styled.li.withConfig({
  displayName: "NavItem__Tag",
  componentId: "sc-1xpcbp5-0"
})(["display:list-item;border-top:", ";padding:", ";"], function (_ref2) {
  var mobile = _ref2.mobile;
  return mobile && "0.5px solid #C8C8C880";
}, function (props) {
  return getPadding(props);
});
/*
  outer NavItem component
*/

var NavItem = function NavItem(props) {
  return /*#__PURE__*/React.createElement(NavContext.Consumer, null, function (_ref3) {
    var mobile = _ref3.mobile,
        sub = _ref3.sub;
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
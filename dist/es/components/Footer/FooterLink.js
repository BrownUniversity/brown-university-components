var _excluded = ["href", "children"];
var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors, typography, getRems } from "brown-university-styles";
import media from "../../media";
import { unstyledLinkCSS } from "../../mixins";
var ArrowRightSVG = function ArrowRightSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M9.427.135a.527.527 0 0 0-.705 0 .428.428 0 0 0 0 .639l3.577 3.27H.494C.219 4.046 0 4.246 0 4.498c0 .251.219.458.494.458h11.805L8.722 8.22a.435.435 0 0 0 0 .645c.197.18.515.18.705 0l4.425-4.046a.418.418 0 0 0 0-.638L9.427.135z",
    fillRule: "nonzero"
  }));
};
ArrowRightSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 9"
};
var LinkSVG = function LinkSVG(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    d: "M16.506 8.003l-2.633 2.44a5.617 5.617 0 0 0-.383-2.676l1.376-1.3a2.44 2.44 0 0 0 .793-1.782c0-.65-.264-1.291-.793-1.78a2.816 2.816 0 0 0-1.922-.735c-.692 0-1.385.244-1.922.734L8.107 5.58c-.529.507-.802 1.157-.802 1.807 0 .65.264 1.291.802 1.781.236.22.355.498.355.768s-.119.54-.355.752c-.22.21-.52.312-.82.312-.292 0-.593-.101-.82-.312C5.492 9.768 5 8.568 5 7.37c0-1.199.492-2.398 1.467-3.31l2.897-2.676A5.234 5.234 0 0 1 12.926 0c1.293 0 2.587.464 3.58 1.384.993.92 1.494 2.12 1.494 3.318 0 1.19-.501 2.38-1.494 3.301zm-4.972 5.934l-2.913 2.697C7.638 17.544 6.345 18 5.043 18c-1.292 0-2.585-.455-3.568-1.366C.492 15.724 0 14.527 0 13.33c0-1.205.492-2.402 1.475-3.312l2.658-2.453a5.7 5.7 0 0 0 .382 2.697l-1.374 1.273a2.423 2.423 0 0 0-.792 1.778c0 .65.264 1.29.792 1.779.528.489 1.22.733 1.92.733a2.83 2.83 0 0 0 1.921-.733l2.886-2.672c.547-.489.81-1.138.81-1.779 0-.649-.263-1.29-.81-1.778a1.042 1.042 0 0 1-.336-.776c0-.278.109-.556.336-.767.228-.21.528-.32.838-.32.3 0 .6.11.828.32.984.92 1.466 2.116 1.466 3.313a4.478 4.478 0 0 1-1.466 3.304z",
    fillRule: "evenodd"
  }));
};
LinkSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
};
/*
  css mixins
*/
var iconWrapperCSS = css(["display:inline-block;vertical-align:middle;"]);
var iconCSS = css(["left:0;position:absolute;top:50%;transform:translate(0,-50%);transition:opacity 0.25s;"]);

/*
  inner components
*/
var Label = styled.span.withConfig({
  displayName: "FooterLink__Label",
  componentId: "sc-1bisu3o-0"
})(["display:inline;font-family:", ";font-size:", ";font-weight:400;letter-spacing:", ";margin-right:4px;text-transform:uppercase;", ";"], typography.sans, getRems(12), getRems(1.5), media.sm(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  "])), getRems(13)));
var IconsWrapper = styled.span.withConfig({
  displayName: "FooterLink__IconsWrapper",
  componentId: "sc-1bisu3o-1"
})(["", " height:14px;position:relative;width:14px;"], iconWrapperCSS);
var DefaultIconWrapper = styled.span.withConfig({
  displayName: "FooterLink__DefaultIconWrapper",
  componentId: "sc-1bisu3o-2"
})(["", " height:9px;width:14px;"], iconWrapperCSS);
var ActionIconWrapper = styled.span.withConfig({
  displayName: "FooterLink__ActionIconWrapper",
  componentId: "sc-1bisu3o-3"
})(["", " height:14px;width:14px;"], iconWrapperCSS);
var DefaultIcon = styled(ArrowRightSVG).withConfig({
  displayName: "FooterLink__DefaultIcon",
  componentId: "sc-1bisu3o-4"
})(["", " fill:", ";"], iconCSS, colors.gold);
var ActionIcon = styled(LinkSVG).withConfig({
  displayName: "FooterLink__ActionIcon",
  componentId: "sc-1bisu3o-5"
})(["", " fill:", ";"], iconCSS, colors.white);
var Tag = styled.a.withConfig({
  displayName: "FooterLink__Tag",
  componentId: "sc-1bisu3o-6"
})(["", " color:", ";transition:background 0.25s,color 0.25s;", "{opacity:0;}&:hover,&:focus{color:", ";", "{opacity:0;}", "{opacity:1;}}"], unstyledLinkCSS, colors.gold, ActionIcon, colors.white, DefaultIcon, ActionIcon);

/*
  outer FooterLink component
*/
var FooterLink = function FooterLink(_ref) {
  var href = _ref.href,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href
  }, restProps), /*#__PURE__*/React.createElement(Label, null, children), /*#__PURE__*/React.createElement(IconsWrapper, null, /*#__PURE__*/React.createElement(DefaultIconWrapper, null, /*#__PURE__*/React.createElement(DefaultIcon, null)), /*#__PURE__*/React.createElement(ActionIconWrapper, null, /*#__PURE__*/React.createElement(ActionIcon, null))));
};
FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
export default FooterLink;
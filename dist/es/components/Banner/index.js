function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import BannerText from './BannerText';
import colors from '../../constants/colors';
/*
  css prop getters
*/

var getMaxHeight = function getMaxHeight(_ref) {
  var size = _ref.size;

  switch (size) {
    case 'small':
      return '150px';

    case 'medium':
      return '300px';

    case 'large':
      return '600px';

    default:
      return '200px';
  }
};
/*
  inner components
*/


var BannerWrapper = styled.div.withConfig({
  displayName: "Banner__BannerWrapper",
  componentId: "tzfnvw-0"
})(["position:relative;z-index:5;"]);
var BannerImageColorWrapper = styled.div.withConfig({
  displayName: "Banner__BannerImageColorWrapper",
  componentId: "tzfnvw-1"
})(["width:100%;overflow:hidden;max-height:", ";"], function (props) {
  return getMaxHeight(props);
});
var BannerImage = styled.img.withConfig({
  displayName: "Banner__BannerImage",
  componentId: "tzfnvw-2"
})(["height:auto;max-width:100%;width:100%;"]);
var BannerChildrenWrapper = styled.div.withConfig({
  displayName: "Banner__BannerChildrenWrapper",
  componentId: "tzfnvw-3"
})(["bottom:0;left:0;position:absolute;text-align:center;top:", ";width:100%;z-index:15;"], function (_ref2) {
  var size = _ref2.size;
  return size === 'small' ? '20%' : '35%';
});
/*
  outer Banner component
*/

var Banner = function Banner(_ref3) {
  var color = _ref3.color,
      size = _ref3.size,
      src = _ref3.src,
      children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, ["color", "size", "src", "children"]);

  return React.createElement(BannerWrapper, restProps, React.createElement(BannerImageColorWrapper, {
    size: size
  }, src ? React.createElement(BannerImage, {
    src: src,
    alt: "Banner"
  }) : React.createElement("svg", {
    viewBox: "0 0 2600 600"
  }, React.createElement("rect", {
    "aria-hidden": "true",
    focusable: "false",
    width: "100%",
    height: "100%",
    fill: colors[color]
  }))), React.createElement(BannerChildrenWrapper, {
    size: size
  }, children));
};

Banner.propTypes = {
  color: PropTypes.oneOf(['emerald', 'red', 'brown', 'yellow', 'gray', 'sand', 'lightBrown', 'mediumBrown', 'navy', 'skyblue']),
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  src: PropTypes.string,
  children: PropTypes.node
};
Banner.defaultProps = {
  color: 'emerald',
  size: 'default',
  src: null,
  children: null
};
Banner.Text = BannerText;
export default Banner;
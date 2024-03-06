var _excluded = ["color", "size", "uppercase", "rounded", "outline", "inverse"],
  _excluded2 = ["tag", "color", "size", "uppercase", "rounded", "outline", "inverse"],
  _excluded3 = ["tag", "color", "size", "uppercase", "rounded", "outline", "inverse"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { colors, typography } from "brown-university-styles";
var sans = typography.sans;

/*
  css mixins
*/
var buttonCSS = css(["border-width:0;display:inline-block;font-family:", ";font-style:normal;font-weight:700;letter-spacing:0.6px;line-height:1.5;text-align:center;text-decoration:none !important;transition:color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;"], sans);
var buttonAfterCSS = css(["border-color:transparent transparent transparent transparent;border-style:solid;border-width:3.5px 0 3.5px 5px;content:\"\";display:inline-block;height:0;position:relative;right:-8px;top:-1px;transition:border 0.25s,color 0.25s;width:0;"]);
var buttonAfterShiftCSS = css(["-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all 0.25s;"]);
var buttonAfterShiftHoverCSS = css(["-ms-transform:translate3d(4px,0,0);-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);transition:all 0.25s;"]);

/*
  css prop getters
*/
var getBackgroundColor = function getBackgroundColor(_ref) {
  var color = _ref.color,
    outline = _ref.outline,
    inverse = _ref.inverse;
  if (inverse) {
    if (outline) {
      return colors[color];
    }
    return colors.white;
  }
  if (outline) {
    return "transparent";
  }
  return colors[color];
};
var getBoxShadow = function getBoxShadow(_ref2) {
  var color = _ref2.color,
    inverse = _ref2.inverse;
  if (inverse) {
    return colors.white;
  }
  return colors[color];
};
var getColor = function getColor(_ref3) {
  var color = _ref3.color,
    outline = _ref3.outline,
    inverse = _ref3.inverse;
  if (inverse) {
    if (outline) {
      return colors.white;
    }
    return colors.gray;
  }
  if (outline) {
    return colors[color];
  }
  return colors.white;
};
var getFontSize = function getFontSize(_ref4) {
  var size = _ref4.size;
  switch (size) {
    case "small":
      return "0.55em";
    case "large":
      return "0.95em";
    default:
      return "0.75em";
  }
};
var getBackgroundColorWithHover = function getBackgroundColorWithHover(_ref5) {
  var color = _ref5.color,
    outline = _ref5.outline,
    inverse = _ref5.inverse,
    disabled = _ref5.disabled;
  if (disabled) {
    return getBackgroundColor({
      color: color,
      outline: outline,
      inverse: inverse
    });
  }
  if (inverse) {
    if (outline) {
      return colors.white;
    }
    return colors[color];
  }
  if (outline) {
    return colors[color];
  }
  return darken(0.1, colors[color]);
};
var getBoxShadowWithHover = function getBoxShadowWithHover(_ref6) {
  var color = _ref6.color,
    outline = _ref6.outline,
    inverse = _ref6.inverse,
    disabled = _ref6.disabled;
  if (disabled) {
    return getBoxShadow({
      color: color,
      inverse: inverse
    });
  }
  if (inverse) {
    return colors.white;
  }
  if (outline) {
    return colors[color];
  }
  return darken(0.1, colors[color]);
};
var getColorWithHover = function getColorWithHover(_ref7) {
  var color = _ref7.color,
    outline = _ref7.outline,
    inverse = _ref7.inverse,
    disabled = _ref7.disabled;
  if (disabled) {
    return getColor({
      color: color,
      outline: outline,
      inverse: inverse
    });
  }
  if (inverse && outline) {
    return colors.gray;
  }
  return colors.white;
};

/*
  inner Tag component
*/
// TODO: filter color prop with `as` usage (see `styled-components` issue 439)
var Tag = styled(function (_ref8) {
  var color = _ref8.color,
    size = _ref8.size,
    uppercase = _ref8.uppercase,
    rounded = _ref8.rounded,
    outline = _ref8.outline,
    inverse = _ref8.inverse,
    restProps = _objectWithoutProperties(_ref8, _excluded);
  return /*#__PURE__*/React.createElement("div", restProps);
}).withConfig({
  displayName: "Button__Tag",
  componentId: "sc-4pqrql-0"
})(["", " background-color:", ";border-radius:", ";box-shadow:inset 0 0 0 1px ", ";color:", ";cursor:", ";font-size:", ";opacity:", ";padding:", ";pointer-events:", ";text-transform:", ";", " &:hover,&:focus{background-color:", ";box-shadow:inset 0 0 0 1px ", ";color:", ";", "}"], buttonCSS, function (props) {
  return getBackgroundColor(props);
}, function (_ref9) {
  var rounded = _ref9.rounded;
  return rounded ? "5px" : null;
}, function (props) {
  return getBoxShadow(props);
}, function (props) {
  return getColor(props);
}, function (_ref10) {
  var disabled = _ref10.disabled,
    href = _ref10.href;
  return disabled && !href ? "not-allowed" : "pointer";
}, function (props) {
  return getFontSize(props);
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled ? "0.45" : "1";
}, function (_ref12) {
  var href = _ref12.href;
  return href ? "12px 25px 12px 20px" : "12px 25px";
}, function (_ref13) {
  var disabled = _ref13.disabled,
    href = _ref13.href;
  return disabled && href ? "none" : "auto";
}, function (_ref14) {
  var uppercase = _ref14.uppercase;
  return uppercase ? "uppercase" : null;
}, function (props) {
  return props.href && css(["&::after{", " ", " border-color:transparent transparent transparent ", ";}"], buttonAfterCSS, buttonAfterShiftCSS, getColor(props));
}, function (props) {
  return getBackgroundColorWithHover(props);
}, function (props) {
  return getBoxShadowWithHover(props);
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return props.href && css(["&::after{", " border-color:transparent transparent transparent ", ";}"], buttonAfterShiftHoverCSS, getColorWithHover(props));
});

/*
  outer Button component
*/
var deriveTag = function deriveTag(_ref15) {
  var tag = _ref15.tag,
    href = _ref15.href;
  if (tag === "button" && href) {
    return "a";
  }
  return tag;
};
function FilteredAs(props) {
  /* eslint-disable react/prop-types */
  var tag = props.tag,
    color = props.color,
    size = props.size,
    uppercase = props.uppercase,
    rounded = props.rounded,
    outline = props.outline,
    inverse = props.inverse,
    restProps = _objectWithoutProperties(props, _excluded2);
  /* eslint-enable react/prop-types */
  var DerivedTag = deriveTag(props);
  return /*#__PURE__*/React.createElement(DerivedTag, restProps);
}
var Button = function Button(props) {
  var tag = props.tag,
    color = props.color,
    size = props.size,
    uppercase = props.uppercase,
    rounded = props.rounded,
    outline = props.outline,
    inverse = props.inverse,
    restProps = _objectWithoutProperties(props, _excluded3);
  var DerivedTag = deriveTag(props);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    as: FilteredAs,
    type: DerivedTag === "button" && props.onClick ? "button" : undefined
  }, restProps, {
    tag: tag,
    color: color,
    size: size,
    uppercase: uppercase,
    rounded: rounded,
    outline: outline,
    inverse: inverse
  }));
};
Button.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.oneOf(["red", "yellow", "brown", "gray", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]),
  size: PropTypes.oneOf(["default", "small", "large"]),
  uppercase: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  inverse: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string
};
Button.defaultProps = {
  tag: "button",
  color: "red",
  size: "default",
  uppercase: true,
  rounded: false,
  outline: false,
  inverse: false,
  disabled: false,
  onClick: null,
  href: null
};
export default Button;
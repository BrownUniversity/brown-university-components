var _excluded = ["tag"];
var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { colors, typography } from "brown-university-styles";
import NavContext from "./NavContext";
import media from "../../media";
var sans = typography.sans;

/*
  css mixins
*/
var navLinkCSS = css(["background:transparent;border:none;display:block;font-family:", ";padding:0;text-decoration:none !important;"], sans);
var navLinkAfterCSS = css(["content:\"\";display:block;height:3px;"]);

/*
  css prop getters
*/
var getColor = function getColor(_ref) {
  var active = _ref.active,
    mobile = _ref.mobile,
    sub = _ref.sub,
    color = _ref.color;
  var activeColor;
  var defaultColor;
  if (mobile || sub) {
    switch (color) {
      case "white":
        activeColor = colors.sand;
        defaultColor = colors.white;
        break;

      // red
      default:
        activeColor = colors.black;
        defaultColor = colors.red;
        break;
    }
  } else {
    switch (color) {
      case "white":
        activeColor = colors.sand;
        defaultColor = colors.white;
        break;

      // red
      default:
        activeColor = colors.red;
        defaultColor = colors.black;
        break;
    }
  }
  if (active) {
    return activeColor;
  }
  return defaultColor;
};
var getCursor = function getCursor(_ref2) {
  var disabled = _ref2.disabled,
    href = _ref2.href;
  if (disabled && !href) {
    return "not-allowed";
  }
  return "pointer";
};
var getFontSize = function getFontSize(_ref3) {
  var navbar = _ref3.navbar,
    mobile = _ref3.mobile;
  if (navbar || mobile) {
    return "1em";
  }
  return "1.1em";
};
var getFontWeight = function getFontWeight(_ref4) {
  var navbar = _ref4.navbar,
    sub = _ref4.sub;
  if (navbar || sub) {
    return "400";
  }
  return "700";
};
var getLineHeight = function getLineHeight(_ref5) {
  var navbar = _ref5.navbar,
    mobile = _ref5.mobile,
    sub = _ref5.sub;
  if (navbar || mobile || sub) {
    return "1.5";
  }
  return "1";
};
var getOpacity = function getOpacity(_ref6) {
  var disabled = _ref6.disabled,
    color = _ref6.color;
  if (disabled && color !== "white") {
    return "0.65";
  }
  return "1";
};
var getPointerEvents = function getPointerEvents(_ref7) {
  var disabled = _ref7.disabled,
    href = _ref7.href;
  if (disabled && href) {
    return "none";
  }
  return "auto";
};
var getTransition = function getTransition(_ref8) {
  var mobile = _ref8.mobile,
    sub = _ref8.sub,
    href = _ref8.href;
  if (mobile || sub) {
    return "all .2s ease-in-out";
  }
  if (!href) {
    return null;
  }
  return "background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear";
};
var getAfterMarginTop = function getAfterMarginTop(_ref9) {
  var navbar = _ref9.navbar;
  if (navbar) {
    return "0.25em";
  }
  return "1em";
};
var getAfterWidth = function getAfterWidth(_ref10) {
  var active = _ref10.active;
  if (active) {
    return "100%";
  }
  return "0";
};
var getColorWithHover = function getColorWithHover(_ref11) {
  var disabled = _ref11.disabled,
    mobile = _ref11.mobile,
    sub = _ref11.sub,
    color = _ref11.color;
  var disabledColor;
  var defaultColor;
  if (mobile || sub) {
    switch (color) {
      case "white":
        disabledColor = colors.white;
        defaultColor = colors.sand;
        break;

      // red
      default:
        disabledColor = colors.red;
        defaultColor = colors.black;
        break;
    }
  } else {
    switch (color) {
      case "white":
        disabledColor = colors.white;
        defaultColor = colors.sand;
        break;

      // red
      default:
        disabledColor = colors.black;
        defaultColor = colors.red;
        break;
    }
  }
  if (disabled) {
    return disabledColor;
  }
  return defaultColor;
};
var getAfterWidthWithHover = function getAfterWidthWithHover(_ref12) {
  var disabled = _ref12.disabled;
  if (disabled) {
    return "0";
  }
  return "100%";
};

/*
  inner Tag component
*/
// TODO: filter active, navbar, mobile, sub and color props with `as` usage (see `styled-components` issue 439)
var Tag = styled.div.withConfig({
  displayName: "NavLink__Tag",
  componentId: "sc-1ajladk-0"
})(["", " color:", ";cursor:", ";font-size:", ";font-weight:", ";line-height:", ";opacity:", ";pointer-events:", ";transition:", ";", ";", " &:hover{color:", ";", "}"], navLinkCSS, function (props) {
  return getColor(props);
}, function (props) {
  return getCursor(props);
}, function (props) {
  return getFontSize(props);
}, function (props) {
  return getFontWeight(props);
}, function (props) {
  return getLineHeight(props);
}, function (props) {
  return getOpacity(props);
}, function (props) {
  return getPointerEvents(props);
}, function (props) {
  return getTransition(props);
}, media.xl(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "])), function (_ref13) {
  var navbar = _ref13.navbar,
    mobile = _ref13.mobile,
    sub = _ref13.sub;
  return !(navbar || mobile || sub) && " 1.2em";
}), function (props) {
  return !(props.mobile || props.sub) && css(["&::after{", " ", " background:", ";margin-top:", ";width:", ";}"], navLinkAfterCSS, props.href && "transition: width 0.3s;", function (_ref14) {
    var color = _ref14.color;
    return color === "white" ? colors.sand : colors.red;
  }, getAfterMarginTop(props), getAfterWidth(props));
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return !(props.mobile || props.sub) && css(["&::after{width:", ";}"], getAfterWidthWithHover(props));
});

/*
  outer NavLink component
*/
var deriveTag = function deriveTag(_ref15) {
  var tag = _ref15.tag,
    href = _ref15.href;
  if (tag === "button" && href) {
    return "a";
  }
  return tag;
};
var NavLink = function NavLink(props) {
  var tag = props.tag,
    restProps = _objectWithoutProperties(props, _excluded);
  var derivedTag = deriveTag(props);
  return /*#__PURE__*/React.createElement(NavContext.Consumer, null, function (_ref16) {
    var navbar = _ref16.navbar,
      mobile = _ref16.mobile,
      sub = _ref16.sub,
      color = _ref16.color;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      as: derivedTag,
      type: derivedTag === "button" && props.onClick ? "button" : undefined
    }, restProps, {
      navbar: navbar,
      mobile: mobile,
      sub: sub,
      color: color
    }));
  });
};
NavLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string
};
NavLink.defaultProps = {
  tag: "button",
  active: false,
  disabled: false,
  onClick: null,
  href: null
};
export default NavLink;
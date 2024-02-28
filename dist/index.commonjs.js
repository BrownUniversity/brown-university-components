/*! brown-university-components v1.7.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("styled-components"), require("brown-university-styles"), require("prop-types"), require("react"), require("polished"), require("react-fns"));
	else if(typeof define === 'function' && define.amd)
		define(["styled-components", "brown-university-styles", "prop-types", "react", "polished", "react-fns"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("styled-components"), require("brown-university-styles"), require("prop-types"), require("react"), require("polished"), require("react-fns")) : factory(root["styled-components"], root["brown-university-styles"], root["prop-types"], root["react"], root["polished"], root["react-fns"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__38__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sm: function sm() {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (min-width:", "px){", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__.breakpoints.sm, styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  },
  md: function md() {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (min-width:", "px){", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__.breakpoints.md, styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  },
  lg: function lg() {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (min-width:", "px){", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__.breakpoints.lg, styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  },
  xl: function xl() {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (min-width:", "px){", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__.breakpoints.xl, styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  },
  xxl: function xxl() {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (min-width:", "px){", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__.breakpoints.xxl, styled_components__WEBPACK_IMPORTED_MODULE_0__.css.apply(void 0, arguments));
  }
});

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/*
  inner Tag component
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var url = _ref.url,
    color = _ref.color,
    full = _ref.full,
    marginTop = _ref.marginTop,
    restProps = _objectWithoutProperties(_ref, ["url", "color", "full", "marginTop"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", restProps);
}).withConfig({
  displayName: "Background__Tag",
  componentId: "uwuoy1-0"
})(["background-image:url('", "');background-repeat:repeat;background-size:1600px;background-color:", ";background-position-y:", "px;", ""], function (_ref2) {
  var url = _ref2.url;
  return url;
}, function (_ref3) {
  var color = _ref3.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors[color];
}, function (_ref4) {
  var marginTop = _ref4.marginTop;
  return marginTop;
}, function (props) {
  return props.full && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["@media (min-width:1600px){background-size:100%;}"]);
});

/*
  outer Background component
*/
var Background = function Background(_ref5) {
  var url = _ref5.url,
    color = _ref5.color,
    full = _ref5.full,
    restProps = _objectWithoutProperties(_ref5, ["url", "color", "full"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({}, restProps, {
    url: url,
    color: color,
    full: full
  }));
};
Background.propTypes = process.env.NODE_ENV !== "production" ? {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["white", "lightGray"]),
  full: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  marginTop: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
Background.defaultProps = {
  color: "white",
  full: true,
  marginTop: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BannerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _BannerText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/*
  css prop getters
*/
var getMaxHeight = function getMaxHeight(_ref) {
  var size = _ref.size;
  switch (size) {
    case "small":
      return "150px";
    case "medium":
      return "300px";
    case "large":
      return "600px";
    default:
      return "200px";
  }
};

/*
  inner components
*/
var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Banner__BannerWrapper",
  componentId: "sc-11l4cxl-0"
})(["position:relative;z-index:5;"]);
var BannerImageColorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Banner__BannerImageColorWrapper",
  componentId: "sc-11l4cxl-1"
})(["width:100%;overflow:hidden;max-height:", ";"], function (props) {
  return getMaxHeight(props);
});
var BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "Banner__BannerImage",
  componentId: "sc-11l4cxl-2"
})(["height:auto;min-width:320px;max-width:100%;width:100%;display:block;"]);
var BannerChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Banner__BannerChildrenWrapper",
  componentId: "sc-11l4cxl-3"
})(["position:absolute;text-align:center;width:100%;z-index:15;top:", ";@media (min-width:", "px){top:", ";}"], function (props) {
  return props.size === "small" ? "5%" : "35%";
}, function (props) {
  return props.mobileBreakpoint;
}, function (_ref2) {
  var size = _ref2.size;
  return size === "small" ? "20%" : "35%";
});

/*
  outer Banner component
*/
var Banner = function Banner(_ref3) {
  var color = _ref3.color,
    size = _ref3.size,
    src = _ref3.src,
    children = _ref3.children,
    mobileBreakpoint = _ref3.mobileBreakpoint,
    restProps = _objectWithoutProperties(_ref3, ["color", "size", "src", "children", "mobileBreakpoint"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BannerWrapper, _extends({}, restProps, {
    role: "banner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BannerImageColorWrapper, {
    size: size
  }, src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BannerImage, {
    src: src,
    alt: "Banner"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    display: "block",
    viewBox: "0 0 2600 600",
    focusable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("rect", {
    "aria-hidden": "true",
    width: "100%",
    height: "100%",
    fill: brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors[color]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BannerChildrenWrapper, {
    size: size,
    mobileBreakpoint: mobileBreakpoint
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BannerContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      mobileBreakpoint: mobileBreakpoint
    }
  }, children)));
};
Banner.propTypes = process.env.NODE_ENV !== "production" ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["emerald", "darkEmerald", "red", "brown", "yellow", "gray", "sand", "lightBrown", "mediumBrown", "navy", "skyBlue"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["default", "small", "medium", "large"]),
  src: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node),
  mobileBreakpoint: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
} : {};
Banner.defaultProps = {
  color: "emerald",
  size: "default",
  src: null,
  children: null,
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.breakpoints.md
};
Banner.Text = _BannerText__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var BannerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerContext);

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BannerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var serif = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.typography.serif;
/*
  inner Tag component
*/
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BannerText__Tag",
  componentId: "lrk5yo-0"
})(["color:", ";font-family:", ";font-size:1.9em;text-shadow:1px 1px 2px rgba(0,0,0,0.4);@media (min-width:", "px){font-size:2.5em;}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white, serif, function (props) {
  return props.mobileBreakpoint;
});

/*
  outer BannerText component
*/
var BannerText = function BannerText(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BannerContext__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, null, function (_ref) {
    var mobileBreakpoint = _ref.mobileBreakpoint;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({}, props, {
      mobileBreakpoint: mobileBreakpoint
    }));
  });
};
BannerText.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired
} : {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerText);

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var sans = brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.typography.sans;
/*
  css mixins
*/
var buttonCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-width:0;display:inline-block;font-family:", ";font-style:normal;font-weight:700;letter-spacing:0.6px;line-height:1.5;text-align:center;text-decoration:none !important;transition:color 0.25s,background 0.25s,border 0.25s,box-shadow 0.25s;"], sans);
var buttonAfterCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["border-color:transparent transparent transparent transparent;border-style:solid;border-width:3.5px 0 3.5px 5px;content:\"\";display:inline-block;height:0;position:relative;right:-8px;top:-1px;transition:border 0.25s,color 0.25s;width:0;"]);
var buttonAfterShiftCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all 0.25s;"]);
var buttonAfterShiftHoverCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["-ms-transform:translate3d(4px,0,0);-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);transition:all 0.25s;"]);

/*
  css prop getters
*/
var getBackgroundColor = function getBackgroundColor(_ref) {
  var color = _ref.color,
    outline = _ref.outline,
    inverse = _ref.inverse;
  if (inverse) {
    if (outline) {
      return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
    }
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
  }
  if (outline) {
    return "transparent";
  }
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
};
var getBoxShadow = function getBoxShadow(_ref2) {
  var color = _ref2.color,
    inverse = _ref2.inverse;
  if (inverse) {
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
  }
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
};
var getColor = function getColor(_ref3) {
  var color = _ref3.color,
    outline = _ref3.outline,
    inverse = _ref3.inverse;
  if (inverse) {
    if (outline) {
      return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
    }
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.gray;
  }
  if (outline) {
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
  }
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
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
      return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
    }
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
  }
  if (outline) {
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
  }
  return (0,polished__WEBPACK_IMPORTED_MODULE_3__.darken)(0.1, brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color]);
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
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
  }
  if (outline) {
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
  }
  return (0,polished__WEBPACK_IMPORTED_MODULE_3__.darken)(0.1, brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color]);
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
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.gray;
  }
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white;
};

/*
  inner Tag component
*/
// TODO: filter color prop with `as` usage (see `styled-components` issue 439)
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Button__Tag",
  componentId: "sc-4pqrql-0"
})(["", " background-color:", ";border-radius:", ";box-shadow:inset 0 0 0 1px ", ";color:", ";cursor:", ";font-size:", ";opacity:", ";padding:", ";pointer-events:", ";text-transform:", ";", " &:hover,&:focus{background-color:", ";box-shadow:inset 0 0 0 1px ", ";color:", ";", "}"], buttonCSS, function (props) {
  return getBackgroundColor(props);
}, function (_ref8) {
  var rounded = _ref8.rounded;
  return rounded ? "5px" : null;
}, function (props) {
  return getBoxShadow(props);
}, function (props) {
  return getColor(props);
}, function (_ref9) {
  var disabled = _ref9.disabled,
    href = _ref9.href;
  return disabled && !href ? "not-allowed" : "pointer";
}, function (props) {
  return getFontSize(props);
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled ? "0.45" : "1";
}, function (_ref11) {
  var href = _ref11.href;
  return href ? "12px 25px 12px 20px" : "12px 25px";
}, function (_ref12) {
  var disabled = _ref12.disabled,
    href = _ref12.href;
  return disabled && href ? "none" : "auto";
}, function (_ref13) {
  var uppercase = _ref13.uppercase;
  return uppercase ? "uppercase" : null;
}, function (props) {
  return props.href && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&::after{", " ", " border-color:transparent transparent transparent ", ";}"], buttonAfterCSS, buttonAfterShiftCSS, getColor(props));
}, function (props) {
  return getBackgroundColorWithHover(props);
}, function (props) {
  return getBoxShadowWithHover(props);
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return props.href && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&::after{", " border-color:transparent transparent transparent ", ";}"], buttonAfterShiftHoverCSS, getColorWithHover(props));
});

/*
  outer Button component
*/
var deriveTag = function deriveTag(_ref14) {
  var tag = _ref14.tag,
    href = _ref14.href;
  if (tag === "button" && href) {
    return "a";
  }
  return tag;
};
var Button = function Button(props) {
  var tag = props.tag,
    restProps = _objectWithoutProperties(props, ["tag"]);
  var derivedTag = deriveTag(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({
    as: derivedTag,
    type: derivedTag === "button" && props.onClick ? "button" : undefined
  }, restProps));
};
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["red", "yellow", "brown", "gray", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["default", "small", "large"]),
  uppercase: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
} : {};
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable no-return-assign */




/*
  inner Tag component
*/
// TODO: filter display, height, overflow and transition props with `ref` usage (see `styled-components` issue 439)
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Collapse__Tag",
  componentId: "sc-1rbz6rs-0"
})(["will-change:height;display:", ";height:", ";overflow:", ";transition:", ";"], function (_ref) {
  var display = _ref.display;
  return display;
}, function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var overflow = _ref3.overflow;
  return overflow;
}, function (_ref4) {
  var transition = _ref4.transition;
  return transition;
});

/*
  outer Collapse component
*/
var Collapse = /*#__PURE__*/function (_Component) {
  _inherits(Collapse, _Component);
  var _super = _createSuper(Collapse);
  function Collapse() {
    var _this;
    _classCallCheck(this, Collapse);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      display: "none",
      height: "0",
      overflow: "hidden"
    });
    _defineProperty(_assertThisInitialized(_this), "tagRef", null);
    _defineProperty(_assertThisInitialized(_this), "getHeight", function () {
      return _this.tagRef.scrollHeight;
    });
    _defineProperty(_assertThisInitialized(_this), "setExpanded", function () {
      _this.setState({
        display: "block",
        height: "auto",
        overflow: "visible"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "setCollapsed", function () {
      _this.setState({
        display: "none"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (e) {
      var ePropertyName = process.NODE_ENV === "jest" ? "height" : e.propertyName;
      if (e.target === _this.tagRef && ePropertyName === "height") {
        if (_this.props.isOpen) {
          _this.setExpanded();
        } else {
          _this.setCollapsed();
        }
      }
    });
    return _this;
  }
  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.setExpanded();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (!prevProps.isOpen && this.props.isOpen) {
        this.setState({
          display: "block"
        }, function () {
          return _this2.setState({
            height: "".concat(_this2.getHeight(), "px")
          });
        });
      }
      if (prevProps.isOpen && !this.props.isOpen) {
        this.setState({
          height: "".concat(this.getHeight(), "px")
        }, function () {
          return setTimeout(function () {
            return _this2.setState({
              height: "0",
              overflow: "hidden"
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        isOpen = _this$props.isOpen,
        children = _this$props.children,
        restProps = _objectWithoutProperties(_this$props, ["isOpen", "children"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({}, restProps, this.state, {
        ref: function ref(node) {
          return _this3.tagRef = node;
        },
        onTransitionEnd: this.handleTransitionEnd
      }), children);
    }
  }]);
  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool).isRequired,
  transition: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
Collapse.defaultProps = {
  transition: "height 250ms cubic-bezier(0.4,0,0.2,1)"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);




var mono = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.typography.mono;
/*
  inner Tag component
*/
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().code.withConfig({
  displayName: "Code__Tag",
  componentId: "sc-1cskgd4-0"
})(["background:", ";color:", ";border:0.5px solid #dfe3e6;border-radius:3px;font-family:", ";font-size:0.65em;padding:0.5em 0.75em;white-space:pre-wrap;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.lightGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.black, mono);

/*
  outer Code component
*/
var Code = function Code(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, props);
};
Code.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FooterLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _logo_together__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _assets_svg_inline_icons_marker_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _assets_svg_inline_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _assets_svg_inline_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _assets_svg_inline_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _assets_svg_inline_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _assets_svg_inline_icons_snapchat_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _assets_svg_inline_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var _assets_svg_inline_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27);
function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n    border-top: 0;\n    font-size: ", ";\n    margin: 0;\n    order: 1;\n    padding-top: 0;\n    position: relative;\n    top: 2px;\n  "]);
  _templateObject36 = function _templateObject36() {
    return data;
  };
  return data;
}
function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n    padding: 19px 15px;\n  "]);
  _templateObject35 = function _templateObject35() {
    return data;
  };
  return data;
}
function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n  "]);
  _templateObject34 = function _templateObject34() {
    return data;
  };
  return data;
}
function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 0;\n    order: 2;\n  "]);
  _templateObject33 = function _templateObject33() {
    return data;
  };
  return data;
}
function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    flex-wrap: none;\n    justify-content: space-between;\n  "]);
  _templateObject32 = function _templateObject32() {
    return data;
  };
  return data;
}
function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    padding: 0;\n  "]);
  _templateObject31 = function _templateObject31() {
    return data;
  };
  return data;
}
function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n  "]);
  _templateObject30 = function _templateObject30() {
    return data;
  };
  return data;
}
function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 50px;\n    width: ", "px;\n  "]);
  _templateObject29 = function _templateObject29() {
    return data;
  };
  return data;
}
function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 32px;\n    width: auto;\n  "]);
  _templateObject28 = function _templateObject28() {
    return data;
  };
  return data;
}
function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 20px;\n    width: 50%;\n  "]);
  _templateObject27 = function _templateObject27() {
    return data;
  };
  return data;
}
function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    padding: 30px 0 35px;\n  "]);
  _templateObject26 = function _templateObject26() {
    return data;
  };
  return data;
}
function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n  "]);
  _templateObject25 = function _templateObject25() {
    return data;
  };
  return data;
}
function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n      display: none;\n    "]);
  _templateObject24 = function _templateObject24() {
    return data;
  };
  return data;
}
function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: top;\n  "]);
  _templateObject23 = function _templateObject23() {
    return data;
  };
  return data;
}
function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    border-top: 1px solid rgba(183, 176, 156, 0.2);\n    margin-bottom: 0;\n  "]);
  _templateObject22 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 32px;\n    width: auto;\n  "]);
  _templateObject21 = function _templateObject21() {
    return data;
  };
  return data;
}
function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 20px;\n    width: 50%;\n  "]);
  _templateObject20 = function _templateObject20() {
    return data;
  };
  return data;
}
function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n  "]);
  _templateObject19 = function _templateObject19() {
    return data;
  };
  return data;
}
function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 30px;\n  "]);
  _templateObject18 = function _templateObject18() {
    return data;
  };
  return data;
}
function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1.33333;\n  "]);
  _templateObject17 = function _templateObject17() {
    return data;
  };
  return data;
}
function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: 1.25;\n  "]);
  _templateObject16 = function _templateObject16() {
    return data;
  };
  return data;
}
function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 40px;\n    margin-bottom: 0;\n  "]);
  _templateObject15 = function _templateObject15() {
    return data;
  };
  return data;
}
function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 28px;\n  "]);
  _templateObject14 = function _templateObject14() {
    return data;
  };
  return data;
}
function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    letter-spacing: ", ";\n  "]);
  _templateObject13 = function _templateObject13() {
    return data;
  };
  return data;
}
function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 12px;\n  "]);
  _templateObject12 = function _templateObject12() {
    return data;
  };
  return data;
}
function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    border-right: 1px solid rgba(183, 176, 156, 0.2);\n    padding-top: 15px;\n    padding-right: 50px;\n    width: calc(100% - ", "px);\n  "]);
  _templateObject11 = function _templateObject11() {
    return data;
  };
  return data;
}
function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n  "]);
  _templateObject10 = function _templateObject10() {
    return data;
  };
  return data;
}
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 90px 0 45px;\n  "]);
  _templateObject9 = function _templateObject9() {
    return data;
  };
  return data;
}
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    padding: 60px 0 70px;\n  "]);
  _templateObject8 = function _templateObject8() {
    return data;
  };
  return data;
}
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n  "]);
  _templateObject7 = function _templateObject7() {
    return data;
  };
  return data;
}
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n  "]);
  _templateObject6 = function _templateObject6() {
    return data;
  };
  return data;
}
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n  "]);
  _templateObject5 = function _templateObject5() {
    return data;
  };
  return data;
}
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n  "]);
  _templateObject4 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n  "]);
  _templateObject3 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 2px;\n  "]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: top;\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















var ribbonAsideWidth = 325;

/*
  css mixins
*/
var addressItemCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", " display:block;padding-left:25px;position:relative;", ";"], _mixins__WEBPACK_IMPORTED_MODULE_3__.unstyledLinkCSS, _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject()));
var addressIconCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["fill:rgba(255,255,255,0.2);left:0;position:absolute;top:0;transform-origin:left top;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject2()));
var socialIconCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["fill:", ";&:hover,&:focus{fill:", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.white, brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.gold);

/*
  inner components
*/
var PaddedFooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_FooterLink__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "Footer__PaddedFooterLink",
  componentId: "sc-1s3f2bx-0"
})(["display:block;padding:10px 0;"]);
var Margins = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__Margins",
  componentId: "sc-1s3f2bx-1"
})(["display:flex;flex-wrap:wrap;margin-left:auto;margin-right:auto;min-width:320px;width:calc(100% - 40px);", ";", ";", ";", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].sm(_templateObject3(), brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.breakpoints.sm - 20), _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject4(), brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.breakpoints.md - 20), _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject5(), brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.breakpoints.lg - 20), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject6(), brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.breakpoints.xl - 20), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject7(), brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.breakpoints.xxl - 20));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().footer.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "sc-1s3f2bx-2"
})(["background-color:", ";*{box-sizing:border-box;}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.brown);
var RibbonOuter = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__RibbonOuter",
  componentId: "sc-1s3f2bx-3"
})(["padding:40px 0 50px;", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject8()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject9()));
var RibbonInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__RibbonInner",
  componentId: "sc-1s3f2bx-4"
})(["display:flex;flex-direction:column;width:100%;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject10()));
var RibbonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__RibbonGroup",
  componentId: "sc-1s3f2bx-5"
})(["", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject11(), ribbonAsideWidth));
var AddressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__AddressWrapper",
  componentId: "sc-1s3f2bx-6"
})(["margin-bottom:16px;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject12()));
var AddressName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Footer__AddressName",
  componentId: "sc-1s3f2bx-7"
})(["color:", ";display:block;font-family:", ";font-size:", ";font-weight:400;letter-spacing:", ";margin-bottom:26px;text-transform:uppercase;", ";", ";"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.taupe, brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.typography.sans, (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(11), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(1.25), _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject13(), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(13), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(1.5)), _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject14()));
var AddressItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__AddressItems",
  componentId: "sc-1s3f2bx-8"
})([""]);
var AddressBaseItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "Footer__AddressBaseItem",
  componentId: "sc-1s3f2bx-9"
})(["", " margin-bottom:14px;", ";"], addressItemCSS, _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject15()));
var AddressPhoneItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "Footer__AddressPhoneItem",
  componentId: "sc-1s3f2bx-10"
})(["", ""], addressItemCSS);
var AddressBaseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_marker_svg__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "Footer__AddressBaseIcon",
  componentId: "sc-1s3f2bx-11"
})(["", " transform:scale(0.85);height:24px;width:17px;"], addressIconCSS);
var AddressPhoneIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "Footer__AddressPhoneIcon",
  componentId: "sc-1s3f2bx-12"
})(["", " height:17px;width:17px;"], addressIconCSS);
var AddressInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Footer__AddressInfo",
  componentId: "sc-1s3f2bx-13"
})(["color:", ";font-family:", ";font-weight:400;line-height:1.3125;", ";", ";"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.white, brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.typography.serif, _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject16(), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(20)), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject17(), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(24)));
var NavigationHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2.withConfig({
  displayName: "Footer__NavigationHeader",
  componentId: "sc-1s3f2bx-14"
})(["", ""], _mixins__WEBPACK_IMPORTED_MODULE_3__.srOnlyCSS);
var QuickNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().nav.withConfig({
  displayName: "Footer__QuickNavWrapper",
  componentId: "sc-1s3f2bx-15"
})(["margin-bottom:20px;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject18()));
var QuickNavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Footer__QuickNavList",
  componentId: "sc-1s3f2bx-16"
})(["list-style:none;margin:0;padding:0;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject19()));
var QuickNavListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Footer__QuickNavListItem",
  componentId: "sc-1s3f2bx-17"
})(["", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject20()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject21()));
var FooterNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().nav.withConfig({
  displayName: "Footer__FooterNavWrapper",
  componentId: "sc-1s3f2bx-18"
})(["margin-bottom:40px;", ";", ";&:before,&:after{background:rgba(183,176,156,0.4);content:\"\";display:block;height:1px;margin:0 -10px;width:calc(100% + 20px);", ";}"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject22()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject23()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject24()));
var FooterNavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Footer__FooterNavList",
  componentId: "sc-1s3f2bx-19"
})(["list-style:none;margin:0;padding:20px 0;", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject25()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject26()));
var FooterNavListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Footer__FooterNavListItem",
  componentId: "sc-1s3f2bx-20"
})(["", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject27()), _media__WEBPACK_IMPORTED_MODULE_4__["default"].xxl(_templateObject28()));
var RibbonAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__RibbonAside",
  componentId: "sc-1s3f2bx-21"
})(["", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject29(), ribbonAsideWidth));
var GiveWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__GiveWrapper",
  componentId: "sc-1s3f2bx-22"
})(["", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].lg(_templateObject30()));
var GiveLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.withConfig({
  displayName: "Footer__GiveLogo",
  componentId: "sc-1s3f2bx-23"
})(["max-width:202px;width:100%;margin-bottom:18px;"]);
var GiveCaption = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Footer__GiveCaption",
  componentId: "sc-1s3f2bx-24"
})(["color:", ";font-family:", ";font-size:", ";font-weight:400;font-style:italic;line-height:1.5;margin:0 0 16px;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.taupe, brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.typography.serif, (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(24));
var SoleOuter = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__SoleOuter",
  componentId: "sc-1s3f2bx-25"
})(["background:", ";padding:14px 0 26px;", ";"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.transparentBlack, _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject31()));
var SoleInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__SoleInner",
  componentId: "sc-1s3f2bx-26"
})(["width:100%;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject32()));
var SocialNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().nav.withConfig({
  displayName: "Footer__SocialNavWrapper",
  componentId: "sc-1s3f2bx-27"
})(["margin-bottom:14px;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject33()));
var SocialNavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().ul.withConfig({
  displayName: "Footer__SocialNavList",
  componentId: "sc-1s3f2bx-28"
})(["align-items:center;display:flex;flex-wrap:wrap;list-style:none;margin:0 -8px;padding:0;"]);
var SocialNavListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Footer__SocialNavListItem",
  componentId: "sc-1s3f2bx-29"
})(["display:inline-block;vertical-align:middle;", ";"], _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject34()));
var SocialNavLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
}).withConfig({
  displayName: "Footer__SocialNavLink",
  componentId: "sc-1s3f2bx-30"
})(["", " box-shadow:inset 0 0 0 1px transparent;display:flex;justify-content:center;padding:17px 8px;position:relative;text-align:center;transition:color 0.25s;", ";"], _mixins__WEBPACK_IMPORTED_MODULE_3__.unstyledLinkCSS, _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject35()));
var SocialFacebookIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "Footer__SocialFacebookIcon",
  componentId: "sc-1s3f2bx-31"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialInstagramIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "Footer__SocialInstagramIcon",
  componentId: "sc-1s3f2bx-32"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialLinkedInIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_10__["default"]).withConfig({
  displayName: "Footer__SocialLinkedInIcon",
  componentId: "sc-1s3f2bx-33"
})(["", " height:22px;width:22px;"], socialIconCSS);
var SocialSnapchatIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_snapchat_svg__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "Footer__SocialSnapchatIcon",
  componentId: "sc-1s3f2bx-34"
})(["", " height:20px;width:22px;"], socialIconCSS);
var SocialTwitterIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_12__["default"]).withConfig({
  displayName: "Footer__SocialTwitterIcon",
  componentId: "sc-1s3f2bx-35"
})(["", " height:18px;width:22px;"], socialIconCSS);
var SocialYouTubeIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_svg_inline_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_13__["default"]).withConfig({
  displayName: "Footer__SocialYouTubeIcon",
  componentId: "sc-1s3f2bx-36"
})(["", " height:16px;width:22px;"], socialIconCSS);
var SocialIconLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Footer__SocialIconLabel",
  componentId: "sc-1s3f2bx-37"
})(["", ""], _mixins__WEBPACK_IMPORTED_MODULE_3__.srOnlyCSS);
var Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Footer__Copyright",
  componentId: "sc-1s3f2bx-38"
})(["border-top:1px solid rgba(183,176,156,0.2);color:", ";font-family:", ";font-size:", ";font-weight:400;margin:0 -10px;padding-top:20px;", ";"], brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.colors.taupe, brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.typography.serif, (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(14), _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject36(), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_2__.getRems)(20)));

/*
  outer Footer component
*/
var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RibbonOuter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Margins, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RibbonInner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RibbonGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressName, null, "Brown University"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressItems, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressBaseItem, {
    href: "https://www.google.com/maps/dir/?api=1&destination=Brown%20University%2075%20Waterman%20Street%20%20%20%20%20%20%20%20Providence%2C%20RI%2002912",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressBaseIcon, null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressInfo, null, "Providence, RI 02912")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressPhoneItem, {
    href: "tel:4018631000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressPhoneIcon, null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddressInfo, null, "401-863-1000")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavigationHeader, null, "Quick Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavList, {
    "aria-label": "Quick Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/visit"
  }, "Visit Brown")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/Facilities/Facilities_Management/maps/#building/"
  }, "Campus Map")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/a-z"
  }, "A to Z")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/contact-us"
  }, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavigationHeader, null, "Footer Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavList, {
    "aria-label": "Footer Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/news"
  }, "News")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://events.brown.edu/"
  }, "Events")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/administration/public-safety/"
  }, "Campus Safety")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/website-accessibility"
  }, "Accessibility")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaddedFooterLink, {
    href: "https://www.brown.edu/about/administration/human-resources/employment-performance-development/jobsbrown"
  }, "Careers At Brown"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RibbonAside, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GiveWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GiveLogo, {
    src: _logo_together__WEBPACK_IMPORTED_MODULE_14__["default"],
    alt: "Brown Together"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GiveCaption, null, "The campaign for building on distinction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://giving.brown.edu/"
  }, "Give To Brown")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SoleOuter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Margins, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SoleInner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavigationHeader, null, "Social Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavList, {
    "aria-label": "Social Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://www.facebook.com/BrownUniversity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialFacebookIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "Facebook"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://instagram.com/brownu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialInstagramIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "Instagram"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://www.linkedin.com/edu/school?id=19348"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialLinkedInIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "LinkedIn"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://www.snapchat.com/add/brown-u"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialSnapchatIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "Snapchat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://twitter.com/BrownUniversity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialTwitterIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "Twitter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialNavLink, {
    href: "https://www.youtube.com/brownuniversity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialYouTubeIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialIconLabel, null, "YouTube"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Copyright, null, "\xA9 Brown University")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _assets_svg_inline_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _assets_svg_inline_icons_link_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









/*
  css mixins
*/
var iconWrapperCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["display:inline-block;vertical-align:middle;"]);
var iconCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["left:0;position:absolute;top:50%;transform:translate(0,-50%);transition:opacity 0.25s;"]);

/*
  inner components
*/
var Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "FooterLink__Label",
  componentId: "sc-1bisu3o-0"
})(["display:inline;font-family:", ";font-size:", ";font-weight:400;letter-spacing:", ";margin-right:4px;text-transform:uppercase;", ";"], brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.typography.sans, (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.getRems)(12), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.getRems)(1.5), _media__WEBPACK_IMPORTED_MODULE_4__["default"].sm(_templateObject(), (0,brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.getRems)(13)));
var IconsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "FooterLink__IconsWrapper",
  componentId: "sc-1bisu3o-1"
})(["", " height:14px;position:relative;width:14px;"], iconWrapperCSS);
var DefaultIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "FooterLink__DefaultIconWrapper",
  componentId: "sc-1bisu3o-2"
})(["", " height:9px;width:14px;"], iconWrapperCSS);
var ActionIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "FooterLink__ActionIconWrapper",
  componentId: "sc-1bisu3o-3"
})(["", " height:14px;width:14px;"], iconWrapperCSS);
var DefaultIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_inline_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "FooterLink__DefaultIcon",
  componentId: "sc-1bisu3o-4"
})(["", " fill:", ";"], iconCSS, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.gold);
var ActionIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_assets_svg_inline_icons_link_svg__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "FooterLink__ActionIcon",
  componentId: "sc-1bisu3o-5"
})(["", " fill:", ";"], iconCSS, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "FooterLink__Tag",
  componentId: "sc-1bisu3o-6"
})(["", " color:", ";transition:background 0.25s,color 0.25s;", "{opacity:0;}&:hover,&:focus{color:", ";", "{opacity:0;}", "{opacity:1;}}"], _mixins__WEBPACK_IMPORTED_MODULE_7__.unstyledLinkCSS, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.gold, ActionIcon, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white, DefaultIcon, ActionIcon);

/*
  outer FooterLink component
*/
var FooterLink = function FooterLink(_ref) {
  var href = _ref.href,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, ["href", "children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({
    href: href
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Label, null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(IconsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(DefaultIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(DefaultIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ActionIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ActionIcon, null))));
};
FooterLink.propTypes = process.env.NODE_ENV !== "production" ? {
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string).isRequired
} : {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterLink);

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   srOnlyCSS: () => (/* binding */ srOnlyCSS),
/* harmony export */   unstyledLinkCSS: () => (/* binding */ unstyledLinkCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var srOnlyCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:0;clip-path:inset(50%);clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);
var unstyledLinkCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background-color:transparent;color:inherit;font-family:inherit;font-size:inherit;font-style:inherit;line-height:inherit;font-variant:inherit;font-weight:inherit;text-decoration:none;&:hover{text-decoration:none;}"]);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 9"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.427.135a.527.527 0 00-.705 0 .428.428 0 000 .639l3.577 3.27H.494C.219 4.046 0 4.246 0 4.498c0 .251.219.458.494.458h11.805L8.722 8.22a.435.435 0 000 .645c.197.18.515.18.705 0l4.425-4.046a.418.418 0 000-.638L9.427.135z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.506 8.003l-2.633 2.44a5.617 5.617 0 00-.383-2.676l1.376-1.3a2.44 2.44 0 00.793-1.782c0-.65-.264-1.291-.793-1.78a2.816 2.816 0 00-1.922-.735c-.692 0-1.385.244-1.922.734L8.107 5.58c-.529.507-.802 1.157-.802 1.807 0 .65.264 1.291.802 1.781.236.22.355.498.355.768s-.119.54-.355.752c-.22.21-.52.312-.82.312-.292 0-.593-.101-.82-.312C5.492 9.768 5 8.568 5 7.37c0-1.199.492-2.398 1.467-3.31l2.897-2.676A5.234 5.234 0 0112.926 0c1.293 0 2.587.464 3.58 1.384.993.92 1.494 2.12 1.494 3.318 0 1.19-.501 2.38-1.494 3.301zm-4.972 5.934l-2.913 2.697C7.638 17.544 6.345 18 5.043 18c-1.292 0-2.585-.455-3.568-1.366C.492 15.724 0 14.527 0 13.33c0-1.205.492-2.402 1.475-3.312l2.658-2.453a5.7 5.7 0 00.382 2.697l-1.374 1.273a2.423 2.423 0 00-.792 1.778c0 .65.264 1.29.792 1.779.528.489 1.22.733 1.92.733a2.83 2.83 0 001.921-.733l2.886-2.672c.547-.489.81-1.138.81-1.779 0-.649-.263-1.29-.81-1.778a1.042 1.042 0 01-.336-.776c0-.278.109-.556.336-.767.228-.21.528-.32.838-.32.3 0 .6.11.828.32.984.92 1.466 2.116 1.466 3.313a4.478 4.478 0 01-1.466 3.304z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// generated from "logo-together.png"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAACmCAYAAAAGYfGcAAAgAElEQVR4nO3d3XXbONcF4I2s3I++CoZTQZQKQlcwTgVRKohdQZwKnKlAcgV2KpBSgTUViG8F1lRwvgsAFkQCJEGCpCTvZy0v2xIFgtTfIX4OgDMkIksRWU5dDyIiIiKf91NXoKN86goQERERXRQxpq4HERERkc+7qSsQS0Tmzt/5hFUhIiIi8jq5LkITNH0BkJXu+gXgSSm1FZG/zP1b85gZgDmOuw4LABulVDFkfYmIiIhGIyKZiKxF5Lrl9nMReZZmSxNQQURy83+d57Z1ICIiIjppIjJzgpxFw7YLEXkpBUV3JoDKReRGRHbO/S8i8tgiGHM92sAsUNe7Ic4DERERUVKlIGge2GZeCpyCrU0m0PJZisi1G0CZcsuB2XM5yBLd0vYswkHzREREdAZM8GJbobyBkxMAvQY/olu01k7QtRbTClYK2p5FJHP2dS265etGnAHw5v8X5zF2P3PndubVIiIiovNnAikbRM3MT904rGcnINqZ7edOMFb2IqbrzxdMSYsWNiIiIqLJmZakpRx3zdlg59G0JmVmWxtMPbcIrnzBUy7HY7dCbPm5c1tubrsTkZuJTxsRERGRn1QHq9tAaB0Iesb0bOp4b/7fySHouhNdR/uzFObYIiIioqlJdbD6nZiWKmebTKotW2Oy47Pa4rgsIiIiiqZSFSQiO+jkn3sAV9CJPm8AfDKb7AH8BnCfap+JbAD8A13fAjph6TcAdlD+lVJqM0G9iIiI6EwlyeQueoB4Zv69Mr+fUc3GfooJP7fmt61boZT6bFqvFtDB1maCehEREdFbZrreXrvUZPzxVanZ43gRkRfnOO2Yrdcfz7nIRQ/mX4/2BBAREdHlkUO6g7kcUi+kdCPxmdtF2s0wDHGX7nmW+qDxUUyaBznUczHx00JERESnRvRsu6WUBqqb+zLRQc+6FMS8ZkVP5EXCCUObHndjHrNLWB9b9jpQ7kJ0KxfTPhAREVGVHC+ifOPcfu8JLIbwLJ7knzaAEX8gtzb3zQao76P4Z0UuS9sxYSkRERH5meDhxQ0anGDiRUxrjbk9pZ0k7F4zx5HCwvzcOT+Z2YfbLcrUDkRERBQmem2/R/O3zYL+YoKWTHTr0LpDsLIT3RJl1w60P3mLOj1KZCJQOQzCH8J9aR+7ruebiIiI3gg5tFLZrraFHK/rF+tFenSjyfHYp1nzI14fN2SQdSc6YLR2ogPPe/GMYSMiIqI3Tg6pCXYiIua2rjP6lnI8PsptwWoVLJXKrM2rJToQfJRDkBhaJzGFutmTp5ZclYiIiMYmOvBZir+VqmmWoO0yq80X5ezraMHnhnrlpX3d1WzrjiF7keZgbBY43ljPpp7XchyIButKREREF0yOcz/tRHdx2RamtsHHXeQ+r53H1ibnlGqAFdxeqoHgokVdli2Psc5OnKBSDmsfvjTsnoiIiC6NHLf42BxSczm0Qu1aBhh3Hfbtlh2chSfVhZq9AZZUUzO0Gngu1QCuL5sR3h4fUzgQERG9JXJovbHJMtcdg4q7DvsuB0SLwHaVgeqebeaeOrVO/OmpSy+mzLX5N4s9N0RERHTGRLeyPJu/1/5woZXoVhqpBkXemYbSLsDy1T2PqMtM0majt+UxfQMREdFbI4cxV74WoLbWpqwbaRhU7tl/Oah59mxTmalXut+bVLTl/u3SPzPz02WmZB0un0NERPTWyKGLsGvrzbMcghM7lquyvEzN/n1pDu5K21TGSJXuL4/REmkeOJ/JcavXsxxnaN8Fjndn7r+W5hY/pmkgIiJ6i+R4kHuseznkmvIFOUtp6DoUf5qEF4kYtyT+8VOLmu19syPX5bqKbtWzObuufccihwWwH00Za1OfvG39iYiI6DIo9x8TONwDyM1NewD/AFiZ27LS47cANkqpvVPGDMCzZ1sA2AB4UEqtfJUR3WL13fy7AvCPUmprgiy7/0+lh/0GUJh6FCag+W623yqlPnr2c22O063jHsAPpdRPX92IiIiIejGtSX2Ws2laSudFAtnbxVlnUHQXXEyX5bMcZkHm5fKl2h3o1ocpFIiIiOi0mWCmKTh6EU9aB4nLuxUqd1Eqs24twnyk00JERETUj7TPp/XsPGbZI7AqezR1qJsZuZjwFBERERF1I/WtRyKHbr2U+acsO7vRN0txMfW5ISIiIupMwuOf7HIyQwRXlg2y3BmOi4lPCREREVEaosdX2SSeOxP4JF2eJuDR7H8pkUlQiYiIiGKo5k2GIXqG3ww6VUJtMtCEPiulngL1yUMPUkptSttmOKR4cP92uekkCgD/A/CklNq2qyoRERGdq3IerAWALy0etwXwH3TgUNRslzt/b6DzUu3dDUSv0Zd5HrsC8OD8nwH4AGABHZgBOnfVE3Twsje3/wHgOlBmAeCjUmovOi3DF1PHoVI07KGP+zf0sW8G2g8RERGdOtGz7mJzULW1lEPWd9/A85e61iQ5HscVbPkyZftycS3M/V2z1jfZiR7Uz7xaRERE5Cd6jNS16HFS63BcEaVuYPtaTPBTqkduApeds+2z6IHri9K2L6LHefnGdj2bbZaJjkXEWSh7tCeGiIiITlanMViiW6B8wcQcuhsvh7+LzrqF7trbNezqVin1U+qX3wF0V9xfpusvR/OYrr9MHZcN25UV5mcP4F/ortKtUqqILIeIiIgu2GCD3OUwxsk3HurK3NYmwNkgPJDctYcOePIWZX4129oEp08w46R85XJgOhEREZ0c0WO6bky33drc1pR8dEh3pg6V9QqJiIiIzpakGc/VdRD+WGkhiIiI6A16N3UFIv1UDuixXEREREQn5f3UFYi0EJF/cci99X3CuhARERF5TRlgFea3HZzuM8chqSjM3+WB8b7HZ2geFE9EREQ0iMosQtHr9H3CcRoGm5bgaKkX0UvG5NCpGXxpG+zjNoHlZvY2s7scLz8DmKzvzj6+O/c/Afhlyi2klJjU7sscy9/QMxlnzmP/UUptRM909A1yr2Scd+qd4xD4fTC/3cz2G6ZtICIiIgCA6Fl+bbKb70TPAIwdYP4iOhlnJjp5qZ1VuGt43LN5nM0un4lOfLpseKz7OLu/3NzWpu47p752f22zv9sEqJyhSERE9AYpQGc1h17jr6stdL6q/8zfexy66WziUXf9QMDfctTkCbr1KHNuK1BdDzErbbMxv/MO+yyzXZK21cr6w9QtL237NbTANBEREV0o8a8H2Na6TSuN6Baku4gWoCZL0d1/dfvMEu/zWVoshSP+Y62tKxEREV0WJTonVN7x8a9L1LTZ2AQoa3RrvXJ9VUqtWu5zZvbZd53A2GN197sH8JFjs4hoCObz5jv6f84RURq3SuR4UWXHBtVZfD4/lFJ3bfdoWnMeA3c/mf3lDcUUSqm/IvbZtJZhUXOfK/ZY3SBrpZT62vaxRERtiV6dgmlriE7Hvi7R6C30oshN6/B9k4jB3GY80iZUIaXUFYBVQzGZiNxE7HMPvf5gyBWAjziMDwv5JnpWY8x+bTJUdhMS0VC+TF0BIjoye4dwAPUMPfD9qmYbQLc4xV45/QjcvhCRtWnpaRoY/j0ysNsgHNjZRZ8/NxQzA3Dfdp/Ofgv07xYlIqowQy+yqetBREeKd9D5pELuoVterlDfunMjIou2e20IdnIRuYducSpqivElHW0SCuxsV16B5uV3rmOO1QSBDK6IaCjfpq4AEVX88w7AT9QHT/fQV0dXDYUtReeNyutalszsvgXqr7huoMdhfW6om81PVVdWWai8GYClUuonmlvPlmamYHBAqZlNuIBuHZuhuduTiKgLDj8gOj1PNg9W3cBzwAwq7zCQcuP8PUPcDJc9dFCXNdTNKszPb899NjN9m5akW+hgaNdye+CQ+8sqH+sWwFXbGYhERG20+OwmovFtlFJX7wE98FxEPkK3VuWlDfcAHszfP6GXnikHD/9ABzf2PltGuSz3MVvo7sk59ADNrFxBp25fcdwduDf73EI3j+c4JBcN7dOt68Z5nHssBYA/zRI9t6h2QdrH26WB7L58gePrMTLRKBENhIPbiU7PA+Bfi9C29GTQAcfRunym+88GFEUot1NpO6vN9nt3vUNPvZru9yqvhdhGqcym9Qk774eIKJb5zHyZuh5EVPF/Sql9JcAiIqLTZ8Z4xk70IaJhvea8rMuDRUREp4uzB4lOz2tmBrZgERGdGTNzejd1PYjoyF4p9X/2H7ZgERGdn8XUFSCiipX7D1uwiIjOjIjswOztRKfmozsJ7/2UNSEiojgdlsb5CeC/BLsup+hpsoVOiePu+xPqU+nE2pv9uPkP/8QhdU+soc+VTU/U1x/QCbl9ngD826IuZeW6fUB9EtsxjsWmZIqV+nXWRlHOcMAWrAtixmVkCYoKpqToyk1l0dUppcAwX3I59Bs5Q/jDtID+8H8KpSiJ3G+Gbs9xMEVKah3q6E29YsrKGx6b5Lg6vj6D9R6SiCzRvotwo5RqWoWj7X5z6CXFmvyAnklVBMqZQX+hfkP3ZcQKAD+UUqvQBuY9+g2nda6uUn2OicganiBCKaVK24XqUva5nLNRRKRm+8GPBfo5vutYpl07eNG5YnFuzUowR5Wg8bR5kXcmevmepPUVkRuJW4ooVLfU9bqXmqWKhiB6+aMbEdl1rPezRKxjGahD1+f4rsOxrmMf17GOwfdFi8e+SILXQWR9G+s9JHPMo9dR9DJodZ5jngs5vMZiLaVmOTbPfq5bnrMxzlWecB/ecxdRl8a6xW6f+likw+ePp+xFy+PvKyvvm12El2UF3aQ6Q3OzcHl5H6C6nFBufu5F5Cf01UTXlq2v0K0af0I3O4c+IAtUF/nOcNwiYut1IyIb6CuHQVsSROQGepkot95P0E3khb2Sk0PrTY7qczCHXsfym6nzpkNV7BVmU/M9oLtnttBdHqvI/VzDnGcR+Rn5vNs6/oHqagnl7f5FeOF3QK9HOoc+3hzV180MwKOIfOzZ6nplyv8D+tizwHZ76Hr/D81rliYnemmcrq0+QyoQuRyY2fZKRB7Rfj3F1xxDEft5EpECuhXnFM8dDUgptRKRDwh3Q6bg76EYKbLrI4/4uZmojm2NesUr4ZaE4AtNROairxB9niXiyrFmH5n4ryiDWakb6iXSs2WoZr++q+xHadmqJ/p1WX68dd+zbvPAeRSpeY5blv2Y6tyWyhLRr6OsQzkzT1mvZfapo2dfvqveJK//nvUKHX9IsvMiuiUopHMronled0MfizR/P6RswQqdq7aBZJt9PPt24NnuHFqwvMciCVqwTPmzluegq4Vvv0qkto91cuX+5DrSvq95Ksn6+NsKPL+NfecSzhKd5BjEv3B4Y9miP8gf4W9hqIwh6MPsq3zV+7Vu3EdNWTfQ4wHKnkyZnVpfap6nXuei9Lrp9Zx7nuteYzdEf9H6vtCjWzca9lMe6/TXWOPYfKT70ji+1mpAj7W8Le1jgfD6hnngdu95Fx1Ef4OztBqAB99zX/M6dnlfN+axf+PwPv1l6lQ5ZgmP9QE8r/OG81EntA87KN+n0hIv4aAvQ6CVtccYrMr5bYgPfNt3+f7NEG4xrozBEn1hWhfQF9Dn8uj5l7iW0hh76M+G6nts4Kiut5ijlPaR+lRGD/7E33qSt3xs6Iqv1eMbyvY9V63Oj9S0gEmiFgbxtw71GusTKFOk/5X5zlNm59Yx8V99Zz3KWzrlPHYtp6F+VrJuACm9/lOV26M+qceSVN5v0m2MX+V90VBX72tT6sdJed8jEm7V9o7Na6hXqvPRVe7ZfzRPGaO1YHWpb4M7zz7WLR5XCdZluOcyeGHARKMUZGZEFJ67ulzRJWNaEW49d82Q4ApFdDDha7nqNc7LPN7XwjKve5O24JvG3Oc8/J24vNz5+6FHOQD0mJqau+8lXTeM+3xvEpXZx6Tvu4DK1HTz/qkL8G8Cz1Hd81pJB2C+fBeB7WfQLd0x+6DLkY24r2CqCgZY1MT3gTTq7D0f001XeO5K8SX0iNJg9i7dgj4mOPjhuWvRIzDwPUeZdG9x89Wj07p3cpyyoUjZhVtj2ePYT5I5j/nE1fApPLe1GYjve5/+67nN2rQsw5WV31OmG2f01Bp0sWo/02JmEW6cv/fQb4YtdD9+YT4AFtCzxB6UUhvR3TVz8/MnqjOqphowWn6TbaFnBW2d2WDX0G/gf2FyuphjtMfzAYf62+O8RL4PvVM51idUZ4b07ca785Thay3rTCl1JyJfUL3KWorIJnY8lnltblGt9xdEfplIeJZaJiLzDq14ufP3EMGV77hTzSw8JUOMHUnht+e2Ty0el3tui31tZS22+eK+pyQ+SStRndrPtNYBVmiQq+j+3Qw6krszt83k0D/7OoW99Li6wYZD2/qOR/QYmRw6geATzMlzjvHodudxOU57cH0fxdQVqOEL/joH7XIYlOsKJkzs6Qeqg3pn0IPBuwR0D6gGGnmHcnzdg1Z0wIbjL9ve3YMev6DrtCjdngFYi0hU6gCXuUi0/xYd65dKpxbEibR5D451cX0N4FqmH0JHl6n2My2qi1D04OI70VOFd6JftWvzs3Oa5Zel21/EJC2UgabTd2HqszR1EwDP0HV+FjNY1vxeO7eLHBJd3k1W+fH4PghPpYm9SFxeOc8VkGYpiIqaLs6FdBuo7+3KlfjB6bn57QtKFpFlueVVxuqkYmawbTx3zVE/FijG/xKVE42tLkQnadv0mdYmwNrg8OGVQX8JXcP/hp+Vfru35+axtt98a8otWtQhlQKH5Isw9VnAf6UfOhaY7W9wmHq+x/F5uiS+LrfN2JWI0Km1wgQ15W6Y/cBjhnxXPzN0CGRMK5vvzd66a6n0Re4bJzaLGSdWGn819NirzwgHrHcD73topzi4neita2yRbwywlFJXQ+RuUkrdmnKH6DYIeTDHk3pMzXao83QCfF1GXRbfHIIv+OvaSuIbe7TpWFZboaCj6xeq770UU5bddm9mkPrqV9eFWOYGY76xOsmYbsDP8AfY30+p5byDxdQVIKKKxotGziKkIDO2rDLge8pkiyUfPLd17dKLndXUm2leLjx3zTt2E24CZWUtH28DIvvB4TuX1xF1s+Ovhm4JBFCbBgPQ6RtOZXJGazWTDohoOv6lcUoYYJGXHDKmu1aV1cKnVenSQ/yae1buuW3TsawYoRa36GCgJmBr7NYrdQ/+MuWtUG0R8nWlhuTm9xipGQC8psEI5UhbdwxcpxTTYkhEmq81/4+E5be6kOdiz1RhulPucbhy3kMn2hzti7KJqWP5y7LTYtSScE2tDv6FP2DJ0S3A86Wu+ASgKTB2uwfd5/kJ1S6qv9EQyJpzap+fQSYKhCilfope3HVRussGWZ1nFo7JBIOLqevxxq3Q/D78gtN+nrbQi5m32a6vpv3MoCfB9bnQuW14fBFoXUqV6mTfNi8iA6y3aV6atjyHfsF+gP5ity/eAvpK4OcpfSEFMkX3aV0LtRaNccypZ9Y9oBpgXYvIrOE5zM3vchD9gOqXx7WIZA1N5LblZZTuwTKl1FfTKld+bu3MwmRrFg7oVHNfvRnmNV7UbWM+SxfD16Yb877fjLSvxv2IyDf0SNHUZTayueDLuu6zpPXnGQOst6nt1PU9dLNqjhNZYsJc1Zczrfdd5Nd7NTRUWoGSUNDTqTlbKbUVkQLVD5NrBFqdnAS6QKm1yeSCCpVXF9Dm5vemrr4DuwKwQ/X5XYjI/8qLyJ4gzh6MV6A+IJrhdBIl0wic74xUWk/MY4D1Nq1QzevzAfpL1P3wsS0AN+ZL9keqJWO6OIeuyw6KwO19vgR83YR13Xq2pSTU2vSAQ0oS6wsCAZazggMwcvegSym1F5ErVNeVBPTMwmLK13OdE14a55QVSqm/mjYSvXA0g6w3wBlLnGrspTdxeggDrLfpIfQiccZ9fMNxq0UGvZTLFwCfB+oyzAI5iz5AfyDa+uyhU0UM2nUpInnMm6kLs8yN766iR7HebsKa7W1LSShQXaEaYM1rls5x9zVp8Gta9G5RzZoP6JmFjckCJ8LuwXhFy+1Sf2YwWGvJfL9kI+3rHtXPwb6iPs84i5COKKVsDqSP8LdQ5NDZ+YeYjZVBf5GXf65x/KacQXcLnsy4sAF0zhwemk3oSxJa1z3olFfAP1Ys1IVl0zM8ncJzZFqpvIlToQe9Z6NWqJ1zWhrnYpnVPmoh3WoBgxC91FsbeYJ9NZ2rF/QMsMSsvOJ48X22DSQqByQDLPIygdYtaqa8D7DbAvqL0P3ZBLb1tUikdm5T+l2+Ky3flP+m7kHL98ES+lCzt0/WPVhmxlutPHfNoBeGPpnnWrg0Tlcn8xzSqGbwB7mpkxtvY3NAMsCiWjUZveeSPjt2oZS6K/1cwf/FmCe8agm1sgze9F/TetK328r34eI7Xzboamr69t2flZ8DOU7PsGkoc2y38J/XOcYJ2Nvi4PZu5qLXlr1zfvKpK0WjyDwXSZvE+4hedYYBFrURWlqoPC5nEGaGoO+L8T5Ry0MomPFlik8tC9xe9CnUtEaVA8ejtQTNucvNv7WtTaarb+W5q9wqZv+PvtobWsNyOteix2ycgsXUFThjCxwPL8inrAyNKnf/Me/3lOMrV7EPYIBFjWrG4GQ1LTCp+YK8DGmCvNCbME9QdhNfgLhPNPC6qZuwbfeg1WbpHFvmmGuMtmZey6FkiDcDtMpGES6NQ9TVJ89tm0RldxpPGjuL0E1YtofOQm3/z3G4MvwFPWZjD/0l+Mn8niF9YsU+Ns7fW+huFVvnvXP7V+gWhRn0sczN35MP4B3RBv4usww9W1vaMPmYVqhe3d+IyEOfgMRM59+ienwzCc+US8V3TlPNvPuF6vnKnb/bdg8C0K1iUs2JNYPJsWWCbXvfyabOMDMLv8LfLbiUaWcWcmkcom5yz22/kWYmYafxpFEBlvnQCV39bZztyrPPVlG1GokZ39O0TfmL4mS/OAb239QVgG7F8l3hL6FnPfbxAH+w8wXDXhT4rrqSDA43AdEex+crM4OoC3QbjP6EcI4tW15oqYohdE3IuhK9nI7vw3ctIh/H7uIULo1D1MdcqitWbBKU23ppnDJ2EdLZMG8c33T7ufjzZ8VYBW5f9Cw3qDQGyioSJ071lfUF8d2Dlq/rz3YTNuXTGkLniQhmlqyvrlPNLGTuK6J+cvefROOwOn+eMcCivkbtJjWto743zHfTMtO13NAg7tmA43J8X6i+ALIP77gpOLmqYgozrdi+83+DQ7BzkuOvAkITKKaYWXiO3YO+FsSixeN823DsGfU1xDisqNxXrsYAq2WCMilPh/UkA/PCSDPRjO8tj+Uox5O0T9TmTcl9If703JZqMHas0KzGpfRrdfgBf8D4vWe5IeXX/jb10i2B1qkM/XJV+QIoeyxTvSY6MYH1VwRmFo5VD9Hj186xBct3UdMm/9CmZVmW7/3nK6Ms9Pqny9T19RhS9Pk8S9mCdW+CqrUJUAbPITSgeelYTmX69pRyz22TjEczy9esPHfN0eO5MmNufC1IGRJfCIhuFctKN/dZsLpOqBsstnvQWkXuKynp0VLpYz5AP6css4NzDK4Az+e8uUio+1IKdfXXpUXxtUw0tfY+lb8c5XgiBl2e3HNbnwu+Xq3xKQOsOfTB2Z9zbu61Y2PszzkHiz5Rz00gGAh9SPYRc55v4W91WEiPLj3TBbnx3JVsCr/5kC8HgrcDtvyEWqk6BUOm1Sf02DGytx8N2k9RoAnahwpw2zjX5KJHudUcV/C/jwoAV+UJBKaFuC7IXJRvMM9ZKK/ZCv7ns1IOXRYp9aaZ11rRsbhVn7pwsee3aY6WX67mg8/XKnQ7wCyr1oGfSa3wFXql9LK+i/h+hl4KqBzw9V4c2JzP8uruK8/M25Se4B9P1CcY+gXPF2LiAfptZKkKMjMLP2HkL2HTInfOF3HfUPo8MUH4lXNsM+gu8E2gjKap9DMRuSm/T8zr7cl8qebQrRXeJLfmvRe7xmOovk3+xnk/p111uej+A2kXZc5Rfd42iH9f90+W3HZs0VQij6X1WKmJDLF+X9M5efHUwxeU+B6biciz5/G9u0xF5CZwjrLIcpaBcl5iyyqVOwscu0jHlqxAmaMMpBaRx/L5SVBm+bXV6nWVYL/lBXizxOX7nve7lPso7e8+8DobWuXzSFosbhzQ+QtSROYt9/EiPbqHJfxZETwfPfbV5bso95QTrUddYvdf2b7H+VoH9nEXsa3le10vWp4D16LvcXEW4QUT/aHnaxW6rnvxiA6s7gA84/gqbA/gq5ne3qdedVeSwXoFhNaX6zXV3l6Bw9/StxQdsGRtyxPdjbLD8fn8apYBGkO5tSpFS1O5jMG7BwOvndRjJK8wQvJcx7mOv3Ldd/lCEh0wtQ1sZug4kUX0hcwi9nF0lnLPbZsO5fT+jGSAdUFMYJSLyLX5QKn74lmKvlJfymFh1EcReYYOBL6j1I0F4GPXWW6mXrkJ+p4R7tr5bq5QFmb70HYAjgKhjefuOXTSyE5XvUqpvVLqM/zjva4B7Mz5Ky8XA+D1+bgx59TtFtygx7nsaIhgqDx9eZDuQdEtHLnoltMdqhcN1yKyM6/hXHpeWTesWZiUCbyzofczkqVEtPSZgGyNuDGhc+j3Xd5yHzPRLauLiH3QmSu/PjqMw+q0NI6vIict8ljedBehtEyN0dKL6IBrIT1TFEjP5yViPzeiv2h9HqXHF6/oD+o78Xe5uudsLeGuxXWfOvQlh27C3t2DTpn2fD+nKrNUftfXzl2CfV+nLC+wj2XH40thJ6X3tqTprtyJfq9ULmxEX3QsJPweibGWwOeT6NfNUurfr2XJXsPSrUvqplTGrEMZIqWLUjl+Hafcf7KWVwl/bt+XtpvVbBt8nHlszGsuybEpkdcvsC1OcG29NsvZWKLf0KeYUsEO8tzEHE8s8c/2a2uPQ1fbNkn0boh+wy+6PtL3vJwAAAZiSURBVF4pdRe5v2voc26ndufm94/YsmrK/9uUm9Vsas/pL+groqLvvvswr48vAH6nOA+mzBvoc/EwRItcj9fOpmZAdcz+F9DnLPnxiQ4MfC1yY3Lf9zMMMzDbfrfkA5Tt2kC/H7MeZRRI0z2cd3yc+z1svzdiuc9pbF1i97+JKDskQ/1z5tapadsUj9srpf6v5ba13ADrKsUHElWJbrnKMXCARdMQf6tU0iCVLo8J3sbOFk9E9VapxsYyTQNRT7wwoY7OcWkcokvXeWmcMg5yJyIamZzv0jhEl6zX0jhlDLCIiMbH4Iro9CRrvQIYYBERTeFcl8YhumRJU80wwCIiGpGc/9I4RJdok3qmNwMsIqJxsfWK6PQ8pC6QARYR0bg4/oro9CRfiYIBFhHRSOSylsYhuhSrIfIWMsAiIhoPc18RnZ5BFqp3M7mfJKWUarutyag96Hp/PTGTO9EbJnodyCmXxiGiY8mWxiljCxYR0XgYXBGdltVQBTPAIiIaz8+pK0BEr/ZInFzUxbUIiYhGopS6FZF/wIHuRJMbeh1ZBlhERCMyyQyLiatBRANjFyERERFRYilasLbQ/ZgzHJZ/2JvbYW47l4GdoXr7jrFr+URERHTh3uMQODT54fxdACjK/ZcikgHIlVIrz+0ZgNy5+QumG4dQ4Dgt/gb6eAp3IxFZwLM+kUkHkeFQ/z8BLFrs99/YihIREdH5USKyxnHg49+wlI/KBE3uoqV7pdRPc1/ulLkHsPUEY532WyciD1YlH5V5rNtq9aSU2pr7bnDcmrV1g66I/f5QSt212I6IiIjOWFQXoVkF/h6BwEhEbCD1vbyNyWe6hQ5ubuOrmp6I2GPxdft9AnBlgqd7z2MB3fIVcyzsIiQiInoD3kMHPXnNNm7X4Kxh2yZzHIKMBwC/oQOZPmXG2Jh9Fk59+oypyqHPSYHDefpes/225j4iIiK6EO8B/Fe3wVBdWnaclojcYbwA6/cQx2O6C+8AQETqAiy2YBEREb0B76BbdWgEdkwXERERXbZ3YKvKWBhcERERvRHv2KoymmLqChAREdE4bCb3zZSVeCN+T10BIiIiGocNsNiKNTyeYyIiojfCBlhsXRnY0Kt2ExER0elgF+E4nqauABEREY3nHQAopfZgEDAkthASERG9Ie+cv39NVovLx+CViIjoDXEDLAYBw9i4C0MTERHR5XsNsNhNOJiHqStARERE43pX+v+fSWpxuRi0EhERvUHv3X+UUhsRKQBkge0LAD/M33vo7q8tAIjIHIds5bfO7TPoxZzn5r5Tygf1gMMA9C308eyB1+Oxt/9lu/nM7TmAmbm/qCn/H1seERERvWEishDHCPu7kxqRZeV1ZYnI3UCH4dbBejHBJREREb0x5S5CKKVW4Lp5KbD1ioiI6I16H7j9K4A1oFuYWpa1cmfLicgC4a5G16eW5afwqeXxFCbQBACISAZgEbGfPYCfMRUjIiKiN0BEHhu628ry0uPXkY/3iqxzUxdhW+ue5S76PwNERER0rlToDtHjh3Y4DOaehFIqWMcy0UHeumm7gW2UUlcT14GIiIgmVBmDZZnxQ19HrMsl2AP4PHUliIiIaFrBAAsAlFJP4FiiGJ85sJ2IiIhqAywAUErdAtgMX5Wzd6uU2kxdCSIiIppeY4BlfMZpJQg9NSulFFv6iIiICEDLAMt0e12BQZbPSinFsWpERET0qm0LFoMsPwZXREREVNE6wAKOgqzVILU5L18ZXBEREZFPVIAF6CDLBBY/Gje+THsAV26mdyIiIiJXdIBlKaXuoFuzilSVOQMbAB85W5CIiIjqdA6wAMAEGh9x+bmy9tBpGK7c9RaJiIiIBmXW63tOtBbgqw51SO1R9GLPRERERNMQkYWI7FJFN5H7ThlgraW0gDURERHRpCRRoBW5zxQB1rOILAY6LURERET9Sc9AK3JffQKstbDFioiIiM6JCX6WJxZgvYjIvXCMFREREZ0zEZmJyI20HBAfWXbbAOtR2A1IREREl0hEshbB1k50y9fC19IkInNTxqNpkaoNqkRkNsGhEhER0Ruipq6AZYKnawCfzO+QAjrh5wxAbn777AE8AfgN4Mks80NEREQ0uJMJsMpExAZbOYB5y4dtcAiouCg1ERERTeJkAyyX6dbLUQ24NtAB1YbL1xAREdGp+H+7iE4GmulbYgAAAABJRU5ErkJggg==");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 24"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15.642 6.253c-.083-.309-.25-.637-.373-.925C13.789 1.774 10.559.5 7.949.5 4.456.5.609 2.842.095 7.67v.986c0 .041.014.411.035.596.288 2.301 2.103 4.746 3.459 7.047 1.459 2.465 2.972 4.89 4.472 7.314.925-1.582 1.846-3.184 2.75-4.725.246-.452.532-.904.778-1.336.165-.287.479-.575.622-.842 1.459-2.67 3.807-5.362 3.807-8.013V7.61c0-.288-.356-1.294-.376-1.356zm-7.63 4.951c-1.026 0-2.15-.513-2.704-1.931-.083-.226-.076-.678-.076-.72v-.637c0-1.807 1.534-2.629 2.87-2.629 1.643 0 2.914 1.315 2.914 2.959 0 1.643-1.36 2.958-3.003 2.958z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 17"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.998 11.213c-.559-.551-1.256-.551-1.811 0-.424.42-.847.84-1.263 1.267-.114.117-.21.142-.349.064-.274-.15-.565-.27-.829-.434-1.227-.772-2.255-1.765-3.166-2.882-.452-.555-.854-1.149-1.135-1.818-.057-.135-.046-.224.064-.334.424-.41.836-.829 1.252-1.249.58-.583.58-1.266-.003-1.853-.331-.335-.662-.662-.993-.996-.341-.342-.68-.687-1.024-1.025-.559-.544-1.256-.544-1.811.004-.427.42-.836.85-1.27 1.263-.402.38-.605.846-.648 1.39-.067.886.15 1.723.456 2.537.626 1.686 1.58 3.184 2.736 4.557a16.93 16.93 0 005.606 4.387c.982.476 2 .843 3.106.903.761.043 1.423-.15 1.953-.743.363-.406.772-.776 1.156-1.164.57-.576.573-1.273.008-1.842-.676-.68-1.356-1.356-2.035-2.032zm-.463-3.486l1.374-.205c-.216-1.105-.811-2.106-1.716-2.902-.957-.838-2.167-1.366-3.5-1.53L8.5 4.3c1.031.128 1.97.535 2.71 1.184.7.613 1.158 1.389 1.325 2.243z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.262 2.853C12.739 1.29 10.812.304 8.686 0L8.5 1.36a8.356 8.356 0 014.818 2.465A8.722 8.722 0 0115.681 8.5L17 8.269a10.14 10.14 0 00-2.738-5.416z"
  })));
});

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 9.055C18 4.055 13.97 0 9 0S0 4.054 0 9.055C0 13.574 3.29 17.32 7.594 18v-6.327H5.308V9.055h2.286V7.059c0-2.269 1.344-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.415v1.699h2.496l-.399 2.618h-2.097V18C14.71 17.321 18 13.575 18 9.055z"
  }));
});

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.96 0H4.94A4.946 4.946 0 000 4.94v8.02a4.945 4.945 0 004.94 4.94h8.02a4.946 4.946 0 004.94-4.94V4.94A4.946 4.946 0 0012.96 0zm3.353 12.96a3.356 3.356 0 01-3.352 3.352H4.94a3.355 3.355 0 01-3.352-3.351V4.94A3.355 3.355 0 014.94 1.588h8.02a3.356 3.356 0 013.352 3.352v8.02z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8.95 4.338a4.618 4.618 0 00-4.612 4.613 4.618 4.618 0 004.612 4.612 4.618 4.618 0 004.613-4.612A4.618 4.618 0 008.95 4.338zm0 7.637A3.028 3.028 0 015.926 8.95 3.028 3.028 0 018.95 5.926a3.028 3.028 0 013.025 3.024 3.028 3.028 0 01-3.025 3.025zm4.806-8.984a1.17 1.17 0 00-1.164 1.165c0 .306.125.607.342.824.216.216.516.34.822.34.307 0 .607-.124.824-.34a1.17 1.17 0 000-1.648 1.17 1.17 0 00-.824-.34z"
  }));
});

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.886 9.16a3.107 3.107 0 00-.627-1.104 2.46 2.46 0 00-.942-.647 3.276 3.276 0 00-1.19-.209c-.342 0-.64.041-.894.124a2.35 2.35 0 00-.656.323c-.184.133-.34.276-.466.428a6.378 6.378 0 00-.324.419V7.39H7.2c.013.216.019.634.019 1.256v2.36L7.2 15.21h2.587v-4.376c0-.114.007-.225.02-.333.012-.108.038-.206.076-.295a2.09 2.09 0 01.466-.647c.209-.203.498-.304.865-.304.47 0 .806.162 1.009.485.203.323.304.751.304 1.284v4.186h2.588v-4.49c0-.596-.076-1.116-.229-1.56zM5.23 5.902a1.23 1.23 0 00.381-.951c0-.38-.13-.7-.39-.961-.26-.26-.612-.39-1.056-.39-.444 0-.8.13-1.065.39-.267.26-.4.58-.4.96 0 .369.127.686.38.952.254.266.603.4 1.047.4h.019c.457 0 .818-.134 1.084-.4zM5.288 7.2H2.7v7.82h2.588V7.2zM17.713.124a.41.41 0 01.133.314V17.56a.41.41 0 01-.133.314.458.458 0 01-.323.124H.457a.458.458 0 01-.324-.124A.41.41 0 010 17.56V.438A.41.41 0 01.133.124.458.458 0 01.457 0H17.39c.126 0 .234.041.323.124z"
  }));
});

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.503 14.994c-2.772-.444-4.035-3.175-4.17-3.485l-.016-.034c-.139-.275-.173-.498-.1-.663.145-.335.761-.525 1.156-.647.111-.035.216-.067.298-.1.8-.306 1.2-.699 1.191-1.166-.007-.371-.306-.712-.749-.865a1.386 1.386 0 00-.51-.096c-.123 0-.304.017-.478.096-.338.154-.638.237-.866.246a.85.85 0 01-.233-.038l.023-.36.004-.062c.094-1.456.211-3.269-.287-4.355C15.294.25 12.17 0 11.246 0l-.43.004c-.922 0-4.04.25-5.512 3.463-.499 1.089-.38 2.9-.286 4.356.01.144.018.283.026.42a.877.877 0 01-.277.039c-.265 0-.582-.084-.943-.248-.52-.238-1.473.08-1.602.739-.07.356.078.87 1.177 1.293.085.033.193.066.325.107.368.114.985.304 1.13.639.073.165.038.388-.114.69-.054.124-1.36 3.019-4.243 3.481a.58.58 0 00-.496.6.722.722 0 00.06.247c.242.552 1.165.936 2.902 1.204.039.096.083.293.108.408.037.163.075.331.128.506.053.177.21.473.664.473.153 0 .331-.034.524-.07a5.724 5.724 0 011.13-.126c.26 0 .533.023.808.067.52.084.975.398 1.504.762.778.536 1.486.946 2.901.946.038 0 .075-.001.111-.004.053.003.105.004.159.004 1.24 0 2.33-.319 3.244-.947.504-.348.98-.676 1.5-.76.277-.045.55-.068.81-.068.452 0 .813.057 1.134.118.218.042.388.062.545.062.317 0 .55-.17.639-.466a7.28 7.28 0 00.127-.502c.02-.09.068-.302.108-.405 1.712-.265 2.587-.633 2.829-1.184a.712.712 0 00.063-.252.581.581 0 00-.496-.602z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 15"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 1.73a7.374 7.374 0 01-2.12.581A3.708 3.708 0 0017.503.27a7.444 7.444 0 01-2.347.896 3.693 3.693 0 00-6.292 3.367A10.483 10.483 0 011.254.675a3.664 3.664 0 00-.5 1.856 3.69 3.69 0 001.643 3.073A3.693 3.693 0 01.724 5.14v.046a3.696 3.696 0 002.962 3.621 3.74 3.74 0 01-.973.13c-.238 0-.47-.024-.695-.07a3.694 3.694 0 003.448 2.565A7.408 7.408 0 01.881 13.01c-.298 0-.592-.018-.881-.05a10.438 10.438 0 005.66 1.661c6.793 0 10.505-5.626 10.505-10.505l-.012-.478A7.374 7.374 0 0018 1.73z"
  }));
});

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 15"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19.945 2.112c-.538-.956-1.12-1.131-2.307-1.198C16.452.834 13.47.8 10.888.8c-2.587 0-5.57.033-6.754.113-1.184.068-1.768.242-2.31 1.199-.553.954-.838 2.597-.838 5.49v.01c0 2.881.285 4.537.838 5.481.542.956 1.125 1.129 2.309 1.21 1.186.069 4.168.11 6.756.11 2.582 0 5.563-.041 6.75-.11 1.187-.08 1.77-.253 2.307-1.208.558-.945.84-2.6.84-5.481v-.01c0-2.895-.282-4.538-.841-5.492zM8.41 11.319V3.894l6.19 3.712-6.19 3.714z"
  }));
});

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/*
  css mixins
*/
var hamburgerBarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["height:3px;position:absolute;width:25px;background-color:", ";"], function (_ref) {
  var color = _ref.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors[color];
});
var hamburgerBarPseudoElementCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["content:\"\";display:block;"]);
var hamburgerTransitionCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["transition-property:transform;transition-timing-function:ease;"]);

/*
  inner components
*/
var HamburgerTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Hamburger__HamburgerTag",
  componentId: "sc-1jbmnew-0"
})(["background:transparent;border:none;cursor:", ";", " ", " padding:", ";"], function (props) {
  return props.as === "button" ? "pointer" : "inherit";
}, function (props) {
  return props.as === "div" && "display: inline-block;";
}, function (props) {
  return props.as === "button" && "height: 24px;";
}, function (props) {
  return props.as === "button" ? "0 25px 3px 0" : "0 25px 7px 0";
});

// filter props so they don't become dom attributes (see `styled-components` issue 439)
var HamburgerBars = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref2) {
  var color = _ref2.color,
    isOpen = _ref2.isOpen,
    restProps = _objectWithoutProperties(_ref2, ["color", "isOpen"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", restProps);
}).withConfig({
  displayName: "Hamburger__HamburgerBars",
  componentId: "sc-1jbmnew-1"
})(["", " ", " transition-duration:.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);", " &&:before{", " ", " ", " transition-duration:.15s;transition:top .1s .25s ease-in,opacity .1s ease-in;opacity:", ";top:", ";", "}&&:after{", " ", " ", " transition-duration:.15s;transition:bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19);bottom:", ";", "}"], hamburgerBarCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);-webkit-transition-delay:0.12s;-o-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);-o-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);"]);
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && "0";
}, function (props) {
  return props.isOpen ? "0" : "-7px";
}, function (props) {
  return props.isOpen && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["-webkit-transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;-o-transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;"]);
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen ? "0" : "-7px";
}, function (props) {
  return props.isOpen && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);transition:bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);"]);
});

/*
  outer Hamburger component
*/
var Hamburger = /*#__PURE__*/function (_Component) {
  _inherits(Hamburger, _Component);
  var _super = _createSuper(Hamburger);
  function Hamburger() {
    var _this;
    _classCallCheck(this, Hamburger);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState(function (_ref3) {
        var isOpen = _ref3.isOpen;
        return {
          isOpen: !isOpen
        };
      }, function () {
        if (_this.state.isOpen) {
          _this.props.onOpen();
        } else {
          _this.props.onClose();
        }
      });
    });
    return _this;
  }
  _createClass(Hamburger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen && this.props.isOpen !== this.state.isOpen) {
        this.setState(function (_ref4) {
          var isOpen = _ref4.isOpen;
          return {
            isOpen: !isOpen
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        tag = _this$props.tag,
        color = _this$props.color,
        ariaLabel = _this$props.ariaLabel,
        onOpen = _this$props.onOpen,
        onClose = _this$props.onClose,
        restProps = _objectWithoutProperties(_this$props, ["tag", "color", "ariaLabel", "onOpen", "onClose"]);
      var isOpen = this.state.isOpen;
      var isButton = tag === "button";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HamburgerTag, _extends({}, restProps, {
        as: tag,
        type: isButton ? "button" : null,
        "aria-expanded": isButton ? isOpen : null,
        "aria-label": isButton ? ariaLabel : null,
        onClick: isButton ? this.handleClick : null
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HamburgerBars, {
        color: color,
        isOpen: isOpen
      }));
    }
  }]);
  return Hamburger;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
Hamburger.propTypes = process.env.NODE_ENV !== "production" ? {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["button", "div"]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["red", "white"]),
  ariaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
} : {};
Hamburger.defaultProps = {
  tag: "button",
  color: "red",
  ariaLabel: "Toggle navigation",
  isOpen: false,
  onOpen: null,
  onClose: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_inline_loader_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/*
  inner components
*/
var spin = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)([" 100%{transform:rotate(360deg);}"]);
var LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Loader__LoaderWrapper",
  componentId: "sc-1t53ar0-0"
})(["svg{#rays{transform-origin:center;transform-box:fill-box;animation:", " 7s linear infinite;}}"], spin);

/*
  outer Loader component
*/
var Loader = function Loader(_ref) {
  var height = _ref.height,
    restProps = _objectWithoutProperties(_ref, ["height"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LoaderWrapper, restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_assets_svg_inline_loader_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: Math.floor(height * 0.77),
    height: height
  }));
};
Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
} : {};
Loader.defaultProps = {
  height: 250
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    viewBox: "0 0 140 180",
    role: "img",
    "aria-labelledby": "title"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["rays"] || "rays",
    id: "rays",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    d: "M102 64.6s-5.1-1.9-7.9-2.1c-3.1-.3-6.9-.5-6.9-.5-2.3-.3-3.7-.7-4.5-.9 0-.4.1-.8.1-1.2 0-.5 0-1-.1-1.5.8-.3 2.2-.6 4.5-.9 0 0 3.8-.2 6.9-.4 2.8-.2 7.9-2.1 7.9-2.1 1.4-.4 2.2-.6 6.4-1.7 0 0 .5 0 0-.2-.2-.1-1.1-.3-1.1-.3s-1.5-.3-4.5-.4H101c-.7 0-3.1 0-4.9.3-1.8.3-6.8.1-6.8.1s-5.6-.6-7.6 1.4l-.1.1c-.2-.4-.4-.7-.6-1.1.4-.3 3.3-2.3 6.3-6.1 0 0 1.8-1.7 4-2.7 2.6-1.1 5.5-4.8 5.5-4.8s1.5-2.3 4.5-3.9c0 0 .4-.2-.1-.2-.2 0-.8.2-.8.2s-2 .9-4.7 2.3c0 0-.9.4-1.5.7-.6.3-2.8 1.4-4.2 2.6-1.2 1.1-4.7 3.6-4.7 3.6s-6.1 3.7-6.7 5.3c-.4-.4-.8-.7-1.3-1 .6-.9 1.3-2.4 1.8-4.6 0 0 .7-2.4 2.5-4.6 1.8-2.2 2.3-6.8 2.3-6.8s.2-2.4 2.1-5.2c0 0 .3-.4-.2-.1-.2.1-.6.6-.6.6s-1.5 1.3-3.3 3.8c0 0-.6.7-1 1.3-.4.5-1.8 2.6-2.5 4.2S75 42.7 75 42.7s-1.7 2.2-2.1 4.4c-.5-.1-.9-.2-1.4-.3.9-2.1.2-5 .2-5s-.9-4.3-.6-5.9c.3-1.8 0-4.2-.1-4.9 0-.7-.2-1.6-.2-1.6-.3-3-.9-5-.9-5s-.2-.6-.3-.8c-.2-.5-.2 0-.2 0 .3 3.4-.6 5.7-.6 5.7s-1.8 4.3-1.3 7.1c.4 2.8-.1 4.8-.1 4.8-.4 2.6-.2 4.5 0 5.6-.5.1-1 .2-1.5.4-.5-2.4-3-4.6-3-4.6s-2.5-3-3.2-5c-.6-1.7-2.2-3.7-2.5-4.2-.4-.5-1-1.3-1-1.3-1.7-2.1-3.2-3.5-3.2-3.5l-.6-.6c-.5-.3-.2.1-.2.1 2 2.8 2.3 5.2 2.3 5.2s.9 4.6 2.7 6.8c1.8 2.2 2.4 4.5 2.4 4.5.8 2.5 1.9 4.1 2.6 4.9-.4.3-.8.7-1.2 1-1-2.1-6.3-3.9-6.3-3.9s-3.2-1.5-4.9-3.2c-1.3-1.3-3.6-2.3-4.2-2.6-.6-.3-1.5-.7-1.5-.7-2.5-1.6-4-2.5-4-2.5s-.6-.2-.8-.2c-.5-.1-.1.2-.1.2 2 2.1 3.8 4.1 3.8 4.1s2.4 3 4.8 4.5c2.3 1.5 4 3.8 4 3.8 2.7 3.1 5.4 3.8 5.4 3.8l1.2.2-.6 1.2-.2-.1c-2-2-6.4-1.5-6.4-1.5s-4.4.3-5.9-.1c-1.8-.4-4.2-.3-4.9-.3s-1.6.1-1.6.1c-3.1 0-5 .6-5 .6s-.6.1-.8.1c-.5.2 0 .2 0 .2 3.4-.1 5.6 1 5.6 1s4.3 1.8 7.1 1.6c2.8-.2 4.8.4 4.8.4 3.9 1.4 6.3 1.6 6.3 1.6h.1c0 .4-.1.7-.1 1.1v.8h-.1s-2.5.2-6.3 1.6c0 0-2 .6-4.8.4-2.8-.2-7.1 1.6-7.1 1.6s-2.2 1.1-5.6 1c0 0-.5 0 0 .2.2.1.8.2.8.2s2 .5 5 .6c0 0 1 .1 1.6.1s3.1.2 4.9-.3c1.6-.4 5.9-.1 5.9-.1s4.4.5 6.4-1.5l.1-.1c.1.4.3.8.5 1.2l-1 .2s-2.8.6-5.4 3.8c0 0-1.7 2.3-4 3.8-2.4 1.5-4.8 4.5-4.8 4.5s-1.8 2-3.8 4.1c0 0-.4.2.1.2.2 0 .8-.2.8-.2s1.6-.8 4-2.5c0 0 .9-.4 1.5-.7.6-.3 2.9-1.3 4.2-2.6 1.7-1.7 4.9-3.2 4.9-3.2s5-1.6 6.2-3.7c.4.4.8.7 1.2 1-.7.9-1.7 2.4-2.4 4.7 0 0-.6 2.2-2.4 4.5-1.8 2.2-2.7 6.8-2.7 6.8s-.4 2.4-2.3 5.2c0 0-.3.4.2.1.2-.1.6-.6.6-.6s1.5-1.3 3.3-3.8c0 0 .6-.7 1-1.3.4-.5 1.9-2.5 2.5-4.2.7-2 3.2-5 3.2-5s2.3-2 2.9-4.3c.5.2 1 .3 1.5.4-.2 1.1-.3 3 0 5.3 0 0 .5 2 .1 4.8s1.3 7.1 1.3 7.1.9 2.3.6 5.7c0 0 0 .5.2 0 .1-.2.3-.8.3-.8s.6-1.9.9-5c0 0 .2-.9.2-1.6 0-.7.4-3.1.1-4.9-.3-1.6.6-5.9.6-5.9s.6-2.6-.1-4.7c.5-.1.9-.1 1.3-.3.5 2.2 2.1 4.2 2.1 4.2s2.6 3.4 3.4 4.9c.8 1.6 2.2 3.7 2.5 4.2.4.5 1 1.3 1 1.3 1.7 2.5 3.3 3.8 3.3 3.8l.6.6c.5.3.2-.1.2-.1-2-2.8-2.1-5.2-2.1-5.2s-.5-4.6-2.3-6.8c-1.8-2.2-2.5-4.6-2.5-4.6-.5-2-1.1-3.4-1.7-4.3.4-.3.9-.7 1.2-1 1 1.7 6.6 5.1 6.6 5.1s3.5 2.5 4.7 3.6c1.3 1.2 3.6 2.3 4.2 2.6.6.3 1.5.7 1.5.7 2.7 1.4 4.7 2.3 4.7 2.3s.6.2.8.2c.5.1.1-.2.1-.2-3-1.6-4.5-3.9-4.5-3.9s-2.9-3.7-5.5-4.8c-2.3-1-4-2.7-4-2.7-2.7-3.5-5.4-5.5-6.1-6 .2-.3.4-.7.5-1h0c2 2 7.6 1.4 7.6 1.4s5-.2 6.8.1c1.8.3 4.2.3 4.9.3h1.8c3.1 0 4.5-.4 4.5-.4s.9-.2 1.1-.3c.5-.2 0-.2 0-.2-4.1-1.2-4.8-1.3-6.3-1.7z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    className: styles["st5"] || "st5",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    cx: "69.9",
    cy: "59.9",
    r: "13",
    id: "sun_1_"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#6C757C",
    id: "sun_eyes__x26__mouth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M67.1 55.7c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5v-.2c-.1-.2-.8-.4-1.7.2-.5.3-1 .1-.2-.6.9-.8 1.7-1.2 2.5-1.3 1.2-.1 2.9.2 3.6.5.3.1 0 1.7-.1 1.7-.3-.1-.8-.3-1.3-.2h.1M71.2 60c-.3.7-2.8 1-3.3 0-.2-.4-.4-1.3-.1-1.1.6.3 2.6.1 3 0 .3-.1.1-.6.3-.5.3 0 .3.9.1 1.6M77.2 55.9c-.6-.5-1.5-.8-1.8-.5v.1c.1.8-.5 1.5-1.3 1.5-.8.1-1.5-.5-1.5-1.3v-.1c-.5-.2-1.3.1-1.4.1-.1 0-.4-1.5 0-1.7 1.2-.5 5.2-.7 6.4 1.5.1.4 0 .7-.4.4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    stroke: "#F0F3F5",
    strokeWidth: "9",
    d: "M26 72h88",
    id: "cover"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "shield"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#F0F3F5",
    d: "M32.5 76.4l74.2.1v41.7s2.8 30-36.8 36.2c0 0-36.3-2.9-37.2-35.4l-.2-42.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M46.4 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM93.1 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1.1.2-2.9-.6-4.7-.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M105.7 77.3H76.2v26.8h29.5V77.3zm-4.4 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3zM63.3 77.3H33.8v26.8h29.5V77.3zm-4.5 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M50.8 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1 .2-2.8-.6-4.7-.6zM47.7 134.3v-12.4s-.3-.6-1.3-.5c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.5 0 3.5 0zM53 134.3c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1 0-1.3.5-1.3.5v12.4c.1 0 1.1-.7 3.5 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M38.4 135.7v-12.8h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3h-8.5v1.1h-3.5v-1.1h-7.5c1.2 1.8 2.6 3.5 4.3 5.1 4.7 4.4 12.1 7.4 19.7 9.6v-35.8H33.8l.1 1.1c.2 7.4 1.6 13.5 4.5 18.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M64.9 152.4l4.9 1.3 4.9-1.3v-38h31v-8.7h-31V77.3h-9.8v28.4H33.8v8.7h31.1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M88.7 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM76.2 116.1V152c7.4-2.2 14.8-5 19.8-9.6 1.8-1.6 3.2-3.3 4.5-5.1h-7.6v1.1h-3.5v-1.1h-8.5V123h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v12.9c2.7-4.7 4-10.5 4.4-18.5l-.1-1.2H76.2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "none",
    d: "M84.2 122v12.3s.7.5 2.5 0c2.4-.7 3.5.1 3.5.1V122s-.3-.6-1.3-.5c-1.8-.1-3.6.7-4.7.5zM92.1 121.9v12.4s1.1-.7 3.4-.1c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1-.1-1.2.5-1.2.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#6C757C",
    d: "M32 115.1c0 13.1 3.3 22.2 10.3 28.5 6.9 6.3 17.4 9.5 27.5 11.9 10.5-2.5 20.5-5.5 27.5-11.9s10.3-15.4 10.3-28.5V75.5H32v39.6zm69.3 20.7v-12.9h-1.8v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h7.6c-1.2 1.8-2.7 3.5-4.5 5.1-5 4.6-12.4 7.4-19.8 9.6V116h29.5l.1 1.2c-.4 8.2-1.7 13.9-4.5 18.6zM98 122v12.3s-.7.5-2.5 0c-2.4-.7-3.4.1-3.4.1V122s.3-.6 1.3-.5c1.8-.1 3.6.7 4.6.5zm-7.8-.1v12.4s-1.1-.7-3.5-.1c-1.8.5-2.5 0-2.5 0V122c1.1.2 2.9-.5 4.7-.6 1-.1 1.3.5 1.3.5zm-14-44.6h29.5v26.8H76.2V77.3zm-42.4 0h29.5v26.8H33.8V77.3zm0 28.4h31.1V77.3h9.8v28.4h31.1v8.7H74.7v38l-4.9 1.2-4.9-1.3v-38H33.8v-8.6zm29.5 10.4v35.8c-7.6-2.2-15-5.2-19.7-9.6-1.7-1.6-3.1-3.3-4.3-5.1h7.5v1.1h3.5v-1.1h8.5v-14.3H57v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v12.8c-2.9-5-4.3-11.1-4.6-18.5l-.1-1.1h29.6zm-21.6 18.2V122c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4s-1.1-.7-3.5-.1c-1.8.6-2.5.1-2.5.1zm7.9 0v-12.4s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3s-.7.5-2.5 0c-2.5-.7-3.5 0-3.5 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#6C757C",
    d: "M57 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3H57v-2.6zm-9.3 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3zM99.5 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3h-1.8v-2.6zm-9.5 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "clouds_of_ignorance"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["st5"] || "st5",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeMiterlimit: "10",
    d: "M41 40.3s.6-4.1 5.8-4.6c0 0 .4-8.5 10.9-4.5 0 0 0 0 0 0s2.2-9.3 12.4-3.8c0 0 8.3-5.3 13.7 4.3 0 0 6.9-2.8 7.9 3.5 0 0 7.6-2.7 9.4 3.8 0 0 5.7-.2 4.7 5.7 0 0-.5 5-9 1.9 0 0-7.7 3.9-11.1-4.8 0 0-6.4 1.9-8.4-4.6 0 0 0 0 0 0s-6.1 4.1-10.8-.5c0 0-3 4.1-8.6 3.2 0 0-2.7 3.3-7.3 2.2 0 0 1.6 7.7-9.4 6.2 0 0-4.3 2.5-6.3-1.8-2-4.6 6.1-6.2 6.1-6.2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["st6"] || "st6",
    fill: "none",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    d: "M36.7 45.7s.3-3.5 4.8-3.1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["st7"] || "st7",
    fill: "none",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M43.3 41s.5-2.8 3.7-2.7M48.9 36.9s1.3-5.6 6.6-3.7M60.2 31.4s3.9-5.2 8.2-1.5M70.7 30.8s6.4-5 10.4 2.1M84.1 34.3s4.5-2 5.3 2M92 38.2s5-2.3 6.7 2.4M100.1 41.8c.1 0 3.7-.8 3.1 3.1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "decor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["st8"] || "st8",
    fill: "#F0F3F5",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M43.4 62.8s-5.9-3.7-9.7.4c0 0-1.6 1.8-.3 4.3 1.5 2.8 4.9 2.7 6.9.9 0 0 1.8 2.8 6.5.1 0 0 5.6 2.7 11.6-.1 0 0 2 2.4 6.3.4 0 0 2.7 2.4 6.3-.2 0 0 6.5 3 11.9-.3 0 0 2.3 2.6 6.1.4 0 0 2.6 2.6 6.4-.2 0 0 3.3 2 8.4.7 0 0 3.1-.8 2.3-3.2-1-2.9-3.8-6.3-13.6-3.1 0 0-6.7-2.9-12.4.5 0 0-4.7-3.7-12.1 0 0 0-3.1-3.6-12.4-.4-.2 0-4.5-3.7-12.2-.2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: styles["st9"] || "st9",
    fill: "#FFF",
    stroke: "#6C757C",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M37.1 65.4s1.1 0 1.6.8 1.6 2.1 1.6 2.1M43.2 62.6s1.2 1.4 1.7 2.8 1.7 3.1 2.8 3.5M55.7 63.2c.4.5 1 1.4 1.3 2.3.5 1.4 1.5 3.3 2.7 3.7M67.9 63.4c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M79.5 63.1c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M92.2 63c.4.5.8 1.3 1.1 2 .4 1.1 1 2.6 1.9 3.3M61.2 65.4s.9 0 1.7 1.1 1.8 2.4 2.5 2.7M85.8 65.6s1 .2 1.6 1.2c.6 1 1.9 2.3 2.8 2.7"
  })));
});

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/*
  css prop getters
*/
var getBackgroundColor = function getBackgroundColor(_ref) {
  var sub = _ref.sub;
  if (sub) {
    return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.backgroundGray;
  }
  return "transparent";
};
var getDisplay = function getDisplay(_ref2) {
  var mobile = _ref2.mobile,
    sub = _ref2.sub;
  if (mobile || sub) {
    return "block";
  }
  return "flex";
};
var getPadding = function getPadding(_ref3) {
  var sub = _ref3.sub;
  if (sub) {
    return "15px";
  }
  return "0";
};
var getWidth = function getWidth(_ref4) {
  var mobile = _ref4.mobile,
    sub = _ref4.sub;
  if (mobile || sub) {
    return "100%";
  }
  return "auto";
};

/*
  inner Tag component
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref5) {
  var color = _ref5.color,
    navbar = _ref5.navbar,
    mobile = _ref5.mobile,
    sub = _ref5.sub,
    restProps = _objectWithoutProperties(_ref5, ["color", "navbar", "mobile", "sub"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", restProps);
}).withConfig({
  displayName: "Nav__Tag",
  componentId: "axj96a-0"
})(["list-style:none;margin:0;background-color:", ";display:", ";padding:", ";width:", ";"], function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return getDisplay(props);
}, function (props) {
  return getPadding(props);
}, function (props) {
  return getWidth(props);
});

/*
  outer Nav component
*/
var Nav = function Nav(props) {
  var navbar = props.navbar,
    mobile = props.mobile,
    sub = props.sub,
    color = props.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      navbar: navbar,
      mobile: mobile,
      sub: sub,
      color: color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, props));
};
Nav.propTypes = process.env.NODE_ENV !== "production" ? {
  navbar: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  sub: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["red", "white"]),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
Nav.defaultProps = {
  navbar: false,
  mobile: false,
  sub: false,
  color: "red"
};
Nav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_5__["default"];
Nav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





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
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavContext__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, null, function (_ref3) {
    var mobile = _ref3.mobile,
      sub = _ref3.sub;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({}, props, {
      mobile: mobile,
      sub: sub
    }));
  });
};
NavItem.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var sans = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.typography.sans;
/*
  css mixins
*/
var navLinkCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:transparent;border:none;display:block;font-family:", ";padding:0;text-decoration:none !important;"], sans);
var navLinkAfterCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["content:\"\";display:block;height:3px;"]);

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
        activeColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.sand;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white;
        break;

      // red
      default:
        activeColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.black;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.red;
        break;
    }
  } else {
    switch (color) {
      case "white":
        activeColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.sand;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white;
        break;

      // red
      default:
        activeColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.red;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.black;
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
        disabledColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.sand;
        break;

      // red
      default:
        disabledColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.red;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.black;
        break;
    }
  } else {
    switch (color) {
      case "white":
        disabledColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.white;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.sand;
        break;

      // red
      default:
        disabledColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.black;
        defaultColor = brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.red;
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
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
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
}, _media__WEBPACK_IMPORTED_MODULE_4__["default"].xl(_templateObject(), function (_ref13) {
  var navbar = _ref13.navbar,
    mobile = _ref13.mobile,
    sub = _ref13.sub;
  return !(navbar || mobile || sub) && " 1.2em";
}), function (props) {
  return !(props.mobile || props.sub) && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&::after{", " ", " background:", ";margin-top:", ";width:", ";}"], navLinkAfterCSS, props.href && "transition: width 0.3s;", function (_ref14) {
    var color = _ref14.color;
    return color === "white" ? brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.sand : brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors.red;
  }, getAfterMarginTop(props), getAfterWidth(props));
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return !(props.mobile || props.sub) && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["&::after{width:", ";}"], getAfterWidthWithHover(props));
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
    restProps = _objectWithoutProperties(props, ["tag"]);
  var derivedTag = deriveTag(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavContext__WEBPACK_IMPORTED_MODULE_5__["default"].Consumer, null, function (_ref16) {
    var navbar = _ref16.navbar,
      mobile = _ref16.mobile,
      sub = _ref16.sub,
      color = _ref16.color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, _extends({
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
NavLink.propTypes = process.env.NODE_ENV !== "production" ? {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
} : {};
NavLink.defaultProps = {
  tag: "button",
  active: false,
  disabled: false,
  onClick: null,
  href: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _NavbarNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _NavbarGlobalNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40);
/* harmony import */ var _assets_svg_inline_logo_full_color_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _assets_svg_inline_logo_two_color_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px;\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/*
  inner components
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
var NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var color = _ref.color,
    mobileBreakpoint = _ref.mobileBreakpoint,
    toggleTitle = _ref.toggleTitle,
    restProps = _objectWithoutProperties(_ref, ["color", "mobileBreakpoint", "toggleTitle"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", restProps);
}).withConfig({
  displayName: "Navbar__NavbarWrapper",
  componentId: "sc-6w2m5m-0"
})(["align-items:center;box-shadow:0 5px 10px 0 #00000026;display:flex;height:75px;justify-content:space-between;padding:0 7vw;position:relative;z-index:20;background-color:", ";", ";"], function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.colors[color];
}, _media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject()));
var NavbarLogoLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "Navbar__NavbarLogoLink",
  componentId: "sc-6w2m5m-1"
})(["text-decoration:none;"]);
var NavbarChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Navbar__NavbarChildrenWrapper",
  componentId: "sc-6w2m5m-2"
})(["text-align:right;"]);

/*
  outer Navbar component
*/
var logoProps = {
  display: "block",
  height: 65,
  width: 131
};
var Navbar = function Navbar(_ref3) {
  var color = _ref3.color,
    mobileBreakpoint = _ref3.mobileBreakpoint,
    toggleTitle = _ref3.toggleTitle,
    children = _ref3.children,
    restProps = _objectWithoutProperties(_ref3, ["color", "mobileBreakpoint", "toggleTitle", "children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavbarWrapper, _extends({}, restProps, {
    color: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavbarLogoLink, {
    href: "http://www.brown.edu/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, color === "white" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_assets_svg_inline_logo_full_color_svg__WEBPACK_IMPORTED_MODULE_5__["default"], logoProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_assets_svg_inline_logo_two_color_svg__WEBPACK_IMPORTED_MODULE_6__["default"], logoProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavbarChildrenWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: {
      color: color,
      mobileBreakpoint: mobileBreakpoint,
      toggleTitle: toggleTitle
    }
  }, children)));
};
Navbar.propTypes = process.env.NODE_ENV !== "production" ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["brown", "white"]),
  mobileBreakpoint: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  toggleTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)
} : {};
Navbar.defaultProps = {
  color: "brown",
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_3__.breakpoints.md,
  toggleTitle: "Global Navigation",
  children: null
};
Navbar.Nav = _NavbarNav__WEBPACK_IMPORTED_MODULE_8__["default"];
Navbar.GlobalNav = _NavbarGlobalNav__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarContext);

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _utils_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px;\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












/*
  inner components
*/
// filter props so they don't become dom attributes (see `styled-components` issue 439)
var MobileCollapseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var color = _ref.color,
    restProps = _objectWithoutProperties(_ref, ["color"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", restProps);
}).withConfig({
  displayName: "NavbarNav__MobileCollapseWrapper",
  componentId: "hl2s13-0"
})(["box-shadow:0 5px 10px 0 #00000026;left:0;position:absolute;top:75px;width:100%;background-color:", ";"], function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
});
var MobileNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "NavbarNav__MobileNavWrapper",
  componentId: "hl2s13-1"
})(["padding:0 7vw 1rem;", ";"], _media__WEBPACK_IMPORTED_MODULE_5__["default"].md(_templateObject()));

/*
  outer NavbarNav component
*/
var getChildColor = function getChildColor(color) {
  switch (color) {
    case "white":
      return "red";

    // brown
    default:
      return "white";
  }
};
var NavbarNav = function NavbarNav(_ref3) {
  var children = _ref3.children,
    restProps = _objectWithoutProperties(_ref3, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_fns__WEBPACK_IMPORTED_MODULE_3__.WindowSize, {
    render: function render(_ref4) {
      var width = _ref4.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (_ref5) {
        var color = _ref5.color,
          mobileBreakpoint = _ref5.mobileBreakpoint;
        var childColor = getChildColor(color);
        var renderMobile = currentWidth < mobileBreakpoint;
        if (renderMobile) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_7__["default"], null, function (_ref6) {
            var mobileNavIsOpen = _ref6.isOpen,
              toggleMobileNav = _ref6.toggleIsOpen;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_8__["default"], {
              "aria-controls": "navbar-nav-mobile-collapse",
              color: childColor,
              isOpen: mobileNavIsOpen,
              onOpen: toggleMobileNav,
              onClose: toggleMobileNav
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileCollapseWrapper, {
              color: color
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_Collapse__WEBPACK_IMPORTED_MODULE_9__["default"], {
              id: "navbar-nav-mobile-collapse",
              isOpen: mobileNavIsOpen
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileNavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
              mobile: true,
              color: childColor
            }, children)))));
          }));
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, restProps, {
          navbar: true,
          color: childColor
        }), children);
      });
    }
  });
};
NavbarNav.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
NavbarNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_10__["default"].Item;
NavbarNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_10__["default"].Link;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarNav);

/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__38__;

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var VisibilityToggle = /*#__PURE__*/function (_Component) {
  _inherits(VisibilityToggle, _Component);
  var _super = _createSuper(VisibilityToggle);
  function VisibilityToggle() {
    var _this;
    _classCallCheck(this, VisibilityToggle);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });
    _defineProperty(_assertThisInitialized(_this), "toggleIsOpen", function () {
      return _this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
    });
    return _this;
  }
  _createClass(VisibilityToggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        restProps = _objectWithoutProperties(_this$props, ["children"]);
      return children(_objectSpread(_objectSpread(_objectSpread({}, restProps), this.state), {}, {
        toggleIsOpen: this.toggleIsOpen
      }));
    }
  }]);
  return VisibilityToggle;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
VisibilityToggle.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func).isRequired
} : {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisibilityToggle);

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _utils_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px 1rem 33px;\n  "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var sansBold = brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.typography.sansBold;
/*
  inner components
*/
var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "NavbarGlobalNav__ToggleButton",
  componentId: "sc-1vdo48t-0"
})(["background-color:transparent;border:none;cursor:pointer;font-size:1em;padding:0;"]);

// filter props so they don't become dom attributes (see `styled-components` issue 439)
var ToggleTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var color = _ref.color,
    restProps = _objectWithoutProperties(_ref, ["color"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", restProps);
}).withConfig({
  displayName: "NavbarGlobalNav__ToggleTitle",
  componentId: "sc-1vdo48t-1"
})(["color:", ";font-family:", ";font-weight:bold;letter-spacing:0.5px;margin-left:10px;text-transform:uppercase;"], function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
}, sansBold);

// filter props so they don't become dom attributes (see `styled-components` issue 439)
var CollapseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref3) {
  var color = _ref3.color,
    restProps = _objectWithoutProperties(_ref3, ["color"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", restProps);
}).withConfig({
  displayName: "NavbarGlobalNav__CollapseWrapper",
  componentId: "sc-1vdo48t-2"
})(["box-shadow:0 5px 10px 0 #00000026;left:0;position:absolute;top:75px;width:100%;background-color:", ";"], function (_ref4) {
  var color = _ref4.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors[color];
});
var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "NavbarGlobalNav__NavWrapper",
  componentId: "sc-1vdo48t-3"
})(["padding:0 7vw 1rem;", ";"], _media__WEBPACK_IMPORTED_MODULE_5__["default"].md(_templateObject()));

/*
  outer NavbarGlobalNav component
*/
var getChildColor = function getChildColor(color) {
  switch (color) {
    case "white":
      return "red";

    // brown
    default:
      return "white";
  }
};
var NavbarGlobalNav = function NavbarGlobalNav(_ref5) {
  var children = _ref5.children,
    restProps = _objectWithoutProperties(_ref5, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_fns__WEBPACK_IMPORTED_MODULE_3__.WindowSize, {
    render: function render(_ref6) {
      var width = _ref6.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"].Consumer, null, function (_ref7) {
        var color = _ref7.color,
          mobileBreakpoint = _ref7.mobileBreakpoint,
          toggleTitle = _ref7.toggleTitle;
        var childColor = getChildColor(color);
        var renderMobile = currentWidth < mobileBreakpoint;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_7__["default"], null, function (_ref8) {
          var navIsOpen = _ref8.isOpen,
            toggleNav = _ref8.toggleIsOpen;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ToggleButton, {
            type: "button",
            "aria-controls": "navbar-global-nav-collapse",
            "aria-expanded": navIsOpen,
            "aria-label": "Toggle global navigation",
            onClick: toggleNav
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_8__["default"], {
            tag: "div",
            color: childColor,
            isOpen: navIsOpen
          }), !renderMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ToggleTitle, {
            color: childColor
          }, toggleTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CollapseWrapper, {
            color: color
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_Collapse__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: "navbar-global-nav-collapse",
            isOpen: navIsOpen
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
            mobile: true,
            color: childColor
          }, children)))));
        }));
      });
    }
  });
};
NavbarGlobalNav.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
NavbarGlobalNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_10__["default"].Item;
NavbarGlobalNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_10__["default"].Link;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarGlobalNav);

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    viewBox: "0 0 384 192",
    role: "img",
    "aria-labelledby": "title"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFC627",
    d: "M39.339 25.604c.209.342.479.783.864 1.418 1.005 1.663 2.561 7.928 4.57 10.004 1.071-.727 2.927-1.664 3.98-2.042-.244-.406-1.372-2.334-2.625-3.974-2.413-3.203-4.145-4.914-4.339-5.19-.651-.008-1.76.026-2.45-.216zM57.444 33.946c.479-3.279-.613-8.723-1.257-10.085-.816-.208-1.661-.496-2.355-.829-.09.417-.706 2.639-.91 5.91-.11 1.753-.064 4.42.259 5.004 1.038-.104 2.775-.139 4.263 0zM73.055 53.264c0-9.864-7.729-17.596-17.6-17.596-9.719 0-17.6 7.878-17.6 17.596 0 .465.104 1.408.258 2.36 5.063-1.174 11.775-.986 14.758 1.378 4.827-2.754 11.783-2.927 16.879.042 1.013-.506 2.066-.872 3.131-1.176.127-.949.174-1.943.174-2.604zm-21.452-6.002a2.046 2.046 0 11-4.088-.205l.019-.226c-.175-.268-1.095-.566-2.464.264-.687.422-1.457.132-.263-.902 1.267-1.101 2.47-1.739 3.531-1.872l.033-.008c1.788-.124 4.111.242 5.197.684.45.184-.019 2.397-.12 2.37-.369-.082-1.174-.421-1.849-.268l.004.163zm5.87 6.136c-.358 1.044-4.057 1.378-4.736.019-.268-.539-.64-1.929-.139-1.642.822.478 3.798.14 4.36 0 .497-.127.173-.82.479-.735.368.102.368 1.37.036 2.358zm8.702-5.787c-.93-.766-2.147-1.101-2.613-.766l.017.158a2.048 2.048 0 11-4.08.357v-.088c-.736-.232-1.908.173-2.069.11-.095-.044-.591-2.129.057-2.391 1.766-.721 7.457-1.072 9.11 2.122.192.388.072.902-.422.498zM67.245 25.409c-2.068 1.752-5.23 5.998-5.634 9.394.971.393 3.535 1.616 3.886 1.906 2.545-2.509 2.028-5.275 3.022-7.413.431-.923.847-1.65 1.088-2.065-.825-.448-1.714-1.086-2.362-1.822z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M21.983 86.106c-2.636.078-5.215 1.116-6.729.852v17.65s.955.726 3.6-.026c3.422-.973 4.946.096 4.946.096V86.871c.001 0-.398-.809-1.817-.765z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#DCDDDE",
    d: "M46.235 78.265H3.878v38.386h42.357V78.265zm-6.446 30.548h-12.13v1.523h-5.027v-1.523H10.499V88.317h2.588v-3.73c2.63.635 6.923-.814 8.839-.81 2.138.005 3.224.926 3.224.926s1.1-.926 3.216-.926c1.916 0 6.205 1.432 8.835.81v3.73h2.589v20.496z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M88.907 86.106c-1.417-.044-1.823.765-1.823.765v17.807s1.523-1.069 4.949-.096c2.645.752 3.602.026 3.602.026v-17.65c-1.514.264-4.094-.774-6.728-.852zM28.3 86.106c-1.414-.044-1.817.765-1.817.765v17.807s1.528-1.069 4.95-.096c2.644.752 3.6.026 3.6.026v-17.65c-1.514.264-4.094-.774-6.733-.852z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFC627",
    d: "M79.588 32.133c-.459.251-1.53.909-1.891 1.179-2.444 1.841-7.741 4.313-8.961 5.668.973.862 2.41 2.41 3.059 3.706.596.027 2.306-1.365 5.695-5.354 1.088-1.274 2.244-1.948 4.34-3.113a12.278 12.278 0 01-2.242-2.086z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M87.419 142.197v17.807s1.522-1.065 4.944-.087c2.646.755 3.597.026 3.597.026v-17.651c-1.516.263-4.089-.775-6.724-.858-1.423-.047-1.817.763-1.817.763zM76.189 142.292v17.651s.953.729 3.595-.026c3.424-.979 4.952.087 4.952.087v-17.807s-.403-.81-1.822-.763c-2.636.084-5.214 1.122-6.725.858zM82.588 86.106c-2.635.078-5.217 1.116-6.732.852v17.65s.957.726 3.604-.026c3.415-.973 4.943.096 4.943.096V86.871c-.001 0-.395-.809-1.815-.765z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#DCDDDE",
    d: "M107.043 78.265H64.7v38.386h42.343V78.265zm-6.324 30.548H88.592v1.523h-5.029v-1.523H71.435V88.317h2.581v-3.73c2.632.635 6.925-.814 8.84-.81 2.14.005 3.22.926 3.22.926s1.104-.926 3.22-.926c1.918 0 6.206 1.432 8.84.81v3.73h2.584v20.496z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M11.328 56.446c-3.242-.069-5.941.846-6.894 2.509-1.753 3.063.308 5.706 1.54 6.445 2.817 1.694 5.504.588 5.703-.454-.77-.868-2.098-2.83-2.842-2.847-1.083-.028-.996-1.432-.209-1.688 1.883-.623 3.713 2.951 6.418 4.883 2.41 1.725 5.788.461 5.788-.246-1.474-1.335-3.234-8.461-9.504-8.602zM49.789 57.716c-3.712-1.75-8.951-1.166-13.356.399 1.22 1.626 3.25 5.426 4.297 6.707 2.026 2.465 5.49 1.22 5.633.475-.241-.454-2.103-2.86-2.803-3.262-.654-.375-1.034-.971-.667-1.491.614-.863 2.059 0 2.844.945.782.952 2.979 3.706 3.702 4.195 2.169 1.469 6.299.704 5.951-.558-1.42-1.876-2.039-5.735-5.601-7.41z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFC627",
    d: "M41.796 39.415c-3.049-2.458-5.851-2.983-10.32-5.082-1.012-.476-2.712-1.621-2.799-1.668a12.47 12.47 0 00-.619-.393c-.262.837-.796 1.973-1.285 2.609.692.899 5.688 6.6 12.08 8.376.701-1.224 1.828-2.634 2.943-3.842zM36.915 46.86c-1.145-1.129-3.421-2.104-6.383-1.867-6.063.476-10.054.086-12.345-.237-3.922-.563-6.358-.013-8.318-.013-5.962 0 .166.537.865.809 2.807 1.107 8.467 2.509 12.918 2.185 2.175-.152 5.814 1.172 6.441 1.389 1.601.571 4.495 1.503 6.06 1.474.085-.716.455-2.845.762-3.74z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M75.816 64.874c2.241 2.271 5.3 1.297 5.441.553-.251-.453-1.664-2.536-2.497-2.988-.679-.375-1.119-.995-.752-1.514.609-.864 1.835-.252 2.618.694.783.956 2.941 3.769 3.698 4.2 1.966 1.087 6.297.696 5.947-.567-1.198-1.897-2.026-5.731-5.596-7.409-3.707-1.748-8.459-1.293-12.86.278.793 1.575 2.854 5.598 4.001 6.753z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFC627",
    d: "M105.857 43.825c-.302-.048-1.438-.199-2.167-.196-.961.005-7.278.035-9.006.3-3.534.553-10.374.268-14.124.125-2.802-.109-6.028.984-7.013 1.512 0 0 1.079 2.698 1.149 4.532 1.192.212 2.339-1.293 5.74-1.237 3.542.06 12.262-.416 16.674-2.133 3.295-1.276 6.063-1.917 8.304-2.371.751-.156 1.94-.303.443-.532z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M23.806 160.004v-17.807s-.402-.81-1.817-.763c-2.639.083-5.219 1.121-6.729.858v17.651s.952.729 3.596-.026c3.421-.979 4.95.087 4.95.087zM26.886 26.19c.283-.24.673-.21 1.027-.095 2.989.965 7.275.309 9.273-2.855.28-.442.834-.598 1.316-.402 2.065.837 6.298 1.224 11.451-4.007.388-.394 1.014-.344 1.443.004 4.526 3.633 9.245 3.86 14.027.678.297-.197.675-.453 1.003-.319.331.134.575.424.648.772 1.528 7.067 8.903 6.441 11.125 6.083a1.072 1.072 0 011.24.911c.241 1.653 2.073 4.858 5.246 6.494 2.712 1.395 5.666 1.288 8.786-.32.312-.162.685-.16 1 .006 4.002 2.139 7.605 2.265 9.881.348 1.604-1.352 2.255-3.554 1.617-5.481-.711-2.147-2.847-3.482-5.855-3.665a1.078 1.078 0 01-.998-.91c-.27-1.713-1.227-3.115-2.771-4.056-2.354-1.435-5.816-1.604-9.263-.452a1.083 1.083 0 01-.908-.106 1.081 1.081 0 01-.5-.767c-.189-1.324-.763-3.117-2.422-4.131-1.749-1.069-4.391-1.043-7.64.076a1.081 1.081 0 01-1.308-.521c-2.09-4.004-5.025-6.604-8.487-7.522-3.1-.822-6.545-.225-9.452 1.642-.379.246-.87.229-1.232-.043-2.927-2.196-6.426-2.896-9.604-1.923-3.097.945-5.455 3.362-6.645 6.804a1.08 1.08 0 01-1.422.648c-4.742-1.904-8.614-1.856-11.198.141-2.22 1.715-2.905 4.417-2.805 5.205a1.055 1.055 0 01-.793 1.179l-1.134.272c-2.628.6-5.348 1.222-6.167 5.404a1.082 1.082 0 01-.952.866c-4.569.456-7.556 2.148-8.187 4.645-.444 1.759.372 3.752 1.988 4.844 1.625 1.101 3.582.987 5.374-.314a1.077 1.077 0 011.019-.135c2.684 1.026 7.035.823 9.674-1.292 1.914-1.534 2.664-3.797 2.232-6.725a1.076 1.076 0 01.373-.981zm72.39.301c2.711-.628 5.967 1.354 5.043 4.997-.157.623-1.688.662-1.635.026.234-3.05-1.273-3.297-3.281-3.275-.759.018-.701-1.623-.127-1.748zm-11.609-5.413c2.637-1.506 8.029-1.238 9.707 3.574.287.818-.798 2.208-1.474.969-2.027-3.725-5.303-3.717-8.037-2.673-.614.241-1.167-1.317-.196-1.87zM76.333 15.53c2.446-.865 6.613-1.25 7.725 2.839.319 1.143-1.085 1.688-1.397.887-1.136-2.96-3.272-2.843-5.824-2.029-1.177.385-.892-1.562-.504-1.697zm-19.994-4.603c1.763-2.869 10.985-5.539 15.717 2.575.502.883-.169 1.397-.698 1.761-.376.268-.599-.341-.847-.74-4.016-6.353-11.281-4.677-13.232-1.73-.397.596-1.454-1.022-.94-1.866zm-14.862.46c1.62-2.566 7.178-6.516 12.104-2.168.554.481-.105 2.268-.723 1.854-4.505-3.098-8.048-.611-9.926 1.63-.902 1.064-1.84-.697-1.455-1.316zM14.882 29.34c-1.885 0-3.397.039-4.723 1.48-1.417 1.536-1.073 2.379-1.337 2.658-.388.38-1.359-.291-1.342-1.052.083-3.614 4.447-5.024 7.036-4.734.986.116 1.242 1.648.366 1.648zm7.667-6.067c-2.756.303-3.563 1.649-4.055 3.193-.2.58-1.747.165-1.503-.978.731-3.396 4.415-4.227 5.753-3.937.45.087.312 1.675-.195 1.722zm2.359-3.66c.566-2.999 3.497-7.365 10.193-5.665.822.208.338 2.293-.545 1.943-4.889-1.917-7.343 1.792-8.135 4.716-.108.399-1.745.248-1.513-.994z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#DCDDDE",
    d: "M64.7 185.281c10.674-3.089 21.248-7.217 28.406-13.765 2.534-2.315 4.638-4.735 6.399-7.373H88.591v1.524h-5.025v-1.524H71.43v-20.5h2.593v-3.731c2.626.636 6.919-.809 8.836-.809 2.138.005 3.219.932 3.219.932s1.103-.932 3.216-.932c1.921 0 6.209 1.436 8.84.809v3.731h2.592v18.54c3.897-6.743 5.688-14.996 6.318-26.594v-1.729H64.7v51.421z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#FFF",
    d: "M31.434 159.917c2.644.755 3.602.026 3.602.026v-17.651c-1.515.263-4.095-.775-6.734-.858-1.414-.047-1.817.763-1.817.763v17.807c-.002 0 1.526-1.066 4.949-.087z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: "#DCDDDE",
    d: "M3.962 135.486c.423 10.608 2.415 19.261 6.538 26.487v-18.331h2.592v-3.731c2.627.636 6.919-.809 8.836-.809 2.139.005 3.224.932 3.224.932s1.099-.932 3.216-.932c1.916 0 6.204 1.436 8.834.809v3.731h2.588v20.5H27.656v1.524h-5.022v-1.524H11.826a40.678 40.678 0 006.175 7.295c6.746 6.323 17.331 10.614 28.229 13.807v-51.386H3.878l.084 1.628z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#231F20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M111.737 42.726c-.637-.467-7.386-1.298-8.438-1.298-1.025 0-6.854.052-9.104.393-3.5.521-9.469.521-14.004 0-1.641-.191-3.456.208-4.941.689.292-.245.605-.53.981-.917 1.338-1.376 2.837-3.99 5.495-5.292a41.613 41.613 0 001.911-1.015c2.232 1.116 5.75 1.874 10.123-.184 6.526 3.258 10.417 1.054 11.793-.106a7.393 7.393 0 002.623-5.623c0-.735-.112-1.474-.351-2.185-.938-2.836-3.526-4.604-7.08-5.02-.202-.757-.525-1.458-.912-2.123.413-.526.805-1.021 1.06-1.321.309-.39 1.381-2.168-1.489-.685a29.31 29.31 0 00-.774.426 7.352 7.352 0 00-1.352-1.072c-2.676-1.632-6.294-1.831-10.02-.835-.523-1.986-1.505-3.663-3.07-4.619-1.64-1.005-3.706-1.294-6.141-.922.151-.356.29-.672.406-.921 1.083-2.268.499-2.835-.639-1.83-1.282 1.138-2.093 1.948-2.71 2.603-2.303-3.696-5.337-6.193-8.921-7.142-3.11-.824-6.469-.387-9.498 1.078-.181-1.523-.38-2.775-.6-3.496-.564-1.84-1.237-.395-1.344.173l-.5 3.046c-3.027-1.617-6.39-2.064-9.534-1.101-3.456 1.057-6.089 3.631-7.606 7.208a21.059 21.059 0 00-3.46-.905c-.633-.83-1.571-1.884-2.881-3.031-.883-.783-1.612-.376-1.083 1.168.207.598.388 1.127.555 1.627-2.466.136-4.265.945-5.476 1.88-2.394 1.849-3.369 4.498-3.563 6.178l-.329.081c-2.008.461-4.718 1.215-6.417 3.894-.301-.186-.52-.322-.611-.381-5.062-3.361-2.728.963-.77 2.87-6.732.952-8.632 4.186-9.118 6.108a5.986 5.986 0 00-.185 1.487c0 2.183 1.139 4.373 3.053 5.671 2.251 1.523 4.98 1.43 7.407-.123 3.171 1.021 7.647.856 10.86-1.48 1.854 1.997 3.351 3.414 4.161 4.221 2.019 2.008 4.979 3.537 6.493 4.111-1.498-.58-3.99-1.203-6.483-.857-5.381.75-8.953-.225-11.257-.454-3.797-.376-7.701.277-9.645.277-2.059 0-4.966.969-6.384 1.177-1.531.23-1.432 1.242.7 1.809 2.11.571 6.065.922 7.138 1.38 3.437 1.493 9.185 2.739 13.236 2.414 2.876-.22 5.771 1.182 6.515 1.402 1.426.437 4.96 1.402 6.413 1.376 0-.087 0 2.042.149 3.048-.55.182-1.077.374-1.549.59-1.609-.977-8.672-3.841-17.273-.276-1.818-.629-5.665-2.751-10.935-1.017C-.146 57.028.91 62.987 3.056 65.716c2.903 3.693 8.273 2.945 9.835 1.087 3.495 2.322 7.063 1.536 9.649-.07 1.7 1 10.068 2.659 16.43.07.869.647 4.361 2.47 8.844.211 2.587 1.537 6.867 1.655 9.063-.281.797.677 3.186 1.647 8.273 1.588 6.11-.073 7.528-.984 8.386-1.729 1.316.61 4.747 2.404 8.991.593 2.29 1.44 6.872 1.356 9.329-.255 4.491 2.042 12.729 1.118 14.79-.303 3.688-2.557 1.904-7.769-2.155-10.242-7.982-4.023-15.413-.902-17.386.111-2.351-1.587-7.27-2.604-12.377-1.657.079-.608-.01-1.302-.01-2.077 0-.083-.013-.16-.015-.242 1.012-.308 2.452-1.397 5.381-1.581 3.987-.269 13.393-.143 18.095-2.553 2.685-1.372 12.021-3.202 13.266-3.929 1.289-.736.95-1.282.292-1.731zM77.49 37.332c-3.39 3.99-5.1 5.381-5.695 5.354-.648-1.296-2.086-2.843-3.059-3.706 1.22-1.355 6.517-3.827 8.961-5.668.36-.271 1.432-.928 1.891-1.179.633.75 1.379 1.469 2.242 2.085-2.096 1.166-3.252 1.84-4.34 3.114zm-48.845-8.661c2.848.45 6.165-.216 8.577-2.386 2.963 4.73 3.039 9.013 5.898 11.964-3.609-3.492-6.757-3.424-11.92-6.209-.891-.48-2.221-1.345-2.597-1.536-.005-.005-.016-.009-.023-.013.06-.435.097-.888.097-1.374 0-.138-.03-.301-.032-.446zm21.998 5.286l.076.162s-1.572-2.358-1.762-2.659c-.537-.822-1.237-1.653-2.021-2.618a86.947 86.947 0 00-3.145-3.6c2.058-.503 4.409-1.679 6.942-4.065.269.196.542.344.814.517-.139.812-.266 1.545-.363 2.078-.584 3.188-.626 5.638-.667 6.689-.042.997.055 2.57.126 3.496zm-4.514-2.946c1.253 1.639 2.381 3.567 2.625 3.974-1.054.378-2.909 1.315-3.98 2.042-2.01-2.077-3.565-8.342-4.57-10.004-.385-.635-.655-1.077-.864-1.418.69.242 1.799.208 2.451.217.193.275 1.925 1.986 4.338 5.189zm9.326 4.657c9.871 0 17.6 7.732 17.6 17.596 0 .661-.047 1.655-.174 2.603-1.064.305-2.118.67-3.131 1.176-5.096-2.968-12.052-2.795-16.879-.042-2.982-2.364-9.695-2.552-14.758-1.378-.153-.952-.258-1.895-.258-2.36 0-9.717 7.881-17.595 17.6-17.595zm-2.533-6.726c.204-3.271.82-5.493.91-5.91.694.333 1.539.621 2.355.829.644 1.362 1.735 6.806 1.257 10.085-1.488-.139-3.226-.104-4.264 0-.323-.584-.368-3.251-.258-5.004zm15.598.354c-.994 2.138-.478 4.903-3.022 7.413-.351-.29-2.915-1.513-3.886-1.906.403-3.396 3.565-7.642 5.634-9.394.647.735 1.537 1.374 2.362 1.822a25.016 25.016 0 00-1.088 2.065zm2.693-.683c.083-.142.178-.327.277-.525 1.895.629 3.974.796 6.014.571.206.668.527 1.38.938 2.097-.01.001-.028.015-.034.017-1.009.48-4.069 2.575-8.543 5.066-1.157.641-1.87 1.257-2.279 1.68.492-.663 1.094-1.538 1.473-2.506.786-2.016.577-3.635 2.154-6.4zM60.39 31.192c-.485 1.227-.675 1.874-.857 2.563.379-2.637-.337-6.494-1.104-9.826 2.301.048 4.63-.556 6.942-1.867.18.521.418.976.653 1.43-1.305 1.19-4.423 4.612-5.634 7.7zm-36.107 2.703c-2.639 2.116-6.99 2.318-9.674 1.292a1.077 1.077 0 00-1.019.135c-1.792 1.301-3.749 1.415-5.374.314-1.616-1.092-2.433-3.085-1.988-4.844.631-2.496 3.617-4.188 8.187-4.645.474-.047.861-.4.952-.866.819-4.182 3.539-4.805 6.167-5.404l1.134-.272c.535-.13.863-.634.793-1.179-.101-.788.585-3.49 2.805-5.205 2.584-1.997 6.456-2.045 11.198-.141a1.078 1.078 0 001.422-.648c1.189-3.442 3.548-5.858 6.645-6.804 3.179-.974 6.678-.273 9.604 1.923.362.271.854.289 1.232.043 2.907-1.866 6.353-2.464 9.452-1.642 3.462.917 6.397 3.518 8.487 7.522.246.472.803.693 1.308.521 3.249-1.119 5.891-1.145 7.64-.076 1.659 1.014 2.232 2.808 2.422 4.131.046.318.228.597.5.767.271.168.605.205.908.106 3.446-1.152 6.908-.983 9.263.452 1.544.94 2.501 2.342 2.771 4.056.077.5.493.878.998.91 3.009.183 5.145 1.518 5.855 3.665.638 1.927-.014 4.129-1.617 5.481-2.275 1.917-5.879 1.791-9.881-.348a1.075 1.075 0 00-1-.006c-3.12 1.607-6.074 1.715-8.786.32-3.173-1.636-5.005-4.841-5.246-6.494a1.068 1.068 0 00-.428-.717 1.085 1.085 0 00-.812-.194c-2.222.358-9.597.984-11.125-6.083a1.071 1.071 0 00-.648-.772c-.328-.134-.706.122-1.003.319-4.782 3.182-9.501 2.956-14.027-.678-.43-.348-1.056-.398-1.443-.004-5.153 5.231-9.386 4.844-11.451 4.007-.482-.195-1.036-.04-1.316.402-1.998 3.165-6.284 3.82-9.273 2.855-.354-.115-.744-.145-1.027.095-.287.24-.426.61-.37.98.429 2.928-.321 5.191-2.235 6.726zm2.489.986c.489-.636 1.023-1.772 1.285-2.609.274.167.497.307.619.393.087.047 1.787 1.192 2.799 1.668 4.47 2.099 7.271 2.624 10.32 5.082-1.115 1.208-2.242 2.618-2.943 3.842-6.391-1.776-11.387-7.477-12.08-8.376zm3.322 14.244c-.627-.217-4.267-1.541-6.441-1.389-4.451.324-10.111-1.078-12.918-2.185-.699-.272-6.827-.809-.865-.809 1.96 0 4.396-.55 8.318.013 2.291.324 6.282.713 12.345.237 2.962-.237 5.238.738 6.383 1.867-.307.896-.677 3.024-.762 3.739-1.565.03-4.46-.901-6.06-1.473zM15.045 65.294c-2.705-1.932-4.535-5.505-6.418-4.883-.787.256-.874 1.66.209 1.688.744.018 2.072 1.979 2.842 2.847-.199 1.042-2.886 2.148-5.703.454-1.232-.74-3.293-3.382-1.54-6.445.952-1.663 3.651-2.579 6.894-2.509 6.27.141 8.03 7.267 9.505 8.602-.001.708-3.379 1.972-5.789.246zm9.099-.096c-2.366-1.05-4.24-6.501-4.937-7.198-.277-.276 4.188-1.897 8.728-1.505 7.727.657 7.748 5.458 9.653 7.854.692.87-6.271 2.867-13.444.849zm25.294.486c-.723-.489-2.92-3.243-3.702-4.195-.785-.945-2.229-1.809-2.844-.945-.367.52.013 1.116.667 1.491.7.402 2.562 2.808 2.803 3.262-.143.745-3.606 1.99-5.633-.475-1.047-1.281-3.077-5.081-4.297-6.707 4.405-1.564 9.645-2.148 13.356-.399 3.562 1.675 4.181 5.534 5.601 7.411.348 1.261-3.782 2.026-5.951.557zm9.708-.093c-2.361-1.054-4.241-6.505-4.939-7.202-.28-.277 4.191-1.889 8.731-1.501 7.732.655 7.753 5.458 9.652 7.848.697.877-6.264 2.878-13.444.855zM97.8 56.628c7.729.655 9.567 5.744 8.799 7.394-.677 1.45-5.41 3.333-12.585 1.31-2.366-1.055-4.244-6.506-4.936-7.203-.281-.276 4.184-1.888 8.722-1.501zm-13.123 1.215c3.569 1.677 4.397 5.511 5.596 7.409.35 1.263-3.981 1.654-5.947.567-.757-.431-2.915-3.244-3.698-4.2-.783-.946-2.009-1.558-2.618-.694-.367.519.073 1.14.752 1.514.833.452 2.246 2.535 2.497 2.988-.142.744-3.2 1.718-5.441-.553-1.147-1.155-3.208-5.178-4-6.753 4.4-1.571 9.152-2.026 12.859-.278zm20.738-13.486c-2.241.454-5.009 1.095-8.304 2.371-4.412 1.718-13.132 2.193-16.674 2.133-3.401-.056-4.548 1.449-5.74 1.237-.07-1.834-1.149-4.532-1.149-4.532.984-.528 4.211-1.621 7.013-1.512 3.75.143 10.59.428 14.124-.125 1.728-.265 8.045-.295 9.006-.3.729-.003 1.865.147 2.167.196 1.496.229.307.376-.443.532z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.882 29.34c-1.885 0-3.397.039-4.723 1.48-1.417 1.536-1.073 2.379-1.337 2.658-.388.38-1.359-.291-1.342-1.052.083-3.614 4.447-5.024 7.036-4.734.986.116 1.242 1.648.366 1.648M22.549 23.273c-2.756.303-3.563 1.649-4.055 3.193-.2.58-1.747.165-1.503-.978.731-3.396 4.415-4.227 5.753-3.937.45.087.312 1.675-.195 1.722M34.557 15.892c-4.889-1.917-7.343 1.792-8.135 4.716-.108.398-1.746.248-1.514-.995.566-2.999 3.497-7.365 10.193-5.665.823.208.338 2.294-.544 1.944M52.857 11.072c-4.505-3.098-8.048-.611-9.926 1.63-.901 1.064-1.84-.696-1.455-1.315 1.62-2.566 7.178-6.516 12.104-2.168.554.481-.105 2.268-.723 1.853M71.357 15.262c-.376.268-.599-.341-.847-.74-4.016-6.353-11.281-4.677-13.232-1.73-.396.597-1.453-1.021-.939-1.865 1.763-2.869 10.985-5.539 15.717 2.575.502.882-.169 1.396-.699 1.76M82.66 19.256c-1.136-2.96-3.272-2.843-5.824-2.029-1.176.385-.891-1.563-.503-1.697 2.446-.865 6.613-1.25 7.725 2.839.319 1.143-1.085 1.688-1.398.887M95.9 25.621c-2.027-3.725-5.303-3.717-8.037-2.673-.614.242-1.167-1.316-.196-1.87 2.637-1.506 8.029-1.238 9.707 3.574.287.817-.798 2.207-1.474.969M104.319 31.488c-.157.623-1.688.662-1.635.026.234-3.05-1.273-3.297-3.281-3.275-.76.018-.701-1.623-.127-1.748 2.711-.628 5.967 1.354 5.043 4.997"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M51.603 47.262a2.046 2.046 0 11-4.088-.205l.019-.226c-.175-.268-1.095-.566-2.464.264-.687.422-1.457.132-.263-.902 1.267-1.101 2.47-1.739 3.531-1.872l.033-.008c1.788-.124 4.111.242 5.197.684.45.184-.019 2.397-.12 2.37-.369-.082-1.174-.421-1.849-.268l.004.163M57.473 53.398c-.358 1.044-4.057 1.378-4.736.019-.268-.539-.64-1.929-.139-1.642.822.478 3.798.14 4.36 0 .497-.127.173-.82.479-.735.368.102.368 1.37.036 2.358M66.175 47.611c-.93-.766-2.147-1.101-2.613-.766l.017.158a2.048 2.048 0 11-4.08.357v-.088c-.736-.232-1.908.173-2.069.11-.095-.044-.591-2.129.057-2.391 1.766-.721 7.457-1.072 9.11 2.122.192.388.072.902-.422.498"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M64.7 78.265h42.343v38.386H64.7V78.265zm-60.822 0h42.357v38.386H3.878V78.265zm42.352 106.98c-10.898-3.192-21.483-7.483-28.229-13.807a40.678 40.678 0 01-6.175-7.295h10.808v1.524h5.022v-1.524h12.133v-20.5h-2.588v-3.731c-2.63.626-6.918-.809-8.834-.809-2.117 0-3.216.932-3.216.932s-1.085-.927-3.224-.932c-1.917 0-6.209 1.445-8.836.809v3.731H10.5v18.331c-4.123-7.227-6.115-15.879-6.538-26.487l-.084-1.627H46.23v51.385zm-30.97-25.302v-17.651c1.51.263 4.09-.775 6.729-.858 1.415-.047 1.817.763 1.817.763v17.807s-1.528-1.065-4.95-.087c-2.644.755-3.596.026-3.596.026zm11.223.061v-17.807s.403-.81 1.817-.763c2.64.083 5.22 1.121 6.734.858v17.651s-.958.729-3.602-.026c-3.421-.979-4.949.087-4.949.087zm36.004 25.944l-7.015 1.785-7.031-1.813V131.5H3.878v-12.493h44.563V78.265h14.046v40.744h44.556v12.493H62.487v54.446zm38.238-23.765v-18.54h-2.592v-3.731c-2.631.626-6.919-.809-8.84-.809-2.113 0-3.216.932-3.216.932s-1.081-.927-3.219-.932c-1.917 0-6.21 1.445-8.836.809v3.731H71.43v20.5h12.136v1.524h5.025v-1.524h10.915c-1.762 2.638-3.865 5.058-6.399 7.373-7.158 6.548-17.732 10.676-28.406 13.765v-51.422h42.343v1.729c-.632 11.599-2.422 19.851-6.319 26.595zm-4.765-19.891v17.651s-.95.729-3.597-.026c-3.422-.979-4.944.087-4.944.087v-17.807s.395-.81 1.817-.763c2.635.084 5.208 1.122 6.724.858zm-11.224-.095v17.807s-1.528-1.065-4.952-.087c-2.642.755-3.595.026-3.595.026v-17.651c1.511.263 4.089-.775 6.725-.858 1.419-.047 1.822.763 1.822.763zM1.283 75.678v56.805c0 18.775 4.691 31.777 14.722 40.912 9.962 9.068 24.881 13.672 39.468 17.117 14.982-3.539 29.401-7.955 39.462-17.117 10.034-9.135 14.696-22.137 14.696-40.912V75.678H1.283z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M37.2 88.317v-3.73c-2.63.623-6.919-.81-8.835-.81-2.116 0-3.216.926-3.216.926s-1.086-.921-3.224-.926c-1.916-.005-6.209 1.445-8.839.81v3.73h-2.588v20.497h12.133v1.523h5.027v-1.523h12.13V88.317H37.2zm-13.399 16.361s-1.524-1.069-4.946-.096c-2.645.752-3.6.026-3.6.026v-17.65c1.514.265 4.093-.773 6.729-.852 1.419-.044 1.817.765 1.817.765v17.807zm11.231-.07s-.956.726-3.6-.026c-3.422-.973-4.95.096-4.95.096V86.871s.403-.809 1.817-.765c2.64.078 5.219 1.116 6.732.852v17.65zM98.135 88.317v-3.73c-2.634.623-6.922-.81-8.84-.81-2.116 0-3.22.926-3.22.926s-1.08-.921-3.22-.926c-1.915-.005-6.208 1.445-8.84.81v3.73h-2.581v20.497h12.128v1.523h5.029v-1.523h12.127V88.317h-2.583zm-13.733 16.361s-1.528-1.069-4.943-.096c-2.646.752-3.604.026-3.604.026v-17.65c1.516.265 4.098-.773 6.732-.852 1.42-.044 1.814.765 1.814.765v17.807zm11.233-.07s-.957.726-3.602-.026c-3.426-.973-4.949.096-4.949.096V86.871s.406-.809 1.823-.765c2.634.078 5.214 1.116 6.728.852v17.65z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#E11B22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M48.441 185.921l7.032 1.812 7.014-1.785v-54.447h44.556v-12.493H62.487V78.265H48.441v40.743H3.859v12.493h44.582zM27.935 56.494c-4.539-.392-9.005 1.229-8.728 1.505.696.697 2.57 6.148 4.937 7.198 7.174 2.018 14.137.021 13.444-.85-1.905-2.395-1.927-7.196-9.653-7.853zM62.938 56.888c-4.54-.388-9.012 1.224-8.731 1.501.698.697 2.578 6.148 4.939 7.202 7.18 2.023 14.141.021 13.444-.855-1.899-2.389-1.919-7.193-9.652-7.848zM94.014 65.332c7.175 2.022 11.908.14 12.585-1.31.769-1.65-1.07-6.739-8.799-7.394-4.538-.388-9.003 1.224-8.722 1.501.692.697 2.569 6.148 4.936 7.203z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M156.166 78.175c4.666 0 7.323.778 9.462 2.269 2.203 1.555 3.37 3.889 3.37 7.127 0 5.703-5.379 8.49-8.489 9.268v.13c5.896.842 11.211 4.341 11.211 10.888 0 4.6-2.269 7.84-6.027 9.979-3.306 1.815-7.452 2.463-12.378 2.463H138.41v-1.491c5.444-.389 5.962-.842 5.962-7.906V87.571c-.064-7.064-.454-7.517-5.572-7.906v-1.491h17.366zm-6.351 18.34h4.083c6.221 0 9.331-2.917 9.331-8.231 0-3.888-1.619-8.229-9.268-8.229-2.138 0-3.045.193-3.563.389-.39.129-.584.389-.584 1.685v14.386zm0 1.88v14.126c0 4.343.843 5.834 5.572 5.769 5.444 0 10.046-2.722 10.046-9.592 0-7.064-5.185-10.303-11.858-10.303h-3.76zM191.099 110.902c0 7.064.52 7.517 5.834 7.906v1.491h-17.238v-1.491c5.442-.389 5.961-.842 5.961-7.906V87.571c0-7.064-.519-7.517-5.703-7.906v-1.491h16.462c4.146 0 7.841.583 10.238 2.204 2.593 1.62 4.277 4.537 4.277 8.295 0 5.379-3.305 9.203-8.553 11.341 1.166 1.944 3.822 6.416 5.767 9.268 2.333 3.435 3.694 5.184 5.443 7.128 1.36 1.621 2.527 2.658 4.86 3.24l-.13 1.231h-.907c-7.453-.194-9.721-2.462-12.184-6.026-2.008-2.917-4.73-7.711-6.545-10.759-1.038-1.685-2.074-2.333-4.082-2.333h-3.501v9.139zm0-11.018h3.759c2.658 0 4.732-.324 6.482-1.75 2.786-2.202 3.758-5.378 3.758-8.554 0-6.805-4.926-9.526-9.786-9.526-2.203 0-3.109.129-3.63.324-.388.129-.583.454-.583 1.75v17.756zM264.29 98.654c0 13.479-9.396 22.616-21.773 22.616-12.248 0-20.932-9.332-20.932-21.579 0-10.888 7.646-22.488 22.098-22.488 11.211 0 20.607 8.684 20.607 21.451zm-22.292-19.312c-7.646 0-14.128 6.286-14.128 18.469 0 12.508 6.546 21.32 16.008 21.32 7.776 0 14.126-6.026 14.126-18.08 0-13.997-6.738-21.709-16.006-21.709zM285.959 79.666l-2.009.259c-2.916.389-3.306.972-2.396 3.823l8.748 27.608h.13l10.369-32.534h1.555l11.729 32.469h.13c2.657-8.166 6.417-21.84 7.518-26.506.908-3.758.585-4.537-2.333-4.86l-1.879-.259v-1.491h13.738v1.491c-4.277.518-4.73.778-6.868 6.675-.585 1.62-5.315 16.525-10.76 34.347h-1.75l-11.663-31.69-.13.129-10.564 31.561h-1.814l-11.211-34.801c-1.75-5.379-2.723-5.832-6.415-6.221v-1.491h15.876v1.491zM375.115 120.753h-1.686L345.304 86.6h-.128v16.526c0 6.805.259 10.304.518 12.313.324 2.268 2.073 3.176 6.351 3.369v1.491H336.49v-1.491c3.564-.129 5.25-1.101 5.573-3.369.26-2.009.521-5.508.521-12.313V89.062c0-4.666-.066-5.703-1.233-7.192-1.23-1.556-2.98-2.01-5.702-2.204v-1.491h9.462l27.283 32.663h.129v-15.49c0-6.804-.26-10.303-.519-12.313-.323-2.268-2.074-3.175-6.352-3.37v-1.491h15.555v1.491c-3.563.129-5.25 1.102-5.573 3.37-.261 2.01-.519 5.509-.519 12.313v25.405z"
  })));
});

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    viewBox: "0 0 384 192",
    role: "img",
    "aria-labelledby": "title"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#FFF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M39.3 25.6c.2.3.5.8.9 1.4 1 1.7 2.6 7.9 4.6 10 1.1-.7 2.9-1.7 4-2-.2-.4-1.4-2.3-2.6-4-2.4-3.2-4.1-4.9-4.3-5.2-.8 0-1.9 0-2.6-.2zM57.4 33.9c.5-3.3-.6-8.7-1.3-10.1-.8-.2-1.7-.5-2.4-.8-.1.4-.7 2.6-.9 5.9-.1 1.8-.1 4.4.3 5 1.1-.1 2.9-.1 4.3 0zM73.1 53.3c0-9.9-7.7-17.6-17.6-17.6-9.7 0-17.6 7.9-17.6 17.6 0 .5.1 1.4.3 2.4 5.1-1.2 11.8-1 14.8 1.4 4.8-2.8 11.8-2.9 16.9 0 1-.5 2.1-.9 3.1-1.2 0-1 .1-2 .1-2.6zm-21.5-6c-.1 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1v-.2c-.2-.3-1.1-.6-2.5.3-.7.4-1.5.1-.3-.9 1.3-1.1 2.5-1.7 3.5-1.9 1.8-.1 4.1.2 5.2.7.5.2 0 2.4-.1 2.4-.4-.1-1.2-.4-1.8-.3v.1zm5.9 6.1c-.4 1-4.1 1.4-4.7 0-.3-.5-.6-1.9-.1-1.6.8.5 3.8.1 4.4 0 .5-.1.2-.8.5-.7.2 0 .2 1.3-.1 2.3zm8.7-5.8c-.9-.8-2.1-1.1-2.6-.8v.2c.1 1.1-.7 2.1-1.9 2.2-1.1.1-2.1-.7-2.2-1.9v-.1c-.7-.2-1.9.2-2.1.1-.1 0-.6-2.1.1-2.4 1.8-.7 7.5-1.1 9.1 2.1.2.5.1 1-.4.6zM67.2 25.4c-2.1 1.8-5.2 6-5.6 9.4 1 .4 3.5 1.6 3.9 1.9 2.5-2.5 2-5.3 3-7.4.4-.9.8-1.6 1.1-2.1-.8-.4-1.7-1.1-2.4-1.8zM22 86.1c-2.6.1-5.2 1.1-6.7.9v17.7s1 .7 3.6 0c3.4-1 4.9.1 4.9.1V86.9s-.4-.8-1.8-.8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M46.2 78.3H3.9v38.4h42.4c-.1 0-.1-38.4-.1-38.4zm-6.4 30.5H27.7v1.5h-5v-1.5H10.5V88.3h2.6v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6l.1 20.5zM88.9 86.1c-1.4 0-1.8.8-1.8.8v17.8s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0V87c-1.5.2-4.1-.8-6.7-.9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M28.3 86.1c-1.4 0-1.8.8-1.8.8v17.8s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0V87c-1.5.2-4.1-.8-6.7-.9zM79.6 32.1c-.5.3-1.5.9-1.9 1.2-2.4 1.8-7.7 4.3-9 5.7 1 .9 2.4 2.4 3.1 3.7.6 0 2.3-1.4 5.7-5.4 1.1-1.3 2.2-1.9 4.3-3.1-.8-.6-1.6-1.3-2.2-2.1zM87.4 142.2V160s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0v-17.7c-1.5.3-4.1-.8-6.7-.9-1.4.1-1.8.9-1.8.9zM76.2 142.3V160s1 .7 3.6 0c3.4-1 5 .1 5 .1v-17.8s-.4-.8-1.8-.8c-2.7 0-5.3 1.1-6.8.8zM82.6 86.1c-2.6.1-5.2 1.1-6.7.9v17.7s1 .7 3.6 0c3.4-1 4.9.1 4.9.1V86.9s-.4-.8-1.8-.8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M107 78.3H64.7v38.4H107V78.3zm-6.3 30.5H88.6v1.5h-5v-1.5H71.4V88.3H74v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6l.1 20.5zM11.3 56.4c-3.2-.1-5.9.8-6.9 2.5-1.7 3.1.3 5.8 1.6 6.5 2.8 1.7 5.5.6 5.7-.5-.8-.9-2.1-2.8-2.8-2.8-1.1 0-1-1.4-.2-1.7 1.9-.6 3.7 3 6.4 4.9 2.4 1.7 5.8.5 5.8-.2-1.5-1.4-3.3-8.5-9.6-8.7zM49.8 57.7c-3.7-1.8-9-1.2-13.4.4 1.2 1.6 3.2 5.4 4.3 6.7 2 2.5 5.5 1.2 5.6.5-.2-.5-2.1-2.9-2.8-3.3-.7-.4-1-1-.7-1.5.6-.9 2.1 0 2.8.9.8 1 3 3.7 3.7 4.2 2.2 1.5 6.3.7 6-.6-1.3-1.8-1.9-5.6-5.5-7.3zM41.8 39.4c-3-2.5-5.9-3-10.3-5.1-1-.5-2.7-1.6-2.8-1.7-.1-.1-.3-.2-.6-.4-.3.8-.8 2-1.3 2.6.7.9 5.7 6.6 12.1 8.4.7-1.2 1.8-2.6 2.9-3.8zM36.9 46.9c-1.1-1.1-3.4-2.1-6.4-1.9-6.1.5-10.1.1-12.3-.2-3.9-.6-6.4 0-8.3 0-6 0 .2.5.9.8 2.8 1.1 8.5 2.5 12.9 2.2 2.2-.2 5.8 1.2 6.4 1.4 1.6.6 4.5 1.5 6.1 1.5 0-.8.4-2.9.7-3.8zM75.8 64.9c2.2 2.3 5.3 1.3 5.4.6-.3-.5-1.7-2.5-2.5-3-.7-.4-1.1-1-.8-1.5.6-.9 1.8-.3 2.6.7s2.9 3.8 3.7 4.2c2 1.1 6.3.7 5.9-.6-1.2-1.9-2-5.7-5.6-7.4-3.7-1.7-8.5-1.3-12.9.3 1 1.5 3.1 5.5 4.2 6.7zM105.9 43.8c-.3 0-1.4-.2-2.2-.2-1 0-7.3 0-9 .3-3.5.6-10.4.3-14.1.1-2.8-.1-6 1-7 1.5 0 0 1.1 2.7 1.1 4.5 1.2.2 2.3-1.3 5.7-1.2 3.5.1 12.3-.4 16.7-2.1 3.3-1.3 6.1-1.9 8.3-2.4.8-.1 2-.2.5-.5zM23.8 160v-17.8s-.4-.8-1.8-.8c-2.6.1-5.2 1.1-6.7.9V160s1 .7 3.6 0c3.4-1.1 4.9 0 4.9 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M26.9 26.2c.3-.2.7-.2 1-.1 3 1 7.3.3 9.3-2.9.3-.4.8-.6 1.3-.4 2.1.8 6.3 1.2 11.5-4 .4-.4 1-.3 1.4 0 4.5 3.6 9.2 3.9 14 .7.3-.2.7-.5 1-.3.3.1.6.4.6.8 1.6 7 9 6.4 11.2 6 .3 0 .6 0 .8.2.2.2.4.4.4.7.2 1.7 2.1 4.9 5.2 6.5 2.7 1.4 5.7 1.3 8.8-.3.3-.2.7-.2 1 0 4 2.1 7.6 2.3 9.9.3 1.6-1.4 2.3-3.6 1.6-5.5-.7-2.1-2.8-3.5-5.9-3.7-.5 0-.9-.4-1-.9-.3-1.7-1.2-3.1-2.8-4.1-2.4-1.4-5.8-1.6-9.3-.5-.3.1-.6.1-.9-.1-.3-.2-.5-.4-.5-.8-.2-1.3-.8-3.1-2.4-4.1-1.7-1.1-4.4-1-7.6.1-.5.2-1.1 0-1.3-.5-2.1-4-5-6.6-8.5-7.5-3.1-.8-6.5-.2-9.5 1.6-.4.2-.9.2-1.2 0-2.9-2.2-6.4-2.9-9.6-1.9-3.1.9-5.5 3.4-6.6 6.8-.1.3-.3.5-.6.6-.3.1-.6.1-.9 0-4.7-1.9-8.6-1.9-11.2.1-2.2 1.7-2.9 4.4-2.8 5.2.1.5-.3 1-.8 1.2l-1.1.3c-2.6.6-5.3 1.2-6.2 5.4-.1.5-.5.8-1 .9-4.6.5-7.6 2.1-8.2 4.6-.4 1.8.4 3.8 2 4.8 1.6 1.1 3.6 1 5.4-.3.3-.2.7-.3 1-.1 2.7 1 7 .8 9.7-1.3 1.9-1.5 2.7-3.8 2.2-6.7.2-.2.3-.6.6-.8zm72.4.3c2.7-.6 6 1.4 5 5-.2.6-1.7.7-1.6 0 .2-3-1.3-3.3-3.3-3.3-.8.1-.7-1.6-.1-1.7zm-11.6-5.4c2.6-1.5 8-1.2 9.7 3.6.3.8-.8 2.2-1.5 1-2-3.7-5.3-3.7-8-2.7-.7.2-1.2-1.4-.2-1.9zm-11.4-5.6c2.4-.9 6.6-1.2 7.7 2.8.3 1.1-1.1 1.7-1.4.9-1.1-3-3.3-2.8-5.8-2-1.1.4-.9-1.5-.5-1.7zm-20-4.6c1.8-2.9 11-5.5 15.7 2.6.5.9-.2 1.4-.7 1.8-.4.3-.6-.3-.8-.7-4-6.4-11.3-4.7-13.2-1.7-.4.5-1.5-1.1-1-2zm-14.8.5c1.6-2.6 7.2-6.5 12.1-2.2.6.5-.1 2.3-.7 1.9-4.5-3.1-8-.6-9.9 1.6-1 1.1-1.9-.7-1.5-1.3zM14.9 29.3c-1.9 0-3.4 0-4.7 1.5-1.4 1.5-1.1 2.4-1.3 2.7-.4.4-1.4-.3-1.3-1.1.1-3.6 4.4-5 7-4.7.9.1 1.2 1.6.3 1.6zm7.6-6c-2.8.3-3.6 1.6-4.1 3.2-.2.6-1.7.2-1.5-1 .7-3.4 4.4-4.2 5.8-3.9.5 0 .4 1.6-.2 1.7zm2.4-3.7c.6-3 3.5-7.4 10.2-5.7.8.2.3 2.3-.5 1.9-4.9-1.9-7.3 1.8-8.1 4.7-.2.5-1.8.4-1.6-.9zM64.7 185.3c10.7-3.1 21.2-7.2 28.4-13.8 2.5-2.3 4.6-4.7 6.4-7.4H88.6v1.5h-5v-1.5H71.4v-20.5H74v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6v18.5c3.9-6.7 5.7-15 6.3-26.6v-1.7H64.7v51.5zM31.4 159.9c2.6.8 3.6 0 3.6 0v-17.7c-1.5.3-4.1-.8-6.7-.9-1.4 0-1.8.8-1.8.8V160s1.5-1.1 4.9-.1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 135.5c.4 10.6 2.4 19.3 6.5 26.5v-18.3h2.6V140c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6v20.5h-12v1.5h-5v-1.5H11.8c1.7 2.6 3.8 5 6.2 7.3 6.7 6.3 17.3 10.6 28.2 13.8v-51.4H3.9l.1 1.6z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#231F20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M111.7 42.7c-.6-.5-7.4-1.3-8.4-1.3s-6.9.1-9.1.4c-3.5.5-9.5.5-14 0-1.6-.2-3.5.2-4.9.7.3-.2.6-.5 1-.9 1.3-1.4 2.8-4 5.5-5.3.7-.3 1.3-.7 1.9-1 2.2 1.1 5.8 1.9 10.1-.2 6.5 3.3 10.4 1.1 11.8-.1 1.7-1.4 2.6-3.5 2.6-5.6 0-.7-.1-1.5-.4-2.2-.9-2.8-3.5-4.6-7.1-5-.2-.8-.5-1.5-.9-2.1.4-.5.8-1 1.1-1.3.3-.4 1.4-2.2-1.5-.7-.1.1-.4.2-.8.4-.4-.4-.8-.8-1.4-1.1-2.7-1.6-6.3-1.8-10-.8-.5-2-1.5-3.7-3.1-4.6-1.6-1-3.7-1.3-6.1-.9.2-.4.3-.7.4-.9 1.1-2.3.5-2.8-.6-1.8-1.3 1.1-2.1 1.9-2.7 2.6-2.3-3.7-5.3-6.2-8.9-7.1-3.1-.8-6.5-.4-9.5 1.1-.2-1.5-.4-2.8-.6-3.5-.6-1.8-1.2-.4-1.3.2-.1.8-.3 1.8-.5 3-3-1.6-6.4-2.1-9.5-1.1-3.5 1.1-6.1 3.6-7.6 7.2-1.3-.4-2.4-.7-3.5-.9-.6-.8-1.6-1.9-2.9-3-.9-.8-1.6-.4-1.1 1.2.2.6.4 1.1.6 1.6-2.5.1-4.3.9-5.5 1.9-2.4 1.8-3.4 4.5-3.6 6.2-.1 0-.3.1-.3.1-2 .5-4.7 1.2-6.4 3.9-.3-.2-.5-.3-.6-.4-5.1-3.4-2.7 1-.8 2.9-6.7 1-8.6 4.2-9.1 6.1-.1.5-.2 1-.2 1.5 0 2.2 1.1 4.4 3.1 5.7 2.3 1.5 5 1.4 7.4-.1 3.2 1 7.6.9 10.9-1.5 1.9 2 3.4 3.4 4.2 4.2 2 2 5 3.5 6.5 4.1-1.5-.6-4-1.2-6.5-.9-5.4.8-9-.2-11.3-.5-3.8-.4-7.7.3-9.6.3-2.1 0-5 1-6.4 1.2-1.5.2-1.4 1.2.7 1.8 2.1.6 6.1.9 7.1 1.4 3.4 1.5 9.2 2.7 13.2 2.4 2.9-.2 5.8 1.2 6.5 1.4 1.4.4 5 1.4 6.4 1.4 0-.1 0 2 .1 3-.5.2-1.1.4-1.5.6-1.6-1-8.7-3.8-17.3-.3-1.8-.6-5.7-2.8-10.9-1C-.1 57 .9 63 3.1 65.7c2.9 3.7 8.3 2.9 9.8 1.1 3.5 2.3 7.1 1.5 9.6-.1 1.7 1 10.1 2.7 16.4.1.9.6 4.4 2.5 8.8.2 2.6 1.5 6.9 1.7 9.1-.3.8.7 3.2 1.6 8.3 1.6 6.1-.1 7.5-1 8.4-1.7 1.3.6 4.7 2.4 9 .6 2.3 1.4 6.9 1.4 9.3-.3 4.5 2 12.7 1.1 14.8-.3 3.7-2.6 1.9-7.8-2.2-10.2-8-4-15.4-.9-17.4.1-2.4-1.6-7.3-2.6-12.4-1.7.1-.6 0-1.3 0-2.1v-.2c1-.3 2.5-1.4 5.4-1.6 4-.3 13.4-.1 18.1-2.6 2.7-1.4 12-3.2 13.3-3.9 1.3-.7 1-1.2.3-1.7zm-34.2-5.4c-3.4 4-5.1 5.4-5.7 5.4-.6-1.3-2.1-2.8-3.1-3.7 1.2-1.4 6.5-3.8 9-5.7.4-.3 1.4-.9 1.9-1.2.6.8 1.4 1.5 2.2 2.1-2.1 1.2-3.2 1.9-4.3 3.1zm-48.9-8.6c2.8.5 6.2-.2 8.6-2.4 3 4.7 3 9 5.9 12-3.6-3.5-6.8-3.4-11.9-6.2-.9-.5-2.2-1.3-2.6-1.5.1-.4.1-.9.1-1.4 0-.2-.1-.4-.1-.5zm22 5.3l.1.2-1.8-2.7c-.5-.8-1.2-1.7-2-2.6-1.2-1.5-2.3-2.7-3.1-3.6 2.1-.5 4.4-1.7 6.9-4.1.3.2.5.3.8.5-.1.8-.3 1.5-.4 2.1-.6 3.2-.6 5.6-.7 6.7.1 1 .2 2.5.2 3.5zm-4.5-3c1.3 1.6 2.4 3.6 2.6 4-1.1.4-2.9 1.3-4 2-2-2.1-3.6-8.3-4.6-10-.4-.6-.7-1.1-.9-1.4.7.2 1.8.2 2.5.2.3.3 2 2 4.4 5.2zm9.4 4.7c9.9 0 17.6 7.7 17.6 17.6 0 .7 0 1.7-.2 2.6-1.1.3-2.1.7-3.1 1.2-5.1-3-12.1-2.8-16.9 0-3-2.4-9.7-2.6-14.8-1.4-.2-1-.3-1.9-.3-2.4.1-9.8 7.9-17.6 17.7-17.6zm-2.6-6.8c.2-3.3.8-5.5.9-5.9.7.3 1.5.6 2.4.8.6 1.4 1.7 6.8 1.3 10.1-1.5-.1-3.2-.1-4.3 0-.3-.5-.4-3.2-.3-5zm15.6.4c-1 2.1-.5 4.9-3 7.4-.4-.3-2.9-1.5-3.9-1.9.4-3.4 3.6-7.6 5.6-9.4.6.7 1.5 1.4 2.4 1.8-.2.4-.7 1.2-1.1 2.1zm2.7-.7c.1-.1.2-.3.3-.5 1.9.6 4 .8 6 .6.2.7.5 1.4.9 2.1-1 .5-4.1 2.6-8.5 5.1-1.2.6-1.9 1.3-2.3 1.7.5-.7 1.1-1.5 1.5-2.5.7-2.1.5-3.7 2.1-6.5zm-10.8 2.6c-.5 1.2-.7 1.9-.9 2.6.4-2.6-.3-6.5-1.1-9.8 2.3 0 4.6-.6 6.9-1.9.2.5.4 1 .7 1.4-1.3 1.2-4.4 4.6-5.6 7.7zm-36.1 2.7c-2.6 2.1-7 2.3-9.7 1.3-.3-.1-.7-.1-1 .1-1.8 1.3-3.7 1.4-5.4.3-1.6-1.1-2.4-3.1-2-4.8.6-2.5 3.6-4.2 8.2-4.6.5 0 .9-.4 1-.9.8-4.2 3.5-4.8 6.2-5.4l1.1-.3c.5-.1.9-.6.8-1.2-.1-.8.6-3.5 2.8-5.2 2.6-2 6.5-2 11.2-.1.3.1.6.1.9 0 .3-.1.5-.3.6-.6 1.2-3.4 3.5-5.9 6.6-6.8 3.2-1 6.7-.3 9.6 1.9.4.3.9.3 1.2 0 2.9-1.9 6.4-2.5 9.5-1.6 3.5.9 6.4 3.5 8.5 7.5.2.5.8.7 1.3.5 3.2-1.1 5.9-1.1 7.6-.1 1.7 1 2.2 2.8 2.4 4.1 0 .3.2.6.5.8.3.2.6.2.9.1 3.4-1.2 6.9-1 9.3.5 1.5.9 2.5 2.3 2.8 4.1.1.5.5.9 1 .9 3 .2 5.1 1.5 5.9 3.7.6 1.9 0 4.1-1.6 5.5-2.3 1.9-5.9 1.8-9.9-.3-.3-.2-.7-.2-1 0-3.1 1.6-6.1 1.7-8.8.3-3.2-1.6-5-4.8-5.2-6.5 0-.3-.2-.5-.4-.7-.2-.2-.5-.2-.8-.2-2.2.4-9.6 1-11.1-6.1-.1-.3-.3-.6-.6-.8-.3-.1-.7.1-1 .3-4.8 3.2-9.5 3-14-.7-.4-.3-1.1-.4-1.4 0-5.2 5.2-9.4 4.8-11.5 4-.5-.2-1 0-1.3.4-2 3.2-6.3 3.8-9.3 2.9-.4-.1-.7-.1-1 .1-.3.2-.4.6-.4 1 .1 2.8-.6 5.1-2.5 6.6zm2.5 1c.5-.6 1-1.8 1.3-2.6.3.2.5.3.6.4.1 0 1.8 1.2 2.8 1.7 4.5 2.1 7.3 2.6 10.3 5.1-1.1 1.2-2.2 2.6-2.9 3.8-6.4-1.8-11.4-7.5-12.1-8.4zm3.3 14.2c-.6-.2-4.3-1.5-6.4-1.4-4.5.3-10.1-1.1-12.9-2.2-.7-.3-6.8-.8-.9-.8 2 0 4.4-.5 8.3 0 2.3.3 6.3.7 12.3.2 3-.2 5.2.7 6.4 1.9-.3.9-.7 3-.8 3.7-1.5.1-4.4-.8-6-1.4zM15 65.3c-2.7-1.9-4.5-5.5-6.4-4.9-.8.3-.9 1.7.2 1.7.7 0 2.1 2 2.8 2.8-.2 1-2.9 2.1-5.7.5-1.2-.7-3.2-3.4-1.5-6.4 1-1.7 3.7-2.6 6.9-2.5 6.3.1 8 7.3 9.5 8.6 0 .7-3.3 1.9-5.8.2zm9.1-.1c-2.4-1.1-4.2-6.5-4.9-7.2-.3-.3 4.2-1.9 8.7-1.5 7.7.7 7.7 5.5 9.7 7.9.7.8-6.3 2.8-13.5.8zm25.3.5c-.7-.5-2.9-3.2-3.7-4.2-.8-.9-2.2-1.8-2.8-.9-.4.5 0 1.1.7 1.5.7.4 2.6 2.8 2.8 3.3-.1.7-3.6 2-5.6-.5-1-1.3-3.1-5.1-4.3-6.7 4.4-1.6 9.6-2.1 13.4-.4 3.6 1.7 4.2 5.5 5.6 7.4.2 1.2-3.9 2-6.1.5zm9.7-.1c-2.4-1.1-4.2-6.5-4.9-7.2-.3-.3 4.2-1.9 8.7-1.5 7.7.7 7.8 5.5 9.7 7.8.7.9-6.3 2.9-13.5.9zm38.7-9c7.7.7 9.6 5.7 8.8 7.4-.7 1.4-5.4 3.3-12.6 1.3-2.4-1.1-4.2-6.5-4.9-7.2-.3-.2 4.2-1.9 8.7-1.5zm-13.1 1.2c3.6 1.7 4.4 5.5 5.6 7.4.3 1.3-4 1.7-5.9.6-.8-.4-2.9-3.2-3.7-4.2-.8-.9-2-1.6-2.6-.7-.4.5.1 1.1.8 1.5.8.5 2.2 2.5 2.5 3-.1.7-3.2 1.7-5.4-.6-1.1-1.2-3.2-5.2-4-6.8 4.2-1.5 9-1.9 12.7-.2zm20.7-13.4c-2.2.5-5 1.1-8.3 2.4-4.4 1.7-13.1 2.2-16.7 2.1-3.4-.1-4.5 1.4-5.7 1.2-.1-1.8-1.1-4.5-1.1-4.5 1-.5 4.2-1.6 7-1.5 3.8.1 10.6.4 14.1-.1 1.7-.3 8-.3 9-.3.7 0 1.9.1 2.2.2 1.5.2.3.3-.5.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14.9 29.3c-1.9 0-3.4 0-4.7 1.5-1.4 1.5-1.1 2.4-1.3 2.7-.4.4-1.4-.3-1.3-1.1.1-3.6 4.4-5 7-4.7.9.1 1.2 1.6.3 1.6M22.5 23.3c-2.8.3-3.6 1.6-4.1 3.2-.2.6-1.7.2-1.5-1 .7-3.4 4.4-4.2 5.8-3.9.5 0 .4 1.6-.2 1.7M34.6 15.9c-4.9-1.9-7.3 1.8-8.1 4.7-.1.4-1.7.2-1.5-1 .6-3 3.5-7.4 10.2-5.7.7.3.2 2.3-.6 2M52.9 11.1c-4.5-3.1-8-.6-9.9 1.6-.9 1.1-1.8-.7-1.5-1.3 1.6-2.6 7.2-6.5 12.1-2.2.5.5-.1 2.3-.7 1.9M71.4 15.3c-.4.3-.6-.3-.8-.7-4-6.4-11.3-4.7-13.2-1.7-.4.6-1.5-1-.9-1.9 1.8-2.9 11-5.5 15.7 2.6.4.8-.3 1.3-.8 1.7M82.7 19.3c-1.1-3-3.3-2.8-5.8-2-1.2.4-.9-1.6-.5-1.7 2.4-.9 6.6-1.2 7.7 2.8.3 1.1-1.1 1.7-1.4.9M95.9 25.6c-2-3.7-5.3-3.7-8-2.7-.6.2-1.2-1.3-.2-1.9 2.6-1.5 8-1.2 9.7 3.6.3.9-.8 2.3-1.5 1M104.3 31.5c-.2.6-1.7.7-1.6 0 .2-3-1.3-3.3-3.3-3.3-.8 0-.7-1.6-.1-1.7 2.7-.6 5.9 1.3 5 5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M51.6 47.3c-.1 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1v-.2c-.2-.3-1.1-.6-2.5.3-.7.4-1.5.1-.3-.9 1.3-1.1 2.5-1.7 3.5-1.9 1.8-.1 4.1.2 5.2.7.5.2 0 2.4-.1 2.4-.4-.1-1.2-.4-1.8-.3v.1M57.5 53.4c-.4 1-4.1 1.4-4.7 0-.3-.5-.6-1.9-.1-1.6.8.5 3.8.1 4.4 0 .5-.1.2-.8.5-.7.2 0 .2 1.3-.1 2.3M66.2 47.6c-.9-.8-2.1-1.1-2.6-.8v.2c.1 1.1-.7 2.1-1.9 2.2-1.1.1-2.1-.7-2.2-1.9v-.1c-.7-.2-1.9.2-2.1.1-.1 0-.6-2.1.1-2.4 1.8-.7 7.5-1.1 9.1 2.1.2.5.1 1-.4.6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M64.7 78.3H107v38.4H64.7V78.3zm-60.8 0h42.4v38.4H3.9V78.3zm42.3 106.9c-10.9-3.2-21.5-7.5-28.2-13.8-2.4-2.3-4.4-4.7-6.2-7.3h10.8v1.5h5v-1.5h12.1v-20.5h-2.6v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6V162c-4.1-7.2-6.1-15.9-6.5-26.5l-.1-1.6h42.4v51.3zm-30.9-25.3v-17.7c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8V160s-1.5-1.1-5-.1c-2.6.8-3.5 0-3.5 0zm11.2.1v-17.8s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9V160s-1 .7-3.6 0c-3.4-1.1-4.9 0-4.9 0zm36 25.9l-7 1.8-7-1.8v-54.4H3.9V119h44.6V78.3h14V119H107v12.5H62.5v54.4zm38.2-23.7v-18.5h-2.6V140c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h10.9c-1.8 2.6-3.9 5.1-6.4 7.4-7.2 6.5-17.7 10.7-28.4 13.8V134H107v1.7c-.6 11.5-2.4 19.7-6.3 26.5zM96 142.3V160s-.9.7-3.6 0c-3.4-1-4.9.1-4.9.1v-17.8s.4-.8 1.8-.8c2.6 0 5.1 1.1 6.7.8zm-11.3-.1V160s-1.5-1.1-5-.1c-2.6.8-3.6 0-3.6 0v-17.7c1.5.3 4.1-.8 6.7-.9 1.5.1 1.9.9 1.9.9zM1.3 75.7v56.8c0 18.8 4.7 31.8 14.7 40.9 10 9.1 24.9 13.7 39.5 17.1 15-3.5 29.4-8 39.5-17.1 10-9.1 14.7-22.1 14.7-40.9V75.7H1.3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M37.2 88.3v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h12.1V88.3h-2.6zm-13.4 16.4s-1.5-1.1-4.9-.1c-2.6.8-3.6 0-3.6 0V87c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8v17.8zm11.2-.1s-1 .7-3.6 0c-3.4-1-4.9.1-4.9.1V86.9s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9v17.6zM98.1 88.3v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h12.1V88.3h-2.6zm-13.7 16.4s-1.5-1.1-4.9-.1c-2.6.8-3.6 0-3.6 0V87c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8v17.8zm11.2-.1s-1 .7-3.6 0c-3.4-1-4.9.1-4.9.1V86.9s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9v17.6z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#E11B22"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M48.4 185.9l7.1 1.8 7-1.8v-54.4H107V119H62.5V78.3H48.4V119H3.9v12.5h44.5zM27.9 56.5c-4.5-.4-9 1.2-8.7 1.5.7.7 2.6 6.1 4.9 7.2 7.2 2 14.1 0 13.4-.8-1.8-2.4-1.8-7.2-9.6-7.9zM62.9 56.9c-4.5-.4-9 1.2-8.7 1.5.7.7 2.6 6.1 4.9 7.2 7.2 2 14.1 0 13.4-.9-1.8-2.4-1.8-7.2-9.6-7.8zM94 65.3c7.2 2 11.9.1 12.6-1.3.8-1.7-1.1-6.7-8.8-7.4-4.5-.4-9 1.2-8.7 1.5.7.7 2.5 6.2 4.9 7.2z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "#FFF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M156.2 78.2c4.7 0 7.3.8 9.5 2.3 2.2 1.6 3.4 3.9 3.4 7.1 0 5.7-5.4 8.5-8.5 9.3v.1c5.9.8 11.2 4.3 11.2 10.9 0 4.6-2.3 7.8-6 10-3.3 1.8-7.5 2.5-12.4 2.5h-14.9v-1.5c5.4-.4 6-.8 6-7.9V87.6c-.1-7.1-.5-7.5-5.6-7.9v-1.5h17.3zm-6.4 18.3h4.1c6.2 0 9.3-2.9 9.3-8.2 0-3.9-1.6-8.2-9.3-8.2-2.1 0-3 .2-3.6.4-.4.1-.6.4-.6 1.7l.1 14.3zm0 1.9v14.1c0 4.3.8 5.8 5.6 5.8 5.4 0 10-2.7 10-9.6 0-7.1-5.2-10.3-11.9-10.3h-3.7zM191.1 110.9c0 7.1.5 7.5 5.8 7.9v1.5h-17.2v-1.5c5.4-.4 6-.8 6-7.9V87.6c0-7.1-.5-7.5-5.7-7.9v-1.5h16.5c4.1 0 7.8.6 10.2 2.2 2.6 1.6 4.3 4.5 4.3 8.3 0 5.4-3.3 9.2-8.6 11.3 1.2 1.9 3.8 6.4 5.8 9.3 2.3 3.4 3.7 5.2 5.4 7.1 1.4 1.6 2.5 2.7 4.9 3.2l-.1 1.2h-.9c-7.5-.2-9.7-2.5-12.2-6-2-2.9-4.7-7.7-6.5-10.8-1-1.7-2.1-2.3-4.1-2.3h-3.5l-.1 9.2zm0-11h3.8c2.7 0 4.7-.3 6.5-1.8 2.8-2.2 3.8-5.4 3.8-8.6 0-6.8-4.9-9.5-9.8-9.5-2.2 0-3.1.1-3.6.3-.4.1-.6.5-.6 1.8v17.8zM264.3 98.7c0 13.5-9.4 22.6-21.8 22.6-12.2 0-20.9-9.3-20.9-21.6 0-10.9 7.6-22.5 22.1-22.5 11.2 0 20.6 8.7 20.6 21.5zM242 79.3c-7.6 0-14.1 6.3-14.1 18.5 0 12.5 6.5 21.3 16 21.3 7.8 0 14.1-6 14.1-18.1 0-13.9-6.7-21.7-16-21.7zM286 79.7l-2 .3c-2.9.4-3.3 1-2.4 3.8l8.7 27.6h.1l10.4-32.5h1.6l11.7 32.5h.1c2.7-8.2 6.4-21.8 7.5-26.5.9-3.8.6-4.5-2.3-4.9l-1.9-.3v-1.5h13.7v1.5c-4.3.5-4.7.8-6.9 6.7-.6 1.6-5.3 16.5-10.8 34.3h-1.8L300.2 89l-.1.1-10.6 31.6h-1.8l-11.2-34.8c-1.8-5.4-2.7-5.8-6.4-6.2v-1.5H286v1.5zM375.1 120.8h-1.7l-28.1-34.2h-.1v16.5c0 6.8.3 10.3.5 12.3.3 2.3 2.1 3.2 6.4 3.4v1.5h-15.6v-1.5c3.6-.1 5.2-1.1 5.6-3.4.3-2 .5-5.5.5-12.3v-14c0-4.7-.1-5.7-1.2-7.2-1.2-1.6-3-2-5.7-2.2v-1.5h9.5l27.3 32.7h.1V95.3c0-6.8-.3-10.3-.5-12.3-.3-2.3-2.1-3.2-6.4-3.4v-1.5h15.6v1.5c-3.6.1-5.2 1.1-5.6 3.4-.3 2-.5 5.5-.5 12.3l-.1 25.5z"
  }))));
});

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _utils_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var sansBold = brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.typography.sansBold;
/*
  inner components
*/
var MobileBannerPositioningWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SiteNav__MobileBannerPositioningWrapper",
  componentId: "iasm8j-0"
})(["", ";"], function (props) {
  return props.banner && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["margin:0 auto;margin-top:2rem;position:relative;width:95%;z-index:10;"]);
});
var MobileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().nav.withConfig({
  displayName: "SiteNav__MobileWrapper",
  componentId: "iasm8j-1"
})(["background-color:", ";border:1px solid #ddd;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white);
var MobileToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "SiteNav__MobileToggleButton",
  componentId: "iasm8j-2"
})(["background-color:transparent;border:none;cursor:pointer;font-size:1em;padding:1rem 0 1rem;width:100%;"]);
var MobileToggleButtonInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SiteNav__MobileToggleButtonInner",
  componentId: "iasm8j-3"
})(["align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:0 auto;width:92%;"]);
var MobileToggleTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "SiteNav__MobileToggleTitle",
  componentId: "iasm8j-4"
})(["color:", ";font-family:", ";font-weight:bold;letter-spacing:0.5px;padding:11px 5px;text-transform:uppercase;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.red, sansBold);
var MobileNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SiteNav__MobileNavWrapper",
  componentId: "iasm8j-5"
})(["align-items:center;display:flex;justify-content:center;margin:0 auto;padding:16px 0;width:92%;z-index:10;"]);
var BannerPositioningWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SiteNav__BannerPositioningWrapper",
  componentId: "iasm8j-6"
})(["", ""], function (props) {
  return props.banner && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background-color:", ";margin:0 auto;margin-top:-50px;max-width:1300px;position:relative;width:96%;z-index:10;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.colors.white);
});
var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SiteNav__NavWrapper",
  componentId: "iasm8j-7"
})(["display:flex;justify-content:center;padding:20px 0 30px;"]);

/*
  outer SiteNav component
*/
var SiteNav = function SiteNav(_ref) {
  var banner = _ref.banner,
    mobileBreakpoint = _ref.mobileBreakpoint,
    mobileToggleTitle = _ref.mobileToggleTitle,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, ["banner", "mobileBreakpoint", "mobileToggleTitle", "children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_fns__WEBPACK_IMPORTED_MODULE_3__.WindowSize, {
    render: function render(_ref2) {
      var width = _ref2.width;
      // TODO: update when `width` doesn't return 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;
      if (renderMobile) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileBannerPositioningWrapper, {
          banner: banner
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileWrapper, restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_VisibilityToggle__WEBPACK_IMPORTED_MODULE_5__["default"], null, function (_ref3) {
          var mobileNavIsOpen = _ref3.isOpen,
            toggleMobileNav = _ref3.toggleIsOpen;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileToggleButton, {
            type: "button",
            "aria-controls": "site-nav-mobile-collapse",
            "aria-expanded": mobileNavIsOpen,
            "aria-label": "Toggle site navigation",
            onClick: toggleMobileNav
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileToggleButtonInner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileToggleTitle, null, mobileToggleTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
            tag: "div",
            isOpen: mobileNavIsOpen
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
            id: "site-nav-mobile-collapse",
            isOpen: mobileNavIsOpen
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MobileNavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
            mobile: true
          }, children))));
        })));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BannerPositioningWrapper, {
        banner: banner
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], null, children))));
    }
  });
};
SiteNav.propTypes = process.env.NODE_ENV !== "production" ? {
  banner: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  mobileBreakpoint: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  mobileToggleTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
SiteNav.defaultProps = {
  banner: false,
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_4__.breakpoints.md,
  mobileToggleTitle: "Site Navigation"
};
SiteNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_8__["default"].Item;
SiteNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_8__["default"].Link;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteNav);

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var SubNav = function SubNav(_ref) {
  var children = _ref.children,
    restProps = _objectWithoutProperties(_ref, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", restProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sub: true
  }, children));
};
SubNav.propTypes = process.env.NODE_ENV !== "production" ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node).isRequired
} : {};
SubNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item;
SubNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubNav);

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 23"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.774 5.866c2.632.097 4.834-2.879 4.448-5.285-1.998.161-4.834 2.224-4.448 5.285zm.613.849c1.31 0 2.342-1.128 4.286-1.128 2.62 0 4.297 2.514 4.297 2.514s-2.557 1.375-2.557 4.36c0 3.546 3.212 4.577 3.212 4.577S17.09 23 14.243 23c-1.6 0-1.708-.913-3.835-.913-1.847 0-2.47.913-3.878.913C3.845 23 .375 17.188.375 12.462c0-4.91 3.513-6.875 5.715-6.875 1.933 0 2.74 1.128 4.297 1.128z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 9"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4.573.135c.19-.18.508-.18.705 0a.43.43 0 010 .639l-3.577 3.27h11.805c.275.001.494.201.494.453 0 .251-.219.458-.494.458H1.701L5.278 8.22c.19.18.19.47 0 .645a.527.527 0 01-.705 0L.148 4.819a.418.418 0 010-.638L4.573.135z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 11"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M1.014 9.43c-.095.088-.152.133-.241.133H.709A.27.27 0 01.5 9.309C.633 5.633 2.938 3.335 7 3.335V.898c0-.108.057-.197.152-.241a.287.287 0 01.286.025l5.954 4.609c.064.044.108.12.108.209a.255.255 0 01-.108.21l-5.954 4.608a.229.229 0 01-.165.057.285.285 0 01-.12-.032.259.259 0 01-.153-.241V7.665c-2.71 0-5.008.545-5.986 1.764z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 13"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M.241 8.233a.828.828 0 010-1.162L7.236.076A.283.283 0 017.42 0h4.768A.81.81 0 0113 .813V5.58c0 .063-.032.14-.076.184l-6.995 6.995a.828.828 0 01-1.162 0L.241 8.233zm8.697-5.39c0 .68.54 1.22 1.218 1.22.68 0 1.219-.54 1.219-1.22 0-.678-.54-1.218-1.219-1.218s-1.219.54-1.219 1.219z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 15"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8.25.938v13.747a.319.319 0 01-.19.3C8.023 15 7.972 15 7.935 15a.345.345 0 01-.22-.088L4.5 11.704l-3.215 3.208c-.08.088-.22.103-.345.073a.319.319 0 01-.19-.3V.937c0-.52.417-.937.938-.937h5.625c.52 0 .937.417.937.938z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 8"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 .502v6.996c0 .1-.053.2-.152.24-.03.012-.07.012-.1.012a.276.276 0 01-.176-.07L9 5.096V7c0 .416-.334.75-.75.75H.75A.748.748 0 010 7V1C0 .584.334.25.75.25h7.5C8.666.25 9 .584 9 1v1.904L11.572.32c.065-.07.176-.082.276-.058.1.04.152.14.152.24z",
    fill: "inherit",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 9"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.279.208L7.071 8.142.863.208z"
  }));
});

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 28"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.797 11.5a.54.54 0 01-.156.359L9.36 19.14c-.094.094-.234.156-.359.156s-.266-.063-.359-.156l-7.281-7.281c-.094-.094-.156-.234-.156-.359s.063-.266.156-.359l.781-.781a.508.508 0 01.359-.156.54.54 0 01.359.156l6.141 6.141 6.141-6.141c.094-.094.234-.156.359-.156s.266.063.359.156l.781.781a.536.536 0 01.156.359z"
  }));
});

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.6 9l6.4 6.26L9.2 18 0 9l9.2-9L12 2.74z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.4 9L0 15.26 2.8 18 12 9 2.8 0 0 2.74z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8 0c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm3.54 11.54l.944-.946L9.22 7.336 8 2H6.664v6c0 .336.133.688.39.945.079.07.15.125.227.188l4.258 2.406z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(-1)",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    transform: "rotate(-45 7.768 7.268)",
    x: "6.768",
    y: "-1.732",
    width: "2",
    height: "18",
    rx: "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    transform: "rotate(45 7.768 7.268)",
    x: "6.768",
    y: "-1.732",
    width: "2",
    height: "18",
    rx: "1"
  })));
});

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.465 6.047a.19.19 0 01.043.121.18.18 0 01-.043.117l-1.18 1.18a.18.18 0 01-.117.043.19.19 0 01-.121-.043L4 5.418 1.953 7.465a.19.19 0 01-.121.043.18.18 0 01-.117-.043l-1.18-1.18a.18.18 0 01-.043-.117.19.19 0 01.043-.121L2.582 4 .535 1.953a.19.19 0 01-.043-.121.18.18 0 01.043-.117l1.18-1.18a.18.18 0 01.117-.043.19.19 0 01.121.043L4 2.582 6.047.535a.19.19 0 01.121-.043.18.18 0 01.117.043l1.18 1.18a.18.18 0 01.043.117.19.19 0 01-.043.121L5.418 4l2.047 2.047z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 16"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M.857 14.333C.857 15.25 1.63 16 2.571 16H9.43c.942 0 1.714-.75 1.714-1.667v-10H.857v10zM12 .833H9L8.143 0H3.857L3 .833H0V2.5h12V.833z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 4"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "8",
    cy: "2",
    r: "1.5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "14",
    cy: "2",
    r: "1.5"
  })));
});

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 13"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11.415 13H.585a.27.27 0 01-.272-.273v-1.625a.27.27 0 01.272-.267h10.83a.27.27 0 01.273.267v1.625a.27.27 0 01-.273.273zm.196-8.74L6.197 9.673A.331.331 0 016 9.75a.331.331 0 01-.197-.076L.39 4.259C.313 4.183.3 4.062.326 3.955a.287.287 0 01.26-.165h2.978V.273A.27.27 0 013.835 0h4.33a.27.27 0 01.273.273V3.79h2.977c.107 0 .215.063.26.165.025.107.012.228-.064.304z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 2.125l-11 8.25-11-8.25A1.37 1.37 0 011.375.75h19.25A1.37 1.37 0 0122 2.125zM0 4.595l11 8.25 11-8.25v11.28a1.37 1.37 0 01-1.375 1.375H1.375A1.37 1.37 0 010 15.875V4.595z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 10"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22 5.001C22 7.761 19.793 10 17.07 10s-4.93-2.238-4.93-4.999C12.14 2.239 14.346 0 17.07 0S22 2.239 22 5.001zM4.93 0C2.207 0 0 2.239 0 5.001 0 7.761 2.207 10 4.93 10s4.93-2.238 4.93-4.999C9.86 2.239 7.653 0 4.93 0z"
  }));
});

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.625 7.875c.624 0 1.125.501 1.125 1.125v7.875c0 .624-.501 1.125-1.125 1.125H1.375A1.122 1.122 0 01.25 16.875V9c0-.624.501-1.125 1.125-1.125H2.5V4.5C2.5 2.021 4.521 0 7 0s4.5 2.021 4.5 4.5v3.375h1.125zM4.75 4.5v3.375h4.5V4.5A2.243 2.243 0 007 2.25 2.243 2.243 0 004.75 4.5z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 12"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7 6.875l-7-5.25C0 1.14.39.75.875.75h12.25c.485 0 .875.39.875.875l-7 5.25zm0 1.572l7-5.25v7.178c0 .485-.39.875-.875.875H.875A.872.872 0 010 10.375V3.197l7 5.25z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 12"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M1.667 1.667H13M1.667 6.333H13M1.667 11H13",
    stroke: "inherit",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }));
});

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M3.894 11H.231A.23.23 0 010 10.769V.231A.23.23 0 01.231 0h3.663a.23.23 0 01.231.231v10.538a.23.23 0 01-.231.231zm6.875 0H7.106a.23.23 0 01-.231-.231V.231A.23.23 0 017.106 0h3.663A.23.23 0 0111 .231v10.538a.23.23 0 01-.231.231z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 1.668c0 .034 0 .068-.014.116-.8 6.364-5.851 11.403-12.202 12.202-.048.014-.082.014-.116.014s-.082 0-.11-.014a.347.347 0 01-.163-.164L.014 10.356a.316.316 0 01.15-.376l3.821-1.914c.117-.061.246-.027.342.055l1.86 1.88A11.76 11.76 0 009.98 6.187l-1.859-1.86c-.082-.096-.116-.225-.055-.342L9.98.165a.316.316 0 01.376-.151l3.466 1.38c.062.035.13.096.144.165a.21.21 0 01.034.109z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M.42 20a.432.432 0 01-.234-.068A.402.402 0 010 19.58V.42C0 .273.068.137.186.068a.406.406 0 01.42-.02l19.16 9.58A.398.398 0 0120 10a.398.398 0 01-.234.371l-19.16 9.58A.438.438 0 01.42 20z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 13"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.882 6.118H13v.764H6.882V13h-.764V6.882H0v-.764h6.118V0h.764v6.118z",
    fillRule: "nonzero"
  }));
});

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 15"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5.623 0A5.626 5.626 0 00-.002 5.625a5.626 5.626 0 005.625 5.625 5.507 5.507 0 003.003-.872l4.233 4.256c.25.241.58.366.887.366a1.251 1.251 0 00.886-2.139l-4.255-4.233c.556-.864.871-1.89.871-3.003A5.626 5.626 0 005.623 0zm0 9.375a3.757 3.757 0 01-3.75-3.75 3.757 3.757 0 013.75-3.75 3.757 3.757 0 013.75 3.75 3.757 3.757 0 01-3.75 3.75z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.895 7.392l-4.377 4.359 1.107 5.81a.4.4 0 01-.167.377.389.389 0 01-.21.062.361.361 0 01-.203-.062L9 14.687l-5.045 3.251a.39.39 0 01-.413 0 .4.4 0 01-.167-.377l1.107-5.81-4.377-4.36C0 7.296-.018 7.129.018 6.98a.383.383 0 01.36-.229h5.748L8.648.246A.402.402 0 019 0c.15 0 .29.105.352.246l2.522 6.504h5.748c.15 0 .299.08.36.229.036.149.018.316-.087.413z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 15"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 14.063v.622c0 .176-.14.315-.315.315H.315A.313.313 0 010 14.685v-.623c0-3.127 5.625-2.497 5.625-5.002 0 0-1.875-1.875-1.875-5.31A3.757 3.757 0 017.5 0a3.757 3.757 0 013.75 3.75c0 3.435-1.875 5.31-1.875 5.31 0 2.505 5.625 1.875 5.625 5.002z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 18"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M.986 0h18v18h-18V0zm1.96 6.204l.697.888s.87-.679 1.183-.679c.195 0 .61.226.87 1.01.262.783 1.361 4.843 1.428 5.03.3.84.696 2.401 1.914 2.628 1.219.226 2.768-1.01 3.62-1.915.853-.905 4.213-4.769 4.352-7.084.129-2.14-.574-2.637-.888-2.836-.574-.366-1.531-.488-2.437-.175-.905.314-2.28 1.34-2.645 3.168 0 0 1.236-.452 1.688-.017.453.435.331 1.392-.052 2.106-.383.713-1.462 2.367-1.862 2.419-.4.052-.714-.731-.766-.94-.052-.209-.714-3.08-.957-4.751-.244-1.671-1.306-1.95-1.81-1.95-.505 0-1.375.383-4.334 3.098z"
  }));
});

/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 14"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.417 0c3.876 0 7 3.124 7 7s-3.124 7-7 7-7-3.124-7-7 3.124-7 7-7zm.875 12.544c.875 0 2.625-1.463 2.625-3.5 0-1.135-.91-2.044-2.044-2.044H7.71c-.875 0-1.463-.438-1.463-1.019 0-.41.328-.731.731-.731.581 0 .602.581 1.019.581.328 0 .588-.26.588-.581 0-.567-.28-.861-.554-1.135.164-.307.533-1.114.554-2.283a.295.295 0 00-.246-.294 6.012 6.012 0 00-.923-.082c-2.461.082-4.081 1.251-4.081 3.213 0 1.75 1.456 3.206 3.206 3.206h.048a1.907 1.907 0 00-.048.438 1.89 1.89 0 001.456 1.845v2.092c0 .164.13.294.294.294z",
    fillRule: "evenodd"
  }));
});

/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    stroke: "inherit",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21 8.667H1",
    strokeLinecap: "square"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "square",
    strokeLinejoin: "round",
    d: "M1 3h20v18H1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7 1v4M15 1v4",
    strokeLinecap: "round"
  })));
});

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 11"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4.379 6.328l-2.122-2.12-2.121 2.12L3.318 9.51l1.06 1.061 7.779-7.778L10.036.672 4.379 6.328z",
    stroke: "none",
    strokeWidth: "1"
  }));
});

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.207 2.46c0 .33-.062.642-.191.935a2.702 2.702 0 01-.508.777 2.27 2.27 0 01-.758.531 2.282 2.282 0 01-.934.192 2.3 2.3 0 01-.937-.192 2.385 2.385 0 01-.766-.531 2.583 2.583 0 01-.52-.777 2.362 2.362 0 01-.19-.934c0-.332.066-.648.19-.95.13-.3.302-.562.52-.788.219-.227.473-.403.766-.532A2.3 2.3 0 0113.816 0c.332 0 .641.063.934.191.293.13.547.305.758.532.21.226.379.488.508.789.129.3.191.617.191.949zm0 7.419c0 .348-.062.664-.191.957-.13.297-.297.55-.508.77a2.358 2.358 0 01-1.692.71c-.332 0-.644-.066-.937-.191a2.453 2.453 0 01-1.285-1.29 2.448 2.448 0 010-1.902c.129-.3.3-.562.52-.78a2.47 2.47 0 01.765-.516c.293-.13.605-.196.937-.196.332 0 .641.067.934.196.293.125.547.3.758.515.21.22.379.48.508.782.129.3.191.617.191.945zm-.066 7.422a2.33 2.33 0 01-.676 1.672 2.354 2.354 0 01-3.297 0 2.33 2.33 0 01-.676-1.672c0-.317.059-.617.18-.903.121-.285.285-.535.496-.753.21-.22.46-.391.746-.512a2.354 2.354 0 011.805 0c.285.12.535.293.746.512.21.218.375.468.496.753.117.286.18.586.18.903zM8.336 2.46c0 .328-.066.64-.191.934a2.702 2.702 0 01-.508.777 2.27 2.27 0 01-.758.531 2.282 2.282 0 01-.934.192 2.343 2.343 0 01-1.703-.723 2.583 2.583 0 01-.52-.777 2.295 2.295 0 01-.19-.934c0-.332.062-.648.19-.95.13-.3.301-.562.52-.788A2.343 2.343 0 015.945 0c.332 0 .64.063.934.191.293.13.547.305.758.532.21.226.379.488.508.789.125.3.19.617.19.949zm0 7.418c0 .348-.066.664-.191.957-.13.297-.297.55-.508.77a2.358 2.358 0 01-1.692.71c-.332 0-.644-.066-.937-.191a2.436 2.436 0 01-1.285-1.29 2.34 2.34 0 01-.192-.956c0-.328.063-.645.192-.945.129-.301.3-.563.52-.782.214-.214.472-.39.765-.515.293-.13.605-.196.937-.196.332 0 .64.067.934.196.293.125.547.3.758.515.21.22.379.48.508.782.125.3.19.617.19.945zm0 7.422c0 .347-.066.664-.191.957-.13.293-.297.55-.508.77-.211.214-.465.39-.758.515a2.285 2.285 0 01-.934.195c-.332 0-.644-.066-.937-.195a2.425 2.425 0 01-1.477-2.242 2.445 2.445 0 01.71-1.727c.216-.215.474-.39.767-.515.293-.13.605-.196.937-.196.332 0 .64.067.934.196.293.125.547.3.758.515.21.219.379.477.508.778.125.3.19.617.19.949zm0 0",
    fillRule: "nonzero",
    fill: "inherit",
    fillOpacity: "1"
  }));
});

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 35 26"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    strokeWidth: "1",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.5 0L35 26H0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M19.446 9.238l-.576 8.874h-1.746l-.576-8.874h2.898zm-2.862 11.484c0-.792.63-1.44 1.404-1.44.792 0 1.44.648 1.44 1.44 0 .792-.648 1.422-1.44 1.422a1.41 1.41 0 01-1.404-1.422z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
});

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 14"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2",
    stroke: "inherit",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12 2h5.5M.5 2H4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "6.546",
    cy: "2.046",
    r: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7 10H.5M17.5 10H15"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2"
  })));
});

/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 23"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.82 17.886l3.11 3.087a1.18 1.18 0 010 1.68 1.202 1.202 0 01-1.692 0l-3.11-3.088a8.375 8.375 0 01-5.013 1.654c-4.623 0-8.371-3.72-8.371-8.31 0-4.589 3.748-8.309 8.37-8.309 4.624 0 8.372 3.72 8.372 8.31 0 1.866-.62 3.589-1.666 4.976zm-6.705.96c3.302 0 5.98-2.658 5.98-5.936s-2.678-5.936-5.98-5.936c-3.302 0-5.98 2.658-5.98 5.936s2.678 5.935 5.98 5.935zM1.088 2.3C.488 2.3 0 1.785 0 1.15 0 .515.487 0 1.088 0h16.36c.601 0 1.088.515 1.088 1.15 0 .635-.487 1.15-1.088 1.15H1.088zM.623 8.05C.279 8.05 0 7.535 0 6.9c0-.635.279-1.15.623-1.15h9.366c.344 0 .623.515.623 1.15 0 .635-.279 1.15-.623 1.15H.623zm0 5.75C.279 13.8 0 13.285 0 12.65c0-.635.279-1.15.623-1.15h9.366c.344 0 .623.515.623 1.15 0 .635-.279 1.15-.623 1.15H.623z",
    fill: "inherit",
    fillRule: "nonzero",
    stroke: "none",
    strokeWidth: "1"
  }));
});

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppleSVG: () => (/* reexport safe */ _assets_svg_inline_icons_apple_svg__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   ArrowLeftSVG: () => (/* reexport safe */ _assets_svg_inline_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   ArrowOutSVG: () => (/* reexport safe */ _assets_svg_inline_icons_arrow_out_svg__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   ArrowRightSVG: () => (/* reexport safe */ _assets_svg_inline_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Background: () => (/* reexport safe */ _components_Background__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Banner: () => (/* reexport safe */ _components_Banner__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   BestBuySVG: () => (/* reexport safe */ _assets_svg_inline_icons_best_buy_svg__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   BookmarkSVG: () => (/* reexport safe */ _assets_svg_inline_icons_bookmark_svg__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   Button: () => (/* reexport safe */ _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   CalendarSVG: () => (/* reexport safe */ _assets_svg_inline_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   CameraSVG: () => (/* reexport safe */ _assets_svg_inline_icons_camera_svg__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   CaretDownSVG: () => (/* reexport safe */ _assets_svg_inline_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   CheckMarkSVG: () => (/* reexport safe */ _assets_svg_inline_icons_check_mark_svg__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   ChevronDownSVG: () => (/* reexport safe */ _assets_svg_inline_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   ChevronLeftSVG: () => (/* reexport safe */ _assets_svg_inline_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   ChevronRightSVG: () => (/* reexport safe */ _assets_svg_inline_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   ClockSVG: () => (/* reexport safe */ _assets_svg_inline_icons_clock_svg__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   CloseMiniSVG: () => (/* reexport safe */ _assets_svg_inline_icons_close_mini_svg__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   CloseSVG: () => (/* reexport safe */ _assets_svg_inline_icons_close_svg__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   Code: () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Collapse: () => (/* reexport safe */ _components_utils_Collapse__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   DeleteSVG: () => (/* reexport safe */ _assets_svg_inline_icons_delete_svg__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   DotsSVG: () => (/* reexport safe */ _assets_svg_inline_icons_dots_svg__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   DownloadSVG: () => (/* reexport safe */ _assets_svg_inline_icons_download_svg__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   DraggableSVG: () => (/* reexport safe */ _assets_svg_inline_icons_draggable_svg__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   EmailSVG: () => (/* reexport safe */ _assets_svg_inline_icons_email_svg__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   ErrorSVG: () => (/* reexport safe */ _assets_svg_inline_icons_error_svg__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   FacebookSVG: () => (/* reexport safe */ _assets_svg_inline_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   FilterSVG: () => (/* reexport safe */ _assets_svg_inline_icons_filter_svg__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   FlickrSVG: () => (/* reexport safe */ _assets_svg_inline_icons_flickr_svg__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   Footer: () => (/* reexport safe */ _components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Hamburger: () => (/* reexport safe */ _components_Hamburger__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   InstagramSVG: () => (/* reexport safe */ _assets_svg_inline_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   LinkSVG: () => (/* reexport safe */ _assets_svg_inline_icons_link_svg__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   LinkedInSVG: () => (/* reexport safe */ _assets_svg_inline_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   ListSearchSVG: () => (/* reexport safe */ _assets_svg_inline_icons_list_search_svg__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   Loader: () => (/* reexport safe */ _components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   LockSVG: () => (/* reexport safe */ _assets_svg_inline_icons_lock_svg__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   MailSVG: () => (/* reexport safe */ _assets_svg_inline_icons_mail_svg__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   MarkerSVG: () => (/* reexport safe */ _assets_svg_inline_icons_marker_svg__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   MenuSVG: () => (/* reexport safe */ _assets_svg_inline_icons_menu_svg__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   Nav: () => (/* reexport safe */ _components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Navbar: () => (/* reexport safe */ _components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   PauseSVG: () => (/* reexport safe */ _assets_svg_inline_icons_pause_svg__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   PhoneAltSVG: () => (/* reexport safe */ _assets_svg_inline_icons_phone_alt_svg__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   PhoneSVG: () => (/* reexport safe */ _assets_svg_inline_icons_phone_svg__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   PlaySVG: () => (/* reexport safe */ _assets_svg_inline_icons_play_svg__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   PlusSVG: () => (/* reexport safe */ _assets_svg_inline_icons_plus_svg__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   SearchSVG: () => (/* reexport safe */ _assets_svg_inline_icons_search_svg__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   SiteNav: () => (/* reexport safe */ _components_SiteNav__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   SnapchatSVG: () => (/* reexport safe */ _assets_svg_inline_icons_snapchat_svg__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   StarSVG: () => (/* reexport safe */ _assets_svg_inline_icons_star_svg__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   SubNav: () => (/* reexport safe */ _components_SubNav__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   TwitterSVG: () => (/* reexport safe */ _assets_svg_inline_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   UserSVG: () => (/* reexport safe */ _assets_svg_inline_icons_user_svg__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   VimeoSVG: () => (/* reexport safe */ _assets_svg_inline_icons_vimeo_svg__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   WorldSVG: () => (/* reexport safe */ _assets_svg_inline_icons_world_svg__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   YouTubeSVG: () => (/* reexport safe */ _assets_svg_inline_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   media: () => (/* reexport safe */ _media__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _components_utils_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _components_SiteNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43);
/* harmony import */ var _components_SubNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44);
/* harmony import */ var _assets_svg_inline_icons_apple_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45);
/* harmony import */ var _assets_svg_inline_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);
/* harmony import */ var _assets_svg_inline_icons_arrow_out_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47);
/* harmony import */ var _assets_svg_inline_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17);
/* harmony import */ var _assets_svg_inline_icons_best_buy_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48);
/* harmony import */ var _assets_svg_inline_icons_bookmark_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49);
/* harmony import */ var _assets_svg_inline_icons_camera_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50);
/* harmony import */ var _assets_svg_inline_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51);
/* harmony import */ var _assets_svg_inline_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52);
/* harmony import */ var _assets_svg_inline_icons_chevron_left_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(53);
/* harmony import */ var _assets_svg_inline_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54);
/* harmony import */ var _assets_svg_inline_icons_clock_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55);
/* harmony import */ var _assets_svg_inline_icons_close_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56);
/* harmony import */ var _assets_svg_inline_icons_close_mini_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57);
/* harmony import */ var _assets_svg_inline_icons_delete_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(58);
/* harmony import */ var _assets_svg_inline_icons_dots_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59);
/* harmony import */ var _assets_svg_inline_icons_download_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(60);
/* harmony import */ var _assets_svg_inline_icons_email_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61);
/* harmony import */ var _assets_svg_inline_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(22);
/* harmony import */ var _assets_svg_inline_icons_flickr_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(62);
/* harmony import */ var _assets_svg_inline_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(23);
/* harmony import */ var _assets_svg_inline_icons_link_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(18);
/* harmony import */ var _assets_svg_inline_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(24);
/* harmony import */ var _assets_svg_inline_icons_lock_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(63);
/* harmony import */ var _assets_svg_inline_icons_mail_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(64);
/* harmony import */ var _assets_svg_inline_icons_marker_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(20);
/* harmony import */ var _assets_svg_inline_icons_menu_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(65);
/* harmony import */ var _assets_svg_inline_icons_pause_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(66);
/* harmony import */ var _assets_svg_inline_icons_phone_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(21);
/* harmony import */ var _assets_svg_inline_icons_phone_alt_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(67);
/* harmony import */ var _assets_svg_inline_icons_play_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(68);
/* harmony import */ var _assets_svg_inline_icons_plus_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(69);
/* harmony import */ var _assets_svg_inline_icons_search_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(70);
/* harmony import */ var _assets_svg_inline_icons_snapchat_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(25);
/* harmony import */ var _assets_svg_inline_icons_star_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(71);
/* harmony import */ var _assets_svg_inline_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(26);
/* harmony import */ var _assets_svg_inline_icons_user_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(72);
/* harmony import */ var _assets_svg_inline_icons_vimeo_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(73);
/* harmony import */ var _assets_svg_inline_icons_world_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(74);
/* harmony import */ var _assets_svg_inline_icons_youtube_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(27);
/* harmony import */ var _assets_svg_inline_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(75);
/* harmony import */ var _assets_svg_inline_icons_check_mark_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(76);
/* harmony import */ var _assets_svg_inline_icons_draggable_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(77);
/* harmony import */ var _assets_svg_inline_icons_error_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(78);
/* harmony import */ var _assets_svg_inline_icons_filter_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(79);
/* harmony import */ var _assets_svg_inline_icons_list_search_svg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(80);
/*
  utils
*/


/*
  components
*/













/*
  svgs
*/
// icons (fastspot)














// new


























// icons (other)






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
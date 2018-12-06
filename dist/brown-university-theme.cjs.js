/*! brown-university-theme v0.3.3 */
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _components_Code__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_SiteNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SiteNav", function() { return _components_SiteNav__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BannerText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  text-align: center;\n  top: ", ";\n  width: 100%;\n  z-index: 15;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  max-width: 100%;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: hidden;\n  max-height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 5;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






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


var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var BannerImageColorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (props) {
  return getMaxHeight(props);
});
var BannerImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject3());
var BannerChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4(), function (_ref2) {
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
      children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerImageColorWrapper, {
    size: size
  }, src ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerImage, {
    src: src,
    alt: "Banner"
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 2600 600"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color]
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerChildrenWrapper, {
    size: size
  }, children));
};

Banner.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['emerald', 'red', 'brown', 'yellow', 'gray', 'sand', 'lightBrown', 'mediumBrown', 'navy', 'skyblue']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default', 'small', 'medium', 'large']),
  src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
} : undefined;
Banner.defaultProps = {
  color: 'emerald',
  size: 'default',
  src: null,
  children: null
};
Banner.Text = _BannerText__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _constants_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 2.5em;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.9em;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/*
  inner Tag component
*/

var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].white, _constants_typography__WEBPACK_IMPORTED_MODULE_5__["serif"], _constants_media__WEBPACK_IMPORTED_MODULE_4__["default"].md(_templateObject2()));
/*
  outer BannerText component
*/

var BannerText = function BannerText(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, props);
};

BannerText.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (BannerText);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  black: '#3B302C',
  brown: '#4E3629',
  red: '#C00404',
  yellow: '#FFC72C',
  gray: '#98A4AE',
  lightGray: '#F7F7F7',
  darkGray: '#3C3C3C',
  beige: '#EFECE5',
  sand: '#CCC6B8',
  lightBrown: '#A79A94',
  mediumBrown: '#745D54',
  skyblue: '#59CBE8',
  emerald: '#00B398',
  emeraldLight: '#AAD6CB',
  emeraldDark: '#008672',
  navy: '#003C71',
  white: '#FFFFFF',
  trueblack: '#000000'
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: ", "px) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = ({
  sm: function sm() {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].sm, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  },
  md: function md() {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].md, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  },
  lg: function lg() {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].lg, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  },
  xl: function xl() {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].xl, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sans", function() { return sans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sansBold", function() { return sansBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serif", function() { return serif; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mono", function() { return mono; });
var sans = 'Circular-Book, Arial, Helvetica, sans-serif';
var sansBold = 'Circular-Bold, Circular-Book, Arial, Helvetica, sans-serif';
var serif = 'minion-pro, "Times New Roman", serif';
var mono = '"Bitstream Vera Sans Mono", Menlo, Monaco, Consolas, Courier, monospace';

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        &::after {\n          ", "\n          border-color: transparent transparent transparent ", ";\n        }\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      &::after {\n        ", "\n        ", "\n        border-color: transparent transparent transparent ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-color: ", ";\n  box-shadow: inset 0 0 0 1px ", ";\n  color: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  ", "\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: inset 0 0 0 1px ", ";\n    color: ", ";\n\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  -ms-transform: translate3d(4px, 0, 0);\n  -webkit-transform: translate3d(4px, 0, 0);\n  transform: translate3d(4px, 0, 0);\n  transition: all 0.25s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  -ms-transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  transition: all 0.25s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-color: transparent transparent transparent transparent;\n  border-style: solid;\n  border-width: 3.5px 0 3.5px 5px;\n  content: '';\n  display: inline-block;\n  height: 0;\n  position: relative;\n  right: -8px;\n  top: -1px;\n  transition: border 0.25s, color 0.25s;\n  width: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-width: 0;\n  display: inline-block;\n  font-family: ", ";\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  line-height: 1.5;\n  padding: 12px 25px 12px 20px;\n  text-align: center;\n  text-decoration: none !important;\n  text-transform: uppercase;\n  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/*
  css mixins
*/

var buttonCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), _constants_typography__WEBPACK_IMPORTED_MODULE_5__["sans"]);
var buttonAfterCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
var buttonAfterShiftCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
var buttonAfterShiftHoverCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
/*
  css prop getters
*/

var getBackgroundColor = function getBackgroundColor(_ref) {
  var color = _ref.color,
      outline = _ref.outline,
      inverse = _ref.inverse;

  if (inverse) {
    if (outline) {
      return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
    }

    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
  }

  if (outline) {
    return 'transparent';
  }

  return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
};

var getBoxShadow = function getBoxShadow(_ref2) {
  var color = _ref2.color,
      inverse = _ref2.inverse;

  if (inverse) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
  }

  return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
};

var getColor = function getColor(_ref3) {
  var color = _ref3.color,
      outline = _ref3.outline,
      inverse = _ref3.inverse;

  if (inverse) {
    if (outline) {
      return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
    }

    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gray;
  }

  if (outline) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
  }

  return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
};

var getCursor = function getCursor(_ref4) {
  var disabled = _ref4.disabled,
      href = _ref4.href;

  if (disabled && !href) {
    return 'not-allowed';
  }

  return 'pointer';
};

var getFontSize = function getFontSize(_ref5) {
  var size = _ref5.size;

  switch (size) {
    case 'small':
      return '0.55em';

    case 'large':
      return '0.95em';

    default:
      return '0.75em';
  }
};

var getOpacity = function getOpacity(_ref6) {
  var disabled = _ref6.disabled;

  if (disabled) {
    return '0.65';
  }

  return '1';
};

var getPointerEvents = function getPointerEvents(_ref7) {
  var disabled = _ref7.disabled,
      href = _ref7.href;

  if (disabled && href) {
    return 'none';
  }

  return 'auto';
};

var getBackgroundColorWithHover = function getBackgroundColorWithHover(_ref8) {
  var color = _ref8.color,
      outline = _ref8.outline,
      inverse = _ref8.inverse,
      disabled = _ref8.disabled;

  if (disabled) {
    return getBackgroundColor({
      color: color,
      outline: outline,
      inverse: inverse
    });
  }

  if (inverse) {
    if (outline) {
      return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
    }

    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
  }

  if (outline) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
  }

  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.1, _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color]);
};

var getBoxShadowWithHover = function getBoxShadowWithHover(_ref9) {
  var color = _ref9.color,
      outline = _ref9.outline,
      inverse = _ref9.inverse,
      disabled = _ref9.disabled;

  if (disabled) {
    return getBoxShadow({
      color: color,
      inverse: inverse
    });
  }

  if (inverse) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
  }

  if (outline) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color];
  }

  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.1, _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"][color]);
};

var getColorWithHover = function getColorWithHover(_ref10) {
  var color = _ref10.color,
      outline = _ref10.outline,
      inverse = _ref10.inverse,
      disabled = _ref10.disabled;

  if (disabled) {
    return getColor({
      color: color,
      outline: outline,
      inverse: inverse
    });
  }

  if (inverse && outline) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].gray;
  }

  return _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].white;
};
/*
  inner Tag component
*/


var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5(), buttonCSS, function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return getBoxShadow(props);
}, function (props) {
  return getColor(props);
}, function (props) {
  return getCursor(props);
}, function (props) {
  return getFontSize(props);
}, function (props) {
  return getOpacity(props);
}, function (props) {
  return getPointerEvents(props);
}, function (props) {
  return props.href && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6(), buttonAfterCSS, buttonAfterShiftCSS, getColor(props));
}, function (props) {
  return getBackgroundColorWithHover(props);
}, function (props) {
  return getBoxShadowWithHover(props);
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return props.href && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7(), buttonAfterShiftHoverCSS, getColorWithHover(props));
});
/*
  outer Button component
*/

var deriveTag = function deriveTag(_ref11) {
  var href = _ref11.href,
      tag = _ref11.tag;

  if (href && tag === 'button') {
    return 'a';
  }

  return tag;
};

var Button = function Button(props) {
  var derivedTag = deriveTag(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, _extends({
    as: derivedTag,
    type: derivedTag === 'button' && props.onClick ? 'button' : undefined
  }, props));
};

Button.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default', 'small', 'large']),
  outline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;
Button.defaultProps = {
  color: 'red',
  size: 'default',
  outline: false,
  inverse: false,
  disabled: false,
  tag: 'button',
  onClick: null,
  href: null
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border: 0.5px solid #dfe3e6;\n  border-radius: 3px;\n  font-family: ", ";\n  font-size: 0.65em;\n  padding: 0.5em 0.75em;\n  white-space: pre-wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






/*
  inner Tag component
*/

var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.code(_templateObject(), _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].lightGray, _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].black, _constants_typography__WEBPACK_IMPORTED_MODULE_4__["mono"]);
/*
  outer Code component
*/

var Code = function Code(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, props);
};

Code.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        -webkit-transform: rotate(-90deg);\n        -ms-transform: rotate(-90deg);\n        transform: rotate(-90deg);\n        transition: bottom 0.1s ease-out,\n          -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        -webkit-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n        -o-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      -webkit-transform: rotate(225deg);\n      -ms-transform: rotate(225deg);\n      transform: rotate(225deg);\n      -webkit-transition-delay: 0.12s;\n      -o-transition-delay: 0.12s;\n      transition-delay: 0.12s;\n      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      -o-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  transition-duration: .22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\n  ", "\n\n  &&:before {\n    ", "\n    ", "\n    ", "\n    transition-duration: .15s;\n    transition: top .1s .25s ease-in, opacity .1s ease-in;\n    opacity: ", ";\n    top: ", ";\n\n    ", "\n  }\n\n  &&:after {\n    ", "\n    ", "\n    ", "\n    transition-duration: .15s;\n    transition: bottom .1s .25s ease-in, transform .22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    bottom: ", ";\n\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  height: 24px;\n  padding: 0 25px 3px 0;\n  width: 30px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  transition-property: transform;\n  transition-timing-function: ease;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  content: '';\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 3px;\n  position: absolute;\n  width: 25px;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/*
  css mixins
*/

var hamburgerBarCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), function (_ref) {
  var color = _ref.color;
  return _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"][color];
});
var hamburgerBarPseudoElementCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
var hamburgerTransitionCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
/*
  inner components
*/

var HamburgerButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject4());
var HamburgerBars = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject5(), hamburgerBarCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6());
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && '0';
}, function (props) {
  return props.isOpen ? '0' : '-7px';
}, function (props) {
  return props.isOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7());
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen ? '0' : '-7px';
}, function (props) {
  return props.isOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8());
});
/*
  outer Hamburger component
*/

var Hamburger =
/*#__PURE__*/
function (_Component) {
  _inherits(Hamburger, _Component);

  function Hamburger() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hamburger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hamburger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.isOpen
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      return _this.setState(function (_ref2) {
        var isOpen = _ref2.isOpen;
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
        this.setState(function (_ref3) {
          var isOpen = _ref3.isOpen;
          return {
            isOpen: !isOpen
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var color = this.props.color;
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HamburgerButton, {
        type: "button",
        "aria-expanded": isOpen,
        "aria-label": "Toggle navigation",
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HamburgerBars, {
        color: color,
        isOpen: isOpen
      }));
    }
  }]);

  return Hamburger;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Hamburger.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['red', 'gray', 'black', 'white']),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
} : undefined;
Hamburger.defaultProps = {
  color: 'red',
  isOpen: false
};
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_loader_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    #rays {\n      transform-origin: center;\n      transform-box: fill-box;\n      animation: ", " 7s linear infinite;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" 100% { transform: rotate(360deg); } "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/*
  inner components
*/

var spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var LoaderSVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), spin);
/*
  outer Loader component
*/

var Loader = function Loader(_ref) {
  var height = _ref.height;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoaderSVGWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_loader_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: Math.floor(height * 0.77),
    height: height
  }));
};

Loader.propTypes =  true ? {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
} : undefined;
Loader.defaultProps = {
  height: 250
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ version: "1.1", viewBox: "0 0 140 180", role: "img", "aria-labelledby": "title" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "title",
      { id: "title" },
      "Loading..."
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["rays"] || "rays", id: "rays", fill: "#F0F3F5", stroke: "#6C757C", strokeWidth: "1.4", strokeMiterlimit: "10", d: "M102 64.6s-5.1-1.9-7.9-2.1c-3.1-.3-6.9-.5-6.9-.5-2.3-.3-3.7-.7-4.5-.9 0-.4.1-.8.1-1.2 0-.5 0-1-.1-1.5.8-.3 2.2-.6 4.5-.9 0 0 3.8-.2 6.9-.4 2.8-.2 7.9-2.1 7.9-2.1 1.4-.4 2.2-.6 6.4-1.7 0 0 .5 0 0-.2-.2-.1-1.1-.3-1.1-.3s-1.5-.3-4.5-.4H101c-.7 0-3.1 0-4.9.3-1.8.3-6.8.1-6.8.1s-5.6-.6-7.6 1.4l-.1.1c-.2-.4-.4-.7-.6-1.1.4-.3 3.3-2.3 6.3-6.1 0 0 1.8-1.7 4-2.7 2.6-1.1 5.5-4.8 5.5-4.8s1.5-2.3 4.5-3.9c0 0 .4-.2-.1-.2-.2 0-.8.2-.8.2s-2 .9-4.7 2.3c0 0-.9.4-1.5.7-.6.3-2.8 1.4-4.2 2.6-1.2 1.1-4.7 3.6-4.7 3.6s-6.1 3.7-6.7 5.3c-.4-.4-.8-.7-1.3-1 .6-.9 1.3-2.4 1.8-4.6 0 0 .7-2.4 2.5-4.6 1.8-2.2 2.3-6.8 2.3-6.8s.2-2.4 2.1-5.2c0 0 .3-.4-.2-.1-.2.1-.6.6-.6.6s-1.5 1.3-3.3 3.8c0 0-.6.7-1 1.3-.4.5-1.8 2.6-2.5 4.2S75 42.7 75 42.7s-1.7 2.2-2.1 4.4c-.5-.1-.9-.2-1.4-.3.9-2.1.2-5 .2-5s-.9-4.3-.6-5.9c.3-1.8 0-4.2-.1-4.9 0-.7-.2-1.6-.2-1.6-.3-3-.9-5-.9-5s-.2-.6-.3-.8c-.2-.5-.2 0-.2 0 .3 3.4-.6 5.7-.6 5.7s-1.8 4.3-1.3 7.1c.4 2.8-.1 4.8-.1 4.8-.4 2.6-.2 4.5 0 5.6-.5.1-1 .2-1.5.4-.5-2.4-3-4.6-3-4.6s-2.5-3-3.2-5c-.6-1.7-2.2-3.7-2.5-4.2-.4-.5-1-1.3-1-1.3-1.7-2.1-3.2-3.5-3.2-3.5l-.6-.6c-.5-.3-.2.1-.2.1 2 2.8 2.3 5.2 2.3 5.2s.9 4.6 2.7 6.8c1.8 2.2 2.4 4.5 2.4 4.5.8 2.5 1.9 4.1 2.6 4.9-.4.3-.8.7-1.2 1-1-2.1-6.3-3.9-6.3-3.9s-3.2-1.5-4.9-3.2c-1.3-1.3-3.6-2.3-4.2-2.6-.6-.3-1.5-.7-1.5-.7-2.5-1.6-4-2.5-4-2.5s-.6-.2-.8-.2c-.5-.1-.1.2-.1.2 2 2.1 3.8 4.1 3.8 4.1s2.4 3 4.8 4.5c2.3 1.5 4 3.8 4 3.8 2.7 3.1 5.4 3.8 5.4 3.8l1.2.2-.6 1.2-.2-.1c-2-2-6.4-1.5-6.4-1.5s-4.4.3-5.9-.1c-1.8-.4-4.2-.3-4.9-.3s-1.6.1-1.6.1c-3.1 0-5 .6-5 .6s-.6.1-.8.1c-.5.2 0 .2 0 .2 3.4-.1 5.6 1 5.6 1s4.3 1.8 7.1 1.6c2.8-.2 4.8.4 4.8.4 3.9 1.4 6.3 1.6 6.3 1.6h.1c0 .4-.1.7-.1 1.1v.8h-.1s-2.5.2-6.3 1.6c0 0-2 .6-4.8.4-2.8-.2-7.1 1.6-7.1 1.6s-2.2 1.1-5.6 1c0 0-.5 0 0 .2.2.1.8.2.8.2s2 .5 5 .6c0 0 1 .1 1.6.1s3.1.2 4.9-.3c1.6-.4 5.9-.1 5.9-.1s4.4.5 6.4-1.5l.1-.1c.1.4.3.8.5 1.2l-1 .2s-2.8.6-5.4 3.8c0 0-1.7 2.3-4 3.8-2.4 1.5-4.8 4.5-4.8 4.5s-1.8 2-3.8 4.1c0 0-.4.2.1.2.2 0 .8-.2.8-.2s1.6-.8 4-2.5c0 0 .9-.4 1.5-.7.6-.3 2.9-1.3 4.2-2.6 1.7-1.7 4.9-3.2 4.9-3.2s5-1.6 6.2-3.7c.4.4.8.7 1.2 1-.7.9-1.7 2.4-2.4 4.7 0 0-.6 2.2-2.4 4.5-1.8 2.2-2.7 6.8-2.7 6.8s-.4 2.4-2.3 5.2c0 0-.3.4.2.1.2-.1.6-.6.6-.6s1.5-1.3 3.3-3.8c0 0 .6-.7 1-1.3.4-.5 1.9-2.5 2.5-4.2.7-2 3.2-5 3.2-5s2.3-2 2.9-4.3c.5.2 1 .3 1.5.4-.2 1.1-.3 3 0 5.3 0 0 .5 2 .1 4.8s1.3 7.1 1.3 7.1.9 2.3.6 5.7c0 0 0 .5.2 0 .1-.2.3-.8.3-.8s.6-1.9.9-5c0 0 .2-.9.2-1.6 0-.7.4-3.1.1-4.9-.3-1.6.6-5.9.6-5.9s.6-2.6-.1-4.7c.5-.1.9-.1 1.3-.3.5 2.2 2.1 4.2 2.1 4.2s2.6 3.4 3.4 4.9c.8 1.6 2.2 3.7 2.5 4.2.4.5 1 1.3 1 1.3 1.7 2.5 3.3 3.8 3.3 3.8l.6.6c.5.3.2-.1.2-.1-2-2.8-2.1-5.2-2.1-5.2s-.5-4.6-2.3-6.8c-1.8-2.2-2.5-4.6-2.5-4.6-.5-2-1.1-3.4-1.7-4.3.4-.3.9-.7 1.2-1 1 1.7 6.6 5.1 6.6 5.1s3.5 2.5 4.7 3.6c1.3 1.2 3.6 2.3 4.2 2.6.6.3 1.5.7 1.5.7 2.7 1.4 4.7 2.3 4.7 2.3s.6.2.8.2c.5.1.1-.2.1-.2-3-1.6-4.5-3.9-4.5-3.9s-2.9-3.7-5.5-4.8c-2.3-1-4-2.7-4-2.7-2.7-3.5-5.4-5.5-6.1-6 .2-.3.4-.7.5-1 2 2 7.6 1.4 7.6 1.4s5-.2 6.8.1c1.8.3 4.2.3 4.9.3h1.8c3.1 0 4.5-.4 4.5-.4s.9-.2 1.1-.3c.5-.2 0-.2 0-.2-4.1-1.2-4.8-1.3-6.3-1.7z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { className: styles["st5"] || "st5", fill: "#F0F3F5", stroke: "#6C757C", strokeWidth: "1.4", strokeMiterlimit: "10", cx: "69.9", cy: "59.9", r: "13", id: "sun_1_" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#6C757C", id: "sun_eyes__x26__mouth" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M67.1 55.7c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5v-.2c-.1-.2-.8-.4-1.7.2-.5.3-1 .1-.2-.6.9-.8 1.7-1.2 2.5-1.3 1.2-.1 2.9.2 3.6.5.3.1 0 1.7-.1 1.7-.3-.1-.8-.3-1.3-.2h.1M71.2 60c-.3.7-2.8 1-3.3 0-.2-.4-.4-1.3-.1-1.1.6.3 2.6.1 3 0 .3-.1.1-.6.3-.5.3 0 .3.9.1 1.6M77.2 55.9c-.6-.5-1.5-.8-1.8-.5v.1c.1.8-.5 1.5-1.3 1.5-.8.1-1.5-.5-1.5-1.3v-.1c-.5-.2-1.3.1-1.4.1-.1 0-.4-1.5 0-1.7 1.2-.5 5.2-.7 6.4 1.5.1.4 0 .7-.4.4" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: "#F0F3F5", strokeWidth: "9", d: "M26 72h88", id: "cover" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { id: "shield" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#F0F3F5", d: "M32.5 76.4l74.2.1v41.7s2.8 30-36.8 36.2c0 0-36.3-2.9-37.2-35.4l-.2-42.6z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M46.4 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM93.1 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1.1.2-2.9-.6-4.7-.6z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M105.7 77.3H76.2v26.8h29.5V77.3zm-4.4 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3zM63.3 77.3H33.8v26.8h29.5V77.3zm-4.5 21.3h-8.5v1.1h-3.5v-1.1h-8.5V84.3h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M50.8 82.8c-1 0-1.3.5-1.3.5v12.4s1.1-.7 3.5-.1c1.8.5 2.5 0 2.5 0V83.4c-1 .2-2.8-.6-4.7-.6zM47.7 134.3v-12.4s-.3-.6-1.3-.5c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.5 0 3.5 0zM53 134.3c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1 0-1.3.5-1.3.5v12.4c.1 0 1.1-.7 3.5 0z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M38.4 135.7v-12.8h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v14.3h-8.5v1.1h-3.5v-1.1h-7.5c1.2 1.8 2.6 3.5 4.3 5.1 4.7 4.4 12.1 7.4 19.7 9.6v-35.8H33.8l.1 1.1c.2 7.4 1.6 13.5 4.5 18.5z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M64.9 152.4l4.9 1.3 4.9-1.3v-38h31v-8.7h-31V77.3h-9.8v28.4H33.8v8.7h31.1z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M88.7 82.8c-1.8.1-3.6.8-4.7.6v12.3s.7.5 2.5 0c2.4-.7 3.4.1 3.4.1V83.3c.1 0-.2-.5-1.2-.5zM76.2 116.1V152c7.4-2.2 14.8-5 19.8-9.6 1.8-1.6 3.2-3.3 4.5-5.1h-7.6v1.1h-3.5v-1.1h-8.5V123h1.8v-2.6c1.8.4 4.8-.6 6.2-.6 1.5 0 2.2.6 2.2.6s.8-.6 2.2-.6c1.3 0 4.3 1 6.2.6v2.6h1.8v12.9c2.7-4.7 4-10.5 4.4-18.5l-.1-1.2H76.2z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "none", d: "M84.2 122v12.3s.7.5 2.5 0c2.4-.7 3.5.1 3.5.1V122s-.3-.6-1.3-.5c-1.8-.1-3.6.7-4.7.5zM92.1 121.9v12.4s1.1-.7 3.4-.1c1.8.5 2.5 0 2.5 0V122c-1.1.2-2.9-.5-4.7-.6-1-.1-1.2.5-1.2.5z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#6C757C", d: "M32 115.1c0 13.1 3.3 22.2 10.3 28.5 6.9 6.3 17.4 9.5 27.5 11.9 10.5-2.5 20.5-5.5 27.5-11.9s10.3-15.4 10.3-28.5V75.5H32v39.6zm69.3 20.7v-12.9h-1.8v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h7.6c-1.2 1.8-2.7 3.5-4.5 5.1-5 4.6-12.4 7.4-19.8 9.6V116h29.5l.1 1.2c-.4 8.2-1.7 13.9-4.5 18.6zM98 122v12.3s-.7.5-2.5 0c-2.4-.7-3.4.1-3.4.1V122s.3-.6 1.3-.5c1.8-.1 3.6.7 4.6.5zm-7.8-.1v12.4s-1.1-.7-3.5-.1c-1.8.5-2.5 0-2.5 0V122c1.1.2 2.9-.5 4.7-.6 1-.1 1.3.5 1.3.5zm-14-44.6h29.5v26.8H76.2V77.3zm-42.4 0h29.5v26.8H33.8V77.3zm0 28.4h31.1V77.3h9.8v28.4h31.1v8.7H74.7v38l-4.9 1.2-4.9-1.3v-38H33.8v-8.6zm29.5 10.4v35.8c-7.6-2.2-15-5.2-19.7-9.6-1.7-1.6-3.1-3.3-4.3-5.1h7.5v1.1h3.5v-1.1h8.5v-14.3H57v-2.6c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v12.8c-2.9-5-4.3-11.1-4.6-18.5l-.1-1.1h29.6zm-21.6 18.2V122c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4s-1.1-.7-3.5-.1c-1.8.6-2.5.1-2.5.1zm7.9 0v-12.4s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3s-.7.5-2.5 0c-2.5-.7-3.5 0-3.5 0z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#6C757C", d: "M57 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3H57v-2.6zm-9.3 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3zM99.5 81.7c-1.8.4-4.8-.6-6.2-.6-1.5 0-2.2.6-2.2.6s-.8-.6-2.2-.6c-1.3 0-4.3 1-6.2.6v2.6h-1.8v14.3h8.5v1.1h3.5v-1.1h8.5V84.3h-1.8v-2.6zm-9.5 14s-1.1-.7-3.4-.1c-1.8.5-2.5 0-2.5 0V83.4c1.1.2 2.9-.5 4.7-.6 1 0 1.3.5 1.3.5v12.4zm7.8 0s-.7.5-2.5 0c-2.4-.7-3.5.1-3.5.1V83.3s.3-.6 1.3-.5c1.8.1 3.6.8 4.7.6v12.3z" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { id: "clouds_of_ignorance" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["st5"] || "st5", fill: "#F0F3F5", stroke: "#6C757C", strokeWidth: "1.4", strokeMiterlimit: "10", d: "M41 40.3s.6-4.1 5.8-4.6c0 0 .4-8.5 10.9-4.5 0 0 2.2-9.3 12.4-3.8 0 0 8.3-5.3 13.7 4.3 0 0 6.9-2.8 7.9 3.5 0 0 7.6-2.7 9.4 3.8 0 0 5.7-.2 4.7 5.7 0 0-.5 5-9 1.9 0 0-7.7 3.9-11.1-4.8 0 0-6.4 1.9-8.4-4.6 0 0-6.1 4.1-10.8-.5 0 0-3 4.1-8.6 3.2 0 0-2.7 3.3-7.3 2.2 0 0 1.6 7.7-9.4 6.2 0 0-4.3 2.5-6.3-1.8-2-4.6 6.1-6.2 6.1-6.2z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["st6"] || "st6", fill: "none", stroke: "#6C757C", strokeWidth: "1.4", strokeLinecap: "round", strokeMiterlimit: "10", d: "M36.7 45.7s.3-3.5 4.8-3.1" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["st7"] || "st7", fill: "none", stroke: "#6C757C", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M43.3 41s.5-2.8 3.7-2.7M48.9 36.9s1.3-5.6 6.6-3.7M60.2 31.4s3.9-5.2 8.2-1.5M70.7 30.8s6.4-5 10.4 2.1M84.1 34.3s4.5-2 5.3 2M92 38.2s5-2.3 6.7 2.4M100.1 41.8c.1 0 3.7-.8 3.1 3.1" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { id: "decor" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["st8"] || "st8", fill: "#F0F3F5", stroke: "#6C757C", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M43.4 62.8s-5.9-3.7-9.7.4c0 0-1.6 1.8-.3 4.3 1.5 2.8 4.9 2.7 6.9.9 0 0 1.8 2.8 6.5.1 0 0 5.6 2.7 11.6-.1 0 0 2 2.4 6.3.4 0 0 2.7 2.4 6.3-.2 0 0 6.5 3 11.9-.3 0 0 2.3 2.6 6.1.4 0 0 2.6 2.6 6.4-.2 0 0 3.3 2 8.4.7 0 0 3.1-.8 2.3-3.2-1-2.9-3.8-6.3-13.6-3.1 0 0-6.7-2.9-12.4.5 0 0-4.7-3.7-12.1 0 0 0-3.1-3.6-12.4-.4-.2 0-4.5-3.7-12.2-.2z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { className: styles["st9"] || "st9", fill: "#FFF", stroke: "#6C757C", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M37.1 65.4s1.1 0 1.6.8 1.6 2.1 1.6 2.1M43.2 62.6s1.2 1.4 1.7 2.8 1.7 3.1 2.8 3.5M55.7 63.2c.4.5 1 1.4 1.3 2.3.5 1.4 1.5 3.3 2.7 3.7M67.9 63.4c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M79.5 63.1c.4.5.8 1.3 1.1 2 .4 1.1 1.2 2.4 2.1 3M92.2 63c.4.5.8 1.3 1.1 2 .4 1.1 1 2.6 1.9 3.3M61.2 65.4s.9 0 1.7 1.1 1.8 2.4 2.5 2.7M85.8 65.6s1 .2 1.6 1.2c.6 1 1.9 2.3 2.8 2.7" })
    )
  );
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  background-color: ", ";\n  display: ", ";\n  padding: ", ";\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








/*
  css prop getters
*/

var getBackgroundColor = function getBackgroundColor(_ref) {
  var sub = _ref.sub;

  if (sub) {
    return _constants_colors__WEBPACK_IMPORTED_MODULE_6__["default"].lightGray;
  }

  return 'transparent';
};

var getDisplay = function getDisplay(_ref2) {
  var mobile = _ref2.mobile,
      sub = _ref2.sub;

  if (mobile || sub) {
    return 'block';
  }

  return 'flex';
};

var getPadding = function getPadding(_ref3) {
  var sub = _ref3.sub;

  if (sub) {
    return '15px';
  }

  return '0';
};

var getWidth = function getWidth(_ref4) {
  var mobile = _ref4.mobile,
      sub = _ref4.sub;

  if (mobile || sub) {
    return '100%';
  }

  return 'auto';
};
/*
  inner Tag component
*/


var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul(_templateObject(), function (props) {
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
      sub = props.sub;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      navbar: navbar,
      mobile: mobile,
      sub: sub
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, props));
};

Nav.propTypes =  true ? {
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  sub: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
} : undefined;
Nav.defaultProps = {
  navbar: false,
  mobile: false,
  sub: false
};
Nav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_4__["default"];
Nav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: list-item;\n  border-top: ", ";\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/*
  css prop getters
*/

var getPadding = function getPadding(_ref) {
  var mobile = _ref.mobile,
      sub = _ref.sub;

  if (mobile) {
    return '1rem 0';
  }

  if (sub) {
    return '8px 0 8px 0';
  }

  return '9px 15px';
};
/*
  inner Tag component
*/


var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject(), function (_ref2) {
  var mobile = _ref2.mobile;
  return mobile && '0.5px solid #C8C8C880';
}, function (props) {
  return getPadding(props);
});
/*
  outer NavItem component
*/

var NavItem = function NavItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, null, function (_ref3) {
    var mobile = _ref3.mobile,
        sub = _ref3.sub;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, _extends({}, props, {
      mobile: mobile,
      sub: sub
    }));
  });
};

NavItem.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        &::after {\n          width: ", ";\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["&::after {\n      ", "\n      margin-top: ", ";\n      width: ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  transition: ", ";\n\n  ", "\n\n  &:hover {\n    color: ", ";\n\n    ", "\n\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  content: '';\n  display: block;\n  height: 3px;\n  transition: width 0.3s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  display: block;\n  font-family: ", ";\n  padding: 0;\n  text-decoration: none !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/*
  css mixins
*/

var navLinkCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), _constants_typography__WEBPACK_IMPORTED_MODULE_5__["sans"]);
var navLinkAfterCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].red);
/*
  css prop getters
*/

var getColor = function getColor(_ref) {
  var active = _ref.active,
      mobile = _ref.mobile,
      sub = _ref.sub;
  var activeColor = mobile || sub ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black : _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].red;
  var defaultColor = mobile || sub ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].red : _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black;

  if (active) {
    return activeColor;
  }

  return defaultColor;
};

var getCursor = function getCursor(_ref2) {
  var disabled = _ref2.disabled,
      href = _ref2.href;

  if (disabled && !href) {
    return 'not-allowed';
  }

  return 'pointer';
};

var getFontSize = function getFontSize(_ref3) {
  var navbar = _ref3.navbar,
      mobile = _ref3.mobile;

  if (navbar || mobile) {
    return '1em';
  }

  return '1.1em';
};

var getFontWeight = function getFontWeight(_ref4) {
  var navbar = _ref4.navbar,
      sub = _ref4.sub;

  if (navbar || sub) {
    return '400';
  }

  return '700';
};

var getLineHeight = function getLineHeight(_ref5) {
  var navbar = _ref5.navbar,
      mobile = _ref5.mobile,
      sub = _ref5.sub;

  if (navbar || mobile || sub) {
    return '1.5';
  }

  return '1';
};

var getOpacity = function getOpacity(_ref6) {
  var disabled = _ref6.disabled;

  if (disabled) {
    return '0.65';
  }

  return '1';
};

var getPointerEvents = function getPointerEvents(_ref7) {
  var disabled = _ref7.disabled,
      href = _ref7.href;

  if (disabled && href) {
    return 'none';
  }

  return 'auto';
};

var getTransition = function getTransition(_ref8) {
  var mobile = _ref8.mobile,
      sub = _ref8.sub;

  if (mobile || sub) {
    return 'all .2s ease-in-out';
  }

  return 'background-color .55s linear,border-color .25s linear,box-shadow .25s linear,color .25s linear';
};

var getAfterMarginTop = function getAfterMarginTop(_ref9) {
  var navbar = _ref9.navbar;

  if (navbar) {
    return '0.25em';
  }

  return '1em';
};

var getAfterWidth = function getAfterWidth(_ref10) {
  var active = _ref10.active;

  if (active) {
    return '100%';
  }

  return '0';
};

var getColorWithHover = function getColorWithHover(_ref11) {
  var disabled = _ref11.disabled,
      mobile = _ref11.mobile,
      sub = _ref11.sub;
  var disabledColor = mobile || sub ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].red : _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black;
  var defaultColor = mobile || sub ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].black : _constants_colors__WEBPACK_IMPORTED_MODULE_4__["default"].red;

  if (disabled) {
    return disabledColor;
  }

  return defaultColor;
};

var getAfterWidthWithHover = function getAfterWidthWithHover(_ref12) {
  var disabled = _ref12.disabled;

  if (disabled) {
    return '0';
  }

  return '100%';
};
/*
  inner Tag component
*/


var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), navLinkCSS, function (props) {
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
}, function (props) {
  return !(props.mobile || props.sub) && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), navLinkAfterCSS, getAfterMarginTop(props), getAfterWidth(props));
}, function (props) {
  return getColorWithHover(props);
}, function (props) {
  return !(props.mobile || props.sub) && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), getAfterWidthWithHover(props));
});
/*
  outer NavLink component
*/

var deriveTag = function deriveTag(_ref13) {
  var href = _ref13.href,
      tag = _ref13.tag;

  if (href && tag === 'button') {
    return 'a';
  }

  return tag;
};

var NavLink = function NavLink(props) {
  var derivedTag = deriveTag(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, null, function (_ref14) {
    var navbar = _ref14.navbar,
        mobile = _ref14.mobile,
        sub = _ref14.sub;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, _extends({
      as: derivedTag,
      type: derivedTag === 'button' && props.onClick ? 'button' : undefined
    }, props, {
      navbar: navbar,
      mobile: mobile,
      sub: sub
    }));
  });
};

NavLink.propTypes =  true ? {
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;
NavLink.defaultProps = {
  active: false,
  disabled: false,
  tag: 'button',
  navbar: false,
  mobile: false,
  onClick: null,
  href: null
};
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_logo_black_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _svg_logo_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _constants_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 33px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  box-shadow: 0 1px 10px 5px #00000026;\n  display: flex;\n  justify-content: space-between;\n  min-height: 75px;\n  padding: 0 7vw;\n  position: relative;\n  z-index: 20;\n  background-color: ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








/*
  inner components
*/

var NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (_ref) {
  var color = _ref.color;
  return _constants_colors__WEBPACK_IMPORTED_MODULE_5__["default"][color];
}, _constants_media__WEBPACK_IMPORTED_MODULE_6__["default"].lg(_templateObject2()));
var NavbarLogoLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject3());
var NavbarChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
/*
  outer Navbar component
*/

var logoProps = {
  height: 65,
  width: 131
};

var Navbar = function Navbar(_ref2) {
  var color = _ref2.color,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarWrapper, {
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarLogoLink, {
    href: "http://www.brown.edu/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, color === 'white' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_logo_black_svg__WEBPACK_IMPORTED_MODULE_3__["default"], logoProps) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_logo_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"], logoProps)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavbarChildrenWrapper, null, children));
};

Navbar.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['brown', 'white']),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
} : undefined;
Navbar.defaultProps = {
  color: 'brown',
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ version: "1.1", viewBox: "0 0 384 192", role: "img", "aria-labelledby": "title" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "title",
      { id: "title" },
      "Brown University Logo"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFC627", d: "M39.339 25.604c.209.342.479.783.864 1.418 1.005 1.663 2.561 7.928 4.57 10.004 1.071-.727 2.927-1.664 3.98-2.042-.244-.406-1.372-2.334-2.625-3.974-2.413-3.203-4.145-4.914-4.339-5.19-.651-.008-1.76.026-2.45-.216zM57.444 33.946c.479-3.279-.613-8.723-1.257-10.085-.816-.208-1.661-.496-2.355-.829-.09.417-.706 2.639-.91 5.91-.11 1.753-.064 4.42.259 5.004 1.038-.104 2.775-.139 4.263 0zM73.055 53.264c0-9.864-7.729-17.596-17.6-17.596-9.719 0-17.6 7.878-17.6 17.596 0 .465.104 1.408.258 2.36 5.063-1.174 11.775-.986 14.758 1.378 4.827-2.754 11.783-2.927 16.879.042 1.013-.506 2.066-.872 3.131-1.176.127-.949.174-1.943.174-2.604zm-21.452-6.002a2.046 2.046 0 1 1-4.088-.205l.019-.226c-.175-.268-1.095-.566-2.464.264-.687.422-1.457.132-.263-.902 1.267-1.101 2.47-1.739 3.531-1.872l.033-.008c1.788-.124 4.111.242 5.197.684.45.184-.019 2.397-.12 2.37-.369-.082-1.174-.421-1.849-.268l.004.163zm5.87 6.136c-.358 1.044-4.057 1.378-4.736.019-.268-.539-.64-1.929-.139-1.642.822.478 3.798.14 4.36 0 .497-.127.173-.82.479-.735.368.102.368 1.37.036 2.358zm8.702-5.787c-.93-.766-2.147-1.101-2.613-.766l.017.158a2.048 2.048 0 1 1-4.08.357v-.088c-.736-.232-1.908.173-2.069.11-.095-.044-.591-2.129.057-2.391 1.766-.721 7.457-1.072 9.11 2.122.192.388.072.902-.422.498zM67.245 25.409c-2.068 1.752-5.23 5.998-5.634 9.394.971.393 3.535 1.616 3.886 1.906 2.545-2.509 2.028-5.275 3.022-7.413.431-.923.847-1.65 1.088-2.065-.825-.448-1.714-1.086-2.362-1.822z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M21.983 86.106c-2.636.078-5.215 1.116-6.729.852v17.65s.955.726 3.6-.026c3.422-.973 4.946.096 4.946.096V86.871c.001 0-.398-.809-1.817-.765z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#DCDDDE", d: "M46.235 78.265H3.878v38.386h42.357V78.265zm-6.446 30.548h-12.13v1.523h-5.027v-1.523H10.499V88.317h2.588v-3.73c2.63.635 6.923-.814 8.839-.81 2.138.005 3.224.926 3.224.926s1.1-.926 3.216-.926c1.916 0 6.205 1.432 8.835.81v3.73h2.589v20.496z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M88.907 86.106c-1.417-.044-1.823.765-1.823.765v17.807s1.523-1.069 4.949-.096c2.645.752 3.602.026 3.602.026v-17.65c-1.514.264-4.094-.774-6.728-.852zM28.3 86.106c-1.414-.044-1.817.765-1.817.765v17.807s1.528-1.069 4.95-.096c2.644.752 3.6.026 3.6.026v-17.65c-1.514.264-4.094-.774-6.733-.852z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFC627", d: "M79.588 32.133c-.459.251-1.53.909-1.891 1.179-2.444 1.841-7.741 4.313-8.961 5.668.973.862 2.41 2.41 3.059 3.706.596.027 2.306-1.365 5.695-5.354 1.088-1.274 2.244-1.948 4.34-3.113a12.278 12.278 0 0 1-2.242-2.086z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M87.419 142.197v17.807s1.522-1.065 4.944-.087c2.646.755 3.597.026 3.597.026v-17.651c-1.516.263-4.089-.775-6.724-.858-1.423-.047-1.817.763-1.817.763zM76.189 142.292v17.651s.953.729 3.595-.026c3.424-.979 4.952.087 4.952.087v-17.807s-.403-.81-1.822-.763c-2.636.084-5.214 1.122-6.725.858zM82.588 86.106c-2.635.078-5.217 1.116-6.732.852v17.65s.957.726 3.604-.026c3.415-.973 4.943.096 4.943.096V86.871c-.001 0-.395-.809-1.815-.765z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#DCDDDE", d: "M107.043 78.265H64.7v38.386h42.343V78.265zm-6.324 30.548H88.592v1.523h-5.029v-1.523H71.435V88.317h2.581v-3.73c2.632.635 6.925-.814 8.84-.81 2.14.005 3.22.926 3.22.926s1.104-.926 3.22-.926c1.918 0 6.206 1.432 8.84.81v3.73h2.584v20.496z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M11.328 56.446c-3.242-.069-5.941.846-6.894 2.509-1.753 3.063.308 5.706 1.54 6.445 2.817 1.694 5.504.588 5.703-.454-.77-.868-2.098-2.83-2.842-2.847-1.083-.028-.996-1.432-.209-1.688 1.883-.623 3.713 2.951 6.418 4.883 2.41 1.725 5.788.461 5.788-.246-1.474-1.335-3.234-8.461-9.504-8.602zM49.789 57.716c-3.712-1.75-8.951-1.166-13.356.399 1.22 1.626 3.25 5.426 4.297 6.707 2.026 2.465 5.49 1.22 5.633.475-.241-.454-2.103-2.86-2.803-3.262-.654-.375-1.034-.971-.667-1.491.614-.863 2.059 0 2.844.945.782.952 2.979 3.706 3.702 4.195 2.169 1.469 6.299.704 5.951-.558-1.42-1.876-2.039-5.735-5.601-7.41z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFC627", d: "M41.796 39.415c-3.049-2.458-5.851-2.983-10.32-5.082-1.012-.476-2.712-1.621-2.799-1.668a12.47 12.47 0 0 0-.619-.393c-.262.837-.796 1.973-1.285 2.609.692.899 5.688 6.6 12.08 8.376.701-1.224 1.828-2.634 2.943-3.842zM36.915 46.86c-1.145-1.129-3.421-2.104-6.383-1.867-6.063.476-10.054.086-12.345-.237-3.922-.563-6.358-.013-8.318-.013-5.962 0 .166.537.865.809 2.807 1.107 8.467 2.509 12.918 2.185 2.175-.152 5.814 1.172 6.441 1.389 1.601.571 4.495 1.503 6.06 1.474.085-.716.455-2.845.762-3.74z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M75.816 64.874c2.241 2.271 5.3 1.297 5.441.553-.251-.453-1.664-2.536-2.497-2.988-.679-.375-1.119-.995-.752-1.514.609-.864 1.835-.252 2.618.694.783.956 2.941 3.769 3.698 4.2 1.966 1.087 6.297.696 5.947-.567-1.198-1.897-2.026-5.731-5.596-7.409-3.707-1.748-8.459-1.293-12.86.278.793 1.575 2.854 5.598 4.001 6.753z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFC627", d: "M105.857 43.825c-.302-.048-1.438-.199-2.167-.196-.961.005-7.278.035-9.006.3-3.534.553-10.374.268-14.124.125-2.802-.109-6.028.984-7.013 1.512 0 0 1.079 2.698 1.149 4.532 1.192.212 2.339-1.293 5.74-1.237 3.542.06 12.262-.416 16.674-2.133 3.295-1.276 6.063-1.917 8.304-2.371.751-.156 1.94-.303.443-.532z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M23.806 160.004v-17.807s-.402-.81-1.817-.763c-2.639.083-5.219 1.121-6.729.858v17.651s.952.729 3.596-.026c3.421-.979 4.95.087 4.95.087zM26.886 26.19c.283-.24.673-.21 1.027-.095 2.989.965 7.275.309 9.273-2.855.28-.442.834-.598 1.316-.402 2.065.837 6.298 1.224 11.451-4.007.388-.394 1.014-.344 1.443.004 4.526 3.633 9.245 3.86 14.027.678.297-.197.675-.453 1.003-.319.331.134.575.424.648.772 1.528 7.067 8.903 6.441 11.125 6.083a1.072 1.072 0 0 1 1.24.911c.241 1.653 2.073 4.858 5.246 6.494 2.712 1.395 5.666 1.288 8.786-.32.312-.162.685-.16 1 .006 4.002 2.139 7.605 2.265 9.881.348 1.604-1.352 2.255-3.554 1.617-5.481-.711-2.147-2.847-3.482-5.855-3.665a1.078 1.078 0 0 1-.998-.91c-.27-1.713-1.227-3.115-2.771-4.056-2.354-1.435-5.816-1.604-9.263-.452a1.083 1.083 0 0 1-.908-.106 1.081 1.081 0 0 1-.5-.767c-.189-1.324-.763-3.117-2.422-4.131-1.749-1.069-4.391-1.043-7.64.076a1.081 1.081 0 0 1-1.308-.521c-2.09-4.004-5.025-6.604-8.487-7.522-3.1-.822-6.545-.225-9.452 1.642-.379.246-.87.229-1.232-.043-2.927-2.196-6.426-2.896-9.604-1.923-3.097.945-5.455 3.362-6.645 6.804a1.08 1.08 0 0 1-1.422.648c-4.742-1.904-8.614-1.856-11.198.141-2.22 1.715-2.905 4.417-2.805 5.205a1.055 1.055 0 0 1-.793 1.179l-1.134.272c-2.628.6-5.348 1.222-6.167 5.404a1.082 1.082 0 0 1-.952.866c-4.569.456-7.556 2.148-8.187 4.645-.444 1.759.372 3.752 1.988 4.844 1.625 1.101 3.582.987 5.374-.314a1.077 1.077 0 0 1 1.019-.135c2.684 1.026 7.035.823 9.674-1.292 1.914-1.534 2.664-3.797 2.232-6.725a1.076 1.076 0 0 1 .373-.981zm72.39.301c2.711-.628 5.967 1.354 5.043 4.997-.157.623-1.688.662-1.635.026.234-3.05-1.273-3.297-3.281-3.275-.759.018-.701-1.623-.127-1.748zm-11.609-5.413c2.637-1.506 8.029-1.238 9.707 3.574.287.818-.798 2.208-1.474.969-2.027-3.725-5.303-3.717-8.037-2.673-.614.241-1.167-1.317-.196-1.87zM76.333 15.53c2.446-.865 6.613-1.25 7.725 2.839.319 1.143-1.085 1.688-1.397.887-1.136-2.96-3.272-2.843-5.824-2.029-1.177.385-.892-1.562-.504-1.697zm-19.994-4.603c1.763-2.869 10.985-5.539 15.717 2.575.502.883-.169 1.397-.698 1.761-.376.268-.599-.341-.847-.74-4.016-6.353-11.281-4.677-13.232-1.73-.397.596-1.454-1.022-.94-1.866zm-14.862.46c1.62-2.566 7.178-6.516 12.104-2.168.554.481-.105 2.268-.723 1.854-4.505-3.098-8.048-.611-9.926 1.63-.902 1.064-1.84-.697-1.455-1.316zM14.882 29.34c-1.885 0-3.397.039-4.723 1.48-1.417 1.536-1.073 2.379-1.337 2.658-.388.38-1.359-.291-1.342-1.052.083-3.614 4.447-5.024 7.036-4.734.986.116 1.242 1.648.366 1.648zm7.667-6.067c-2.756.303-3.563 1.649-4.055 3.193-.2.58-1.747.165-1.503-.978.731-3.396 4.415-4.227 5.753-3.937.45.087.312 1.675-.195 1.722zm2.359-3.66c.566-2.999 3.497-7.365 10.193-5.665.822.208.338 2.293-.545 1.943-4.889-1.917-7.343 1.792-8.135 4.716-.108.399-1.745.248-1.513-.994z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#DCDDDE", d: "M64.7 185.281c10.674-3.089 21.248-7.217 28.406-13.765 2.534-2.315 4.638-4.735 6.399-7.373H88.591v1.524h-5.025v-1.524H71.43v-20.5h2.593v-3.731c2.626.636 6.919-.809 8.836-.809 2.138.005 3.219.932 3.219.932s1.103-.932 3.216-.932c1.921 0 6.209 1.436 8.84.809v3.731h2.592v18.54c3.897-6.743 5.688-14.996 6.318-26.594v-1.729H64.7v51.421z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#FFF", d: "M31.434 159.917c2.644.755 3.602.026 3.602.026v-17.651c-1.515.263-4.095-.775-6.734-.858-1.414-.047-1.817.763-1.817.763v17.807c-.002 0 1.526-1.066 4.949-.087z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#DCDDDE", d: "M3.962 135.486c.423 10.608 2.415 19.261 6.538 26.487v-18.331h2.592v-3.731c2.627.636 6.919-.809 8.836-.809 2.139.005 3.224.932 3.224.932s1.099-.932 3.216-.932c1.916 0 6.204 1.436 8.834.809v3.731h2.588v20.5H27.656v1.524h-5.022v-1.524H11.826a40.678 40.678 0 0 0 6.175 7.295c6.746 6.323 17.331 10.614 28.229 13.807v-51.386H3.878l.084 1.628z" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#231F20" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M111.737 42.726c-.637-.467-7.386-1.298-8.438-1.298-1.025 0-6.854.052-9.104.393-3.5.521-9.469.521-14.004 0-1.641-.191-3.456.208-4.941.689.292-.245.605-.53.981-.917 1.338-1.376 2.837-3.99 5.495-5.292a41.613 41.613 0 0 0 1.911-1.015c2.232 1.116 5.75 1.874 10.123-.184 6.526 3.258 10.417 1.054 11.793-.106a7.393 7.393 0 0 0 2.623-5.623c0-.735-.112-1.474-.351-2.185-.938-2.836-3.526-4.604-7.08-5.02-.202-.757-.525-1.458-.912-2.123.413-.526.805-1.021 1.06-1.321.309-.39 1.381-2.168-1.489-.685a29.31 29.31 0 0 0-.774.426 7.352 7.352 0 0 0-1.352-1.072c-2.676-1.632-6.294-1.831-10.02-.835-.523-1.986-1.505-3.663-3.07-4.619-1.64-1.005-3.706-1.294-6.141-.922.151-.356.29-.672.406-.921 1.083-2.268.499-2.835-.639-1.83-1.282 1.138-2.093 1.948-2.71 2.603-2.303-3.696-5.337-6.193-8.921-7.142-3.11-.824-6.469-.387-9.498 1.078-.181-1.523-.38-2.775-.6-3.496-.564-1.84-1.237-.395-1.344.173l-.5 3.046c-3.027-1.617-6.39-2.064-9.534-1.101-3.456 1.057-6.089 3.631-7.606 7.208a21.059 21.059 0 0 0-3.46-.905c-.633-.83-1.571-1.884-2.881-3.031-.883-.783-1.612-.376-1.083 1.168.207.598.388 1.127.555 1.627-2.466.136-4.265.945-5.476 1.88-2.394 1.849-3.369 4.498-3.563 6.178l-.329.081c-2.008.461-4.718 1.215-6.417 3.894-.301-.186-.52-.322-.611-.381-5.062-3.361-2.728.963-.77 2.87-6.732.952-8.632 4.186-9.118 6.108a5.986 5.986 0 0 0-.185 1.487c0 2.183 1.139 4.373 3.053 5.671 2.251 1.523 4.98 1.43 7.407-.123 3.171 1.021 7.647.856 10.86-1.48 1.854 1.997 3.351 3.414 4.161 4.221 2.019 2.008 4.979 3.537 6.493 4.111-1.498-.58-3.99-1.203-6.483-.857-5.381.75-8.953-.225-11.257-.454-3.797-.376-7.701.277-9.645.277-2.059 0-4.966.969-6.384 1.177-1.531.23-1.432 1.242.7 1.809 2.11.571 6.065.922 7.138 1.38 3.437 1.493 9.185 2.739 13.236 2.414 2.876-.22 5.771 1.182 6.515 1.402 1.426.437 4.96 1.402 6.413 1.376 0-.087 0 2.042.149 3.048-.55.182-1.077.374-1.549.59-1.609-.977-8.672-3.841-17.273-.276-1.818-.629-5.665-2.751-10.935-1.017C-.146 57.028.91 62.987 3.056 65.716c2.903 3.693 8.273 2.945 9.835 1.087 3.495 2.322 7.063 1.536 9.649-.07 1.7 1 10.068 2.659 16.43.07.869.647 4.361 2.47 8.844.211 2.587 1.537 6.867 1.655 9.063-.281.797.677 3.186 1.647 8.273 1.588 6.11-.073 7.528-.984 8.386-1.729 1.316.61 4.747 2.404 8.991.593 2.29 1.44 6.872 1.356 9.329-.255 4.491 2.042 12.729 1.118 14.79-.303 3.688-2.557 1.904-7.769-2.155-10.242-7.982-4.023-15.413-.902-17.386.111-2.351-1.587-7.27-2.604-12.377-1.657.079-.608-.01-1.302-.01-2.077 0-.083-.013-.16-.015-.242 1.012-.308 2.452-1.397 5.381-1.581 3.987-.269 13.393-.143 18.095-2.553 2.685-1.372 12.021-3.202 13.266-3.929 1.289-.736.95-1.282.292-1.731zM77.49 37.332c-3.39 3.99-5.1 5.381-5.695 5.354-.648-1.296-2.086-2.843-3.059-3.706 1.22-1.355 6.517-3.827 8.961-5.668.36-.271 1.432-.928 1.891-1.179.633.75 1.379 1.469 2.242 2.085-2.096 1.166-3.252 1.84-4.34 3.114zm-48.845-8.661c2.848.45 6.165-.216 8.577-2.386 2.963 4.73 3.039 9.013 5.898 11.964-3.609-3.492-6.757-3.424-11.92-6.209-.891-.48-2.221-1.345-2.597-1.536-.005-.005-.016-.009-.023-.013.06-.435.097-.888.097-1.374 0-.138-.03-.301-.032-.446zm21.998 5.286l.076.162s-1.572-2.358-1.762-2.659c-.537-.822-1.237-1.653-2.021-2.618a86.947 86.947 0 0 0-3.145-3.6c2.058-.503 4.409-1.679 6.942-4.065.269.196.542.344.814.517-.139.812-.266 1.545-.363 2.078-.584 3.188-.626 5.638-.667 6.689-.042.997.055 2.57.126 3.496zm-4.514-2.946c1.253 1.639 2.381 3.567 2.625 3.974-1.054.378-2.909 1.315-3.98 2.042-2.01-2.077-3.565-8.342-4.57-10.004-.385-.635-.655-1.077-.864-1.418.69.242 1.799.208 2.451.217.193.275 1.925 1.986 4.338 5.189zm9.326 4.657c9.871 0 17.6 7.732 17.6 17.596 0 .661-.047 1.655-.174 2.603-1.064.305-2.118.67-3.131 1.176-5.096-2.968-12.052-2.795-16.879-.042-2.982-2.364-9.695-2.552-14.758-1.378-.153-.952-.258-1.895-.258-2.36 0-9.717 7.881-17.595 17.6-17.595zm-2.533-6.726c.204-3.271.82-5.493.91-5.91.694.333 1.539.621 2.355.829.644 1.362 1.735 6.806 1.257 10.085-1.488-.139-3.226-.104-4.264 0-.323-.584-.368-3.251-.258-5.004zm15.598.354c-.994 2.138-.478 4.903-3.022 7.413-.351-.29-2.915-1.513-3.886-1.906.403-3.396 3.565-7.642 5.634-9.394.647.735 1.537 1.374 2.362 1.822a25.016 25.016 0 0 0-1.088 2.065zm2.693-.683c.083-.142.178-.327.277-.525 1.895.629 3.974.796 6.014.571.206.668.527 1.38.938 2.097-.01.001-.028.015-.034.017-1.009.48-4.069 2.575-8.543 5.066-1.157.641-1.87 1.257-2.279 1.68.492-.663 1.094-1.538 1.473-2.506.786-2.016.577-3.635 2.154-6.4zM60.39 31.192c-.485 1.227-.675 1.874-.857 2.563.379-2.637-.337-6.494-1.104-9.826 2.301.048 4.63-.556 6.942-1.867.18.521.418.976.653 1.43-1.305 1.19-4.423 4.612-5.634 7.7zm-36.107 2.703c-2.639 2.116-6.99 2.318-9.674 1.292a1.077 1.077 0 0 0-1.019.135c-1.792 1.301-3.749 1.415-5.374.314-1.616-1.092-2.433-3.085-1.988-4.844.631-2.496 3.617-4.188 8.187-4.645.474-.047.861-.4.952-.866.819-4.182 3.539-4.805 6.167-5.404l1.134-.272c.535-.13.863-.634.793-1.179-.101-.788.585-3.49 2.805-5.205 2.584-1.997 6.456-2.045 11.198-.141a1.078 1.078 0 0 0 1.422-.648c1.189-3.442 3.548-5.858 6.645-6.804 3.179-.974 6.678-.273 9.604 1.923.362.271.854.289 1.232.043 2.907-1.866 6.353-2.464 9.452-1.642 3.462.917 6.397 3.518 8.487 7.522.246.472.803.693 1.308.521 3.249-1.119 5.891-1.145 7.64-.076 1.659 1.014 2.232 2.808 2.422 4.131.046.318.228.597.5.767.271.168.605.205.908.106 3.446-1.152 6.908-.983 9.263.452 1.544.94 2.501 2.342 2.771 4.056.077.5.493.878.998.91 3.009.183 5.145 1.518 5.855 3.665.638 1.927-.014 4.129-1.617 5.481-2.275 1.917-5.879 1.791-9.881-.348a1.075 1.075 0 0 0-1-.006c-3.12 1.607-6.074 1.715-8.786.32-3.173-1.636-5.005-4.841-5.246-6.494a1.068 1.068 0 0 0-.428-.717 1.085 1.085 0 0 0-.812-.194c-2.222.358-9.597.984-11.125-6.083a1.071 1.071 0 0 0-.648-.772c-.328-.134-.706.122-1.003.319-4.782 3.182-9.501 2.956-14.027-.678-.43-.348-1.056-.398-1.443-.004-5.153 5.231-9.386 4.844-11.451 4.007-.482-.195-1.036-.04-1.316.402-1.998 3.165-6.284 3.82-9.273 2.855-.354-.115-.744-.145-1.027.095-.287.24-.426.61-.37.98.429 2.928-.321 5.191-2.235 6.726zm2.489.986c.489-.636 1.023-1.772 1.285-2.609.274.167.497.307.619.393.087.047 1.787 1.192 2.799 1.668 4.47 2.099 7.271 2.624 10.32 5.082-1.115 1.208-2.242 2.618-2.943 3.842-6.391-1.776-11.387-7.477-12.08-8.376zm3.322 14.244c-.627-.217-4.267-1.541-6.441-1.389-4.451.324-10.111-1.078-12.918-2.185-.699-.272-6.827-.809-.865-.809 1.96 0 4.396-.55 8.318.013 2.291.324 6.282.713 12.345.237 2.962-.237 5.238.738 6.383 1.867-.307.896-.677 3.024-.762 3.739-1.565.03-4.46-.901-6.06-1.473zM15.045 65.294c-2.705-1.932-4.535-5.505-6.418-4.883-.787.256-.874 1.66.209 1.688.744.018 2.072 1.979 2.842 2.847-.199 1.042-2.886 2.148-5.703.454-1.232-.74-3.293-3.382-1.54-6.445.952-1.663 3.651-2.579 6.894-2.509 6.27.141 8.03 7.267 9.505 8.602-.001.708-3.379 1.972-5.789.246zm9.099-.096c-2.366-1.05-4.24-6.501-4.937-7.198-.277-.276 4.188-1.897 8.728-1.505 7.727.657 7.748 5.458 9.653 7.854.692.87-6.271 2.867-13.444.849zm25.294.486c-.723-.489-2.92-3.243-3.702-4.195-.785-.945-2.229-1.809-2.844-.945-.367.52.013 1.116.667 1.491.7.402 2.562 2.808 2.803 3.262-.143.745-3.606 1.99-5.633-.475-1.047-1.281-3.077-5.081-4.297-6.707 4.405-1.564 9.645-2.148 13.356-.399 3.562 1.675 4.181 5.534 5.601 7.411.348 1.261-3.782 2.026-5.951.557zm9.708-.093c-2.361-1.054-4.241-6.505-4.939-7.202-.28-.277 4.191-1.889 8.731-1.501 7.732.655 7.753 5.458 9.652 7.848.697.877-6.264 2.878-13.444.855zM97.8 56.628c7.729.655 9.567 5.744 8.799 7.394-.677 1.45-5.41 3.333-12.585 1.31-2.366-1.055-4.244-6.506-4.936-7.203-.281-.276 4.184-1.888 8.722-1.501zm-13.123 1.215c3.569 1.677 4.397 5.511 5.596 7.409.35 1.263-3.981 1.654-5.947.567-.757-.431-2.915-3.244-3.698-4.2-.783-.946-2.009-1.558-2.618-.694-.367.519.073 1.14.752 1.514.833.452 2.246 2.535 2.497 2.988-.142.744-3.2 1.718-5.441-.553-1.147-1.155-3.208-5.178-4-6.753 4.4-1.571 9.152-2.026 12.859-.278zm20.738-13.486c-2.241.454-5.009 1.095-8.304 2.371-4.412 1.718-13.132 2.193-16.674 2.133-3.401-.056-4.548 1.449-5.74 1.237-.07-1.834-1.149-4.532-1.149-4.532.984-.528 4.211-1.621 7.013-1.512 3.75.143 10.59.428 14.124-.125 1.728-.265 8.045-.295 9.006-.3.729-.003 1.865.147 2.167.196 1.496.229.307.376-.443.532z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M14.882 29.34c-1.885 0-3.397.039-4.723 1.48-1.417 1.536-1.073 2.379-1.337 2.658-.388.38-1.359-.291-1.342-1.052.083-3.614 4.447-5.024 7.036-4.734.986.116 1.242 1.648.366 1.648M22.549 23.273c-2.756.303-3.563 1.649-4.055 3.193-.2.58-1.747.165-1.503-.978.731-3.396 4.415-4.227 5.753-3.937.45.087.312 1.675-.195 1.722M34.557 15.892c-4.889-1.917-7.343 1.792-8.135 4.716-.108.398-1.746.248-1.514-.995.566-2.999 3.497-7.365 10.193-5.665.823.208.338 2.294-.544 1.944M52.857 11.072c-4.505-3.098-8.048-.611-9.926 1.63-.901 1.064-1.84-.696-1.455-1.315 1.62-2.566 7.178-6.516 12.104-2.168.554.481-.105 2.268-.723 1.853M71.357 15.262c-.376.268-.599-.341-.847-.74-4.016-6.353-11.281-4.677-13.232-1.73-.396.597-1.453-1.021-.939-1.865 1.763-2.869 10.985-5.539 15.717 2.575.502.882-.169 1.396-.699 1.76M82.66 19.256c-1.136-2.96-3.272-2.843-5.824-2.029-1.176.385-.891-1.563-.503-1.697 2.446-.865 6.613-1.25 7.725 2.839.319 1.143-1.085 1.688-1.398.887M95.9 25.621c-2.027-3.725-5.303-3.717-8.037-2.673-.614.242-1.167-1.316-.196-1.87 2.637-1.506 8.029-1.238 9.707 3.574.287.817-.798 2.207-1.474.969M104.319 31.488c-.157.623-1.688.662-1.635.026.234-3.05-1.273-3.297-3.281-3.275-.76.018-.701-1.623-.127-1.748 2.711-.628 5.967 1.354 5.043 4.997" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M51.603 47.262a2.046 2.046 0 1 1-4.088-.205l.019-.226c-.175-.268-1.095-.566-2.464.264-.687.422-1.457.132-.263-.902 1.267-1.101 2.47-1.739 3.531-1.872l.033-.008c1.788-.124 4.111.242 5.197.684.45.184-.019 2.397-.12 2.37-.369-.082-1.174-.421-1.849-.268l.004.163M57.473 53.398c-.358 1.044-4.057 1.378-4.736.019-.268-.539-.64-1.929-.139-1.642.822.478 3.798.14 4.36 0 .497-.127.173-.82.479-.735.368.102.368 1.37.036 2.358M66.175 47.611c-.93-.766-2.147-1.101-2.613-.766l.017.158a2.048 2.048 0 1 1-4.08.357v-.088c-.736-.232-1.908.173-2.069.11-.095-.044-.591-2.129.057-2.391 1.766-.721 7.457-1.072 9.11 2.122.192.388.072.902-.422.498" })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M64.7 78.265h42.343v38.386H64.7V78.265zm-60.822 0h42.357v38.386H3.878V78.265zm42.352 106.98c-10.898-3.192-21.483-7.483-28.229-13.807a40.678 40.678 0 0 1-6.175-7.295h10.808v1.524h5.022v-1.524h12.133v-20.5h-2.588v-3.731c-2.63.626-6.918-.809-8.834-.809-2.117 0-3.216.932-3.216.932s-1.085-.927-3.224-.932c-1.917 0-6.209 1.445-8.836.809v3.731H10.5v18.331c-4.123-7.227-6.115-15.879-6.538-26.487l-.084-1.627H46.23v51.385zm-30.97-25.302v-17.651c1.51.263 4.09-.775 6.729-.858 1.415-.047 1.817.763 1.817.763v17.807s-1.528-1.065-4.95-.087c-2.644.755-3.596.026-3.596.026zm11.223.061v-17.807s.403-.81 1.817-.763c2.64.083 5.22 1.121 6.734.858v17.651s-.958.729-3.602-.026c-3.421-.979-4.949.087-4.949.087zm36.004 25.944l-7.015 1.785-7.031-1.813V131.5H3.878v-12.493h44.563V78.265h14.046v40.744h44.556v12.493H62.487v54.446zm38.238-23.765v-18.54h-2.592v-3.731c-2.631.626-6.919-.809-8.84-.809-2.113 0-3.216.932-3.216.932s-1.081-.927-3.219-.932c-1.917 0-6.21 1.445-8.836.809v3.731H71.43v20.5h12.136v1.524h5.025v-1.524h10.915c-1.762 2.638-3.865 5.058-6.399 7.373-7.158 6.548-17.732 10.676-28.406 13.765v-51.422h42.343v1.729c-.632 11.599-2.422 19.851-6.319 26.595zm-4.765-19.891v17.651s-.95.729-3.597-.026c-3.422-.979-4.944.087-4.944.087v-17.807s.395-.81 1.817-.763c2.635.084 5.208 1.122 6.724.858zm-11.224-.095v17.807s-1.528-1.065-4.952-.087c-2.642.755-3.595.026-3.595.026v-17.651c1.511.263 4.089-.775 6.725-.858 1.419-.047 1.822.763 1.822.763zM1.283 75.678v56.805c0 18.775 4.691 31.777 14.722 40.912 9.962 9.068 24.881 13.672 39.468 17.117 14.982-3.539 29.401-7.955 39.462-17.117 10.034-9.135 14.696-22.137 14.696-40.912V75.678H1.283z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M37.2 88.317v-3.73c-2.63.623-6.919-.81-8.835-.81-2.116 0-3.216.926-3.216.926s-1.086-.921-3.224-.926c-1.916-.005-6.209 1.445-8.839.81v3.73h-2.588v20.497h12.133v1.523h5.027v-1.523h12.13V88.317H37.2zm-13.399 16.361s-1.524-1.069-4.946-.096c-2.645.752-3.6.026-3.6.026v-17.65c1.514.265 4.093-.773 6.729-.852 1.419-.044 1.817.765 1.817.765v17.807zm11.231-.07s-.956.726-3.6-.026c-3.422-.973-4.95.096-4.95.096V86.871s.403-.809 1.817-.765c2.64.078 5.219 1.116 6.732.852v17.65zM98.135 88.317v-3.73c-2.634.623-6.922-.81-8.84-.81-2.116 0-3.22.926-3.22.926s-1.08-.921-3.22-.926c-1.915-.005-6.208 1.445-8.84.81v3.73h-2.581v20.497h12.128v1.523h5.029v-1.523h12.127V88.317h-2.583zm-13.733 16.361s-1.528-1.069-4.943-.096c-2.646.752-3.604.026-3.604.026v-17.65c1.516.265 4.098-.773 6.732-.852 1.42-.044 1.814.765 1.814.765v17.807zm11.233-.07s-.957.726-3.602-.026c-3.426-.973-4.949.096-4.949.096V86.871s.406-.809 1.823-.765c2.634.078 5.214 1.116 6.728.852v17.65z" })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#E11B22" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M48.441 185.921l7.032 1.812 7.014-1.785v-54.447h44.556v-12.493H62.487V78.265H48.441v40.743H3.859v12.493h44.582zM27.935 56.494c-4.539-.392-9.005 1.229-8.728 1.505.696.697 2.57 6.148 4.937 7.198 7.174 2.018 14.137.021 13.444-.85-1.905-2.395-1.927-7.196-9.653-7.853zM62.938 56.888c-4.54-.388-9.012 1.224-8.731 1.501.698.697 2.578 6.148 4.939 7.202 7.18 2.023 14.141.021 13.444-.855-1.899-2.389-1.919-7.193-9.652-7.848zM94.014 65.332c7.175 2.022 11.908.14 12.585-1.31.769-1.65-1.07-6.739-8.799-7.394-4.538-.388-9.003 1.224-8.722 1.501.692.697 2.569 6.148 4.936 7.203z" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#000" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M156.166 78.175c4.666 0 7.323.778 9.462 2.269 2.203 1.555 3.37 3.889 3.37 7.127 0 5.703-5.379 8.49-8.489 9.268v.13c5.896.842 11.211 4.341 11.211 10.888 0 4.6-2.269 7.84-6.027 9.979-3.306 1.815-7.452 2.463-12.378 2.463H138.41v-1.491c5.444-.389 5.962-.842 5.962-7.906V87.571c-.064-7.064-.454-7.517-5.572-7.906v-1.491h17.366zm-6.351 18.34h4.083c6.221 0 9.331-2.917 9.331-8.231 0-3.888-1.619-8.229-9.268-8.229-2.138 0-3.045.193-3.563.389-.39.129-.584.389-.584 1.685v14.386zm0 1.88v14.126c0 4.343.843 5.834 5.572 5.769 5.444 0 10.046-2.722 10.046-9.592 0-7.064-5.185-10.303-11.858-10.303h-3.76zM191.099 110.902c0 7.064.52 7.517 5.834 7.906v1.491h-17.238v-1.491c5.442-.389 5.961-.842 5.961-7.906V87.571c0-7.064-.519-7.517-5.703-7.906v-1.491h16.462c4.146 0 7.841.583 10.238 2.204 2.593 1.62 4.277 4.537 4.277 8.295 0 5.379-3.305 9.203-8.553 11.341 1.166 1.944 3.822 6.416 5.767 9.268 2.333 3.435 3.694 5.184 5.443 7.128 1.36 1.621 2.527 2.658 4.86 3.24l-.13 1.231h-.907c-7.453-.194-9.721-2.462-12.184-6.026-2.008-2.917-4.73-7.711-6.545-10.759-1.038-1.685-2.074-2.333-4.082-2.333h-3.501v9.139zm0-11.018h3.759c2.658 0 4.732-.324 6.482-1.75 2.786-2.202 3.758-5.378 3.758-8.554 0-6.805-4.926-9.526-9.786-9.526-2.203 0-3.109.129-3.63.324-.388.129-.583.454-.583 1.75v17.756zM264.29 98.654c0 13.479-9.396 22.616-21.773 22.616-12.248 0-20.932-9.332-20.932-21.579 0-10.888 7.646-22.488 22.098-22.488 11.211 0 20.607 8.684 20.607 21.451zm-22.292-19.312c-7.646 0-14.128 6.286-14.128 18.469 0 12.508 6.546 21.32 16.008 21.32 7.776 0 14.126-6.026 14.126-18.08 0-13.997-6.738-21.709-16.006-21.709zM285.959 79.666l-2.009.259c-2.916.389-3.306.972-2.396 3.823l8.748 27.608h.13l10.369-32.534h1.555l11.729 32.469h.13c2.657-8.166 6.417-21.84 7.518-26.506.908-3.758.585-4.537-2.333-4.86l-1.879-.259v-1.491h13.738v1.491c-4.277.518-4.73.778-6.868 6.675-.585 1.62-5.315 16.525-10.76 34.347h-1.75l-11.663-31.69-.13.129-10.564 31.561h-1.814l-11.211-34.801c-1.75-5.379-2.723-5.832-6.415-6.221v-1.491h15.876v1.491zM375.115 120.753h-1.686L345.304 86.6h-.128v16.526c0 6.805.259 10.304.518 12.313.324 2.268 2.073 3.176 6.351 3.369v1.491H336.49v-1.491c3.564-.129 5.25-1.101 5.573-3.369.26-2.009.521-5.508.521-12.313V89.062c0-4.666-.066-5.703-1.233-7.192-1.23-1.556-2.98-2.01-5.702-2.204v-1.491h9.462l27.283 32.663h.129v-15.49c0-6.804-.26-10.303-.519-12.313-.323-2.268-2.074-3.175-6.352-3.37v-1.491h15.555v1.491c-3.563.129-5.25 1.102-5.573 3.37-.261 2.01-.519 5.509-.519 12.313v25.405z" })
    )
  );
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    "svg",
    _extends({ version: "1.1", viewBox: "0 0 384 192", role: "img", "aria-labelledby": "title" }, props),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "title",
      { id: "title" },
      "Brown University Logo"
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#FFF" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M39.3 25.6c.2.3.5.8.9 1.4 1 1.7 2.6 7.9 4.6 10 1.1-.7 2.9-1.7 4-2-.2-.4-1.4-2.3-2.6-4-2.4-3.2-4.1-4.9-4.3-5.2-.8 0-1.9 0-2.6-.2zM57.4 33.9c.5-3.3-.6-8.7-1.3-10.1-.8-.2-1.7-.5-2.4-.8-.1.4-.7 2.6-.9 5.9-.1 1.8-.1 4.4.3 5 1.1-.1 2.9-.1 4.3 0zM73.1 53.3c0-9.9-7.7-17.6-17.6-17.6-9.7 0-17.6 7.9-17.6 17.6 0 .5.1 1.4.3 2.4 5.1-1.2 11.8-1 14.8 1.4 4.8-2.8 11.8-2.9 16.9 0 1-.5 2.1-.9 3.1-1.2 0-1 .1-2 .1-2.6zm-21.5-6c-.1 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1v-.2c-.2-.3-1.1-.6-2.5.3-.7.4-1.5.1-.3-.9 1.3-1.1 2.5-1.7 3.5-1.9 1.8-.1 4.1.2 5.2.7.5.2 0 2.4-.1 2.4-.4-.1-1.2-.4-1.8-.3v.1zm5.9 6.1c-.4 1-4.1 1.4-4.7 0-.3-.5-.6-1.9-.1-1.6.8.5 3.8.1 4.4 0 .5-.1.2-.8.5-.7.2 0 .2 1.3-.1 2.3zm8.7-5.8c-.9-.8-2.1-1.1-2.6-.8v.2c.1 1.1-.7 2.1-1.9 2.2-1.1.1-2.1-.7-2.2-1.9v-.1c-.7-.2-1.9.2-2.1.1-.1 0-.6-2.1.1-2.4 1.8-.7 7.5-1.1 9.1 2.1.2.5.1 1-.4.6zM67.2 25.4c-2.1 1.8-5.2 6-5.6 9.4 1 .4 3.5 1.6 3.9 1.9 2.5-2.5 2-5.3 3-7.4.4-.9.8-1.6 1.1-2.1-.8-.4-1.7-1.1-2.4-1.8zM22 86.1c-2.6.1-5.2 1.1-6.7.9v17.7s1 .7 3.6 0c3.4-1 4.9.1 4.9.1V86.9s-.4-.8-1.8-.8z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M46.2 78.3H3.9v38.4h42.4c-.1 0-.1-38.4-.1-38.4zm-6.4 30.5H27.7v1.5h-5v-1.5H10.5V88.3h2.6v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6l.1 20.5zM88.9 86.1c-1.4 0-1.8.8-1.8.8v17.8s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0V87c-1.5.2-4.1-.8-6.7-.9z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M28.3 86.1c-1.4 0-1.8.8-1.8.8v17.8s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0V87c-1.5.2-4.1-.8-6.7-.9zM79.6 32.1c-.5.3-1.5.9-1.9 1.2-2.4 1.8-7.7 4.3-9 5.7 1 .9 2.4 2.4 3.1 3.7.6 0 2.3-1.4 5.7-5.4 1.1-1.3 2.2-1.9 4.3-3.1-.8-.6-1.6-1.3-2.2-2.1zM87.4 142.2V160s1.5-1.1 4.9-.1c2.6.8 3.6 0 3.6 0v-17.7c-1.5.3-4.1-.8-6.7-.9-1.4.1-1.8.9-1.8.9zM76.2 142.3V160s1 .7 3.6 0c3.4-1 5 .1 5 .1v-17.8s-.4-.8-1.8-.8c-2.7 0-5.3 1.1-6.8.8zM82.6 86.1c-2.6.1-5.2 1.1-6.7.9v17.7s1 .7 3.6 0c3.4-1 4.9.1 4.9.1V86.9s-.4-.8-1.8-.8z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M107 78.3H64.7v38.4H107V78.3zm-6.3 30.5H88.6v1.5h-5v-1.5H71.4V88.3H74v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6l.1 20.5zM11.3 56.4c-3.2-.1-5.9.8-6.9 2.5-1.7 3.1.3 5.8 1.6 6.5 2.8 1.7 5.5.6 5.7-.5-.8-.9-2.1-2.8-2.8-2.8-1.1 0-1-1.4-.2-1.7 1.9-.6 3.7 3 6.4 4.9 2.4 1.7 5.8.5 5.8-.2-1.5-1.4-3.3-8.5-9.6-8.7zM49.8 57.7c-3.7-1.8-9-1.2-13.4.4 1.2 1.6 3.2 5.4 4.3 6.7 2 2.5 5.5 1.2 5.6.5-.2-.5-2.1-2.9-2.8-3.3-.7-.4-1-1-.7-1.5.6-.9 2.1 0 2.8.9.8 1 3 3.7 3.7 4.2 2.2 1.5 6.3.7 6-.6-1.3-1.8-1.9-5.6-5.5-7.3zM41.8 39.4c-3-2.5-5.9-3-10.3-5.1-1-.5-2.7-1.6-2.8-1.7-.1-.1-.3-.2-.6-.4-.3.8-.8 2-1.3 2.6.7.9 5.7 6.6 12.1 8.4.7-1.2 1.8-2.6 2.9-3.8zM36.9 46.9c-1.1-1.1-3.4-2.1-6.4-1.9-6.1.5-10.1.1-12.3-.2-3.9-.6-6.4 0-8.3 0-6 0 .2.5.9.8 2.8 1.1 8.5 2.5 12.9 2.2 2.2-.2 5.8 1.2 6.4 1.4 1.6.6 4.5 1.5 6.1 1.5 0-.8.4-2.9.7-3.8zM75.8 64.9c2.2 2.3 5.3 1.3 5.4.6-.3-.5-1.7-2.5-2.5-3-.7-.4-1.1-1-.8-1.5.6-.9 1.8-.3 2.6.7s2.9 3.8 3.7 4.2c2 1.1 6.3.7 5.9-.6-1.2-1.9-2-5.7-5.6-7.4-3.7-1.7-8.5-1.3-12.9.3 1 1.5 3.1 5.5 4.2 6.7zM105.9 43.8c-.3 0-1.4-.2-2.2-.2-1 0-7.3 0-9 .3-3.5.6-10.4.3-14.1.1-2.8-.1-6 1-7 1.5 0 0 1.1 2.7 1.1 4.5 1.2.2 2.3-1.3 5.7-1.2 3.5.1 12.3-.4 16.7-2.1 3.3-1.3 6.1-1.9 8.3-2.4.8-.1 2-.2.5-.5zM23.8 160v-17.8s-.4-.8-1.8-.8c-2.6.1-5.2 1.1-6.7.9V160s1 .7 3.6 0c3.4-1.1 4.9 0 4.9 0z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M26.9 26.2c.3-.2.7-.2 1-.1 3 1 7.3.3 9.3-2.9.3-.4.8-.6 1.3-.4 2.1.8 6.3 1.2 11.5-4 .4-.4 1-.3 1.4 0 4.5 3.6 9.2 3.9 14 .7.3-.2.7-.5 1-.3.3.1.6.4.6.8 1.6 7 9 6.4 11.2 6 .3 0 .6 0 .8.2.2.2.4.4.4.7.2 1.7 2.1 4.9 5.2 6.5 2.7 1.4 5.7 1.3 8.8-.3.3-.2.7-.2 1 0 4 2.1 7.6 2.3 9.9.3 1.6-1.4 2.3-3.6 1.6-5.5-.7-2.1-2.8-3.5-5.9-3.7-.5 0-.9-.4-1-.9-.3-1.7-1.2-3.1-2.8-4.1-2.4-1.4-5.8-1.6-9.3-.5-.3.1-.6.1-.9-.1-.3-.2-.5-.4-.5-.8-.2-1.3-.8-3.1-2.4-4.1-1.7-1.1-4.4-1-7.6.1-.5.2-1.1 0-1.3-.5-2.1-4-5-6.6-8.5-7.5-3.1-.8-6.5-.2-9.5 1.6-.4.2-.9.2-1.2 0-2.9-2.2-6.4-2.9-9.6-1.9-3.1.9-5.5 3.4-6.6 6.8-.1.3-.3.5-.6.6-.3.1-.6.1-.9 0-4.7-1.9-8.6-1.9-11.2.1-2.2 1.7-2.9 4.4-2.8 5.2.1.5-.3 1-.8 1.2l-1.1.3c-2.6.6-5.3 1.2-6.2 5.4-.1.5-.5.8-1 .9-4.6.5-7.6 2.1-8.2 4.6-.4 1.8.4 3.8 2 4.8 1.6 1.1 3.6 1 5.4-.3.3-.2.7-.3 1-.1 2.7 1 7 .8 9.7-1.3 1.9-1.5 2.7-3.8 2.2-6.7.2-.2.3-.6.6-.8zm72.4.3c2.7-.6 6 1.4 5 5-.2.6-1.7.7-1.6 0 .2-3-1.3-3.3-3.3-3.3-.8.1-.7-1.6-.1-1.7zm-11.6-5.4c2.6-1.5 8-1.2 9.7 3.6.3.8-.8 2.2-1.5 1-2-3.7-5.3-3.7-8-2.7-.7.2-1.2-1.4-.2-1.9zm-11.4-5.6c2.4-.9 6.6-1.2 7.7 2.8.3 1.1-1.1 1.7-1.4.9-1.1-3-3.3-2.8-5.8-2-1.1.4-.9-1.5-.5-1.7zm-20-4.6c1.8-2.9 11-5.5 15.7 2.6.5.9-.2 1.4-.7 1.8-.4.3-.6-.3-.8-.7-4-6.4-11.3-4.7-13.2-1.7-.4.5-1.5-1.1-1-2zm-14.8.5c1.6-2.6 7.2-6.5 12.1-2.2.6.5-.1 2.3-.7 1.9-4.5-3.1-8-.6-9.9 1.6-1 1.1-1.9-.7-1.5-1.3zM14.9 29.3c-1.9 0-3.4 0-4.7 1.5-1.4 1.5-1.1 2.4-1.3 2.7-.4.4-1.4-.3-1.3-1.1.1-3.6 4.4-5 7-4.7.9.1 1.2 1.6.3 1.6zm7.6-6c-2.8.3-3.6 1.6-4.1 3.2-.2.6-1.7.2-1.5-1 .7-3.4 4.4-4.2 5.8-3.9.5 0 .4 1.6-.2 1.7zm2.4-3.7c.6-3 3.5-7.4 10.2-5.7.8.2.3 2.3-.5 1.9-4.9-1.9-7.3 1.8-8.1 4.7-.2.5-1.8.4-1.6-.9zM64.7 185.3c10.7-3.1 21.2-7.2 28.4-13.8 2.5-2.3 4.6-4.7 6.4-7.4H88.6v1.5h-5v-1.5H71.4v-20.5H74v-3.7c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6v18.5c3.9-6.7 5.7-15 6.3-26.6v-1.7H64.7v51.5zM31.4 159.9c2.6.8 3.6 0 3.6 0v-17.7c-1.5.3-4.1-.8-6.7-.9-1.4 0-1.8.8-1.8.8V160s1.5-1.1 4.9-.1z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M4 135.5c.4 10.6 2.4 19.3 6.5 26.5v-18.3h2.6V140c2.6.6 6.9-.8 8.8-.8 2.1 0 3.2.9 3.2.9s1.1-.9 3.2-.9c1.9 0 6.2 1.4 8.8.8v3.7h2.6v20.5h-12v1.5h-5v-1.5H11.8c1.7 2.6 3.8 5 6.2 7.3 6.7 6.3 17.3 10.6 28.2 13.8v-51.4H3.9l.1 1.6z" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#231F20" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M111.7 42.7c-.6-.5-7.4-1.3-8.4-1.3s-6.9.1-9.1.4c-3.5.5-9.5.5-14 0-1.6-.2-3.5.2-4.9.7.3-.2.6-.5 1-.9 1.3-1.4 2.8-4 5.5-5.3.7-.3 1.3-.7 1.9-1 2.2 1.1 5.8 1.9 10.1-.2 6.5 3.3 10.4 1.1 11.8-.1 1.7-1.4 2.6-3.5 2.6-5.6 0-.7-.1-1.5-.4-2.2-.9-2.8-3.5-4.6-7.1-5-.2-.8-.5-1.5-.9-2.1.4-.5.8-1 1.1-1.3.3-.4 1.4-2.2-1.5-.7-.1.1-.4.2-.8.4-.4-.4-.8-.8-1.4-1.1-2.7-1.6-6.3-1.8-10-.8-.5-2-1.5-3.7-3.1-4.6-1.6-1-3.7-1.3-6.1-.9.2-.4.3-.7.4-.9 1.1-2.3.5-2.8-.6-1.8-1.3 1.1-2.1 1.9-2.7 2.6-2.3-3.7-5.3-6.2-8.9-7.1-3.1-.8-6.5-.4-9.5 1.1-.2-1.5-.4-2.8-.6-3.5-.6-1.8-1.2-.4-1.3.2-.1.8-.3 1.8-.5 3-3-1.6-6.4-2.1-9.5-1.1-3.5 1.1-6.1 3.6-7.6 7.2-1.3-.4-2.4-.7-3.5-.9-.6-.8-1.6-1.9-2.9-3-.9-.8-1.6-.4-1.1 1.2.2.6.4 1.1.6 1.6-2.5.1-4.3.9-5.5 1.9-2.4 1.8-3.4 4.5-3.6 6.2-.1 0-.3.1-.3.1-2 .5-4.7 1.2-6.4 3.9-.3-.2-.5-.3-.6-.4-5.1-3.4-2.7 1-.8 2.9-6.7 1-8.6 4.2-9.1 6.1-.1.5-.2 1-.2 1.5 0 2.2 1.1 4.4 3.1 5.7 2.3 1.5 5 1.4 7.4-.1 3.2 1 7.6.9 10.9-1.5 1.9 2 3.4 3.4 4.2 4.2 2 2 5 3.5 6.5 4.1-1.5-.6-4-1.2-6.5-.9-5.4.8-9-.2-11.3-.5-3.8-.4-7.7.3-9.6.3-2.1 0-5 1-6.4 1.2-1.5.2-1.4 1.2.7 1.8 2.1.6 6.1.9 7.1 1.4 3.4 1.5 9.2 2.7 13.2 2.4 2.9-.2 5.8 1.2 6.5 1.4 1.4.4 5 1.4 6.4 1.4 0-.1 0 2 .1 3-.5.2-1.1.4-1.5.6-1.6-1-8.7-3.8-17.3-.3-1.8-.6-5.7-2.8-10.9-1C-.1 57 .9 63 3.1 65.7c2.9 3.7 8.3 2.9 9.8 1.1 3.5 2.3 7.1 1.5 9.6-.1 1.7 1 10.1 2.7 16.4.1.9.6 4.4 2.5 8.8.2 2.6 1.5 6.9 1.7 9.1-.3.8.7 3.2 1.6 8.3 1.6 6.1-.1 7.5-1 8.4-1.7 1.3.6 4.7 2.4 9 .6 2.3 1.4 6.9 1.4 9.3-.3 4.5 2 12.7 1.1 14.8-.3 3.7-2.6 1.9-7.8-2.2-10.2-8-4-15.4-.9-17.4.1-2.4-1.6-7.3-2.6-12.4-1.7.1-.6 0-1.3 0-2.1v-.2c1-.3 2.5-1.4 5.4-1.6 4-.3 13.4-.1 18.1-2.6 2.7-1.4 12-3.2 13.3-3.9 1.3-.7 1-1.2.3-1.7zm-34.2-5.4c-3.4 4-5.1 5.4-5.7 5.4-.6-1.3-2.1-2.8-3.1-3.7 1.2-1.4 6.5-3.8 9-5.7.4-.3 1.4-.9 1.9-1.2.6.8 1.4 1.5 2.2 2.1-2.1 1.2-3.2 1.9-4.3 3.1zm-48.9-8.6c2.8.5 6.2-.2 8.6-2.4 3 4.7 3 9 5.9 12-3.6-3.5-6.8-3.4-11.9-6.2-.9-.5-2.2-1.3-2.6-1.5.1-.4.1-.9.1-1.4 0-.2-.1-.4-.1-.5zm22 5.3l.1.2-1.8-2.7c-.5-.8-1.2-1.7-2-2.6-1.2-1.5-2.3-2.7-3.1-3.6 2.1-.5 4.4-1.7 6.9-4.1.3.2.5.3.8.5-.1.8-.3 1.5-.4 2.1-.6 3.2-.6 5.6-.7 6.7.1 1 .2 2.5.2 3.5zm-4.5-3c1.3 1.6 2.4 3.6 2.6 4-1.1.4-2.9 1.3-4 2-2-2.1-3.6-8.3-4.6-10-.4-.6-.7-1.1-.9-1.4.7.2 1.8.2 2.5.2.3.3 2 2 4.4 5.2zm9.4 4.7c9.9 0 17.6 7.7 17.6 17.6 0 .7 0 1.7-.2 2.6-1.1.3-2.1.7-3.1 1.2-5.1-3-12.1-2.8-16.9 0-3-2.4-9.7-2.6-14.8-1.4-.2-1-.3-1.9-.3-2.4.1-9.8 7.9-17.6 17.7-17.6zm-2.6-6.8c.2-3.3.8-5.5.9-5.9.7.3 1.5.6 2.4.8.6 1.4 1.7 6.8 1.3 10.1-1.5-.1-3.2-.1-4.3 0-.3-.5-.4-3.2-.3-5zm15.6.4c-1 2.1-.5 4.9-3 7.4-.4-.3-2.9-1.5-3.9-1.9.4-3.4 3.6-7.6 5.6-9.4.6.7 1.5 1.4 2.4 1.8-.2.4-.7 1.2-1.1 2.1zm2.7-.7c.1-.1.2-.3.3-.5 1.9.6 4 .8 6 .6.2.7.5 1.4.9 2.1-1 .5-4.1 2.6-8.5 5.1-1.2.6-1.9 1.3-2.3 1.7.5-.7 1.1-1.5 1.5-2.5.7-2.1.5-3.7 2.1-6.5zm-10.8 2.6c-.5 1.2-.7 1.9-.9 2.6.4-2.6-.3-6.5-1.1-9.8 2.3 0 4.6-.6 6.9-1.9.2.5.4 1 .7 1.4-1.3 1.2-4.4 4.6-5.6 7.7zm-36.1 2.7c-2.6 2.1-7 2.3-9.7 1.3-.3-.1-.7-.1-1 .1-1.8 1.3-3.7 1.4-5.4.3-1.6-1.1-2.4-3.1-2-4.8.6-2.5 3.6-4.2 8.2-4.6.5 0 .9-.4 1-.9.8-4.2 3.5-4.8 6.2-5.4l1.1-.3c.5-.1.9-.6.8-1.2-.1-.8.6-3.5 2.8-5.2 2.6-2 6.5-2 11.2-.1.3.1.6.1.9 0 .3-.1.5-.3.6-.6 1.2-3.4 3.5-5.9 6.6-6.8 3.2-1 6.7-.3 9.6 1.9.4.3.9.3 1.2 0 2.9-1.9 6.4-2.5 9.5-1.6 3.5.9 6.4 3.5 8.5 7.5.2.5.8.7 1.3.5 3.2-1.1 5.9-1.1 7.6-.1 1.7 1 2.2 2.8 2.4 4.1 0 .3.2.6.5.8.3.2.6.2.9.1 3.4-1.2 6.9-1 9.3.5 1.5.9 2.5 2.3 2.8 4.1.1.5.5.9 1 .9 3 .2 5.1 1.5 5.9 3.7.6 1.9 0 4.1-1.6 5.5-2.3 1.9-5.9 1.8-9.9-.3-.3-.2-.7-.2-1 0-3.1 1.6-6.1 1.7-8.8.3-3.2-1.6-5-4.8-5.2-6.5 0-.3-.2-.5-.4-.7-.2-.2-.5-.2-.8-.2-2.2.4-9.6 1-11.1-6.1-.1-.3-.3-.6-.6-.8-.3-.1-.7.1-1 .3-4.8 3.2-9.5 3-14-.7-.4-.3-1.1-.4-1.4 0-5.2 5.2-9.4 4.8-11.5 4-.5-.2-1 0-1.3.4-2 3.2-6.3 3.8-9.3 2.9-.4-.1-.7-.1-1 .1-.3.2-.4.6-.4 1 .1 2.8-.6 5.1-2.5 6.6zm2.5 1c.5-.6 1-1.8 1.3-2.6.3.2.5.3.6.4.1 0 1.8 1.2 2.8 1.7 4.5 2.1 7.3 2.6 10.3 5.1-1.1 1.2-2.2 2.6-2.9 3.8-6.4-1.8-11.4-7.5-12.1-8.4zm3.3 14.2c-.6-.2-4.3-1.5-6.4-1.4-4.5.3-10.1-1.1-12.9-2.2-.7-.3-6.8-.8-.9-.8 2 0 4.4-.5 8.3 0 2.3.3 6.3.7 12.3.2 3-.2 5.2.7 6.4 1.9-.3.9-.7 3-.8 3.7-1.5.1-4.4-.8-6-1.4zM15 65.3c-2.7-1.9-4.5-5.5-6.4-4.9-.8.3-.9 1.7.2 1.7.7 0 2.1 2 2.8 2.8-.2 1-2.9 2.1-5.7.5-1.2-.7-3.2-3.4-1.5-6.4 1-1.7 3.7-2.6 6.9-2.5 6.3.1 8 7.3 9.5 8.6 0 .7-3.3 1.9-5.8.2zm9.1-.1c-2.4-1.1-4.2-6.5-4.9-7.2-.3-.3 4.2-1.9 8.7-1.5 7.7.7 7.7 5.5 9.7 7.9.7.8-6.3 2.8-13.5.8zm25.3.5c-.7-.5-2.9-3.2-3.7-4.2-.8-.9-2.2-1.8-2.8-.9-.4.5 0 1.1.7 1.5.7.4 2.6 2.8 2.8 3.3-.1.7-3.6 2-5.6-.5-1-1.3-3.1-5.1-4.3-6.7 4.4-1.6 9.6-2.1 13.4-.4 3.6 1.7 4.2 5.5 5.6 7.4.2 1.2-3.9 2-6.1.5zm9.7-.1c-2.4-1.1-4.2-6.5-4.9-7.2-.3-.3 4.2-1.9 8.7-1.5 7.7.7 7.8 5.5 9.7 7.8.7.9-6.3 2.9-13.5.9zm38.7-9c7.7.7 9.6 5.7 8.8 7.4-.7 1.4-5.4 3.3-12.6 1.3-2.4-1.1-4.2-6.5-4.9-7.2-.3-.2 4.2-1.9 8.7-1.5zm-13.1 1.2c3.6 1.7 4.4 5.5 5.6 7.4.3 1.3-4 1.7-5.9.6-.8-.4-2.9-3.2-3.7-4.2-.8-.9-2-1.6-2.6-.7-.4.5.1 1.1.8 1.5.8.5 2.2 2.5 2.5 3-.1.7-3.2 1.7-5.4-.6-1.1-1.2-3.2-5.2-4-6.8 4.2-1.5 9-1.9 12.7-.2zm20.7-13.4c-2.2.5-5 1.1-8.3 2.4-4.4 1.7-13.1 2.2-16.7 2.1-3.4-.1-4.5 1.4-5.7 1.2-.1-1.8-1.1-4.5-1.1-4.5 1-.5 4.2-1.6 7-1.5 3.8.1 10.6.4 14.1-.1 1.7-.3 8-.3 9-.3.7 0 1.9.1 2.2.2 1.5.2.3.3-.5.5z" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M14.9 29.3c-1.9 0-3.4 0-4.7 1.5-1.4 1.5-1.1 2.4-1.3 2.7-.4.4-1.4-.3-1.3-1.1.1-3.6 4.4-5 7-4.7.9.1 1.2 1.6.3 1.6M22.5 23.3c-2.8.3-3.6 1.6-4.1 3.2-.2.6-1.7.2-1.5-1 .7-3.4 4.4-4.2 5.8-3.9.5 0 .4 1.6-.2 1.7M34.6 15.9c-4.9-1.9-7.3 1.8-8.1 4.7-.1.4-1.7.2-1.5-1 .6-3 3.5-7.4 10.2-5.7.7.3.2 2.3-.6 2M52.9 11.1c-4.5-3.1-8-.6-9.9 1.6-.9 1.1-1.8-.7-1.5-1.3 1.6-2.6 7.2-6.5 12.1-2.2.5.5-.1 2.3-.7 1.9M71.4 15.3c-.4.3-.6-.3-.8-.7-4-6.4-11.3-4.7-13.2-1.7-.4.6-1.5-1-.9-1.9 1.8-2.9 11-5.5 15.7 2.6.4.8-.3 1.3-.8 1.7M82.7 19.3c-1.1-3-3.3-2.8-5.8-2-1.2.4-.9-1.6-.5-1.7 2.4-.9 6.6-1.2 7.7 2.8.3 1.1-1.1 1.7-1.4.9M95.9 25.6c-2-3.7-5.3-3.7-8-2.7-.6.2-1.2-1.3-.2-1.9 2.6-1.5 8-1.2 9.7 3.6.3.9-.8 2.3-1.5 1M104.3 31.5c-.2.6-1.7.7-1.6 0 .2-3-1.3-3.3-3.3-3.3-.8 0-.7-1.6-.1-1.7 2.7-.6 5.9 1.3 5 5" }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M51.6 47.3c-.1 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1v-.2c-.2-.3-1.1-.6-2.5.3-.7.4-1.5.1-.3-.9 1.3-1.1 2.5-1.7 3.5-1.9 1.8-.1 4.1.2 5.2.7.5.2 0 2.4-.1 2.4-.4-.1-1.2-.4-1.8-.3v.1M57.5 53.4c-.4 1-4.1 1.4-4.7 0-.3-.5-.6-1.9-.1-1.6.8.5 3.8.1 4.4 0 .5-.1.2-.8.5-.7.2 0 .2 1.3-.1 2.3M66.2 47.6c-.9-.8-2.1-1.1-2.6-.8v.2c.1 1.1-.7 2.1-1.9 2.2-1.1.1-2.1-.7-2.2-1.9v-.1c-.7-.2-1.9.2-2.1.1-.1 0-.6-2.1.1-2.4 1.8-.7 7.5-1.1 9.1 2.1.2.5.1 1-.4.6" })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M64.7 78.3H107v38.4H64.7V78.3zm-60.8 0h42.4v38.4H3.9V78.3zm42.3 106.9c-10.9-3.2-21.5-7.5-28.2-13.8-2.4-2.3-4.4-4.7-6.2-7.3h10.8v1.5h5v-1.5h12.1v-20.5h-2.6v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6V162c-4.1-7.2-6.1-15.9-6.5-26.5l-.1-1.6h42.4v51.3zm-30.9-25.3v-17.7c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8V160s-1.5-1.1-5-.1c-2.6.8-3.5 0-3.5 0zm11.2.1v-17.8s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9V160s-1 .7-3.6 0c-3.4-1.1-4.9 0-4.9 0zm36 25.9l-7 1.8-7-1.8v-54.4H3.9V119h44.6V78.3h14V119H107v12.5H62.5v54.4zm38.2-23.7v-18.5h-2.6V140c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h10.9c-1.8 2.6-3.9 5.1-6.4 7.4-7.2 6.5-17.7 10.7-28.4 13.8V134H107v1.7c-.6 11.5-2.4 19.7-6.3 26.5zM96 142.3V160s-.9.7-3.6 0c-3.4-1-4.9.1-4.9.1v-17.8s.4-.8 1.8-.8c2.6 0 5.1 1.1 6.7.8zm-11.3-.1V160s-1.5-1.1-5-.1c-2.6.8-3.6 0-3.6 0v-17.7c1.5.3 4.1-.8 6.7-.9 1.5.1 1.9.9 1.9.9zM1.3 75.7v56.8c0 18.8 4.7 31.8 14.7 40.9 10 9.1 24.9 13.7 39.5 17.1 15-3.5 29.4-8 39.5-17.1 10-9.1 14.7-22.1 14.7-40.9V75.7H1.3z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M37.2 88.3v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h12.1V88.3h-2.6zm-13.4 16.4s-1.5-1.1-4.9-.1c-2.6.8-3.6 0-3.6 0V87c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8v17.8zm11.2-.1s-1 .7-3.6 0c-3.4-1-4.9.1-4.9.1V86.9s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9v17.6zM98.1 88.3v-3.7c-2.6.6-6.9-.8-8.8-.8-2.1 0-3.2.9-3.2.9s-1.1-.9-3.2-.9c-1.9 0-6.2 1.4-8.8.8v3.7h-2.6v20.5h12.1v1.5h5v-1.5h12.1V88.3h-2.6zm-13.7 16.4s-1.5-1.1-4.9-.1c-2.6.8-3.6 0-3.6 0V87c1.5.3 4.1-.8 6.7-.9 1.4 0 1.8.8 1.8.8v17.8zm11.2-.1s-1 .7-3.6 0c-3.4-1-4.9.1-4.9.1V86.9s.4-.8 1.8-.8c2.6.1 5.2 1.1 6.7.9v17.6z" })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      { fill: "#E11B22" },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M48.4 185.9l7.1 1.8 7-1.8v-54.4H107V119H62.5V78.3H48.4V119H3.9v12.5h44.5zM27.9 56.5c-4.5-.4-9 1.2-8.7 1.5.7.7 2.6 6.1 4.9 7.2 7.2 2 14.1 0 13.4-.8-1.8-2.4-1.8-7.2-9.6-7.9zM62.9 56.9c-4.5-.4-9 1.2-8.7 1.5.7.7 2.6 6.1 4.9 7.2 7.2 2 14.1 0 13.4-.9-1.8-2.4-1.8-7.2-9.6-7.8zM94 65.3c7.2 2 11.9.1 12.6-1.3.8-1.7-1.1-6.7-8.8-7.4-4.5-.4-9 1.2-8.7 1.5.7.7 2.5 6.2 4.9 7.2z" })
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      "g",
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "g",
        { fill: "#FFF" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M156.2 78.2c4.7 0 7.3.8 9.5 2.3 2.2 1.6 3.4 3.9 3.4 7.1 0 5.7-5.4 8.5-8.5 9.3v.1c5.9.8 11.2 4.3 11.2 10.9 0 4.6-2.3 7.8-6 10-3.3 1.8-7.5 2.5-12.4 2.5h-14.9v-1.5c5.4-.4 6-.8 6-7.9V87.6c-.1-7.1-.5-7.5-5.6-7.9v-1.5h17.3zm-6.4 18.3h4.1c6.2 0 9.3-2.9 9.3-8.2 0-3.9-1.6-8.2-9.3-8.2-2.1 0-3 .2-3.6.4-.4.1-.6.4-.6 1.7l.1 14.3zm0 1.9v14.1c0 4.3.8 5.8 5.6 5.8 5.4 0 10-2.7 10-9.6 0-7.1-5.2-10.3-11.9-10.3h-3.7zM191.1 110.9c0 7.1.5 7.5 5.8 7.9v1.5h-17.2v-1.5c5.4-.4 6-.8 6-7.9V87.6c0-7.1-.5-7.5-5.7-7.9v-1.5h16.5c4.1 0 7.8.6 10.2 2.2 2.6 1.6 4.3 4.5 4.3 8.3 0 5.4-3.3 9.2-8.6 11.3 1.2 1.9 3.8 6.4 5.8 9.3 2.3 3.4 3.7 5.2 5.4 7.1 1.4 1.6 2.5 2.7 4.9 3.2l-.1 1.2h-.9c-7.5-.2-9.7-2.5-12.2-6-2-2.9-4.7-7.7-6.5-10.8-1-1.7-2.1-2.3-4.1-2.3h-3.5l-.1 9.2zm0-11h3.8c2.7 0 4.7-.3 6.5-1.8 2.8-2.2 3.8-5.4 3.8-8.6 0-6.8-4.9-9.5-9.8-9.5-2.2 0-3.1.1-3.6.3-.4.1-.6.5-.6 1.8v17.8zM264.3 98.7c0 13.5-9.4 22.6-21.8 22.6-12.2 0-20.9-9.3-20.9-21.6 0-10.9 7.6-22.5 22.1-22.5 11.2 0 20.6 8.7 20.6 21.5zM242 79.3c-7.6 0-14.1 6.3-14.1 18.5 0 12.5 6.5 21.3 16 21.3 7.8 0 14.1-6 14.1-18.1 0-13.9-6.7-21.7-16-21.7zM286 79.7l-2 .3c-2.9.4-3.3 1-2.4 3.8l8.7 27.6h.1l10.4-32.5h1.6l11.7 32.5h.1c2.7-8.2 6.4-21.8 7.5-26.5.9-3.8.6-4.5-2.3-4.9l-1.9-.3v-1.5h13.7v1.5c-4.3.5-4.7.8-6.9 6.7-.6 1.6-5.3 16.5-10.8 34.3h-1.8L300.2 89l-.1.1-10.6 31.6h-1.8l-11.2-34.8c-1.8-5.4-2.7-5.8-6.4-6.2v-1.5H286v1.5zM375.1 120.8h-1.7l-28.1-34.2h-.1v16.5c0 6.8.3 10.3.5 12.3.3 2.3 2.1 3.2 6.4 3.4v1.5h-15.6v-1.5c3.6-.1 5.2-1.1 5.6-3.4.3-2 .5-5.5.5-12.3v-14c0-4.7-.1-5.7-1.2-7.2-1.2-1.6-3-2-5.7-2.2v-1.5h9.5l27.3 32.7h.1V95.3c0-6.8-.3-10.3-.5-12.3-.3-2.3-2.1-3.2-6.4-3.4v-1.5h15.6v1.5c-3.6.1-5.2 1.1-5.6 3.4-.3 2-.5 5.5-.5 12.3l-.1 25.5z" })
      )
    )
  );
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: 20px 0 30px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", "\n      margin: 0 auto;\n      margin-top: -50px;\n      max-width: 1300px;\n      position: relative;\n      width: 96%;\n      z-index: 10;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 16px 0;\n  width: 92%;\n  z-index: 10;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: ", ";\n  font-family: ", ";\n  font-size: 1em;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  padding: 11px 5px;\n  text-transform: uppercase;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 1rem 0 1rem;\n  width: 92%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #ddd;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      margin: 0 auto;\n      margin-top: 2rem;\n      width: 95%;\n      z-index: 10;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // TODO: collapse






var MobileBannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), function (props) {
  return props.banner && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
});
var MobileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var MobileMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var MobileMenuTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject5(), _constants_colors__WEBPACK_IMPORTED_MODULE_7__["default"].red, _constants_typography__WEBPACK_IMPORTED_MODULE_8__["sansBold"]);
var MobileNavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7(), function (props) {
  return props.banner && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8(), _constants_colors__WEBPACK_IMPORTED_MODULE_7__["default"].white);
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject9());

var SiteNav =
/*#__PURE__*/
function (_Component) {
  _inherits(SiteNav, _Component);

  function SiteNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiteNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiteNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mobileNavIsOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMobileNavToggle", function () {
      return _this.setState(function (_ref) {
        var mobileNavIsOpen = _ref.mobileNavIsOpen;
        return {
          mobileNavIsOpen: !mobileNavIsOpen
        };
      });
    });

    return _this;
  }

  _createClass(SiteNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mobileMenuTitle = _this$props.mobileMenuTitle,
          mobileNavBreakpoint = _this$props.mobileNavBreakpoint,
          banner = _this$props.banner;
      var mobileNavIsOpen = this.state.mobileNavIsOpen;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fns__WEBPACK_IMPORTED_MODULE_3__["WindowSize"], {
        render: function render(_ref2) {
          var width = _ref2.width;
          // TODO: update when width doesn't return 0 on initial render
          // https://github.com/jaredpalmer/react-fns/issues/84
          var currentWidth = width === 0 ? window.innerWidth : width;
          var renderMobile = currentWidth < mobileNavBreakpoint;

          if (renderMobile) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileBannerWrapper, {
              banner: banner
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileMenuWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileMenuTitle, {
              type: "button",
              "aria-controls": "site-nav",
              "aria-expanded": mobileNavIsOpen,
              "aria-label": "Toggle navigation",
              onClick: _this2.handleMobileNavToggle
            }, mobileMenuTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_4__["default"], {
              "aria-controls": "site-nav",
              isOpen: mobileNavIsOpen,
              onOpen: _this2.handleMobileNavToggle,
              onClose: _this2.handleMobileNavToggle
            })), mobileNavIsOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileNavWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
              id: "site-nav",
              mobile: true
            }, _this2.props.children))));
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BannerWrapper, {
            banner: banner
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], null, _this2.props.children)));
        }
      });
    }
  }]);

  return SiteNav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

SiteNav.propTypes =  true ? {
  mobileMenuTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  mobileNavBreakpoint: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  banner: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
} : undefined;
SiteNav.defaultProps = {
  mobileMenuTitle: 'Site Navigation',
  mobileNavBreakpoint: _constants_breakpoints__WEBPACK_IMPORTED_MODULE_6__["default"].md,
  banner: false
};
SiteNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item;
SiteNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link;
/* harmony default export */ __webpack_exports__["default"] = (SiteNav);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-fns");

/***/ })
/******/ ])));
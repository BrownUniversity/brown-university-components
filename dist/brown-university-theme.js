/*! brown-university-theme v0.3.18 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "styled"], factory);
	else if(typeof exports === 'object')
		exports["brownUniversityTheme"] = factory(require("react"), require("styled-components"));
	else
		root["brownUniversityTheme"] = factory(root["React"], root["styled"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__) {
return /******/ (function(modules) { // webpackBootstrap
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

/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _components_Code__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return _components_Hamburger__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_SiteNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BannerText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
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

Banner.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['emerald', 'red', 'brown', 'yellow', 'gray', 'sand', 'lightBrown', 'mediumBrown', 'navy', 'skyblue']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default', 'small', 'medium', 'large']),
  src: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};
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
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(4)(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(5);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(7);

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _constants_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
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

BannerText.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BannerText);

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
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
  var data = _taggedTemplateLiteral(["\n  border-width: 0;\n  display: inline-block;\n  font-family: ", ";\n  font-style: normal;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  line-height: 1.5;\n  margin: 15px auto;\n  padding: 12px 25px 12px 20px;\n  text-align: center;\n  text-decoration: none !important;\n  text-transform: uppercase;\n  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;\n"]);

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

Button.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['red', 'yellow', 'brown', 'gray', 'emerald', 'skyblue', 'navy']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default', 'small', 'large']),
  outline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHue", function() { return curriedAdjustHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImages", function() { return backgroundImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgrounds", function() { return backgrounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFix", function() { return clearFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cover", function() { return cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return curriedDarken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desaturate", function() { return curriedDesaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalProperty", function() { return directionalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsis", function() { return ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluidRange", function() { return fluidRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueAndUnit", function() { return getValueAndUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideText", function() { return hideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideVisually", function() { return hideVisually; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiDPI", function() { return hiDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return curriedLighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return curriedMix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modularScale", function() { return modularScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacify", function() { return curriedOpacify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToHsl", function() { return parseToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToRgb", function() { return parseToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeholder", function() { return placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radialGradient", function() { return radialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableColor", function() { return curriedReadableColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retinaImage", function() { return retinaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return curriedSaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHue", function() { return curriedSetHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLightness", function() { return curriedSetLightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaturation", function() { return curriedSetSaturation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shade", function() { return curriedShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUnit", function() { return stripUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputs", function() { return textInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingFunctions", function() { return timingFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tint", function() { return curriedTint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toColorString", function() { return toColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transparentize", function() { return curriedTransparentize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

/**
 * Returns a given CSS value minus its unit (or the original value if an invalid string is passed).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the first argument to " + to + "(), got \"" + pxval + "\" instead.");
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the second argument to " + to + "(), got \"" + base + "\" instead.");
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error("Passed invalid pixel value (\"" + pxval + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    if (typeof newBase === 'string') {
      throw new Error("Passed invalid base value (\"" + base + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    return "" + newPxval / newBase + to;
  };
};

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em =
/*#__PURE__*/
pxtoFactory('em');

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0]
 *   '--unit': getValueAndUnit('100px')[1]
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]}
 *   --unit: ${getValueAndUnit('100px')[1]}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 *   '--unit': 'px'
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */


function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 'perfectFourth';
  }

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new Error("Invalid value passed as base to modularScale, expected number or em string but got \"" + base + "\"");
  }

  return realBase * Math.pow(realRatio, steps) + "em";
}

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem =
/*#__PURE__*/
pxtoFactory('rem');

/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${fontSize: between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${fontSize: between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new Error('minScreen and maxScreen must be provided as stringified numbers with the same units.');
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || !fromSizeUnit || !toSizeUnit || fromSizeUnit !== toSizeUnit) {
    throw new Error('fromSize and toSize must be provided as stringified numbers with the same units.');
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + fromSizeUnit + " + " + (100 * slope).toFixed(2) + "vw)";
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function ellipsis(width) {
  if (width === void 0) {
    width = '100%';
  }

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) {
    throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.');
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = cssProp, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _extends2, _extends3;

      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var obj = _ref;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new Error('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.');
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fallbacks, mediaQueries);
  } else {
    var _ref2, _ref3, _ref4;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new Error('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.');
    }

    return _ref4 = {}, _ref4[cssProp.prop] = cssProp.fromSize, _ref4["@media (min-width: " + minScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref2), _ref4["@media (min-width: " + maxScreen + ")"] = (_ref3 = {}, _ref3[cssProp.prop] = cssProp.toSize, _ref3), _ref4;
  }
}

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")";
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */


function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings;
  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');

  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }

  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings
    } // Removes undefined fields for cleaner css object.

  };
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */
function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      'background-color': 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @deprecated - placeholder has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */
function placeholder(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  return _ref = {}, _ref[parent + "::-webkit-input-placeholder"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref[parent + ":-moz-placeholder"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref[parent + "::-moz-placeholder"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref[parent + ":-ms-input-placeholder"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(["radial-gradient(", "", "", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i]; // Adds leading coma if properties preceed color-stops

    if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ", " + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += "" + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // Only adds substitution if it is defined
    } else if (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) + " ";
    }
  }

  return template.trim();
}
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */


function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }

  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject(), position, shape, extent, colorStops.join(', '))
  };
}

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}

/**
 * CSS to style the selection pseudo-element.
 *
 * @deprecated - selection has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */
function selection(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '';
  }

  return _ref = {}, _ref[parent + "::-moz-selection"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref[parent + "::selection"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles), _ref;
}

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

};

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */


function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return "0 " + width[0] / 2 + width[1] + " " + height[0] + height[1] + " " + width[0] / 2 + width[1];

    case 'left':
      return "" + height[0] / 2 + height[1] + " " + width[0] + width[1] + " " + height[0] / 2 + height[1] + " 0";

    case 'bottom':
      return "" + height[0] + height[1] + " " + width[0] / 2 + width[1] + " 0 " + width[0] / 2 + width[1];

    case 'right':
      return "" + height[0] / 2 + height[1] + " 0 " + height[0] / 2 + height[1] + " " + width[0] + width[1];

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
}; // needed for border-color


var reverseDirection = ['bottom', 'left', 'top', 'right'];
var NUMBER_AND_FLOAT = /(\d*\.?\d*)/;
/**
 * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent',
 *  'borderLeftColor': 'red !important',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = [parseFloat(width), String(width).replace(NUMBER_AND_FLOAT, '') || 'px'];
  var heightAndUnit = [parseFloat(height), String(height).replace(NUMBER_AND_FLOAT, '') || 'px'];

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  var reverseDirectionIndex = reverseDirection.indexOf(pointingDirection);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
    borderStyle: 'solid'
  }, borderColor.apply(void 0, Array.from({
    length: 4
  }).map(function (_, index) {
    return index === reverseDirectionIndex ? foregroundColor : backgroundColor;
  })));
}

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
}

var curriedAdjustHue =
/*#__PURE__*/
curry(adjustHue);

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}

var curriedDarken =
/*#__PURE__*/
curry(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
}

var curriedDesaturate =
/*#__PURE__*/
curry(desaturate);

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function grayscale(color) {
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: 0
  }));
}

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}

var curriedLighten =
/*#__PURE__*/
curry(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
}

var curriedMix =
/*#__PURE__*/
curry(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedOpacify =
/*#__PURE__*/
curry(opacify);

/**
 * Returns black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor =
/*#__PURE__*/
curry(readableColor);

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
}

var curriedSaturate =
/*#__PURE__*/
curry(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
}

var curriedSetHue =
/*#__PURE__*/
curry(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
}

var curriedSetLightness =
/*#__PURE__*/
curry(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
}

var curriedSetSaturation =
/*#__PURE__*/
curry(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
}

var curriedShade =
/*#__PURE__*/
curry(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
}

var curriedTint =
/*#__PURE__*/
curry(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
}

var curriedTransparentize =
/*#__PURE__*/
curry(transparentize);

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */


function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */


function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: positionKeyword
    }, directionalProperty.apply(void 0, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value

    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */


function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same tranisition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */
function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new Error('Property must be a string value.');
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}

// Helpers




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteralLoose; });
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f7f7f7;\n  border: 0.5px solid #dfe3e6;\n  border-radius: 3px;\n  font-family: ", ";\n  font-size: 0.65em;\n  padding: 0.5em 0.75em;\n  white-space: pre-wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/*
  inner Tag component
*/

var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.code(_templateObject(), _constants_typography__WEBPACK_IMPORTED_MODULE_3__["mono"]);
/*
  outer Code component
*/

var Code = function Code(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, props);
};

Code.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
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

Hamburger.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['red', 'gray', 'black', 'white']),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
Hamburger.defaultProps = {
  color: 'red',
  isOpen: false
};
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_loader_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
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

Loader.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
Loader.defaultProps = {
  height: 250
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
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

Nav.propTypes = {
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  sub: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
Nav.defaultProps = {
  navbar: false,
  mobile: false,
  sub: false
};
Nav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_4__["default"];
Nav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
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

NavItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
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
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  display: block;\n  font-family: ", ";\n  text-decoration: none;\n"]);

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
  var mobile = _ref3.mobile;

  if (mobile) {
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

NavLink.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_logo_black_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _svg_logo_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _constants_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
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
  var data = _taggedTemplateLiteral(["\n    padding: 0 0 0 33px;\n    width: calc(100% - 33px);\n  "]);

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

Navbar.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['brown', 'white']),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};
Navbar.defaultProps = {
  color: 'brown',
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _constants_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
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

SiteNav.propTypes = {
  mobileMenuTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  mobileNavBreakpoint: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  banner: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
SiteNav.defaultProps = {
  mobileMenuTitle: 'Site Navigation',
  mobileNavBreakpoint: _constants_breakpoints__WEBPACK_IMPORTED_MODULE_6__["default"].md,
  banner: false
};
SiteNav.Item = _Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item;
SiteNav.Link = _Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link;
/* harmony default export */ __webpack_exports__["default"] = (SiteNav);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotion", function() { return DeviceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDeviceMotion", function() { return withDeviceMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOrientation", function() { return DeviceOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDeviceOrientation", function() { return withDeviceOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNetwork", function() { return withNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoPosition", function() { return GeoPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGeoPosition", function() { return withGeoPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowSize", function() { return WindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWindowSize", function() { return withWindowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locales", function() { return Locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLocales", function() { return withLocales; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var isEmptyChildren = function (children) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) === 0;
};

function throttle(func, wait) {
    var timeout = null;
    var callbackArgs = null;
    var context = this;
    var later = function () {
        func.apply(context, callbackArgs);
        timeout = null;
    };
    return function () {
        if (!timeout) {
            callbackArgs = arguments;
            timeout = setTimeout(later, wait);
        }
    };
}

var supportsPassiveListener = false;
var noop = function () { };
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassiveListener = true;
        },
    });
    window.addEventListener('testPassive', noop, opts);
    window.removeEventListener('testPassive', noop, opts);
}
catch (e) { }

var Scroll = (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { x: 0, y: 0 };
        _this.handleWindowScroll = throttle(function () {
            _this.setState({ x: window.scrollX, y: window.scrollY });
        }, _this.props.throttle);
        return _this;
    }
    Scroll.prototype.componentDidMount = function () {
        this.handleWindowScroll();
        window.addEventListener('scroll', this.handleWindowScroll, supportsPassiveListener ? { passive: true } : false);
    };
    Scroll.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleWindowScroll);
    };
    Scroll.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    Scroll.defaultProps = {
        throttle: 100,
    };
    return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true,
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
};
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
var getOwnPropertyNames = Object.getOwnPropertyNames;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] &&
                !KNOWN_STATICS[key] &&
                (!blacklist || !blacklist[key])) {
                if (propIsEnumerable.call(sourceComponent, key) ||
                    typeof sourceComponent[key] === 'function') {
                    try {
                        targetComponent[key] = sourceComponent[key];
                    }
                    catch (e) { }
                }
            }
        }
        return targetComponent;
    }
    return targetComponent;
}

function withScroll(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Scroll, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var DeviceMotion = (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            acceleration: {
                x: null,
                y: null,
                z: null,
            },
            accelerationIncludingGravity: {
                x: null,
                y: null,
                z: null,
            },
            rotationRate: {
                alpha: null,
                beta: null,
                gamma: null,
            },
            interval: 0,
        };
        _this.handleDeviceMotion = function (e) {
            _this.setState({
                acceleration: e.acceleration,
                accelerationIncludingGravity: e.accelerationIncludingGravity,
                rotationRate: e.rotationRate,
                interval: e.interval,
            });
        };
        return _this;
    }
    DeviceMotion.prototype.componentDidMount = function () {
        window.addEventListener('devicemotion', this.handleDeviceMotion, true);
    };
    DeviceMotion.prototype.componentWillUnmount = function () {
        window.removeEventListener('devicemotion', this.handleDeviceMotion);
    };
    DeviceMotion.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return DeviceMotion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withDeviceMotion(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DeviceMotion, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var DeviceOrientation = (function (_super) {
    __extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            alpha: null,
            beta: null,
            gamma: null,
            absolute: false,
        };
        _this.handleDeviceOrientation = function (e) {
            _this.setState({
                beta: e.beta,
                alpha: e.alpha,
                gamma: e.gamma,
                absolute: e.absolute,
            });
        };
        return _this;
    }
    DeviceOrientation.prototype.componentDidMount = function () {
        window.addEventListener('deviceorientation', this.handleDeviceOrientation, true);
    };
    DeviceOrientation.prototype.componentWillUnmount = function () {
        window.removeEventListener('deviceorientation', this.handleDeviceOrientation);
    };
    DeviceOrientation.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return DeviceOrientation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withDeviceOrientation(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DeviceOrientation, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { online: navigator.onLine };
        _this.handleOnline = function () {
            _this.setState({ online: true, offlineAt: undefined });
        };
        _this.handleOffline = function () {
            _this.setState({ online: false, offlineAt: new Date() });
        };
        return _this;
    }
    Network.prototype.componentDidMount = function () {
        if (typeof window !== 'undefined' && navigator) {
            this.setState({ online: navigator.onLine });
        }
        window.addEventListener('online', this.handleOnline);
        window.addEventListener('offline', this.handleOffline);
    };
    Network.prototype.componentWillUnmount = function () {
        window.removeEventListener('online', this.handleOnline);
        window.removeEventListener('offline', this.handleOffline);
    };
    Network.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return Network;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withNetwork(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Network, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var GeoPosition = (function (_super) {
    __extends(GeoPosition, _super);
    function GeoPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLoading: true,
        };
        _this.requestGeo = function () {
            _this.setState({ isLoading: true });
            _this.geoId = navigator.geolocation.watchPosition(function (position) {
                return _this.setState({
                    isLoading: false,
                    coords: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    error: undefined,
                });
            }, function (error) { return _this.setState({ error: error, isLoading: false }); });
        };
        return _this;
    }
    GeoPosition.prototype.componentDidMount = function () {
        this.requestGeo();
    };
    GeoPosition.prototype.componentWillUnmount = function () {
        navigator.geolocation.clearWatch(this.geoId);
    };
    GeoPosition.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return GeoPosition;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withGeoPosition(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GeoPosition, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var M = __webpack_require__(32);
var Media = M;

var WindowSize = (function (_super) {
    __extends(WindowSize, _super);
    function WindowSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { width: 0, height: 0 };
        _this.handleWindowSize = throttle(function () {
            _this.setState({ width: window.innerWidth, height: window.innerHeight });
        }, _this.props.throttle);
        return _this;
    }
    WindowSize.prototype.componentDidMount = function () {
        this.handleWindowSize();
        window.addEventListener('resize', this.handleWindowSize);
    };
    WindowSize.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleWindowSize);
    };
    WindowSize.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    WindowSize.defaultProps = {
        throttle: 100,
    };
    return WindowSize;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withWindowSize(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WindowSize, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}

var Locales = (function (_super) {
    __extends(Locales, _super);
    function Locales() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { locale: _this.preferredLocales() };
        _this.handleLanguageChange = function () {
            _this.setState({
                locale: _this.preferredLocales(),
            });
        };
        return _this;
    }
    Locales.prototype.preferredLocales = function () {
        if (navigator.languages && navigator.languages.length > 0) {
            return Intl.getCanonicalLocales(navigator.languages)[0];
        }
        return Intl.getCanonicalLocales([navigator.language])[0];
    };
    Locales.prototype.componentDidMount = function () {
        window.addEventListener('languagechange', this.handleLanguageChange);
    };
    Locales.prototype.componentWillUnmount = function () {
        window.removeEventListener('languagechange', this.handleLanguageChange);
    };
    Locales.prototype.render = function () {
        var _a = this.props, render = _a.render, component = _a.component, children = _a.children;
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, this.state)
            : render
                ? render(this.state)
                : children
                    ? typeof children === 'function'
                        ? children(this.state)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    return Locales;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function withLocales(Component$$1) {
    var S = function (props) {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Locales, { render: function (p) { return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, props, p)); } }));
    };
    return hoistNonReactStatics(S, Component$$1);
}


//# sourceMappingURL=index.es6.js.map


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

if (true) {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {}
});

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "none";

var invariant$3 = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1$2 = invariant$3;

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

var camel2hyphen_1 = camel2hyphen;

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen_1(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and ';
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', ';
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

var json2mq_1 = json2mq;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Conditionally renders based on whether or not a media query matches.
 */

var Media = function (_React$Component) {
  inherits(Media, _React$Component);

  function Media() {
    var _temp, _this, _ret;

    classCallCheck(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      matches: _this.props.defaultMatches
    }, _this.updateMatches = function () {
      return _this.setState({ matches: _this.mediaQueryList.matches });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  Media.prototype.componentWillMount = function componentWillMount() {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;

    var targetWindow = this.props.targetWindow || window;

    invariant_1$2(typeof targetWindow.matchMedia === "function", "<Media targetWindow> does not support `matchMedia`.");

    var query = this.props.query;

    if (typeof query !== "string") query = json2mq_1(query);

    this.mediaQueryList = targetWindow.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  };

  Media.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  };

  Media.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;
    var matches = this.state.matches;


    return render ? matches ? render() : null : children ? typeof children === "function" ? children(matches) : !Array.isArray(children) || children.length // Preact defaults to empty children array
    ? matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children) : null : null : null;
  };

  return Media;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Media.propTypes = {
  defaultMatches: propTypes.bool,
  query: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.arrayOf(propTypes.object.isRequired)]).isRequired,
  render: propTypes.func,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  targetWindow: propTypes.object
};
Media.defaultProps = {
  defaultMatches: true
};

/* harmony default export */ __webpack_exports__["default"] = (Media);


/***/ })
/******/ ]);
});
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["color", "isOpen"],
  _excluded2 = ["tag", "color", "ariaLabel", "onOpen", "onClose", "isOpen"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "brown-university-styles";

/*
  css mixins
*/
var hamburgerBarCSS = css(["height:3px;position:absolute;width:25px;background-color:", ";"], function (_ref) {
  var color = _ref.color;
  return colors[color];
});
var hamburgerBarPseudoElementCSS = css(["content:\"\";display:block;"]);
var hamburgerTransitionCSS = css(["transition-property:transform;transition-timing-function:ease;"]);

/*
  inner components
*/
var HamburgerTag = styled.div.withConfig({
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
var HamburgerBars = styled(function (_ref2) {
  var color = _ref2.color,
    isOpen = _ref2.isOpen,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/React.createElement("span", restProps);
}).withConfig({
  displayName: "Hamburger__HamburgerBars",
  componentId: "sc-1jbmnew-1"
})(["", " ", " transition-duration:.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);", " &&:before{", " ", " ", " transition-duration:.15s;transition:top 0.1s 0.25s ease-in,opacity 0.1s ease-in;opacity:", ";top:", ";", "}&&:after{", " ", " ", " transition-duration:.15s;transition:bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);bottom:", ";", "}"], hamburgerBarCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && css(["-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);-webkit-transition-delay:0.12s;-o-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);-o-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);"]);
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen && "0";
}, function (props) {
  return props.isOpen ? "0" : "-7px";
}, function (props) {
  return props.isOpen && css(["-webkit-transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;-o-transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;transition:top 0.1s ease-out,opacity 0.1s 0.12s ease-out;"]);
}, hamburgerBarCSS, hamburgerBarPseudoElementCSS, hamburgerTransitionCSS, function (props) {
  return props.isOpen ? "0" : "-7px";
}, function (props) {
  return props.isOpen && css(["-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);transition:bottom 0.1s ease-out,-webkit-transform 0.22s 0.12s cubic-bezier(0.215,0.61,0.355,1);"]);
});

/*
  outer Hamburger component
*/
var Hamburger = /*#__PURE__*/function (_Component) {
  _inherits(Hamburger, _Component);
  function Hamburger(props) {
    var _this;
    _classCallCheck(this, Hamburger);
    _this = _callSuper(this, Hamburger, [props]);
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
    _this.state = {
      isOpen: _this.props.isOpen
    };
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
        isOpenProp = _this$props.isOpen,
        restProps = _objectWithoutProperties(_this$props, _excluded2);
      var isOpen = this.state.isOpen;
      var isButton = tag === "button";
      return /*#__PURE__*/React.createElement(HamburgerTag, _extends({}, restProps, {
        as: tag,
        type: isButton ? "button" : null,
        "aria-expanded": isButton ? isOpen : null,
        "aria-label": isButton ? ariaLabel : null,
        onClick: isButton ? this.handleClick : null
      }), /*#__PURE__*/React.createElement(HamburgerBars, {
        color: color,
        isOpen: isOpen
      }));
    }
  }]);
  return Hamburger;
}(Component);
Hamburger.propTypes = {
  tag: PropTypes.oneOf(["button", "div"]),
  color: PropTypes.oneOf(["red", "white"]),
  ariaLabel: PropTypes.string,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
Hamburger.defaultProps = {
  tag: "button",
  color: "red",
  ariaLabel: "Toggle navigation",
  isOpen: false,
  onOpen: null,
  onClose: null
};
export default Hamburger;
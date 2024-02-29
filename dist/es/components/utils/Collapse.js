var _excluded = ["isOpen", "children"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
/* eslint-disable no-return-assign */
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

/*
  inner Tag component
*/
// TODO: filter display, height, overflow and transition props with `ref` usage (see `styled-components` issue 439)
var Tag = styled.div.withConfig({
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
  function Collapse(props) {
    var _this;
    _classCallCheck(this, Collapse);
    _this = _callSuper(this, Collapse, [props]);
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
    _this.state = {
      display: "none",
      height: "0",
      overflow: "hidden"
    };
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
        restProps = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/React.createElement(Tag, _extends({}, restProps, this.state, {
        ref: function ref(node) {
          return _this3.tagRef = node;
        },
        onTransitionEnd: this.handleTransitionEnd
      }), children);
    }
  }]);
  return Collapse;
}(Component);
Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  transition: PropTypes.string,
  children: PropTypes.node.isRequired
};
Collapse.defaultProps = {
  transition: "height 250ms cubic-bezier(0.4,0,0.2,1)"
};
export default Collapse;
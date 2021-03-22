function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
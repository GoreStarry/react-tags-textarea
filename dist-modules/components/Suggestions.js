"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _escape = _interopRequireDefault(require("lodash/escape"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var maybeScrollSuggestionIntoView = function maybeScrollSuggestionIntoView(suggestionEl, suggestionsContainer) {
  var containerHeight = suggestionsContainer.offsetHeight;
  var suggestionHeight = suggestionEl.offsetHeight;
  var relativeSuggestionTop = suggestionEl.offsetTop - suggestionsContainer.scrollTop;
  if (relativeSuggestionTop + suggestionHeight >= containerHeight) {
    suggestionsContainer.scrollTop += relativeSuggestionTop - containerHeight + suggestionHeight;
  } else if (relativeSuggestionTop < 0) {
    suggestionsContainer.scrollTop += relativeSuggestionTop;
  }
};
var Suggestions = /*#__PURE__*/function (_Component) {
  function Suggestions() {
    var _this;
    _classCallCheck(this, Suggestions);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Suggestions, [].concat(args));
    _defineProperty(_this, "markIt", function (input, query) {
      var escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
      var labelValue = input[_this.props.labelField];
      return {
        __html: labelValue.replace(RegExp(escapedRegex, 'gi'), function (x) {
          return "<mark>".concat((0, _escape["default"])(x), "</mark>");
        })
      };
    });
    _defineProperty(_this, "shouldRenderSuggestions", function (query) {
      var _this$props = _this.props,
        minQueryLength = _this$props.minQueryLength,
        isFocused = _this$props.isFocused;
      return query.length >= minQueryLength && isFocused;
    });
    _defineProperty(_this, "renderSuggestion", function (item, query) {
      var renderSuggestion = _this.props.renderSuggestion;
      if (typeof renderSuggestion === 'function') {
        return renderSuggestion(item, query);
      }
      return /*#__PURE__*/_react["default"].createElement("span", {
        dangerouslySetInnerHTML: _this.markIt(item, query)
      });
    });
    return _this;
  }
  _inherits(Suggestions, _Component);
  return _createClass(Suggestions, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      var shouldRenderSuggestions = props.shouldRenderSuggestions || this.shouldRenderSuggestions;
      return props.isFocused !== nextProps.isFocused || !(0, _isEqual["default"])(props.suggestions, nextProps.suggestions) || shouldRenderSuggestions(nextProps.query) || shouldRenderSuggestions(nextProps.query) !== shouldRenderSuggestions(props.query);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
        selectedIndex = _this$props2.selectedIndex,
        classNames = _this$props2.classNames;
      if (this.suggestionsContainer && prevProps.selectedIndex !== selectedIndex) {
        var activeSuggestion = this.suggestionsContainer.querySelector(".".concat(classNames.activeSuggestion));
        if (activeSuggestion) {
          maybeScrollSuggestionIntoView(activeSuggestion, this.suggestionsContainer);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var props = this.props;
      var suggestions = props.suggestions.map(function (item, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          onMouseDown: props.handleClick.bind(null, i),
          onTouchStart: props.handleClick.bind(null, i),
          onMouseOver: props.handleHover.bind(null, i),
          className: i === props.selectedIndex ? props.classNames.activeSuggestion : ''
        }, this.renderSuggestion(item, props.query));
      }.bind(this));

      // use the override, if provided
      var shouldRenderSuggestions = props.shouldRenderSuggestions || this.shouldRenderSuggestions;
      if (suggestions.length === 0 || !shouldRenderSuggestions(props.query)) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(elem) {
          _this2.suggestionsContainer = elem;
        },
        className: this.props.classNames.suggestions
      }, /*#__PURE__*/_react["default"].createElement("ul", null, " ", suggestions, " "));
    }
  }]);
}(_react.Component);
_defineProperty(Suggestions, "propTypes", {
  query: _propTypes["default"].string.isRequired,
  selectedIndex: _propTypes["default"].number.isRequired,
  suggestions: _propTypes["default"].array.isRequired,
  handleClick: _propTypes["default"].func.isRequired,
  handleHover: _propTypes["default"].func.isRequired,
  minQueryLength: _propTypes["default"].number,
  shouldRenderSuggestions: _propTypes["default"].func,
  isFocused: _propTypes["default"].bool.isRequired,
  classNames: _propTypes["default"].object,
  labelField: _propTypes["default"].string.isRequired,
  renderSuggestion: _propTypes["default"].func
});
_defineProperty(Suggestions, "defaultProps", {
  minQueryLength: 2
});
var _default = exports["default"] = Suggestions;
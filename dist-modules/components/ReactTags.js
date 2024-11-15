"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.KEYS;
  }
});
exports.WithOutContext = exports.WithContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _noop = _interopRequireDefault(require("lodash/noop"));
var _uniq = _interopRequireDefault(require("lodash/uniq"));
var _ClearAllTags = _interopRequireDefault(require("./ClearAllTags"));
var _Suggestions = _interopRequireDefault(require("./Suggestions"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tag = _interopRequireDefault(require("./Tag"));
var _utils = require("./utils");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //Constants
var ReactTags = exports.WithOutContext = /*#__PURE__*/function (_Component) {
  function ReactTags(props) {
    var _this;
    _classCallCheck(this, ReactTags);
    _this = _callSuper(this, ReactTags, [props]);
    _defineProperty(_this, "filteredSuggestions", function (query) {
      var suggestions = _this.props.suggestions;
      if (_this.props.allowUnique) {
        var existingTags = _this.props.tags.map(function (tag) {
          return tag.id.toLowerCase();
        });
        suggestions = suggestions.filter(function (suggestion) {
          return !existingTags.includes(suggestion.id.toLowerCase());
        });
      }
      if (_this.props.handleFilterSuggestions) {
        return _this.props.handleFilterSuggestions(query, suggestions);
      }
      var exactSuggestions = suggestions.filter(function (item) {
        return _this.getQueryIndex(query, item) === 0;
      });
      var partialSuggestions = suggestions.filter(function (item) {
        return _this.getQueryIndex(query, item) > 0;
      });
      return exactSuggestions.concat(partialSuggestions);
    });
    _defineProperty(_this, "getQueryIndex", function (query, item) {
      return item[_this.props.labelField].toLowerCase().indexOf(query.toLowerCase());
    });
    _defineProperty(_this, "resetAndFocusInput", function () {
      _this.setState({
        query: ""
      });
      if (_this.textInput) {
        _this.textInput.value = "";
        _this.textInput.focus();
      }
    });
    _defineProperty(_this, "updateSuggestions", function () {
      var _this$state = _this.state,
        query = _this$state.query,
        selectedIndex = _this$state.selectedIndex;
      var suggestions = _this.filteredSuggestions(query.trim());
      _this.setState({
        suggestions: suggestions,
        selectedIndex: selectedIndex >= suggestions.length ? suggestions.length - 1 : selectedIndex
      });
    });
    _defineProperty(_this, "dropTagFormOtherList", function (originTag, dropIndex) {
      _this.addTag(originTag, dropIndex);
      _this.props.cleanTargetTagData(originTag);
    });
    _defineProperty(_this, "addTag", function (tag, insertIndex) {
      var _this$props = _this.props,
        tags = _this$props.tags,
        labelField = _this$props.labelField,
        allowUnique = _this$props.allowUnique;
      var currentEditIndex = _this.state.currentEditIndex;
      if (!tag.id || !tag[labelField]) {
        return;
      }
      var existingKeys = tags.map(function (tag) {
        return tag.id.toLowerCase();
      });

      // Return if tag has been already added
      if (allowUnique && existingKeys.indexOf(tag.id.toLowerCase()) >= 0) {
        return;
      }
      if (_this.props.autocomplete) {
        var possibleMatches = _this.filteredSuggestions(tag[labelField]);
        if (_this.props.autocomplete === 1 && possibleMatches.length === 1 || _this.props.autocomplete === true && possibleMatches.length) {
          tag = possibleMatches[0];
        }
      }

      // call method to add
      if (currentEditIndex !== -1 && _this.props.onTagUpdate) _this.props.onTagUpdate(currentEditIndex, tag);else _this.props.handleAddition(tag, insertIndex);

      // reset the state
      _this.setState({
        query: "",
        selectionMode: false,
        selectedIndex: -1,
        currentEditIndex: -1
      });
      if (currentEditIndex === -1) {
        _this.resetAndFocusInput();
      }
    });
    _defineProperty(_this, "clearAll", function () {
      if (_this.props.onClearAll) {
        _this.props.onClearAll();
      }
    });
    _defineProperty(_this, "getTagItems", function () {
      var _this$props2 = _this.props,
        tags = _this$props2.tags,
        labelField = _this$props2.labelField,
        removeComponent = _this$props2.removeComponent,
        readOnly = _this$props2.readOnly,
        allowDragDrop = _this$props2.allowDragDrop,
        isUseTagID = _this$props2.isUseTagID,
        InputHtmlTag = _this$props2.inputType,
        setIsReadyOnly = _this$props2.setIsReadyOnly,
        onMouseDown = _this$props2.onMouseDown,
        onMouseUp = _this$props2.onMouseUp;
      var classNames = _objectSpread(_objectSpread({}, _constants.DEFAULT_CLASSNAMES), _this.props.classNames);
      var _this$state2 = _this.state,
        currentEditIndex = _this$state2.currentEditIndex,
        query = _this$state2.query;
      var moveTag = allowDragDrop ? _this.moveTag : null;
      return tags.map(function (tag, index) {
        return currentEditIndex === index ? /*#__PURE__*/_react["default"].createElement("div", {
          key: tag[tag.labelField || "text"],
          className: classNames.editTagInput
        }, /*#__PURE__*/_react["default"].createElement(InputHtmlTag, {
          ref: function ref(input) {
            _this.tagInput = input;
          },
          onFocus: _this.handleFocus,
          value: query,
          onChange: _this.handleChange,
          onKeyDown: _this.handleKeyDown,
          onBlur: _this.handleBlur,
          className: classNames.editTagInputField,
          onPaste: _this.handlePaste,
          "data-testid": "tag-edit"
        })) : /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
          key: tag[tag.labelField || "text"],
          index: index,
          tag: tag,
          labelField: labelField,
          onDelete: _this.handleDelete.bind(_this, index),
          moveTag: moveTag,
          removeComponent: removeComponent,
          onTagClicked: _this.handleTagClick.bind(_this, index, tag),
          readOnly: readOnly,
          classNames: classNames,
          allowDragDrop: allowDragDrop,
          setIsReadyOnly: setIsReadyOnly,
          onMouseDown: onMouseDown,
          onMouseUp: onMouseUp,
          checkDropTagIsOriginalFromTagList: _this.checkDropTagIsOriginalFromTagList.bind(_this),
          dropTagFormOtherList: _this.dropTagFormOtherList.bind(_this)
        });
      });
    });
    if (!props.inline) {
      /* eslint-disable no-console */
      console.warn("[Deprecation] The inline attribute is deprecated and will be removed in v7.x.x, please use inputFieldPosition instead.");
      /* eslint-enable no-console */
    }
    var _suggestions = props.suggestions;
    _this.state = {
      suggestions: _suggestions,
      query: "",
      isFocused: false,
      selectedIndex: -1,
      selectionMode: false,
      ariaLiveStatus: "",
      currentEditIndex: -1
    };
    _this.reactTagsRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.moveTag = _this.moveTag.bind(_this);
    _this.handlePaste = _this.handlePaste.bind(_this);
    _this.handleSuggestionHover = _this.handleSuggestionHover.bind(_this);
    _this.handleSuggestionClick = _this.handleSuggestionClick.bind(_this);
    return _this;
  }
  _inherits(ReactTags, _Component);
  return _createClass(ReactTags, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
        autofocus = _this$props3.autofocus,
        readOnly = _this$props3.readOnly;
      if (autofocus && !readOnly) {
        this.resetAndFocusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!(0, _isEqual["default"])(prevProps.suggestions, this.props.suggestions)) {
        this.updateSuggestions();
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index, event) {
      var currentTags = this.props.tags.slice();
      // Early exit from the function if the array
      // is already empty
      if (currentTags.length === 0) {
        return;
      }
      var ariaLiveStatus = "Tag at index ".concat(index, " with value ").concat(currentTags[index].id, " deleted.");
      this.props.handleDelete(index, event);
      var allTags = this.reactTagsRef.current.querySelectorAll(".ReactTags__remove");
      var nextElementToFocus, nextIndex, nextTag;
      if (index === 0 && currentTags.length > 1) {
        nextElementToFocus = allTags[0];
        nextIndex = 0;
        nextTag = currentTags[1];
      } else {
        nextElementToFocus = allTags[index - 1];
        nextIndex = index - 1;
        nextTag = currentTags[nextIndex];
      }
      if (!nextElementToFocus) {
        nextIndex = -1;
        nextElementToFocus = this.textInput;
      }
      if (nextIndex >= 0) {
        ariaLiveStatus += " Tag at index ".concat(nextIndex, " with value ").concat(nextTag.id, " focussed. Press backspace to remove");
      } else {
        ariaLiveStatus += "Input focussed. Press enter to add a new tag";
      }
      nextElementToFocus.focus();
      this.setState({
        ariaLiveStatus: ariaLiveStatus
      });
    }
  }, {
    key: "handleTagClick",
    value: function handleTagClick(i, tag, e) {
      var _this2 = this;
      var _this$props4 = this.props,
        editable = _this$props4.editable,
        handleTagClick = _this$props4.handleTagClick,
        labelField = _this$props4.labelField;
      if (editable) {
        this.setState({
          currentEditIndex: i,
          query: tag[labelField]
        }, function () {
          var _this2$tagInput;
          _this2 === null || _this2 === void 0 || (_this2$tagInput = _this2.tagInput) === null || _this2$tagInput === void 0 || _this2$tagInput.focus();
        });
      } else if (handleTagClick) {
        handleTagClick(i, e);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      if (this.props.handleInputChange) {
        this.props.handleInputChange(e.target.value);
      }

      // remove trim to make tag can used by textarea switch line
      // const query = e.target.value.trim();
      var query = e.target.value;
      this.setState({
        query: query
      }, this.updateSuggestions);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      var value = event.target.value;
      if (this.props.handleInputFocus) {
        this.props.handleInputFocus(value);
      }
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      var value = event.target.value;
      var currentEditIndex = this.state.currentEditIndex;
      if (this.props.isWhenBlurAutoUpdate) {
        if (event.target.value.trim()) {
          this.props.onTagUpdate(currentEditIndex, _defineProperty({}, this.props.labelField, event.target.value));
        }
      }
      if (this.props.handleInputBlur) {
        this.props.handleInputBlur(value);
        if (this.textInput) {
          this.textInput.value = "";
        }
      }
      this.setState({
        isFocused: false,
        currentEditIndex: -1
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var _this$state3 = this.state,
        query = _this$state3.query,
        selectedIndex = _this$state3.selectedIndex,
        suggestions = _this$state3.suggestions,
        selectionMode = _this$state3.selectionMode;

      // hide suggestions menu on escape
      if (e.keyCode === _constants.KEYS.ESCAPE) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          selectedIndex: -1,
          selectionMode: false,
          suggestions: [],
          currentEditIndex: -1
        });
      }

      // When one of the terminating keys is pressed, add current query to the tags.
      // If no text is typed in so far, ignore the action - so we don't end up with a terminating
      // character typed in.
      if (this.props.delimiters.indexOf(e.keyCode) !== -1 && !e.shiftKey) {
        if (e.keyCode !== _constants.KEYS.TAB || query !== "") {
          e.preventDefault();
        }
        var selectedQuery = selectionMode && selectedIndex !== -1 ? suggestions[selectedIndex] : _defineProperty({
          id: query
        }, this.props.labelField, query);
        if (selectedQuery !== "") {
          this.addTag(selectedQuery);
        }
      }

      // when backspace key is pressed and query is blank, delete tag
      if (e.keyCode === _constants.KEYS.BACKSPACE && query === "" && this.props.allowDeleteFromEmptyInput) {
        this.handleDelete(this.props.tags.length - 1, e);
      }

      // up arrow
      if (suggestions !== null && suggestions !== void 0 && suggestions.length && e.keyCode === _constants.KEYS.UP_ARROW) {
        e.preventDefault();
        this.setState({
          selectedIndex: selectedIndex <= 0 ? suggestions.length - 1 : selectedIndex - 1,
          selectionMode: true
        });
      }

      // down arrow
      if (suggestions !== null && suggestions !== void 0 && suggestions.length && e.keyCode === _constants.KEYS.DOWN_ARROW) {
        e.preventDefault();
        this.setState({
          selectedIndex: suggestions.length === 0 ? -1 : (selectedIndex + 1) % suggestions.length,
          selectionMode: true
        });
      }
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(e) {
      var _this3 = this;
      if (!this.props.allowAdditionFromPaste) {
        return;
      }
      e.preventDefault();
      var clipboardData = e.clipboardData || window.clipboardData;
      var clipboardText = clipboardData.getData("text");
      var _this$props$maxLength = this.props.maxLength,
        maxLength = _this$props$maxLength === void 0 ? clipboardText.length : _this$props$maxLength;
      var maxTextLength = Math.min(maxLength, clipboardText.length);
      var pastedText = clipboardData.getData("text").substr(0, maxTextLength);

      // Used to determine how the pasted content is split.
      var delimiterRegExp = (0, _utils.buildRegExpFromDelimiters)(this.props.delimiters);
      var tags = pastedText.split(delimiterRegExp);

      // Only add unique tags
      (0, _uniq["default"])(tags).forEach(function (tag) {
        return _this3.addTag(_defineProperty({
          id: tag
        }, _this3.props.labelField, tag));
      });
    }
  }, {
    key: "handleSuggestionClick",
    value: function handleSuggestionClick(i) {
      this.addTag(this.state.suggestions[i]);
    }
  }, {
    key: "handleSuggestionHover",
    value: function handleSuggestionHover(i) {
      this.setState({
        selectedIndex: i,
        selectionMode: true
      });
    }
  }, {
    key: "moveTag",
    value: function moveTag(dragIndex, hoverIndex) {
      var tags = this.props.tags;

      // locate tags
      var dragTag = tags[dragIndex];

      // call handler with the index of the dragged tag
      // and the tag that is hovered
      this.props.handleDrag(dragTag, dragIndex, hoverIndex);
    }
  }, {
    key: "checkDropTagIsOriginalFromTagList",
    value: function checkDropTagIsOriginalFromTagList(dropTag) {
      var _this4 = this;
      return this.props.tags.find(function (tag) {
        return tag.id === dropTag.id || tag[_this4.props.labelField] === dropTag[_this4.props.labelField];
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var tagItems = this.getTagItems();
      var classNames = _objectSpread(_objectSpread({}, _constants.DEFAULT_CLASSNAMES), this.props.classNames);

      // get the suggestions for the given query
      var query = this.state.query.trim(),
        selectedIndex = this.state.selectedIndex,
        suggestions = this.state.suggestions;
      var _this$props5 = this.props,
        placeholder = _this$props5.placeholder,
        inputName = _this$props5.name,
        inputId = _this$props5.id,
        maxLength = _this$props5.maxLength,
        inline = _this$props5.inline,
        inputFieldPosition = _this$props5.inputFieldPosition,
        inputValue = _this$props5.inputValue,
        inputProps = _this$props5.inputProps,
        clearAll = _this$props5.clearAll,
        tags = _this$props5.tags,
        InputHtmlTag = _this$props5.inputType;
      var position = !inline ? _constants.INPUT_FIELD_POSITIONS.BOTTOM : inputFieldPosition;
      var tagInput = !this.props.readOnly ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames.tagInput
      }, /*#__PURE__*/_react["default"].createElement(InputHtmlTag, _extends({}, inputProps, {
        ref: function ref(input) {
          _this5.textInput = input;
        },
        className: classNames.tagInputField,
        type: "text",
        placeholder: placeholder,
        "aria-label": placeholder,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        onPaste: this.handlePaste,
        name: inputName,
        id: inputId,
        maxLength: maxLength,
        value: inputValue,
        "data-automation": "input",
        "data-testid": "input"
      })), /*#__PURE__*/_react["default"].createElement(_Suggestions["default"], {
        query: query,
        suggestions: suggestions,
        labelField: this.props.labelField,
        selectedIndex: selectedIndex,
        handleClick: this.handleSuggestionClick,
        handleHover: this.handleSuggestionHover,
        minQueryLength: this.props.minQueryLength,
        shouldRenderSuggestions: this.props.shouldRenderSuggestions,
        isFocused: this.state.isFocused,
        classNames: classNames,
        renderSuggestion: this.props.renderSuggestion
      }), clearAll && tags.length > 0 && /*#__PURE__*/_react["default"].createElement(_ClearAllTags["default"], {
        classNames: classNames,
        onClick: this.clearAll
      })) : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classNames.tags, "react-tags-wrapper"),
        ref: this.reactTagsRef
      }, /*#__PURE__*/_react["default"].createElement("p", {
        role: "alert",
        className: "sr-only",
        style: {
          position: "absolute",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          margin: "-1px",
          padding: 0,
          width: "1px",
          height: "1px",
          border: 0
        }
      }, this.state.ariaLiveStatus), position === _constants.INPUT_FIELD_POSITIONS.TOP && tagInput, /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames.selected
      }, tagItems, position === _constants.INPUT_FIELD_POSITIONS.INLINE && tagInput), position === _constants.INPUT_FIELD_POSITIONS.BOTTOM && tagInput);
    }
  }]);
}(_react.Component);
_defineProperty(ReactTags, "propTypes", {
  placeholder: _propTypes["default"].string,
  labelField: _propTypes["default"].string,
  suggestions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired
  })),
  delimiters: _propTypes["default"].arrayOf(_propTypes["default"].number),
  autofocus: _propTypes["default"].bool,
  inline: _propTypes["default"].bool,
  // TODO: Remove in v7.x.x
  inputFieldPosition: _propTypes["default"].oneOf([_constants.INPUT_FIELD_POSITIONS.INLINE, _constants.INPUT_FIELD_POSITIONS.TOP, _constants.INPUT_FIELD_POSITIONS.BOTTOM]),
  handleDelete: _propTypes["default"].func,
  handleAddition: _propTypes["default"].func,
  onTagUpdate: _propTypes["default"].func,
  handleDrag: _propTypes["default"].func,
  handleFilterSuggestions: _propTypes["default"].func,
  handleTagClick: _propTypes["default"].func,
  allowDeleteFromEmptyInput: _propTypes["default"].bool,
  allowAdditionFromPaste: _propTypes["default"].bool,
  allowDragDrop: _propTypes["default"].bool,
  handleInputChange: _propTypes["default"].func,
  handleInputFocus: _propTypes["default"].func,
  handleInputBlur: _propTypes["default"].func,
  minQueryLength: _propTypes["default"].number,
  shouldRenderSuggestions: _propTypes["default"].func,
  removeComponent: _propTypes["default"].func,
  autocomplete: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].number]),
  readOnly: _propTypes["default"].bool,
  classNames: _propTypes["default"].object,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  maxLength: _propTypes["default"].number,
  inputValue: _propTypes["default"].string,
  tags: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    className: _propTypes["default"].string
  })),
  allowUnique: _propTypes["default"].bool,
  renderSuggestion: _propTypes["default"].func,
  inputProps: _propTypes["default"].object,
  editable: _propTypes["default"].bool,
  clearAll: _propTypes["default"].bool,
  onClearAll: _propTypes["default"].func,
  inputType: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  // PropTypes.oneOf(['input', 'textarea']),
  isUseTagID: _propTypes["default"].bool,
  setIsReadyOnly: _propTypes["default"].func,
  isWhenBlurAutoUpdate: _propTypes["default"].bool,
  onMouseDown: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  cleanTargetTagData: _propTypes["default"].func
});
_defineProperty(ReactTags, "defaultProps", {
  placeholder: _constants.DEFAULT_PLACEHOLDER,
  labelField: _constants.DEFAULT_LABEL_FIELD,
  suggestions: [],
  delimiters: [].concat(_toConsumableArray(_constants.KEYS.ENTER), [_constants.KEYS.TAB]),
  autofocus: true,
  inline: true,
  // TODO: Remove in v7.x.x
  inputFieldPosition: _constants.INPUT_FIELD_POSITIONS.INLINE,
  handleDelete: _noop["default"],
  handleAddition: _noop["default"],
  allowDeleteFromEmptyInput: true,
  allowAdditionFromPaste: true,
  autocomplete: false,
  readOnly: false,
  allowUnique: true,
  allowDragDrop: true,
  tags: [],
  inputProps: {},
  onTagUpdate: _noop["default"],
  editable: false,
  clearAll: false,
  handleClearAll: _noop["default"],
  inputType: "input",
  isUseTagID: false,
  isWhenBlurAutoUpdate: false
  // onMouseDown: () => {},
  // onMouseUp: () => {},
});
var WithContext = exports.WithContext = function WithContext(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_react["default"].createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.HTML5Backend
  }, /*#__PURE__*/_react["default"].createElement(ReactTags, props));
};
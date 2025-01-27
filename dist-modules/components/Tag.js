"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _RemoveComponent = _interopRequireDefault(require("./RemoveComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ItemTypes = {
  TAG: "tag"
};
var Tag = function Tag(props) {
  var tagRef = (0, _react.useRef)(null);
  var refClickCount = (0, _react.useRef)(0);
  var readOnly = props.readOnly,
    tag = props.tag,
    classNames = props.classNames,
    index = props.index,
    setIsReadyOnly = props.setIsReadyOnly,
    onTagClicked = props.onTagClicked,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    checkDropTagIsOriginalFromTagList = props.checkDropTagIsOriginalFromTagList,
    dropTagFormOtherList = props.dropTagFormOtherList,
    beforeComponent = props.beforeComponent;
  var _useDrag = (0, _reactDnd.useDrag)(function () {
      return {
        type: ItemTypes.TAG,
        collect: function collect(monitor) {
          return {
            isDragging: !!monitor.isDragging()
          };
        },
        item: props,
        canDrag: function canDrag() {
          return (0, _utils.canDrag)(props);
        }
      };
    }, [index, tag]),
    _useDrag2 = _slicedToArray(_useDrag, 2),
    isDragging = _useDrag2[0].isDragging,
    drag = _useDrag2[1];
  var handleClick = (0, _react.useCallback)(function (e) {
    refClickCount.current += 1;
    setTimeout(function () {
      if (refClickCount.current === 1) {
        if (e.target.type === "button") return;
        onTagClicked();
      } else if (refClickCount.current === 2) {
        setIsReadyOnly === null || setIsReadyOnly === void 0 || setIsReadyOnly(function (state) {
          return !state;
        });
      }
      refClickCount.current = 0;
    }, 250);
  }, [onTagClicked, setIsReadyOnly]);
  var _useDrop = (0, _reactDnd.useDrop)(function () {
      return {
        accept: ItemTypes.TAG,
        drop: function drop(item, monitor) {
          var hoverIndex = index;
          if (checkDropTagIsOriginalFromTagList(item.tag)) {
            var dragIndex = item.index;
            if (dragIndex === hoverIndex) {
              return;
            }
            props.moveTag(dragIndex, hoverIndex);
          } else {
            // drop from other tag list
            dropTagFormOtherList(item.tag, hoverIndex);
          }
        },
        canDrop: function canDrop(item) {
          return (0, _utils.canDrop)(item);
        }
      };
    }, [index, tag]),
    _useDrop2 = _slicedToArray(_useDrop, 2),
    drop = _useDrop2[1];
  drag(drop(tagRef));
  var label = props.tag[props.labelField];
  var children = props.tag.children;
  var _tag$className = tag.className,
    className = _tag$className === void 0 ? "" : _tag$className,
    id = tag.id;
  /* istanbul ignore next */
  var opacity = isDragging ? 0 : 1;
  var markedLabel = (0, _react.useMemo)(function () {
    return {
      __html: label.replace(RegExp(/`(.*?)`/, "gi"), function (x, y, i) {
        return "<mark ".concat(i === 0 ? "class='op'" : "", ">").concat(y, "</mark>");
      })
    };
  }, [label]);
  var tagComponent = /*#__PURE__*/_react["default"].createElement("span", {
    id: id && "tag-".concat(id),
    ref: tagRef,
    className: (0, _classnames["default"])("tag-wrapper", classNames.tag, className),
    style: {
      opacity: opacity,
      cursor: (0, _utils.canDrag)(props) ? "move" : "auto"
    },
    onClick: handleClick,
    onMouseDown: readOnly ? onMouseDown : undefined,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/_react["default"].createElement("div", null, beforeComponent === null || beforeComponent === void 0 ? void 0 : beforeComponent({
    id: id,
    index: index
  }), /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: markedLabel
  })), children, /*#__PURE__*/_react["default"].createElement(_RemoveComponent["default"], {
    tag: props.tag,
    className: classNames.remove,
    removeComponent: props.removeComponent,
    onRemove: props.onDelete,
    readOnly: readOnly,
    index: index
  }));
  return tagComponent;
};
Tag.propTypes = {
  labelField: _propTypes["default"].string,
  onDelete: _propTypes["default"].func.isRequired,
  tag: _propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    className: _propTypes["default"].string,
    key: _propTypes["default"].string
  }),
  moveTag: _propTypes["default"].func,
  removeComponent: _propTypes["default"].func,
  onTagClicked: _propTypes["default"].func,
  classNames: _propTypes["default"].object,
  readOnly: _propTypes["default"].bool,
  index: _propTypes["default"].number.isRequired
};
Tag.defaultProps = {
  labelField: "text",
  readOnly: false
};
var _default = exports["default"] = Tag;
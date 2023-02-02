"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;
var _react = _interopRequireDefault(require("react"));
var _shortid = _interopRequireDefault(require("shortid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Layout(props) {
  let {
    children = false
  } = props;
  const {
    component = {}
  } = props;
  const {
    params = {}
  } = component;
  const {
    layoutClassName = ''
  } = params;
  if (children !== false) {
    children = _react.default.Children.map(children, child => {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "switch-component-wrapper",
        key: _shortid.default.generate()
      }, /*#__PURE__*/_react.default.cloneElement(child, {
        parentProps: props,
        layoutClassName
      }));
    });
  } else {
    children = '';
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}
module.exports = exports.default;
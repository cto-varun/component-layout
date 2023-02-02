"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _layout = _interopRequireDefault(require("./layout"));
var _layout2 = require("./layout.schema");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  component: _layout.default,
  schema: _layout2.schema,
  ui: _layout2.ui
};
exports.default = _default;
module.exports = exports.default;
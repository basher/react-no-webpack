'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WidgetCSS = require('./components/WidgetCSS');

Object.defineProperty(exports, 'WidgetCSS', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WidgetCSS).default;
  }
});

var _WidgetSass = require('./components/WidgetSass');

Object.defineProperty(exports, 'WidgetSass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WidgetSass).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
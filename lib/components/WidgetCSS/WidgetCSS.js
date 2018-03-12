'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WidgetCSS = require('./WidgetCSS.css');

var _WidgetCSS2 = _interopRequireDefault(_WidgetCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetCSS = function (_Component) {
    _inherits(WidgetCSS, _Component);

    function WidgetCSS() {
        _classCallCheck(this, WidgetCSS);

        return _possibleConstructorReturn(this, (WidgetCSS.__proto__ || Object.getPrototypeOf(WidgetCSS)).apply(this, arguments));
    }

    _createClass(WidgetCSS, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _WidgetCSS2.default.widget },
                _react2.default.createElement(
                    'p',
                    null,
                    'Widget + CSS'
                )
            );
        }
    }]);

    return WidgetCSS;
}(_react.Component);

exports.default = WidgetCSS;
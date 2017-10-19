'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioBoom = function (_PureComponent) {
  (0, _inherits3.default)(AudioBoom, _PureComponent);

  function AudioBoom() {
    (0, _classCallCheck3.default)(this, AudioBoom);
    return (0, _possibleConstructorReturn3.default)(this, (AudioBoom.__proto__ || (0, _getPrototypeOf2.default)(AudioBoom)).apply(this, arguments));
  }

  (0, _createClass3.default)(AudioBoom, [{
    key: 'createEmbed',
    value: function createEmbed() {
      if (/^(https?)/.test(this.props.data.url) == false) {
        this.props.data.url = data.url.replace(/^(https?):\/\/audioboo\.fm/, 'https://embeds.audioboom.com');
        this.props.data.url = data.url = data.url.replace(/\/embed\?(.*)/, '/embed/v4');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.createEmbed();
      return _React2.default.createElement(
        'div',
        { className: 'embeds-audioboom' },
        _React2.default.createElement('iframe', { width: '100%', height: '300', frameborder: '0', allowtransparency: 'allowtransparency', scrolling: 'no', src: this.props.data.url, title: 'audioBoom player' })
      );
    }
  }]);
  return AudioBoom;
}(_React.PureComponent);

AudioBoom.propTypes = {
  data: _propTypes2.default.object
};

exports.default = AudioBoom;
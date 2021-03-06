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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumbs = function (_PureComponent) {
  (0, _inherits3.default)(BreadCrumbs, _PureComponent);

  function BreadCrumbs() {
    (0, _classCallCheck3.default)(this, BreadCrumbs);
    return (0, _possibleConstructorReturn3.default)(this, (BreadCrumbs.__proto__ || (0, _getPrototypeOf2.default)(BreadCrumbs)).apply(this, arguments));
  }

  (0, _createClass3.default)(BreadCrumbs, [{
    key: 'breadCrumbsItem',
    value: function breadCrumbsItem() {
      var classNames = '';
      var data = this.props.data;
      var breadCrumbItem = data.map(function (param, i) {
        if (param.cssClass !== undefined && param.cssClass !== '') {
          classNames = param.cssClass;
        } else {
          classNames = '';
        }
        return _react2.default.createElement(
          'li',
          { key: i },
          _react2.default.createElement(
            'a',
            { href: param.url, className: 'breadcrumbs__link ' + classNames },
            param.path
          )
        );
      });
      return breadCrumbItem;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ol',
        { className: 'breadcrumb breadcrumbs' },
        this.breadCrumbsItem()
      );
    }
  }]);
  return BreadCrumbs;
}(_react.PureComponent);

BreadCrumbs.propTypes = {
  data: _propTypes2.default.array
};

exports.default = BreadCrumbs;
//# sourceMappingURL=breadcrumbs.js.map

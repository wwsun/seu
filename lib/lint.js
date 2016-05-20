'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _cmd = require('./utils/cmd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [lint].map(regeneratorRuntime.mark);

var eslint = require.resolve('eslint/bin/eslint');
var eslintrc = (0, _path.join)(__dirname, '../.eslintrc');

function lint() {
  var args;
  return regeneratorRuntime.wrap(function lint$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          args = ['--config', _fs2.default.existsSync(eslintrc) ? eslintrc : (0, _path.join)(__dirname, '../.eslintrc'), 'parser', 'babel-eslint', '--ext', '.js,.jsx', 'src'];


          (0, _cmd.runCmd)(eslint, args, function () {
            console.log('ESLint over with success!');
          });

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.default = lint;
module.exports = exports['default'];
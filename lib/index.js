'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var pkg = require('../package.json');

_commander2.default.version(pkg.version).usage('[command] [option]');

_commander2.default.command('*').description('Build codes').action(function (cmd) {
  var commands = ['init', 'build', 'site', 'server', 'lint'];
  var filePath = _path2.default.join(__dirname, '../lib/' + cmd + '.js');

  (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
    var args;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            args = process.argv.slice(3);
            _context.next = 3;
            return require(filePath)(args);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })).catch(function (err) {
    console.error(_chalk2.default.red(err.stack));
    process.exit(1);
  });
});

_commander2.default.on('--help', function () {
  console.log('');
  console.log('    init       Generate project structure');
  console.log('    build      Codes build');
  console.log('    site       Build the static site');
  console.log('    server     Development server');
  console.log('    lint       Lint your codes');
});

_commander2.default.parse(process.argv);
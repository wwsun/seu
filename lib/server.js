'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dora = require('dora');

var _dora2 = _interopRequireDefault(_dora);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [server].map(regeneratorRuntime.mark);

// todo: writing a plugin to process sass
//   just like less
function server(args) {
  var argv;
  return regeneratorRuntime.wrap(function server$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          // --port     :   listened port
          // --cwd      :   target directory
          // --plugins  :   plugins
          // --verbose  :   logging message
          argv = (0, _minimist2.default)(args);

          (0, _dora2.default)({
            port: argv.port || '3000',
            cwd: argv.cwd || process.cwd(),
            plugins: argv.plugins ? argv.plugins.split(',') : ['webpack', 'hmr', 'livereload'].map(function (m) {
              return _path2.default.join(__dirname, './plugins', m);
            }),
            verbose: argv.verbose
          });

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.default = server;
module.exports = exports['default'];
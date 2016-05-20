'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _vinylFs = require('vinyl-fs');

var _vinylFs2 = _interopRequireDefault(_vinylFs);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [init].map(regeneratorRuntime.mark);

var boilerplate = _path2.default.join(__dirname, '../boilerplate');
var dest = process.cwd();

function init() {
  return regeneratorRuntime.wrap(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _vinylFs2.default.src('**/*', { cwd: boilerplate, cwdbase: true, dot: true }).pipe(template(dest)).pipe(_vinylFs2.default.dest(dest)).on('end', function () {
            _fs2.default.renameSync(_path2.default.join(dest, 'gitignore'), _path2.default.join(dest, '.gitignore'));
          }).resume();

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function template(dest) {
  return _through2.default.obj(function (file, encode, callback) {
    if (!file.stat.isFile()) {
      return callback();
    }

    console.log('Write %s', simplifyFilename(_path2.default.join(dest, _path2.default.basename(file.path))));
    this.push(file);
    callback();
  });
}

function simplifyFilename(filename) {
  return filename.replace(process.cwd(), '.');
}

exports.default = init;
module.exports = exports['default'];
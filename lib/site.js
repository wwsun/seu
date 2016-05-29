'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmd = require('./utils/cmd');

var _child_process = require('child_process');

var _marked = [buildSite].map(regeneratorRuntime.mark);

var atoolBuild = require.resolve('atool-build/bin/atool-build');

function copyHtml() {
  (0, _child_process.execSync)('cp ./*.html _site');
}

function buildSite() {
  var args;
  return regeneratorRuntime.wrap(function buildSite$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          (0, _child_process.execSync)('rm -rf _site _data');

          args = ['--devtool=#sourcemap', '-o', './_site'];


          (0, _cmd.runCmd)(atoolBuild, args, function (code) {
            copyHtml();
            console.log('Site build done!');
          });

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.default = buildSite;
module.exports = exports['default'];
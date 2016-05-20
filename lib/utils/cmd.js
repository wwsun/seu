'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runCmd = undefined;

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runCmd(cmd, args, callback) {
  args = args || [];
  var runner = _child_process2.default.spawn(cmd, args, {
    // keep color
    stdio: 'inherit'
  });
  runner.on('close', function (code) {
    if (callback) {
      callback(code);
    }
  });
}

exports.runCmd = runCmd;
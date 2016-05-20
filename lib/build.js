"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = [build].map(regeneratorRuntime.mark);

// todo: finish the build process
function build(args) {
  return regeneratorRuntime.wrap(function build$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("empty command", args);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.default = build;
module.exports = exports['default'];
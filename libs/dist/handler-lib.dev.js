"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(lambda) {
  return function _callee(event, context) {
    var body, statusCode;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(lambda(event, context));

          case 3:
            body = _context.sent;
            statusCode = 200;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            body = {
              error: _context.t0.message
            };
            statusCode = 500;

          case 11:
            return _context.abrupt("return", {
              statusCode: statusCode,
              body: JSON.stringify(body),
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
              }
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}
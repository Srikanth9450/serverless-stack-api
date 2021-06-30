"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _handlerLib = _interopRequireDefault(require("./libs/handler-lib"));

var _dynamodbLib = _interopRequireDefault(require("./libs/dynamodb-lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var main = (0, _handlerLib["default"])(function _callee(event, context) {
  var params;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = {
            TableName: process.env.tableName,
            // 'Key' defines the partition key and sort key of the item to be removed
            Key: {
              userId: event.requestContext.identity.cognitoIdentityId,
              // The id of the author
              noteId: event.pathParameters.id // The id of the note from the path

            }
          };
          /* const result = await dynamoDb.get(params); */

          _context.next = 3;
          return regeneratorRuntime.awrap(_dynamodbLib["default"]["delete"](params));

        case 3:
          return _context.abrupt("return", {
            status: true
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.main = main;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _handlerLib = _interopRequireDefault(require("./libs/handler-lib"));

var _dynamodbLib = _interopRequireDefault(require("./libs/dynamodb-lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var main = (0, _handlerLib["default"])(function _callee(event, context) {
  var params, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = {
            TableName: process.env.tableName,
            // 'KeyConditionExpression' defines the condition for the query
            // - 'userId = :userId': only return items with matching 'userId'
            //   partition key
            KeyConditionExpression: "userId = :userId",
            // 'ExpressionAttributeValues' defines the value in the condition
            // - ':userId': defines 'userId' to be the id of the author
            ExpressionAttributeValues: {
              ":userId": event.requestContext.identity.cognitoIdentityId
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_dynamodbLib["default"].query(params));

        case 3:
          result = _context.sent;
          return _context.abrupt("return", result.Items);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.main = main;
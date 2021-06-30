"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _handlerLib = _interopRequireDefault(require("./libs/handler-lib"));

var _dynamodbLib = _interopRequireDefault(require("./libs/dynamodb-lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var main = (0, _handlerLib["default"])(function _callee(event, context) {
  var data, params;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = JSON.parse(event.body);
          params = {
            TableName: process.env.tableName,
            // 'Key' defines the partition key and sort key of the item to be updated
            Key: {
              userId: event.requestContext.identity.cognitoIdentityId,
              // The id of the author
              noteId: event.pathParameters.id // The id of the note from the path

            },
            // 'UpdateExpression' defines the attributes to be updated
            // 'ExpressionAttributeValues' defines the value in the update expression
            UpdateExpression: "SET content = :content, attachment = :attachment",
            ExpressionAttributeValues: {
              ":attachment": data.attachment || null,
              ":content": data.content || null
            },
            // 'ReturnValues' specifies if and how to return the item's attributes,
            // where ALL_NEW returns all attributes of the item after the update; you
            // can inspect 'result' below to see how it works with different settings
            ReturnValues: "ALL_NEW"
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(_dynamodbLib["default"].update(params));

        case 4:
          return _context.abrupt("return", {
            status: true
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.main = main;
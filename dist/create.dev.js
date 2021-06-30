"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var uuid = _interopRequireWildcard(require("uuid"));

var _handlerLib = _interopRequireDefault(require("./libs/handler-lib"));

var _dynamodbLib = _interopRequireDefault(require("./libs/dynamodb-lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var main = (0, _handlerLib["default"])(function _callee(event, context) {
  var data, params;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = JSON.parse(event.body);
          params = {
            TableName: process.env.tableName,
            Item: {
              // The attributes of the item to be created
              userId: event.requestContext.identity.cognitoIdentityId,
              // The id of the author
              noteId: uuid.v1(),
              // A unique uuid
              content: data.content,
              // Parsed from request body
              attachment: data.attachment,
              // Parsed from request body
              createdAt: Date.now // Current Unix timestamp

            }
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(_dynamodbLib["default"].put(params));

        case 4:
          console.log(params);
          return _context.abrupt("return", params.Item);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.main = main;
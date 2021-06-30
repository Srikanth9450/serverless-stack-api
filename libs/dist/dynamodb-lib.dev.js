"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _awsSdk["default"].DynamoDB.DocumentClient();
var _default = {
  get: function get(params) {
    return client.get(params).promise();
  },
  put: function put(params) {
    return client.put(params).promise();
  },
  query: function query(params) {
    return client.query(params).promise();
  },
  update: function update(params) {
    return client.update(params).promise();
  },
  "delete": function _delete(params) {
    return client["delete"](params).promise();
  }
};
exports["default"] = _default;
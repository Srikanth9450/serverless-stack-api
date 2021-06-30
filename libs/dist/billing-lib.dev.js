"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateCost = calculateCost;

function calculateCost(storage) {
  var rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100;
}
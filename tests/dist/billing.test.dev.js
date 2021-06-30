"use strict";

var _billingLib = require("../libs/billing-lib");

test("Lowest tier", function () {
  var storage = 10;
  var cost = 4000;
  var expectedCost = (0, _billingLib.calculateCost)(storage);
  expect(cost).toEqual(expectedCost);
});
test("Middle tier", function () {
  var storage = 100;
  var cost = 20000;
  var expectedCost = (0, _billingLib.calculateCost)(storage);
  expect(cost).toEqual(expectedCost);
});
test("Highest tier", function () {
  var storage = 101;
  var cost = 10100;
  var expectedCost = (0, _billingLib.calculateCost)(storage);
  expect(cost).toEqual(expectedCost);
});
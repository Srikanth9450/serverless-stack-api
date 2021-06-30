"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _stripe = _interopRequireDefault(require("stripe"));

var _handlerLib = _interopRequireDefault(require("./libs/handler-lib"));

var _billingLib = require("./libs/billing-lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var main = (0, _handlerLib["default"])(function _callee(event, context) {
  var _JSON$parse, storage, source, amount, description, stripe;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _JSON$parse = JSON.parse(event.body), storage = _JSON$parse.storage, source = _JSON$parse.source;
          amount = (0, _billingLib.calculateCost)(storage);
          description = "Scratch charge"; // Load our secret key from the  environment variables

          stripe = (0, _stripe["default"])(process.env.stripeSecretKey);
          _context.next = 6;
          return regeneratorRuntime.awrap(stripe.charges.create({
            source: source,
            amount: amount,
            description: description,
            currency: "usd",
            shipping: {
              name: "Jenny Rosen",
              address: {
                line1: "510 Townsend St",
                postal_code: "98140",
                city: "San Francisco",
                state: "CA",
                country: "US"
              }
            }
          }));

        case 6:
          return _context.abrupt("return", {
            status: true
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.main = main;
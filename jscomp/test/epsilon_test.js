'use strict';

var Mt = require("./mt.js");
var Pervasives = require("../../lib/js/pervasives.js");

var v = (Number.EPSILON?Number.EPSILON:2.220446049250313e-16);

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "epsilon",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": Pervasives.epsilon_float,
                "1": v
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "raw_epsilon",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": 2.220446049250313e-16,
                  "1": v
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Epsilon_test", suites);

exports.v = v;
exports.suites = suites;
/* v Not a pure module */

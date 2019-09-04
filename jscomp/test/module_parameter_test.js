'use strict';

var Mt = require("./mt.js");
var $$String = require("../../lib/js/string.js");

function u(v) {
  return v;
}

var s = $$String;

var N = {
  s: s
};

function v(x) {
  return x.length;
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "const",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": 1,
                "1": 1
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "other",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": 3,
                  "1": 3
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Module_parameter_test", suites);

var v0 = 1;

exports.u = u;
exports.N = N;
exports.v0 = v0;
exports.v = v;
exports.suites = suites;
/*  Not a pure module */

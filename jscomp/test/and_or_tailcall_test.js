'use strict';

var Mt = require("./mt.js");

function f(b, x, _n) {
  while(true) {
    var n = _n;
    if (n > 100000 || !b) {
      return false;
    } else {
      _n = n + 1 | 0;
      continue ;
    }
  };
}

function or_f(b, x, _n) {
  while(true) {
    var n = _n;
    if (n > 100000) {
      return false;
    } else if (b) {
      return true;
    } else {
      _n = n + 1 | 0;
      continue ;
    }
  };
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "and_tail",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": false,
                "1": f(true, 1, 0)
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "or_tail",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": false,
                  "1": or_f(false, 1, 0)
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("And_or_tailcall_test", suites);

exports.f = f;
exports.or_f = or_f;
exports.suites = suites;
/*  Not a pure module */

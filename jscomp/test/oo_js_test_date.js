'use strict';

var Mt = require("./mt.js");

var d = new Date(2016, 2);

function d2(param) {
  return (function (param$1, param$2) {
      var prim = param;
      var prim$1 = 2;
      var prim$2 = param$1;
      return new Date(prim, prim$1, prim$2);
    });
}

var d3 = d2(2016)(1, /* () */0);

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "getMonth",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": 2,
                "1": d.getMonth()
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "getYear",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": /* tuple */[
                    2016,
                    2,
                    1
                  ],
                  "1": /* tuple */[
                    d3.getFullYear(),
                    d3.getMonth(),
                    d3.getDate()
                  ]
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Oo_js_test_date", suites);

exports.d = d;
exports.d2 = d2;
exports.d3 = d3;
exports.suites = suites;
/* d Not a pure module */

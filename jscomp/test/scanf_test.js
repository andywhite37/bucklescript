'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Scanf = require("../../lib/js/scanf.js");
var Mt_global = require("./mt_global.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(f, param) {
  return Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

eq("File \"scanf_test.ml\", line 6, characters 5-12", /* tuple */[
      Curry._1(Scanf.sscanf("32 31", /* constructor */{
                tag: 0,
                name: "Format",
                "0": /* constructor */{
                  tag: 4,
                  name: "Int",
                  "0": /* Int_d */0,
                  "1": /* No_padding */0,
                  "2": /* No_precision */0,
                  "3": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    }
                  }
                },
                "1": "%d %d"
              }), (function (x, y) {
              return x + y | 0;
            })),
      63
    ]);

eq("File \"scanf_test.ml\", line 7, characters 5-12", /* tuple */[
      Curry._1(Scanf.sscanf("12306459064359371967", /* constructor */{
                tag: 0,
                name: "Format",
                "0": /* constructor */{
                  tag: 7,
                  name: "Int64",
                  "0": /* Int_u */12,
                  "1": /* No_padding */0,
                  "2": /* No_precision */0,
                  "3": /* End_of_format */0
                },
                "1": "%Lu"
              }), (function (i) {
              return i;
            })),
      /* int64 */[
        /* hi */-1429646511,
        /* lo */235324607
      ]
    ]);

Mt.from_pair_suites("Scanf_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */

'use strict';

var Mt = require("./mt.js");
var Pervasives = require("../../lib/js/pervasives.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "string_of_float_1",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": "10.",
                "1": Pervasives.string_of_float(10)
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "string_of_int",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": "10",
                  "1": String(10)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "valid_float_lexem",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": "10.",
                    "1": Pervasives.valid_float_lexem("10")
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

Mt.from_pair_suites("Of_string_test", suites);

exports.suites = suites;
/*  Not a pure module */

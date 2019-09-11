'use strict';

var Mt = require("./mt.js");

console.log(JSON.stringify(/* constructor */{
          tag: "::",
          "0": 1,
          "1": /* constructor */{
            tag: "::",
            "0": 2,
            "1": /* constructor */{
              tag: "::",
              "0": 3,
              "1": "[]"
            }
          }
        }));

console.log("hey");

var suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "anything_to_string",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": "3",
                "1": String(3)
              };
      })
  ],
  "1": "[]"
};

Mt.from_pair_suites("Lib_js_test", suites);

exports.suites = suites;
/*  Not a pure module */

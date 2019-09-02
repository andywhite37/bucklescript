'use strict';

var Mt = require("./mt.js");

console.log(JSON.stringify(/* constructor */{
          tag: 0,
          name: "::",
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": 3,
              "1": /* [] */0
            }
          }
        }));

console.log("hey");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "anything_to_string",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": "3",
                "1": String(3)
              };
      })
  ],
  "1": /* [] */0
};

Mt.from_pair_suites("Lib_js_test", suites);

exports.suites = suites;
/*  Not a pure module */

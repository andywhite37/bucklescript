'use strict';

var Mt = require("./mt.js");
var Obj = require("../../lib/js/obj.js");
var Block = require("../../lib/js/block.js");

var empty_backtrace = Block.__(Obj.abstract_tag, []);

function is_block(x) {
  return typeof x !== "number";
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "is_block_test1",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": false,
                "1": false
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "is_block_test2",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": true,
                  "1": typeof /* constructor */({
                      tag: 0,
                      name: "::",
                      "0": 3,
                      "1": /* [] */0
                    }) !== "number"
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "is_block_test3",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": true,
                    "1": true
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "is_block_test4",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": false,
                      "1": false
                    };
            })
        ],
        "1": /* [] */0
      }
    }
  }
};

Mt.from_pair_suites("Obj_magic_test", suites);

exports.empty_backtrace = empty_backtrace;
exports.is_block = is_block;
exports.suites = suites;
/*  Not a pure module */

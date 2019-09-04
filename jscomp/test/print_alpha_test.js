'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");

function f(h, param) {
  console.log(3);
  return Curry.__2(h);
}

Mt.from_pair_suites("Print_alpha_test", /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "File \"print_alpha_test.ml\", line 15, characters 4-11",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": f((function (prim, prim$1) {
                              return prim + prim$1 | 0;
                            }), /* () */0)(1, 2),
                    "1": 3
                  };
          })
      ],
      "1": /* [] */0
    });

exports.f = f;
/*  Not a pure module */

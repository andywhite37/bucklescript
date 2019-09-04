'use strict';

var Mt = require("./mt.js");
var Caml_array = require("../../lib/js/caml_array.js");

var a = /* array */[
  0,
  1,
  2
];

var b = /* array */[
  0,
  1,
  2
];

var c = /* array */[
  0,
  1,
  2,
  3,
  4,
  5
];

function f(param) {
  Caml_array.caml_array_set(a, 0, 3.0);
  return Caml_array.caml_array_set(b, 0, 3);
}

function h(param) {
  return c;
}

function g(param) {
  f(/* () */0);
  return /* constructor */{
          tag: 0,
          name: "Eq",
          "0": /* tuple */[
            Caml_array.caml_array_get(a, 0),
            Caml_array.caml_array_get(b, 0)
          ],
          "1": /* tuple */[
            3.0,
            3
          ]
        };
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "const_block_test",
    g
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "avoid_mutable_inline_test",
      (function (param) {
          Caml_array.caml_array_set(c, 0, 3);
          Caml_array.caml_array_set(c, 1, 4);
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": /* array */[
                    3,
                    4,
                    2,
                    3,
                    4,
                    5
                  ],
                  "1": c
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Const_block_test", suites);

var v = /* tuple */[
  0,
  1,
  2,
  3,
  4,
  5
];

exports.a = a;
exports.b = b;
exports.c = c;
exports.v = v;
exports.f = f;
exports.h = h;
/*  Not a pure module */

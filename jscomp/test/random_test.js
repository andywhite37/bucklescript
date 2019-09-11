'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Int64 = require("../../lib/js/int64.js");
var Printf = require("../../lib/js/printf.js");
var Random = require("../../lib/js/random.js");
var Mt_global = require("./mt_global.js");
var Caml_array = require("../../lib/js/caml_array.js");

var id = /* record */[/* contents */0];

var suites = /* record */[/* contents */"[]"];

function eq(f) {
  return (function (param, param$1) {
      return Mt_global.collect_eq(id, suites, f, param, param$1);
    });
}

function neq(f) {
  return (function (param, param$1) {
      return Mt_global.collect_neq(id, suites, f, param, param$1);
    });
}

function approx(f) {
  return (function (param, param$1) {
      return Mt_global.collect_approx(id, suites, f, param, param$1);
    });
}

Random.self_init("()");

var param = Random.$$int(1000);

Random.self_init("()");

var param$1 = Random.$$int(10000);

Mt_global.collect_neq(id, suites, "File \"random_test.ml\", line 12, characters 6-13", param$1, param);

Random.init(0);

var v = Caml_array.caml_make_vect(10, false);

for(var i = 0; i <= 9; ++i){
  Caml_array.caml_array_set(v, i, Random.bool("()"));
}

var param$2 = /* array */[
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  false
];

Mt_global.collect_eq(id, suites, "File \"random_test.ml\", line 26, characters 5-12", v, param$2);

var f = Random.int64(Int64.max_int);

var h = Random.int64(/* int64 */[
      /* hi */0,
      /* lo */3
    ]);

var vv = Random.bits("()");

var xx = Random.$$float(3.0);

var xxx = Random.int32(103);

Curry._5(Printf.printf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int64",
            "0": "Int_d",
            "1": "No_padding",
            "2": "No_precision",
            "3": /* constructor */{
              tag: "Char_literal",
              "0": /* " " */32,
              "1": /* constructor */{
                tag: "Int64",
                "0": "Int_d",
                "1": "No_padding",
                "2": "No_precision",
                "3": /* constructor */{
                  tag: "Char_literal",
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: "Int",
                    "0": "Int_d",
                    "1": "No_padding",
                    "2": "No_precision",
                    "3": /* constructor */{
                      tag: "Char_literal",
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: "Float",
                        "0": "Float_f",
                        "1": "No_padding",
                        "2": "No_precision",
                        "3": /* constructor */{
                          tag: "Char_literal",
                          "0": /* " " */32,
                          "1": /* constructor */{
                            tag: "Int32",
                            "0": "Int_d",
                            "1": "No_padding",
                            "2": "No_precision",
                            "3": /* constructor */{
                              tag: "String_literal",
                              "0": " \n",
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "1": "%Ld %Ld %d %f %ld \n"
        }), f, h, vv, xx, xxx);

Mt.from_pair_suites("Random_test", suites[0]);

exports.id = id;
exports.suites = suites;
exports.eq = eq;
exports.neq = neq;
exports.approx = approx;
exports.v = v;
exports.f = f;
exports.h = h;
exports.vv = vv;
exports.xx = xx;
exports.xxx = xxx;
/*  Not a pure module */

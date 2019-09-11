'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Printexc = require("../../lib/js/printexc.js");
var Exception_def = require("./exception_def.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": x,
                  "1": y
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

var Hi = Caml_exceptions.create("Exception_repr_test.Hi");

var Hello = Caml_exceptions.create("Exception_repr_test.Hello");

var A = Caml_exceptions.create("Exception_repr_test.A");

Printexc.register_printer((function (param) {
        if (param === Hi) {
          return "hey";
        } else if (param[0] === A) {
          return Curry._1(Format.asprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "A(",
                            "1": /* constructor */{
                              tag: "Int",
                              "0": "Int_d",
                              "1": "No_padding",
                              "2": "No_precision",
                              "3": /* constructor */{
                                tag: "Char_literal",
                                "0": /* ")" */41,
                                "1": "End_of_format"
                              }
                            }
                          },
                          "1": "A(%d)"
                        }), param[1]);
        } else {
          return ;
        }
      }));

eq("File \"exception_repr_test.ml\", line 24, characters 7-14", "hey", Printexc.to_string(Hi));

eq("File \"exception_repr_test.ml\", line 25, characters 7-14", "A(1)", Printexc.to_string([
          A,
          1
        ]));

eq("File \"exception_repr_test.ml\", line 26, characters 7-14", "Exception_repr_test.Hello", Printexc.to_string(Hello));

eq("File \"exception_repr_test.ml\", line 27, characters 7-14", "A", Printexc.to_string([
          Exception_def.A,
          3
        ]));

Mt.from_pair_suites("Exception_repr_test", suites[0]);

var AAA = Exception_def.A;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.Hi = Hi;
exports.Hello = Hello;
exports.A = A;
exports.AAA = AAA;
/*  Not a pure module */

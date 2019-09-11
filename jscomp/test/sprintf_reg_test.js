'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");
var Mt_global = require("./mt_global.js");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(f, param) {
  return Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

var s = Curry._1(Printf.sprintf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Format_arg",
            "0": undefined,
            "1": /* constructor */{
              tag: "String_ty",
              "0": "End_of_fmtty"
            },
            "2": /* constructor */{
              tag: "Char_literal",
              "0": /* "." */46,
              "1": "End_of_format"
            }
          },
          "1": "%{%s%}."
        }), /* constructor */{
      tag: "Format",
      "0": /* constructor */{
        tag: "String_literal",
        "0": "32",
        "1": /* constructor */{
          tag: "String",
          "0": "No_padding",
          "1": "End_of_format"
        }
      },
      "1": "32%s"
    });

eq("File \"sprintf_reg_test.ml\", line 8, characters 5-12", /* tuple */[
      s,
      "%s."
    ]);

var s$1 = Curry._2(Printf.sprintf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int",
            "0": "Int_i",
            "1": "No_padding",
            "2": "No_precision",
            "3": /* constructor */{
              tag: "Char_literal",
              "0": /* " " */32,
              "1": /* constructor */{
                tag: "Format_arg",
                "0": undefined,
                "1": /* constructor */{
                  tag: "String_ty",
                  "0": "End_of_fmtty"
                },
                "2": "End_of_format"
              }
            }
          },
          "1": "%i %{%s%}"
        }), 1, /* constructor */{
      tag: "Format",
      "0": /* constructor */{
        tag: "String_literal",
        "0": "spells one ",
        "1": /* constructor */{
          tag: "String",
          "0": "No_padding",
          "1": "End_of_format"
        }
      },
      "1": "spells one %s"
    });

eq("File \"sprintf_reg_test.ml\", line 14, characters 5-12", /* tuple */[
      s$1,
      "1 %s"
    ]);

Mt.from_pair_suites("Sprintf_reg_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* s Not a pure module */

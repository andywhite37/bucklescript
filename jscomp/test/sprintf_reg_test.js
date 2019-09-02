'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");
var Mt_global = require("./mt_global.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(f, param) {
  return Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

var s = Curry._1(Printf.sprintf(/* constructor */{
          tag: 0,
          name: "Format",
          "0": /* constructor */{
            tag: 13,
            name: "Format_arg",
            "0": undefined,
            "1": /* constructor */{
              tag: 1,
              name: "String_ty",
              "0": /* End_of_fmtty */0
            },
            "2": /* constructor */{
              tag: 12,
              name: "Char_literal",
              "0": /* "." */46,
              "1": /* End_of_format */0
            }
          },
          "1": "%{%s%}."
        }), /* constructor */{
      tag: 0,
      name: "Format",
      "0": /* constructor */{
        tag: 11,
        name: "String_literal",
        "0": "32",
        "1": /* constructor */{
          tag: 2,
          name: "String",
          "0": /* No_padding */0,
          "1": /* End_of_format */0
        }
      },
      "1": "32%s"
    });

eq("File \"sprintf_reg_test.ml\", line 8, characters 5-12", /* tuple */[
      s,
      "%s."
    ]);

var s$1 = Curry._2(Printf.sprintf(/* constructor */{
          tag: 0,
          name: "Format",
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            "0": /* Int_i */3,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* constructor */{
              tag: 12,
              name: "Char_literal",
              "0": /* " " */32,
              "1": /* constructor */{
                tag: 13,
                name: "Format_arg",
                "0": undefined,
                "1": /* constructor */{
                  tag: 1,
                  name: "String_ty",
                  "0": /* End_of_fmtty */0
                },
                "2": /* End_of_format */0
              }
            }
          },
          "1": "%i %{%s%}"
        }), 1, /* constructor */{
      tag: 0,
      name: "Format",
      "0": /* constructor */{
        tag: 11,
        name: "String_literal",
        "0": "spells one ",
        "1": /* constructor */{
          tag: 2,
          name: "String",
          "0": /* No_padding */0,
          "1": /* End_of_format */0
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

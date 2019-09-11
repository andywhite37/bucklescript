'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Printf = require("../../lib/js/printf.js");

function print_pair(fmt, param) {
  return Curry._2(Format.fprintf(fmt, /* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Char_literal",
                    "0": /* "(" */40,
                    "1": /* constructor */{
                      tag: "Int",
                      "0": "Int_d",
                      "1": "No_padding",
                      "2": "No_precision",
                      "3": /* constructor */{
                        tag: "Char_literal",
                        "0": /* "," */44,
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
                      }
                    }
                  },
                  "1": "(%d,%d)"
                }), param[0], param[1]);
}

var suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "sprintf_simple",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": "3232",
                "1": Curry._2(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Int",
                              "0": "Int_d",
                              "1": "No_padding",
                              "2": "No_precision",
                              "3": "End_of_format"
                            }
                          },
                          "1": "%s%d"
                        }), "32", 32)
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "print_asprintf",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": "xx",
                  "1": Format.asprintf(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "xx",
                          "1": "End_of_format"
                        },
                        "1": "xx"
                      })
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "print_pair",
        (function (param) {
            return /* constructor */{
                    tag: "Eq",
                    "0": "(1,2)",
                    "1": Curry._2(Format.asprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Alpha",
                                "0": "End_of_format"
                              },
                              "1": "%a"
                            }), print_pair, /* tuple */[
                          1,
                          2
                        ])
                  };
          })
      ],
      "1": "[]"
    }
  }
};

var v = Format.asprintf(/* constructor */{
      tag: "Format",
      "0": /* constructor */{
        tag: "String_literal",
        "0": "xx",
        "1": "End_of_format"
      },
      "1": "xx"
    });

Mt.from_pair_suites("Printf_test", suites);

exports.print_pair = print_pair;
exports.suites = suites;
exports.v = v;
/* v Not a pure module */

'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Printf = require("../../lib/js/printf.js");

function print_pair(fmt, param) {
  return Curry._2(Format.fprintf(fmt, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* "(" */40,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "," */44,
                        "1": /* constructor */{
                          tag: 4,
                          name: "Int",
                          length: 4,
                          "0": /* Int_d */0,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            length: 2,
                            "0": /* ")" */41,
                            "1": /* End_of_format */0
                          }
                        }
                      }
                    }
                  },
                  "1": "(%d,%d)"
                }), param[0], param[1]);
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "sprintf_simple",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": "3232",
                "1": Curry._2(Printf.sprintf(/* constructor */{
                          tag: 0,
                          name: "Format",
                          length: 2,
                          "0": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 4,
                              name: "Int",
                              length: 4,
                              "0": /* Int_d */0,
                              "1": /* No_padding */0,
                              "2": /* No_precision */0,
                              "3": /* End_of_format */0
                            }
                          },
                          "1": "%s%d"
                        }), "32", 32)
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "print_asprintf",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": "xx",
                  "1": Format.asprintf(/* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          length: 2,
                          "0": "xx",
                          "1": /* End_of_format */0
                        },
                        "1": "xx"
                      })
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "print_pair",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": "(1,2)",
                    "1": Curry._2(Format.asprintf(/* constructor */{
                              tag: 0,
                              name: "Format",
                              length: 2,
                              "0": /* constructor */{
                                tag: 15,
                                name: "Alpha",
                                length: 1,
                                "0": /* End_of_format */0
                              },
                              "1": "%a"
                            }), print_pair, /* tuple */[
                          1,
                          2
                        ])
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

var v = Format.asprintf(/* constructor */{
      tag: 0,
      name: "Format",
      length: 2,
      "0": /* constructor */{
        tag: 11,
        name: "String_literal",
        length: 2,
        "0": "xx",
        "1": /* End_of_format */0
      },
      "1": "xx"
    });

Mt.from_pair_suites("Printf_test", suites);

exports.print_pair = print_pair;
exports.suites = suites;
exports.v = v;
/* v Not a pure module */

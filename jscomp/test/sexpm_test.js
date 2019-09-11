'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Sexpm = require("./sexpm.js");
var Format = require("../../lib/js/format.js");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(loc, param) {
  var y = param[1];
  var x = param[0];
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

function print_or_error(fmt, x) {
  if (x[0] >= 106380200) {
    return Curry._1(Format.fprintf(fmt, /* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "Formatting_gen",
                      "0": /* constructor */{
                        tag: "Open_box",
                        "0": /* constructor */{
                          tag: "Format",
                          "0": "End_of_format",
                          "1": ""
                        }
                      },
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": "Error:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Formatting_lit",
                            "0": "Close_box",
                            "1": /* constructor */{
                              tag: "Formatting_lit",
                              "0": "Flush_newline",
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    },
                    "1": "@[Error:%s@]@."
                  }), x[1]);
  } else {
    return Curry._2(Format.fprintf(fmt, /* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "Formatting_gen",
                      "0": /* constructor */{
                        tag: "Open_box",
                        "0": /* constructor */{
                          tag: "Format",
                          "0": "End_of_format",
                          "1": ""
                        }
                      },
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": "Ok:",
                        "1": /* constructor */{
                          tag: "Alpha",
                          "0": /* constructor */{
                            tag: "Formatting_lit",
                            "0": "Close_box",
                            "1": /* constructor */{
                              tag: "Formatting_lit",
                              "0": "Flush_newline",
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    },
                    "1": "@[Ok:%a@]@."
                  }), Sexpm.print, x[1]);
  }
}

var a = Sexpm.parse_string("(x x gh 3 3)");

eq("File \"sexpm_test.ml\", line 17, characters 7-14", /* tuple */[
      /* `Ok */[
        17724,
        /* `List */[
          848054398,
          /* constructor */{
            tag: "::",
            "0": /* `Atom */[
              726615281,
              "x"
            ],
            "1": /* constructor */{
              tag: "::",
              "0": /* `Atom */[
                726615281,
                "x"
              ],
              "1": /* constructor */{
                tag: "::",
                "0": /* `Atom */[
                  726615281,
                  "gh"
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* `Atom */[
                    726615281,
                    "3"
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* `Atom */[
                      726615281,
                      "3"
                    ],
                    "1": "[]"
                  }
                }
              }
            }
          }
        ]
      ],
      a
    ]);

eq("File \"sexpm_test.ml\", line 21, characters 7-14", /* tuple */[
      Curry._2(Format.asprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Alpha",
                    "0": "End_of_format"
                  },
                  "1": "%a"
                }), print_or_error, a).trim(),
      "Ok:(x x gh 3 3)\n".trim()
    ]);

Mt.from_pair_suites("Sexpm_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.print_or_error = print_or_error;
/* a Not a pure module */

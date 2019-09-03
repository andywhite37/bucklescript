'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");
var Caml_float = require("../../lib/js/caml_float.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Pervasives = require("../../lib/js/pervasives.js");

var one_float = /* int64 */[
  /* hi */1072693248,
  /* lo */0
];

var int32_pairs = /* array */[
  /* tuple */[
    32,
    4.48415508583941463e-44
  ],
  /* tuple */[
    3,
    4.20389539297445121e-45
  ]
];

function from_pairs(pair) {
  return List.concat($$Array.to_list($$Array.mapi((function (i, param) {
                        var f = param[1];
                        var i32 = param[0];
                        return /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": /* tuple */[
                                  Curry._1(Printf.sprintf(/* constructor */{
                                            tag: 0,
                                            name: "Format",
                                            length: 2,
                                            "0": /* constructor */{
                                              tag: 11,
                                              name: "String_literal",
                                              length: 2,
                                              "0": "int32_float_of_bits ",
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
                                            "1": "int32_float_of_bits %d"
                                          }), i),
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              length: 2,
                                              "0": Caml_float.caml_int32_float_of_bits(i32),
                                              "1": f
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": /* tuple */[
                                    Curry._1(Printf.sprintf(/* constructor */{
                                              tag: 0,
                                              name: "Format",
                                              length: 2,
                                              "0": /* constructor */{
                                                tag: 11,
                                                name: "String_literal",
                                                length: 2,
                                                "0": "int32_bits_of_float ",
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
                                              "1": "int32_bits_of_float %d"
                                            }), i),
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                length: 2,
                                                "0": Caml_float.caml_int32_bits_of_float(f),
                                                "1": i32
                                              };
                                      })
                                  ],
                                  "1": /* [] */0
                                }
                              };
                      }), int32_pairs)));
}

var suites = Pervasives.$at(/* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "one",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": Caml_int64.bits_of_float(1.0),
                    "1": one_float
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "two",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": Caml_int64.float_of_bits(one_float),
                      "1": 1.0
                    };
            })
        ],
        "1": /* [] */0
      }
    }, from_pairs(int32_pairs));

Mt.from_pair_suites("Float_of_bits_test", suites);

exports.one_float = one_float;
exports.int32_pairs = int32_pairs;
exports.from_pairs = from_pairs;
exports.suites = suites;
/* suites Not a pure module */

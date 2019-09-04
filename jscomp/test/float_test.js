'use strict';

var Mt = require("./mt.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");
var Mt_global = require("./mt_global.js");
var Caml_float = require("../../lib/js/caml_float.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");

var test_id = /* record */[/* contents */0];

var suites = /* record */[/* contents : [] */0];

function eq(loc) {
  return (function (param, param$1) {
      return Mt_global.collect_eq(test_id, suites, loc, param, param$1);
    });
}

function approx(loc) {
  return (function (param, param$1) {
      return Mt_global.collect_approx(test_id, suites, loc, param, param$1);
    });
}

var epsilon_float = Caml_int64.float_of_bits(/* int64 */[
      /* hi */1018167296,
      /* lo */0
    ]);

var match = Caml_float.caml_frexp_float(12.0);

var match$1 = Caml_float.caml_frexp_float(0);

var match$2 = Caml_float.caml_frexp_float(-12.0);

var results = $$Array.append(/* array */[
      /* tuple */[
        Math.log10(2),
        0.301029995663981198
      ],
      /* tuple */[
        Caml_float.caml_ldexp_float(1, 6),
        64
      ],
      /* tuple */[
        Caml_float.caml_ldexp_float(1, 5),
        32
      ],
      /* tuple */[
        Caml_float.caml_ldexp_float(1.e-5, 1024),
        1.79769313486231605e+303
      ],
      /* tuple */[
        Caml_float.caml_ldexp_float(1, -1024),
        5.56268464626800346e-309
      ],
      /* tuple */[
        Caml_float.caml_hypot_float(3, 4),
        5
      ],
      /* tuple */[
        Caml_float.caml_hypot_float(4, 3),
        5
      ],
      /* tuple */[
        Caml_float.caml_hypot_float(5, 12),
        13
      ],
      /* tuple */[
        Caml_float.caml_hypot_float(12, 5),
        13
      ],
      /* tuple */[
        Caml_float.caml_copysign_float(22.3, -1),
        -22.3
      ],
      /* tuple */[
        Caml_float.caml_copysign_float(22.3, 1),
        22.3
      ],
      /* tuple */[
        Caml_float.caml_expm1_float(1e-15),
        1.00000000000000067e-15
      ],
      /* tuple */[
        Math.log1p(1e-10),
        9.9999999995000007e-11
      ]
    ], /* array */[
      /* tuple */[
        match$1[0],
        0
      ],
      /* tuple */[
        match$1[1],
        0
      ],
      /* tuple */[
        match[0],
        0.75
      ],
      /* tuple */[
        match[1],
        4
      ],
      /* tuple */[
        match$2[0],
        -0.75
      ],
      /* tuple */[
        match$2[1],
        4
      ]
    ]);

function from_pairs(ps) {
  return $$Array.to_list($$Array.mapi((function (i, param) {
                    var b = param[1];
                    var a = param[0];
                    return /* tuple */[
                            Curry._1(Printf.sprintf(/* constructor */{
                                      tag: 0,
                                      name: "Format",
                                      "0": /* constructor */{
                                        tag: 11,
                                        name: "String_literal",
                                        "0": "pair ",
                                        "1": /* constructor */{
                                          tag: 4,
                                          name: "Int",
                                          "0": /* Int_d */0,
                                          "1": /* No_padding */0,
                                          "2": /* No_precision */0,
                                          "3": /* End_of_format */0
                                        }
                                      },
                                      "1": "pair %d"
                                    }), i),
                            (function (param) {
                                return /* constructor */{
                                        tag: 5,
                                        name: "Approx",
                                        "0": a,
                                        "1": b
                                      };
                              })
                          ];
                  }), ps));
}

var float_compare = Caml_primitive.caml_float_compare;

var param = Pervasives.classify_float(3);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 47, characters 5-12", param, /* FP_normal */0);

var param$1 = Caml_float.caml_modf_float(-3.125);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 48, characters 5-12", param$1, /* tuple */[
      -0.125,
      -3
    ]);

var match$3 = Caml_float.caml_modf_float(Number.NaN);

var param_000 = isNaN(match$3[0]);

var param_001 = isNaN(match$3[1]);

var param$2 = /* tuple */[
  param_000,
  param_001
];

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 49, characters 5-12", param$2, /* tuple */[
      true,
      true
    ]);

var param$3 = /* array */[
  -1,
  1,
  1
];

var param$4 = $$Array.map((function (x) {
        if (x > 0) {
          return 1;
        } else if (x < 0) {
          return -1;
        } else {
          return 0;
        }
      }), $$Array.map((function (param) {
            return Caml_primitive.caml_float_compare(param[0], param[1]);
          }), /* array */[
          /* tuple */[
            1,
            3
          ],
          /* tuple */[
            2,
            1
          ],
          /* tuple */[
            3,
            2
          ]
        ]));

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 52, characters 5-12", param$4, param$3);

var param$5 = Caml_float.caml_copysign_float(-3, 0);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 56, characters 5-12", param$5, 3);

var param$6 = Caml_float.caml_copysign_float(3, 0);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 57, characters 5-12", param$6, 3);

var param$7 = Math.log10(10);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 58, characters 5-12", param$7, 1);

var param$8 = Caml_float.caml_expm1_float(0);

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 59, characters 5-12", param$8, 0);

var param$9 = Number("3.0");

Mt_global.collect_eq(test_id, suites, "File \"float_test.ml\", line 60, characters 5-12", param$9, 3.0);

var param$10 = Caml_float.caml_expm1_float(2);

Mt_global.collect_approx(test_id, suites, "File \"float_test.ml\", line 61, characters 9-16", param$10, 6.38905609893065);

var match$4 = Caml_float.caml_modf_float(32.3);

var b = match$4[1];

var a = match$4[0];

Mt.from_pair_suites("Float_test", Pervasives.$at(/* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "mod_float",
            (function (param) {
                return /* constructor */{
                        tag: 5,
                        name: "Approx",
                        "0": 3.2 % 0.5,
                        "1": 0.200000000000000178
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "modf_float1",
              (function (param) {
                  return /* constructor */{
                          tag: 5,
                          name: "Approx",
                          "0": a,
                          "1": 0.299999999999997158
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": /* tuple */[
                "modf_float2",
                (function (param) {
                    return /* constructor */{
                            tag: 5,
                            name: "Approx",
                            "0": b,
                            "1": 32
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": /* tuple */[
                  "int_of_float",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              "0": 3,
                              "1": 3
                            };
                    })
                ],
                "1": /* [] */0
              }
            }
          }
        }, Pervasives.$at(from_pairs(results), suites[0])));

exports.test_id = test_id;
exports.suites = suites;
exports.eq = eq;
exports.approx = approx;
exports.epsilon_float = epsilon_float;
exports.results = results;
exports.from_pairs = from_pairs;
exports.float_compare = float_compare;
/* results Not a pure module */

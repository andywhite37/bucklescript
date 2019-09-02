'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Hashtbl = require("../../lib/js/hashtbl.js");
var MoreLabels = require("../../lib/js/moreLabels.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");

function to_list(tbl) {
  return Hashtbl.fold((function (k, v, acc) {
                return /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": /* tuple */[
                          k,
                          v
                        ],
                        "1": acc
                      };
              }), tbl, /* [] */0);
}

function f(param) {
  var tbl = Hashtbl.create(undefined, 17);
  Hashtbl.add(tbl, 1, /* "1" */49);
  Hashtbl.add(tbl, 2, /* "2" */50);
  return List.sort((function (param, param$1) {
                return Caml_primitive.caml_int_compare(param[0], param$1[0]);
              }), to_list(tbl));
}

function g(count) {
  var tbl = Hashtbl.create(undefined, 17);
  for(var i = 0; i <= count; ++i){
    Hashtbl.replace(tbl, (i << 1), String(i));
  }
  for(var i$1 = 0; i$1 <= count; ++i$1){
    Hashtbl.replace(tbl, (i$1 << 1), String(i$1));
  }
  var v = to_list(tbl);
  return $$Array.of_list(List.sort((function (param, param$1) {
                    return Caml_primitive.caml_int_compare(param[0], param$1[0]);
                  }), v));
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "simple",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": /* tuple */[
                    1,
                    /* "1" */49
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": /* tuple */[
                      2,
                      /* "2" */50
                    ],
                    "1": /* [] */0
                  }
                },
                "1": f(/* () */0)
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "more_iterations",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": $$Array.init(1001, (function (i) {
                          return /* tuple */[
                                  (i << 1),
                                  String(i)
                                ];
                        })),
                  "1": g(1000)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "More_labels_regressionfix_374",
        (function (param) {
            var tbl = Curry._2(MoreLabels.Hashtbl.create, undefined, 30);
            Hashtbl.add(tbl, 3, 3);
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": tbl[/* size */0],
                    "1": 1
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

Mt.from_pair_suites("Hashtbl_test", suites);

exports.to_list = to_list;
exports.f = f;
exports.g = g;
exports.suites = suites;
/*  Not a pure module */

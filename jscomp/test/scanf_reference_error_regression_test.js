'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Scanf = require("../../lib/js/scanf.js");
var Printf = require("../../lib/js/printf.js");
var Mt_global = require("./mt_global.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(f, param) {
  return Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

function scan_rest(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                    "2": /* End_of_format */0
                  },
                  "1": "%[]]"
                }), (function (param) {
                if (param === "]") {
                  return accu;
                } else {
                  var ib$1 = ib;
                  var accu$1 = accu;
                  return Curry._1(Scanf.bscanf(ib$1, /* constructor */{
                                  tag: 0,
                                  name: "Format",
                                  length: 2,
                                  "0": /* constructor */{
                                    tag: 12,
                                    name: "Char_literal",
                                    length: 2,
                                    "0": /* " " */32,
                                    "1": /* constructor */{
                                      tag: 4,
                                      name: "Int",
                                      length: 4,
                                      "0": /* Int_i */3,
                                      "1": /* No_padding */0,
                                      "2": /* No_precision */0,
                                      "3": /* constructor */{
                                        tag: 12,
                                        name: "Char_literal",
                                        length: 2,
                                        "0": /* " " */32,
                                        "1": /* End_of_format */0
                                      }
                                    }
                                  },
                                  "1": " %i "
                                }), (function (i) {
                                var ib$2 = ib$1;
                                var accu$2 = /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": i,
                                  "1": accu$1
                                };
                                return Curry._1(Scanf.bscanf(ib$2, /* constructor */{
                                                tag: 0,
                                                name: "Format",
                                                length: 2,
                                                "0": /* constructor */{
                                                  tag: 20,
                                                  name: "Scan_char_set",
                                                  length: 3,
                                                  "0": 1,
                                                  "1": "\0\0\0\0\0\0\0\b\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                                  "2": /* End_of_format */0
                                                },
                                                "1": "%1[];]"
                                              }), (function (param) {
                                              switch (param) {
                                                case ";" :
                                                    return scan_rest(ib$2, accu$2);
                                                case "]" :
                                                    return accu$2;
                                                default:
                                                  var s = Printf.sprintf(/* constructor */{
                                                        tag: 0,
                                                        name: "Format",
                                                        length: 2,
                                                        "0": /* constructor */{
                                                          tag: 11,
                                                          name: "String_literal",
                                                          length: 2,
                                                          "0": "scan_int_list",
                                                          "1": /* End_of_format */0
                                                        },
                                                        "1": "scan_int_list"
                                                      });
                                                  throw [
                                                        Caml_builtin_exceptions.failure,
                                                        s
                                                      ];
                                              }
                                            }));
                              }));
                }
              }));
}

function scan_int_list(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " [ ",
              "1": /* End_of_format */0
            },
            "1": " [ "
          }), /* () */0);
  return List.rev(scan_rest(ib, /* [] */0));
}

eq("File \"scanf_reference_error_regression_test.ml\", line 36, characters 5-12", /* tuple */[
      scan_int_list(Scanf.Scanning.from_string("[]")),
      /* [] */0
    ]);

Mt.from_pair_suites("Scanf_reference_error_regression_test", suites[0]);

/*  Not a pure module */

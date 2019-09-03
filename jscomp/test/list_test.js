'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");

var list_suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "length",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": 1,
                "1": List.length(/* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        0,
                        1,
                        2,
                        3,
                        4
                      ],
                      "1": /* [] */0
                    })
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "length2",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": 5,
                  "1": List.length(/* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 0,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 1,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 2,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 3,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 4,
                                "1": /* [] */0
                              }
                            }
                          }
                        }
                      })
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "long_length",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": 30000,
                    "1": List.length($$Array.to_list($$Array.init(30000, (function (param) {
                                    return 0;
                                  }))))
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "sort",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": List.sort(Caml_primitive.caml_int_compare, /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 4,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 1,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 2,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": 3,
                                  "1": /* [] */0
                                }
                              }
                            }
                          }),
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 1,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 2,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 3,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 4,
                              "1": /* [] */0
                            }
                          }
                        }
                      }
                    };
            })
        ],
        "1": /* [] */0
      }
    }
  }
};

Mt.from_pair_suites("List_test", list_suites);

exports.list_suites = list_suites;
/*  Not a pure module */

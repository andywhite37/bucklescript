'use strict';

var Mt = require("./mt.js");
var Js_null = require("../../lib/js/js_null.js");
var Caml_option = require("../../lib/js/caml_option.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "toOption - empty",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": undefined,
                "1": undefined
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "toOption - 'a",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": /* () */0,
                  "1": Caml_option.null_to_opt(/* () */0)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "return",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": "something",
                    "1": Caml_option.null_to_opt("something")
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "test - empty",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": true,
                      "1": true
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "test - 'a",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": false,
                        "1": false
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "bind - empty",
              (function (param) {
                  return /* constructor */{
                          tag: 2,
                          name: "StrictEq",
                          length: 2,
                          "0": null,
                          "1": Js_null.bind(null, (function (v) {
                                  return v;
                                }))
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "bind - 'a",
                (function (param) {
                    return /* constructor */{
                            tag: 2,
                            name: "StrictEq",
                            length: 2,
                            "0": 4,
                            "1": Js_null.bind(2, (function (n) {
                                    return (n << 1);
                                  }))
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "iter - empty",
                  (function (param) {
                      var hit = /* record */[/* contents */false];
                      Js_null.iter(null, (function (param) {
                              hit[0] = true;
                              return /* () */0;
                            }));
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              length: 2,
                              "0": false,
                              "1": hit[0]
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "iter - 'a",
                    (function (param) {
                        var hit = /* record */[/* contents */0];
                        Js_null.iter(2, (function (v) {
                                hit[0] = v;
                                return /* () */0;
                              }));
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": 2,
                                "1": hit[0]
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "fromOption - None",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": null,
                                  "1": Js_null.fromOption(undefined)
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "fromOption - Some",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    length: 2,
                                    "0": 2,
                                    "1": Js_null.fromOption(2)
                                  };
                          })
                      ],
                      "1": /* [] */0
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_null_test", suites);

exports.suites = suites;
/*  Not a pure module */

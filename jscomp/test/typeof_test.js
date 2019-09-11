'use strict';

var Mt = require("./mt.js");
var Js_types = require("../../lib/js/js_types.js");

function string_or_number(x) {
  var ty = Js_types.classify(x);
  if (typeof ty === "string") {
    switch (ty) {
      case "JSFalse" :
      case "JSTrue" :
          return false;
      default:
        return false;
    }
  } else {
    switch (/* XXX */ty.tag) {
      case "JSNumber" :
          console.log(ty[0] + 3);
          return true;
      case "JSString" :
          console.log(ty[0] + "hei");
          return true;
      case "JSFunction" :
          console.log("Function");
          return false;
      default:
        return false;
    }
  }
}

var suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "int_type",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": "number",
                "1": "number"
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "string_type",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": "string",
                  "1": "string"
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "number_gadt_test",
        (function (param) {
            return /* constructor */{
                    tag: "Eq",
                    "0": Js_types.test(3, "Number"),
                    "1": true
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "boolean_gadt_test",
          (function (param) {
              return /* constructor */{
                      tag: "Eq",
                      "0": Js_types.test(true, "Boolean"),
                      "1": true
                    };
            })
        ],
        "1": /* constructor */{
          tag: "::",
          "0": /* tuple */[
            "undefined_gadt_test",
            (function (param) {
                return /* constructor */{
                        tag: "Eq",
                        "0": Js_types.test(undefined, "Undefined"),
                        "1": true
                      };
              })
          ],
          "1": /* constructor */{
            tag: "::",
            "0": /* tuple */[
              "string_on_number1",
              (function (param) {
                  return /* constructor */{
                          tag: "Eq",
                          "0": string_or_number("xx"),
                          "1": true
                        };
                })
            ],
            "1": /* constructor */{
              tag: "::",
              "0": /* tuple */[
                "string_on_number2",
                (function (param) {
                    return /* constructor */{
                            tag: "Eq",
                            "0": string_or_number(3.02),
                            "1": true
                          };
                  })
              ],
              "1": /* constructor */{
                tag: "::",
                "0": /* tuple */[
                  "string_on_number3",
                  (function (param) {
                      return /* constructor */{
                              tag: "Eq",
                              "0": string_or_number((function (x) {
                                      return x;
                                    })),
                              "1": false
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    "string_gadt_test",
                    (function (param) {
                        return /* constructor */{
                                tag: "Eq",
                                "0": Js_types.test("3", "String"),
                                "1": true
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      "string_gadt_test_neg",
                      (function (param) {
                          return /* constructor */{
                                  tag: "Eq",
                                  "0": Js_types.test(3, "String"),
                                  "1": false
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* tuple */[
                        "function_gadt_test",
                        (function (param) {
                            return /* constructor */{
                                    tag: "Eq",
                                    "0": Js_types.test((function (x) {
                                            return x;
                                          }), "Function"),
                                    "1": true
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: "::",
                        "0": /* tuple */[
                          "object_gadt_test",
                          (function (param) {
                              return /* constructor */{
                                      tag: "Eq",
                                      "0": Js_types.test({
                                            x: 3
                                          }, "Object"),
                                      "1": true
                                    };
                            })
                        ],
                        "1": "[]"
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
  }
};

Mt.from_pair_suites("Typeof_test", suites);

exports.string_or_number = string_or_number;
exports.suites = suites;
/*  Not a pure module */

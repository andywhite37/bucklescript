'use strict';

var Mt = require("./mt.js");
var Js_dict = require("../../lib/js/js_dict.js");

function obj(param) {
  return {
          foo: 43,
          bar: 86
        };
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "empty",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": /* array */[],
                "1": Object.keys({ })
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "get",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": 43,
                  "1": Js_dict.get({
                        foo: 43,
                        bar: 86
                      }, "foo")
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "get - property not in object",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": undefined,
                    "1": Js_dict.get({
                          foo: 43,
                          bar: 86
                        }, "baz")
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "unsafe_get",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": 43,
                      "1": ({
                            foo: 43,
                            bar: 86
                          })["foo"]
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "set",
            (function (param) {
                var o = {
                  foo: 43,
                  bar: 86
                };
                o["foo"] = 36;
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": 36,
                        "1": Js_dict.get(o, "foo")
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "keys",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          length: 2,
                          "0": /* array */[
                            "foo",
                            "bar"
                          ],
                          "1": Object.keys({
                                foo: 43,
                                bar: 86
                              })
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "entries",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            length: 2,
                            "0": /* array */[
                              /* tuple */[
                                "foo",
                                43
                              ],
                              /* tuple */[
                                "bar",
                                86
                              ]
                            ],
                            "1": Js_dict.entries({
                                  foo: 43,
                                  bar: 86
                                })
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "values",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              length: 2,
                              "0": /* array */[
                                43,
                                86
                              ],
                              "1": Js_dict.values({
                                    foo: 43,
                                    bar: 86
                                  })
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "fromList - []",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": { },
                                "1": Js_dict.fromList(/* [] */0)
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "fromList",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": /* array */[
                                    /* tuple */[
                                      "x",
                                      23
                                    ],
                                    /* tuple */[
                                      "y",
                                      46
                                    ]
                                  ],
                                  "1": Js_dict.entries(Js_dict.fromList(/* constructor */{
                                            tag: 0,
                                            name: "::",
                                            length: 2,
                                            "0": /* tuple */[
                                              "x",
                                              23
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": /* tuple */[
                                                "y",
                                                46
                                              ],
                                              "1": /* [] */0
                                            }
                                          }))
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "fromArray - []",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    length: 2,
                                    "0": { },
                                    "1": Js_dict.fromArray(/* array */[])
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": /* tuple */[
                          "fromArray",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      length: 2,
                                      "0": /* array */[
                                        /* tuple */[
                                          "x",
                                          23
                                        ],
                                        /* tuple */[
                                          "y",
                                          46
                                        ]
                                      ],
                                      "1": Js_dict.entries(Js_dict.fromArray(/* array */[
                                                /* tuple */[
                                                  "x",
                                                  23
                                                ],
                                                /* tuple */[
                                                  "y",
                                                  46
                                                ]
                                              ]))
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": /* tuple */[
                            "map",
                            (function (param) {
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        length: 2,
                                        "0": {
                                          foo: "43",
                                          bar: "86"
                                        },
                                        "1": Js_dict.map((function (i) {
                                                return String(i);
                                              }), {
                                              foo: 43,
                                              bar: 86
                                            })
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
    }
  }
};

Mt.from_pair_suites("Js_dict_test", suites);

exports.obj = obj;
exports.suites = suites;
/*  Not a pure module */

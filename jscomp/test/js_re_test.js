'use strict';

var Mt = require("./mt.js");
var Caml_array = require("../../lib/js/caml_array.js");
var Caml_option = require("../../lib/js/caml_option.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "captures",
    (function (param) {
        var re = (/(\d+)-(?:(\d+))?/g);
        var match = re.exec("3-");
        if (match !== null) {
          var defined = Caml_array.caml_array_get(match, 1);
          var $$undefined = Caml_array.caml_array_get(match, 2);
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": /* tuple */[
                    "3",
                    null
                  ],
                  "1": /* tuple */[
                    defined,
                    $$undefined
                  ]
                };
        } else {
          return /* constructor */{
                  tag: 8,
                  name: "Fail",
                  "0": /* () */0
                };
        }
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "fromString",
      (function (param) {
          var contentOf = function (tag, xmlString) {
            var param = new RegExp("<" + (tag + (">(.*?)<\\/" + (tag + ">")))).exec(xmlString);
            if (param !== null) {
              return Caml_option.nullable_to_opt(Caml_array.caml_array_get(param, 1));
            }
            
          };
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": contentOf("div", "<div>Hi</div>"),
                  "1": "Hi"
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "exec_literal",
        (function (param) {
            var match = (/[^.]+/).exec("http://xxx.domain.com");
            if (match !== null) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": "http://xxx",
                      "1": Caml_array.caml_array_get(match, 0)
                    };
            } else {
              return /* constructor */{
                      tag: 9,
                      name: "FailWith",
                      "0": "regex should match"
                    };
            }
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "exec_no_match",
          (function (param) {
              var match = (/https:\/\/(.*)/).exec("http://xxx.domain.com");
              if (match !== null) {
                return /* constructor */{
                        tag: 9,
                        name: "FailWith",
                        "0": "regex should not match"
                      };
              } else {
                return /* constructor */{
                        tag: 4,
                        name: "Ok",
                        "0": true
                      };
              }
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "test_str",
            (function (param) {
                var res = new RegExp("foo").test("#foo#");
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        "0": true,
                        "1": res
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "fromStringWithFlags",
              (function (param) {
                  var res = new RegExp("foo", "g");
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          "0": true,
                          "1": res.global
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": /* tuple */[
                "result_index",
                (function (param) {
                    var match = new RegExp("zbar").exec("foobarbazbar");
                    if (match !== null) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              "0": 8,
                              "1": match.index
                            };
                    } else {
                      return /* constructor */{
                              tag: 8,
                              name: "Fail",
                              "0": /* () */0
                            };
                    }
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": /* tuple */[
                  "result_input",
                  (function (param) {
                      var input = "foobar";
                      var match = (/foo/g).exec(input);
                      if (match !== null) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                "0": input,
                                "1": match.input
                              };
                      } else {
                        return /* constructor */{
                                tag: 8,
                                name: "Fail",
                                "0": /* () */0
                              };
                      }
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": /* tuple */[
                    "t_flags",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                "0": "gi",
                                "1": (/./ig).flags
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": /* tuple */[
                      "t_global",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  "0": true,
                                  "1": (/./ig).global
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": /* tuple */[
                        "t_ignoreCase",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    "0": true,
                                    "1": (/./ig).ignoreCase
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": /* tuple */[
                          "t_lastIndex",
                          (function (param) {
                              var re = (/na/g);
                              re.exec("banana");
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      "0": 4,
                                      "1": re.lastIndex
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": /* tuple */[
                            "t_setLastIndex",
                            (function (param) {
                                var re = (/na/g);
                                var before = re.lastIndex;
                                re.lastIndex = 42;
                                var after = re.lastIndex;
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        "0": /* tuple */[
                                          0,
                                          42
                                        ],
                                        "1": /* tuple */[
                                          before,
                                          after
                                        ]
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": /* tuple */[
                              "t_multiline",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          "0": false,
                                          "1": (/./ig).multiline
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              "0": /* tuple */[
                                "t_source",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            "0": "f.+o",
                                            "1": (/f.+o/ig).source
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": /* tuple */[
                                  "t_sticky",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              "0": true,
                                              "1": (/./yg).sticky
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": /* tuple */[
                                    "t_unicode",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                "0": false,
                                                "1": (/./yg).unicode
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
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_re_test", suites);

exports.suites = suites;
/*  Not a pure module */

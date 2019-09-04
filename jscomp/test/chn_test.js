'use strict';

var Mt = require("./mt.js");
var $$Array = require("../../lib/js/array.js");
var Caml_string = require("../../lib/js/caml_string.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": x,
                  "1": y
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

console.log("你好，\n世界");

console.log("\x3f\u003f\b\t\n\v\f\r\0\"\'");

function convert(s) {
  return $$Array.to_list(Array.from(s, (function (x) {
                    var match = x.codePointAt(0);
                    if (match !== undefined) {
                      return match;
                    } else {
                      throw [
                            Caml_builtin_exceptions.assert_failure,
                            /* tuple */[
                              "chn_test.ml",
                              20,
                              18
                            ]
                          ];
                    }
                  })));
}

eq("File \"chn_test.ml\", line 25, characters 7-14", "你好，\n世界", "你好，\n世界");

eq("File \"chn_test.ml\", line 27, characters 7-14", convert("汉字是世界上最美丽的character"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 27721,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 23383,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 26159,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": 19990,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": 30028,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": 19978,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": 26368,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": 32654,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": 20029,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": 30340,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": 99,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": 104,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              "0": 97,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": 114,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": 97,
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": 99,
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      "0": 116,
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": 101,
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          "0": 114,
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
        }
      }
    });

eq("File \"chn_test.ml\", line 48, characters 5-12", convert("\x3f\x3fa"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 63,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 63,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 97,
          "1": /* [] */0
        }
      }
    });

eq("File \"chn_test.ml\", line 50, characters 5-12", convert("??a"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 63,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 63,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 97,
          "1": /* [] */0
        }
      }
    });

eq("File \"chn_test.ml\", line 52, characters 5-12", convert("\u003f\x3fa"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 63,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 63,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 97,
          "1": /* [] */0
        }
      }
    });

eq("File \"chn_test.ml\", line 54, characters 5-12", convert("🚀🚀a"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 128640,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 97,
          "1": /* [] */0
        }
      }
    });

eq("File \"chn_test.ml\", line 56, characters 5-12", convert("\uD83D\uDE80a"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 97,
        "1": /* [] */0
      }
    });

eq("File \"chn_test.ml\", line 58, characters 5-12", convert("\uD83D\uDE80\x3f"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 63,
        "1": /* [] */0
      }
    });

eq("File \"chn_test.ml\", line 63, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80a"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 128640,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 97,
          "1": /* [] */0
        }
      }
    });

eq("No inline string length", "\uD83D\uDE80\0".length, 3);

eq("No inline string access", Caml_string.get("\uD83D\uDE80\0", 0) & 255, 61);

eq("File \"chn_test.ml\", line 79, characters 5-12", convert("\uD83D\uDE80"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* [] */0
    });

eq("File \"chn_test.ml\", line 81, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 128640,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 128640,
        "1": /* [] */0
      }
    });

eq("File \"chn_test.ml\", line 82, characters 5-12", convert(" \b\t\n\v\f\ra"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 32,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 8,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 9,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": 10,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": 11,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": 12,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": 13,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": 97,
                    "1": /* [] */0
                  }
                }
              }
            }
          }
        }
      }
    });

eq("File \"chn_test.ml\", line 89, characters 6-13", convert(" \b\t\n\v\f\r\"\'\\\0a"), /* constructor */{
      tag: 0,
      name: "::",
      "0": 32,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": 8,
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": 9,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": 10,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": 11,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": 12,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": 13,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": 34,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": 39,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": 92,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": 0,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": 97,
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
    });

Mt.from_pair_suites("Chn_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.convert = convert;
/*  Not a pure module */

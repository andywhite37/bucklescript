'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Bytes = require("../../lib/js/bytes.js");
var $$String = require("../../lib/js/string.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");
var Ext_string_test = require("./ext_string_test.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function ff(x) {
  var a;
  switch (x) {
    case "0" :
    case "1" :
    case "2" :
        a = 3;
        break;
    case "3" :
        a = 4;
        break;
    case "4" :
        a = 6;
        break;
    case "7" :
        a = 7;
        break;
    default:
      a = 8;
  }
  return a + 3 | 0;
}

function gg(x) {
  var a;
  switch (x) {
    case 0 :
    case 1 :
    case 2 :
        a = 3;
        break;
    case 3 :
        a = 4;
        break;
    case 4 :
        a = 6;
        break;
    case 5 :
    case 6 :
    case 7 :
        a = 8;
        break;
    case 8 :
        a = 7;
        break;
    default:
      a = 8;
  }
  return a + 3 | 0;
}

function rev_split_by_char(c, s) {
  var loop = function (i, l) {
    try {
      var i$prime = $$String.index_from(s, i, c);
      var s$prime = $$String.sub(s, i, i$prime - i | 0);
      return loop(i$prime + 1 | 0, s$prime === "" ? l : /* constructor */({
                      tag: 0,
                      name: "::",
                      "0": s$prime,
                      "1": l
                    }));
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* constructor */{
                tag: 0,
                name: "::",
                "0": $$String.sub(s, i, s.length - i | 0),
                "1": l
              };
      } else {
        throw exn;
      }
    }
  };
  return loop(0, /* [] */0);
}

function xsplit(delim, s) {
  var len = s.length;
  if (len !== 0) {
    var _l = /* [] */0;
    var _i = len;
    while(true) {
      var i = _i;
      var l = _l;
      if (i !== 0) {
        var i$prime;
        try {
          i$prime = $$String.rindex_from(s, i - 1 | 0, delim);
        }
        catch (exn){
          if (exn === Caml_builtin_exceptions.not_found) {
            return /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": $$String.sub(s, 0, i),
                    "1": l
                  };
          } else {
            throw exn;
          }
        }
        var l$1 = /* constructor */{
          tag: 0,
          name: "::",
          "0": $$String.sub(s, i$prime + 1 | 0, (i - i$prime | 0) - 1 | 0),
          "1": l
        };
        var l$2 = i$prime === 0 ? /* constructor */({
              tag: 0,
              name: "::",
              "0": "",
              "1": l$1
            }) : l$1;
        _i = i$prime;
        _l = l$2;
        continue ;
      } else {
        return l;
      }
    };
  } else {
    return /* [] */0;
  }
}

function string_of_chars(x) {
  return $$String.concat("", List.map((function (prim) {
                    return String.fromCharCode(prim);
                  }), x));
}

Mt.from_pair_suites("String_test", /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "mutliple switch",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": 9,
                    "1": ff("4")
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "int switch",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": 9,
                      "1": gg(4)
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "escape_normal",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        "0": "haha",
                        "1": $$String.escaped("haha")
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "escape_bytes",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          "0": Bytes.of_string("haha"),
                          "1": Bytes.escaped(Bytes.of_string("haha"))
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": /* tuple */[
                "escape_quote",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            "0": "\\\"\\\"",
                            "1": $$String.escaped("\"\"")
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": /* tuple */[
                  "rev_split_by_char",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              "0": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": "",
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": "bbbb",
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": "bbbb",
                                    "1": /* [] */0
                                  }
                                }
                              },
                              "1": rev_split_by_char(/* "a" */97, "bbbbabbbba")
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": /* tuple */[
                    "File \"string_test.ml\", line 74, characters 2-9",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                "0": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": "aaaa",
                                  "1": /* [] */0
                                },
                                "1": rev_split_by_char(/* "," */44, "aaaa")
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": /* tuple */[
                      "xsplit",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  "0": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": "a",
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      "0": "b",
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": "c",
                                        "1": /* [] */0
                                      }
                                    }
                                  },
                                  "1": xsplit(/* "." */46, "a.b.c")
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": /* tuple */[
                        "split_empty",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    "0": /* [] */0,
                                    "1": Ext_string_test.split(undefined, "", /* "_" */95)
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": /* tuple */[
                          "split_empty2",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      "0": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": "test_unsafe_obj_ffi_ppx.cmi",
                                        "1": /* [] */0
                                      },
                                      "1": Ext_string_test.split(false, " test_unsafe_obj_ffi_ppx.cmi", /* " " */32)
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": /* tuple */[
                            "rfind",
                            (function (param) {
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        "0": 7,
                                        "1": Ext_string_test.rfind("__", "__index__js")
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": /* tuple */[
                              "rfind_2",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          "0": 0,
                                          "1": Ext_string_test.rfind("__", "__index_js")
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              "0": /* tuple */[
                                "rfind_3",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            "0": -1,
                                            "1": Ext_string_test.rfind("__", "_index_js")
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": /* tuple */[
                                  "find",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              "0": 0,
                                              "1": Ext_string_test.find(undefined, "__", "__index__js")
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": /* tuple */[
                                    "find_2",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                "0": 6,
                                                "1": Ext_string_test.find(undefined, "__", "_index__js")
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": /* tuple */[
                                      "find_3",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  "0": -1,
                                                  "1": Ext_string_test.find(undefined, "__", "_index_js")
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      "0": /* tuple */[
                                        "of_char",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    "0": String.fromCharCode(/* "0" */48),
                                                    "1": Caml_bytes.bytes_to_string(Bytes.make(1, /* "0" */48))
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": /* tuple */[
                                          "of_chars",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      "0": string_of_chars(/* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            "0": /* "0" */48,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              "0": /* "1" */49,
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                "0": /* "2" */50,
                                                                "1": /* [] */0
                                                              }
                                                            }
                                                          }),
                                                      "1": "012"
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
      }
    });

exports.ff = ff;
exports.gg = gg;
exports.rev_split_by_char = rev_split_by_char;
exports.xsplit = xsplit;
exports.string_of_chars = string_of_chars;
/*  Not a pure module */

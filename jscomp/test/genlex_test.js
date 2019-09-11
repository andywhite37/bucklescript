'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Genlex = require("../../lib/js/genlex.js");
var Stream = require("../../lib/js/stream.js");

var lexer = Genlex.make_lexer(/* constructor */{
      tag: "::",
      "0": "+",
      "1": /* constructor */{
        tag: "::",
        "0": "-",
        "1": /* constructor */{
          tag: "::",
          "0": "*",
          "1": /* constructor */{
            tag: "::",
            "0": "/",
            "1": /* constructor */{
              tag: "::",
              "0": "let",
              "1": /* constructor */{
                tag: "::",
                "0": "=",
                "1": /* constructor */{
                  tag: "::",
                  "0": "(",
                  "1": /* constructor */{
                    tag: "::",
                    "0": ")",
                    "1": "[]"
                  }
                }
              }
            }
          }
        }
      }
    });

function to_list(s) {
  var _acc = "[]";
  while(true) {
    var acc = _acc;
    var v;
    try {
      v = Stream.next(s);
    }
    catch (exn){
      if (exn === Stream.Failure) {
        return List.rev(acc);
      } else {
        throw exn;
      }
    }
    _acc = /* constructor */{
      tag: "::",
      "0": v,
      "1": acc
    };
    continue ;
  };
}

var suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "lexer_stream_genlex",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": /* constructor */{
                  tag: "::",
                  "0": /* constructor */{
                    tag: "Int",
                    "0": 3
                  },
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* constructor */{
                      tag: "Kwd",
                      "0": "("
                    },
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* constructor */{
                        tag: "Int",
                        "0": 3
                      },
                      "1": /* constructor */{
                        tag: "::",
                        "0": /* constructor */{
                          tag: "Kwd",
                          "0": "+"
                        },
                        "1": /* constructor */{
                          tag: "::",
                          "0": /* constructor */{
                            tag: "Int",
                            "0": 2
                          },
                          "1": /* constructor */{
                            tag: "::",
                            "0": /* constructor */{
                              tag: "Int",
                              "0": -1
                            },
                            "1": /* constructor */{
                              tag: "::",
                              "0": /* constructor */{
                                tag: "Kwd",
                                "0": ")"
                              },
                              "1": "[]"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "1": to_list(lexer(Stream.of_string("3(3 + 2 -1)")))
              };
      })
  ],
  "1": "[]"
};

Mt.from_pair_suites("Genlex_test", suites);

exports.lexer = lexer;
exports.to_list = to_list;
exports.suites = suites;
/* lexer Not a pure module */

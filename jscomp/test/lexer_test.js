'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Lexing = require("../../lib/js/lexing.js");
var Arith_lexer = require("./arith_lexer.js");
var Arith_parser = require("./arith_parser.js");
var Arith_syntax = require("./arith_syntax.js");
var Number_lexer = require("./number_lexer.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function get_tokens(lex, str) {
  var buf = Lexing.from_string(str);
  var _acc = "[]";
  while(true) {
    var acc = _acc;
    var v = Curry._1(lex, buf);
    if (v === "EOF") {
      return List.rev(acc);
    } else {
      _acc = /* constructor */{
        tag: "::",
        "0": v,
        "1": acc
      };
      continue ;
    }
  };
}

function f(param) {
  return get_tokens(Arith_lexer.lexeme, param);
}

function from_tokens(lst) {
  var l = /* record */[/* contents */lst];
  return (function (param) {
      var match = l[0];
      if (match !== "[]") {
        l[0] = match[1];
        return match[0];
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    });
}

var lexer_suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "arith_token",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": get_tokens(Arith_lexer.lexeme, "x + 3 + 4 + y"),
                "1": /* constructor */{
                  tag: "::",
                  "0": /* constructor */{
                    tag: "IDENT",
                    "0": "x"
                  },
                  "1": /* constructor */{
                    tag: "::",
                    "0": "PLUS",
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* constructor */{
                        tag: "NUMERAL",
                        "0": 3
                      },
                      "1": /* constructor */{
                        tag: "::",
                        "0": "PLUS",
                        "1": /* constructor */{
                          tag: "::",
                          "0": /* constructor */{
                            tag: "NUMERAL",
                            "0": 4
                          },
                          "1": /* constructor */{
                            tag: "::",
                            "0": "PLUS",
                            "1": /* constructor */{
                              tag: "::",
                              "0": /* constructor */{
                                tag: "IDENT",
                                "0": "y"
                              },
                              "1": "[]"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "simple token",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": Arith_lexer.lexeme(Lexing.from_string("10")),
                  "1": /* constructor */{
                    tag: "NUMERAL",
                    "0": 10
                  }
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "number_lexer",
        (function (param) {
            var v = /* record */[/* contents */"[]"];
            var add = function (t) {
              v[0] = /* constructor */{
                tag: "::",
                "0": t,
                "1": v[0]
              };
              return /* () */0;
            };
            Number_lexer.token(add, Lexing.from_string("32 + 32 ( ) * / "));
            return /* constructor */{
                    tag: "Eq",
                    "0": List.rev(v[0]),
                    "1": /* constructor */{
                      tag: "::",
                      "0": "number",
                      "1": /* constructor */{
                        tag: "::",
                        "0": "32",
                        "1": /* constructor */{
                          tag: "::",
                          "0": "new line",
                          "1": /* constructor */{
                            tag: "::",
                            "0": "+",
                            "1": /* constructor */{
                              tag: "::",
                              "0": "new line",
                              "1": /* constructor */{
                                tag: "::",
                                "0": "number",
                                "1": /* constructor */{
                                  tag: "::",
                                  "0": "32",
                                  "1": /* constructor */{
                                    tag: "::",
                                    "0": "new line",
                                    "1": /* constructor */{
                                      tag: "::",
                                      "0": "(",
                                      "1": /* constructor */{
                                        tag: "::",
                                        "0": "new line",
                                        "1": /* constructor */{
                                          tag: "::",
                                          "0": ")",
                                          "1": /* constructor */{
                                            tag: "::",
                                            "0": "new line",
                                            "1": /* constructor */{
                                              tag: "::",
                                              "0": "*",
                                              "1": /* constructor */{
                                                tag: "::",
                                                "0": "new line",
                                                "1": /* constructor */{
                                                  tag: "::",
                                                  "0": "/",
                                                  "1": /* constructor */{
                                                    tag: "::",
                                                    "0": "new line",
                                                    "1": /* constructor */{
                                                      tag: "::",
                                                      "0": "eof",
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
                              }
                            }
                          }
                        }
                      }
                    }
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "simple number",
          (function (param) {
              return /* constructor */{
                      tag: "Eq",
                      "0": Arith_syntax.str(Arith_parser.toplevel(Arith_lexer.lexeme, Lexing.from_string("10"))),
                      "1": "10."
                    };
            })
        ],
        "1": /* constructor */{
          tag: "::",
          "0": /* tuple */[
            "arith",
            (function (param) {
                return /* constructor */{
                        tag: "Eq",
                        "0": Arith_syntax.str(Arith_parser.toplevel(Arith_lexer.lexeme, Lexing.from_string("x + 3 + 4 + y"))),
                        "1": "x+3.+4.+y"
                      };
              })
          ],
          "1": "[]"
        }
      }
    }
  }
};

Mt.from_pair_suites("Lexer_test", lexer_suites);

exports.get_tokens = get_tokens;
exports.f = f;
exports.from_tokens = from_tokens;
exports.lexer_suites = lexer_suites;
/*  Not a pure module */

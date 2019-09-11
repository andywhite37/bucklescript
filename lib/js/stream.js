'use strict';

var List = require("./list.js");
var Curry = require("./curry.js");
var Caml_obj = require("./caml_obj.js");
var Caml_bytes = require("./caml_bytes.js");
var Pervasives = require("./pervasives.js");
var Caml_option = require("./caml_option.js");
var Caml_string = require("./caml_string.js");
var Caml_exceptions = require("./caml_exceptions.js");
var CamlinternalLazy = require("./camlinternalLazy.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Failure = Caml_exceptions.create("Stream.Failure");

var $$Error = Caml_exceptions.create("Stream.Error");

function fill_buff(b) {
  b[/* len */2] = Pervasives.input(b[/* ic */0], b[/* buff */1], 0, b[/* buff */1].length);
  b[/* ind */3] = 0;
  return /* () */0;
}

function get_data(count, _d) {
  while(true) {
    var d = _d;
    if (typeof d === "string") {
      return d;
    } else {
      switch (/* XXX */d.tag) {
        case "Scons" :
            return d;
        case "Sapp" :
            var d2 = d[1];
            var match = get_data(count, d[0]);
            if (typeof match === "string") {
              _d = d2;
              continue ;
            } else if (/* XXX */match.tag === "Scons") {
              return /* constructor */{
                      tag: "Scons",
                      "0": match[0],
                      "1": /* constructor */{
                        tag: "Sapp",
                        "0": match[1],
                        "1": d2
                      }
                    };
            } else {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "stream.ml",
                      53,
                      12
                    ]
                  ];
            }
        case "Slazy" :
            _d = CamlinternalLazy.force(d[0]);
            continue ;
        case "Sgen" :
            var g = d[0];
            var match$1 = g[/* curr */0];
            if (match$1 !== undefined) {
              var match$2 = Caml_option.valFromOption(match$1);
              if (match$2 !== undefined) {
                g[/* curr */0] = undefined;
                return /* constructor */{
                        tag: "Scons",
                        "0": Caml_option.valFromOption(match$2),
                        "1": d
                      };
              } else {
                return "Sempty";
              }
            } else {
              var match$3 = Curry._1(g[/* func */1], count);
              if (match$3 !== undefined) {
                return /* constructor */{
                        tag: "Scons",
                        "0": Caml_option.valFromOption(match$3),
                        "1": d
                      };
              } else {
                g[/* curr */0] = Caml_option.some(undefined);
                return "Sempty";
              }
            }
        case "Sbuffio" :
            var b = d[0];
            if (b[/* ind */3] >= b[/* len */2]) {
              fill_buff(b);
            }
            if (b[/* len */2] === 0) {
              return "Sempty";
            } else {
              var r = b[/* buff */1][b[/* ind */3]];
              b[/* ind */3] = b[/* ind */3] + 1 | 0;
              return /* constructor */{
                      tag: "Scons",
                      "0": r,
                      "1": d
                    };
            }
        
      }
    }
  };
}

function peek(s) {
  while(true) {
    var match = s[/* data */1];
    if (typeof match === "string") {
      return ;
    } else {
      switch (/* XXX */match.tag) {
        case "Scons" :
            return Caml_option.some(match[0]);
        case "Sapp" :
            var d = get_data(s[/* count */0], s[/* data */1]);
            if (typeof d === "string") {
              return ;
            } else if (/* XXX */d.tag === "Scons") {
              s[1] = d;
              return Caml_option.some(d[0]);
            } else {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "stream.ml",
                      82,
                      12
                    ]
                  ];
            }
        case "Slazy" :
            s[1] = CamlinternalLazy.force(match[0]);
            continue ;
        case "Sgen" :
            var g = match[0];
            var match$1 = g[/* curr */0];
            if (match$1 !== undefined) {
              return Caml_option.valFromOption(match$1);
            } else {
              var x = Curry._1(g[/* func */1], s[/* count */0]);
              g[/* curr */0] = Caml_option.some(x);
              return x;
            }
        case "Sbuffio" :
            var b = match[0];
            if (b[/* ind */3] >= b[/* len */2]) {
              fill_buff(b);
            }
            if (b[/* len */2] === 0) {
              s[1] = "Sempty";
              return ;
            } else {
              return Caml_option.some(b[/* buff */1][b[/* ind */3]]);
            }
        
      }
    }
  };
}

function junk(s) {
  while(true) {
    var match = s[/* data */1];
    if (typeof match !== "string") {
      switch (/* XXX */match.tag) {
        case "Scons" :
            s[0] = s[/* count */0] + 1 | 0;
            s[1] = match[1];
            return /* () */0;
        case "Sgen" :
            var g = match[0];
            var match$1 = g[/* curr */0];
            if (match$1 !== undefined) {
              s[0] = s[/* count */0] + 1 | 0;
              g[/* curr */0] = undefined;
              return /* () */0;
            }
            break;
        case "Sbuffio" :
            var b = match[0];
            s[0] = s[/* count */0] + 1 | 0;
            b[/* ind */3] = b[/* ind */3] + 1 | 0;
            return /* () */0;
        default:
          
      }
    }
    var match$2 = peek(s);
    if (match$2 !== undefined) {
      continue ;
    } else {
      return "()";
    }
  };
}

function nget(n, s) {
  if (n <= 0) {
    return /* tuple */[
            "[]",
            s[/* data */1],
            0
          ];
  } else {
    var match = peek(s);
    if (match !== undefined) {
      var a = Caml_option.valFromOption(match);
      junk(s);
      var match$1 = nget(n - 1 | 0, s);
      return /* tuple */[
              /* constructor */{
                tag: "::",
                "0": a,
                "1": match$1[0]
              },
              /* constructor */{
                tag: "Scons",
                "0": a,
                "1": match$1[1]
              },
              match$1[2] + 1 | 0
            ];
    } else {
      return /* tuple */[
              "[]",
              s[/* data */1],
              0
            ];
    }
  }
}

function npeek(n, s) {
  var match = nget(n, s);
  s[0] = s[/* count */0] - match[2] | 0;
  s[1] = match[1];
  return match[0];
}

function next(s) {
  var match = peek(s);
  if (match !== undefined) {
    junk(s);
    return Caml_option.valFromOption(match);
  } else {
    throw Failure;
  }
}

function empty(s) {
  var match = peek(s);
  if (match !== undefined) {
    throw Failure;
  } else {
    return "()";
  }
}

function iter(f, strm) {
  var _param = "()";
  while(true) {
    var match = peek(strm);
    if (match !== undefined) {
      junk(strm);
      Curry._1(f, Caml_option.valFromOption(match));
      _param = "()";
      continue ;
    } else {
      return "()";
    }
  };
}

function from(f) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Sgen",
            "0": /* record */[
              /* curr */undefined,
              /* func */f
            ]
          }
        ];
}

function of_list(l) {
  return /* record */[
          /* count */0,
          /* data */List.fold_right((function (x, l) {
                  return /* constructor */{
                          tag: "Scons",
                          "0": x,
                          "1": l
                        };
                }), l, "Sempty")
        ];
}

function of_string(s) {
  var count = /* record */[/* contents */0];
  return from((function (param) {
                var c = count[0];
                if (c < s.length) {
                  count[0] = count[0] + 1 | 0;
                  return Caml_string.get(s, c);
                }
                
              }));
}

function of_bytes(s) {
  var count = /* record */[/* contents */0];
  return from((function (param) {
                var c = count[0];
                if (c < s.length) {
                  count[0] = count[0] + 1 | 0;
                  return Caml_bytes.get(s, c);
                }
                
              }));
}

function of_channel(ic) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Sbuffio",
            "0": /* record */[
              /* ic */ic,
              /* buff */Caml_bytes.caml_create_bytes(4096),
              /* len */0,
              /* ind */0
            ]
          }
        ];
}

function iapp(i, s) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Sapp",
            "0": i[/* data */1],
            "1": s[/* data */1]
          }
        ];
}

function icons(i, s) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Scons",
            "0": i,
            "1": s[/* data */1]
          }
        ];
}

function ising(i) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Scons",
            "0": i,
            "1": "Sempty"
          }
        ];
}

function lapp(f, s) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Slazy",
            "0": Caml_obj.caml_lazy_make((function (param) {
                    return /* constructor */{
                            tag: "Sapp",
                            "0": Curry._1(f, "()")[/* data */1],
                            "1": s[/* data */1]
                          };
                  }))
          }
        ];
}

function lcons(f, s) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Slazy",
            "0": Caml_obj.caml_lazy_make((function (param) {
                    return /* constructor */{
                            tag: "Scons",
                            "0": Curry._1(f, "()"),
                            "1": s[/* data */1]
                          };
                  }))
          }
        ];
}

function lsing(f) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Slazy",
            "0": Caml_obj.caml_lazy_make((function (param) {
                    return /* constructor */{
                            tag: "Scons",
                            "0": Curry._1(f, "()"),
                            "1": "Sempty"
                          };
                  }))
          }
        ];
}

function slazy(f) {
  return /* record */[
          /* count */0,
          /* data : constructor */{
            tag: "Slazy",
            "0": Caml_obj.caml_lazy_make((function (param) {
                    return Curry._1(f, "()")[/* data */1];
                  }))
          }
        ];
}

function dump_data(f, param) {
  if (typeof param === "string") {
    return Pervasives.print_string("Sempty");
  } else {
    switch (/* XXX */param.tag) {
      case "Scons" :
          Pervasives.print_string("Scons (");
          Curry._1(f, param[0]);
          Pervasives.print_string(", ");
          dump_data(f, param[1]);
          return Pervasives.print_string(")");
      case "Sapp" :
          Pervasives.print_string("Sapp (");
          dump_data(f, param[0]);
          Pervasives.print_string(", ");
          dump_data(f, param[1]);
          return Pervasives.print_string(")");
      case "Slazy" :
          return Pervasives.print_string("Slazy");
      case "Sgen" :
          return Pervasives.print_string("Sgen");
      case "Sbuffio" :
          return Pervasives.print_string("Sbuffio");
      
    }
  }
}

function dump(f, s) {
  Pervasives.print_string("{count = ");
  Pervasives.print_int(s[/* count */0]);
  Pervasives.print_string("; data = ");
  dump_data(f, s[/* data */1]);
  Pervasives.print_string("}");
  return Pervasives.print_newline("()");
}

function count(prim) {
  return prim[0];
}

var sempty = /* record */[
  /* count */0,
  /* data */"Sempty"
];

exports.Failure = Failure;
exports.$$Error = $$Error;
exports.from = from;
exports.of_list = of_list;
exports.of_string = of_string;
exports.of_bytes = of_bytes;
exports.of_channel = of_channel;
exports.iter = iter;
exports.next = next;
exports.empty = empty;
exports.peek = peek;
exports.junk = junk;
exports.count = count;
exports.npeek = npeek;
exports.iapp = iapp;
exports.icons = icons;
exports.ising = ising;
exports.lapp = lapp;
exports.lcons = lcons;
exports.lsing = lsing;
exports.sempty = sempty;
exports.slazy = slazy;
exports.dump = dump;
/* No side effect */

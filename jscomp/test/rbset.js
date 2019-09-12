'use strict';

var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function blackify(s) {
  if (s !== "Empty" && s[0] !== "Black") {
    return /* tuple */[
            /* constructor */{
              tag: "Node",
              "0": "Black",
              "1": s[1],
              "2": s[2],
              "3": s[3]
            },
            false
          ];
  } else {
    return /* tuple */[
            s,
            true
          ];
  }
}

function is_empty(param) {
  return param === "Empty";
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param !== "Empty") {
      var y = param[2];
      if (x === y) {
        return true;
      } else if (x < y) {
        _param = param[1];
        continue ;
      } else {
        _param = param[3];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function balance_left(l, x, r) {
  var exit = 0;
  var a;
  var x$1;
  var b;
  var y;
  var c;
  var z;
  var d;
  if (l !== "Empty" && l[0] !== "Black") {
    var a$1 = l[1];
    if (a$1 !== "Empty" && a$1[0] !== "Black") {
      a = a$1[1];
      x$1 = a$1[2];
      b = a$1[3];
      y = l[2];
      c = l[3];
      z = x;
      d = r;
      exit = 2;
    }
    var match = l[3];
    if (match !== "Empty" && match[0] !== "Black") {
      a = a$1;
      x$1 = l[2];
      b = match[1];
      y = match[2];
      c = match[3];
      z = x;
      d = r;
      exit = 2;
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 :
        return /* constructor */{
                tag: "Node",
                "0": "Black",
                "1": l,
                "2": x,
                "3": r
              };
    case 2 :
        return /* constructor */{
                tag: "Node",
                "0": "Red",
                "1": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": a,
                  "2": x$1,
                  "3": b
                },
                "2": y,
                "3": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": c,
                  "2": z,
                  "3": d
                }
              };
    
  }
}

function balance_right(l, x, r) {
  var exit = 0;
  var a;
  var x$1;
  var b;
  var y;
  var c;
  var z;
  var d;
  if (r !== "Empty" && r[0] !== "Black") {
    var b$1 = r[1];
    if (b$1 !== "Empty" && b$1[0] !== "Black") {
      a = l;
      x$1 = x;
      b = b$1[1];
      y = b$1[2];
      c = b$1[3];
      z = r[2];
      d = r[3];
      exit = 2;
    }
    var match = r[3];
    if (match !== "Empty" && match[0] !== "Black") {
      a = l;
      x$1 = x;
      b = b$1;
      y = r[2];
      c = match[1];
      z = match[2];
      d = match[3];
      exit = 2;
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 :
        return /* constructor */{
                tag: "Node",
                "0": "Black",
                "1": l,
                "2": x,
                "3": r
              };
    case 2 :
        return /* constructor */{
                tag: "Node",
                "0": "Red",
                "1": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": a,
                  "2": x$1,
                  "3": b
                },
                "2": y,
                "3": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": c,
                  "2": z,
                  "3": d
                }
              };
    
  }
}

function singleton(x) {
  return /* constructor */{
          tag: "Node",
          "0": "Black",
          "1": "Empty",
          "2": x,
          "3": "Empty"
        };
}

function unbalanced_left(param) {
  if (param !== "Empty") {
    if (param[0] !== "Black") {
      var match = param[1];
      if (match !== "Empty" && match[0] === "Black") {
        return /* tuple */[
                balance_left(/* constructor */{
                      tag: "Node",
                      "0": "Red",
                      "1": match[1],
                      "2": match[2],
                      "3": match[3]
                    }, param[2], param[3]),
                false
              ];
      }
      
    } else {
      var match$1 = param[1];
      if (match$1 !== "Empty") {
        if (match$1[0] !== "Black") {
          var match$2 = match$1[3];
          if (match$2 !== "Empty" && match$2[0] === "Black") {
            return /* tuple */[
                    /* constructor */{
                      tag: "Node",
                      "0": "Black",
                      "1": match$1[1],
                      "2": match$1[2],
                      "3": balance_left(/* constructor */{
                            tag: "Node",
                            "0": "Red",
                            "1": match$2[1],
                            "2": match$2[2],
                            "3": match$2[3]
                          }, param[2], param[3])
                    },
                    false
                  ];
          }
          
        } else {
          return /* tuple */[
                  balance_left(/* constructor */{
                        tag: "Node",
                        "0": "Red",
                        "1": match$1[1],
                        "2": match$1[2],
                        "3": match$1[3]
                      }, param[2], param[3]),
                  true
                ];
        }
      }
      
    }
  }
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "rbset.ml",
          57,
          9
        ]
      ];
}

function unbalanced_right(param) {
  if (param !== "Empty") {
    if (param[0] !== "Black") {
      var match = param[3];
      if (match !== "Empty" && match[0] === "Black") {
        return /* tuple */[
                balance_right(param[1], param[2], /* constructor */{
                      tag: "Node",
                      "0": "Red",
                      "1": match[1],
                      "2": match[2],
                      "3": match[3]
                    }),
                false
              ];
      }
      
    } else {
      var match$1 = param[3];
      if (match$1 !== "Empty") {
        var x = param[2];
        var a = param[1];
        if (match$1[0] !== "Black") {
          var match$2 = match$1[1];
          if (match$2 !== "Empty" && match$2[0] === "Black") {
            return /* tuple */[
                    /* constructor */{
                      tag: "Node",
                      "0": "Black",
                      "1": balance_right(a, x, /* constructor */{
                            tag: "Node",
                            "0": "Red",
                            "1": match$2[1],
                            "2": match$2[2],
                            "3": match$2[3]
                          }),
                      "2": match$1[2],
                      "3": match$1[3]
                    },
                    false
                  ];
          }
          
        } else {
          return /* tuple */[
                  balance_right(a, x, /* constructor */{
                        tag: "Node",
                        "0": "Red",
                        "1": match$1[1],
                        "2": match$1[2],
                        "3": match$1[3]
                      }),
                  true
                ];
        }
      }
      
    }
  }
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "rbset.ml",
          63,
          9
        ]
      ];
}

function lbalance(x1, x2, x3) {
  if (x1 !== "Empty") {
    if (x1[0] !== "Black") {
      var r = x1[3];
      var l = x1[1];
      if (l !== "Empty" && l[0] !== "Black") {
        return /* constructor */{
                tag: "Node",
                "0": "Red",
                "1": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": l[1],
                  "2": l[2],
                  "3": l[3]
                },
                "2": x1[2],
                "3": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": r,
                  "2": x2,
                  "3": x3
                }
              };
      }
      if (r !== "Empty") {
        if (r[0] !== "Black") {
          var y = r[2];
          return /* constructor */{
                  tag: "Node",
                  "0": "Red",
                  "1": /* constructor */{
                    tag: "Node",
                    "0": "Black",
                    "1": l,
                    "2": y,
                    "3": r[1]
                  },
                  "2": y,
                  "3": /* constructor */{
                    tag: "Node",
                    "0": "Black",
                    "1": r[3],
                    "2": x2,
                    "3": x3
                  }
                };
        } else {
          return /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": x1,
                  "2": x2,
                  "3": x3
                };
        }
      } else {
        return /* constructor */{
                tag: "Node",
                "0": "Black",
                "1": x1,
                "2": x2,
                "3": x3
              };
      }
    } else {
      return /* constructor */{
              tag: "Node",
              "0": "Black",
              "1": x1,
              "2": x2,
              "3": x3
            };
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": "Black",
            "1": x1,
            "2": x2,
            "3": x3
          };
  }
}

function rbalance(x1, x2, x3) {
  if (x3 !== "Empty" && x3[0] !== "Black") {
    var b = x3[1];
    var exit = 0;
    if (b !== "Empty" && b[0] !== "Black") {
      return /* constructor */{
              tag: "Node",
              "0": "Red",
              "1": /* constructor */{
                tag: "Node",
                "0": "Black",
                "1": x1,
                "2": x2,
                "3": b[1]
              },
              "2": b[2],
              "3": /* constructor */{
                tag: "Node",
                "0": "Black",
                "1": b[3],
                "2": x3[2],
                "3": x3[3]
              }
            };
    } else {
      exit = 2;
    }
    if (exit === 2) {
      var match = x3[3];
      if (match !== "Empty" && match[0] !== "Black") {
        return /* constructor */{
                tag: "Node",
                "0": "Red",
                "1": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": x1,
                  "2": x2,
                  "3": b
                },
                "2": x3[2],
                "3": /* constructor */{
                  tag: "Node",
                  "0": "Black",
                  "1": match[1],
                  "2": match[2],
                  "3": match[3]
                }
              };
      }
      
    }
    
  }
  return /* constructor */{
          tag: "Node",
          "0": "Black",
          "1": x1,
          "2": x2,
          "3": x3
        };
}

function ins(x, s) {
  if (s !== "Empty") {
    if (s[0] !== "Black") {
      var y = s[2];
      if (x === y) {
        return s;
      } else {
        var b = s[3];
        var a = s[1];
        if (x < y) {
          return /* constructor */{
                  tag: "Node",
                  "0": "Red",
                  "1": ins(x, a),
                  "2": y,
                  "3": b
                };
        } else {
          return /* constructor */{
                  tag: "Node",
                  "0": "Red",
                  "1": a,
                  "2": y,
                  "3": ins(x, b)
                };
        }
      }
    } else {
      var y$1 = s[2];
      if (x === y$1) {
        return s;
      } else {
        var b$1 = s[3];
        var a$1 = s[1];
        if (x < y$1) {
          return lbalance(ins(x, a$1), y$1, b$1);
        } else {
          return rbalance(a$1, y$1, ins(x, b$1));
        }
      }
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": "Red",
            "1": "Empty",
            "2": x,
            "3": "Empty"
          };
  }
}

function add(x, s) {
  var s$1 = ins(x, s);
  if (s$1 !== "Empty" && s$1[0] !== "Black") {
    return /* constructor */{
            tag: "Node",
            "0": "Black",
            "1": s$1[1],
            "2": s$1[2],
            "3": s$1[3]
          };
  } else {
    return s$1;
  }
}

function remove_min(param) {
  if (param !== "Empty") {
    var c = param[0];
    if (c !== "Black") {
      if (param[1] === "Empty") {
        return /* tuple */[
                param[3],
                param[2],
                false
              ];
      }
      
    } else if (param[1] === "Empty") {
      var match = param[3];
      var x = param[2];
      if (match !== "Empty") {
        if (match[0] !== "Black") {
          return /* tuple */[
                  /* constructor */{
                    tag: "Node",
                    "0": "Black",
                    "1": match[1],
                    "2": match[2],
                    "3": match[3]
                  },
                  x,
                  false
                ];
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "rbset.ml",
                  115,
                  4
                ]
              ];
        }
      } else {
        return /* tuple */[
                "Empty",
                x,
                true
              ];
      }
    }
    var match$1 = remove_min(param[1]);
    var y = match$1[1];
    var s = /* constructor */{
      tag: "Node",
      "0": c,
      "1": match$1[0],
      "2": param[2],
      "3": param[3]
    };
    if (match$1[2]) {
      var match$2 = unbalanced_right(s);
      return /* tuple */[
              match$2[0],
              y,
              match$2[1]
            ];
    } else {
      return /* tuple */[
              s,
              y,
              false
            ];
    }
  } else {
    throw [
          Caml_builtin_exceptions.assert_failure,
          /* tuple */[
            "rbset.ml",
            115,
            4
          ]
        ];
  }
}

function remove_aux(x, n) {
  if (n !== "Empty") {
    var r = n[3];
    var y = n[2];
    var l = n[1];
    var c = n[0];
    if (x === y) {
      if (r !== "Empty") {
        var match = remove_min(r);
        var n$1 = /* constructor */{
          tag: "Node",
          "0": c,
          "1": l,
          "2": match[1],
          "3": match[0]
        };
        if (match[2]) {
          return unbalanced_left(n$1);
        } else {
          return /* tuple */[
                  n$1,
                  false
                ];
        }
      } else if (c === "Red") {
        return /* tuple */[
                l,
                false
              ];
      } else {
        return blackify(l);
      }
    } else if (x < y) {
      var match$1 = remove_aux(x, l);
      var n$2 = /* constructor */{
        tag: "Node",
        "0": c,
        "1": match$1[0],
        "2": y,
        "3": r
      };
      if (match$1[1]) {
        return unbalanced_right(n$2);
      } else {
        return /* tuple */[
                n$2,
                false
              ];
      }
    } else {
      var match$2 = remove_aux(x, r);
      var n$3 = /* constructor */{
        tag: "Node",
        "0": c,
        "1": l,
        "2": y,
        "3": match$2[0]
      };
      if (match$2[1]) {
        return unbalanced_left(n$3);
      } else {
        return /* tuple */[
                n$3,
                false
              ];
      }
    }
  } else {
    return /* tuple */[
            "Empty",
            false
          ];
  }
}

function remove(x, s) {
  return remove_aux(x, s)[0];
}

function cardinal(param) {
  if (param !== "Empty") {
    return (1 + cardinal(param[1]) | 0) + cardinal(param[3]) | 0;
  } else {
    return 0;
  }
}

var empty = "Empty";

exports.blackify = blackify;
exports.empty = empty;
exports.is_empty = is_empty;
exports.mem = mem;
exports.balance_left = balance_left;
exports.balance_right = balance_right;
exports.singleton = singleton;
exports.unbalanced_left = unbalanced_left;
exports.unbalanced_right = unbalanced_right;
exports.lbalance = lbalance;
exports.rbalance = rbalance;
exports.ins = ins;
exports.add = add;
exports.remove_min = remove_min;
exports.remove_aux = remove_aux;
exports.remove = remove;
exports.cardinal = cardinal;
/* No side effect */

'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_primitive = require("../../lib/js/caml_primitive.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function height(param) {
  if (param !== "Empty") {
    return param[4];
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* constructor */{
          tag: "Node",
          "0": l,
          "1": x,
          "2": d,
          "3": r,
          "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, x, d, r) {
  var hl = l !== "Empty" ? l[4] : 0;
  var hr = r !== "Empty" ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l !== "Empty") {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      } else if (lr !== "Empty") {
        return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r !== "Empty") {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height(rr) >= height(rl)) {
        return create(create(l, x, d, rl), rv, rd, rr);
      } else if (rl !== "Empty") {
        return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": l,
            "1": x,
            "2": d,
            "3": r,
            "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
}

function add(x, data, param) {
  if (param !== "Empty") {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = Caml_primitive.caml_int_compare(x, v);
    if (c === 0) {
      return /* constructor */{
              tag: "Node",
              "0": l,
              "1": x,
              "2": data,
              "3": r,
              "4": param[4]
            };
    } else if (c < 0) {
      return bal(add(x, data, l), v, d, r);
    } else {
      return bal(l, v, d, add(x, data, r));
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": "Empty",
            "1": x,
            "2": data,
            "3": "Empty",
            "4": 1
          };
  }
}

function cons_enum(_m, _e) {
  while(true) {
    var e = _e;
    var m = _m;
    if (m !== "Empty") {
      _e = /* constructor */{
        tag: "More",
        "0": m[1],
        "1": m[2],
        "2": m[3],
        "3": e
      };
      _m = m[0];
      continue ;
    } else {
      return e;
    }
  };
}

function compare(cmp, m1, m2) {
  var _e1 = cons_enum(m1, "End");
  var _e2 = cons_enum(m2, "End");
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1 !== "End") {
      if (e2 !== "End") {
        var c = Caml_primitive.caml_int_compare(e1[0], e2[0]);
        if (c !== 0) {
          return c;
        } else {
          var c$1 = Curry._2(cmp, e1[1], e2[1]);
          if (c$1 !== 0) {
            return c$1;
          } else {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
          }
        }
      } else {
        return 1;
      }
    } else if (e2 !== "End") {
      return -1;
    } else {
      return 0;
    }
  };
}

function equal(cmp, m1, m2) {
  var _e1 = cons_enum(m1, "End");
  var _e2 = cons_enum(m2, "End");
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1 !== "End") {
      if (e2 !== "End" && e1[0] === e2[0] && Curry._2(cmp, e1[1], e2[1])) {
        _e2 = cons_enum(e2[2], e2[3]);
        _e1 = cons_enum(e1[2], e1[3]);
        continue ;
      } else {
        return false;
      }
    } else {
      return e2 === "End";
    }
  };
}

function cardinal(param) {
  if (param !== "Empty") {
    return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
  } else {
    return 0;
  }
}

function height$1(param) {
  if (param !== "Empty") {
    return param[4];
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  var hl = height$1(l);
  var hr = height$1(r);
  return /* constructor */{
          tag: "Node",
          "0": l,
          "1": x,
          "2": d,
          "3": r,
          "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal$1(l, x, d, r) {
  var hl = l !== "Empty" ? l[4] : 0;
  var hr = r !== "Empty" ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l !== "Empty") {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height$1(ll) >= height$1(lr)) {
        return create$1(ll, lv, ld, create$1(lr, x, d, r));
      } else if (lr !== "Empty") {
        return create$1(create$1(ll, lv, ld, lr[0]), lr[1], lr[2], create$1(lr[3], x, d, r));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r !== "Empty") {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height$1(rr) >= height$1(rl)) {
        return create$1(create$1(l, x, d, rl), rv, rd, rr);
      } else if (rl !== "Empty") {
        return create$1(create$1(l, x, d, rl[0]), rl[1], rl[2], create$1(rl[3], rv, rd, rr));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": l,
            "1": x,
            "2": d,
            "3": r,
            "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
}

function add$1(x, data, param) {
  if (param !== "Empty") {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = Caml_primitive.caml_string_compare(x, v);
    if (c === 0) {
      return /* constructor */{
              tag: "Node",
              "0": l,
              "1": x,
              "2": data,
              "3": r,
              "4": param[4]
            };
    } else if (c < 0) {
      return bal$1(add$1(x, data, l), v, d, r);
    } else {
      return bal$1(l, v, d, add$1(x, data, r));
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": "Empty",
            "1": x,
            "2": data,
            "3": "Empty",
            "4": 1
          };
  }
}

function find(x, _param) {
  while(true) {
    var param = _param;
    if (param !== "Empty") {
      var c = Caml_primitive.caml_string_compare(x, param[1]);
      if (c === 0) {
        return param[2];
      } else {
        _param = c < 0 ? param[0] : param[3];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function of_list(kvs) {
  return List.fold_left((function (acc, param) {
                return add(param[0], param[1], acc);
              }), "Empty", kvs);
}

var int_map_suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "add",
    (function (param) {
        var v = of_list(/* constructor */{
              tag: "::",
              "0": /* tuple */[
                1,
                /* "1" */49
              ],
              "1": /* constructor */{
                tag: "::",
                "0": /* tuple */[
                  2,
                  /* "3" */51
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    3,
                    /* "4" */52
                  ],
                  "1": "[]"
                }
              }
            });
        return /* constructor */{
                tag: "Eq",
                "0": cardinal(v),
                "1": 3
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "equal",
      (function (param) {
          var v = of_list(/* constructor */{
                tag: "::",
                "0": /* tuple */[
                  1,
                  /* "1" */49
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    2,
                    /* "3" */51
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      3,
                      /* "4" */52
                    ],
                    "1": "[]"
                  }
                }
              });
          var u = of_list(/* constructor */{
                tag: "::",
                "0": /* tuple */[
                  2,
                  /* "3" */51
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    3,
                    /* "4" */52
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      1,
                      /* "1" */49
                    ],
                    "1": "[]"
                  }
                }
              });
          return /* constructor */{
                  tag: "Eq",
                  "0": compare(Caml_obj.caml_compare, u, v),
                  "1": 0
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "equal2",
        (function (param) {
            var v = of_list(/* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    1,
                    /* "1" */49
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      2,
                      /* "3" */51
                    ],
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* tuple */[
                        3,
                        /* "4" */52
                      ],
                      "1": "[]"
                    }
                  }
                });
            var u = of_list(/* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    2,
                    /* "3" */51
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      3,
                      /* "4" */52
                    ],
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* tuple */[
                        1,
                        /* "1" */49
                      ],
                      "1": "[]"
                    }
                  }
                });
            return /* constructor */{
                    tag: "Eq",
                    "0": true,
                    "1": equal((function (x, y) {
                            return x === y;
                          }), u, v)
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "iteration",
          (function (param) {
              var m = "Empty";
              for(var i = 0; i <= 10000; ++i){
                m = add$1(String(i), String(i), m);
              }
              var v = -1;
              for(var i$1 = 0; i$1 <= 10000; ++i$1){
                if (find(String(i$1), m) !== String(i$1)) {
                  v = i$1;
                }
                
              }
              return /* constructor */{
                      tag: "Eq",
                      "0": v,
                      "1": -1
                    };
            })
        ],
        "1": "[]"
      }
    }
  }
};

Mt.from_pair_suites("Map_test", int_map_suites);

/*  Not a pure module */

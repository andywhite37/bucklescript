'use strict';

var Arg = require("../../lib/js/arg.js");
var Obj = require("../../lib/js/obj.js");
var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Printf = require("../../lib/js/printf.js");
var $$String = require("../../lib/js/string.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_int32 = require("../../lib/js/caml_int32.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_string = require("../../lib/js/caml_string.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function $$finally(v, action, f) {
  var e;
  try {
    e = Curry._1(f, v);
  }
  catch (e$1){
    Curry._1(action, v);
    throw e$1;
  }
  Curry._1(action, v);
  return e;
}

function with_file_as_chan(filename, f) {
  return $$finally(Pervasives.open_out_bin(filename), Pervasives.close_out, f);
}

function with_file_as_pp(filename, f) {
  return $$finally(Pervasives.open_out_bin(filename), Pervasives.close_out, (function (chan) {
                var fmt = Format.formatter_of_out_channel(chan);
                var v = Curry._1(f, fmt);
                Format.pp_print_flush(fmt, /* () */0);
                return v;
              }));
}

function is_pos_pow(n) {
  var E = Caml_exceptions.create("E");
  try {
    var _c = 0;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var c = _c;
      if (n$1 <= 0) {
        return -2;
      } else if (n$1 === 1) {
        return c;
      } else if ((n$1 & 1) === 0) {
        _n = (n$1 >> 1);
        _c = c + 1 | 0;
        continue ;
      } else {
        throw E;
      }
    };
  }
  catch (exn){
    if (exn === E) {
      return -1;
    } else {
      throw exn;
    }
  }
}

function failwithf(loc, fmt) {
  return Format.ksprintf((function (s) {
                var s$1 = loc + s;
                throw [
                      Caml_builtin_exceptions.failure,
                      s$1
                    ];
              }), fmt);
}

function invalid_argf(fmt) {
  return Format.ksprintf(Pervasives.invalid_arg, fmt);
}

function bad_argf(fmt) {
  return Format.ksprintf((function (x) {
                throw [
                      Arg.Bad,
                      x
                    ];
              }), fmt);
}

function dump(r) {
  if (typeof r === "number") {
    return String(r);
  } else {
    var get_fields = function (_acc, _n) {
      while(true) {
        var n = _n;
        var acc = _acc;
        if (n !== 0) {
          var n$1 = n - 1 | 0;
          _n = n$1;
          _acc = /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": r[n$1],
            "1": acc
          };
          continue ;
        } else {
          return acc;
        }
      };
    };
    var is_list = function (_r) {
      while(true) {
        var r = _r;
        if (typeof r === "number") {
          return Caml_obj.caml_equal(r, 0);
        } else {
          var s = r.length;
          var t = r.tag | 0;
          if (t === 0 && s === 2) {
            _r = r[1];
            continue ;
          } else {
            return false;
          }
        }
      };
    };
    var get_list = function (r) {
      if (typeof r === "number") {
        return /* [] */0;
      } else {
        var h = r[0];
        var t = get_list(r[1]);
        return /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": h,
                "1": t
              };
      }
    };
    var s = r.length;
    var t = r.tag | 0;
    if (is_list(r)) {
      var fields = get_list(r);
      return "[" + ($$String.concat("; ", List.map(dump, fields)) + "]");
    } else if (t !== 0) {
      if (t === Obj.lazy_tag) {
        return "<lazy>";
      } else if (t === Obj.closure_tag) {
        return "<closure>";
      } else if (t === Obj.object_tag) {
        var fields$1 = get_fields(/* [] */0, s);
        var match;
        if (fields$1) {
          var match$1 = fields$1[1];
          if (match$1) {
            match = /* tuple */[
              fields$1[0],
              match$1[0],
              match$1[1]
            ];
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  /* tuple */[
                    "ext_pervasives_test.ml",
                    118,
                    15
                  ]
                ];
          }
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "ext_pervasives_test.ml",
                  118,
                  15
                ]
              ];
        }
        return "Object #" + (dump(match[1]) + (" (" + ($$String.concat(", ", List.map(dump, match[2])) + ")")));
      } else if (t === Obj.infix_tag) {
        return "<infix>";
      } else if (t === Obj.forward_tag) {
        return "<forward>";
      } else if (t < Obj.no_scan_tag) {
        var fields$2 = get_fields(/* [] */0, s);
        return "Tag" + (String(t) + (" (" + ($$String.concat(", ", List.map(dump, fields$2)) + ")")));
      } else if (t === Obj.string_tag) {
        return "\"" + ($$String.escaped(r) + "\"");
      } else if (t === Obj.double_tag) {
        return Pervasives.string_of_float(r);
      } else if (t === Obj.abstract_tag) {
        return "<abstract>";
      } else if (t === Obj.custom_tag) {
        return "<custom>";
      } else if (t === Obj.custom_tag) {
        return "<final>";
      } else if (t === Obj.double_array_tag) {
        return "[|" + ($$String.concat(";", $$Array.to_list($$Array.map(Pervasives.string_of_float, r))) + "|]");
      } else {
        var name = Curry._2(Printf.sprintf(/* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "unknown: tag ",
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 11,
                        name: "String_literal",
                        length: 2,
                        "0": " size ",
                        "1": /* constructor */{
                          tag: 4,
                          name: "Int",
                          length: 4,
                          "0": /* Int_d */0,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": "unknown: tag %d size %d"
                }), t, s);
        return "<" + (name + ">");
      }
    } else {
      var fields$3 = get_fields(/* [] */0, s);
      return "(" + ($$String.concat(", ", List.map(dump, fields$3)) + ")");
    }
  }
}

var dump$1 = dump;

function pp_any(fmt, v) {
  return Curry._1(Format.fprintf(fmt, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 18,
                    name: "Formatting_gen",
                    length: 2,
                    "0": /* constructor */{
                      tag: 1,
                      name: "Open_box",
                      length: 1,
                      "0": /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* End_of_format */0,
                        "1": ""
                      }
                    },
                    "1": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* Close_box */0,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": "@[%s@]"
                }), dump$1(v));
}

function hash_variant(s) {
  var accu = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    accu = Caml_int32.imul(223, accu) + Caml_string.get(s, i) | 0;
  }
  accu = accu & 2147483647;
  if (accu > 1073741823) {
    return accu - -2147483648 | 0;
  } else {
    return accu;
  }
}

exports.$$finally = $$finally;
exports.with_file_as_chan = with_file_as_chan;
exports.with_file_as_pp = with_file_as_pp;
exports.is_pos_pow = is_pos_pow;
exports.failwithf = failwithf;
exports.invalid_argf = invalid_argf;
exports.bad_argf = bad_argf;
exports.dump = dump$1;
exports.pp_any = pp_any;
exports.hash_variant = hash_variant;
/* Format Not a pure module */

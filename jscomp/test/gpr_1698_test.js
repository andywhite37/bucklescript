'use strict';

var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function is_number(_expr) {
  while(true) {
    var expr = _expr;
    switch (/* XXX */expr.tag) {
      case "Val" :
          if (/* XXX */expr[0].tag === "Natural") {
            return true;
          } else {
            return false;
          }
      case "Neg" :
          _expr = expr[0];
          continue ;
      case "Sum" :
      case "Pow" :
      case "Frac" :
      case "Gcd" :
          return false;
      
    }
  };
}

function compare(context, state, _a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    var exit = 0;
    var na;
    var da;
    var nb;
    var db;
    var exit$1 = 0;
    var exit$2 = 0;
    switch (/* XXX */a.tag) {
      case "Val" :
          switch (/* XXX */b.tag) {
            case "Val" :
                return 111;
            case "Neg" :
                exit$2 = 5;
                break;
            case "Sum" :
                exit$1 = 4;
                break;
            case "Frac" :
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "gpr_1698_test.ml",
                        45,
                        10
                      ]
                    ];
            case "Pow" :
            case "Gcd" :
                exit = 1;
                break;
            
          }
          break;
      case "Neg" :
          _a = a[0];
          continue ;
      case "Sum" :
      case "Pow" :
          exit$2 = 5;
          break;
      case "Frac" :
          switch (/* XXX */b.tag) {
            case "Val" :
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      /* tuple */[
                        "gpr_1698_test.ml",
                        45,
                        10
                      ]
                    ];
            case "Neg" :
                exit$2 = 5;
                break;
            case "Sum" :
                exit$1 = 4;
                break;
            case "Frac" :
                na = a[0];
                da = a[1];
                nb = b[0];
                db = b[1];
                exit = 2;
                break;
            case "Pow" :
            case "Gcd" :
                exit = 1;
                break;
            
          }
          break;
      case "Gcd" :
          switch (/* XXX */b.tag) {
            case "Neg" :
                exit$2 = 5;
                break;
            case "Sum" :
                exit$1 = 4;
                break;
            case "Gcd" :
                na = a[0];
                da = a[1];
                nb = b[0];
                db = b[1];
                exit = 2;
                break;
            default:
              
          }
          break;
      
    }
    if (exit$2 === 5) {
      if (/* XXX */b.tag === "Neg") {
        _b = b[0];
        continue ;
      } else if (/* XXX */a.tag === "Sum" && is_number(b)) {
        return 1;
      } else {
        exit$1 = 4;
      }
    }
    if (exit$1 === 4 && /* XXX */b.tag === "Sum" && is_number(a)) {
      return -1;
    }
    switch (/* XXX */a.tag) {
      case "Sum" :
          exit = 1;
          break;
      case "Pow" :
          return -1;
      case "Val" :
      case "Frac" :
      case "Gcd" :
          return 1;
      
    }
    switch (exit) {
      case 1 :
          switch (/* XXX */b.tag) {
            case "Pow" :
                return 1;
            case "Gcd" :
                return -1;
            default:
              return -1;
          }
      case 2 :
          var denom = compare(context, state, da, db);
          var match = denom === 0;
          if (match) {
            _b = nb;
            _a = na;
            continue ;
          } else {
            return denom;
          }
      
    }
  };
}

var a = /* constructor */{
  tag: "Sum",
  "0": /* constructor */{
    tag: "::",
    "0": /* constructor */{
      tag: "Val",
      "0": /* constructor */{
        tag: "Symbol",
        "0": "a"
      }
    },
    "1": /* constructor */{
      tag: "::",
      "0": /* constructor */{
        tag: "Val",
        "0": /* constructor */{
          tag: "Natural",
          "0": 2
        }
      },
      "1": "[]"
    }
  }
};

var b = /* constructor */{
  tag: "Val",
  "0": /* constructor */{
    tag: "Symbol",
    "0": "x"
  }
};

console.log(compare("InSum", /* record */[/* complex */true], a, b));

/*  Not a pure module */

'use strict';

var Caml_int32 = require("../../lib/js/caml_int32.js");

function $plus$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    if (/* XXX */f.tag === "Int") {
      var n = f[0];
      if (/* XXX */g.tag === "Int") {
        return /* constructor */{
                tag: "Int",
                "0": n + g[0] | 0
              };
      } else if (n === 0) {
        return g;
      }
      
    }
    switch (/* XXX */g.tag) {
      case "Int" :
          if (g[0] !== 0) {
            return /* constructor */{
                    tag: "Add",
                    "0": f,
                    "1": g
                  };
          } else {
            return f;
          }
      case "Add" :
          _g = g[1];
          _f = $plus$colon(f, g[0]);
          continue ;
      case "Var" :
      case "Mul" :
          return /* constructor */{
                  tag: "Add",
                  "0": f,
                  "1": g
                };
      
    }
  };
}

function $star$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    var exit = 0;
    var exit$1 = 0;
    if (/* XXX */f.tag === "Int") {
      var n = f[0];
      if (/* XXX */g.tag === "Int") {
        return /* constructor */{
                tag: "Int",
                "0": Caml_int32.imul(n, g[0])
              };
      } else if (n !== 0) {
        exit$1 = 3;
      } else {
        return /* constructor */{
                tag: "Int",
                "0": 0
              };
      }
    } else {
      exit$1 = 3;
    }
    if (exit$1 === 3) {
      if (/* XXX */g.tag === "Int" && g[0] === 0) {
        return /* constructor */{
                tag: "Int",
                "0": 0
              };
      } else {
        exit = 2;
      }
    }
    if (exit === 2 && /* XXX */f.tag === "Int" && f[0] === 1) {
      return g;
    }
    switch (/* XXX */g.tag) {
      case "Int" :
          if (g[0] !== 1) {
            return /* constructor */{
                    tag: "Mul",
                    "0": f,
                    "1": g
                  };
          } else {
            return f;
          }
      case "Var" :
      case "Add" :
          return /* constructor */{
                  tag: "Mul",
                  "0": f,
                  "1": g
                };
      case "Mul" :
          _g = g[1];
          _f = $star$colon(f, g[0]);
          continue ;
      
    }
  };
}

function simplify(f) {
  switch (/* XXX */f.tag) {
    case "Int" :
    case "Var" :
        return f;
    case "Add" :
        return $plus$colon(simplify(f[0]), simplify(f[1]));
    case "Mul" :
        return $star$colon(simplify(f[0]), simplify(f[1]));
    
  }
}

exports.$plus$colon = $plus$colon;
exports.$star$colon = $star$colon;
exports.simplify = simplify;
/* No side effect */

'use strict';

var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function foo(param) {
  if (typeof param === "string") {
    if (param === "A1") {
      return 1;
    } else {
      return 2;
    }
  } else {
    switch (/* XXX */param.tag) {
      case "B" :
          return param[0];
      case "C" :
          return param[0] + param[1] | 0;
      case "D" :
          var match = param[0];
          return match[0] + match[1] | 0;
      
    }
  }
}

function fooA1(param) {
  if (typeof param === "number" && param === 0) {
    return 1;
  } else {
    return 42;
  }
}

function fooC(param) {
  if (typeof param === "string" || /* XXX */param.tag !== "C") {
    return 42;
  } else {
    return param[0] + param[1] | 0;
  }
}

function switchNum(param) {
  switch (param) {
    case 0 :
        return "0";
    case 1 :
        return "1";
    case 2 :
        return "2";
    default:
      return "_";
  }
}

var same = Caml_obj.caml_equal;

var compare = Caml_obj.caml_compare;

var Path = {
  same: same,
  compare: compare
};

function Make(M) {
  var find = function (x) {
    return "()";
  };
  return {
          find: find
        };
}

function find(x) {
  return "()";
}

var M = {
  find: find
};

function rollback_path(subst, p) {
  try {
    return "try";
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      switch (/* XXX */p.tag) {
        case "Pdot" :
            return "Pdot";
        case "Pident" :
        case "Papply" :
            return "Pident | Papply";
        
      }
    } else {
      throw exn;
    }
  }
}

var EA1 = Caml_exceptions.create("Variant.EA1");

var EA2 = Caml_exceptions.create("Variant.EA2");

var EB = Caml_exceptions.create("Variant.EB");

var EC = Caml_exceptions.create("Variant.EC");

var ED = Caml_exceptions.create("Variant.ED");

function fooExn(f) {
  try {
    return Curry._1(f, "()");
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn === EA1) {
      return 1;
    } else if (exn === EA2) {
      return 2;
    } else if (exn[0] === EB) {
      return exn[1];
    } else if (exn[0] === EC) {
      return exn[1] + exn[2] | 0;
    } else if (exn[0] === ED) {
      var match = exn[1];
      return match[0] + match[1] | 0;
    } else {
      throw exn;
    }
  }
}

var l = /* constructor */{
  tag: "::",
  "0": 1,
  "1": /* constructor */{
    tag: "::",
    "0": 2,
    "1": /* constructor */{
      tag: "::",
      "0": 3,
      "1": "[]"
    }
  }
};

var len = List.length(l);

function switchList(param) {
  if (param) {
    var match = param[1];
    if (match) {
      if (match[1]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "variant.ml",
                82,
                9
              ]
            ];
      } else {
        return 2;
      }
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

function switchMYList(param) {
  if (typeof param === "number") {
    if (param === 0) {
      return 0;
    }
    
  } else {
    var match = param[1];
    if (typeof match === "number") {
      if (match === 0) {
        return 1;
      }
      
    } else {
      var match$1 = match[1];
      if (typeof match$1 === "number" && match$1 === 0) {
        return 2;
      }
      
    }
  }
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "variant.ml",
          91,
          9
        ]
      ];
}

var a1 = "A1";

var a2 = "A2";

var b = /* constructor */{
  tag: "B",
  "0": 34
};

var c = /* constructor */{
  tag: "C",
  "0": 4,
  "1": 2
};

var d = /* constructor */{
  tag: "D",
  "0": /* tuple */[
    4,
    2
  ]
};

exports.a1 = a1;
exports.a2 = a2;
exports.b = b;
exports.c = c;
exports.d = d;
exports.foo = foo;
exports.fooA1 = fooA1;
exports.fooC = fooC;
exports.switchNum = switchNum;
exports.Path = Path;
exports.Make = Make;
exports.M = M;
exports.rollback_path = rollback_path;
exports.EA1 = EA1;
exports.EA2 = EA2;
exports.EB = EB;
exports.EC = EC;
exports.ED = ED;
exports.fooExn = fooExn;
exports.l = l;
exports.len = len;
exports.switchList = switchList;
exports.switchMYList = switchMYList;
/* len Not a pure module */

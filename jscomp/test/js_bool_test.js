'use strict';

var Mt = require("./mt.js");

function f(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

function f2(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

function f4(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

var u = ( 1);

var v = ( true);

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "caml_bool_eq_caml_bool",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": u,
                "1": true
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "js_bool_eq_js_bool",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": v,
                  "1": true
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "js_bool_neq_acml_bool",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": true,
                    "1": true === true
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

function ff(u) {
  if (u === true) {
    return 1;
  } else {
    return 2;
  }
}

function fi(x, y) {
  return x === y;
}

function fb(x, y) {
  return x === y;
}

function fadd(x, y) {
  return x + y | 0;
}

function ffadd(x, y) {
  return x + y;
}

function ss(x) {
  return "xx" > x;
}

function bb(x) {
  return /* tuple */[
          true > x,
          false,
          true,
          true <= x,
          false,
          false < x,
          false >= x,
          true
        ];
}

var consts = /* tuple */[
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  true
];

var bool_array = /* array */[
  true,
  false
];

Mt.from_pair_suites("Js_bool_test", suites);

var f3 = true;

exports.f = f;
exports.f2 = f2;
exports.f4 = f4;
exports.f3 = f3;
exports.u = u;
exports.v = v;
exports.suites = suites;
exports.ff = ff;
exports.fi = fi;
exports.fb = fb;
exports.fadd = fadd;
exports.ffadd = ffadd;
exports.ss = ss;
exports.bb = bb;
exports.consts = consts;
exports.bool_array = bool_array;
/* u Not a pure module */

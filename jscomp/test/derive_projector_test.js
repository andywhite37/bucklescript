'use strict';


function u_x(param) {
  return param[/* u_x */0];
}

function b_x(param) {
  return param[/* b_x */0];
}

function c_x(param) {
  return param[/* c_x */0];
}

function d_int(param_0) {
  return /* constructor */{
          tag: "D_int",
          "0": param_0
        };
}

function d_tuple(param_0, param_1) {
  return /* constructor */{
          tag: "D_tuple",
          "0": param_0,
          "1": param_1
        };
}

function newContent(param_0) {
  return /* constructor */{
          tag: "NewContent",
          "0": param_0
        };
}

function d_tweak(param_0) {
  return /* constructor */{
          tag: "D_tweak",
          "0": param_0
        };
}

function u_X(param) {
  return param[/* u_X */2];
}

function d(param) {
  return param[/* d */0];
}

var v = /* d : constructor */{
  tag: "D_int",
  "0": 3
};

var h = /* constructor */{
  tag: "::",
  "0": "D_empty",
  "1": /* constructor */{
    tag: "::",
    "0": /* constructor */{
      tag: "D_int",
      "0": 3
    },
    "1": /* constructor */{
      tag: "::",
      "0": /* constructor */{
        tag: "D_tuple",
        "0": 3,
        "1": "hgo"
      },
      "1": /* constructor */{
        tag: "::",
        "0": /* constructor */{
          tag: "D_tweak",
          "0": /* tuple */[
            3,
            "hgo"
          ]
        },
        "1": /* constructor */{
          tag: "::",
          "0": /* constructor */{
            tag: "NewContent",
            "0": "3"
          },
          "1": "[]"
        }
      }
    }
  }
};

function xx(param_0) {
  return /* constructor */{
          tag: "Xx",
          "0": param_0
        };
}

function a(param_0) {
  return /* constructor */{
          tag: "A",
          "0": param_0
        };
}

var d_empty = "D_empty";

var hei = "Hei";

exports.u_x = u_x;
exports.b_x = b_x;
exports.c_x = c_x;
exports.d_empty = d_empty;
exports.d_int = d_int;
exports.d_tuple = d_tuple;
exports.newContent = newContent;
exports.d_tweak = d_tweak;
exports.hei = hei;
exports.u_X = u_X;
exports.d = d;
exports.v = v;
exports.h = h;
exports.xx = xx;
exports.a = a;
/* No side effect */

'use strict';


var a = {
  x: 3,
  y: /* constructor */{
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
  }
};

exports.a = a;
/* No side effect */

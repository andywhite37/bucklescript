'use strict';


var a = {
  x: 3,
  y: /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": 1,
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": 2,
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": 3,
        "1": /* [] */0
      }
    }
  }
};

exports.a = a;
/* No side effect */

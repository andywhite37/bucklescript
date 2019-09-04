'use strict';


function map(f, param) {
  if (param) {
    var r = f(param[0]);
    return /* constructor */{
            tag: 0,
            name: "::",
            "0": r,
            "1": map(f, param[1])
          };
  } else {
    return /* [] */0;
  }
}

exports.map = map;
/* No side effect */

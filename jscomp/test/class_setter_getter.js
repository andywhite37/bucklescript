'use strict';


function fff(x) {
  x.height = 2;
  return /* () */0;
}

function ff(x, z) {
  return /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": x.height,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": z.height,
            "1": /* [] */0
          }
        };
}

exports.fff = fff;
exports.ff = ff;
/* No side effect */

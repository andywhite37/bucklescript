'use strict';


function make(x) {
  return /* constructor */{
          tag: "A",
          "0": x
        };
}

function get(param) {
  return param[0];
}

var v0 = /* constructor */{
  tag: "A",
  "0": 3
};

exports.v0 = v0;
exports.make = make;
exports.get = get;
/* No side effect */

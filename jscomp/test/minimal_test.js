'use strict';


var fake_y = /* constructor */{
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
};

var fake_z = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": 1,
  "1": fake_y
};

exports.fake_y = fake_y;
exports.fake_z = fake_z;
/* No side effect */

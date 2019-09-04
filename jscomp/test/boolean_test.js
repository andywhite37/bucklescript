'use strict';

var Mt = require("./mt.js");
var Test_bool_equal = require("./test_bool_equal.js");

Mt.from_suites("boolean", /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "bool_equal",
        Test_bool_equal.assertions
      ],
      "1": /* [] */0
    });

/*  Not a pure module */

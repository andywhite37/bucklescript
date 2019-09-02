'use strict';

var Arg = require("../../lib/js/arg.js");

function anno_fun(arg) {
  return /* () */0;
}

var usage_msg = "Usage:\n";

var compile = /* record */[/* contents */false];

var test = /* record */[/* contents */true];

var arg_spec = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "-c",
    /* constructor */{
      tag: 2,
      name: "Set",
      "0": compile
    },
    " Compile"
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "-d",
      /* constructor */{
        tag: 3,
        name: "Clear",
        "0": test
      },
      " Test"
    ],
    "1": /* [] */0
  }
};

Arg.parse(arg_spec, anno_fun, usage_msg);

exports.anno_fun = anno_fun;
exports.usage_msg = usage_msg;
exports.compile = compile;
exports.test = test;
exports.arg_spec = arg_spec;
/*  Not a pure module */

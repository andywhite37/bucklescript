'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Stack = require("../../lib/js/stack.js");

function to_list(v) {
  var acc = /* [] */0;
  while(v[/* c */0] !== /* [] */0) {
    acc = /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": Stack.pop(v),
      "1": acc
    };
  };
  return List.rev(acc);
}

function v(param) {
  var v$1 = /* record */[/* c : [] */0];
  Stack.push(3, v$1);
  Stack.push(4, v$1);
  Stack.push(1, v$1);
  return to_list(v$1);
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "push_test",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 1,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 3,
                      "1": /* [] */0
                    }
                  }
                },
                "1": v(/* () */0)
              };
      })
  ],
  "1": /* [] */0
};

Mt.from_pair_suites("Stack_test", suites);

exports.to_list = to_list;
exports.v = v;
exports.suites = suites;
/*  Not a pure module */

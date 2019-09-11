'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");

function length(param) {
  return 3;
}

Mt.from_pair_suites("Es6_module_test", /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "list_length",
        (function (param) {
            return /* constructor */{
                    tag: "Eq",
                    "0": List.length(/* constructor */{
                          tag: "::",
                          "0": 1,
                          "1": /* constructor */{
                            tag: "::",
                            "0": 2,
                            "1": "[]"
                          }
                        }),
                    "1": 2
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "length",
          (function (param) {
              return /* constructor */{
                      tag: "Eq",
                      "0": 3,
                      "1": 3
                    };
            })
        ],
        "1": "[]"
      }
    });

exports.length = length;
/*  Not a pure module */

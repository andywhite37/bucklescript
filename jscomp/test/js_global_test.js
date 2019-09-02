'use strict';

var Mt = require("./mt.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "setTimeout/clearTimeout sanity check",
    (function (param) {
        var handle = setTimeout((function (param) {
                return /* () */0;
              }), 0);
        clearTimeout(handle);
        return /* constructor */{
                tag: 4,
                name: "Ok",
                "0": true
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "setInerval/clearInterval sanity check",
      (function (param) {
          var handle = setInterval((function (param) {
                  return /* () */0;
                }), 0);
          clearInterval(handle);
          return /* constructor */{
                  tag: 4,
                  name: "Ok",
                  "0": true
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "encodeURI",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": encodeURI("[-=-]"),
                    "1": "%5B-=-%5D"
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "decodeURI",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": decodeURI("%5B-=-%5D"),
                      "1": "[-=-]"
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "encodeURIComponent",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        "0": encodeURIComponent("[-=-]"),
                        "1": "%5B-%3D-%5D"
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "decodeURIComponent",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          "0": decodeURIComponent("%5B-%3D-%5D"),
                          "1": "[-=-]"
                        };
                })
            ],
            "1": /* [] */0
          }
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_global_test", suites);

exports.suites = suites;
/*  Not a pure module */

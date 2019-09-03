'use strict';

var Mt = require("./mt.js");
var Bytes = require("../../lib/js/bytes.js");
var $$Buffer = require("../../lib/js/buffer.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");

var v = "gso";

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "equal",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": /* tuple */[
                  Caml_bytes.get(Bytes.make(3, /* "a" */97), 0),
                  Bytes.make(3, /* "a" */97)[0]
                ],
                "1": /* tuple */[
                  /* "a" */97,
                  /* "a" */97
                ]
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "equal2",
      (function (param) {
          var u = Bytes.make(3, /* "a" */97);
          u[0] = /* "b" */98;
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": /* tuple */[
                    u[0],
                    /* "g" */103
                  ],
                  "1": /* tuple */[
                    /* "b" */98,
                    /* "g" */103
                  ]
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "buffer",
        (function (param) {
            var v = $$Buffer.create(30);
            for(var i = 0; i <= 10; ++i){
              $$Buffer.add_string(v, String(i));
            }
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": $$Buffer.contents(v),
                    "1": "012345678910"
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

Mt.from_pair_suites("Buffer_test", suites);

exports.v = v;
exports.suites = suites;
/*  Not a pure module */

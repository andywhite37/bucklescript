'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Caml_oo_curry = require("../../lib/js/caml_oo_curry.js");
var CamlinternalOO = require("../../lib/js/camlinternalOO.js");

function f(u) {
  return Caml_oo_curry.js2(5740587, 1, u, 32);
}

function f_js(u) {
  return u.say(32);
}

var class_tables = [
  0,
  0,
  0
];

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "caml_obj",
    (function (param) {
        if (!class_tables[0]) {
          var $$class = CamlinternalOO.create_table(["say"]);
          var env = CamlinternalOO.new_variable($$class, "");
          var say = CamlinternalOO.get_method_label($$class, "say");
          CamlinternalOO.set_method($$class, say, (function (self$1, x) {
                  return 1 + x | 0;
                }));
          var env_init = function (env$1) {
            var self = CamlinternalOO.create_object_opt(0, $$class);
            self[env] = env$1;
            return self;
          };
          CamlinternalOO.init_class($$class);
          class_tables[0] = env_init;
        }
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": 33,
                "1": f(Curry._1(class_tables[0], 0))
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "js_obj",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": 34,
                  "1": ({
                        say: (function (x) {
                            return x + 2 | 0;
                          })
                      }).say(32)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "js_obj2",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": 34,
                    "1": ({
                          say: (function (x) {
                              return x + 2 | 0;
                            })
                        }).say(32)
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "empty",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": 0,
                      "1": Object.keys({ }).length
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "assign",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": {
                          a: 1
                        },
                        "1": Object.assign({ }, {
                              a: 1
                            })
                      };
              })
          ],
          "1": /* [] */0
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_obj_test", suites);

exports.f = f;
exports.f_js = f_js;
exports.suites = suites;
/*  Not a pure module */

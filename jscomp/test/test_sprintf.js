'use strict';

var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");

console.error(Curry._2(Printf.sprintf(/* constructor */{
              tag: "Format",
              "0": /* constructor */{
                tag: "Int",
                "0": "Int_d",
                "1": "No_padding",
                "2": "No_precision",
                "3": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": "End_of_format"
                }
              },
              "1": "%d%s"
            }), 32, "ss"));

/*  Not a pure module */

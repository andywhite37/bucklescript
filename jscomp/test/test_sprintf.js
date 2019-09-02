'use strict';

var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");

console.error(Curry._2(Printf.sprintf(/* constructor */{
              tag: 0,
              name: "Format",
              "0": /* constructor */{
                tag: 4,
                name: "Int",
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 2,
                  name: "String",
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%d%s"
            }), 32, "ss"));

/*  Not a pure module */

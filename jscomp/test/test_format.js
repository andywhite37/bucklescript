'use strict';

var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");

Curry._1(Format.fprintf(Format.std_formatter, /* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int",
            "0": "Int_d",
            "1": "No_padding",
            "2": "No_precision",
            "3": "End_of_format"
          },
          "1": "%d"
        }), 3);

/*  Not a pure module */

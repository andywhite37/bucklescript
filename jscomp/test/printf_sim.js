'use strict';

var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");

Curry._1(Printf.printf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int64",
            "0": "Int_d",
            "1": "No_padding",
            "2": "No_precision",
            "3": /* constructor */{
              tag: "Char_literal",
              "0": /* "\n" */10,
              "1": "End_of_format"
            }
          },
          "1": "%Ld\n"
        }), /* int64 */[
      /* hi */0,
      /* lo */32
    ]);

Printf.printf(/* constructor */{
      tag: "Format",
      "0": /* constructor */{
        tag: "String_literal",
        "0": "heloo!\nhelloxx\n",
        "1": "End_of_format"
      },
      "1": "heloo!\nhelloxx\n"
    });

Printf.printf(/* constructor */{
      tag: "Format",
      "0": /* constructor */{
        tag: "String_literal",
        "0": "hello\nhi\n",
        "1": "End_of_format"
      },
      "1": "hello\nhi\n"
    });

Curry._2(Printf.printf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int",
            "0": "Int_d",
            "1": /* constructor */{
              tag: "Arg_padding",
              "0": "Right"
            },
            "2": "No_precision",
            "3": /* constructor */{
              tag: "String_literal",
              "0": "\n\n",
              "1": "End_of_format"
            }
          },
          "1": "%*d\n\n"
        }), 32, 3);

Curry._1(Printf.printf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "String",
            "0": "No_padding",
            "1": "End_of_format"
          },
          "1": "%s"
        }), Curry._2(Printf.sprintf(/* constructor */{
              tag: "Format",
              "0": /* constructor */{
                tag: "Int",
                "0": "Int_d",
                "1": /* constructor */{
                  tag: "Arg_padding",
                  "0": "Right"
                },
                "2": "No_precision",
                "3": /* constructor */{
                  tag: "Char_literal",
                  "0": /* "\n" */10,
                  "1": "End_of_format"
                }
              },
              "1": "%*d\n"
            }), 32, 3));

/*  Not a pure module */

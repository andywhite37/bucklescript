'use strict';

var Curry = require("../../lib/js/curry.js");
var Printf = require("../../lib/js/printf.js");

Curry._1(Printf.printf(/* constructor */{
          tag: 0,
          name: "Format",
          "0": /* constructor */{
            tag: 7,
            name: "Int64",
            "0": /* Int_d */0,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* constructor */{
              tag: 12,
              name: "Char_literal",
              "0": /* "\n" */10,
              "1": /* End_of_format */0
            }
          },
          "1": "%Ld\n"
        }), /* int64 */[
      /* hi */0,
      /* lo */32
    ]);

Printf.printf(/* constructor */{
      tag: 0,
      name: "Format",
      "0": /* constructor */{
        tag: 11,
        name: "String_literal",
        "0": "heloo!\nhelloxx\n",
        "1": /* End_of_format */0
      },
      "1": "heloo!\nhelloxx\n"
    });

Printf.printf(/* constructor */{
      tag: 0,
      name: "Format",
      "0": /* constructor */{
        tag: 11,
        name: "String_literal",
        "0": "hello\nhi\n",
        "1": /* End_of_format */0
      },
      "1": "hello\nhi\n"
    });

Curry._2(Printf.printf(/* constructor */{
          tag: 0,
          name: "Format",
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            "0": /* Int_d */0,
            "1": /* constructor */{
              tag: 1,
              name: "Arg_padding",
              "0": /* Right */1
            },
            "2": /* No_precision */0,
            "3": /* constructor */{
              tag: 11,
              name: "String_literal",
              "0": "\n\n",
              "1": /* End_of_format */0
            }
          },
          "1": "%*d\n\n"
        }), 32, 3);

Curry._1(Printf.printf(/* constructor */{
          tag: 0,
          name: "Format",
          "0": /* constructor */{
            tag: 2,
            name: "String",
            "0": /* No_padding */0,
            "1": /* End_of_format */0
          },
          "1": "%s"
        }), Curry._2(Printf.sprintf(/* constructor */{
              tag: 0,
              name: "Format",
              "0": /* constructor */{
                tag: 4,
                name: "Int",
                "0": /* Int_d */0,
                "1": /* constructor */{
                  tag: 1,
                  name: "Arg_padding",
                  "0": /* Right */1
                },
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              },
              "1": "%*d\n"
            }), 32, 3));

/*  Not a pure module */

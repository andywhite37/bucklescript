'use strict';


function f(param) {
  return /* constructor */{
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
        };
}

exports.f = f;
/* No side effect */

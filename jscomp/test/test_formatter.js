'use strict';


function f(param) {
  return /* constructor */{
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
        };
}

exports.f = f;
/* No side effect */

'use strict';

var Caml_obj_extern = require("../../lib/js/caml_obj_extern.js");

function f(obj) {
  if (typeof obj === "function") {
    return "()";
  } else {
    var size = Caml_obj_extern.size_of_t(obj);
    if (size !== undefined) {
      console.log(size);
      return "()";
    } else {
      return "()";
    }
  }
}

exports.f = f;
/* No side effect */

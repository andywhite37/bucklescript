'use strict';


function f(param) {
  console.error("x");
  console.log("()");
  console.log("hi");
  console.log("()");
  return "()";
}

exports.f = f;
/* No side effect */

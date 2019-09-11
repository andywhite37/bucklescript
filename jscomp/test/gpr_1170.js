'use strict';


function f(resp) {
  resp.statusCode = 200;
  resp.hi = "hi";
  return "()";
}

exports.f = f;
/* No side effect */

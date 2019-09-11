'use strict';


function test(x) {
  x.nodeValue = null;
  return "()";
}

exports.test = test;
/* No side effect */

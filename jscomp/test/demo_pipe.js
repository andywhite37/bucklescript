'use strict';


function register(rl) {
  return rl.on("line", (function (x) {
                  console.log(x);
                  return "()";
                })).on("close", (function (param) {
                console.log("finished");
                return "()";
              }));
}

exports.register = register;
/* No side effect */

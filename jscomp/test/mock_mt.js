'use strict';

var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");

function from_pair_suites(name, suites) {
  console.log(/* tuple */[
        name,
        "testing"
      ]);
  return List.iter((function (param) {
                var name = param[0];
                var match = Curry._1(param[1], "()");
                switch (/* XXX */match.tag) {
                  case "Eq" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "eq?",
                            match[1]
                          ]);
                      return "()";
                  case "Neq" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "neq?",
                            match[1]
                          ]);
                      return "()";
                  case "StrictEq" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "strict_eq?",
                            match[1]
                          ]);
                      return "()";
                  case "StrictNeq" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "strict_neq?",
                            match[1]
                          ]);
                      return "()";
                  case "Ok" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "ok?"
                          ]);
                      return "()";
                  case "Approx" :
                      console.log(/* tuple */[
                            name,
                            match[0],
                            "~",
                            match[1]
                          ]);
                      return "()";
                  case "ApproxThreshold" :
                      console.log(/* tuple */[
                            name,
                            match[1],
                            "~",
                            match[2],
                            " (",
                            match[0],
                            ")"
                          ]);
                      return "()";
                  case "ThrowAny" :
                      return "()";
                  case "Fail" :
                      console.log("failed");
                      return "()";
                  case "FailWith" :
                      console.log("failed: " + match[0]);
                      return "()";
                  
                }
              }), suites);
}

exports.from_pair_suites = from_pair_suites;
/* No side effect */

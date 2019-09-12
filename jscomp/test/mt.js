'use strict';

var List = require("../../lib/js/list.js");
var Path = require("path");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Assert = require("assert");
var Process = require("process");

function assert_fail(msg) {
  Assert.fail("()", "()", msg, "");
  return "()";
}

function is_mocha(param) {
  var match = $$Array.to_list(Process.argv);
  if (match !== "[]") {
    var match$1 = match[1];
    if (match$1 !== "[]") {
      var exec = Path.basename(match$1[0]);
      if (exec === "mocha") {
        return true;
      } else {
        return exec === "_mocha";
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function from_suites(name, suite) {
  var match = $$Array.to_list(Process.argv);
  if (match !== "[]") {
    if (is_mocha("()")) {
      describe(name, (function () {
              return List.iter((function (param) {
                            var partial_arg = param[1];
                            it(param[0], (function () {
                                    return Curry._1(partial_arg, "()");
                                  }));
                            return "()";
                          }), suite);
            }));
      return "()";
    } else {
      return 0;
    }
  } else {
    return "()";
  }
}

function close_enough($staropt$star, a, b) {
  var threshold = $staropt$star !== undefined ? $staropt$star : 0.0000001;
  return Math.abs(a - b) < threshold;
}

function handleCode(spec) {
  switch (/* XXX */spec.tag) {
    case "Eq" :
        Assert.deepEqual(spec[0], spec[1]);
        return "()";
    case "Neq" :
        Assert.notDeepEqual(spec[0], spec[1]);
        return "()";
    case "StrictEq" :
        Assert.strictEqual(spec[0], spec[1]);
        return "()";
    case "StrictNeq" :
        Assert.notStrictEqual(spec[0], spec[1]);
        return "()";
    case "Ok" :
        Assert.ok(spec[0]);
        return "()";
    case "Approx" :
        var b = spec[1];
        var a = spec[0];
        if (close_enough(undefined, a, b)) {
          return 0;
        } else {
          Assert.deepEqual(a, b);
          return "()";
        }
    case "ApproxThreshold" :
        var b$1 = spec[2];
        var a$1 = spec[1];
        if (close_enough(spec[0], a$1, b$1)) {
          return 0;
        } else {
          Assert.deepEqual(a$1, b$1);
          return "()";
        }
    case "ThrowAny" :
        Assert.throws(spec[0]);
        return "()";
    case "Fail" :
        return assert_fail("failed");
    case "FailWith" :
        return assert_fail(spec[0]);
    
  }
}

function from_pair_suites(name, suites) {
  var match = $$Array.to_list(Process.argv);
  if (match !== "[]") {
    if (is_mocha("()")) {
      describe(name, (function () {
              return List.iter((function (param) {
                            var code = param[1];
                            it(param[0], (function () {
                                    return handleCode(Curry._1(code, "()"));
                                  }));
                            return "()";
                          }), suites);
            }));
      return "()";
    } else {
      var name$1 = name;
      var suites$1 = suites;
      console.log(/* tuple */[
            name$1,
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
                  }), suites$1);
    }
  } else {
    return "()";
  }
}

var val_unit = Promise.resolve("()");

function from_promise_suites(name, suites) {
  var match = $$Array.to_list(Process.argv);
  if (match !== "[]") {
    if (is_mocha("()")) {
      describe(name, (function () {
              return List.iter((function (param) {
                            var code = param[1];
                            it(param[0], (function () {
                                    return code.then((function (x) {
                                                  handleCode(x);
                                                  return val_unit;
                                                }));
                                  }));
                            return "()";
                          }), suites);
            }));
      return "()";
    } else {
      console.log("promise suites");
      return "()";
    }
  } else {
    return "()";
  }
}

function eq_suites(test_id, suites, loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": x,
                  "1": y
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

function bool_suites(test_id, suites, loc, x) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "Ok",
                  "0": x
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

function throw_suites(test_id, suites, loc, x) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "ThrowAny",
                  "0": x
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

exports.from_suites = from_suites;
exports.from_pair_suites = from_pair_suites;
exports.from_promise_suites = from_promise_suites;
exports.eq_suites = eq_suites;
exports.bool_suites = bool_suites;
exports.throw_suites = throw_suites;
/* val_unit Not a pure module */

'use strict';

var Caml_exceptions = require("../../lib/js/caml_exceptions.js");

function insert(queue, prio, elt) {
  if (queue !== "Empty") {
    var right = queue[3];
    var left = queue[2];
    var e = queue[1];
    var p = queue[0];
    if (prio <= p) {
      return /* constructor */{
              tag: "Node",
              "0": prio,
              "1": elt,
              "2": insert(right, p, e),
              "3": left
            };
    } else {
      return /* constructor */{
              tag: "Node",
              "0": p,
              "1": e,
              "2": insert(right, prio, elt),
              "3": left
            };
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": prio,
            "1": elt,
            "2": "Empty",
            "3": "Empty"
          };
  }
}

var Queue_is_empty = Caml_exceptions.create("Pq_test.PrioQueue.Queue_is_empty");

function remove_top(param) {
  if (param !== "Empty") {
    var left = param[2];
    if (param[3] !== "Empty") {
      if (left !== "Empty") {
        var right = param[3];
        var rprio = right[0];
        var lprio = left[0];
        if (lprio <= rprio) {
          return /* constructor */{
                  tag: "Node",
                  "0": lprio,
                  "1": left[1],
                  "2": remove_top(left),
                  "3": right
                };
        } else {
          return /* constructor */{
                  tag: "Node",
                  "0": rprio,
                  "1": right[1],
                  "2": left,
                  "3": remove_top(right)
                };
        }
      } else {
        return param[3];
      }
    } else {
      return left;
    }
  } else {
    throw Queue_is_empty;
  }
}

function extract(queue) {
  if (queue !== "Empty") {
    return /* tuple */[
            queue[0],
            queue[1],
            remove_top(queue)
          ];
  } else {
    throw Queue_is_empty;
  }
}

var PrioQueue = {
  empty: "Empty",
  insert: insert,
  Queue_is_empty: Queue_is_empty,
  remove_top: remove_top,
  extract: extract
};

exports.PrioQueue = PrioQueue;
/* No side effect */

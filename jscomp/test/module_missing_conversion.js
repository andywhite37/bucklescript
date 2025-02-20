'use strict';

var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var $$String = require("../../lib/js/string.js");
var MoreLabels = require("../../lib/js/moreLabels.js");

function f(x) {
  return x;
}

var XX = {
  init: $$Array.init,
  make_matrix: $$Array.make_matrix,
  create_matrix: $$Array.create_matrix,
  append: $$Array.append,
  concat: $$Array.concat,
  sub: $$Array.sub,
  copy: $$Array.copy,
  fill: $$Array.fill,
  blit: $$Array.blit,
  to_list: $$Array.to_list,
  of_list: $$Array.of_list,
  iter: $$Array.iter,
  map: $$Array.map,
  iteri: $$Array.iteri,
  mapi: $$Array.mapi,
  fold_left: $$Array.fold_left,
  fold_right: $$Array.fold_right,
  sort: $$Array.sort,
  stable_sort: $$Array.stable_sort,
  fast_sort: $$Array.fast_sort,
  f: f
};

var u = /* array */[$$String];

var ghh = Curry._2(MoreLabels.Hashtbl.create, undefined, 30);

var hh = 1;

exports.XX = XX;
exports.u = u;
exports.hh = hh;
exports.ghh = ghh;
/* ghh Not a pure module */

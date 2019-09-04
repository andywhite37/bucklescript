'use strict';


function size_of_t (o){
return Array.isArray(o) ? o.length : Object.keys(o).length - 2
};

function length (o){
if (Array.isArray(o)) { return o.length }
else {
  const keys = Object.keys(o);
  return keys["tag"] ? keys.length - 2 : keys.length }
};

exports.size_of_t = size_of_t;
exports.length = length;
/* No side effect */

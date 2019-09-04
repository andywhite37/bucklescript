'use strict';


function size_of_t (o){
return Array.isArray(o) ? o.length : Object.keys(o).length - 3
};

function length (o){
if (Array.isArray(o)) { return o.length }
else { return (Object.keys(o).length | 3) - 3 }
};

exports.size_of_t = size_of_t;
exports.length = length;
/* No side effect */

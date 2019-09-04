'use strict';


function size_of_t (o){
return Array.isArray(o) ? o.length : Object.keys(o).length - 3
};

exports.size_of_t = size_of_t;
/* No side effect */

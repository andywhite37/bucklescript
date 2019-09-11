'use strict';


function compare(x, y) {
  switch (x) {
    case "A" :
        return y === "A";
    case "B" :
        return y === "B";
    case "C" :
        return y === "C";
    
  }
}

function compare2(x, y) {
  switch (x) {
    case "A" :
        return y === 0;
    case "B" :
        return y === 1;
    case "C" :
        return y >= 2;
    
  }
}

function compare3(x, y) {
  return x === y;
}

exports.compare = compare;
exports.compare2 = compare2;
exports.compare3 = compare3;
/* No side effect */

'use strict';

var Pervasives = require("../../lib/js/pervasives.js");

function str(e) {
  switch (/* XXX */e.tag) {
    case "Numeral" :
        return Pervasives.string_of_float(e[0]);
    case "Plus" :
        return str(e[0]) + ("+" + str(e[1]));
    case "Minus" :
        return str(e[0]) + ("-" + str(e[1]));
    case "Times" :
        return str(e[0]) + ("*" + str(e[1]));
    case "Divide" :
        return str(e[0]) + ("/" + str(e[1]));
    case "Negate" :
        return "-" + str(e[0]);
    case "Variable" :
        return e[0];
    
  }
}

exports.str = str;
/* No side effect */

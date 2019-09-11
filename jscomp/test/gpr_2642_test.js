'use strict';


function isfree(id, _param) {
  while(true) {
    var param = _param;
    switch (/* XXX */param.tag) {
      case "Pident" :
          return id === param[0];
      case "Pdot" :
          _param = param[0];
          continue ;
      case "Papply" :
          if (isfree(id, param[0])) {
            return true;
          } else {
            _param = param[1];
            continue ;
          }
      
    }
  };
}

exports.isfree = isfree;
/* No side effect */

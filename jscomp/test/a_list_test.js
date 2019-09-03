'use strict';

var Mt = require("./mt.js");
var Ext_list_test = require("./ext_list_test.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "drop",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": Ext_list_test.drop(3, /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 0,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 1,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 2,
                          "1": /* [] */0
                        }
                      }
                    }),
                "1": /* [] */0
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "drop1",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": Ext_list_test.drop(2, /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 0,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 1,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 2,
                            "1": /* [] */0
                          }
                        }
                      }),
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 2,
                    "1": /* [] */0
                  }
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "flat_map",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 0,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 0,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 1,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 1,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 0,
                              "1": /* [] */0
                            }
                          }
                        }
                      }
                    },
                    "1": Ext_list_test.flat_map((function (x) {
                            if (x % 2 === 0) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": 0,
                                      "1": /* [] */0
                                    };
                            } else {
                              return /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": 1,
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": 1,
                                        "1": /* [] */0
                                      }
                                    };
                            }
                          }), /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 0,
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 0,
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 3,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 0,
                                "1": /* [] */0
                              }
                            }
                          }
                        })
                  };
          })
      ],
      "1": /* [] */0
    }
  }
};

Mt.from_pair_suites("A_list_test", suites);

exports.suites = suites;
/*  Not a pure module */

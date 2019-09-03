'use strict';

var Mt = require("./mt.js");
var Js_math = require("../../lib/js/js_math.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "_E",
    (function (param) {
        return /* constructor */{
                tag: 6,
                name: "ApproxThreshold",
                length: 3,
                "0": 0.001,
                "1": 2.718,
                "2": Math.E
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "_LN2",
      (function (param) {
          return /* constructor */{
                  tag: 6,
                  name: "ApproxThreshold",
                  length: 3,
                  "0": 0.001,
                  "1": 0.693,
                  "2": Math.LN2
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "_LN10",
        (function (param) {
            return /* constructor */{
                    tag: 6,
                    name: "ApproxThreshold",
                    length: 3,
                    "0": 0.001,
                    "1": 2.303,
                    "2": Math.LN10
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "_LOG2E",
          (function (param) {
              return /* constructor */{
                      tag: 6,
                      name: "ApproxThreshold",
                      length: 3,
                      "0": 0.001,
                      "1": 1.443,
                      "2": Math.LOG2E
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "_LOG10E",
            (function (param) {
                return /* constructor */{
                        tag: 6,
                        name: "ApproxThreshold",
                        length: 3,
                        "0": 0.001,
                        "1": 0.434,
                        "2": Math.LOG10E
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "_PI",
              (function (param) {
                  return /* constructor */{
                          tag: 6,
                          name: "ApproxThreshold",
                          length: 3,
                          "0": 0.00001,
                          "1": 3.14159,
                          "2": Math.PI
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "_SQRT1_2",
                (function (param) {
                    return /* constructor */{
                            tag: 6,
                            name: "ApproxThreshold",
                            length: 3,
                            "0": 0.001,
                            "1": 0.707,
                            "2": Math.SQRT1_2
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "_SQRT2",
                  (function (param) {
                      return /* constructor */{
                              tag: 6,
                              name: "ApproxThreshold",
                              length: 3,
                              "0": 0.001,
                              "1": 1.414,
                              "2": Math.SQRT2
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "abs_int",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": 4,
                                "1": Math.abs(-4)
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "abs_float",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": 1.2,
                                  "1": Math.abs(-1.2)
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "acos",
                        (function (param) {
                            return /* constructor */{
                                    tag: 6,
                                    name: "ApproxThreshold",
                                    length: 3,
                                    "0": 0.001,
                                    "1": 1.159,
                                    "2": Math.acos(0.4)
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": /* tuple */[
                          "acosh",
                          (function (param) {
                              return /* constructor */{
                                      tag: 6,
                                      name: "ApproxThreshold",
                                      length: 3,
                                      "0": 0.001,
                                      "1": 0.622,
                                      "2": Math.acosh(1.2)
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": /* tuple */[
                            "asin",
                            (function (param) {
                                return /* constructor */{
                                        tag: 6,
                                        name: "ApproxThreshold",
                                        length: 3,
                                        "0": 0.001,
                                        "1": 0.411,
                                        "2": Math.asin(0.4)
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": /* tuple */[
                              "asinh",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 6,
                                          name: "ApproxThreshold",
                                          length: 3,
                                          "0": 0.001,
                                          "1": 0.390,
                                          "2": Math.asinh(0.4)
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": /* tuple */[
                                "atan",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 6,
                                            name: "ApproxThreshold",
                                            length: 3,
                                            "0": 0.001,
                                            "1": 0.380,
                                            "2": Math.atan(0.4)
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": /* tuple */[
                                  "atanh",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 6,
                                              name: "ApproxThreshold",
                                              length: 3,
                                              "0": 0.001,
                                              "1": 0.423,
                                              "2": Math.atanh(0.4)
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": /* tuple */[
                                    "atan2",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 6,
                                                name: "ApproxThreshold",
                                                length: 3,
                                                "0": 0.001,
                                                "1": 0.588,
                                                "2": Math.atan2(0.4, 0.6)
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": /* tuple */[
                                      "cbrt",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  length: 2,
                                                  "0": 2,
                                                  "1": Math.cbrt(8)
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": /* tuple */[
                                        "unsafe_ceil_int",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    length: 2,
                                                    "0": 4,
                                                    "1": Math.ceil(3.2)
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": /* tuple */[
                                          "ceil_int",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      length: 2,
                                                      "0": 4,
                                                      "1": Js_math.ceil_int(3.2)
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          length: 2,
                                          "0": /* tuple */[
                                            "ceil_float",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: 0,
                                                        name: "Eq",
                                                        length: 2,
                                                        "0": 4,
                                                        "1": Math.ceil(3.2)
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            length: 2,
                                            "0": /* tuple */[
                                              "cos",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: 6,
                                                          name: "ApproxThreshold",
                                                          length: 3,
                                                          "0": 0.001,
                                                          "1": 0.921,
                                                          "2": Math.cos(0.4)
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": /* tuple */[
                                                "cosh",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: 6,
                                                            name: "ApproxThreshold",
                                                            length: 3,
                                                            "0": 0.001,
                                                            "1": 1.081,
                                                            "2": Math.cosh(0.4)
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": /* tuple */[
                                                  "exp",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 6,
                                                              name: "ApproxThreshold",
                                                              length: 3,
                                                              "0": 0.001,
                                                              "1": 1.491,
                                                              "2": Math.exp(0.4)
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": /* tuple */[
                                                    "expm1",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 6,
                                                                name: "ApproxThreshold",
                                                                length: 3,
                                                                "0": 0.001,
                                                                "1": 0.491,
                                                                "2": Math.expm1(0.4)
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": /* tuple */[
                                                      "unsafe_floor_int",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  length: 2,
                                                                  "0": 3,
                                                                  "1": Math.floor(3.2)
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": /* tuple */[
                                                        "floor_int",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 0,
                                                                    name: "Eq",
                                                                    length: 2,
                                                                    "0": 3,
                                                                    "1": Js_math.floor_int(3.2)
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": /* tuple */[
                                                          "floor_float",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 0,
                                                                      name: "Eq",
                                                                      length: 2,
                                                                      "0": 3,
                                                                      "1": Math.floor(3.2)
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": /* tuple */[
                                                            "fround",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 5,
                                                                        name: "Approx",
                                                                        length: 2,
                                                                        "0": 3.2,
                                                                        "1": Math.fround(3.2)
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": /* tuple */[
                                                              "hypot",
                                                              (function (param) {
                                                                  return /* constructor */{
                                                                          tag: 6,
                                                                          name: "ApproxThreshold",
                                                                          length: 3,
                                                                          "0": 0.001,
                                                                          "1": 0.721,
                                                                          "2": Math.hypot(0.4, 0.6)
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": /* tuple */[
                                                                "hypotMany",
                                                                (function (param) {
                                                                    return /* constructor */{
                                                                            tag: 6,
                                                                            name: "ApproxThreshold",
                                                                            length: 3,
                                                                            "0": 0.001,
                                                                            "1": 1.077,
                                                                            "2": Math.hypot(0.4, 0.6, 0.8)
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": /* tuple */[
                                                                  "imul",
                                                                  (function (param) {
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              length: 2,
                                                                              "0": 8,
                                                                              "1": Math.imul(4, 2)
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": /* tuple */[
                                                                    "log",
                                                                    (function (param) {
                                                                        return /* constructor */{
                                                                                tag: 6,
                                                                                name: "ApproxThreshold",
                                                                                length: 3,
                                                                                "0": 0.001,
                                                                                "1": -0.916,
                                                                                "2": Math.log(0.4)
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": /* tuple */[
                                                                      "log1p",
                                                                      (function (param) {
                                                                          return /* constructor */{
                                                                                  tag: 6,
                                                                                  name: "ApproxThreshold",
                                                                                  length: 3,
                                                                                  "0": 0.001,
                                                                                  "1": 0.336,
                                                                                  "2": Math.log1p(0.4)
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": /* tuple */[
                                                                        "log10",
                                                                        (function (param) {
                                                                            return /* constructor */{
                                                                                    tag: 6,
                                                                                    name: "ApproxThreshold",
                                                                                    length: 3,
                                                                                    "0": 0.001,
                                                                                    "1": -0.397,
                                                                                    "2": Math.log10(0.4)
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": /* tuple */[
                                                                          "log2",
                                                                          (function (param) {
                                                                              return /* constructor */{
                                                                                      tag: 6,
                                                                                      name: "ApproxThreshold",
                                                                                      length: 3,
                                                                                      "0": 0.001,
                                                                                      "1": -1.321,
                                                                                      "2": Math.log2(0.4)
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": /* tuple */[
                                                                            "max_int",
                                                                            (function (param) {
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        length: 2,
                                                                                        "0": 4,
                                                                                        "1": Math.max(2, 4)
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": /* tuple */[
                                                                              "maxMany_int",
                                                                              (function (param) {
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          length: 2,
                                                                                          "0": 4,
                                                                                          "1": Math.max(2, 4, 3)
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              length: 2,
                                                                              "0": /* tuple */[
                                                                                "max_float",
                                                                                (function (param) {
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            length: 2,
                                                                                            "0": 4.2,
                                                                                            "1": Math.max(2.7, 4.2)
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                length: 2,
                                                                                "0": /* tuple */[
                                                                                  "maxMany_float",
                                                                                  (function (param) {
                                                                                      return /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "Eq",
                                                                                              length: 2,
                                                                                              "0": 4.2,
                                                                                              "1": Math.max(2.7, 4.2, 3.9)
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": /* tuple */[
                                                                                    "min_int",
                                                                                    (function (param) {
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                length: 2,
                                                                                                "0": 2,
                                                                                                "1": Math.min(2, 4)
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": /* tuple */[
                                                                                      "minMany_int",
                                                                                      (function (param) {
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  length: 2,
                                                                                                  "0": 2,
                                                                                                  "1": Math.min(2, 4, 3)
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      length: 2,
                                                                                      "0": /* tuple */[
                                                                                        "min_float",
                                                                                        (function (param) {
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    length: 2,
                                                                                                    "0": 2.7,
                                                                                                    "1": Math.min(2.7, 4.2)
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      "1": /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        length: 2,
                                                                                        "0": /* tuple */[
                                                                                          "minMany_float",
                                                                                          (function (param) {
                                                                                              return /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "Eq",
                                                                                                      length: 2,
                                                                                                      "0": 2.7,
                                                                                                      "1": Math.min(2.7, 4.2, 3.9)
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        "1": /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          length: 2,
                                                                                          "0": /* tuple */[
                                                                                            "random",
                                                                                            (function (param) {
                                                                                                var a = Math.random();
                                                                                                return /* constructor */{
                                                                                                        tag: 4,
                                                                                                        name: "Ok",
                                                                                                        length: 1,
                                                                                                        "0": a >= 0 && a < 1
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          "1": /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "::",
                                                                                            length: 2,
                                                                                            "0": /* tuple */[
                                                                                              "random_int",
                                                                                              (function (param) {
                                                                                                  var a = Js_math.random_int(1, 3);
                                                                                                  return /* constructor */{
                                                                                                          tag: 4,
                                                                                                          name: "Ok",
                                                                                                          length: 1,
                                                                                                          "0": a >= 1 && a < 3
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            "1": /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "::",
                                                                                              length: 2,
                                                                                              "0": /* tuple */[
                                                                                                "unsafe_round",
                                                                                                (function (param) {
                                                                                                    return /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "Eq",
                                                                                                            length: 2,
                                                                                                            "0": 3,
                                                                                                            "1": Math.round(3.2)
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              "1": /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "::",
                                                                                                length: 2,
                                                                                                "0": /* tuple */[
                                                                                                  "round",
                                                                                                  (function (param) {
                                                                                                      return /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "Eq",
                                                                                                              length: 2,
                                                                                                              "0": 3,
                                                                                                              "1": Math.round(3.2)
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                "1": /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "::",
                                                                                                  length: 2,
                                                                                                  "0": /* tuple */[
                                                                                                    "sign_int",
                                                                                                    (function (param) {
                                                                                                        return /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "Eq",
                                                                                                                length: 2,
                                                                                                                "0": -1,
                                                                                                                "1": Math.sign(-4)
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  "1": /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "::",
                                                                                                    length: 2,
                                                                                                    "0": /* tuple */[
                                                                                                      "sign_float",
                                                                                                      (function (param) {
                                                                                                          return /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "Eq",
                                                                                                                  length: 2,
                                                                                                                  "0": -1,
                                                                                                                  "1": Math.sign(-4.2)
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    "1": /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "::",
                                                                                                      length: 2,
                                                                                                      "0": /* tuple */[
                                                                                                        "sign_float -0",
                                                                                                        (function (param) {
                                                                                                            return /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "Eq",
                                                                                                                    length: 2,
                                                                                                                    "0": -0,
                                                                                                                    "1": Math.sign(-0)
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      "1": /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "::",
                                                                                                        length: 2,
                                                                                                        "0": /* tuple */[
                                                                                                          "sin",
                                                                                                          (function (param) {
                                                                                                              return /* constructor */{
                                                                                                                      tag: 6,
                                                                                                                      name: "ApproxThreshold",
                                                                                                                      length: 3,
                                                                                                                      "0": 0.001,
                                                                                                                      "1": 0.389,
                                                                                                                      "2": Math.sin(0.4)
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
                                                                                                        "1": /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          length: 2,
                                                                                                          "0": /* tuple */[
                                                                                                            "sinh",
                                                                                                            (function (param) {
                                                                                                                return /* constructor */{
                                                                                                                        tag: 6,
                                                                                                                        name: "ApproxThreshold",
                                                                                                                        length: 3,
                                                                                                                        "0": 0.001,
                                                                                                                        "1": 0.410,
                                                                                                                        "2": Math.sinh(0.4)
                                                                                                                      };
                                                                                                              })
                                                                                                          ],
                                                                                                          "1": /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            length: 2,
                                                                                                            "0": /* tuple */[
                                                                                                              "sqrt",
                                                                                                              (function (param) {
                                                                                                                  return /* constructor */{
                                                                                                                          tag: 6,
                                                                                                                          name: "ApproxThreshold",
                                                                                                                          length: 3,
                                                                                                                          "0": 0.001,
                                                                                                                          "1": 0.632,
                                                                                                                          "2": Math.sqrt(0.4)
                                                                                                                        };
                                                                                                                })
                                                                                                            ],
                                                                                                            "1": /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "::",
                                                                                                              length: 2,
                                                                                                              "0": /* tuple */[
                                                                                                                "tan",
                                                                                                                (function (param) {
                                                                                                                    return /* constructor */{
                                                                                                                            tag: 6,
                                                                                                                            name: "ApproxThreshold",
                                                                                                                            length: 3,
                                                                                                                            "0": 0.001,
                                                                                                                            "1": 0.422,
                                                                                                                            "2": Math.tan(0.4)
                                                                                                                          };
                                                                                                                  })
                                                                                                              ],
                                                                                                              "1": /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "::",
                                                                                                                length: 2,
                                                                                                                "0": /* tuple */[
                                                                                                                  "tanh",
                                                                                                                  (function (param) {
                                                                                                                      return /* constructor */{
                                                                                                                              tag: 6,
                                                                                                                              name: "ApproxThreshold",
                                                                                                                              length: 3,
                                                                                                                              "0": 0.001,
                                                                                                                              "1": 0.379,
                                                                                                                              "2": Math.tanh(0.4)
                                                                                                                            };
                                                                                                                    })
                                                                                                                ],
                                                                                                                "1": /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  length: 2,
                                                                                                                  "0": /* tuple */[
                                                                                                                    "unsafe_trunc",
                                                                                                                    (function (param) {
                                                                                                                        return /* constructor */{
                                                                                                                                tag: 0,
                                                                                                                                name: "Eq",
                                                                                                                                length: 2,
                                                                                                                                "0": 4,
                                                                                                                                "1": Math.trunc(4.2156)
                                                                                                                              };
                                                                                                                      })
                                                                                                                  ],
                                                                                                                  "1": /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "::",
                                                                                                                    length: 2,
                                                                                                                    "0": /* tuple */[
                                                                                                                      "trunc",
                                                                                                                      (function (param) {
                                                                                                                          return /* constructor */{
                                                                                                                                  tag: 0,
                                                                                                                                  name: "Eq",
                                                                                                                                  length: 2,
                                                                                                                                  "0": 4,
                                                                                                                                  "1": Math.trunc(4.2156)
                                                                                                                                };
                                                                                                                        })
                                                                                                                    ],
                                                                                                                    "1": /* [] */0
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_math_test", suites);

exports.suites = suites;
/*  Not a pure module */

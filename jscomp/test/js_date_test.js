'use strict';

var Mt = require("./mt.js");
var Caml_obj = require("../../lib/js/caml_obj.js");

function date(param) {
  return new Date("1976-03-08T12:34:56.789+01:23");
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "valueOf",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": 195131516789,
                "1": new Date("1976-03-08T12:34:56.789+01:23").valueOf()
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "make",
      (function (param) {
          return /* constructor */{
                  tag: 4,
                  name: "Ok",
                  length: 1,
                  "0": new Date().getTime() > 1487223505382
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "parseAsFloat",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": Date.parse("1976-03-08T12:34:56.789+01:23"),
                    "1": 195131516789
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "parseAsFloat_invalid",
          (function (param) {
              return /* constructor */{
                      tag: 4,
                      name: "Ok",
                      length: 1,
                      "0": isNaN(Date.parse("gibberish"))
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "fromFloat",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": "1976-03-08T11:11:56.789Z",
                        "1": new Date(195131516789).toISOString()
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "fromString_valid",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          length: 2,
                          "0": 195131516789,
                          "1": new Date("1976-03-08T12:34:56.789+01:23").getTime()
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "fromString_invalid",
                (function (param) {
                    return /* constructor */{
                            tag: 4,
                            name: "Ok",
                            length: 1,
                            "0": isNaN(new Date("gibberish").getTime())
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "makeWithYM",
                  (function (param) {
                      var d = new Date(1984, 4);
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              length: 2,
                              "0": /* tuple */[
                                1984,
                                4
                              ],
                              "1": /* tuple */[
                                d.getFullYear(),
                                d.getMonth()
                              ]
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "makeWithYMD",
                    (function (param) {
                        var d = new Date(1984, 4, 6);
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": /* tuple */[
                                  1984,
                                  4,
                                  6
                                ],
                                "1": /* tuple */[
                                  d.getFullYear(),
                                  d.getMonth(),
                                  d.getDate()
                                ]
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "makeWithYMDH",
                      (function (param) {
                          var d = new Date(1984, 4, 6, 3);
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": /* tuple */[
                                    1984,
                                    4,
                                    6,
                                    3
                                  ],
                                  "1": /* tuple */[
                                    d.getFullYear(),
                                    d.getMonth(),
                                    d.getDate(),
                                    d.getHours()
                                  ]
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "makeWithYMDHM",
                        (function (param) {
                            var d = new Date(1984, 4, 6, 3, 59);
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    length: 2,
                                    "0": /* tuple */[
                                      1984,
                                      4,
                                      6,
                                      3,
                                      59
                                    ],
                                    "1": /* tuple */[
                                      d.getFullYear(),
                                      d.getMonth(),
                                      d.getDate(),
                                      d.getHours(),
                                      d.getMinutes()
                                    ]
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": /* tuple */[
                          "makeWithYMDHMS",
                          (function (param) {
                              var d = new Date(1984, 4, 6, 3, 59, 27);
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      length: 2,
                                      "0": /* tuple */[
                                        1984,
                                        4,
                                        6,
                                        3,
                                        59,
                                        27
                                      ],
                                      "1": /* tuple */[
                                        d.getFullYear(),
                                        d.getMonth(),
                                        d.getDate(),
                                        d.getHours(),
                                        d.getMinutes(),
                                        d.getSeconds()
                                      ]
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": /* tuple */[
                            "utcWithYM",
                            (function (param) {
                                var d = Date.UTC(1984, 4);
                                var d$1 = new Date(d);
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        length: 2,
                                        "0": /* tuple */[
                                          1984,
                                          4
                                        ],
                                        "1": /* tuple */[
                                          d$1.getUTCFullYear(),
                                          d$1.getUTCMonth()
                                        ]
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": /* tuple */[
                              "utcWithYMD",
                              (function (param) {
                                  var d = Date.UTC(1984, 4, 6);
                                  var d$1 = new Date(d);
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          length: 2,
                                          "0": /* tuple */[
                                            1984,
                                            4,
                                            6
                                          ],
                                          "1": /* tuple */[
                                            d$1.getUTCFullYear(),
                                            d$1.getUTCMonth(),
                                            d$1.getUTCDate()
                                          ]
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": /* tuple */[
                                "utcWithYMDH",
                                (function (param) {
                                    var d = Date.UTC(1984, 4, 6, 3);
                                    var d$1 = new Date(d);
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            length: 2,
                                            "0": /* tuple */[
                                              1984,
                                              4,
                                              6,
                                              3
                                            ],
                                            "1": /* tuple */[
                                              d$1.getUTCFullYear(),
                                              d$1.getUTCMonth(),
                                              d$1.getUTCDate(),
                                              d$1.getUTCHours()
                                            ]
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": /* tuple */[
                                  "utcWithYMDHM",
                                  (function (param) {
                                      var d = Date.UTC(1984, 4, 6, 3, 59);
                                      var d$1 = new Date(d);
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              length: 2,
                                              "0": /* tuple */[
                                                1984,
                                                4,
                                                6,
                                                3,
                                                59
                                              ],
                                              "1": /* tuple */[
                                                d$1.getUTCFullYear(),
                                                d$1.getUTCMonth(),
                                                d$1.getUTCDate(),
                                                d$1.getUTCHours(),
                                                d$1.getUTCMinutes()
                                              ]
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": /* tuple */[
                                    "utcWithYMDHMS",
                                    (function (param) {
                                        var d = Date.UTC(1984, 4, 6, 3, 59, 27);
                                        var d$1 = new Date(d);
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                length: 2,
                                                "0": /* tuple */[
                                                  1984,
                                                  4,
                                                  6,
                                                  3,
                                                  59,
                                                  27
                                                ],
                                                "1": /* tuple */[
                                                  d$1.getUTCFullYear(),
                                                  d$1.getUTCMonth(),
                                                  d$1.getUTCDate(),
                                                  d$1.getUTCHours(),
                                                  d$1.getUTCMinutes(),
                                                  d$1.getUTCSeconds()
                                                ]
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": /* tuple */[
                                      "getFullYear",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  length: 2,
                                                  "0": 1976,
                                                  "1": new Date("1976-03-08T12:34:56.789+01:23").getFullYear()
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": /* tuple */[
                                        "getMilliseconds",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    length: 2,
                                                    "0": 789,
                                                    "1": new Date("1976-03-08T12:34:56.789+01:23").getMilliseconds()
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": /* tuple */[
                                          "getSeconds",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      length: 2,
                                                      "0": 56,
                                                      "1": new Date("1976-03-08T12:34:56.789+01:23").getSeconds()
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          length: 2,
                                          "0": /* tuple */[
                                            "getTime",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: 0,
                                                        name: "Eq",
                                                        length: 2,
                                                        "0": 195131516789,
                                                        "1": new Date("1976-03-08T12:34:56.789+01:23").getTime()
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            length: 2,
                                            "0": /* tuple */[
                                              "getUTCDate",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: 0,
                                                          name: "Eq",
                                                          length: 2,
                                                          "0": 8,
                                                          "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCDate()
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": /* tuple */[
                                                "getUTCDay",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: 0,
                                                            name: "Eq",
                                                            length: 2,
                                                            "0": 1,
                                                            "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCDay()
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": /* tuple */[
                                                  "getUTCFUllYear",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 0,
                                                              name: "Eq",
                                                              length: 2,
                                                              "0": 1976,
                                                              "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCFullYear()
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": /* tuple */[
                                                    "getUTCHours",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 0,
                                                                name: "Eq",
                                                                length: 2,
                                                                "0": 11,
                                                                "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCHours()
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": /* tuple */[
                                                      "getUTCMilliseconds",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  length: 2,
                                                                  "0": 789,
                                                                  "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCMilliseconds()
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": /* tuple */[
                                                        "getUTCMinutes",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 0,
                                                                    name: "Eq",
                                                                    length: 2,
                                                                    "0": 11,
                                                                    "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCMinutes()
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": /* tuple */[
                                                          "getUTCMonth",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 0,
                                                                      name: "Eq",
                                                                      length: 2,
                                                                      "0": 2,
                                                                      "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCMonth()
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": /* tuple */[
                                                            "getUTCSeconds",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 0,
                                                                        name: "Eq",
                                                                        length: 2,
                                                                        "0": 56,
                                                                        "1": new Date("1976-03-08T12:34:56.789+01:23").getUTCSeconds()
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": /* tuple */[
                                                              "getYear",
                                                              (function (param) {
                                                                  return /* constructor */{
                                                                          tag: 0,
                                                                          name: "Eq",
                                                                          length: 2,
                                                                          "0": 1976,
                                                                          "1": new Date("1976-03-08T12:34:56.789+01:23").getFullYear()
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": /* tuple */[
                                                                "setDate",
                                                                (function (param) {
                                                                    var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                    d.setDate(12);
                                                                    return /* constructor */{
                                                                            tag: 0,
                                                                            name: "Eq",
                                                                            length: 2,
                                                                            "0": 12,
                                                                            "1": d.getDate()
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": /* tuple */[
                                                                  "setFullYear",
                                                                  (function (param) {
                                                                      var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                      d.setFullYear(1986);
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              length: 2,
                                                                              "0": 1986,
                                                                              "1": d.getFullYear()
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": /* tuple */[
                                                                    "setFullYearM",
                                                                    (function (param) {
                                                                        var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                        d.setFullYear(1986, 7);
                                                                        return /* constructor */{
                                                                                tag: 0,
                                                                                name: "Eq",
                                                                                length: 2,
                                                                                "0": /* tuple */[
                                                                                  1986,
                                                                                  7
                                                                                ],
                                                                                "1": /* tuple */[
                                                                                  d.getFullYear(),
                                                                                  d.getMonth()
                                                                                ]
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": /* tuple */[
                                                                      "setFullYearMD",
                                                                      (function (param) {
                                                                          var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                          d.setFullYear(1986, 7, 23);
                                                                          return /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "Eq",
                                                                                  length: 2,
                                                                                  "0": /* tuple */[
                                                                                    1986,
                                                                                    7,
                                                                                    23
                                                                                  ],
                                                                                  "1": /* tuple */[
                                                                                    d.getFullYear(),
                                                                                    d.getMonth(),
                                                                                    d.getDate()
                                                                                  ]
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": /* tuple */[
                                                                        "setHours",
                                                                        (function (param) {
                                                                            var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                            d.setHours(22);
                                                                            return /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "Eq",
                                                                                    length: 2,
                                                                                    "0": 22,
                                                                                    "1": d.getHours()
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": /* tuple */[
                                                                          "setHoursM",
                                                                          (function (param) {
                                                                              var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                              d.setHours(22, 48);
                                                                              return /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "Eq",
                                                                                      length: 2,
                                                                                      "0": /* tuple */[
                                                                                        22,
                                                                                        48
                                                                                      ],
                                                                                      "1": /* tuple */[
                                                                                        d.getHours(),
                                                                                        d.getMinutes()
                                                                                      ]
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": /* tuple */[
                                                                            "setHoursMS",
                                                                            (function (param) {
                                                                                var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                d.setHours(22, 48, 54);
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        length: 2,
                                                                                        "0": /* tuple */[
                                                                                          22,
                                                                                          48,
                                                                                          54
                                                                                        ],
                                                                                        "1": /* tuple */[
                                                                                          d.getHours(),
                                                                                          d.getMinutes(),
                                                                                          d.getSeconds()
                                                                                        ]
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": /* tuple */[
                                                                              "setMilliseconds",
                                                                              (function (param) {
                                                                                  var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                  d.setMilliseconds(543);
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          length: 2,
                                                                                          "0": 543,
                                                                                          "1": d.getMilliseconds()
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              length: 2,
                                                                              "0": /* tuple */[
                                                                                "setMinutes",
                                                                                (function (param) {
                                                                                    var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                    d.setMinutes(18);
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            length: 2,
                                                                                            "0": 18,
                                                                                            "1": d.getMinutes()
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                length: 2,
                                                                                "0": /* tuple */[
                                                                                  "setMinutesS",
                                                                                  (function (param) {
                                                                                      var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                      d.setMinutes(18, 42);
                                                                                      return /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "Eq",
                                                                                              length: 2,
                                                                                              "0": /* tuple */[
                                                                                                18,
                                                                                                42
                                                                                              ],
                                                                                              "1": /* tuple */[
                                                                                                d.getMinutes(),
                                                                                                d.getSeconds()
                                                                                              ]
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": /* tuple */[
                                                                                    "setMinutesSMs",
                                                                                    (function (param) {
                                                                                        var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                        d.setMinutes(18, 42, 311);
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                length: 2,
                                                                                                "0": /* tuple */[
                                                                                                  18,
                                                                                                  42,
                                                                                                  311
                                                                                                ],
                                                                                                "1": /* tuple */[
                                                                                                  d.getMinutes(),
                                                                                                  d.getSeconds(),
                                                                                                  d.getMilliseconds()
                                                                                                ]
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": /* tuple */[
                                                                                      "setMonth",
                                                                                      (function (param) {
                                                                                          var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                          d.setMonth(10);
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  length: 2,
                                                                                                  "0": 10,
                                                                                                  "1": d.getMonth()
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      length: 2,
                                                                                      "0": /* tuple */[
                                                                                        "setMonthD",
                                                                                        (function (param) {
                                                                                            var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                            d.setMonth(10, 14);
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    length: 2,
                                                                                                    "0": /* tuple */[
                                                                                                      10,
                                                                                                      14
                                                                                                    ],
                                                                                                    "1": /* tuple */[
                                                                                                      d.getMonth(),
                                                                                                      d.getDate()
                                                                                                    ]
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      "1": /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        length: 2,
                                                                                        "0": /* tuple */[
                                                                                          "setSeconds",
                                                                                          (function (param) {
                                                                                              var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                              d.setSeconds(36);
                                                                                              return /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "Eq",
                                                                                                      length: 2,
                                                                                                      "0": 36,
                                                                                                      "1": d.getSeconds()
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        "1": /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          length: 2,
                                                                                          "0": /* tuple */[
                                                                                            "setSecondsMs",
                                                                                            (function (param) {
                                                                                                var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                d.setSeconds(36, 420);
                                                                                                return /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "Eq",
                                                                                                        length: 2,
                                                                                                        "0": /* tuple */[
                                                                                                          36,
                                                                                                          420
                                                                                                        ],
                                                                                                        "1": /* tuple */[
                                                                                                          d.getSeconds(),
                                                                                                          d.getMilliseconds()
                                                                                                        ]
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          "1": /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "::",
                                                                                            length: 2,
                                                                                            "0": /* tuple */[
                                                                                              "setUTCDate",
                                                                                              (function (param) {
                                                                                                  var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                  d.setUTCDate(12);
                                                                                                  return /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "Eq",
                                                                                                          length: 2,
                                                                                                          "0": 12,
                                                                                                          "1": d.getUTCDate()
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            "1": /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "::",
                                                                                              length: 2,
                                                                                              "0": /* tuple */[
                                                                                                "setUTCFullYear",
                                                                                                (function (param) {
                                                                                                    var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                    d.setUTCFullYear(1986);
                                                                                                    return /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "Eq",
                                                                                                            length: 2,
                                                                                                            "0": 1986,
                                                                                                            "1": d.getUTCFullYear()
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              "1": /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "::",
                                                                                                length: 2,
                                                                                                "0": /* tuple */[
                                                                                                  "setUTCFullYearM",
                                                                                                  (function (param) {
                                                                                                      var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                      d.setUTCFullYear(1986, 7);
                                                                                                      return /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "Eq",
                                                                                                              length: 2,
                                                                                                              "0": /* tuple */[
                                                                                                                1986,
                                                                                                                7
                                                                                                              ],
                                                                                                              "1": /* tuple */[
                                                                                                                d.getUTCFullYear(),
                                                                                                                d.getUTCMonth()
                                                                                                              ]
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                "1": /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "::",
                                                                                                  length: 2,
                                                                                                  "0": /* tuple */[
                                                                                                    "setUTCFullYearMD",
                                                                                                    (function (param) {
                                                                                                        var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                        d.setUTCFullYear(1986, 7, 23);
                                                                                                        return /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "Eq",
                                                                                                                length: 2,
                                                                                                                "0": /* tuple */[
                                                                                                                  1986,
                                                                                                                  7,
                                                                                                                  23
                                                                                                                ],
                                                                                                                "1": /* tuple */[
                                                                                                                  d.getUTCFullYear(),
                                                                                                                  d.getUTCMonth(),
                                                                                                                  d.getUTCDate()
                                                                                                                ]
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  "1": /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "::",
                                                                                                    length: 2,
                                                                                                    "0": /* tuple */[
                                                                                                      "setUTCHours",
                                                                                                      (function (param) {
                                                                                                          var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                          d.setUTCHours(22);
                                                                                                          return /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "Eq",
                                                                                                                  length: 2,
                                                                                                                  "0": 22,
                                                                                                                  "1": d.getUTCHours()
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    "1": /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "::",
                                                                                                      length: 2,
                                                                                                      "0": /* tuple */[
                                                                                                        "setUTCHoursM",
                                                                                                        (function (param) {
                                                                                                            var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                            d.setUTCHours(22, 48);
                                                                                                            return /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "Eq",
                                                                                                                    length: 2,
                                                                                                                    "0": /* tuple */[
                                                                                                                      22,
                                                                                                                      48
                                                                                                                    ],
                                                                                                                    "1": /* tuple */[
                                                                                                                      d.getUTCHours(),
                                                                                                                      d.getUTCMinutes()
                                                                                                                    ]
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      "1": /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "::",
                                                                                                        length: 2,
                                                                                                        "0": /* tuple */[
                                                                                                          "setUTCHoursMS",
                                                                                                          (function (param) {
                                                                                                              var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                              d.setUTCHours(22, 48, 54);
                                                                                                              return /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "Eq",
                                                                                                                      length: 2,
                                                                                                                      "0": /* tuple */[
                                                                                                                        22,
                                                                                                                        48,
                                                                                                                        54
                                                                                                                      ],
                                                                                                                      "1": /* tuple */[
                                                                                                                        d.getUTCHours(),
                                                                                                                        d.getUTCMinutes(),
                                                                                                                        d.getUTCSeconds()
                                                                                                                      ]
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
                                                                                                        "1": /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          length: 2,
                                                                                                          "0": /* tuple */[
                                                                                                            "setUTCMilliseconds",
                                                                                                            (function (param) {
                                                                                                                var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                d.setUTCMilliseconds(543);
                                                                                                                return /* constructor */{
                                                                                                                        tag: 0,
                                                                                                                        name: "Eq",
                                                                                                                        length: 2,
                                                                                                                        "0": 543,
                                                                                                                        "1": d.getUTCMilliseconds()
                                                                                                                      };
                                                                                                              })
                                                                                                          ],
                                                                                                          "1": /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            length: 2,
                                                                                                            "0": /* tuple */[
                                                                                                              "setUTCMinutes",
                                                                                                              (function (param) {
                                                                                                                  var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                  d.setUTCMinutes(18);
                                                                                                                  return /* constructor */{
                                                                                                                          tag: 0,
                                                                                                                          name: "Eq",
                                                                                                                          length: 2,
                                                                                                                          "0": 18,
                                                                                                                          "1": d.getUTCMinutes()
                                                                                                                        };
                                                                                                                })
                                                                                                            ],
                                                                                                            "1": /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "::",
                                                                                                              length: 2,
                                                                                                              "0": /* tuple */[
                                                                                                                "setUTCMinutesS",
                                                                                                                (function (param) {
                                                                                                                    var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                    d.setUTCMinutes(18, 42);
                                                                                                                    return /* constructor */{
                                                                                                                            tag: 0,
                                                                                                                            name: "Eq",
                                                                                                                            length: 2,
                                                                                                                            "0": /* tuple */[
                                                                                                                              18,
                                                                                                                              42
                                                                                                                            ],
                                                                                                                            "1": /* tuple */[
                                                                                                                              d.getUTCMinutes(),
                                                                                                                              d.getUTCSeconds()
                                                                                                                            ]
                                                                                                                          };
                                                                                                                  })
                                                                                                              ],
                                                                                                              "1": /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "::",
                                                                                                                length: 2,
                                                                                                                "0": /* tuple */[
                                                                                                                  "setUTCMinutesSMs",
                                                                                                                  (function (param) {
                                                                                                                      var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                      d.setUTCMinutes(18, 42, 311);
                                                                                                                      return /* constructor */{
                                                                                                                              tag: 0,
                                                                                                                              name: "Eq",
                                                                                                                              length: 2,
                                                                                                                              "0": /* tuple */[
                                                                                                                                18,
                                                                                                                                42,
                                                                                                                                311
                                                                                                                              ],
                                                                                                                              "1": /* tuple */[
                                                                                                                                d.getUTCMinutes(),
                                                                                                                                d.getUTCSeconds(),
                                                                                                                                d.getUTCMilliseconds()
                                                                                                                              ]
                                                                                                                            };
                                                                                                                    })
                                                                                                                ],
                                                                                                                "1": /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  length: 2,
                                                                                                                  "0": /* tuple */[
                                                                                                                    "setUTCMonth",
                                                                                                                    (function (param) {
                                                                                                                        var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                        d.setUTCMonth(10);
                                                                                                                        return /* constructor */{
                                                                                                                                tag: 0,
                                                                                                                                name: "Eq",
                                                                                                                                length: 2,
                                                                                                                                "0": 10,
                                                                                                                                "1": d.getUTCMonth()
                                                                                                                              };
                                                                                                                      })
                                                                                                                  ],
                                                                                                                  "1": /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "::",
                                                                                                                    length: 2,
                                                                                                                    "0": /* tuple */[
                                                                                                                      "setUTCMonthD",
                                                                                                                      (function (param) {
                                                                                                                          var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                          d.setUTCMonth(10, 14);
                                                                                                                          return /* constructor */{
                                                                                                                                  tag: 0,
                                                                                                                                  name: "Eq",
                                                                                                                                  length: 2,
                                                                                                                                  "0": /* tuple */[
                                                                                                                                    10,
                                                                                                                                    14
                                                                                                                                  ],
                                                                                                                                  "1": /* tuple */[
                                                                                                                                    d.getUTCMonth(),
                                                                                                                                    d.getUTCDate()
                                                                                                                                  ]
                                                                                                                                };
                                                                                                                        })
                                                                                                                    ],
                                                                                                                    "1": /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "::",
                                                                                                                      length: 2,
                                                                                                                      "0": /* tuple */[
                                                                                                                        "setUTCSeconds",
                                                                                                                        (function (param) {
                                                                                                                            var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                            d.setUTCSeconds(36);
                                                                                                                            return /* constructor */{
                                                                                                                                    tag: 0,
                                                                                                                                    name: "Eq",
                                                                                                                                    length: 2,
                                                                                                                                    "0": 36,
                                                                                                                                    "1": d.getUTCSeconds()
                                                                                                                                  };
                                                                                                                          })
                                                                                                                      ],
                                                                                                                      "1": /* constructor */{
                                                                                                                        tag: 0,
                                                                                                                        name: "::",
                                                                                                                        length: 2,
                                                                                                                        "0": /* tuple */[
                                                                                                                          "setUTCSecondsMs",
                                                                                                                          (function (param) {
                                                                                                                              var d = new Date("1976-03-08T12:34:56.789+01:23");
                                                                                                                              d.setUTCSeconds(36, 420);
                                                                                                                              return /* constructor */{
                                                                                                                                      tag: 0,
                                                                                                                                      name: "Eq",
                                                                                                                                      length: 2,
                                                                                                                                      "0": /* tuple */[
                                                                                                                                        36,
                                                                                                                                        420
                                                                                                                                      ],
                                                                                                                                      "1": /* tuple */[
                                                                                                                                        d.getUTCSeconds(),
                                                                                                                                        d.getUTCMilliseconds()
                                                                                                                                      ]
                                                                                                                                    };
                                                                                                                            })
                                                                                                                        ],
                                                                                                                        "1": /* constructor */{
                                                                                                                          tag: 0,
                                                                                                                          name: "::",
                                                                                                                          length: 2,
                                                                                                                          "0": /* tuple */[
                                                                                                                            "toDateString",
                                                                                                                            (function (param) {
                                                                                                                                return /* constructor */{
                                                                                                                                        tag: 0,
                                                                                                                                        name: "Eq",
                                                                                                                                        length: 2,
                                                                                                                                        "0": "Mon Mar 08 1976",
                                                                                                                                        "1": new Date("1976-03-08T12:34:56.789+01:23").toDateString()
                                                                                                                                      };
                                                                                                                              })
                                                                                                                          ],
                                                                                                                          "1": /* constructor */{
                                                                                                                            tag: 0,
                                                                                                                            name: "::",
                                                                                                                            length: 2,
                                                                                                                            "0": /* tuple */[
                                                                                                                              "toGMTString",
                                                                                                                              (function (param) {
                                                                                                                                  return /* constructor */{
                                                                                                                                          tag: 0,
                                                                                                                                          name: "Eq",
                                                                                                                                          length: 2,
                                                                                                                                          "0": "Mon, 08 Mar 1976 11:11:56 GMT",
                                                                                                                                          "1": new Date("1976-03-08T12:34:56.789+01:23").toUTCString()
                                                                                                                                        };
                                                                                                                                })
                                                                                                                            ],
                                                                                                                            "1": /* constructor */{
                                                                                                                              tag: 0,
                                                                                                                              name: "::",
                                                                                                                              length: 2,
                                                                                                                              "0": /* tuple */[
                                                                                                                                "toISOString",
                                                                                                                                (function (param) {
                                                                                                                                    return /* constructor */{
                                                                                                                                            tag: 0,
                                                                                                                                            name: "Eq",
                                                                                                                                            length: 2,
                                                                                                                                            "0": "1976-03-08T11:11:56.789Z",
                                                                                                                                            "1": new Date("1976-03-08T12:34:56.789+01:23").toISOString()
                                                                                                                                          };
                                                                                                                                  })
                                                                                                                              ],
                                                                                                                              "1": /* constructor */{
                                                                                                                                tag: 0,
                                                                                                                                name: "::",
                                                                                                                                length: 2,
                                                                                                                                "0": /* tuple */[
                                                                                                                                  "toJSON",
                                                                                                                                  (function (param) {
                                                                                                                                      return /* constructor */{
                                                                                                                                              tag: 0,
                                                                                                                                              name: "Eq",
                                                                                                                                              length: 2,
                                                                                                                                              "0": "1976-03-08T11:11:56.789Z",
                                                                                                                                              "1": new Date("1976-03-08T12:34:56.789+01:23").toJSON()
                                                                                                                                            };
                                                                                                                                    })
                                                                                                                                ],
                                                                                                                                "1": /* constructor */{
                                                                                                                                  tag: 0,
                                                                                                                                  name: "::",
                                                                                                                                  length: 2,
                                                                                                                                  "0": /* tuple */[
                                                                                                                                    "toJSONUnsafe",
                                                                                                                                    (function (param) {
                                                                                                                                        return /* constructor */{
                                                                                                                                                tag: 0,
                                                                                                                                                name: "Eq",
                                                                                                                                                length: 2,
                                                                                                                                                "0": "1976-03-08T11:11:56.789Z",
                                                                                                                                                "1": new Date("1976-03-08T12:34:56.789+01:23").toJSON()
                                                                                                                                              };
                                                                                                                                      })
                                                                                                                                  ],
                                                                                                                                  "1": /* constructor */{
                                                                                                                                    tag: 0,
                                                                                                                                    name: "::",
                                                                                                                                    length: 2,
                                                                                                                                    "0": /* tuple */[
                                                                                                                                      "toUTCString",
                                                                                                                                      (function (param) {
                                                                                                                                          return /* constructor */{
                                                                                                                                                  tag: 0,
                                                                                                                                                  name: "Eq",
                                                                                                                                                  length: 2,
                                                                                                                                                  "0": "Mon, 08 Mar 1976 11:11:56 GMT",
                                                                                                                                                  "1": new Date("1976-03-08T12:34:56.789+01:23").toUTCString()
                                                                                                                                                };
                                                                                                                                        })
                                                                                                                                    ],
                                                                                                                                    "1": /* constructor */{
                                                                                                                                      tag: 0,
                                                                                                                                      name: "::",
                                                                                                                                      length: 2,
                                                                                                                                      "0": /* tuple */[
                                                                                                                                        "eq",
                                                                                                                                        (function (param) {
                                                                                                                                            var a = new Date("2013-03-01T01:10:00");
                                                                                                                                            var b = new Date("2013-03-01T01:10:00");
                                                                                                                                            var c = new Date("2013-03-01T01:10:01");
                                                                                                                                            return /* constructor */{
                                                                                                                                                    tag: 4,
                                                                                                                                                    name: "Ok",
                                                                                                                                                    length: 1,
                                                                                                                                                    "0": Caml_obj.caml_equal(a, b) && Caml_obj.caml_notequal(b, c) && Caml_obj.caml_greaterthan(c, b)
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

Mt.from_pair_suites("Js_date_test", suites);

var N = 0;

exports.N = N;
exports.date = date;
exports.suites = suites;
/*  Not a pure module */

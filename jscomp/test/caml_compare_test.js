'use strict';

var Mt = require("./mt.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var function_equal_test;

try {
  function_equal_test = Caml_obj.caml_equal((function (x) {
          return x + 1 | 0;
        }), (function (x) {
          return x + 2 | 0;
        }));
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  function_equal_test = exn[0] === Caml_builtin_exceptions.invalid_argument && exn[1] === "equal: functional value" ? true : false;
}

var suites = /* record */[/* contents : constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "File \"caml_compare_test.ml\", line 9, characters 4-11",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": true,
                  "1": Caml_obj.caml_lessthan(undefined, 1)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "option2",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": true,
                    "1": Caml_obj.caml_lessthan(1, 2)
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "File \"caml_compare_test.ml\", line 11, characters 4-11",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": true,
                      "1": Caml_obj.caml_greaterthan(/* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": 1,
                            "1": /* [] */0
                          }, /* [] */0)
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "listeq",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": true,
                        "1": Caml_obj.caml_equal(/* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 1,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 2,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": 3,
                                  "1": /* [] */0
                                }
                              }
                            }, /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": 1,
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 2,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": 3,
                                  "1": /* [] */0
                                }
                              }
                            })
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "listneq",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          length: 2,
                          "0": true,
                          "1": Caml_obj.caml_greaterthan(/* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 1,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": 2,
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": 3,
                                    "1": /* [] */0
                                  }
                                }
                              }, /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": 1,
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": 2,
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": 2,
                                    "1": /* [] */0
                                  }
                                }
                              })
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "custom_u",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            length: 2,
                            "0": true,
                            "1": Caml_obj.caml_greaterthan(/* tuple */[
                                  /* constructor */{
                                    tag: 0,
                                    name: "A",
                                    length: 1,
                                    "0": 3
                                  },
                                  /* constructor */{
                                    tag: 1,
                                    name: "B",
                                    length: 2,
                                    "0": 2,
                                    "1": false
                                  },
                                  /* constructor */{
                                    tag: 2,
                                    name: "C",
                                    length: 1,
                                    "0": 1
                                  }
                                ], /* tuple */[
                                  /* constructor */{
                                    tag: 0,
                                    name: "A",
                                    length: 1,
                                    "0": 3
                                  },
                                  /* constructor */{
                                    tag: 1,
                                    name: "B",
                                    length: 2,
                                    "0": 2,
                                    "1": false
                                  },
                                  /* constructor */{
                                    tag: 2,
                                    name: "C",
                                    length: 1,
                                    "0": 0
                                  }
                                ])
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "custom_u2",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              length: 2,
                              "0": true,
                              "1": Caml_obj.caml_equal(/* tuple */[
                                    /* constructor */{
                                      tag: 0,
                                      name: "A",
                                      length: 1,
                                      "0": 3
                                    },
                                    /* constructor */{
                                      tag: 1,
                                      name: "B",
                                      length: 2,
                                      "0": 2,
                                      "1": false
                                    },
                                    /* constructor */{
                                      tag: 2,
                                      name: "C",
                                      length: 1,
                                      "0": 1
                                    }
                                  ], /* tuple */[
                                    /* constructor */{
                                      tag: 0,
                                      name: "A",
                                      length: 1,
                                      "0": 3
                                    },
                                    /* constructor */{
                                      tag: 1,
                                      name: "B",
                                      length: 2,
                                      "0": 2,
                                      "1": false
                                    },
                                    /* constructor */{
                                      tag: 2,
                                      name: "C",
                                      length: 1,
                                      "0": 1
                                    }
                                  ])
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "function",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": true,
                                "1": function_equal_test
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "File \"caml_compare_test.ml\", line 17, characters 4-11",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": true,
                                  "1": Caml_obj.caml_lessthan(undefined, 1)
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "File \"caml_compare_test.ml\", line 28, characters 4-11",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    length: 2,
                                    "0": true,
                                    "1": Caml_obj.caml_lessthan(undefined, /* array */[
                                          1,
                                          30
                                        ])
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": /* tuple */[
                          "File \"caml_compare_test.ml\", line 31, characters 4-11",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      length: 2,
                                      "0": true,
                                      "1": Caml_obj.caml_greaterthan(/* array */[
                                            1,
                                            30
                                          ], undefined)
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": /* tuple */[
                            "File \"caml_compare_test.ml\", line 34, characters 4-11",
                            (function (param) {
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        length: 2,
                                        "0": true,
                                        "1": Caml_obj.caml_lessthan(/* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": 2,
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": 6,
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
                                                      "0": 2,
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": 1,
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": 4,
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 1,
                                                              "1": /* [] */0
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }, /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": 2,
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": 6,
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
                                                      "0": 2,
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": 1,
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": 4,
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 1,
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": 409,
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
                                            })
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": /* tuple */[
                              "File \"caml_compare_test.ml\", line 37, characters 4-11",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          length: 2,
                                          "0": true,
                                          "1": Caml_obj.caml_lessthan(/* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": 1,
                                                "1": /* [] */0
                                              }, /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": 1,
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": 409,
                                                  "1": /* [] */0
                                                }
                                              })
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": /* tuple */[
                                "File \"caml_compare_test.ml\", line 40, characters 4-11",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            length: 2,
                                            "0": true,
                                            "1": Caml_obj.caml_lessthan(/* [] */0, /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": 409,
                                                  "1": /* [] */0
                                                })
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": /* tuple */[
                                  "File \"caml_compare_test.ml\", line 43, characters 4-11",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              length: 2,
                                              "0": true,
                                              "1": Caml_obj.caml_greaterthan(/* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": 2,
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": 6,
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
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 1,
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": 4,
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": 2,
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": 1,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": 409,
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
                                                  }, /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": 2,
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": 6,
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
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 1,
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": 4,
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": 2,
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": 1,
                                                                    "1": /* [] */0
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": /* tuple */[
                                    "File \"caml_compare_test.ml\", line 47, characters 4-11",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                length: 2,
                                                "0": false,
                                                "1": false
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": /* tuple */[
                                      "File \"caml_compare_test.ml\", line 50, characters 4-11",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  length: 2,
                                                  "0": false,
                                                  "1": false
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": /* tuple */[
                                        "File \"caml_compare_test.ml\", line 53, characters 4-11",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    length: 2,
                                                    "0": false,
                                                    "1": Caml_obj.caml_equal(/* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": 2,
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 6,
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
                                                                  "0": 2,
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": 1,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": 4,
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": 2,
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": 1,
                                                                          "1": /* [] */0
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }, /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": 2,
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 6,
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
                                                                  "0": 2,
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": 1,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": 4,
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": 2,
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": 1,
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": 409,
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
                                                        })
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": /* tuple */[
                                          "File \"caml_compare_test.ml\", line 56, characters 4-11",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      length: 2,
                                                      "0": false,
                                                      "1": Caml_obj.caml_equal(/* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 6,
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
                                                                    "0": 2,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": 1,
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": 4,
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": 2,
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": 1,
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              length: 2,
                                                                              "0": 409,
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
                                                          }, /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": 2,
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": 6,
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
                                                                    "0": 2,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": 1,
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": 4,
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": 2,
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": 1,
                                                                            "1": /* [] */0
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          })
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          length: 2,
                                          "0": /* tuple */[
                                            "cmp_id",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: 0,
                                                        name: "Eq",
                                                        length: 2,
                                                        "0": Caml_obj.caml_compare({
                                                              x: 1,
                                                              y: 2
                                                            }, {
                                                              x: 1,
                                                              y: 2
                                                            }),
                                                        "1": 0
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            length: 2,
                                            "0": /* tuple */[
                                              "cmp_val",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: 0,
                                                          name: "Eq",
                                                          length: 2,
                                                          "0": Caml_obj.caml_compare({
                                                                x: 1
                                                              }, {
                                                                x: 2
                                                              }),
                                                          "1": -1
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": /* tuple */[
                                                "cmp_val2",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: 0,
                                                            name: "Eq",
                                                            length: 2,
                                                            "0": Caml_obj.caml_compare({
                                                                  x: 2
                                                                }, {
                                                                  x: 1
                                                                }),
                                                            "1": 1
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": /* tuple */[
                                                  "cmp_empty",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 0,
                                                              name: "Eq",
                                                              length: 2,
                                                              "0": Caml_obj.caml_compare(({}), ({})),
                                                              "1": 0
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": /* tuple */[
                                                    "cmp_empty2",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 0,
                                                                name: "Eq",
                                                                length: 2,
                                                                "0": Caml_obj.caml_compare(({}), ({x:1})),
                                                                "1": -1
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": /* tuple */[
                                                      "cmp_swap",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  length: 2,
                                                                  "0": Caml_obj.caml_compare({
                                                                        x: 1,
                                                                        y: 2
                                                                      }, {
                                                                        y: 2,
                                                                        x: 1
                                                                      }),
                                                                  "1": 0
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": /* tuple */[
                                                        "cmp_size",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 0,
                                                                    name: "Eq",
                                                                    length: 2,
                                                                    "0": Caml_obj.caml_compare(({x:1}), ({x:1, y:2})),
                                                                    "1": -1
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": /* tuple */[
                                                          "cmp_size2",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 0,
                                                                      name: "Eq",
                                                                      length: 2,
                                                                      "0": Caml_obj.caml_compare(({x:1, y:2}), ({x:1})),
                                                                      "1": 1
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": /* tuple */[
                                                            "cmp_order",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 0,
                                                                        name: "Eq",
                                                                        length: 2,
                                                                        "0": Caml_obj.caml_compare({
                                                                              x: 0,
                                                                              y: 1
                                                                            }, {
                                                                              x: 1,
                                                                              y: 0
                                                                            }),
                                                                        "1": -1
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": /* tuple */[
                                                              "cmp_order2",
                                                              (function (param) {
                                                                  return /* constructor */{
                                                                          tag: 0,
                                                                          name: "Eq",
                                                                          length: 2,
                                                                          "0": Caml_obj.caml_compare({
                                                                                x: 1,
                                                                                y: 0
                                                                              }, {
                                                                                x: 0,
                                                                                y: 1
                                                                              }),
                                                                          "1": 1
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": /* tuple */[
                                                                "cmp_in_list",
                                                                (function (param) {
                                                                    return /* constructor */{
                                                                            tag: 0,
                                                                            name: "Eq",
                                                                            length: 2,
                                                                            "0": Caml_obj.caml_compare(/* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": {
                                                                                    x: 1
                                                                                  },
                                                                                  "1": /* [] */0
                                                                                }, /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": {
                                                                                    x: 2
                                                                                  },
                                                                                  "1": /* [] */0
                                                                                }),
                                                                            "1": -1
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": /* tuple */[
                                                                  "cmp_in_list2",
                                                                  (function (param) {
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              length: 2,
                                                                              "0": Caml_obj.caml_compare(/* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": {
                                                                                      x: 2
                                                                                    },
                                                                                    "1": /* [] */0
                                                                                  }, /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": {
                                                                                      x: 1
                                                                                    },
                                                                                    "1": /* [] */0
                                                                                  }),
                                                                              "1": 1
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": /* tuple */[
                                                                    "cmp_with_list",
                                                                    (function (param) {
                                                                        return /* constructor */{
                                                                                tag: 0,
                                                                                name: "Eq",
                                                                                length: 2,
                                                                                "0": Caml_obj.caml_compare({
                                                                                      x: /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        length: 2,
                                                                                        "0": 0,
                                                                                        "1": /* [] */0
                                                                                      }
                                                                                    }, {
                                                                                      x: /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        length: 2,
                                                                                        "0": 1,
                                                                                        "1": /* [] */0
                                                                                      }
                                                                                    }),
                                                                                "1": -1
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": /* tuple */[
                                                                      "cmp_with_list2",
                                                                      (function (param) {
                                                                          return /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "Eq",
                                                                                  length: 2,
                                                                                  "0": Caml_obj.caml_compare({
                                                                                        x: /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          length: 2,
                                                                                          "0": 1,
                                                                                          "1": /* [] */0
                                                                                        }
                                                                                      }, {
                                                                                        x: /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          length: 2,
                                                                                          "0": 0,
                                                                                          "1": /* [] */0
                                                                                        }
                                                                                      }),
                                                                                  "1": 1
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": /* tuple */[
                                                                        "eq_id",
                                                                        (function (param) {
                                                                            return /* constructor */{
                                                                                    tag: 4,
                                                                                    name: "Ok",
                                                                                    length: 1,
                                                                                    "0": Caml_obj.caml_equal({
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        }, {
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        })
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": /* tuple */[
                                                                          "eq_val",
                                                                          (function (param) {
                                                                              return /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "Eq",
                                                                                      length: 2,
                                                                                      "0": Caml_obj.caml_equal({
                                                                                            x: 1
                                                                                          }, {
                                                                                            x: 2
                                                                                          }),
                                                                                      "1": false
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": /* tuple */[
                                                                            "eq_val2",
                                                                            (function (param) {
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        length: 2,
                                                                                        "0": Caml_obj.caml_equal({
                                                                                              x: 2
                                                                                            }, {
                                                                                              x: 1
                                                                                            }),
                                                                                        "1": false
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": /* tuple */[
                                                                              "eq_empty",
                                                                              (function (param) {
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          length: 2,
                                                                                          "0": Caml_obj.caml_equal(({}), ({})),
                                                                                          "1": true
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              length: 2,
                                                                              "0": /* tuple */[
                                                                                "eq_empty2",
                                                                                (function (param) {
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            length: 2,
                                                                                            "0": Caml_obj.caml_equal(({}), ({x:1})),
                                                                                            "1": false
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                length: 2,
                                                                                "0": /* tuple */[
                                                                                  "eq_swap",
                                                                                  (function (param) {
                                                                                      return /* constructor */{
                                                                                              tag: 4,
                                                                                              name: "Ok",
                                                                                              length: 1,
                                                                                              "0": Caml_obj.caml_equal({
                                                                                                    x: 1,
                                                                                                    y: 2
                                                                                                  }, {
                                                                                                    y: 2,
                                                                                                    x: 1
                                                                                                  })
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": /* tuple */[
                                                                                    "eq_size",
                                                                                    (function (param) {
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                length: 2,
                                                                                                "0": Caml_obj.caml_equal(({x:1}), ({x:1, y:2})),
                                                                                                "1": false
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": /* tuple */[
                                                                                      "eq_size2",
                                                                                      (function (param) {
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  length: 2,
                                                                                                  "0": Caml_obj.caml_equal(({x:1, y:2}), ({x:1})),
                                                                                                  "1": false
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      length: 2,
                                                                                      "0": /* tuple */[
                                                                                        "eq_in_list",
                                                                                        (function (param) {
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    length: 2,
                                                                                                    "0": Caml_obj.caml_equal(/* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          length: 2,
                                                                                                          "0": {
                                                                                                            x: 1
                                                                                                          },
                                                                                                          "1": /* [] */0
                                                                                                        }, /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          length: 2,
                                                                                                          "0": {
                                                                                                            x: 2
                                                                                                          },
                                                                                                          "1": /* [] */0
                                                                                                        }),
                                                                                                    "1": false
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      "1": /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        length: 2,
                                                                                        "0": /* tuple */[
                                                                                          "eq_in_list2",
                                                                                          (function (param) {
                                                                                              return /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "Eq",
                                                                                                      length: 2,
                                                                                                      "0": Caml_obj.caml_equal(/* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            length: 2,
                                                                                                            "0": {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            "1": /* [] */0
                                                                                                          }, /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            length: 2,
                                                                                                            "0": {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            "1": /* [] */0
                                                                                                          }),
                                                                                                      "1": true
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        "1": /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          length: 2,
                                                                                          "0": /* tuple */[
                                                                                            "eq_with_list",
                                                                                            (function (param) {
                                                                                                return /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "Eq",
                                                                                                        length: 2,
                                                                                                        "0": Caml_obj.caml_equal({
                                                                                                              x: /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "::",
                                                                                                                length: 2,
                                                                                                                "0": 0,
                                                                                                                "1": /* [] */0
                                                                                                              }
                                                                                                            }, {
                                                                                                              x: /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "::",
                                                                                                                length: 2,
                                                                                                                "0": 0,
                                                                                                                "1": /* [] */0
                                                                                                              }
                                                                                                            }),
                                                                                                        "1": true
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          "1": /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "::",
                                                                                            length: 2,
                                                                                            "0": /* tuple */[
                                                                                              "eq_with_list2",
                                                                                              (function (param) {
                                                                                                  return /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "Eq",
                                                                                                          length: 2,
                                                                                                          "0": Caml_obj.caml_equal({
                                                                                                                x: /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  length: 2,
                                                                                                                  "0": 0,
                                                                                                                  "1": /* [] */0
                                                                                                                }
                                                                                                              }, {
                                                                                                                x: /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  length: 2,
                                                                                                                  "0": 1,
                                                                                                                  "1": /* [] */0
                                                                                                                }
                                                                                                              }),
                                                                                                          "1": false
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            "1": /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "::",
                                                                                              length: 2,
                                                                                              "0": /* tuple */[
                                                                                                "File \"caml_compare_test.ml\", line 87, characters 4-11",
                                                                                                (function (param) {
                                                                                                    return /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "Eq",
                                                                                                            length: 2,
                                                                                                            "0": Caml_obj.caml_compare(null, /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  length: 2,
                                                                                                                  "0": 3,
                                                                                                                  "1": /* [] */0
                                                                                                                }),
                                                                                                            "1": -1
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              "1": /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "::",
                                                                                                length: 2,
                                                                                                "0": /* tuple */[
                                                                                                  "File \"caml_compare_test.ml\", line 90, characters 4-11",
                                                                                                  (function (param) {
                                                                                                      return /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "Eq",
                                                                                                              length: 2,
                                                                                                              "0": Caml_obj.caml_compare(/* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "::",
                                                                                                                    length: 2,
                                                                                                                    "0": 3,
                                                                                                                    "1": /* [] */0
                                                                                                                  }, null),
                                                                                                              "1": 1
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                "1": /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "::",
                                                                                                  length: 2,
                                                                                                  "0": /* tuple */[
                                                                                                    "File \"caml_compare_test.ml\", line 93, characters 4-11",
                                                                                                    (function (param) {
                                                                                                        return /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "Eq",
                                                                                                                length: 2,
                                                                                                                "0": Caml_obj.caml_compare(null, 0),
                                                                                                                "1": -1
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  "1": /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "::",
                                                                                                    length: 2,
                                                                                                    "0": /* tuple */[
                                                                                                      "File \"caml_compare_test.ml\", line 96, characters 4-11",
                                                                                                      (function (param) {
                                                                                                          return /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "Eq",
                                                                                                                  length: 2,
                                                                                                                  "0": Caml_obj.caml_compare(0, null),
                                                                                                                  "1": 1
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    "1": /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "::",
                                                                                                      length: 2,
                                                                                                      "0": /* tuple */[
                                                                                                        "File \"caml_compare_test.ml\", line 99, characters 4-11",
                                                                                                        (function (param) {
                                                                                                            return /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "Eq",
                                                                                                                    length: 2,
                                                                                                                    "0": Caml_obj.caml_compare(undefined, 0),
                                                                                                                    "1": -1
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      "1": /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "::",
                                                                                                        length: 2,
                                                                                                        "0": /* tuple */[
                                                                                                          "File \"caml_compare_test.ml\", line 102, characters 4-11",
                                                                                                          (function (param) {
                                                                                                              return /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "Eq",
                                                                                                                      length: 2,
                                                                                                                      "0": Caml_obj.caml_compare(0, undefined),
                                                                                                                      "1": 1
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
  }];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

eq("File \"caml_compare_test.ml\", line 112, characters 6-13", true, Caml_obj.caml_greaterthan(1, undefined));

eq("File \"caml_compare_test.ml\", line 113, characters 6-13", true, Caml_obj.caml_lessthan(/* [] */0, /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }));

eq("File \"caml_compare_test.ml\", line 114, characters 6-13", false, Caml_obj.caml_greaterthan(undefined, 1));

eq("File \"caml_compare_test.ml\", line 115, characters 6-13", false, Caml_obj.caml_greaterthan(undefined, /* array */[
          1,
          30
        ]));

eq("File \"caml_compare_test.ml\", line 116, characters 6-13", false, Caml_obj.caml_lessthan(/* array */[
          1,
          30
        ], undefined));

Mt.from_pair_suites("Caml_compare_test", suites[0]);

exports.function_equal_test = function_equal_test;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* function_equal_test Not a pure module */

'use strict';

var Mt = require("./mt.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "_NaN <> _NaN",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": false,
                "1": NaN === NaN
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "isNaN - _NaN",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": true,
                  "1": isNaN(NaN)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "isNaN - 0.",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": false,
                    "1": isNaN(0)
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "isFinite - infinity",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": false,
                      "1": isFinite(Number.POSITIVE_INFINITY)
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "isFinite - neg_infinity",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": false,
                        "1": isFinite(Number.NEGATIVE_INFINITY)
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": /* tuple */[
              "isFinite - _NaN",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          length: 2,
                          "0": false,
                          "1": isFinite(NaN)
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* tuple */[
                "isFinite - 0.",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            length: 2,
                            "0": true,
                            "1": isFinite(0)
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* tuple */[
                  "toExponential",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              length: 2,
                              "0": "1.23456e+2",
                              "1": (123.456).toExponential()
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* tuple */[
                    "toExponential - large number",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                length: 2,
                                "0": "1.2e+21",
                                "1": (1.2e21).toExponential()
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": /* tuple */[
                      "toExponentialWithPrecision - digits:2",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  length: 2,
                                  "0": "1.23e+2",
                                  "1": (123.456).toExponential(2)
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": /* tuple */[
                        "toExponentialWithPrecision - digits:4",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    length: 2,
                                    "0": "1.2346e+2",
                                    "1": (123.456).toExponential(4)
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": /* tuple */[
                          "toExponentialWithPrecision - digits:20",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      length: 2,
                                      "0": "0.00000000000000000000e+0",
                                      "1": (0).toExponential(20)
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": /* tuple */[
                            "File \"js_float_test.ml\", line 31, characters 3-10",
                            (function (param) {
                                return /* constructor */{
                                        tag: 7,
                                        name: "ThrowAny",
                                        length: 1,
                                        "0": (function (param) {
                                            (0).toExponential(101);
                                            return /* () */0;
                                          })
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": /* tuple */[
                              "toExponentialWithPrecision - digits:-1",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 7,
                                          name: "ThrowAny",
                                          length: 1,
                                          "0": (function (param) {
                                              (0).toExponential(-1);
                                              return /* () */0;
                                            })
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": /* tuple */[
                                "toFixed",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            length: 2,
                                            "0": "123",
                                            "1": (123.456).toFixed()
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": /* tuple */[
                                  "toFixed - large number",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              length: 2,
                                              "0": "1.2e+21",
                                              "1": (1.2e21).toFixed()
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": /* tuple */[
                                    "toFixedWithPrecision - digits:2",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                length: 2,
                                                "0": "123.46",
                                                "1": (123.456).toFixed(2)
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    length: 2,
                                    "0": /* tuple */[
                                      "toFixedWithPrecision - digits:4",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  length: 2,
                                                  "0": "123.4560",
                                                  "1": (123.456).toFixed(4)
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      length: 2,
                                      "0": /* tuple */[
                                        "toFixedWithPrecision - digits:20",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    length: 2,
                                                    "0": "0.00000000000000000000",
                                                    "1": (0).toFixed(20)
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": /* tuple */[
                                          "toFixedWithPrecision - digits:101",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 7,
                                                      name: "ThrowAny",
                                                      length: 1,
                                                      "0": (function (param) {
                                                          (0).toFixed(101);
                                                          return /* () */0;
                                                        })
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          length: 2,
                                          "0": /* tuple */[
                                            "toFixedWithPrecision - digits:-1",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: 7,
                                                        name: "ThrowAny",
                                                        length: 1,
                                                        "0": (function (param) {
                                                            (0).toFixed(-1);
                                                            return /* () */0;
                                                          })
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            length: 2,
                                            "0": /* tuple */[
                                              "toPrecision",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: 0,
                                                          name: "Eq",
                                                          length: 2,
                                                          "0": "123.456",
                                                          "1": (123.456).toPrecision()
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              length: 2,
                                              "0": /* tuple */[
                                                "toPrecision - large number",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: 0,
                                                            name: "Eq",
                                                            length: 2,
                                                            "0": "1.2e+21",
                                                            "1": (1.2e21).toPrecision()
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                length: 2,
                                                "0": /* tuple */[
                                                  "toPrecisionWithPrecision - digits:2",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 0,
                                                              name: "Eq",
                                                              length: 2,
                                                              "0": "1.2e+2",
                                                              "1": (123.456).toPrecision(2)
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  length: 2,
                                                  "0": /* tuple */[
                                                    "toPrecisionWithPrecision - digits:4",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 0,
                                                                name: "Eq",
                                                                length: 2,
                                                                "0": "123.5",
                                                                "1": (123.456).toPrecision(4)
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    length: 2,
                                                    "0": /* tuple */[
                                                      "toPrecisionWithPrecision - digits:20",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  length: 2,
                                                                  "0": "0.0000000000000000000",
                                                                  "1": (0).toPrecision(20)
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      length: 2,
                                                      "0": /* tuple */[
                                                        "File \"js_float_test.ml\", line 61, characters 3-10",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 7,
                                                                    name: "ThrowAny",
                                                                    length: 1,
                                                                    "0": (function (param) {
                                                                        (0).toPrecision(101);
                                                                        return /* () */0;
                                                                      })
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        length: 2,
                                                        "0": /* tuple */[
                                                          "toPrecisionWithPrecision - digits:-1",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 7,
                                                                      name: "ThrowAny",
                                                                      length: 1,
                                                                      "0": (function (param) {
                                                                          (0).toPrecision(-1);
                                                                          return /* () */0;
                                                                        })
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          length: 2,
                                                          "0": /* tuple */[
                                                            "toString",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 0,
                                                                        name: "Eq",
                                                                        length: 2,
                                                                        "0": "1.23",
                                                                        "1": (1.23).toString()
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": /* tuple */[
                                                              "toString - large number",
                                                              (function (param) {
                                                                  return /* constructor */{
                                                                          tag: 0,
                                                                          name: "Eq",
                                                                          length: 2,
                                                                          "0": "1.2e+21",
                                                                          "1": (1.2e21).toString()
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              length: 2,
                                                              "0": /* tuple */[
                                                                "toStringWithRadix - radix:2",
                                                                (function (param) {
                                                                    return /* constructor */{
                                                                            tag: 0,
                                                                            name: "Eq",
                                                                            length: 2,
                                                                            "0": "1111011.0111010010111100011010100111111011111001110111",
                                                                            "1": (123.456).toString(2)
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                length: 2,
                                                                "0": /* tuple */[
                                                                  "toStringWithRadix - radix:16",
                                                                  (function (param) {
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              length: 2,
                                                                              "0": "7b.74bc6a7ef9dc",
                                                                              "1": (123.456).toString(16)
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": /* tuple */[
                                                                    "toStringWithRadix - radix:36",
                                                                    (function (param) {
                                                                        return /* constructor */{
                                                                                tag: 0,
                                                                                name: "Eq",
                                                                                length: 2,
                                                                                "0": "3f",
                                                                                "1": (123).toString(36)
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": /* tuple */[
                                                                      "toStringWithRadix - radix:37",
                                                                      (function (param) {
                                                                          return /* constructor */{
                                                                                  tag: 7,
                                                                                  name: "ThrowAny",
                                                                                  length: 1,
                                                                                  "0": (function (param) {
                                                                                      (0).toString(37);
                                                                                      return /* () */0;
                                                                                    })
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": /* tuple */[
                                                                        "toStringWithRadix - radix:1",
                                                                        (function (param) {
                                                                            return /* constructor */{
                                                                                    tag: 7,
                                                                                    name: "ThrowAny",
                                                                                    length: 1,
                                                                                    "0": (function (param) {
                                                                                        (0).toString(1);
                                                                                        return /* () */0;
                                                                                      })
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": /* tuple */[
                                                                          "toStringWithRadix - radix:-1",
                                                                          (function (param) {
                                                                              return /* constructor */{
                                                                                      tag: 7,
                                                                                      name: "ThrowAny",
                                                                                      length: 1,
                                                                                      "0": (function (param) {
                                                                                          (0).toString(-1);
                                                                                          return /* () */0;
                                                                                        })
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          length: 2,
                                                                          "0": /* tuple */[
                                                                            "fromString - 123",
                                                                            (function (param) {
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        length: 2,
                                                                                        "0": 123,
                                                                                        "1": Number("123")
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            length: 2,
                                                                            "0": /* tuple */[
                                                                              "fromString - 12.3",
                                                                              (function (param) {
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          length: 2,
                                                                                          "0": 12.3,
                                                                                          "1": Number("12.3")
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              length: 2,
                                                                              "0": /* tuple */[
                                                                                "fromString - empty string",
                                                                                (function (param) {
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            length: 2,
                                                                                            "0": 0,
                                                                                            "1": Number("")
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                length: 2,
                                                                                "0": /* tuple */[
                                                                                  "fromString - 0x11",
                                                                                  (function (param) {
                                                                                      return /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "Eq",
                                                                                              length: 2,
                                                                                              "0": 17,
                                                                                              "1": Number("0x11")
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  length: 2,
                                                                                  "0": /* tuple */[
                                                                                    "fromString - 0b11",
                                                                                    (function (param) {
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                length: 2,
                                                                                                "0": 3,
                                                                                                "1": Number("0b11")
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    length: 2,
                                                                                    "0": /* tuple */[
                                                                                      "fromString - 0o11",
                                                                                      (function (param) {
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  length: 2,
                                                                                                  "0": 9,
                                                                                                  "1": Number("0o11")
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      length: 2,
                                                                                      "0": /* tuple */[
                                                                                        "fromString - invalid string",
                                                                                        (function (param) {
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    length: 2,
                                                                                                    "0": true,
                                                                                                    "1": isNaN(Number("foo"))
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
};

Mt.from_pair_suites("Js_float_test", suites);

exports.suites = suites;
/*  Not a pure module */

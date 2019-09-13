'use strict';

var Mt = require("./mt.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Int64 = require("../../lib/js/int64.js");
var $$Buffer = require("../../lib/js/buffer.js");
var Format = require("../../lib/js/format.js");
var Printf = require("../../lib/js/printf.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_format = require("../../lib/js/caml_format.js");

var of_string = /* array */[
  /* tuple */[
    0,
    "0"
  ],
  /* tuple */[
    3,
    "03"
  ],
  /* tuple */[
    -3,
    "-03"
  ],
  /* tuple */[
    -63,
    "-0x3f"
  ],
  /* tuple */[
    -31,
    "-0x1f"
  ],
  /* tuple */[
    47,
    "0X2f"
  ],
  /* tuple */[
    11,
    "0O13"
  ],
  /* tuple */[
    8,
    "0o10"
  ],
  /* tuple */[
    3,
    "0b11"
  ],
  /* tuple */[
    1,
    "0b01"
  ],
  /* tuple */[
    0,
    "0b00"
  ],
  /* tuple */[
    -3,
    "-0b11"
  ],
  /* tuple */[
    -5,
    "-0B101"
  ],
  /* tuple */[
    332,
    "0332"
  ],
  /* tuple */[
    -32,
    "-32"
  ],
  /* tuple */[
    1,
    "-0xffff_ffff"
  ],
  /* tuple */[
    -1,
    "0xffff_ffff"
  ]
];

function from_float_of_string(xs) {
  return $$Array.mapi((function (i, param) {
                return Pervasives.string_of_float;
              }), xs);
}

function from_of_string(xs) {
  return $$Array.to_list($$Array.mapi((function (i, param) {
                    var b = param[1];
                    var a = param[0];
                    return /* tuple */[
                            Curry._1(Printf.sprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "String_literal",
                                        "0": "of_string ",
                                        "1": /* constructor */{
                                          tag: "Scan_get_counter",
                                          "0": "Token_counter",
                                          "1": "End_of_format"
                                        }
                                      },
                                      "1": "of_string %L"
                                    }), i),
                            (function (param) {
                                return /* constructor */{
                                        tag: "Eq",
                                        "0": Caml_format.caml_int_of_string(b),
                                        "1": a
                                      };
                              })
                          ];
                  }), of_string));
}

function u(v) {
  return Curry._1(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Int",
                    "0": "Int_d",
                    "1": /* constructor */{
                      tag: "Lit_padding",
                      "0": "Right",
                      "1": 33
                    },
                    "2": "No_precision",
                    "3": "End_of_format"
                  },
                  "1": "%33d"
                }), v);
}

var to_str = Caml_format.caml_int_of_string;

var v = Curry._1(Printf.sprintf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Int",
            "0": "Int_d",
            "1": /* constructor */{
              tag: "Lit_padding",
              "0": "Right",
              "1": 3
            },
            "2": "No_precision",
            "3": "End_of_format"
          },
          "1": "%3d"
        }), 3333);

var pairs = /* array */[
  /* tuple */[
    "FP_infinite",
    "infinity"
  ],
  /* tuple */[
    "FP_infinite",
    "+infinity"
  ],
  /* tuple */[
    "FP_infinite",
    "-infinity"
  ],
  /* tuple */[
    "FP_zero",
    "0"
  ],
  /* tuple */[
    "FP_zero",
    "0."
  ]
];

var pairs$1 = /* array */[
  /* tuple */[
    3232,
    "32_32.0"
  ],
  /* tuple */[
    1.000,
    "1.000"
  ],
  /* tuple */[
    12.000,
    "12.000"
  ]
];

var suites = Pervasives.$at(from_of_string(of_string), Pervasives.$at(/* constructor */{
          tag: "::",
          "0": /* tuple */[
            "isnan_of_string",
            (function (param) {
                return /* constructor */{
                        tag: "Eq",
                        "0": true,
                        "1": Pervasives.classify_float(Caml_format.caml_float_of_string("nan")) === "FP_nan"
                      };
              })
          ],
          "1": "[]"
        }, Pervasives.$at($$Array.to_list($$Array.mapi((function (i, param) {
                        var b = param[1];
                        var a = param[0];
                        return /* tuple */[
                                Curry._1(Printf.sprintf(/* constructor */{
                                          tag: "Format",
                                          "0": /* constructor */{
                                            tag: "String_literal",
                                            "0": "infinity_of_string ",
                                            "1": /* constructor */{
                                              tag: "Int",
                                              "0": "Int_d",
                                              "1": "No_padding",
                                              "2": "No_precision",
                                              "3": "End_of_format"
                                            }
                                          },
                                          "1": "infinity_of_string %d"
                                        }), i),
                                (function (param) {
                                    return /* constructor */{
                                            tag: "Eq",
                                            "0": a,
                                            "1": Pervasives.classify_float(Caml_format.caml_float_of_string(b))
                                          };
                                  })
                              ];
                      }), pairs)), Pervasives.$at(/* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    "throw",
                    (function (param) {
                        return /* constructor */{
                                tag: "ThrowAny",
                                "0": (function (param) {
                                    Caml_format.caml_float_of_string("");
                                    return /* () */0;
                                  })
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      "format_int",
                      (function (param) {
                          return /* constructor */{
                                  tag: "Eq",
                                  "0": "                              33",
                                  "1": Caml_format.caml_format_int("%32d", 33)
                                };
                        })
                    ],
                    "1": "[]"
                  }
                }, $$Array.to_list($$Array.mapi((function (i, param) {
                            var b = param[1];
                            var a = param[0];
                            return /* tuple */[
                                    Curry._1(Printf.sprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "String_literal",
                                                "0": "normal_float_of_string ",
                                                "1": /* constructor */{
                                                  tag: "Int",
                                                  "0": "Int_d",
                                                  "1": "No_padding",
                                                  "2": "No_precision",
                                                  "3": "End_of_format"
                                                }
                                              },
                                              "1": "normal_float_of_string %d"
                                            }), i),
                                    (function (param) {
                                        return /* constructor */{
                                                tag: "Eq",
                                                "0": a,
                                                "1": Caml_format.caml_float_of_string(b)
                                              };
                                      })
                                  ];
                          }), pairs$1))))));

function ff(param) {
  return Caml_format.caml_format_int("%32d", param);
}

var formatter_suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "fmt_concat",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": Curry._6(Format.asprintf(Pervasives.$caret$caret(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: "Int",
                                    "0": "Int_d",
                                    "1": /* constructor */{
                                      tag: "Lit_padding",
                                      "0": "Zeros",
                                      "1": 3
                                    },
                                    "2": "No_precision",
                                    "3": /* constructor */{
                                      tag: "Char_literal",
                                      "0": /* " " */32,
                                      "1": /* constructor */{
                                        tag: "Scan_get_counter",
                                        "0": "Token_counter",
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              },
                              "1": "%s %03d %L"
                            }, /* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Caml_string",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: "Int",
                                    "0": "Int_d",
                                    "1": /* constructor */{
                                      tag: "Lit_padding",
                                      "0": "Zeros",
                                      "1": 3
                                    },
                                    "2": "No_precision",
                                    "3": /* constructor */{
                                      tag: "Char_literal",
                                      "0": /* " " */32,
                                      "1": /* constructor */{
                                        tag: "Scan_get_counter",
                                        "0": "Token_counter",
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              },
                              "1": "%S %03d %L"
                            })), "32", 33, 33, "a", 33, 3),
                "1": "32 033 33\"a\" 033 3"
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "fmt_gen",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": Curry._8(Format.asprintf(Pervasives.$caret$caret(/* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "Char_literal",
                                    "0": /* " " */32,
                                    "1": /* constructor */{
                                      tag: "Int",
                                      "0": "Int_d",
                                      "1": /* constructor */{
                                        tag: "Lit_padding",
                                        "0": "Zeros",
                                        "1": 3
                                      },
                                      "2": "No_precision",
                                      "3": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* " " */32,
                                        "1": /* constructor */{
                                          tag: "Scan_get_counter",
                                          "0": "Token_counter",
                                          "1": "End_of_format"
                                        }
                                      }
                                    }
                                  }
                                },
                                "1": "%s %03d %L"
                              }, /* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "Caml_string",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "Char_literal",
                                    "0": /* " " */32,
                                    "1": /* constructor */{
                                      tag: "Int",
                                      "0": "Int_d",
                                      "1": /* constructor */{
                                        tag: "Lit_padding",
                                        "0": "Zeros",
                                        "1": 3
                                      },
                                      "2": "No_precision",
                                      "3": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* " " */32,
                                        "1": /* constructor */{
                                          tag: "Scan_get_counter",
                                          "0": "Token_counter",
                                          "1": /* constructor */{
                                            tag: "Char_literal",
                                            "0": /* " " */32,
                                            "1": /* constructor */{
                                              tag: "Alpha",
                                              "0": "End_of_format"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "1": "%S %03d %L %a"
                              })), "32", 33, 33, "a", 33, 3, (function (param, param$1) {
                          return Format.pp_print_list(undefined, Format.pp_print_int, param, param$1);
                        }), /* constructor */{
                        tag: "::",
                        "0": 1,
                        "1": /* constructor */{
                          tag: "::",
                          "0": 2,
                          "1": /* constructor */{
                            tag: "::",
                            "0": 3,
                            "1": "[]"
                          }
                        }
                      }),
                  "1": "32 033 33\"a\" 033 3 12\n3"
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "long_fmt",
        (function (param) {
            return /* constructor */{
                    tag: "Eq",
                    "0": Curry.app(Format.asprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Int",
                                "0": "Int_d",
                                "1": "No_padding",
                                "2": "No_precision",
                                "3": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: "Int",
                                    "0": "Int_i",
                                    "1": "No_padding",
                                    "2": "No_precision",
                                    "3": /* constructor */{
                                      tag: "Char_literal",
                                      "0": /* " " */32,
                                      "1": /* constructor */{
                                        tag: "Int",
                                        "0": "Int_u",
                                        "1": "No_padding",
                                        "2": "No_precision",
                                        "3": /* constructor */{
                                          tag: "Char_literal",
                                          "0": /* " " */32,
                                          "1": /* constructor */{
                                            tag: "Scan_get_counter",
                                            "0": "Char_counter",
                                            "1": /* constructor */{
                                              tag: "Char_literal",
                                              "0": /* " " */32,
                                              "1": /* constructor */{
                                                tag: "Scan_get_counter",
                                                "0": "Line_counter",
                                                "1": /* constructor */{
                                                  tag: "Char_literal",
                                                  "0": /* " " */32,
                                                  "1": /* constructor */{
                                                    tag: "Scan_get_counter",
                                                    "0": "Token_counter",
                                                    "1": /* constructor */{
                                                      tag: "Char_literal",
                                                      "0": /* " " */32,
                                                      "1": /* constructor */{
                                                        tag: "Scan_get_counter",
                                                        "0": "Token_counter",
                                                        "1": /* constructor */{
                                                          tag: "Char_literal",
                                                          "0": /* " " */32,
                                                          "1": /* constructor */{
                                                            tag: "Int",
                                                            "0": "Int_x",
                                                            "1": "No_padding",
                                                            "2": "No_precision",
                                                            "3": /* constructor */{
                                                              tag: "Char_literal",
                                                              "0": /* " " */32,
                                                              "1": /* constructor */{
                                                                tag: "Int",
                                                                "0": "Int_X",
                                                                "1": "No_padding",
                                                                "2": "No_precision",
                                                                "3": /* constructor */{
                                                                  tag: "Char_literal",
                                                                  "0": /* " " */32,
                                                                  "1": /* constructor */{
                                                                    tag: "Int",
                                                                    "0": "Int_o",
                                                                    "1": "No_padding",
                                                                    "2": "No_precision",
                                                                    "3": /* constructor */{
                                                                      tag: "Char_literal",
                                                                      "0": /* " " */32,
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "Char_literal",
                                                                          "0": /* " " */32,
                                                                          "1": /* constructor */{
                                                                            tag: "Caml_string",
                                                                            "0": "No_padding",
                                                                            "1": /* constructor */{
                                                                              tag: "Char_literal",
                                                                              "0": /* " " */32,
                                                                              "1": /* constructor */{
                                                                                tag: "Char",
                                                                                "0": /* constructor */{
                                                                                  tag: "Char_literal",
                                                                                  "0": /* " " */32,
                                                                                  "1": /* constructor */{
                                                                                    tag: "Caml_char",
                                                                                    "0": /* constructor */{
                                                                                      tag: "Char_literal",
                                                                                      "0": /* " " */32,
                                                                                      "1": /* constructor */{
                                                                                        tag: "Float",
                                                                                        "0": "Float_f",
                                                                                        "1": "No_padding",
                                                                                        "2": "No_precision",
                                                                                        "3": /* constructor */{
                                                                                          tag: "Char_literal",
                                                                                          "0": /* " " */32,
                                                                                          "1": /* constructor */{
                                                                                            tag: "Float",
                                                                                            "0": "Float_F",
                                                                                            "1": "No_padding",
                                                                                            "2": "No_precision",
                                                                                            "3": /* constructor */{
                                                                                              tag: "Char_literal",
                                                                                              "0": /* " " */32,
                                                                                              "1": /* constructor */{
                                                                                                tag: "Float",
                                                                                                "0": "Float_e",
                                                                                                "1": "No_padding",
                                                                                                "2": "No_precision",
                                                                                                "3": /* constructor */{
                                                                                                  tag: "Char_literal",
                                                                                                  "0": /* " " */32,
                                                                                                  "1": /* constructor */{
                                                                                                    tag: "Float",
                                                                                                    "0": "Float_E",
                                                                                                    "1": "No_padding",
                                                                                                    "2": "No_precision",
                                                                                                    "3": /* constructor */{
                                                                                                      tag: "Char_literal",
                                                                                                      "0": /* " " */32,
                                                                                                      "1": /* constructor */{
                                                                                                        tag: "Float",
                                                                                                        "0": "Float_g",
                                                                                                        "1": "No_padding",
                                                                                                        "2": "No_precision",
                                                                                                        "3": /* constructor */{
                                                                                                          tag: "Char_literal",
                                                                                                          "0": /* " " */32,
                                                                                                          "1": /* constructor */{
                                                                                                            tag: "Float",
                                                                                                            "0": "Float_G",
                                                                                                            "1": "No_padding",
                                                                                                            "2": "No_precision",
                                                                                                            "3": /* constructor */{
                                                                                                              tag: "Char_literal",
                                                                                                              "0": /* " " */32,
                                                                                                              "1": /* constructor */{
                                                                                                                tag: "Bool",
                                                                                                                "0": /* constructor */{
                                                                                                                  tag: "Char_literal",
                                                                                                                  "0": /* " " */32,
                                                                                                                  "1": /* constructor */{
                                                                                                                    tag: "Bool",
                                                                                                                    "0": /* constructor */{
                                                                                                                      tag: "Char_literal",
                                                                                                                      "0": /* " " */32,
                                                                                                                      "1": /* constructor */{
                                                                                                                        tag: "Int32",
                                                                                                                        "0": "Int_d",
                                                                                                                        "1": "No_padding",
                                                                                                                        "2": "No_precision",
                                                                                                                        "3": /* constructor */{
                                                                                                                          tag: "Char_literal",
                                                                                                                          "0": /* " " */32,
                                                                                                                          "1": /* constructor */{
                                                                                                                            tag: "Int32",
                                                                                                                            "0": "Int_i",
                                                                                                                            "1": "No_padding",
                                                                                                                            "2": "No_precision",
                                                                                                                            "3": /* constructor */{
                                                                                                                              tag: "Char_literal",
                                                                                                                              "0": /* " " */32,
                                                                                                                              "1": /* constructor */{
                                                                                                                                tag: "Int32",
                                                                                                                                "0": "Int_u",
                                                                                                                                "1": "No_padding",
                                                                                                                                "2": "No_precision",
                                                                                                                                "3": /* constructor */{
                                                                                                                                  tag: "Char_literal",
                                                                                                                                  "0": /* " " */32,
                                                                                                                                  "1": /* constructor */{
                                                                                                                                    tag: "Int32",
                                                                                                                                    "0": "Int_x",
                                                                                                                                    "1": "No_padding",
                                                                                                                                    "2": "No_precision",
                                                                                                                                    "3": /* constructor */{
                                                                                                                                      tag: "Char_literal",
                                                                                                                                      "0": /* " " */32,
                                                                                                                                      "1": /* constructor */{
                                                                                                                                        tag: "Int32",
                                                                                                                                        "0": "Int_X",
                                                                                                                                        "1": "No_padding",
                                                                                                                                        "2": "No_precision",
                                                                                                                                        "3": /* constructor */{
                                                                                                                                          tag: "Char_literal",
                                                                                                                                          "0": /* " " */32,
                                                                                                                                          "1": /* constructor */{
                                                                                                                                            tag: "Int32",
                                                                                                                                            "0": "Int_o",
                                                                                                                                            "1": "No_padding",
                                                                                                                                            "2": "No_precision",
                                                                                                                                            "3": /* constructor */{
                                                                                                                                              tag: "Char_literal",
                                                                                                                                              "0": /* " " */32,
                                                                                                                                              "1": /* constructor */{
                                                                                                                                                tag: "Nativeint",
                                                                                                                                                "0": "Int_d",
                                                                                                                                                "1": "No_padding",
                                                                                                                                                "2": "No_precision",
                                                                                                                                                "3": /* constructor */{
                                                                                                                                                  tag: "Char_literal",
                                                                                                                                                  "0": /* " " */32,
                                                                                                                                                  "1": /* constructor */{
                                                                                                                                                    tag: "Nativeint",
                                                                                                                                                    "0": "Int_i",
                                                                                                                                                    "1": "No_padding",
                                                                                                                                                    "2": "No_precision",
                                                                                                                                                    "3": /* constructor */{
                                                                                                                                                      tag: "Char_literal",
                                                                                                                                                      "0": /* " " */32,
                                                                                                                                                      "1": /* constructor */{
                                                                                                                                                        tag: "Nativeint",
                                                                                                                                                        "0": "Int_u",
                                                                                                                                                        "1": "No_padding",
                                                                                                                                                        "2": "No_precision",
                                                                                                                                                        "3": /* constructor */{
                                                                                                                                                          tag: "Char_literal",
                                                                                                                                                          "0": /* " " */32,
                                                                                                                                                          "1": /* constructor */{
                                                                                                                                                            tag: "Nativeint",
                                                                                                                                                            "0": "Int_x",
                                                                                                                                                            "1": "No_padding",
                                                                                                                                                            "2": "No_precision",
                                                                                                                                                            "3": /* constructor */{
                                                                                                                                                              tag: "Char_literal",
                                                                                                                                                              "0": /* " " */32,
                                                                                                                                                              "1": /* constructor */{
                                                                                                                                                                tag: "Nativeint",
                                                                                                                                                                "0": "Int_x",
                                                                                                                                                                "1": "No_padding",
                                                                                                                                                                "2": "No_precision",
                                                                                                                                                                "3": /* constructor */{
                                                                                                                                                                  tag: "Char_literal",
                                                                                                                                                                  "0": /* " " */32,
                                                                                                                                                                  "1": /* constructor */{
                                                                                                                                                                    tag: "Nativeint",
                                                                                                                                                                    "0": "Int_o",
                                                                                                                                                                    "1": "No_padding",
                                                                                                                                                                    "2": "No_precision",
                                                                                                                                                                    "3": /* constructor */{
                                                                                                                                                                      tag: "String_literal",
                                                                                                                                                                      "0": "  ",
                                                                                                                                                                      "1": "End_of_format"
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
                                }
                              },
                              "1": "%d %i %u %n %l %L %N %x %X %o %s %S %c %C %f %F %e %E %g %G %B %b %ld %li %lu %lx %lX %lo %nd %ni %nu %nx %nx %no  "
                            }), [
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          "a",
                          "b",
                          /* "c" */99,
                          /* "d" */100,
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          true,
                          false,
                          0,
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11
                        ]),
                    "1": "1 2 3 4 5 6 7 8 9 12 a \"b\" c 'd' 1.000000 2. 3.000000e+00 4.000000E+00 5 6 true false 0 1 2 3 4 5 6 7 8 9 a 13  "
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "long_fmt_2",
          (function (param) {
              return /* constructor */{
                      tag: "Eq",
                      "0": Curry.app(Format.asprintf(/* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "Formatting_gen",
                                  "0": /* constructor */{
                                    tag: "Open_box",
                                    "0": /* constructor */{
                                      tag: "Format",
                                      "0": "End_of_format",
                                      "1": ""
                                    }
                                  },
                                  "1": /* constructor */{
                                    tag: "Int",
                                    "0": "Int_d",
                                    "1": /* constructor */{
                                      tag: "Lit_padding",
                                      "0": "Right",
                                      "1": 23
                                    },
                                    "2": "No_precision",
                                    "3": /* constructor */{
                                      tag: "Char_literal",
                                      "0": /* " " */32,
                                      "1": /* constructor */{
                                        tag: "Int",
                                        "0": "Int_i",
                                        "1": /* constructor */{
                                          tag: "Lit_padding",
                                          "0": "Right",
                                          "1": 2
                                        },
                                        "2": "No_precision",
                                        "3": /* constructor */{
                                          tag: "Char_literal",
                                          "0": /* " " */32,
                                          "1": /* constructor */{
                                            tag: "Int",
                                            "0": "Int_u",
                                            "1": /* constructor */{
                                              tag: "Lit_padding",
                                              "0": "Right",
                                              "1": 3
                                            },
                                            "2": "No_precision",
                                            "3": /* constructor */{
                                              tag: "Char_literal",
                                              "0": /* " " */32,
                                              "1": /* constructor */{
                                                tag: "Scan_get_counter",
                                                "0": "Char_counter",
                                                "1": /* constructor */{
                                                  tag: "Char_literal",
                                                  "0": /* " " */32,
                                                  "1": /* constructor */{
                                                    tag: "Int",
                                                    "0": "Int_x",
                                                    "1": /* constructor */{
                                                      tag: "Lit_padding",
                                                      "0": "Right",
                                                      "1": 0
                                                    },
                                                    "2": "No_precision",
                                                    "3": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "l ",
                                                      "1": /* constructor */{
                                                        tag: "Int",
                                                        "0": "Int_x",
                                                        "1": /* constructor */{
                                                          tag: "Lit_padding",
                                                          "0": "Right",
                                                          "1": 0
                                                        },
                                                        "2": "No_precision",
                                                        "3": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": "L ",
                                                          "1": /* constructor */{
                                                            tag: "Scan_get_counter",
                                                            "0": "Token_counter",
                                                            "1": /* constructor */{
                                                              tag: "Char_literal",
                                                              "0": /* " " */32,
                                                              "1": /* constructor */{
                                                                tag: "Int",
                                                                "0": "Int_x",
                                                                "1": /* constructor */{
                                                                  tag: "Lit_padding",
                                                                  "0": "Zeros",
                                                                  "1": 3
                                                                },
                                                                "2": "No_precision",
                                                                "3": /* constructor */{
                                                                  tag: "Char_literal",
                                                                  "0": /* " " */32,
                                                                  "1": /* constructor */{
                                                                    tag: "Int",
                                                                    "0": "Int_X",
                                                                    "1": "No_padding",
                                                                    "2": "No_precision",
                                                                    "3": /* constructor */{
                                                                      tag: "Char_literal",
                                                                      "0": /* " " */32,
                                                                      "1": /* constructor */{
                                                                        tag: "Int",
                                                                        "0": "Int_o",
                                                                        "1": "No_padding",
                                                                        "2": "No_precision",
                                                                        "3": /* constructor */{
                                                                          tag: "Char_literal",
                                                                          "0": /* " " */32,
                                                                          "1": /* constructor */{
                                                                            tag: "String",
                                                                            "0": "No_padding",
                                                                            "1": /* constructor */{
                                                                              tag: "Char_literal",
                                                                              "0": /* " " */32,
                                                                              "1": /* constructor */{
                                                                                tag: "Caml_string",
                                                                                "0": "No_padding",
                                                                                "1": /* constructor */{
                                                                                  tag: "Char_literal",
                                                                                  "0": /* " " */32,
                                                                                  "1": /* constructor */{
                                                                                    tag: "Char",
                                                                                    "0": /* constructor */{
                                                                                      tag: "Char_literal",
                                                                                      "0": /* " " */32,
                                                                                      "1": /* constructor */{
                                                                                        tag: "Caml_char",
                                                                                        "0": /* constructor */{
                                                                                          tag: "Char_literal",
                                                                                          "0": /* " " */32,
                                                                                          "1": /* constructor */{
                                                                                            tag: "Float",
                                                                                            "0": "Float_f",
                                                                                            "1": /* constructor */{
                                                                                              tag: "Lit_padding",
                                                                                              "0": "Right",
                                                                                              "1": 3
                                                                                            },
                                                                                            "2": "No_precision",
                                                                                            "3": /* constructor */{
                                                                                              tag: "Char_literal",
                                                                                              "0": /* " " */32,
                                                                                              "1": /* constructor */{
                                                                                                tag: "Float",
                                                                                                "0": "Float_F",
                                                                                                "1": /* constructor */{
                                                                                                  tag: "Lit_padding",
                                                                                                  "0": "Right",
                                                                                                  "1": 2
                                                                                                },
                                                                                                "2": "No_precision",
                                                                                                "3": /* constructor */{
                                                                                                  tag: "Char_literal",
                                                                                                  "0": /* " " */32,
                                                                                                  "1": /* constructor */{
                                                                                                    tag: "Float",
                                                                                                    "0": "Float_e",
                                                                                                    "1": /* constructor */{
                                                                                                      tag: "Lit_padding",
                                                                                                      "0": "Right",
                                                                                                      "1": 2
                                                                                                    },
                                                                                                    "2": "No_precision",
                                                                                                    "3": /* constructor */{
                                                                                                      tag: "Char_literal",
                                                                                                      "0": /* " " */32,
                                                                                                      "1": /* constructor */{
                                                                                                        tag: "Float",
                                                                                                        "0": "Float_E",
                                                                                                        "1": "No_padding",
                                                                                                        "2": "No_precision",
                                                                                                        "3": /* constructor */{
                                                                                                          tag: "Char_literal",
                                                                                                          "0": /* " " */32,
                                                                                                          "1": /* constructor */{
                                                                                                            tag: "Float",
                                                                                                            "0": "Float_g",
                                                                                                            "1": "No_padding",
                                                                                                            "2": "No_precision",
                                                                                                            "3": /* constructor */{
                                                                                                              tag: "Char_literal",
                                                                                                              "0": /* " " */32,
                                                                                                              "1": /* constructor */{
                                                                                                                tag: "Float",
                                                                                                                "0": "Float_G",
                                                                                                                "1": "No_padding",
                                                                                                                "2": "No_precision",
                                                                                                                "3": /* constructor */{
                                                                                                                  tag: "Char_literal",
                                                                                                                  "0": /* " " */32,
                                                                                                                  "1": /* constructor */{
                                                                                                                    tag: "Bool",
                                                                                                                    "0": /* constructor */{
                                                                                                                      tag: "Char_literal",
                                                                                                                      "0": /* " " */32,
                                                                                                                      "1": /* constructor */{
                                                                                                                        tag: "Bool",
                                                                                                                        "0": /* constructor */{
                                                                                                                          tag: "Char_literal",
                                                                                                                          "0": /* " " */32,
                                                                                                                          "1": /* constructor */{
                                                                                                                            tag: "Int32",
                                                                                                                            "0": "Int_d",
                                                                                                                            "1": "No_padding",
                                                                                                                            "2": "No_precision",
                                                                                                                            "3": /* constructor */{
                                                                                                                              tag: "Char_literal",
                                                                                                                              "0": /* " " */32,
                                                                                                                              "1": /* constructor */{
                                                                                                                                tag: "Int32",
                                                                                                                                "0": "Int_i",
                                                                                                                                "1": "No_padding",
                                                                                                                                "2": "No_precision",
                                                                                                                                "3": /* constructor */{
                                                                                                                                  tag: "Char_literal",
                                                                                                                                  "0": /* " " */32,
                                                                                                                                  "1": /* constructor */{
                                                                                                                                    tag: "Int32",
                                                                                                                                    "0": "Int_u",
                                                                                                                                    "1": "No_padding",
                                                                                                                                    "2": "No_precision",
                                                                                                                                    "3": /* constructor */{
                                                                                                                                      tag: "Char_literal",
                                                                                                                                      "0": /* " " */32,
                                                                                                                                      "1": /* constructor */{
                                                                                                                                        tag: "Int32",
                                                                                                                                        "0": "Int_x",
                                                                                                                                        "1": "No_padding",
                                                                                                                                        "2": "No_precision",
                                                                                                                                        "3": /* constructor */{
                                                                                                                                          tag: "Char_literal",
                                                                                                                                          "0": /* " " */32,
                                                                                                                                          "1": /* constructor */{
                                                                                                                                            tag: "Int32",
                                                                                                                                            "0": "Int_X",
                                                                                                                                            "1": "No_padding",
                                                                                                                                            "2": "No_precision",
                                                                                                                                            "3": /* constructor */{
                                                                                                                                              tag: "Char_literal",
                                                                                                                                              "0": /* " " */32,
                                                                                                                                              "1": /* constructor */{
                                                                                                                                                tag: "Int32",
                                                                                                                                                "0": "Int_o",
                                                                                                                                                "1": "No_padding",
                                                                                                                                                "2": "No_precision",
                                                                                                                                                "3": /* constructor */{
                                                                                                                                                  tag: "Char_literal",
                                                                                                                                                  "0": /* " " */32,
                                                                                                                                                  "1": /* constructor */{
                                                                                                                                                    tag: "Nativeint",
                                                                                                                                                    "0": "Int_d",
                                                                                                                                                    "1": "No_padding",
                                                                                                                                                    "2": "No_precision",
                                                                                                                                                    "3": /* constructor */{
                                                                                                                                                      tag: "Char_literal",
                                                                                                                                                      "0": /* " " */32,
                                                                                                                                                      "1": /* constructor */{
                                                                                                                                                        tag: "Nativeint",
                                                                                                                                                        "0": "Int_i",
                                                                                                                                                        "1": "No_padding",
                                                                                                                                                        "2": "No_precision",
                                                                                                                                                        "3": /* constructor */{
                                                                                                                                                          tag: "Char_literal",
                                                                                                                                                          "0": /* " " */32,
                                                                                                                                                          "1": /* constructor */{
                                                                                                                                                            tag: "Nativeint",
                                                                                                                                                            "0": "Int_u",
                                                                                                                                                            "1": "No_padding",
                                                                                                                                                            "2": "No_precision",
                                                                                                                                                            "3": /* constructor */{
                                                                                                                                                              tag: "Char_literal",
                                                                                                                                                              "0": /* " " */32,
                                                                                                                                                              "1": /* constructor */{
                                                                                                                                                                tag: "Nativeint",
                                                                                                                                                                "0": "Int_x",
                                                                                                                                                                "1": "No_padding",
                                                                                                                                                                "2": "No_precision",
                                                                                                                                                                "3": /* constructor */{
                                                                                                                                                                  tag: "Char_literal",
                                                                                                                                                                  "0": /* " " */32,
                                                                                                                                                                  "1": /* constructor */{
                                                                                                                                                                    tag: "Nativeint",
                                                                                                                                                                    "0": "Int_x",
                                                                                                                                                                    "1": "No_padding",
                                                                                                                                                                    "2": "No_precision",
                                                                                                                                                                    "3": /* constructor */{
                                                                                                                                                                      tag: "Char_literal",
                                                                                                                                                                      "0": /* " " */32,
                                                                                                                                                                      "1": /* constructor */{
                                                                                                                                                                        tag: "Nativeint",
                                                                                                                                                                        "0": "Int_o",
                                                                                                                                                                        "1": "No_padding",
                                                                                                                                                                        "2": "No_precision",
                                                                                                                                                                        "3": /* constructor */{
                                                                                                                                                                          tag: "String_literal",
                                                                                                                                                                          "0": "  ",
                                                                                                                                                                          "1": /* constructor */{
                                                                                                                                                                            tag: "Formatting_lit",
                                                                                                                                                                            "0": "Close_box",
                                                                                                                                                                            "1": "End_of_format"
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
                                      }
                                    }
                                  }
                                },
                                "1": "@[%23d %2i %3u %4n %0xl %0xL %N %03x %X %o %s %S %c %C %3f %2F %2e %E %g %G %B %b %ld %li %lu %lx %lX %lo %nd %ni %nu %nx %nx %no  @]"
                              }), [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            "a",
                            "b",
                            /* "c" */99,
                            /* "d" */100,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            true,
                            false,
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11
                          ]),
                      "1": "                      1  2   3 4 5l 6L 7 008 9 12 a \"b\" c 'd' 1.000000 2. 3.000000e+00 4.000000E+00 5 6 true false 0 1 2 3 4 5 6 7 8 9 a 13  "
                    };
            })
        ],
        "1": /* constructor */{
          tag: "::",
          "0": /* tuple */[
            "width_1",
            (function (param) {
                return /* constructor */{
                        tag: "Eq",
                        "0": Curry._1(Format.asprintf(/* constructor */{
                                  tag: "Format",
                                  "0": /* constructor */{
                                    tag: "Int",
                                    "0": "Int_d",
                                    "1": /* constructor */{
                                      tag: "Lit_padding",
                                      "0": "Zeros",
                                      "1": 14
                                    },
                                    "2": "No_precision",
                                    "3": "End_of_format"
                                  },
                                  "1": "%014d"
                                }), 32),
                        "1": "00000000000032"
                      };
              })
          ],
          "1": /* constructor */{
            tag: "::",
            "0": /* tuple */[
              "width_2",
              (function (param) {
                  return /* constructor */{
                          tag: "Eq",
                          "0": Curry._1(Format.asprintf(/* constructor */{
                                    tag: "Format",
                                    "0": /* constructor */{
                                      tag: "Float",
                                      "0": "Float_f",
                                      "1": /* constructor */{
                                        tag: "Lit_padding",
                                        "0": "Right",
                                        "1": 10
                                      },
                                      "2": /* constructor */{
                                        tag: "Lit_precision",
                                        "0": 3
                                      },
                                      "3": "End_of_format"
                                    },
                                    "1": "%10.3f"
                                  }), 32333.02),
                          "1": " 32333.020"
                        };
                })
            ],
            "1": /* constructor */{
              tag: "::",
              "0": /* tuple */[
                "alternate_1",
                (function (param) {
                    return /* constructor */{
                            tag: "Eq",
                            "0": Curry._1(Format.asprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "Int",
                                        "0": "Int_x",
                                        "1": /* constructor */{
                                          tag: "Lit_padding",
                                          "0": "Right",
                                          "1": 0
                                        },
                                        "2": "No_precision",
                                        "3": "End_of_format"
                                      },
                                      "1": "%0x"
                                    }), 32333),
                            "1": "7e4d"
                          };
                  })
              ],
              "1": /* constructor */{
                tag: "::",
                "0": /* tuple */[
                  "alternate_2",
                  (function (param) {
                      return /* constructor */{
                              tag: "Eq",
                              "0": Curry._1(Format.asprintf(/* constructor */{
                                        tag: "Format",
                                        "0": /* constructor */{
                                          tag: "Int",
                                          "0": "Int_Cx",
                                          "1": /* constructor */{
                                            tag: "Lit_padding",
                                            "0": "Right",
                                            "1": 0
                                          },
                                          "2": "No_precision",
                                          "3": "End_of_format"
                                        },
                                        "1": "%#0x"
                                      }), 32333),
                              "1": "0x7e4d"
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    "alternate_3",
                    (function (param) {
                        return /* constructor */{
                                tag: "Eq",
                                "0": /* tuple */[
                                  Curry._1(Format.asprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "Int",
                                              "0": "Int_Co",
                                              "1": "No_padding",
                                              "2": "No_precision",
                                              "3": "End_of_format"
                                            },
                                            "1": "%#o"
                                          }), 32),
                                  Curry._1(Format.asprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "Int",
                                              "0": "Int_o",
                                              "1": "No_padding",
                                              "2": "No_precision",
                                              "3": "End_of_format"
                                            },
                                            "1": "%o"
                                          }), 32)
                                ],
                                "1": /* tuple */[
                                  "040",
                                  "40"
                                ]
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      "justify_0",
                      (function (param) {
                          return /* constructor */{
                                  tag: "Eq",
                                  "0": Caml_format.caml_format_int("%-8d", 32),
                                  "1": "32      "
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* tuple */[
                        "sign_p",
                        (function (param) {
                            return /* constructor */{
                                    tag: "Eq",
                                    "0": Curry._1(Format.asprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "Int",
                                                "0": "Int_pd",
                                                "1": /* constructor */{
                                                  tag: "Lit_padding",
                                                  "0": "Right",
                                                  "1": 4
                                                },
                                                "2": "No_precision",
                                                "3": "End_of_format"
                                              },
                                              "1": "%+4d"
                                            }), 32),
                                    "1": " +32"
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: "::",
                        "0": /* tuple */[
                          "sign_2p",
                          (function (param) {
                              return /* constructor */{
                                      tag: "Eq",
                                      "0": Curry._1(Format.asprintf(/* constructor */{
                                                tag: "Format",
                                                "0": /* constructor */{
                                                  tag: "Int",
                                                  "0": "Int_sd",
                                                  "1": /* constructor */{
                                                    tag: "Lit_padding",
                                                    "0": "Right",
                                                    "1": 4
                                                  },
                                                  "2": "No_precision",
                                                  "3": "End_of_format"
                                                },
                                                "1": "% 4d"
                                              }), 32),
                                      "1": "  32"
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: "::",
                          "0": /* tuple */[
                            "sign_3p",
                            (function (param) {
                                return /* constructor */{
                                        tag: "Eq",
                                        "0": Curry._1(Format.asprintf(/* constructor */{
                                                  tag: "Format",
                                                  "0": /* constructor */{
                                                    tag: "Int32",
                                                    "0": "Int_u",
                                                    "1": "No_padding",
                                                    "2": "No_precision",
                                                    "3": "End_of_format"
                                                  },
                                                  "1": "%lu"
                                                }), -1),
                                        "1": "4294967295"
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: "::",
                            "0": /* tuple */[
                              "sign_4p",
                              (function (param) {
                                  return /* constructor */{
                                          tag: "Eq",
                                          "0": Curry._1(Format.asprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "Int32",
                                                      "0": "Int_d",
                                                      "1": "No_padding",
                                                      "2": "No_precision",
                                                      "3": "End_of_format"
                                                    },
                                                    "1": "%ld"
                                                  }), -1),
                                          "1": "-1"
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: "::",
                              "0": /* tuple */[
                                "width_3",
                                (function (param) {
                                    return /* constructor */{
                                            tag: "Eq",
                                            "0": Caml_format.caml_format_int("%032d", 32),
                                            "1": "00000000000000000000000000000032"
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: "::",
                                "0": /* tuple */[
                                  "prec_1",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: "Eq",
                                              "0": Curry._1(Format.asprintf(/* constructor */{
                                                        tag: "Format",
                                                        "0": /* constructor */{
                                                          tag: "Int",
                                                          "0": "Int_d",
                                                          "1": "No_padding",
                                                          "2": /* constructor */{
                                                            tag: "Lit_precision",
                                                            "0": 10
                                                          },
                                                          "3": "End_of_format"
                                                        },
                                                        "1": "%.10d"
                                                      }), 32),
                                              "1": "0000000032"
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: "::",
                                  "0": /* tuple */[
                                    "prec_2",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: "Eq",
                                                "0": Caml_format.caml_format_int("%.10d", 32),
                                                "1": "0000000032"
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: "::",
                                    "0": /* tuple */[
                                      "prec_3",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: "Eq",
                                                  "0": Caml_format.caml_format_int("%.d", 32),
                                                  "1": "32"
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: "::",
                                      "0": /* tuple */[
                                        "prec_4",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: "Eq",
                                                    "0": Caml_format.caml_format_int("%.d", 32),
                                                    "1": "32"
                                                  };
                                          })
                                      ],
                                      "1": "[]"
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

var float_data = /* array */[
  /* tuple */[
    "%f",
    32,
    "32.000000"
  ],
  /* tuple */[
    "%f",
    Number.NaN,
    "nan"
  ],
  /* tuple */[
    "%f",
    Number.POSITIVE_INFINITY,
    "inf"
  ],
  /* tuple */[
    "%f",
    Number.NEGATIVE_INFINITY,
    "-inf"
  ],
  /* tuple */[
    "%1.e",
    13000,
    "1e+04"
  ],
  /* tuple */[
    "%1.3e",
    2.3e-05,
    "2.300e-05"
  ],
  /* tuple */[
    "%3.10e",
    3e+56,
    "3.0000000000e+56"
  ],
  /* tuple */[
    "%3.10f",
    20000000000,
    "20000000000.0000000000"
  ],
  /* tuple */[
    "%3.3f",
    -3300,
    "-3300.000"
  ],
  /* tuple */[
    "%1.g",
    13000,
    "1e+04"
  ],
  /* tuple */[
    "%1.3g",
    2.3e-05,
    "2.3e-05"
  ],
  /* tuple */[
    "%3.10g",
    3e+56,
    "3e+56"
  ],
  /* tuple */[
    "%3.10g",
    20000000000,
    "2e+10"
  ],
  /* tuple */[
    "%3.3g",
    -3300,
    "-3.3e+03"
  ],
  /* tuple */[
    "%3.3g",
    -0.0033,
    "-0.0033"
  ],
  /* tuple */[
    "%3.10g",
    30000000000,
    "3e+10"
  ],
  /* tuple */[
    "%3.0g",
    30000000000,
    "3e+10"
  ],
  /* tuple */[
    "%3.g",
    30000000000,
    "3e+10"
  ],
  /* tuple */[
    "%3.g",
    3,
    "  3"
  ],
  /* tuple */[
    "%1.1g",
    2.1,
    "2"
  ],
  /* tuple */[
    "%1.2g",
    2.1,
    "2.1"
  ]
];

function ident(ppf, s) {
  return Curry._1(Format.fprintf(ppf, /* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": "End_of_format"
                  },
                  "1": "%s"
                }), s);
}

function kwd(ppf, s) {
  return Curry._1(Format.fprintf(ppf, /* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": "End_of_format"
                  },
                  "1": "%s"
                }), s);
}

function pr_exp0(ppf, lam) {
  switch (/* XXX */lam.tag) {
    case "Var" :
        return Curry._2(Format.fprintf(ppf, /* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "Alpha",
                          "0": "End_of_format"
                        },
                        "1": "%a"
                      }), ident, lam[0]);
    case "Lambda" :
    case "Apply" :
        break;
    
  }
  return Curry._2(Format.fprintf(ppf, /* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Formatting_gen",
                    "0": /* constructor */{
                      tag: "Open_box",
                      "0": /* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "<1>",
                          "1": "End_of_format"
                        },
                        "1": "<1>"
                      }
                    },
                    "1": /* constructor */{
                      tag: "Char_literal",
                      "0": /* "(" */40,
                      "1": /* constructor */{
                        tag: "Alpha",
                        "0": /* constructor */{
                          tag: "Char_literal",
                          "0": /* ")" */41,
                          "1": /* constructor */{
                            tag: "Formatting_lit",
                            "0": "Close_box",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  },
                  "1": "@[<1>(%a)@]"
                }), pr_lambda, lam);
}

function pr_app(ppf, e) {
  return Curry._2(Format.fprintf(ppf, /* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Formatting_gen",
                    "0": /* constructor */{
                      tag: "Open_box",
                      "0": /* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "<2>",
                          "1": "End_of_format"
                        },
                        "1": "<2>"
                      }
                    },
                    "1": /* constructor */{
                      tag: "Alpha",
                      "0": /* constructor */{
                        tag: "Formatting_lit",
                        "0": "Close_box",
                        "1": "End_of_format"
                      }
                    }
                  },
                  "1": "@[<2>%a@]"
                }), pr_other_applications, e);
}

function pr_other_applications(ppf, f) {
  switch (/* XXX */f.tag) {
    case "Lambda" :
    case "Var" :
        return pr_exp0(ppf, f);
    case "Apply" :
        return Curry._4(Format.fprintf(ppf, /* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "Alpha",
                          "0": /* constructor */{
                            tag: "Formatting_lit",
                            "0": /* constructor */{
                              tag: "Break",
                              "0": "@ ",
                              "1": 1,
                              "2": 0
                            },
                            "1": /* constructor */{
                              tag: "Alpha",
                              "0": "End_of_format"
                            }
                          }
                        },
                        "1": "%a@ %a"
                      }), pr_app, f[0], pr_exp0, f[1]);
    
  }
}

function pr_lambda(ppf, e) {
  switch (/* XXX */e.tag) {
    case "Lambda" :
        return Curry._8(Format.fprintf(ppf, /* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "Formatting_gen",
                          "0": /* constructor */{
                            tag: "Open_box",
                            "0": /* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "<1>",
                                "1": "End_of_format"
                              },
                              "1": "<1>"
                            }
                          },
                          "1": /* constructor */{
                            tag: "Alpha",
                            "0": /* constructor */{
                              tag: "Alpha",
                              "0": /* constructor */{
                                tag: "Alpha",
                                "0": /* constructor */{
                                  tag: "Formatting_lit",
                                  "0": /* constructor */{
                                    tag: "Break",
                                    "0": "@ ",
                                    "1": 1,
                                    "2": 0
                                  },
                                  "1": /* constructor */{
                                    tag: "Alpha",
                                    "0": /* constructor */{
                                      tag: "Formatting_lit",
                                      "0": "Close_box",
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "1": "@[<1>%a%a%a@ %a@]"
                      }), kwd, "\\", ident, e[0], kwd, ".", pr_lambda, e[1]);
    case "Var" :
    case "Apply" :
        return pr_app(ppf, e);
    
  }
}

var string_of_lambda = Curry._1(Format.asprintf(/* constructor */{
          tag: "Format",
          "0": /* constructor */{
            tag: "Alpha",
            "0": "End_of_format"
          },
          "1": "%a"
        }), pr_lambda);

var Lambda_suites = {
  ident: ident,
  kwd: kwd,
  pr_exp0: pr_exp0,
  pr_app: pr_app,
  pr_other_applications: pr_other_applications,
  pr_lambda: pr_lambda,
  string_of_lambda: string_of_lambda
};

var lambda_suites = /* array */[
  /* tuple */[
    /* constructor */{
      tag: "Var",
      "0": "x"
    },
    "x"
  ],
  /* tuple */[
    /* constructor */{
      tag: "Apply",
      "0": /* constructor */{
        tag: "Var",
        "0": "x"
      },
      "1": /* constructor */{
        tag: "Var",
        "0": "y"
      }
    },
    "x y"
  ],
  /* tuple */[
    /* constructor */{
      tag: "Lambda",
      "0": "z",
      "1": /* constructor */{
        tag: "Apply",
        "0": /* constructor */{
          tag: "Var",
          "0": "x"
        },
        "1": /* constructor */{
          tag: "Var",
          "0": "y"
        }
      }
    },
    "\\z. x y"
  ],
  /* tuple */[
    /* constructor */{
      tag: "Lambda",
      "0": "z",
      "1": /* constructor */{
        tag: "Lambda",
        "0": "z",
        "1": /* constructor */{
          tag: "Apply",
          "0": /* constructor */{
            tag: "Var",
            "0": "x"
          },
          "1": /* constructor */{
            tag: "Var",
            "0": "y"
          }
        }
      }
    },
    "\\z. \\z. x y"
  ]
];

function from_lambda_pairs(p) {
  return $$Array.to_list($$Array.mapi((function (i, param) {
                    var b = param[1];
                    var a = param[0];
                    return /* tuple */[
                            Curry._1(Printf.sprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "String_literal",
                                        "0": "lambda_print ",
                                        "1": /* constructor */{
                                          tag: "Int",
                                          "0": "Int_d",
                                          "1": "No_padding",
                                          "2": "No_precision",
                                          "3": "End_of_format"
                                        }
                                      },
                                      "1": "lambda_print %d"
                                    }), i),
                            (function (param) {
                                return /* constructor */{
                                        tag: "Eq",
                                        "0": Curry._1(string_of_lambda, a),
                                        "1": b
                                      };
                              })
                          ];
                  }), lambda_suites));
}

var ksprintf_suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "ksprintf",
    (function (param) {
        var f = function (fmt) {
          return Format.ksprintf((function (x) {
                        return x + x;
                      }), fmt);
        };
        return /* constructor */{
                tag: "Eq",
                "0": Curry._2(f(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* " " */32,
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "String_literal",
                                  "0": " a ",
                                  "1": "End_of_format"
                                }
                              }
                            }
                          },
                          "1": "%s %s a "
                        }), "x", "xx"),
                "1": "x xx a x xx a "
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "sprintf",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": Curry._2(Format.sprintf(/* constructor */{
                            tag: "Format",
                            "0": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "Char_literal",
                                "0": /* " " */32,
                                "1": /* constructor */{
                                  tag: "Caml_string",
                                  "0": "No_padding",
                                  "1": "End_of_format"
                                }
                              }
                            },
                            "1": "%s %S"
                          }), "x", "X"),
                  "1": "x \"X\""
                };
        })
    ],
    "1": "[]"
  }
};

var int64_suites = /* constructor */{
  tag: "::",
  "0": /* tuple */[
    "i32_simple",
    (function (param) {
        return /* constructor */{
                tag: "Eq",
                "0": Curry._1(Format.asprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "Nativeint",
                            "0": "Int_x",
                            "1": "No_padding",
                            "2": "No_precision",
                            "3": "End_of_format"
                          },
                          "1": "%nx"
                        }), 4294967295),
                "1": "ffffffff"
              };
      })
  ],
  "1": /* constructor */{
    tag: "::",
    "0": /* tuple */[
      "i32_simple1",
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": Curry._1(Format.asprintf(/* constructor */{
                            tag: "Format",
                            "0": /* constructor */{
                              tag: "Nativeint",
                              "0": "Int_o",
                              "1": "No_padding",
                              "2": "No_precision",
                              "3": "End_of_format"
                            },
                            "1": "%no"
                          }), 4294967295),
                  "1": "37777777777"
                };
        })
    ],
    "1": /* constructor */{
      tag: "::",
      "0": /* tuple */[
        "i64_simple",
        (function (param) {
            return /* constructor */{
                    tag: "Eq",
                    "0": Curry._1(Format.asprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Int64",
                                "0": "Int_d",
                                "1": "No_padding",
                                "2": "No_precision",
                                "3": "End_of_format"
                              },
                              "1": "%Ld"
                            }), /* int64 */[
                          /* hi */0,
                          /* lo */3
                        ]),
                    "1": "3"
                  };
          })
      ],
      "1": /* constructor */{
        tag: "::",
        "0": /* tuple */[
          "i64_simple2",
          (function (param) {
              return /* constructor */{
                      tag: "Eq",
                      "0": Curry._1(Format.asprintf(/* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "Int64",
                                  "0": "Int_x",
                                  "1": "No_padding",
                                  "2": "No_precision",
                                  "3": "End_of_format"
                                },
                                "1": "%Lx"
                              }), /* int64 */[
                            /* hi */0,
                            /* lo */33
                          ]),
                      "1": "21"
                    };
            })
        ],
        "1": /* constructor */{
          tag: "::",
          "0": /* tuple */[
            "i64_simple3",
            (function (param) {
                return /* constructor */{
                        tag: "Eq",
                        "0": Curry._1(Format.asprintf(/* constructor */{
                                  tag: "Format",
                                  "0": /* constructor */{
                                    tag: "Int64",
                                    "0": "Int_i",
                                    "1": "No_padding",
                                    "2": "No_precision",
                                    "3": "End_of_format"
                                  },
                                  "1": "%Li"
                                }), /* int64 */[
                              /* hi */0,
                              /* lo */33
                            ]),
                        "1": "33"
                      };
              })
          ],
          "1": /* constructor */{
            tag: "::",
            "0": /* tuple */[
              "i64_simple4",
              (function (param) {
                  return /* constructor */{
                          tag: "Eq",
                          "0": Curry._1(Format.asprintf(/* constructor */{
                                    tag: "Format",
                                    "0": /* constructor */{
                                      tag: "Int64",
                                      "0": "Int_X",
                                      "1": "No_padding",
                                      "2": "No_precision",
                                      "3": "End_of_format"
                                    },
                                    "1": "%LX"
                                  }), /* int64 */[
                                /* hi */0,
                                /* lo */44
                              ]),
                          "1": "2C"
                        };
                })
            ],
            "1": /* constructor */{
              tag: "::",
              "0": /* tuple */[
                "i64_simple5",
                (function (param) {
                    return /* constructor */{
                            tag: "Eq",
                            "0": Curry._1(Format.asprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "Int64",
                                        "0": "Int_x",
                                        "1": "No_padding",
                                        "2": "No_precision",
                                        "3": "End_of_format"
                                      },
                                      "1": "%Lx"
                                    }), /* int64 */[
                                  /* hi */0,
                                  /* lo */44
                                ]),
                            "1": "2c"
                          };
                  })
              ],
              "1": /* constructor */{
                tag: "::",
                "0": /* tuple */[
                  "i64_simple6",
                  (function (param) {
                      return /* constructor */{
                              tag: "Eq",
                              "0": Curry._2(Format.asprintf(/* constructor */{
                                        tag: "Format",
                                        "0": /* constructor */{
                                          tag: "Int64",
                                          "0": "Int_x",
                                          "1": /* constructor */{
                                            tag: "Arg_padding",
                                            "0": "Right"
                                          },
                                          "2": "No_precision",
                                          "3": "End_of_format"
                                        },
                                        "1": "%*Lx"
                                      }), 5, /* int64 */[
                                    /* hi */0,
                                    /* lo */44
                                  ]),
                              "1": "   2c"
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: "::",
                  "0": /* tuple */[
                    "i64_simple7",
                    (function (param) {
                        return /* constructor */{
                                tag: "Eq",
                                "0": Caml_format.caml_int64_format("%d", /* int64 */[
                                      /* hi */0,
                                      /* lo */3333
                                    ]),
                                "1": "3333"
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: "::",
                    "0": /* tuple */[
                      "i64_simple8",
                      (function (param) {
                          return /* constructor */{
                                  tag: "Eq",
                                  "0": Curry._2(Format.asprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "Int64",
                                              "0": "Int_d",
                                              "1": "No_padding",
                                              "2": "No_precision",
                                              "3": /* constructor */{
                                                tag: "Int64",
                                                "0": "Int_d",
                                                "1": /* constructor */{
                                                  tag: "Lit_padding",
                                                  "0": "Zeros",
                                                  "1": 18
                                                },
                                                "2": "No_precision",
                                                "3": "End_of_format"
                                              }
                                            },
                                            "1": "%Ld%018Ld"
                                          }), /* int64 */[
                                        /* hi */0,
                                        /* lo */3
                                      ], /* int64 */[
                                        /* hi */0,
                                        /* lo */3
                                      ]),
                                  "1": "3000000000000000003"
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: "::",
                      "0": /* tuple */[
                        "i64_simple9",
                        (function (param) {
                            return /* constructor */{
                                    tag: "Eq",
                                    "0": Curry._2(Format.asprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "Int64",
                                                "0": "Int_d",
                                                "1": "No_padding",
                                                "2": "No_precision",
                                                "3": /* constructor */{
                                                  tag: "Int64",
                                                  "0": "Int_d",
                                                  "1": /* constructor */{
                                                    tag: "Lit_padding",
                                                    "0": "Zeros",
                                                    "1": 18
                                                  },
                                                  "2": "No_precision",
                                                  "3": "End_of_format"
                                                }
                                              },
                                              "1": "%Ld%018Ld"
                                            }), /* int64 */[
                                          /* hi */107288,
                                          /* lo */1548746752
                                        ], /* int64 */[
                                          /* hi */0,
                                          /* lo */0
                                        ]),
                                    "1": "460800000000000000000000000000000"
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: "::",
                        "0": /* tuple */[
                          "i64_simple10",
                          (function (param) {
                              return /* constructor */{
                                      tag: "Eq",
                                      "0": Curry._1(Format.asprintf(/* constructor */{
                                                tag: "Format",
                                                "0": /* constructor */{
                                                  tag: "Int64",
                                                  "0": "Int_x",
                                                  "1": "No_padding",
                                                  "2": "No_precision",
                                                  "3": "End_of_format"
                                                },
                                                "1": "%Lx"
                                              }), Int64.max_int),
                                      "1": "7fffffffffffffff"
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: "::",
                          "0": /* tuple */[
                            "i64_simple15",
                            (function (param) {
                                return /* constructor */{
                                        tag: "Eq",
                                        "0": Curry._1(Format.asprintf(/* constructor */{
                                                  tag: "Format",
                                                  "0": /* constructor */{
                                                    tag: "Int64",
                                                    "0": "Int_d",
                                                    "1": "No_padding",
                                                    "2": "No_precision",
                                                    "3": "End_of_format"
                                                  },
                                                  "1": "%Ld"
                                                }), /* int64 */[
                                              /* hi */-1,
                                              /* lo */4294967295
                                            ]),
                                        "1": "-1"
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: "::",
                            "0": /* tuple */[
                              "i64_simple16",
                              (function (param) {
                                  return /* constructor */{
                                          tag: "Eq",
                                          "0": Curry._1(Format.asprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "Int64",
                                                      "0": "Int_d",
                                                      "1": "No_padding",
                                                      "2": "No_precision",
                                                      "3": "End_of_format"
                                                    },
                                                    "1": "%Ld"
                                                  }), /* int64 */[
                                                /* hi */-1,
                                                /* lo */4294956185
                                              ]),
                                          "1": "-11111"
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: "::",
                              "0": /* tuple */[
                                "i64_simple14",
                                (function (param) {
                                    return /* constructor */{
                                            tag: "Eq",
                                            "0": Curry._1(Format.asprintf(/* constructor */{
                                                      tag: "Format",
                                                      "0": /* constructor */{
                                                        tag: "Int64",
                                                        "0": "Int_X",
                                                        "1": "No_padding",
                                                        "2": "No_precision",
                                                        "3": "End_of_format"
                                                      },
                                                      "1": "%LX"
                                                    }), /* int64 */[
                                                  /* hi */-1,
                                                  /* lo */4294967295
                                                ]),
                                            "1": "FFFFFFFFFFFFFFFF"
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: "::",
                                "0": /* tuple */[
                                  "i64_simple17",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: "Eq",
                                              "0": Curry._1(Format.asprintf(/* constructor */{
                                                        tag: "Format",
                                                        "0": /* constructor */{
                                                          tag: "Int64",
                                                          "0": "Int_x",
                                                          "1": "No_padding",
                                                          "2": "No_precision",
                                                          "3": "End_of_format"
                                                        },
                                                        "1": "%Lx"
                                                      }), /* int64 */[
                                                    /* hi */-1,
                                                    /* lo */4294967295
                                                  ]),
                                              "1": "ffffffffffffffff"
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: "::",
                                  "0": /* tuple */[
                                    "i64_simple11",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: "Eq",
                                                "0": Curry._1(Format.asprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "Int64",
                                                            "0": "Int_X",
                                                            "1": "No_padding",
                                                            "2": "No_precision",
                                                            "3": "End_of_format"
                                                          },
                                                          "1": "%LX"
                                                        }), Int64.max_int),
                                                "1": "7FFFFFFFFFFFFFFF"
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: "::",
                                    "0": /* tuple */[
                                      "i64_simple12",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: "Eq",
                                                  "0": Curry._1(Format.asprintf(/* constructor */{
                                                            tag: "Format",
                                                            "0": /* constructor */{
                                                              tag: "Int64",
                                                              "0": "Int_X",
                                                              "1": "No_padding",
                                                              "2": "No_precision",
                                                              "3": "End_of_format"
                                                            },
                                                            "1": "%LX"
                                                          }), Int64.min_int),
                                                  "1": "8000000000000000"
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: "::",
                                      "0": /* tuple */[
                                        "i64_simple17",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: "Eq",
                                                    "0": Curry._1(Format.asprintf(/* constructor */{
                                                              tag: "Format",
                                                              "0": /* constructor */{
                                                                tag: "Int64",
                                                                "0": "Int_u",
                                                                "1": "No_padding",
                                                                "2": "No_precision",
                                                                "3": "End_of_format"
                                                              },
                                                              "1": "%Lu"
                                                            }), /* int64 */[
                                                          /* hi */-1,
                                                          /* lo */4294967295
                                                        ]),
                                                    "1": "18446744073709551615"
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: "::",
                                        "0": /* tuple */[
                                          "i64_simple21",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: "Eq",
                                                      "0": Curry._1(Format.asprintf(/* constructor */{
                                                                tag: "Format",
                                                                "0": /* constructor */{
                                                                  tag: "Int64",
                                                                  "0": "Int_u",
                                                                  "1": "No_padding",
                                                                  "2": "No_precision",
                                                                  "3": "End_of_format"
                                                                },
                                                                "1": "%Lu"
                                                              }), /* int64 */[
                                                            /* hi */-1,
                                                            /* lo */4294957296
                                                          ]),
                                                      "1": "18446744073709541616"
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: "::",
                                          "0": /* tuple */[
                                            "i64_simple19",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: "Eq",
                                                        "0": Curry._1(Format.asprintf(/* constructor */{
                                                                  tag: "Format",
                                                                  "0": /* constructor */{
                                                                    tag: "Int64",
                                                                    "0": "Int_o",
                                                                    "1": "No_padding",
                                                                    "2": "No_precision",
                                                                    "3": "End_of_format"
                                                                  },
                                                                  "1": "%Lo"
                                                                }), Int64.min_int),
                                                        "1": "1000000000000000000000"
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: "::",
                                            "0": /* tuple */[
                                              "i64_simple13",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: "Eq",
                                                          "0": Curry._1(Format.asprintf(/* constructor */{
                                                                    tag: "Format",
                                                                    "0": /* constructor */{
                                                                      tag: "Int64",
                                                                      "0": "Int_X",
                                                                      "1": "No_padding",
                                                                      "2": "No_precision",
                                                                      "3": "End_of_format"
                                                                    },
                                                                    "1": "%LX"
                                                                  }), Caml_int64.add(Int64.min_int, /* int64 */[
                                                                    /* hi */0,
                                                                    /* lo */1
                                                                  ])),
                                                          "1": "8000000000000001"
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: "::",
                                              "0": /* tuple */[
                                                "i64_simple20",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: "Eq",
                                                            "0": Curry._1(Format.asprintf(/* constructor */{
                                                                      tag: "Format",
                                                                      "0": /* constructor */{
                                                                        tag: "Int64",
                                                                        "0": "Int_x",
                                                                        "1": /* constructor */{
                                                                          tag: "Lit_padding",
                                                                          "0": "Right",
                                                                          "1": 12
                                                                        },
                                                                        "2": "No_precision",
                                                                        "3": "End_of_format"
                                                                      },
                                                                      "1": "%12Lx"
                                                                    }), /* int64 */[
                                                                  /* hi */0,
                                                                  /* lo */3
                                                                ]),
                                                            "1": "           3"
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: "::",
                                                "0": /* tuple */[
                                                  "i64_simple21",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: "Eq",
                                                              "0": Curry._1(Format.asprintf(/* constructor */{
                                                                        tag: "Format",
                                                                        "0": /* constructor */{
                                                                          tag: "Int64",
                                                                          "0": "Int_X",
                                                                          "1": "No_padding",
                                                                          "2": "No_precision",
                                                                          "3": "End_of_format"
                                                                        },
                                                                        "1": "%LX"
                                                                      }), /* int64 */[
                                                                    /* hi */1859194407,
                                                                    /* lo */1163551168
                                                                  ]),
                                                              "1": "6ED10E27455A61C0"
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: "::",
                                                  "0": /* tuple */[
                                                    "missing_neline",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: "Eq",
                                                                "0": Curry._1(Format.asprintf(/* constructor */{
                                                                          tag: "Format",
                                                                          "0": /* constructor */{
                                                                            tag: "Int64",
                                                                            "0": "Int_d",
                                                                            "1": "No_padding",
                                                                            "2": "No_precision",
                                                                            "3": /* constructor */{
                                                                              tag: "Char_literal",
                                                                              "0": /* "\n" */10,
                                                                              "1": "End_of_format"
                                                                            }
                                                                          },
                                                                          "1": "%Ld\n"
                                                                        }), /* int64 */[
                                                                      /* hi */0,
                                                                      /* lo */32
                                                                    ]),
                                                                "1": "32\n"
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: "::",
                                                    "0": /* tuple */[
                                                      "missing_newline2",
                                                      (function (param) {
                                                          var buf = $$Buffer.create(30);
                                                          return /* constructor */{
                                                                  tag: "Eq",
                                                                  "0": (Curry._1(Printf.bprintf(buf, /* constructor */{
                                                                              tag: "Format",
                                                                              "0": /* constructor */{
                                                                                tag: "Int64",
                                                                                "0": "Int_d",
                                                                                "1": "No_padding",
                                                                                "2": "No_precision",
                                                                                "3": /* constructor */{
                                                                                  tag: "Char_literal",
                                                                                  "0": /* "\n" */10,
                                                                                  "1": "End_of_format"
                                                                                }
                                                                              },
                                                                              "1": "%Ld\n"
                                                                            }), /* int64 */[
                                                                          /* hi */0,
                                                                          /* lo */32
                                                                        ]), $$Buffer.contents(buf)),
                                                                  "1": "32\n"
                                                                };
                                                        })
                                                    ],
                                                    "1": "[]"
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

var of_string_data = /* array */[
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */0
    ],
    "0"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */3
    ],
    "3"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */33
    ],
    "33"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */333
    ],
    "33_3"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */33333
    ],
    "33_33_3"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */77,
      /* lo */2620851541
    ],
    "333333333333"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */-1,
      /* lo */4294967295
    ],
    "0xffff_ffff_ffff_ffff"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */113
    ],
    "0b01110001"
  ],
  /* tuple */[
    /* int64 */[
      /* hi */0,
      /* lo */1
    ],
    "-0xffff_ffff_ffff_ffff"
  ]
];

Mt.from_pair_suites("Caml_format_test", Pervasives.$at(suites, Pervasives.$at(formatter_suites, Pervasives.$at(from_lambda_pairs(lambda_suites), Pervasives.$at(ksprintf_suites, Pervasives.$at($$Array.to_list($$Array.mapi((function (i, param) {
                                    var str_result = param[2];
                                    var f = param[1];
                                    var fmt = param[0];
                                    return /* tuple */[
                                            Curry._1(Printf.sprintf(/* constructor */{
                                                      tag: "Format",
                                                      "0": /* constructor */{
                                                        tag: "String_literal",
                                                        "0": "float_format ",
                                                        "1": /* constructor */{
                                                          tag: "Int",
                                                          "0": "Int_d",
                                                          "1": "No_padding",
                                                          "2": "No_precision",
                                                          "3": "End_of_format"
                                                        }
                                                      },
                                                      "1": "float_format %d"
                                                    }), i),
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: "Eq",
                                                        "0": Caml_format.caml_format_float(fmt, f),
                                                        "1": str_result
                                                      };
                                              })
                                          ];
                                  }), float_data)), Pervasives.$at(int64_suites, $$Array.to_list($$Array.mapi((function (i, param) {
                                        var b = param[1];
                                        var a = param[0];
                                        return /* tuple */[
                                                Curry._1(Printf.sprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "String_literal",
                                                            "0": "int64_of_string ",
                                                            "1": /* constructor */{
                                                              tag: "Int",
                                                              "0": "Int_d",
                                                              "1": "No_padding",
                                                              "2": "No_precision",
                                                              "3": /* constructor */{
                                                                tag: "Char_literal",
                                                                "0": /* " " */32,
                                                                "1": "End_of_format"
                                                              }
                                                            }
                                                          },
                                                          "1": "int64_of_string %d "
                                                        }), i),
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: "Eq",
                                                            "0": Caml_format.caml_int64_of_string(b),
                                                            "1": a
                                                          };
                                                  })
                                              ];
                                      }), of_string_data)))))))));

var a = Format.asprintf;

var float_suites = /* constructor */{
  tag: "::",
  "0": "float_nan",
  "1": "[]"
};

var hh = /* int64 */[
  /* hi */214748364,
  /* lo */3435973836
];

var hhh = /* int64 */[
  /* hi */268435456,
  /* lo */0
];

exports.of_string = of_string;
exports.from_float_of_string = from_float_of_string;
exports.from_of_string = from_of_string;
exports.u = u;
exports.to_str = to_str;
exports.v = v;
exports.suites = suites;
exports.ff = ff;
exports.a = a;
exports.formatter_suites = formatter_suites;
exports.float_data = float_data;
exports.float_suites = float_suites;
exports.Lambda_suites = Lambda_suites;
exports.lambda_suites = lambda_suites;
exports.from_lambda_pairs = from_lambda_pairs;
exports.ksprintf_suites = ksprintf_suites;
exports.int64_suites = int64_suites;
exports.hh = hh;
exports.hhh = hhh;
exports.of_string_data = of_string_data;
/* v Not a pure module */

'use strict';

var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Pervasives = require("../../lib/js/pervasives.js");

function err(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* " " */32,
                          "1": "End_of_format"
                        }
                      },
                      "1": "%s "
                    }, Pervasives.$caret$caret(f, /* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "Formatting_lit",
                            "0": "Flush_newline",
                            "1": "End_of_format"
                          },
                          "1": "@."
                        }))), str);
}

function ierr(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Char_literal",
                            "0": /* " " */32,
                            "1": "End_of_format"
                          }
                        },
                        "1": "%s "
                      }, f)), str);
  } else {
    return Curry._1(Format.ifprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Char_literal",
                            "0": /* " " */32,
                            "1": "End_of_format"
                          }
                        },
                        "1": "%s "
                      }, f)), str);
  }
}

function warn(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String_literal",
                        "0": "WARN: ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Char_literal",
                            "0": /* " " */32,
                            "1": "End_of_format"
                          }
                        }
                      },
                      "1": "WARN: %s "
                    }, Pervasives.$caret$caret(f, /* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "Formatting_lit",
                            "0": "Flush_newline",
                            "1": "End_of_format"
                          },
                          "1": "@."
                        }))), str);
}

function iwarn(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "WARN: ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* " " */32,
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "WARN: %s "
                      }, f)), str);
  } else {
    return Curry._1(Format.ifprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "WARN: ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* " " */32,
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "WARN: %s "
                      }, f)), str);
  }
}

function info(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String_literal",
                        "0": "INFO: ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Char_literal",
                            "0": /* " " */32,
                            "1": "End_of_format"
                          }
                        }
                      },
                      "1": "INFO: %s "
                    }, f)), str);
}

function iinfo(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "INFO: ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* " " */32,
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "INFO: %s "
                      }, f)), str);
  } else {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "INFO: ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* " " */32,
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "INFO: %s "
                      }, f)), str);
  }
}

exports.err = err;
exports.ierr = ierr;
exports.warn = warn;
exports.iwarn = iwarn;
exports.info = info;
exports.iinfo = iinfo;
/* Format Not a pure module */

'use strict';

var Curry = require("../../lib/js/curry.js");
var Format = require("../../lib/js/format.js");
var Pervasives = require("../../lib/js/pervasives.js");

function err(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: 0,
                      name: "Format",
                      "0": /* constructor */{
                        tag: 2,
                        name: "String",
                        "0": /* No_padding */0,
                        "1": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          "0": /* " " */32,
                          "1": /* End_of_format */0
                        }
                      },
                      "1": "%s "
                    }, Pervasives.$caret$caret(f, /* constructor */{
                          tag: 0,
                          name: "Format",
                          "0": /* constructor */{
                            tag: 17,
                            name: "Formatting_lit",
                            "0": /* Flush_newline */4,
                            "1": /* End_of_format */0
                          },
                          "1": "@."
                        }))), str);
}

function ierr(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 2,
                          name: "String",
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            "0": /* " " */32,
                            "1": /* End_of_format */0
                          }
                        },
                        "1": "%s "
                      }, f)), str);
  } else {
    return Curry._1(Format.ifprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 2,
                          name: "String",
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            "0": /* " " */32,
                            "1": /* End_of_format */0
                          }
                        },
                        "1": "%s "
                      }, f)), str);
  }
}

function warn(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: 0,
                      name: "Format",
                      "0": /* constructor */{
                        tag: 11,
                        name: "String_literal",
                        "0": "WARN: ",
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            "0": /* " " */32,
                            "1": /* End_of_format */0
                          }
                        }
                      },
                      "1": "WARN: %s "
                    }, Pervasives.$caret$caret(f, /* constructor */{
                          tag: 0,
                          name: "Format",
                          "0": /* constructor */{
                            tag: 17,
                            name: "Formatting_lit",
                            "0": /* Flush_newline */4,
                            "1": /* End_of_format */0
                          },
                          "1": "@."
                        }))), str);
}

function iwarn(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          "0": "WARN: ",
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              "0": /* " " */32,
                              "1": /* End_of_format */0
                            }
                          }
                        },
                        "1": "WARN: %s "
                      }, f)), str);
  } else {
    return Curry._1(Format.ifprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          "0": "WARN: ",
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              "0": /* " " */32,
                              "1": /* End_of_format */0
                            }
                          }
                        },
                        "1": "WARN: %s "
                      }, f)), str);
  }
}

function info(str, f) {
  return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                      tag: 0,
                      name: "Format",
                      "0": /* constructor */{
                        tag: 11,
                        name: "String_literal",
                        "0": "INFO: ",
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            "0": /* " " */32,
                            "1": /* End_of_format */0
                          }
                        }
                      },
                      "1": "INFO: %s "
                    }, f)), str);
}

function iinfo(b, str, f) {
  if (b) {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          "0": "INFO: ",
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              "0": /* " " */32,
                              "1": /* End_of_format */0
                            }
                          }
                        },
                        "1": "INFO: %s "
                      }, f)), str);
  } else {
    return Curry._1(Format.fprintf(Format.err_formatter, Pervasives.$caret$caret(/* constructor */{
                        tag: 0,
                        name: "Format",
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          "0": "INFO: ",
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              "0": /* " " */32,
                              "1": /* End_of_format */0
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

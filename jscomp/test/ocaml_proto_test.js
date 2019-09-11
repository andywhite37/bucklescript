'use strict';

var Mt = require("./mt.js");
var Char = require("../../lib/js/char.js");
var List = require("../../lib/js/list.js");
var Bytes = require("../../lib/js/bytes.js");
var Curry = require("../../lib/js/curry.js");
var Lexing = require("../../lib/js/lexing.js");
var Printf = require("../../lib/js/printf.js");
var $$String = require("../../lib/js/string.js");
var Parsing = require("../../lib/js/parsing.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Filename = require("../../lib/js/filename.js");
var Printexc = require("../../lib/js/printexc.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_format = require("../../lib/js/caml_format.js");
var Caml_option = require("../../lib/js/caml_option.js");
var Caml_string = require("../../lib/js/caml_string.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

function field($staropt$star, label, number, type_, name) {
  var options = $staropt$star !== undefined ? $staropt$star : "[]";
  return /* record */[
          /* field_name */name,
          /* field_number */number,
          /* field_label */label,
          /* field_type */type_,
          /* field_options */options
        ];
}

function map($staropt$star, number, key_type, value_type, name) {
  var map_options = $staropt$star !== undefined ? $staropt$star : "[]";
  return /* record */[
          /* map_name */name,
          /* map_number */number,
          /* map_key_type */key_type,
          /* map_value_type */value_type,
          /* map_options */map_options
        ];
}

function oneof_field($staropt$star, number, type_, name) {
  var options = $staropt$star !== undefined ? $staropt$star : "[]";
  return /* record */[
          /* field_name */name,
          /* field_number */number,
          /* field_label : Oneof */-978693923,
          /* field_type */type_,
          /* field_options */options
        ];
}

var message_counter = /* record */[/* contents */0];

function extension_range_range(from, to_) {
  var to_$1 = typeof to_ === "number" ? "To_max" : /* constructor */({
        tag: "To_number",
        "0": to_[1]
      });
  return /* constructor */{
          tag: "Extension_range",
          "0": from,
          "1": to_$1
        };
}

function message(content, message_name) {
  message_counter[0] = message_counter[0] + 1 | 0;
  return /* record */[
          /* id */message_counter[0],
          /* message_name */message_name,
          /* message_body */content
        ];
}

function $$import($$public, file_name) {
  return /* record */[
          /* file_name */file_name,
          /* public */$$public !== undefined
        ];
}

function extend(extend_name, extend_body) {
  message_counter[0] = message_counter[0] + 1 | 0;
  return /* record */[
          /* id */message_counter[0],
          /* extend_name */extend_name,
          /* extend_body */extend_body
        ];
}

function proto(syntax, file_option, $$package, $$import, message, $$enum, proto$1, extend, param) {
  var proto$2 = proto$1 !== undefined ? proto$1 : /* record */[
      /* syntax */syntax,
      /* imports */"[]",
      /* file_options */"[]",
      /* package */undefined,
      /* messages */"[]",
      /* enums */"[]",
      /* extends */"[]"
    ];
  var proto$3 = syntax !== undefined ? /* record */[
      /* syntax */syntax,
      /* imports */proto$2[/* imports */1],
      /* file_options */proto$2[/* file_options */2],
      /* package */proto$2[/* package */3],
      /* messages */proto$2[/* messages */4],
      /* enums */proto$2[/* enums */5],
      /* extends */proto$2[/* extends */6]
    ] : proto$2;
  var proto$4 = $$package !== undefined ? /* record */[
      /* syntax */proto$3[/* syntax */0],
      /* imports */proto$3[/* imports */1],
      /* file_options */proto$3[/* file_options */2],
      /* package */$$package,
      /* messages */proto$3[/* messages */4],
      /* enums */proto$3[/* enums */5],
      /* extends */proto$3[/* extends */6]
    ] : proto$3;
  var proto$5 = message !== undefined ? /* record */[
      /* syntax */proto$4[/* syntax */0],
      /* imports */proto$4[/* imports */1],
      /* file_options */proto$4[/* file_options */2],
      /* package */proto$4[/* package */3],
      /* messages : constructor */{
        tag: "::",
        "0": message,
        "1": proto$2[/* messages */4]
      },
      /* enums */proto$4[/* enums */5],
      /* extends */proto$4[/* extends */6]
    ] : proto$4;
  var proto$6 = $$enum !== undefined ? /* record */[
      /* syntax */proto$5[/* syntax */0],
      /* imports */proto$5[/* imports */1],
      /* file_options */proto$5[/* file_options */2],
      /* package */proto$5[/* package */3],
      /* messages */proto$5[/* messages */4],
      /* enums : constructor */{
        tag: "::",
        "0": $$enum,
        "1": proto$2[/* enums */5]
      },
      /* extends */proto$5[/* extends */6]
    ] : proto$5;
  var proto$7 = $$import !== undefined ? /* record */[
      /* syntax */proto$6[/* syntax */0],
      /* imports : constructor */{
        tag: "::",
        "0": $$import,
        "1": proto$2[/* imports */1]
      },
      /* file_options */proto$6[/* file_options */2],
      /* package */proto$6[/* package */3],
      /* messages */proto$6[/* messages */4],
      /* enums */proto$6[/* enums */5],
      /* extends */proto$6[/* extends */6]
    ] : proto$6;
  var proto$8 = file_option !== undefined ? /* record */[
      /* syntax */proto$7[/* syntax */0],
      /* imports */proto$7[/* imports */1],
      /* file_options : constructor */{
        tag: "::",
        "0": file_option,
        "1": proto$2[/* file_options */2]
      },
      /* package */proto$7[/* package */3],
      /* messages */proto$7[/* messages */4],
      /* enums */proto$7[/* enums */5],
      /* extends */proto$7[/* extends */6]
    ] : proto$7;
  if (extend !== undefined) {
    return /* record */[
            /* syntax */proto$8[/* syntax */0],
            /* imports */proto$8[/* imports */1],
            /* file_options */proto$8[/* file_options */2],
            /* package */proto$8[/* package */3],
            /* messages */proto$8[/* messages */4],
            /* enums */proto$8[/* enums */5],
            /* extends : constructor */{
              tag: "::",
              "0": extend,
              "1": proto$2[/* extends */6]
            }
          ];
  } else {
    return proto$8;
  }
}

function file_option(file_options, name) {
  var x;
  try {
    x = List.assoc(name, file_options);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return ;
    } else {
      throw exn;
    }
  }
  return x;
}

function rev_split_by_char(c, s) {
  var loop = function (i, l) {
    try {
      var i$prime = $$String.index_from(s, i, c);
      var s$prime = $$String.sub(s, i, i$prime - i | 0);
      return loop(i$prime + 1 | 0, s$prime === "" ? l : /* constructor */({
                      tag: "::",
                      "0": s$prime,
                      "1": l
                    }));
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* constructor */{
                tag: "::",
                "0": $$String.sub(s, i, s.length - i | 0),
                "1": l
              };
      } else {
        throw exn;
      }
    }
  };
  return loop(0, "[]");
}

function pop_last(param) {
  if (param) {
    var tl = param[1];
    if (tl) {
      return /* constructor */{
              tag: "::",
              "0": param[0],
              "1": pop_last(tl)
            };
    } else {
      return "[]";
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "Invalid argument [] for pop_last"
        ];
  }
}

function apply_until(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = Curry._1(f, param[0]);
      if (x !== undefined) {
        return x;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return ;
    }
  };
}

function string_of_string_list(l) {
  return Curry._1(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "Char_literal",
                    "0": /* "[" */91,
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "Char_literal",
                        "0": /* "]" */93,
                        "1": "End_of_format"
                      }
                    }
                  },
                  "1": "[%s]"
                }), $$String.concat(",", l));
}

function string_fold_lefti(f, e0, s) {
  var len = s.length;
  var _acc = e0;
  var _i = 0;
  while(true) {
    var i = _i;
    var acc = _acc;
    if (i === len) {
      return acc;
    } else {
      _i = i + 1 | 0;
      _acc = Curry._3(f, acc, i, s.charCodeAt(i));
      continue ;
    }
  };
}

function option_default(x, param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  } else {
    return x;
  }
}

function from_lexbuf(lexbuf) {
  var x = lexbuf[/* lex_curr_p */11][/* pos_fname */0];
  var file_name = x === "" ? undefined : x;
  var line = lexbuf[/* lex_curr_p */11][/* pos_lnum */1];
  return /* record */[
          /* file_name */file_name,
          /* line */line
        ];
}

function file_name(param) {
  return param[/* file_name */0];
}

function line(param) {
  return param[/* line */1];
}

function to_string(param) {
  return Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "File ",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": ", line ",
                        "1": /* constructor */{
                          tag: "Int",
                          "0": "Int_i",
                          "1": "No_padding",
                          "2": "No_precision",
                          "3": /* constructor */{
                            tag: "String_literal",
                            "0": ":\n",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  },
                  "1": "File %s, line %i:\n"
                }), option_default("", param[/* file_name */0]), param[/* line */1]);
}

function string_of_programmatic_error(e) {
  var tmp;
  switch (e) {
    case "Invalid_string_split" :
        tmp = "string split error";
        break;
    case "Unexpected_field_type" :
        tmp = "unexpected field type";
        break;
    case "No_type_found_for_id" :
        tmp = "no type was found for type id";
        break;
    case "One_of_should_be_inlined_in_message" :
        tmp = "one of variant encoding must be inlined in message";
        break;
    
  }
  return "Programatic_error" + tmp;
}

var Compilation_error = Caml_exceptions.create("Ocaml_proto_test.Exception.Compilation_error");

function prepare_error(param) {
  if (typeof param === "string") {
    return Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String_literal",
                  "0": "Syntax error",
                  "1": "End_of_format"
                },
                "1": "Syntax error"
              });
  } else {
    switch (/* XXX */param.tag) {
      case "Unresolved_type" :
          var match = param[0];
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "unresolved type for field name : ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": " (type:",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ", in message: ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* ")" */41,
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "unresolved type for field name : %s (type:%s, in message: %s)"
                        }), match[/* field_name */0], match[/* type_ */1], match[/* message_name */2]);
      case "Duplicated_field_number" :
          var match$1 = param[0];
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "duplicated field number for field name: ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": " (previous field name:",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ", message: ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* ")" */41,
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "duplicated field number for field name: %s (previous field name:%s, message: %s)"
                        }), match$1[/* field_name */0], match$1[/* previous_field_name */1], match$1[/* message_name */2]);
      case "Invalid_default_value" :
          var match$2 = param[0];
          return Curry._2(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "invalid default value for field name:",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": " (info: ",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "Char_literal",
                                    "0": /* ")" */41,
                                    "1": "End_of_format"
                                  }
                                }
                              }
                            }
                          },
                          "1": "invalid default value for field name:%s (info: %s)"
                        }), option_default("", match$2[/* field_name */0]), match$2[/* info */1]);
      case "Unsupported_field_type" :
          var match$3 = param[0];
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "unsupported field type for field name:",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": " with type:",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": " in bakend: ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "unsupported field type for field name:%s with type:%s in bakend: %s"
                        }), option_default("", match$3[/* field_name */0]), match$3[/* field_type */1], match$3[/* backend_name */2]);
      case "Programatic_error" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "programmatic error: ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": "End_of_format"
                            }
                          },
                          "1": "programmatic error: %s"
                        }), string_of_programmatic_error(param[0]));
      case "Invalid_import_qualifier" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Invalid import qualified, only 'public' supported",
                              "1": "End_of_format"
                            }
                          },
                          "1": "%sInvalid import qualified, only 'public' supported"
                        }), to_string(param[0]));
      case "Invalid_file_name" :
          return Curry._1(Printf.sprintf(Pervasives.$caret$caret(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "Invalid file name: ",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ", ",
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "Invalid file name: %s, "
                            }, /* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "format must <name>.proto",
                                "1": "End_of_format"
                              },
                              "1": "format must <name>.proto"
                            })), param[0]);
      case "Import_file_not_found" :
          return Curry._1(Printf.sprintf(Pervasives.$caret$caret(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "File: ",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ", ",
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "File: %s, "
                            }, /* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "could not be found.",
                                "1": "End_of_format"
                              },
                              "1": "could not be found."
                            })), param[0]);
      case "Invalid_packed_option" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "Invalid packed option for field: ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": "End_of_format"
                            }
                          },
                          "1": "Invalid packed option for field: %s"
                        }), param[0]);
      case "Missing_semicolon_for_enum_value" :
          return Curry._2(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Missing semicolon for enum value: ",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": "End_of_format"
                              }
                            }
                          },
                          "1": "%sMissing semicolon for enum value: %s"
                        }), to_string(param[1]), param[0]);
      case "Invalid_enum_specification" :
          return Curry._2(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Missing enum specification (<identifier> = <id>;) for enum value: ",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": "End_of_format"
                              }
                            }
                          },
                          "1": "%sMissing enum specification (<identifier> = <id>;) for enum value: %s"
                        }), to_string(param[1]), param[0]);
      case "Invalid_mutable_option" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "Invalid mutable option for field ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": "End_of_format"
                            }
                          },
                          "1": "Invalid mutable option for field %s"
                        }), option_default("", param[0]));
      case "Missing_one_of_name" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Missing oneof name",
                              "1": "End_of_format"
                            }
                          },
                          "1": "%sMissing oneof name"
                        }), to_string(param[0]));
      case "Invalid_field_label" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Invalid field label. [required|repeated|optional] expected",
                              "1": "End_of_format"
                            }
                          },
                          "1": "%sInvalid field label. [required|repeated|optional] expected"
                        }), to_string(param[0]));
      case "Missing_field_label" :
          return Curry._1(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": "Missing field label. [required|repeated|optional] expected",
                              "1": "End_of_format"
                            }
                          },
                          "1": "%sMissing field label. [required|repeated|optional] expected"
                        }), to_string(param[0]));
      case "Parsing_error" :
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "File ",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": ", line ",
                                "1": /* constructor */{
                                  tag: "Int",
                                  "0": "Int_i",
                                  "1": "No_padding",
                                  "2": "No_precision",
                                  "3": /* constructor */{
                                    tag: "String_literal",
                                    "0": ":\n",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "File %s, line %i:\n%s"
                        }), param[0], param[1], param[2]);
      
    }
  }
}

function add_loc(loc, exn) {
  if (exn[0] === Compilation_error) {
    var tmp = exn[1];
    if (typeof tmp !== "string") {
      switch (/* XXX */tmp.tag) {
        case "Invalid_import_qualifier" :
        case "Missing_semicolon_for_enum_value" :
        case "Invalid_enum_specification" :
        case "Missing_one_of_name" :
        case "Invalid_field_label" :
        case "Missing_field_label" :
            return exn;
        default:
          
      }
    }
    
  }
  var file_name$1 = option_default("", file_name(loc));
  var line$1 = line(loc);
  var detail = Printexc.to_string(exn);
  return [
          Compilation_error,
          /* constructor */{
            tag: "Parsing_error",
            "0": file_name$1,
            "1": line$1,
            "2": detail
          }
        ];
}

Printexc.register_printer((function (exn) {
        if (exn[0] === Compilation_error) {
          return prepare_error(exn[1]);
        }
        
      }));

function invalid_default_value(field_name, info, param) {
  throw [
        Compilation_error,
        /* constructor */{
          tag: "Invalid_default_value",
          "0": /* record */[
            /* field_name */field_name,
            /* info */info
          ]
        }
      ];
}

function unsupported_field_type(field_name, field_type, backend_name, param) {
  throw [
        Compilation_error,
        /* constructor */{
          tag: "Unsupported_field_type",
          "0": /* record */[
            /* field_name */field_name,
            /* field_type */field_type,
            /* backend_name */backend_name
          ]
        }
      ];
}

function invalid_enum_specification(enum_name, loc) {
  throw [
        Compilation_error,
        /* constructor */{
          tag: "Invalid_enum_specification",
          "0": enum_name,
          "1": loc
        }
      ];
}

var yytransl_const = /* array */[
  257,
  258,
  259,
  261,
  262,
  263,
  265,
  266,
  267,
  268,
  269,
  270,
  271,
  272,
  273,
  274,
  275,
  276,
  277,
  278,
  279,
  280,
  281,
  282,
  283,
  0,
  0
];

var yytransl_block = /* array */[
  260,
  264,
  284,
  285,
  286,
  287,
  0
];

var yyact = /* array */[
  (function (param) {
      throw [
            Caml_builtin_exceptions.failure,
            "parser"
          ];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(_1, undefined, undefined, undefined, undefined, undefined, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 0);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, _1, undefined, undefined, undefined, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, _1, undefined, undefined, undefined, undefined, undefined, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, _1, undefined, undefined, undefined, undefined, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, _1, undefined, undefined, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, undefined, _1, undefined, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, undefined, undefined, undefined, _1, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, _1, undefined, undefined, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, _1, undefined, undefined, undefined, undefined, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, _1, undefined, undefined, undefined, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, _1, undefined, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, undefined, _1, _2, undefined, "()");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return proto(undefined, undefined, undefined, undefined, undefined, undefined, _2, _1, "()");
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return _3;
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 2);
      var _2 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return $$import(undefined, _2);
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 3);
      var _3 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return $$import("()", _3);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 3);
      Parsing.peek_val(__caml_parser_env, 2);
      Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Invalid_import_qualifier",
              "0": _1
            }
          ];
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return _2[1];
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return message(_4, _2[1]);
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 2);
      Parsing.peek_val(__caml_parser_env, 0);
      return message("[]", _2[1]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": "[]"
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _2
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_field",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_map_field",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_oneof_field",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_sub",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_enum",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Message_extension",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      throw [
            Compilation_error,
            "Syntax_error"
          ];
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return extend(_2[1], _4);
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 2);
      Parsing.peek_val(__caml_parser_env, 0);
      return extend(_2[1], "[]");
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": "[]"
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _2
            };
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return _2;
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": "[]"
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _3
            };
    }),
  (function (__caml_parser_env) {
      return /* constructor */{
              tag: "Extension_single_number",
              "0": Parsing.peek_val(__caml_parser_env, 0)
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return extension_range_range(_1, /* `Number */[
                  -703661335,
                  _3
                ]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      return extension_range_range(_1, /* Max */3850884);
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 4);
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return /* record */[
              /* oneof_name */_2[1],
              /* oneof_fields */_4
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 3);
      Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Missing_one_of_name",
              "0": _1
            }
          ];
    }),
  (function (__caml_parser_env) {
      return "[]";
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _2
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 5);
      var _2 = Parsing.peek_val(__caml_parser_env, 4);
      var _4 = Parsing.peek_val(__caml_parser_env, 2);
      var _5 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return oneof_field(_5, _4, _1[1], _2);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 4);
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return oneof_field(undefined, _4, _1[1], _2);
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 7);
      var _5 = Parsing.peek_val(__caml_parser_env, 5);
      var _7 = Parsing.peek_val(__caml_parser_env, 3);
      var _9 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return map(undefined, _9, _3[1], _5[1], _7);
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 8);
      var _5 = Parsing.peek_val(__caml_parser_env, 6);
      var _7 = Parsing.peek_val(__caml_parser_env, 4);
      var _9 = Parsing.peek_val(__caml_parser_env, 2);
      var _10 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return map(_10, _9, _3[1], _5[1], _7);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 6);
      var _2 = Parsing.peek_val(__caml_parser_env, 5);
      var _3 = Parsing.peek_val(__caml_parser_env, 4);
      var _5 = Parsing.peek_val(__caml_parser_env, 2);
      var _6 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return field(_6, _1, _5, _2[1], _3);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 5);
      var _2 = Parsing.peek_val(__caml_parser_env, 4);
      var _3 = Parsing.peek_val(__caml_parser_env, 3);
      var _5 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return field(undefined, _1, _5, _2[1], _3);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 5);
      Parsing.peek_val(__caml_parser_env, 4);
      Parsing.peek_val(__caml_parser_env, 2);
      Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Missing_field_label",
              "0": _1[0]
            }
          ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 4);
      Parsing.peek_val(__caml_parser_env, 3);
      Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Missing_field_label",
              "0": _1[0]
            }
          ];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 0)[1];
    }),
  (function (__caml_parser_env) {
      return "required";
    }),
  (function (__caml_parser_env) {
      return "optional";
    }),
  (function (__caml_parser_env) {
      return "repeated";
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 0);
      return "oneof";
    }),
  (function (__caml_parser_env) {
      return "enum";
    }),
  (function (__caml_parser_env) {
      return "package";
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 0);
      return "import";
    }),
  (function (__caml_parser_env) {
      return "public";
    }),
  (function (__caml_parser_env) {
      return "option";
    }),
  (function (__caml_parser_env) {
      return "extensions";
    }),
  (function (__caml_parser_env) {
      return "extend";
    }),
  (function (__caml_parser_env) {
      return "syntax";
    }),
  (function (__caml_parser_env) {
      return "message";
    }),
  (function (__caml_parser_env) {
      return "to";
    }),
  (function (__caml_parser_env) {
      return "max";
    }),
  (function (__caml_parser_env) {
      return "map";
    }),
  (function (__caml_parser_env) {
      return /* Required */202657151;
    }),
  (function (__caml_parser_env) {
      return /* Repeated */-368609126;
    }),
  (function (__caml_parser_env) {
      return /* Optional */-132092992;
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Invalid_field_label",
              "0": _1[0]
            }
          ];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      return "[]";
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": "[]"
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _3
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* tuple */[
              _1[1],
              _3
            ];
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _5 = Parsing.peek_val(__caml_parser_env, 0);
      return /* tuple */[
              _2[1],
              _5
            ];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 0)[1];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1)[1];
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 0);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return _1 + _2[1];
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return /* tuple */[
              _2,
              _4
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "Constant_int",
              "0": _1
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "Constant_float",
              "0": _1
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      var litteral = _1[1];
      switch (litteral) {
        case "false" :
            return /* constructor */{
                    tag: "Constant_bool",
                    "0": false
                  };
        case "true" :
            return /* constructor */{
                    tag: "Constant_bool",
                    "0": true
                  };
        default:
          return /* constructor */{
                  tag: "Constant_litteral",
                  "0": litteral
                };
      }
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "Constant_string",
              "0": _1
            };
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 3);
      var _4 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      var $staropt$star = _4;
      var enum_name = _2[1];
      var enum_values = $staropt$star !== undefined ? $staropt$star : "[]";
      message_counter[0] = message_counter[0] + 1 | 0;
      return /* record */[
              /* enum_id */message_counter[0],
              /* enum_name */enum_name,
              /* enum_values */enum_values
            ];
    }),
  (function (__caml_parser_env) {
      return "[]";
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return /* constructor */{
              tag: "::",
              "0": _1,
              "1": _2
            };
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 3);
      var _3 = Parsing.peek_val(__caml_parser_env, 1);
      Parsing.peek_val(__caml_parser_env, 0);
      return /* record */[
              /* enum_value_name */_1[1],
              /* enum_value_int */_3
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      Parsing.peek_val(__caml_parser_env, 0);
      var enum_value = _1[1];
      var loc = _1[0];
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Missing_semicolon_for_enum_value",
              "0": enum_value,
              "1": loc
            }
          ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 3);
      Parsing.peek_val(__caml_parser_env, 1);
      return invalid_enum_specification(_1[1], _1[0]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      return invalid_enum_specification(_1[1], _1[0]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      return invalid_enum_specification(_1[1], _1[0]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return invalid_enum_specification(_1[1], _1[0]);
    }),
  (function (__caml_parser_env) {
      return "()";
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 1);
      return "()";
    }),
  (function (__caml_parser_env) {
      return "()";
    }),
  (function (__caml_parser_env) {
      Parsing.peek_val(__caml_parser_env, 1);
      return "()";
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    })
];

var yytables = /* record */[
  /* actions */yyact,
  /* transl_const */yytransl_const,
  /* transl_block */yytransl_block,
  /* lhs */"\xff\xff\x01\0\x02\0\x03\0\x04\0\x05\0\x06\0\b\0\t\0\n\0\x0b\0\f\0\x07\0\x18\0\x18\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x19\0\x13\0\x13\0\x13\0\x1b\0\x12\0\x12\0\x1d\0\x1d\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x17\0\x17\0!\0!\0\x16\0\x15\0\x15\0\"\0\"\0\"\0\x11\0\x11\0#\0#\0$\0$\0 \0 \0\x0e\0\x0e\0\x0e\0\x0e\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0&\0&\0&\0&\0\r\0\r\0'\0'\0(\0(\0*\0*\0+\0+\0\x14\0)\0)\0)\0)\0\x10\0,\0,\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1c\0\x1c\0\x1e\0\x1e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* len */"\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x04\0\x03\0\x04\0\x04\0\x03\0\x05\0\x04\0\x01\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x05\0\x04\0\x01\0\x02\0\x03\0\x01\0\x03\0\x01\0\x03\0\x03\0\x05\0\x04\0\0\0\x02\0\x06\0\x05\0\n\0\x0b\0\x07\0\x06\0\x06\0\x05\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x03\0\x02\0\x01\0\x03\0\x03\0\x05\0\x01\0\x03\0\x01\0\x02\0\x05\0\x01\0\x01\0\x01\0\x01\0\x05\0\0\0\x02\0\x04\0\x03\0\x04\0\x02\0\x02\0\x01\0\x01\0\x02\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0",
  /* defred */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0r\0\0\0R\0T\0S\0\0\0s\0\0\0\0\0\0\0t\0\0\0\0\0u\0\0\0\0\0v\0\0\0\0\0w\0\0\0\0\0\0\0\0\0\0\0\0\0x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0y\0\0\0z\0\0\0\0\0{\0\0\0\0\0\0\0|\0\0\0}\0\0\0W\0\0\0\0\0\0\0\0\0\x01\0B\0C\0D\0E\0N\0F\0G\0H\0I\0J\0K\0L\0M\0O\0P\0Q\0A\0\0\0\x02\0\0\0\0\0l\0k\0\x03\0\0\0\x04\0\0\0\0\0\x05\0\0\0\x06\0\0\0\0\0\0\0\0\0\0\0\\\0^\0\0\0\0\0\0\0\x19\0\x18\0\x15\0\x16\0\x1a\0\f\0\r\0\x17\0\x07\0\b\0\0\0\t\0\0\0\0\0\n\0\x0b\0\0\0\0\0V\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0n\0\0\0\0\0\0\0\0\0\0\0\0\0_\0\0\0\0\x004\x003\x001\0\0\0\0\0d\0a\0b\0c\0Z\0Y\0\0\0\0\0j\0\0\0\0\0\0\0\0\0p\0\0\x008\0\0\0*\0\0\0$\0(\0&\0'\0)\0\0\0\0\0\0\0%\0o\0\0\0\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0g\0\0\0\0\0q\0\0\0\0\0\0\0#\0\0\0.\0\0\0[\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* dgoto */"\r\0\x0f\0\x15\0\x19\0\x1c\0\x1f\0\"\0)\x003\x005\x008\0<\0>\0\x10\0\xae\0\xa5\0*\0\xb0\0+\0,\0-\x009\0\xb2\0.\0/\x000\x001\x002\0\x8d\0\xb3\0\xa9\0\xb5\0\xb6\0\xbe\0:\0\x88\0\x89\0W\0\x17\0C\0D\0\x9f\0k\0l\0\xa6\0",
  /* sindex */"\xd2\0\xf5\xfe\x13\xff\xed\xfe\n\xff\x1e\xff4\xff\x89\xff:\xffF\xff5\xffV\xff[\xff\0\0\x18\xff\0\0b\0\0\0\0\0\0\0\xe1\xff\0\0i\0K\xffB\xff\0\0k\0M\xff\0\0z\0\x06\xff\0\0{\0]\xff\0\0\x7f\0a\xff\xfe\xfe\r\xffd\xffl\xff\0\0\x89\xff\x89\xff\x89\xff\x89\xff\x89\xff\x86\0\xa0\xff\0\0\x89\xff\0\0\x88\0\0\0\x8b\0\x86\xff\0\0\x97\0}\xff5\xff\0\0\x9a\0\0\0\x9c\0\0\0~\xff\x97\xff\x9f\xff\x96\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x9a\xff\0\0\xe1\xff\x98\xff\0\0\0\0\0\0\xa4\xff\0\0\x9c\xff\xa7\xff\0\0\xaa\xff\0\0\xa5\xff\xa2\xff\xa5\xff\xb3\xff\xa1\xff\0\0\0\0\x05\xff\xbf\xff\xc3\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xfe\0\x005\xff\xa5\xff\0\0\0\0\xcb\xff9\xff\0\0\x1f\xff\xda\xff\xdf\xff,\xff\xed\xfe\xe1\xff\xe8\xff\x9c\xff\x9c\xffI\xff\0\0\xe2\xff\xa5\xff\xe2\xff\xa5\xff\xe6\xff9\xff\0\0\x10\xff\xa5\xff\0\0\0\0\0\0\xe2\xff\xe4\xff\0\0\0\0\0\0\0\0\0\0\0\0)\xff\xed\xff\0\0\xe2\xff\xed\xfe\xe8\xff\xe5\xff\0\0\xf5\xff\0\0\xe8\xff\0\0\xe7\xff\0\0\0\0\0\0\0\0\0\0\xe8\xff\xf5\xff\xc2\xff\0\0\0\0\xe2\xff\xe2\xff\0\0\xa5\xff\x13\xff\xf5\xff\xe8\xff\xe2\xff9\xff\xa5\xff\xe2\xff)\xff\0\0\xf5\xff\xf3\xff\0\0\xf5\xff\xf4\xff\xf5\xff\0\0\xe2\xff\0\0\xf5\xff\0\0\xe2\xff\xa5\xff\xe2\xff)\xff\xf9\xff\xe2\xff\xa5\xff\xe2\xff\xf6\xff\xe2\xff\x13\0\xe1\xff\xfd\xff\x0e\0)\xff\xa5\xff\xe2\xff\xe2\xff",
  /* rindex */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0,\x01<\x01F\x01G\x01H\x01\0\0\0\0\0\0N\x01\0\0\0\0\0\0\0\0\x0b\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0E\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0I\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0:\0L\0\0\0\0\0I\0I\0\0\0\0\0e\0\0\0w\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0L\0\0\0\0\0\0\0Q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0N\0\0\0\0\0\x89\0\x9b\0\0\0\0\0O\0\xad\0\0\0\xc4\xff\0\0\0\0c\0\0\0\0\0\x17\0\0\0\0\0u\0\0\0-\0\0\0\xb8\0\0\0\xc1\0\0\0\x87\0\0\0\x99\0\0\0\0\0\xab\0\0\0\xfc\xfe\0\0\b\xff\0\0\0\0\0\0\0\0\0\0\0\0m\xff\x9e\xff",
  /* gindex */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0c\xff\xfe\xff\xbe\x01\xff\xff\xc7\x01\x02\0\xbb\x01\xc6\x01\xca\xff\xc5\x01\xc8\x01\xc8\0\0\0\xa1\x01\0\0\xa3\xff\x1d\x01\x95\xff\0\0\0\0\x17\x01\0\0\xd6\xff\0\0\xa9\xff\0\0S\x01\0\0t\xff\0\0\0\x001\x01",
  /* tablesize */470,
  /* table */"\x16\0!\0\x84\0\x1d\0\xc1\0|\0\xbb\0f\0#\0\x0e\0\x8f\x002\0\x18\0:\0\x96\x000\0\x1b\0\x11\0\x12\0\x13\0\x11\0\x12\0\x13\0e\0`\x009\0g\0:\0\x97\0h\0\x92\0\x99\0\xb4\0\xa8\0\x1e\0i\0\x93\0a\0\xd1\x009\0\xa4\0\xbd\0m\0@\0j\0 \0A\0\x14\0\xa7\0\xb8\0\x14\0\xb9\0\xcf\0A\0\xd6\0B\0\xbf\0!\0i\0\xc5\0h\0\x0e\0B\0/\0\xc8\0\xdf\0%\0\x8c\0\xc2\0\x98\0\x8c\0\xa3\0\xca\0\xac\0\x11\0\x12\0\x13\0\x1e\0!\0\x1b\0&\x006\x007\0\xce\0;\0\x9b\0\x9c\0\x9d\0\x9e\0\xad\0\xa8\0Z\0[\0\\\0\xcc\0\xaa\0\xab\0;\0E\0@\0\xd0\0\x1f\0\xd2\0'\0\x14\0X\0Y\0]\0^\0;\0;\0;\0;\0;\0;\0;\0\xd5\x005\0\xd7\0\x1c\0;\0\xd9\0_\0b\0c\0;\0;\0d\0e\0\xe0\0\xe1\0m\0\xdc\0n\0t\0?\0w\0\x1d\0\xaf\0x\0;\0\xb1\0!\0\x1b\0$\0%\0\xbc\0&\0y\0'\0(\0z\0{\0>\0}\0\x1e\0~\0\x7f\0<\0<\0<\0<\0<\0<\0<\0!\0\x1b\0$\0%\0<\0&\0=\0'\0,\0<\0<\0\x80\0\x82\0\x81\0\x83\0\xaf\0\x85\0\x86\0\xb1\0`\0\x8a\0\xbc\0\x87\0\x8b\0<\0\x8e\0\x8c\0\x91\0+\0\xac\0\x11\0\x12\0\x13\0\x1e\0!\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0;\0\x1b\0\x90\0\x1b\0\x94\0\xad\0\x01\0\x02\0\x03\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\x95\0\x9a\0\x14\0F\0G\0H\0I\0J\0K\0L\0M\0N\0O\0P\0Q\0R\0S\0T\0U\0o\0p\0q\0r\0s\0\xa1\0\xa2\0\xa8\0v\0\xba\0\xb7\0\xc0\0\xc6\0\xc9\0V\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xc3\0!\0!\0!\0!\0\xc7\0\xd3\0!\0!\0\xd4\0\xd8\0\xda\0\xdd\0e\0e\0e\0e\0e\0e\0e\0e\0e\0!\0e\0e\0e\0e\x002\x002\0e\0e\x000\0\xdb\0\xde\0\x13\0 \0 \0 \0 \0 \0 \0 \0 \0 \0e\0 \0 \0 \0 \0m\0\x12\0 \0 \0/\0/\0/\0/\0/\0/\0/\0\x0f\0\x10\0\x14\0m\0/\0i\0 \0h\0\x11\0/\0/\x006\x006\x006\x006\x006\x006\x006\0X\0i\x007\0h\x006\0f\0/\0\"\0-\x006\x006\0@\0@\0@\0@\0@\0@\0@\0\x1f\0\x1f\0\x1f\0\x1f\0@\0\x1f\x006\0\x1f\0\x1f\0@\0@\x005\x005\x005\x005\x005\x005\x005\0\x1c\0\x1c\0\x1c\0\x1c\x005\0\x1c\0@\0\x1c\0\x1c\x005\x005\0?\0?\0?\0?\0?\0?\0?\0\x1d\0\x1d\0\x1d\0\x1d\0?\0\x1d\x005\0\x1d\0\x1d\0?\0?\0>\0>\0>\0>\0>\0>\0>\0\x1e\0\x1e\0\x1e\0\x1e\0>\0\x1e\0?\0\x1e\0\x1e\0>\0>\0=\0=\0=\0=\0=\0=\0=\0,\0,\0,\0,\0=\0,\0>\0,\0,\0=\0=\0`\0`\0`\0`\0\x1a\0`\x004\0`\0`\0+\0+\0+\0+\0=\0+\0 \0+\0+\x006\0=\0u\0\xcb\0\xcd\0?\0\xa0\0\xc4\0",
  /* check */"\x02\0\0\0Y\0\x04\0\xa1\0;\0\x92\0\t\x01\x06\0\x14\x01g\0\0\0\x1f\x01\x11\x01\x0f\x01\0\0\x06\x01\x01\x01\x02\x01\x03\x01\x01\x01\x02\x01\x03\x01\0\0\x12\x01\x11\x01\x1c\x01\x1f\x01\x1d\x01\x1f\x01\x19\x01|\0\x8b\0\x11\x01\x04\x01\x16\x01\x1f\x01\x1f\x01\xc3\0\x1f\x01\x85\0\x94\0\0\0\x13\x01\x1f\x01\0\0\x16\x01\x1f\x01\x87\0\x8e\0\x1f\x01\x90\0\xc0\0\x16\x01\xd3\0\x1f\x01\x95\0\x05\x01\0\0\xa6\0\0\0\x14\x01\x1f\x01\0\0\xab\0\xde\0\b\x01\x1a\x01\xa1\0{\0\x1a\x01\x1b\x01\xb3\0\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\n\x01\0\0\x1d\x01\xbe\0\x0b\x01\x1c\x01\x1d\x01\x1e\x01\x1f\x01\x10\x01\x11\x01\x19\x01\x1a\x01\x1b\x01\xbb\0\x89\0\x8a\0\x0b\x01\0\0\0\0\xc1\0\0\0\xc3\0\f\x01\x1f\x01\0\0\x1f\x01\0\0\x1f\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\xd1\0\0\0\xd3\0\0\0\x0b\x01\xd6\0\0\0\0\0\x1f\x01\x10\x01\x11\x01\0\0\x1f\x01\xde\0\xdf\0\x1f\x01\xdb\0\x19\x01\0\0\0\0\0\0\0\0\x8b\0\0\0\x1f\x01\x8b\0\x05\x01\x06\x01\x07\x01\b\x01\x94\0\n\x01\x0e\x01\f\x01\r\x01\0\0\x1b\x01\0\0\0\0\0\0\0\0\x1f\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\0\0\f\x01\0\0\x10\x01\x11\x01\x19\x01\x1b\x01\x13\x01\x19\x01\xb5\0\x1d\x01\x12\x01\xb5\0\0\0\x12\x01\xbc\0\x1f\x01\x12\x01\x1f\x01\x1c\x01\x1a\x01\x1f\x01\0\0\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1c\x01\f\x01\x12\x01\x10\x01\x01\0\x02\0\x03\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\x1c\x01\x15\x01\x1f\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01\f\x01\r\x01\x0e\x01\x0f\x01\x10\x01*\0+\0,\0-\0.\0\x1d\x01\x19\x01\x11\x012\0\x15\x01\x1a\x01\x19\x01\x19\x01\x18\x01\x1f\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\x1d\x01\n\x01\x0b\x01\f\x01\r\x01\x1a\x01\x1d\x01\x10\x01\x11\x01\x1f\x01\x1b\x01\x1f\x01\x19\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\x1f\x01\n\x01\x0b\x01\f\x01\r\x01\x1a\x01\x1b\x01\x10\x01\x11\x01\x1a\x01\x17\x01\x1d\x01\0\0\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\x1f\x01\n\x01\x0b\x01\f\x01\r\x01\x11\x01\0\0\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\0\0\0\0\0\0\x1f\x01\x0b\x01\x11\x01\x1f\x01\x11\x01\0\0\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x13\x01\x1f\x01\x11\x01\x1f\x01\x0b\x01\x11\x01\x1f\x01\x11\x01\x11\x01\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1f\x01\f\x01\r\x01\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1f\x01\f\x01\r\x01\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1f\x01\f\x01\r\x01\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1f\x01\f\x01\r\x01\x10\x01\x11\x01\0\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\x06\x01\x07\x01\b\x01\x0b\x01\n\x01\x1f\x01\f\x01\r\x01\x10\x01\x11\x01\x05\x01\x06\x01\x07\x01\b\x01\x03\0\n\x01\b\0\f\x01\r\x01\x05\x01\x06\x01\x07\x01\b\x01\x1f\x01\n\x01\x05\0\f\x01\r\x01\t\0\x0b\x000\0\xb5\0\xbc\0\f\0\x82\0\xa5\0",
  /* error_function */Parsing.parse_error,
  /* names_const */"REQUIRED\0OPTIONAL\0REPEATED\0MESSAGE\0ENUM\0PACKAGE\0PUBLIC\0OPTION\0EXTENSIONS\0EXTEND\0SYNTAX\0TO\0MAX\0MAP\0RBRACE\0LBRACE\0RBRACKET\0LBRACKET\0RPAREN\0LPAREN\0RANGLEB\0LANGLEB\0EQUAL\0SEMICOLON\0COMMA\0EOF\0",
  /* names_block */"ONE_OF\0IMPORT\0STRING\0INT\0FLOAT\0IDENT\0"
];

function proto_(lexfun, lexbuf) {
  return Parsing.yyparse(yytables, 7, lexfun, lexbuf);
}

function update_loc(lexbuf) {
  var pos = lexbuf[/* lex_curr_p */11];
  lexbuf[/* lex_curr_p */11] = /* record */[
    /* pos_fname */pos[/* pos_fname */0],
    /* pos_lnum */pos[/* pos_lnum */1] + 1 | 0,
    /* pos_bol */pos[/* pos_cnum */3],
    /* pos_cnum */pos[/* pos_cnum */3]
  ];
  return /* () */0;
}

var __ocaml_lex_tables = /* record */[
  /* lex_base */"\0\0\xea\xff\xeb\xffN\0\xed\xff\xee\xff\x01\0\xa0\0\xf0\0;\x01\x88\x01\x9e\x01\xf2\xff\x10\0\xf5\xff\xf6\xff\xf7\xff\xf8\xff\xf9\xff\xfa\xff\xfb\xff\xfc\xff\xfd\xff\xfe\xff\xff\xff\xf3\xff\xf4\xff\x1a\0\xbe\x01\xc8\x01\x92\x01\xa8\x01#\0\xef\xff\xed\x01:\x02\x87\x02\xd4\x02!\x03n\x03\x05\0\x12\x01\xfd\xff\xfe\xff\xff\xff\x06\0\x07\0!\x01\xfc\xff\xfd\xff\x11\0\xff\xff\x0b\0\f\0\xfe\xff\xc2\x01\xfc\xff\xfd\xff\xfe\xff\xc9\x03\xff\xff",
  /* lex_backtrk */"\x0f\0\xff\xff\xff\xff\x13\0\xff\xff\xff\xff\x15\0\x13\0\x13\0\x0f\0\x0e\0\x0f\0\xff\xff\x15\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\x0f\0\x13\0\x13\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\xff\xff",
  /* lex_default */"\x01\0\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff+\0\0\0\0\0\0\0\xff\xff\xff\xff1\0\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\0\x009\0\0\0\0\0\0\0\xff\xff\0\0",
  /* lex_trans */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x05\0\x05\0\x04\0\x06\0(\0\x05\0,\0,\0(\0.\0.\x003\x003\0\0\x005\x005\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\x13\0\x14\0\0\0\x0b\0\x0e\0\x0b\0\t\0\r\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x19\0\x0f\0\x12\0\x10\0\x11\0\x1a\x006\0\x03\0\x03\0\x03\0\x03\0\b\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x16\0\0\0\x15\0\0\0\0\0\0\0\x03\0\x03\0\x03\0\x03\0\b\0\x03\0\x03\0\x03\0\x07\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x18\0\"\0\x17\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0 \0!\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\x03\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\"\0\0\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\x03\0\x02\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0&\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\x1f\0,\0\x1f\0\"\0-\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\x003\0\0\0\0\x004\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\x002\0\0\0\0\0\0\0\x03\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\x03\0\x03\0\x03\0\b\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\x03\0\x03\0\x03\0\b\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x1d\0\0\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1d\0\x1c\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\0\0\x1c\0:\0\0\0\0\0\0\0\0\0\x1f\0\0\0\x1f\0\0\0\x1c\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\0\0\x1c\0\0\0\0\0\0\0\x1b\0\0\0\0\0\0\0\0\0\0\0\x1c\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\"\0\0\0\0\0;\0\0\0\0\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\"\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0#\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\"\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\x008\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\x03\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\"\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0%\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\"\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0#\0\0\0#\0#\0#\0#\0#\0'\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\"\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0#\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0<\0\0\0<\0\0\0\0\0\0\0\0\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0\0\0\0\0\0\0\0\0\0\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0\0\0\0\0\0\0<\0\0\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* lex_check */"\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x06\0\0\0\0\0\x06\0(\0-\0.\0(\0-\0.\x004\x005\0\xff\xff4\x005\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\r\x002\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\0\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x1b\0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\0\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\b\0)\0\b\0\b\0)\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\xff\xff/\0\xff\xff\xff\xff/\0\xff\xff\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0/\0\xff\xff\xff\xff\xff\xff\b\0\xff\xff\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\n\0\xff\xff\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\n\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x0b\0\n\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\x0b\x007\0\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\xff\xff\x1c\0\xff\xff\n\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\xff\xff\x0b\0\xff\xff\xff\xff\xff\xff\x0b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\"\0\xff\xff\xff\xff7\0\xff\xff\xff\xff/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0\"\0#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0$\0\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff7\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff$\0\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0%\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff%\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0'\0\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0\xff\xff\xff\xff\xff\xff\xff\xff'\0\xff\xff'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0;\0\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\xff\xff;\0\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
  /* lex_base_code */"",
  /* lex_backtrk_code */"",
  /* lex_default_code */"",
  /* lex_trans_code */"",
  /* lex_check_code */"",
  /* lex_code */""
];

function __ocaml_lex_string_rec(_l, lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var l = _l;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    switch (__ocaml_lex_state$1) {
      case 0 :
          var c = Lexing.lexeme_char(lexbuf, 1);
          ___ocaml_lex_state = 55;
          _l = /* constructor */{
            tag: "::",
            "0": Char.escaped(c),
            "1": l
          };
          continue ;
      case 1 :
          return /* constructor */{
                  tag: "String_value",
                  "0": $$String.concat("", List.rev(l))
                };
      case 2 :
          ___ocaml_lex_state = 55;
          _l = /* constructor */{
            tag: "::",
            "0": Lexing.lexeme(lexbuf),
            "1": l
          };
          continue ;
      case 3 :
          return "String_eof";
      default:
        Curry._1(lexbuf[/* refill_buff */0], lexbuf);
        ___ocaml_lex_state = __ocaml_lex_state$1;
        continue ;
    }
  };
}

function __ocaml_lex_comment_rec(_l, lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var l = _l;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    switch (__ocaml_lex_state$1) {
      case 0 :
          update_loc(lexbuf);
          return /* constructor */{
                  tag: "Comment_value",
                  "0": $$String.concat("", List.rev(l))
                };
      case 1 :
          ___ocaml_lex_state = 41;
          _l = /* constructor */{
            tag: "::",
            "0": Lexing.lexeme(lexbuf),
            "1": l
          };
          continue ;
      case 2 :
          return "Comment_eof";
      default:
        Curry._1(lexbuf[/* refill_buff */0], lexbuf);
        ___ocaml_lex_state = __ocaml_lex_state$1;
        continue ;
    }
  };
}

function __ocaml_lex_multi_line_comment_rec(_l, lexbuf, ___ocaml_lex_state) {
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var l = _l;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf);
    switch (__ocaml_lex_state$1) {
      case 0 :
          update_loc(lexbuf);
          ___ocaml_lex_state = 47;
          continue ;
      case 1 :
          Lexing.lexeme(lexbuf);
          return /* constructor */{
                  tag: "Comment_value",
                  "0": $$String.concat("", List.rev(l))
                };
      case 2 :
          ___ocaml_lex_state = 47;
          _l = /* constructor */{
            tag: "::",
            "0": Lexing.lexeme(lexbuf),
            "1": l
          };
          continue ;
      case 3 :
          return "Comment_eof";
      default:
        Curry._1(lexbuf[/* refill_buff */0], lexbuf);
        ___ocaml_lex_state = __ocaml_lex_state$1;
        continue ;
    }
  };
}

function lexer(lexbuf) {
  var lexbuf$1 = lexbuf;
  var ___ocaml_lex_state = 0;
  while(true) {
    var __ocaml_lex_state = ___ocaml_lex_state;
    var __ocaml_lex_state$1 = Lexing.engine(__ocaml_lex_tables, __ocaml_lex_state, lexbuf$1);
    switch (__ocaml_lex_state$1) {
      case 0 :
          return "LBRACE";
      case 1 :
          return "RBRACE";
      case 2 :
          return "LBRACKET";
      case 3 :
          return "RBRACKET";
      case 4 :
          return "RPAREN";
      case 5 :
          return "LPAREN";
      case 6 :
          return "LANGLEB";
      case 7 :
          return "RANGLEB";
      case 8 :
          return "EQUAL";
      case 9 :
          return "SEMICOLON";
      case 10 :
          return "COMMA";
      case 11 :
          var match = __ocaml_lex_comment_rec("[]", lexbuf$1, 41);
          if (match) {
            ___ocaml_lex_state = 0;
            continue ;
          } else {
            return "EOF";
          }
      case 12 :
          var match$1 = __ocaml_lex_multi_line_comment_rec("[]", lexbuf$1, 47);
          if (match$1) {
            ___ocaml_lex_state = 0;
            continue ;
          } else {
            return "EOF";
          }
      case 13 :
          var match$2 = __ocaml_lex_string_rec("[]", lexbuf$1, 55);
          if (match$2) {
            return /* constructor */{
                    tag: "STRING",
                    "0": match$2[0]
                  };
          } else {
            return "EOF";
          }
      case 14 :
          return /* constructor */{
                  tag: "INT",
                  "0": Caml_format.caml_int_of_string(Lexing.lexeme(lexbuf$1))
                };
      case 15 :
          return /* constructor */{
                  tag: "FLOAT",
                  "0": Caml_format.caml_float_of_string(Lexing.lexeme(lexbuf$1))
                };
      case 16 :
          return /* constructor */{
                  tag: "FLOAT",
                  "0": Number.NaN
                };
      case 17 :
          update_loc(lexbuf$1);
          ___ocaml_lex_state = 0;
          continue ;
      case 18 :
          ___ocaml_lex_state = 0;
          continue ;
      case 19 :
          var loc = from_lexbuf(lexbuf$1);
          var ident = Lexing.lexeme(lexbuf$1);
          switch (ident) {
            case "enum" :
                return "ENUM";
            case "extend" :
                return "EXTEND";
            case "extensions" :
                return "EXTENSIONS";
            case "import" :
                return /* constructor */{
                        tag: "IMPORT",
                        "0": loc
                      };
            case "map" :
                return "MAP";
            case "max" :
                return "MAX";
            case "message" :
                return "MESSAGE";
            case "oneof" :
                return /* constructor */{
                        tag: "ONE_OF",
                        "0": loc
                      };
            case "option" :
                return "OPTION";
            case "optional" :
                return "OPTIONAL";
            case "package" :
                return "PACKAGE";
            case "public" :
                return "PUBLIC";
            case "repeated" :
                return "REPEATED";
            case "required" :
                return "REQUIRED";
            case "syntax" :
                return "SYNTAX";
            case "to" :
                return "TO";
            default:
              return /* constructor */{
                      tag: "IDENT",
                      "0": /* tuple */[
                        loc,
                        ident
                      ]
                    };
          }
      case 20 :
          return "EOF";
      case 21 :
          var s = Curry._1(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String_literal",
                      "0": "Unknown character found ",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": "End_of_format"
                      }
                    },
                    "1": "Unknown character found %s"
                  }), Lexing.lexeme(lexbuf$1));
          throw [
                Caml_builtin_exceptions.failure,
                s
              ];
      default:
        Curry._1(lexbuf$1[/* refill_buff */0], lexbuf$1);
        ___ocaml_lex_state = __ocaml_lex_state$1;
        continue ;
    }
  };
}

function let_decl_of_and(param) {
  if (param !== undefined) {
    return "and";
  } else {
    return "let rec";
  }
}

function string_of_basic_type(param) {
  switch (param) {
    case "Bt_string" :
        return "string";
    case "Bt_float" :
        return "float";
    case "Bt_int" :
        return "int";
    case "Bt_int32" :
        return "int32";
    case "Bt_int64" :
        return "int64";
    case "Bt_bytes" :
        return "bytes";
    case "Bt_bool" :
        return "bool";
    
  }
}

function string_of_field_type(param) {
  if (typeof param === "string") {
    return "unit";
  } else if (/* XXX */param.tag === "Ft_basic_type") {
    return string_of_basic_type(param[0]);
  } else {
    var param$1 = param[0];
    var match = param$1[/* udt_module */0];
    if (match !== undefined) {
      return match + ("." + param$1[/* udt_type_name */1]);
    } else {
      return param$1[/* udt_type_name */1];
    }
  }
}

function string_of_record_field_type(param) {
  switch (/* XXX */param.tag) {
    case "Rft_required" :
        return string_of_field_type(param[0][0]);
    case "Rft_optional" :
        return string_of_field_type(param[0][0]) + " option";
    case "Rft_repeated_field" :
        var match = param[0];
        return string_of_field_type(match[1]) + (" " + (
                  match[0] ? "Pbrt.Repeated_field.t" : "list"
                ));
    case "Rft_associative_field" :
        var match$1 = param[0];
        if (match$1[0]) {
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "Char_literal",
                            "0": /* "(" */40,
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": ", ",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ") ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "(%s, %s) %s"
                        }), string_of_basic_type(match$1[2][0]), string_of_field_type(match$1[3][0]), "Hashtbl.t");
        } else {
          return Curry._3(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "Char_literal",
                            "0": /* "(" */40,
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": " * ",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": ") ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "(%s * %s) %s"
                        }), string_of_basic_type(match$1[2][0]), string_of_field_type(match$1[3][0]), "list");
        }
    case "Rft_variant_field" :
        return param[0][/* v_name */0];
    
  }
}

function function_name_of_user_defined(prefix, param) {
  var match = param[/* udt_module */0];
  if (match !== undefined) {
    return Curry._3(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "Char_literal",
                        "0": /* "." */46,
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "Char_literal",
                            "0": /* "_" */95,
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    },
                    "1": "%s.%s_%s"
                  }), match, prefix, param[/* udt_type_name */1]);
  } else {
    return Curry._2(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "Char_literal",
                        "0": /* "_" */95,
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": "End_of_format"
                        }
                      }
                    },
                    "1": "%s_%s"
                  }), prefix, param[/* udt_type_name */1]);
  }
}

function string_of_payload_kind(capitalize, payload_kind, packed) {
  var s;
  if (typeof payload_kind === "number") {
    switch (payload_kind) {
      case "Pk_bits32" :
          s = packed ? "bytes" : "bits32";
          break;
      case "Pk_bits64" :
          s = packed ? "bytes" : "bits64";
          break;
      case "Pk_bytes" :
          s = "bytes";
          break;
      
    }
  } else {
    s = packed ? "bytes" : "varint";
  }
  if (capitalize !== undefined) {
    return Caml_bytes.bytes_to_string(Bytes.capitalize(Caml_bytes.bytes_of_string(s)));
  } else {
    return s;
  }
}

function line$1(scope, s) {
  scope[/* items */0] = /* constructor */{
    tag: "::",
    "0": /* constructor */{
      tag: "Line",
      "0": s
    },
    "1": scope[/* items */0]
  };
  return /* () */0;
}

function scope(scope$1, f) {
  var sub_scope = /* record */[/* items */"[]"];
  Curry._1(f, sub_scope);
  scope$1[/* items */0] = /* constructor */{
    tag: "::",
    "0": /* constructor */{
      tag: "Scope",
      "0": sub_scope
    },
    "1": scope$1[/* items */0]
  };
  return /* () */0;
}

function indentation_prefix(n) {
  switch (n) {
    case 0 :
        return "";
    case 1 :
        return "  ";
    case 2 :
        return "    ";
    case 3 :
        return "      ";
    case 4 :
        return "        ";
    case 5 :
        return "          ";
    case 6 :
        return "            ";
    case 7 :
        return "              ";
    case 8 :
        return "                ";
    default:
      return Caml_bytes.bytes_to_string(Bytes.make(n, /* " " */32));
  }
}

function print(scope) {
  var loop = function (_acc, i, _param) {
    while(true) {
      var param = _param;
      var acc = _acc;
      if (param) {
        var match = param[0];
        if (/* XXX */match.tag === "Line") {
          _param = param[1];
          _acc = /* constructor */{
            tag: "::",
            "0": indentation_prefix(i) + match[0],
            "1": acc
          };
          continue ;
        } else {
          var items = match[0][/* items */0];
          var sub = loop("[]", i + 1 | 0, items);
          _param = param[1];
          _acc = Pervasives.$at(sub, acc);
          continue ;
        }
      } else {
        return acc;
      }
    };
  };
  return $$String.concat("\n", loop("[]", 0, scope[/* items */0]));
}

function runtime_function(param) {
  var match = param[0];
  if (match !== 427938126) {
    if (match !== 779642422) {
      throw [
            Caml_builtin_exceptions.failure,
            "Invalid encoding/OCaml type combination"
          ];
    }
    var match$1 = param[1];
    if (typeof match$1 === "number") {
      switch (match$1) {
        case "Pk_bits32" :
            switch (param[2]) {
              case "Bt_float" :
                  return "Pbrt.Encoder.float_as_bits32";
              case "Bt_int" :
                  return "Pbrt.Encoder.int_as_bits32";
              case "Bt_int32" :
                  return "Pbrt.Encoder.int32_as_bits32";
              case "Bt_string" :
              case "Bt_int64" :
              case "Bt_bytes" :
              case "Bt_bool" :
                  throw [
                        Caml_builtin_exceptions.failure,
                        "Invalid encoding/OCaml type combination"
                      ];
              
            }
        case "Pk_bits64" :
            switch (param[2]) {
              case "Bt_float" :
                  return "Pbrt.Encoder.float_as_bits64";
              case "Bt_int" :
                  return "Pbrt.Encoder.int_as_bits64";
              case "Bt_int64" :
                  return "Pbrt.Encoder.int64_as_bits64";
              case "Bt_string" :
              case "Bt_int32" :
              case "Bt_bytes" :
              case "Bt_bool" :
                  throw [
                        Caml_builtin_exceptions.failure,
                        "Invalid encoding/OCaml type combination"
                      ];
              
            }
        case "Pk_bytes" :
            var match$2 = param[2];
            if (match$2 !== 5) {
              if (match$2 !== 0) {
                throw [
                      Caml_builtin_exceptions.failure,
                      "Invalid encoding/OCaml type combination"
                    ];
              } else {
                return "Pbrt.Encoder.string";
              }
            } else {
              return "Pbrt.Encoder.bytes";
            }
        
      }
    } else if (match$1[0]) {
      switch (param[2]) {
        case "Bt_int" :
            return "Pbrt.Encoder.int_as_zigzag";
        case "Bt_int32" :
            return "Pbrt.Encoder.int32_as_zigzag";
        case "Bt_int64" :
            return "Pbrt.Encoder.int64_as_zigzag";
        case "Bt_string" :
        case "Bt_float" :
        case "Bt_bytes" :
        case "Bt_bool" :
            throw [
                  Caml_builtin_exceptions.failure,
                  "Invalid encoding/OCaml type combination"
                ];
        
      }
    } else {
      switch (param[2]) {
        case "Bt_int" :
            return "Pbrt.Encoder.int_as_varint";
        case "Bt_int32" :
            return "Pbrt.Encoder.int32_as_varint";
        case "Bt_int64" :
            return "Pbrt.Encoder.int64_as_varint";
        case "Bt_string" :
        case "Bt_float" :
        case "Bt_bytes" :
            throw [
                  Caml_builtin_exceptions.failure,
                  "Invalid encoding/OCaml type combination"
                ];
        case "Bt_bool" :
            return "Pbrt.Encoder.bool";
        
      }
    }
  } else {
    var match$3 = param[1];
    if (typeof match$3 === "number") {
      switch (match$3) {
        case "Pk_bits32" :
            switch (param[2]) {
              case "Bt_float" :
                  return "Pbrt.Decoder.float_as_bits32";
              case "Bt_int" :
                  return "Pbrt.Decoder.int_as_bits32";
              case "Bt_int32" :
                  return "Pbrt.Decoder.int32_as_bits32";
              case "Bt_string" :
              case "Bt_int64" :
              case "Bt_bytes" :
              case "Bt_bool" :
                  throw [
                        Caml_builtin_exceptions.failure,
                        "Invalid encoding/OCaml type combination"
                      ];
              
            }
        case "Pk_bits64" :
            switch (param[2]) {
              case "Bt_float" :
                  return "Pbrt.Decoder.float_as_bits64";
              case "Bt_int" :
                  return "Pbrt.Decoder.int_as_bits64";
              case "Bt_int64" :
                  return "Pbrt.Decoder.int64_as_bits64";
              case "Bt_string" :
              case "Bt_int32" :
              case "Bt_bytes" :
              case "Bt_bool" :
                  throw [
                        Caml_builtin_exceptions.failure,
                        "Invalid encoding/OCaml type combination"
                      ];
              
            }
        case "Pk_bytes" :
            var match$4 = param[2];
            if (match$4 !== 5) {
              if (match$4 !== 0) {
                throw [
                      Caml_builtin_exceptions.failure,
                      "Invalid encoding/OCaml type combination"
                    ];
              } else {
                return "Pbrt.Decoder.string";
              }
            } else {
              return "Pbrt.Decoder.bytes";
            }
        
      }
    } else if (match$3[0]) {
      switch (param[2]) {
        case "Bt_int" :
            return "Pbrt.Decoder.int_as_zigzag";
        case "Bt_int32" :
            return "Pbrt.Decoder.int32_as_zigzag";
        case "Bt_int64" :
            return "Pbrt.Decoder.int64_as_zigzag";
        case "Bt_string" :
        case "Bt_float" :
        case "Bt_bytes" :
        case "Bt_bool" :
            throw [
                  Caml_builtin_exceptions.failure,
                  "Invalid encoding/OCaml type combination"
                ];
        
      }
    } else {
      switch (param[2]) {
        case "Bt_int" :
            return "Pbrt.Decoder.int_as_varint";
        case "Bt_int32" :
            return "Pbrt.Decoder.int32_as_varint";
        case "Bt_int64" :
            return "Pbrt.Decoder.int64_as_varint";
        case "Bt_string" :
        case "Bt_float" :
        case "Bt_bytes" :
            throw [
                  Caml_builtin_exceptions.failure,
                  "Invalid encoding/OCaml type combination"
                ];
        case "Bt_bool" :
            return "Pbrt.Decoder.bool";
        
      }
    }
  }
}

function decode_basic_type(bt, pk) {
  return runtime_function(/* tuple */[
              /* Decode */427938126,
              pk,
              bt
            ]);
}

function decode_field_f(field_type, pk) {
  if (typeof field_type === "string") {
    return "Pbrt.Decoder.empty_nested d";
  } else if (/* XXX */field_type.tag === "Ft_basic_type") {
    return decode_basic_type(field_type[0], pk) + " d";
  } else {
    var t = field_type[0];
    var f_name = function_name_of_user_defined("decode", t);
    if (t[/* udt_nested */2]) {
      return f_name + " (Pbrt.Decoder.nested d)";
    } else {
      return f_name + " d";
    }
  }
}

function gen_decode_record(and_, param, sc) {
  var r_fields = param[/* r_fields */1];
  var r_name = param[/* r_name */0];
  var all_lists = List.fold_left((function (acc, param) {
          var rf_field_type = param[/* rf_field_type */1];
          switch (/* XXX */rf_field_type.tag) {
            case "Rft_repeated_field" :
            case "Rft_associative_field" :
                break;
            default:
              return acc;
          }
          if (rf_field_type[0][0]) {
            return acc;
          } else {
            return /* constructor */{
                    tag: "::",
                    "0": param[/* rf_label */0],
                    "1": acc
                  };
          }
        }), "[]", r_fields);
  var process_field_common = function (sc, encoding_number, pk_as_string, f) {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "| Some (",
                    "1": /* constructor */{
                      tag: "Int",
                      "0": "Int_i",
                      "1": "No_padding",
                      "2": "No_precision",
                      "3": /* constructor */{
                        tag: "String_literal",
                        "0": ", Pbrt.",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") -> (",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  },
                  "1": "| Some (%i, Pbrt.%s) -> ("
                }), encoding_number, pk_as_string));
    scope(sc, (function (sc) {
            Curry._1(f, sc);
            return line$1(sc, "loop ()");
          }));
    line$1(sc, ")");
    line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "| Some (",
                    "1": /* constructor */{
                      tag: "Int",
                      "0": "Int_i",
                      "1": "No_padding",
                      "2": "No_precision",
                      "3": /* constructor */{
                        tag: "String_literal",
                        "0": ", pk) -> raise (",
                        "1": "End_of_format"
                      }
                    }
                  },
                  "1": "| Some (%i, pk) -> raise ("
                }), encoding_number));
    scope(sc, (function (sc) {
            return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "String_literal",
                                  "0": "Protobuf.Decoder.Failure (Protobuf.Decoder.Unexpected_payload (",
                                  "1": /* constructor */{
                                    tag: "String",
                                    "0": "No_padding",
                                    "1": /* constructor */{
                                      tag: "String_literal",
                                      "0": ", pk))",
                                      "1": "End_of_format"
                                    }
                                  }
                                },
                                "1": "Protobuf.Decoder.Failure (Protobuf.Decoder.Unexpected_payload (%s, pk))"
                              }), Curry._2(Printf.sprintf(/* constructor */{
                                    tag: "Format",
                                    "0": /* constructor */{
                                      tag: "String_literal",
                                      "0": "\"Message(",
                                      "1": /* constructor */{
                                        tag: "String",
                                        "0": "No_padding",
                                        "1": /* constructor */{
                                          tag: "String_literal",
                                          "0": "), field(",
                                          "1": /* constructor */{
                                            tag: "Int",
                                            "0": "Int_i",
                                            "1": "No_padding",
                                            "2": "No_precision",
                                            "3": /* constructor */{
                                              tag: "String_literal",
                                              "0": ")\"",
                                              "1": "End_of_format"
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "1": "\"Message(%s), field(%i)\""
                                  }), r_name, encoding_number)));
          }));
    return line$1(sc, ")");
  };
  var mutable_record_name = r_name + "_mutable";
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " decode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " d =",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s decode_%s d ="
              }), let_decl_of_and(and_), r_name));
  return scope(sc, (function (sc) {
                line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "let v = default_",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": " () in",
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "let v = default_%s () in"
                            }), mutable_record_name));
                line$1(sc, "let rec loop () = ");
                scope(sc, (function (sc) {
                        line$1(sc, "match Pbrt.Decoder.key d with");
                        line$1(sc, "| None -> (");
                        scope(sc, (function (sc) {
                                return List.iter((function (field_name) {
                                              return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                  tag: "Format",
                                                                  "0": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": "v.",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "String_literal",
                                                                        "0": " <- List.rev v.",
                                                                        "1": /* constructor */{
                                                                          tag: "String",
                                                                          "0": "No_padding",
                                                                          "1": /* constructor */{
                                                                            tag: "Char_literal",
                                                                            "0": /* ";" */59,
                                                                            "1": "End_of_format"
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "1": "v.%s <- List.rev v.%s;"
                                                                }), field_name, field_name));
                                            }), all_lists);
                              }));
                        line$1(sc, ")");
                        List.iter((function (param) {
                                var rf_field_type = param[/* rf_field_type */1];
                                var rf_label = param[/* rf_label */0];
                                switch (/* XXX */rf_field_type.tag) {
                                  case "Rft_required" :
                                      var sc$1 = sc;
                                      var rf_label$1 = rf_label;
                                      var param$1 = rf_field_type[0];
                                      var pk = param$1[2];
                                      var field_type = param$1[0];
                                      return process_field_common(sc$1, param$1[1], string_of_payload_kind("()", pk, false), (function (sc) {
                                                    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                        tag: "Format",
                                                                        "0": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": "v.",
                                                                          "1": /* constructor */{
                                                                            tag: "String",
                                                                            "0": "No_padding",
                                                                            "1": /* constructor */{
                                                                              tag: "String_literal",
                                                                              "0": " <- ",
                                                                              "1": /* constructor */{
                                                                                tag: "String",
                                                                                "0": "No_padding",
                                                                                "1": /* constructor */{
                                                                                  tag: "Char_literal",
                                                                                  "0": /* ";" */59,
                                                                                  "1": "End_of_format"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        "1": "v.%s <- %s;"
                                                                      }), rf_label$1, decode_field_f(field_type, pk)));
                                                  }));
                                  case "Rft_optional" :
                                      var sc$2 = sc;
                                      var rf_label$2 = rf_label;
                                      var param$2 = rf_field_type[0];
                                      var pk$1 = param$2[2];
                                      var field_type$1 = param$2[0];
                                      return process_field_common(sc$2, param$2[1], string_of_payload_kind("()", pk$1, false), (function (sc) {
                                                    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                        tag: "Format",
                                                                        "0": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": "v.",
                                                                          "1": /* constructor */{
                                                                            tag: "String",
                                                                            "0": "No_padding",
                                                                            "1": /* constructor */{
                                                                              tag: "String_literal",
                                                                              "0": " <- Some (",
                                                                              "1": /* constructor */{
                                                                                tag: "String",
                                                                                "0": "No_padding",
                                                                                "1": /* constructor */{
                                                                                  tag: "String_literal",
                                                                                  "0": ");",
                                                                                  "1": "End_of_format"
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        "1": "v.%s <- Some (%s);"
                                                                      }), rf_label$2, decode_field_f(field_type$1, pk$1)));
                                                  }));
                                  case "Rft_repeated_field" :
                                      var sc$3 = sc;
                                      var rf_label$3 = rf_label;
                                      var param$3 = rf_field_type[0];
                                      var is_packed = param$3[4];
                                      var pk$2 = param$3[3];
                                      var encoding_number = param$3[2];
                                      var field_type$2 = param$3[1];
                                      if (param$3[0]) {
                                        if (is_packed) {
                                          return process_field_common(sc$3, encoding_number, "Bytes", (function (sc) {
                                                        line$1(sc, "Pbrt.Decoder.packed_fold (fun () d -> ");
                                                        scope(sc, (function (sc) {
                                                                return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                                    tag: "Format",
                                                                                    "0": /* constructor */{
                                                                                      tag: "String_literal",
                                                                                      "0": "Pbrt.Repeated_field.add (",
                                                                                      "1": /* constructor */{
                                                                                        tag: "String",
                                                                                        "0": "No_padding",
                                                                                        "1": /* constructor */{
                                                                                          tag: "String_literal",
                                                                                          "0": ") v.",
                                                                                          "1": /* constructor */{
                                                                                            tag: "String",
                                                                                            "0": "No_padding",
                                                                                            "1": /* constructor */{
                                                                                              tag: "Char_literal",
                                                                                              "0": /* ";" */59,
                                                                                              "1": "End_of_format"
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "1": "Pbrt.Repeated_field.add (%s) v.%s;"
                                                                                  }), decode_field_f(field_type$2, pk$2), rf_label$3));
                                                              }));
                                                        return line$1(sc, ") () d;");
                                                      }));
                                        } else {
                                          return process_field_common(sc$3, encoding_number, string_of_payload_kind("()", pk$2, false), (function (sc) {
                                                        return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                            tag: "Format",
                                                                            "0": /* constructor */{
                                                                              tag: "String_literal",
                                                                              "0": "Pbrt.Repeated_field.add (",
                                                                              "1": /* constructor */{
                                                                                tag: "String",
                                                                                "0": "No_padding",
                                                                                "1": /* constructor */{
                                                                                  tag: "String_literal",
                                                                                  "0": ") v.",
                                                                                  "1": /* constructor */{
                                                                                    tag: "String",
                                                                                    "0": "No_padding",
                                                                                    "1": /* constructor */{
                                                                                      tag: "String_literal",
                                                                                      "0": "; ",
                                                                                      "1": "End_of_format"
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "1": "Pbrt.Repeated_field.add (%s) v.%s; "
                                                                          }), decode_field_f(field_type$2, pk$2), rf_label$3));
                                                      }));
                                        }
                                      } else if (is_packed) {
                                        return process_field_common(sc$3, encoding_number, "Bytes", (function (sc) {
                                                      return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                          tag: "Format",
                                                                          "0": /* constructor */{
                                                                            tag: "String_literal",
                                                                            "0": "v.",
                                                                            "1": /* constructor */{
                                                                              tag: "String",
                                                                              "0": "No_padding",
                                                                              "1": /* constructor */{
                                                                                tag: "String_literal",
                                                                                "0": " <- Pbrt.Decoder.packed_fold (fun l d -> (",
                                                                                "1": /* constructor */{
                                                                                  tag: "String",
                                                                                  "0": "No_padding",
                                                                                  "1": /* constructor */{
                                                                                    tag: "String_literal",
                                                                                    "0": ")::l) [] d;",
                                                                                    "1": "End_of_format"
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "1": "v.%s <- Pbrt.Decoder.packed_fold (fun l d -> (%s)::l) [] d;"
                                                                        }), rf_label$3, decode_field_f(field_type$2, pk$2)));
                                                    }));
                                      } else {
                                        return process_field_common(sc$3, encoding_number, string_of_payload_kind("()", pk$2, false), (function (sc) {
                                                      return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                                          tag: "Format",
                                                                          "0": /* constructor */{
                                                                            tag: "String_literal",
                                                                            "0": "v.",
                                                                            "1": /* constructor */{
                                                                              tag: "String",
                                                                              "0": "No_padding",
                                                                              "1": /* constructor */{
                                                                                tag: "String_literal",
                                                                                "0": " <- (",
                                                                                "1": /* constructor */{
                                                                                  tag: "String",
                                                                                  "0": "No_padding",
                                                                                  "1": /* constructor */{
                                                                                    tag: "String_literal",
                                                                                    "0": ") :: v.",
                                                                                    "1": /* constructor */{
                                                                                      tag: "String",
                                                                                      "0": "No_padding",
                                                                                      "1": /* constructor */{
                                                                                        tag: "Char_literal",
                                                                                        "0": /* ";" */59,
                                                                                        "1": "End_of_format"
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          },
                                                                          "1": "v.%s <- (%s) :: v.%s;"
                                                                        }), rf_label$3, decode_field_f(field_type$2, pk$2), rf_label$3));
                                                    }));
                                      }
                                  case "Rft_associative_field" :
                                      var sc$4 = sc;
                                      var rf_label$4 = rf_label;
                                      var param$4 = rf_field_type[0];
                                      var match = param$4[3];
                                      var value_pk = match[1];
                                      var value_type = match[0];
                                      var match$1 = param$4[2];
                                      var at = param$4[0];
                                      var decode_key_f = decode_basic_type(match$1[0], match$1[1]);
                                      return process_field_common(sc$4, param$4[1], "Bytes", (function (sc) {
                                                    line$1(sc, "let decode_value = (fun d ->");
                                                    scope(sc, (function (sc) {
                                                            return line$1(sc, decode_field_f(value_type, value_pk));
                                                          }));
                                                    line$1(sc, ") in");
                                                    var decode_expression = Curry._1(Printf.sprintf(/* constructor */{
                                                              tag: "Format",
                                                              "0": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "(Pbrt.Decoder.map_entry d ~decode_key:",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": " ~decode_value)",
                                                                    "1": "End_of_format"
                                                                  }
                                                                }
                                                              },
                                                              "1": "(Pbrt.Decoder.map_entry d ~decode_key:%s ~decode_value)"
                                                            }), decode_key_f);
                                                    if (at) {
                                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                                    tag: "Format",
                                                                    "0": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": "let a, b = ",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": " in",
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    },
                                                                    "1": "let a, b = %s in"
                                                                  }), decode_expression));
                                                      return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                                          tag: "Format",
                                                                          "0": /* constructor */{
                                                                            tag: "String_literal",
                                                                            "0": "Hashtbl.add v.",
                                                                            "1": /* constructor */{
                                                                              tag: "String",
                                                                              "0": "No_padding",
                                                                              "1": /* constructor */{
                                                                                tag: "String_literal",
                                                                                "0": " a b;",
                                                                                "1": "End_of_format"
                                                                              }
                                                                            }
                                                                          },
                                                                          "1": "Hashtbl.add v.%s a b;"
                                                                        }), rf_label$4));
                                                    } else {
                                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                                    tag: "Format",
                                                                    "0": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": "v.",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": " <- (",
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    },
                                                                    "1": "v.%s <- ("
                                                                  }), rf_label$4));
                                                      scope(sc, (function (sc) {
                                                              return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                                  tag: "Format",
                                                                                  "0": /* constructor */{
                                                                                    tag: "String",
                                                                                    "0": "No_padding",
                                                                                    "1": /* constructor */{
                                                                                      tag: "String_literal",
                                                                                      "0": "::v.",
                                                                                      "1": /* constructor */{
                                                                                        tag: "String",
                                                                                        "0": "No_padding",
                                                                                        "1": /* constructor */{
                                                                                          tag: "Char_literal",
                                                                                          "0": /* ";" */59,
                                                                                          "1": "End_of_format"
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "1": "%s::v.%s;"
                                                                                }), decode_expression, rf_label$4));
                                                            }));
                                                      return line$1(sc, ");");
                                                    }
                                                  }));
                                  case "Rft_variant_field" :
                                      var sc$5 = sc;
                                      var rf_label$5 = rf_label;
                                      var param$5 = rf_field_type[0];
                                      return List.iter((function (param) {
                                                    var pk = param[/* vc_payload_kind */3];
                                                    var vc_field_type = param[/* vc_field_type */1];
                                                    var vc_constructor = param[/* vc_constructor */0];
                                                    return process_field_common(sc$5, param[/* vc_encoding_number */2], string_of_payload_kind("()", pk, false), (function (sc) {
                                                                  if (vc_field_type) {
                                                                    return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                                                        tag: "Format",
                                                                                        "0": /* constructor */{
                                                                                          tag: "String_literal",
                                                                                          "0": "v.",
                                                                                          "1": /* constructor */{
                                                                                            tag: "String",
                                                                                            "0": "No_padding",
                                                                                            "1": /* constructor */{
                                                                                              tag: "String_literal",
                                                                                              "0": " <- ",
                                                                                              "1": /* constructor */{
                                                                                                tag: "String",
                                                                                                "0": "No_padding",
                                                                                                "1": /* constructor */{
                                                                                                  tag: "String_literal",
                                                                                                  "0": " (",
                                                                                                  "1": /* constructor */{
                                                                                                    tag: "String",
                                                                                                    "0": "No_padding",
                                                                                                    "1": /* constructor */{
                                                                                                      tag: "String_literal",
                                                                                                      "0": ");",
                                                                                                      "1": "End_of_format"
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        "1": "v.%s <- %s (%s);"
                                                                                      }), rf_label$5, vc_constructor, decode_field_f(vc_field_type[0], pk)));
                                                                  } else {
                                                                    line$1(sc, "Pbrt.Decoder.empty_nested d;");
                                                                    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                                                        tag: "Format",
                                                                                        "0": /* constructor */{
                                                                                          tag: "String_literal",
                                                                                          "0": "v.",
                                                                                          "1": /* constructor */{
                                                                                            tag: "String",
                                                                                            "0": "No_padding",
                                                                                            "1": /* constructor */{
                                                                                              tag: "String_literal",
                                                                                              "0": " <- ",
                                                                                              "1": /* constructor */{
                                                                                                tag: "String",
                                                                                                "0": "No_padding",
                                                                                                "1": /* constructor */{
                                                                                                  tag: "Char_literal",
                                                                                                  "0": /* ";" */59,
                                                                                                  "1": "End_of_format"
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        "1": "v.%s <- %s;"
                                                                                      }), rf_label$5, vc_constructor));
                                                                  }
                                                                }));
                                                  }), param$5[/* v_constructors */1]);
                                  
                                }
                              }), r_fields);
                        return line$1(sc, "| Some (n, payload_kind) -> Pbrt.Decoder.skip d payload_kind; loop ()");
                      }));
                line$1(sc, "in");
                line$1(sc, "loop ();");
                line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "let v:",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "String_literal",
                                    "0": " = Obj.magic v in",
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "let v:%s = Obj.magic v in"
                            }), r_name));
                return line$1(sc, "v");
              }));
}

function gen_decode_variant(and_, param, sc) {
  var v_constructors = param[/* v_constructors */1];
  var v_name = param[/* v_name */0];
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " decode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " d = ",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s decode_%s d = "
              }), let_decl_of_and(and_), v_name));
  return scope(sc, (function (sc) {
                line$1(sc, Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "let rec loop () = ",
                            "1": "End_of_format"
                          },
                          "1": "let rec loop () = "
                        }));
                scope(sc, (function (sc) {
                        line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "String_literal",
                                        "0": "let ret:",
                                        "1": /* constructor */{
                                          tag: "String",
                                          "0": "No_padding",
                                          "1": /* constructor */{
                                            tag: "String_literal",
                                            "0": " = match Pbrt.Decoder.key d with",
                                            "1": "End_of_format"
                                          }
                                        }
                                      },
                                      "1": "let ret:%s = match Pbrt.Decoder.key d with"
                                    }), v_name));
                        scope(sc, (function (sc) {
                                line$1(sc, "| None -> failwith \"None of the known key is found\"");
                                List.iter((function (ctor) {
                                        var sc$1 = sc;
                                        var param = ctor;
                                        var vc_encoding_number = param[/* vc_encoding_number */2];
                                        var vc_field_type = param[/* vc_field_type */1];
                                        var vc_constructor = param[/* vc_constructor */0];
                                        if (vc_field_type) {
                                          return line$1(sc$1, Curry._3(Printf.sprintf(/* constructor */{
                                                              tag: "Format",
                                                              "0": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "| Some (",
                                                                "1": /* constructor */{
                                                                  tag: "Int",
                                                                  "0": "Int_i",
                                                                  "1": "No_padding",
                                                                  "2": "No_precision",
                                                                  "3": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": ", _) -> ",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "String_literal",
                                                                        "0": " (",
                                                                        "1": /* constructor */{
                                                                          tag: "String",
                                                                          "0": "No_padding",
                                                                          "1": /* constructor */{
                                                                            tag: "Char_literal",
                                                                            "0": /* ")" */41,
                                                                            "1": "End_of_format"
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "1": "| Some (%i, _) -> %s (%s)"
                                                            }), vc_encoding_number, vc_constructor, decode_field_f(vc_field_type[0], param[/* vc_payload_kind */3])));
                                        } else {
                                          return line$1(sc$1, Curry._2(Printf.sprintf(/* constructor */{
                                                              tag: "Format",
                                                              "0": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "| Some (",
                                                                "1": /* constructor */{
                                                                  tag: "Int",
                                                                  "0": "Int_i",
                                                                  "1": "No_padding",
                                                                  "2": "No_precision",
                                                                  "3": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": ", _) -> (Pbrt.Decoder.empty_nested d ; ",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "Char_literal",
                                                                        "0": /* ")" */41,
                                                                        "1": "End_of_format"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "1": "| Some (%i, _) -> (Pbrt.Decoder.empty_nested d ; %s)"
                                                            }), vc_encoding_number, vc_constructor));
                                        }
                                      }), v_constructors);
                                line$1(sc, "| Some (n, payload_kind) -> (");
                                line$1(sc, "  Pbrt.Decoder.skip d payload_kind; ");
                                line$1(sc, "  loop () ");
                                return line$1(sc, ")");
                              }));
                        line$1(sc, "in");
                        return line$1(sc, "ret");
                      }));
                line$1(sc, "in");
                return line$1(sc, "loop ()");
              }));
}

function gen_decode_const_variant(and_, param, sc) {
  var cv_constructors = param[/* cv_constructors */1];
  var cv_name = param[/* cv_name */0];
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " decode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " d = ",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s decode_%s d = "
              }), let_decl_of_and(and_), cv_name));
  return scope(sc, (function (sc) {
                line$1(sc, "match Pbrt.Decoder.int_as_varint d with");
                List.iter((function (param) {
                        return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "String_literal",
                                              "0": "| ",
                                              "1": /* constructor */{
                                                tag: "Int",
                                                "0": "Int_i",
                                                "1": "No_padding",
                                                "2": "No_precision",
                                                "3": /* constructor */{
                                                  tag: "String_literal",
                                                  "0": " -> (",
                                                  "1": /* constructor */{
                                                    tag: "String",
                                                    "0": "No_padding",
                                                    "1": /* constructor */{
                                                      tag: "Char_literal",
                                                      "0": /* ":" */58,
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "Char_literal",
                                                          "0": /* ")" */41,
                                                          "1": "End_of_format"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "1": "| %i -> (%s:%s)"
                                          }), param[1], param[0], cv_name));
                      }), cv_constructors);
                return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                    tag: "Format",
                                    "0": /* constructor */{
                                      tag: "String_literal",
                                      "0": "| _ -> failwith \"Unknown value for enum ",
                                      "1": /* constructor */{
                                        tag: "String",
                                        "0": "No_padding",
                                        "1": /* constructor */{
                                          tag: "Char_literal",
                                          "0": /* "\"" */34,
                                          "1": "End_of_format"
                                        }
                                      }
                                    },
                                    "1": "| _ -> failwith \"Unknown value for enum %s\""
                                  }), cv_name));
              }));
}

function gen_struct(and_, t, sc) {
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        tmp = /* tuple */[
          gen_decode_record(and_, match[0], sc),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          gen_decode_variant(and_, match[0], sc),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          gen_decode_const_variant(and_, match[0], sc),
          true
        ];
        break;
    
  }
  return tmp[1];
}

function gen_sig(and_, t, sc) {
  var f = function (type_name) {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "val decode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " : Pbrt.Decoder.t -> ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": "End_of_format"
                        }
                      }
                    }
                  },
                  "1": "val decode_%s : Pbrt.Decoder.t -> %s"
                }), type_name, type_name));
    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "(** [decode_",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " decoder] decodes a [",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "String_literal",
                                  "0": "] value from [decoder] *)",
                                  "1": "End_of_format"
                                }
                              }
                            }
                          }
                        },
                        "1": "(** [decode_%s decoder] decodes a [%s] value from [decoder] *)"
                      }), type_name, type_name));
  };
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        tmp = /* tuple */[
          f(match[0][/* r_name */0]),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          f(match[0][/* v_name */0]),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          f(match[0][/* cv_name */0]),
          true
        ];
        break;
    
  }
  return tmp[1];
}

var Codegen_decode = {
  gen_sig: gen_sig,
  gen_struct: gen_struct,
  ocamldoc_title: "Protobuf Decoding"
};

var __log__ = /* record */[/* contents */undefined];

function log(x) {
  var match = __log__[0];
  if (match !== undefined) {
    return Printf.fprintf(Caml_option.valFromOption(match), x);
  } else {
    return Printf.ifprintf(Pervasives.stdout, x);
  }
}

function endline(s) {
  return Curry._1(log(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "Char_literal",
                      "0": /* "\n" */10,
                      "1": "End_of_format"
                    }
                  },
                  "1": "%s\n"
                }), s);
}

function gen_pp_field(field_type) {
  if (typeof field_type !== "string" && /* XXX */field_type.tag !== "Ft_basic_type") {
    return function_name_of_user_defined("pp", field_type[0]);
  }
  return Curry._1(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "Pbrt.Pp.pp_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": "End_of_format"
                    }
                  },
                  "1": "Pbrt.Pp.pp_%s"
                }), string_of_field_type(field_type));
}

function gen_pp_record(and_, param, sc) {
  var r_fields = param[/* r_fields */1];
  var r_name = param[/* r_name */0];
  Curry._1(log(/* constructor */{
            tag: "Format",
            "0": /* constructor */{
              tag: "String_literal",
              "0": "gen_pp, record_name: ",
              "1": /* constructor */{
                tag: "String",
                "0": "No_padding",
                "1": /* constructor */{
                  tag: "Char_literal",
                  "0": /* "\n" */10,
                  "1": "End_of_format"
                }
              }
            },
            "1": "gen_pp, record_name: %s\n"
          }), r_name);
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " pp_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " fmt (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") = ",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s pp_%s fmt (v:%s) = "
              }), let_decl_of_and(and_), r_name, r_name));
  return scope(sc, (function (sc) {
                line$1(sc, "let pp_i fmt () =");
                scope(sc, (function (sc) {
                        line$1(sc, "Format.pp_open_vbox fmt 1;");
                        List.iter((function (record_field) {
                                var rf_field_type = record_field[/* rf_field_type */1];
                                var rf_label = record_field[/* rf_label */0];
                                var var_name = Curry._1(Printf.sprintf(/* constructor */{
                                          tag: "Format",
                                          "0": /* constructor */{
                                            tag: "String_literal",
                                            "0": "v.",
                                            "1": /* constructor */{
                                              tag: "String",
                                              "0": "No_padding",
                                              "1": "End_of_format"
                                            }
                                          },
                                          "1": "v.%s"
                                        }), rf_label);
                                switch (/* XXX */rf_field_type.tag) {
                                  case "Rft_required" :
                                      var field_string_of = gen_pp_field(rf_field_type[0][0]);
                                      return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "String_literal",
                                                            "0": "Pbrt.Pp.pp_record_field \"",
                                                            "1": /* constructor */{
                                                              tag: "String",
                                                              "0": "No_padding",
                                                              "1": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "\" ",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": " fmt ",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "Char_literal",
                                                                        "0": /* ";" */59,
                                                                        "1": "End_of_format"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "1": "Pbrt.Pp.pp_record_field \"%s\" %s fmt %s;"
                                                        }), rf_label, field_string_of, var_name));
                                  case "Rft_optional" :
                                      var field_string_of$1 = gen_pp_field(rf_field_type[0][0]);
                                      return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "String_literal",
                                                            "0": "Pbrt.Pp.pp_record_field \"",
                                                            "1": /* constructor */{
                                                              tag: "String",
                                                              "0": "No_padding",
                                                              "1": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "\" (Pbrt.Pp.pp_option ",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": ") fmt ",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "Char_literal",
                                                                        "0": /* ";" */59,
                                                                        "1": "End_of_format"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "1": "Pbrt.Pp.pp_record_field \"%s\" (Pbrt.Pp.pp_option %s) fmt %s;"
                                                        }), rf_label, field_string_of$1, var_name));
                                  case "Rft_repeated_field" :
                                      var match = rf_field_type[0];
                                      var field_string_of$2 = gen_pp_field(match[1]);
                                      if (match[0]) {
                                        return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                            tag: "Format",
                                                            "0": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": "Pbrt.Pp.pp_record_field \"",
                                                              "1": /* constructor */{
                                                                tag: "String",
                                                                "0": "No_padding",
                                                                "1": /* constructor */{
                                                                  tag: "String_literal",
                                                                  "0": "\" (Pbrt.Pp.pp_list ",
                                                                  "1": /* constructor */{
                                                                    tag: "String",
                                                                    "0": "No_padding",
                                                                    "1": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": ") fmt (Pbrt.Repeated_field.to_list ",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": ");",
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "1": "Pbrt.Pp.pp_record_field \"%s\" (Pbrt.Pp.pp_list %s) fmt (Pbrt.Repeated_field.to_list %s);"
                                                          }), rf_label, field_string_of$2, var_name));
                                      } else {
                                        return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                            tag: "Format",
                                                            "0": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": "Pbrt.Pp.pp_record_field \"",
                                                              "1": /* constructor */{
                                                                tag: "String",
                                                                "0": "No_padding",
                                                                "1": /* constructor */{
                                                                  tag: "String_literal",
                                                                  "0": "\" (Pbrt.Pp.pp_list ",
                                                                  "1": /* constructor */{
                                                                    tag: "String",
                                                                    "0": "No_padding",
                                                                    "1": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": ") fmt ",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "Char_literal",
                                                                          "0": /* ";" */59,
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "1": "Pbrt.Pp.pp_record_field \"%s\" (Pbrt.Pp.pp_list %s) fmt %s;"
                                                          }), rf_label, field_string_of$2, var_name));
                                      }
                                  case "Rft_associative_field" :
                                      var match$1 = rf_field_type[0];
                                      var pp_runtime_function = match$1[0] ? "pp_hastable" : "pp_associative_list";
                                      var pp_key = gen_pp_field(/* constructor */{
                                            tag: "Ft_basic_type",
                                            "0": match$1[2][0]
                                          });
                                      var pp_value = gen_pp_field(match$1[3][0]);
                                      return line$1(sc, Curry._5(Printf.sprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "String_literal",
                                                            "0": "Pbrt.Pp.pp_record_field \"",
                                                            "1": /* constructor */{
                                                              tag: "String",
                                                              "0": "No_padding",
                                                              "1": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "\" (Pbrt.Pp.",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "Char_literal",
                                                                    "0": /* " " */32,
                                                                    "1": /* constructor */{
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
                                                                            "0": ") fmt ",
                                                                            "1": /* constructor */{
                                                                              tag: "String",
                                                                              "0": "No_padding",
                                                                              "1": /* constructor */{
                                                                                tag: "Char_literal",
                                                                                "0": /* ";" */59,
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
                                                          },
                                                          "1": "Pbrt.Pp.pp_record_field \"%s\" (Pbrt.Pp.%s %s %s) fmt %s;"
                                                        }), rf_label, pp_runtime_function, pp_key, pp_value, var_name));
                                  case "Rft_variant_field" :
                                      return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                          tag: "Format",
                                                          "0": /* constructor */{
                                                            tag: "String_literal",
                                                            "0": "Pbrt.Pp.pp_record_field \"",
                                                            "1": /* constructor */{
                                                              tag: "String",
                                                              "0": "No_padding",
                                                              "1": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": "\" ",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": " fmt ",
                                                                    "1": /* constructor */{
                                                                      tag: "String",
                                                                      "0": "No_padding",
                                                                      "1": /* constructor */{
                                                                        tag: "Char_literal",
                                                                        "0": /* ";" */59,
                                                                        "1": "End_of_format"
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "1": "Pbrt.Pp.pp_record_field \"%s\" %s fmt %s;"
                                                        }), rf_label, "pp_" + rf_field_type[0][/* v_name */0], var_name));
                                  
                                }
                              }), r_fields);
                        return line$1(sc, "Format.pp_close_box fmt ()");
                      }));
                line$1(sc, "in");
                return line$1(sc, "Pbrt.Pp.pp_brk pp_i fmt ()");
              }));
}

function gen_pp_variant(and_, param, sc) {
  var v_constructors = param[/* v_constructors */1];
  var v_name = param[/* v_name */0];
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " pp_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " fmt (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") =",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s pp_%s fmt (v:%s) ="
              }), let_decl_of_and(and_), v_name, v_name));
  return scope(sc, (function (sc) {
                line$1(sc, "match v with");
                return List.iter((function (param) {
                              var vc_field_type = param[/* vc_field_type */1];
                              var vc_constructor = param[/* vc_constructor */0];
                              if (vc_field_type) {
                                var field_string_of = gen_pp_field(vc_field_type[0]);
                                return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " x -> Format.fprintf fmt \"",
                                                          "1": /* constructor */{
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
                                                              tag: "String",
                                                              "0": "No_padding",
                                                              "1": /* constructor */{
                                                                tag: "Char_literal",
                                                                "0": /* "(" */40,
                                                                "1": /* constructor */{
                                                                  tag: "Char_literal",
                                                                  "0": /* "%" */37,
                                                                  "1": /* constructor */{
                                                                    tag: "String_literal",
                                                                    "0": "a)",
                                                                    "1": /* constructor */{
                                                                      tag: "Formatting_lit",
                                                                      "0": "Close_box",
                                                                      "1": /* constructor */{
                                                                        tag: "String_literal",
                                                                        "0": "\" ",
                                                                        "1": /* constructor */{
                                                                          tag: "String",
                                                                          "0": "No_padding",
                                                                          "1": /* constructor */{
                                                                            tag: "String_literal",
                                                                            "0": " x",
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
                                                    },
                                                    "1": "| %s x -> Format.fprintf fmt \"@[%s(%%a)@]\" %s x"
                                                  }), vc_constructor, vc_constructor, field_string_of));
                              } else {
                                return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": "  -> Format.fprintf fmt \"",
                                                          "1": /* constructor */{
                                                            tag: "String",
                                                            "0": "No_padding",
                                                            "1": /* constructor */{
                                                              tag: "Char_literal",
                                                              "0": /* "\"" */34,
                                                              "1": "End_of_format"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "1": "| %s  -> Format.fprintf fmt \"%s\""
                                                  }), vc_constructor, vc_constructor));
                              }
                            }), v_constructors);
              }));
}

function gen_pp_const_variant(and_, param, sc) {
  var cv_constructors = param[/* cv_constructors */1];
  var cv_name = param[/* cv_name */0];
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " pp_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " fmt (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") =",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s pp_%s fmt (v:%s) ="
              }), let_decl_of_and(and_), cv_name, cv_name));
  return scope(sc, (function (sc) {
                line$1(sc, "match v with");
                return List.iter((function (param) {
                              var name = param[0];
                              return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                  tag: "Format",
                                                  "0": /* constructor */{
                                                    tag: "String_literal",
                                                    "0": "| ",
                                                    "1": /* constructor */{
                                                      tag: "String",
                                                      "0": "No_padding",
                                                      "1": /* constructor */{
                                                        tag: "String_literal",
                                                        "0": " -> Format.fprintf fmt \"",
                                                        "1": /* constructor */{
                                                          tag: "String",
                                                          "0": "No_padding",
                                                          "1": /* constructor */{
                                                            tag: "Char_literal",
                                                            "0": /* "\"" */34,
                                                            "1": "End_of_format"
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "1": "| %s -> Format.fprintf fmt \"%s\""
                                                }), name, name));
                            }), cv_constructors);
              }));
}

function gen_struct$1(and_, t, sc) {
  var match = t[/* spec */1];
  switch (/* XXX */match.tag) {
    case "Record" :
        gen_pp_record(and_, match[0], sc);
        break;
    case "Variant" :
        gen_pp_variant(and_, match[0], sc);
        break;
    case "Const_variant" :
        gen_pp_const_variant(and_, match[0], sc);
        break;
    
  }
  return true;
}

function gen_sig$1(and_, t, sc) {
  var f = function (type_name) {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "val pp_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " : Format.formatter -> ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": " -> unit ",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  },
                  "1": "val pp_%s : Format.formatter -> %s -> unit "
                }), type_name, type_name));
    return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "(** [pp_",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " v] formats v] *)",
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "(** [pp_%s v] formats v] *)"
                      }), type_name));
  };
  var match = t[/* spec */1];
  switch (/* XXX */match.tag) {
    case "Record" :
        f(match[0][/* r_name */0]);
        break;
    case "Variant" :
        f(match[0][/* v_name */0]);
        break;
    case "Const_variant" :
        f(match[0][/* cv_name */0]);
        break;
    
  }
  return true;
}

var Codegen_pp = {
  gen_sig: gen_sig$1,
  gen_struct: gen_struct$1,
  ocamldoc_title: "Formatters"
};

function height(param) {
  if (param) {
    return param[4];
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* constructor */{
          tag: "Node",
          "0": l,
          "1": x,
          "2": d,
          "3": r,
          "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, x, d, r) {
  var hl = l ? l[4] : 0;
  var hr = r ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      } else if (lr) {
        return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r) {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height(rr) >= height(rl)) {
        return create(create(l, x, d, rl), rv, rd, rr);
      } else if (rl) {
        return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": l,
            "1": x,
            "2": d,
            "3": r,
            "4": hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
}

function add(x, data, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = Caml_obj.caml_compare(x, v);
    if (c === 0) {
      return /* constructor */{
              tag: "Node",
              "0": l,
              "1": x,
              "2": data,
              "3": r,
              "4": param[4]
            };
    } else if (c < 0) {
      return bal(add(x, data, l), v, d, r);
    } else {
      return bal(l, v, d, add(x, data, r));
    }
  } else {
    return /* constructor */{
            tag: "Node",
            "0": "Empty",
            "1": x,
            "2": data,
            "3": "Empty",
            "4": 1
          };
  }
}

function find(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = Caml_obj.caml_compare(x, param[1]);
      if (c === 0) {
        return param[2];
      } else {
        _param = c < 0 ? param[0] : param[3];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function map$1(f, param) {
  if (param) {
    var l$prime = map$1(f, param[0]);
    var d$prime = Curry._1(f, param[2]);
    var r$prime = map$1(f, param[3]);
    return /* constructor */{
            tag: "Node",
            "0": l$prime,
            "1": param[1],
            "2": d$prime,
            "3": r$prime,
            "4": param[4]
          };
  } else {
    return "Empty";
  }
}

function fold(f, _m, _accu) {
  while(true) {
    var accu = _accu;
    var m = _m;
    if (m) {
      _accu = Curry._3(f, m[1], m[2], fold(f, m[0], accu));
      _m = m[3];
      continue ;
    } else {
      return accu;
    }
  };
}

function min_value(param) {
  var match = param[0];
  if (match !== undefined) {
    var match$1 = param[1];
    if (match$1 !== undefined) {
      return Caml_option.some(Caml_obj.caml_min(Caml_option.valFromOption(match), Caml_option.valFromOption(match$1)));
    } else {
      throw [
            Caml_builtin_exceptions.failure,
            "min_value error"
          ];
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "min_value error"
        ];
  }
}

function eq_value(param) {
  var match = param[0];
  if (match !== undefined) {
    var match$1 = param[1];
    if (match$1 !== undefined) {
      return Caml_obj.caml_equal(Caml_option.valFromOption(match), Caml_option.valFromOption(match$1));
    } else {
      throw [
            Caml_builtin_exceptions.failure,
            "eq_value error"
          ];
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "eq_value error"
        ];
  }
}

function string_of_option(f, param) {
  if (param !== undefined) {
    return Curry._1(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String_literal",
                      "0": "Some(",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* ")" */41,
                          "1": "End_of_format"
                        }
                      }
                    },
                    "1": "Some(%s)"
                  }), Curry._1(f, Caml_option.valFromOption(param)));
  } else {
    return "None";
  }
}

function reset(g) {
  return map$1((function (core) {
                return /* record */[
                        /* core */core,
                        /* index */undefined,
                        /* lowlink */undefined,
                        /* on_stack */false
                      ];
              }), g);
}

function strong_connect(g, sccs, stack, index, v) {
  Curry._2(log(/* constructor */{
            tag: "Format",
            "0": /* constructor */{
              tag: "String_literal",
              "0": "[Graph] processing v [",
              "1": /* constructor */{
                tag: "Int",
                "0": "Int_i",
                "1": "No_padding",
                "2": "No_precision",
                "3": /* constructor */{
                  tag: "String_literal",
                  "0": "], index: ",
                  "1": /* constructor */{
                    tag: "Int",
                    "0": "Int_i",
                    "1": "No_padding",
                    "2": "No_precision",
                    "3": /* constructor */{
                      tag: "Char_literal",
                      "0": /* "\n" */10,
                      "1": "End_of_format"
                    }
                  }
                }
              }
            },
            "1": "[Graph] processing v [%i], index: %i\n"
          }), v[/* core */0][/* id */0], index);
  v[/* index */1] = index;
  v[/* lowlink */2] = index;
  var stack$1 = /* constructor */{
    tag: "::",
    "0": v,
    "1": stack
  };
  v[/* on_stack */3] = true;
  var match = List.fold_left((function (param, id) {
          var index = param[2];
          var stack = param[1];
          var sccs = param[0];
          var w = find(id, g);
          Curry._2(log(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String_literal",
                      "0": "[Graph] sub w [",
                      "1": /* constructor */{
                        tag: "Int",
                        "0": "Int_i",
                        "1": "No_padding",
                        "2": "No_precision",
                        "3": /* constructor */{
                          tag: "String_literal",
                          "0": "], w.index: ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* "\n" */10,
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    },
                    "1": "[Graph] sub w [%i], w.index: %s\n"
                  }), w[/* core */0][/* id */0], string_of_option((function (prim) {
                      return String(prim);
                    }), w[/* index */1]));
          var match = w[/* index */1];
          if (match !== undefined) {
            if (w[/* on_stack */3]) {
              v[/* lowlink */2] = min_value(/* tuple */[
                    v[/* lowlink */2],
                    w[/* index */1]
                  ]);
            }
            return /* tuple */[
                    sccs,
                    stack,
                    index
                  ];
          } else {
            var match$1 = strong_connect(g, sccs, stack, index + 1 | 0, w);
            v[/* lowlink */2] = min_value(/* tuple */[
                  v[/* lowlink */2],
                  w[/* lowlink */2]
                ]);
            return /* tuple */[
                    match$1[0],
                    match$1[1],
                    match$1[2]
                  ];
          }
        }), /* tuple */[
        sccs,
        stack$1,
        index
      ], v[/* core */0][/* sub */1]);
  var index$1 = match[2];
  var stack$2 = match[1];
  var sccs$1 = match[0];
  Curry._3(log(/* constructor */{
            tag: "Format",
            "0": /* constructor */{
              tag: "String_literal",
              "0": "[Graph] after sub for v [",
              "1": /* constructor */{
                tag: "Int",
                "0": "Int_i",
                "1": "No_padding",
                "2": "No_precision",
                "3": /* constructor */{
                  tag: "String_literal",
                  "0": "], lowlink: ",
                  "1": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": ", index: ",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* "\n" */10,
                          "1": "End_of_format"
                        }
                      }
                    }
                  }
                }
              }
            },
            "1": "[Graph] after sub for v [%i], lowlink: %s, index: %s\n"
          }), v[/* core */0][/* id */0], string_of_option((function (prim) {
              return String(prim);
            }), v[/* lowlink */2]), string_of_option((function (prim) {
              return String(prim);
            }), v[/* index */1]));
  Curry._1(log(/* constructor */{
            tag: "Format",
            "0": /* constructor */{
              tag: "String_literal",
              "0": "[Graph]   -> stack : ",
              "1": /* constructor */{
                tag: "String",
                "0": "No_padding",
                "1": /* constructor */{
                  tag: "Char_literal",
                  "0": /* "\n" */10,
                  "1": "End_of_format"
                }
              }
            },
            "1": "[Graph]   -> stack : %s\n"
          }), "[" + ($$String.concat(";", List.map((function (param) {
                    return String(param[/* core */0][/* id */0]);
                  }), stack$2)) + "]"));
  if (eq_value(/* tuple */[
          v[/* lowlink */2],
          v[/* index */1]
        ])) {
    var match$1 = List.fold_left((function (param, n) {
            var splitted = param[2];
            var stack = param[1];
            var scc = param[0];
            if (splitted) {
              return /* tuple */[
                      scc,
                      /* constructor */{
                        tag: "::",
                        "0": n,
                        "1": stack
                      },
                      splitted
                    ];
            } else {
              n[/* on_stack */3] = false;
              if (n[/* core */0][/* id */0] === v[/* core */0][/* id */0]) {
                return /* tuple */[
                        /* constructor */{
                          tag: "::",
                          "0": n[/* core */0][/* id */0],
                          "1": scc
                        },
                        stack,
                        true
                      ];
              } else {
                return /* tuple */[
                        /* constructor */{
                          tag: "::",
                          "0": n[/* core */0][/* id */0],
                          "1": scc
                        },
                        stack,
                        false
                      ];
              }
            }
          }), /* tuple */[
          "[]",
          "[]",
          false
        ], stack$2);
    return /* tuple */[
            /* constructor */{
              tag: "::",
              "0": match$1[0],
              "1": sccs$1
            },
            List.rev(match$1[1]),
            index$1
          ];
  } else {
    return /* tuple */[
            sccs$1,
            stack$2,
            index$1
          ];
  }
}

function tarjan(g) {
  var g$1 = reset(g);
  return fold((function (param, n, param$1) {
                  var index = param$1[2];
                  var stack = param$1[1];
                  var sccs = param$1[0];
                  var match = n[/* index */1];
                  if (match !== undefined) {
                    return /* tuple */[
                            sccs,
                            stack,
                            index
                          ];
                  } else {
                    return strong_connect(g$1, sccs, stack, index, n);
                  }
                }), g$1, /* tuple */[
                "[]",
                "[]",
                0
              ])[0];
}

function field_name(param) {
  return param[/* field_parsed */0][/* field_name */0];
}

function field_number(param) {
  return param[/* field_parsed */0][/* field_number */1];
}

function field_type(param) {
  return param[/* field_type */1];
}

function field_label(param) {
  return param[/* field_parsed */0][/* field_label */2];
}

function field_default(param) {
  return param[/* field_default */2];
}

function field_options(param) {
  return param[/* field_options */3];
}

function find_field_option(field_options, option_name) {
  var x;
  try {
    x = List.assoc(option_name, field_options);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return ;
    } else {
      throw exn;
    }
  }
  return Caml_option.some(x);
}

function field_option(param, option_name) {
  return find_field_option(param[/* field_options */3], option_name);
}

function type_id_of_type(param) {
  return param[/* id */1];
}

function type_of_id(all_types, id) {
  return List.find((function (t) {
                return type_id_of_type(t) === id;
              }), all_types);
}

function string_of_unresolved(param) {
  return Curry._3(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "unresolved:{scope ",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": ", type_name: ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ", from_root: ",
                            "1": /* constructor */{
                              tag: "Bool",
                              "0": /* constructor */{
                                tag: "Char_literal",
                                "0": /* "}" */125,
                                "1": "End_of_format"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "1": "unresolved:{scope %s, type_name: %s, from_root: %b}"
                }), string_of_string_list(param[/* scope */0]), param[/* type_name */1], param[/* from_root */2]);
}

function scope_of_package(param) {
  if (param !== undefined) {
    return /* record */[
            /* packages */List.rev(rev_split_by_char(/* "." */46, param)),
            /* message_names */"[]"
          ];
  } else {
    return /* record */[
            /* packages */"[]",
            /* message_names */"[]"
          ];
  }
}

function unresolved_of_string(s) {
  var match = rev_split_by_char(/* "." */46, s);
  if (match) {
    return /* record */[
            /* scope */List.rev(match[1]),
            /* type_name */match[0],
            /* from_root */Caml_string.get(s, 0) === /* "." */46
          ];
  } else {
    throw [
          Compilation_error,
          /* constructor */{
            tag: "Programatic_error",
            "0": "Invalid_string_split"
          }
        ];
  }
}

function field_type_of_string(s) {
  switch (s) {
    case "bool" :
        return "Field_type_bool";
    case "bytes" :
        return "Field_type_bytes";
    case "double" :
        return "Field_type_double";
    case "fixed32" :
        return "Field_type_fixed32";
    case "fixed64" :
        return "Field_type_fixed64";
    case "float" :
        return "Field_type_float";
    case "int32" :
        return "Field_type_int32";
    case "int64" :
        return "Field_type_int64";
    case "sfixed32" :
        return "Field_type_sfixed32";
    case "sfixed64" :
        return "Field_type_sfixed64";
    case "sint32" :
        return "Field_type_sint32";
    case "sint64" :
        return "Field_type_sint64";
    case "string" :
        return "Field_type_string";
    case "uint32" :
        return "Field_type_uint32";
    case "uint64" :
        return "Field_type_uint64";
    default:
      return /* constructor */{
              tag: "Field_type_type",
              "0": unresolved_of_string(s)
            };
  }
}

function compile_default_p2(all_types, field) {
  var field_name$1 = field_name(field);
  var field_type$1 = field_type(field);
  var field_default$1 = field_default(field);
  if (field_default$1 !== undefined) {
    var constant = field_default$1;
    var exit = 0;
    if (typeof field_type$1 === "number") {
      switch (field_type$1) {
        case "Field_type_double" :
        case "Field_type_float" :
            exit = 1;
            break;
        case "Field_type_uint32" :
        case "Field_type_uint64" :
            exit = 3;
            break;
        case "Field_type_int32" :
        case "Field_type_int64" :
        case "Field_type_sint32" :
        case "Field_type_sint64" :
        case "Field_type_fixed32" :
        case "Field_type_fixed64" :
        case "Field_type_sfixed32" :
        case "Field_type_sfixed64" :
            exit = 2;
            break;
        case "Field_type_bool" :
            if (/* XXX */constant.tag === "Constant_bool") {
              return constant;
            } else {
              return invalid_default_value(field_name$1, "invalid default type (bool expected)", "()");
            }
        case "Field_type_string" :
            if (/* XXX */constant.tag === "Constant_string") {
              return constant;
            } else {
              return invalid_default_value(field_name$1, "invalid default type (string expected)", "()");
            }
        case "Field_type_bytes" :
            return invalid_default_value(field_name$1, "default value not supported for bytes", "()");
        
      }
    } else if (/* XXX */constant.tag === "Constant_litteral") {
      var default_enum_value = constant[0];
      var match = type_of_id(all_types, field_type$1[0]);
      var spec = match[/* spec */4];
      if (/* XXX */spec.tag === "Enum") {
        var default_enum_value$1 = apply_until((function (param) {
                var enum_value_name = param[/* enum_value_name */0];
                if (enum_value_name === default_enum_value) {
                  return enum_value_name;
                }
                
              }), spec[0][/* enum_values */1]);
        if (default_enum_value$1 !== undefined) {
          return constant;
        } else {
          return invalid_default_value(field_name$1, "Invalid default enum value", "()");
        }
      } else {
        return invalid_default_value(field_name$1, "field of type message cannot have a default litteral value", "()");
      }
    } else {
      return invalid_default_value(field_name$1, "default value not supported for message", "()");
    }
    switch (exit) {
      case 1 :
          switch (/* XXX */constant.tag) {
            case "Constant_int" :
                return /* constructor */{
                        tag: "Constant_float",
                        "0": constant[0]
                      };
            case "Constant_float" :
                return constant;
            default:
              return invalid_default_value(field_name$1, "invalid default type (float/int expected)", "()");
          }
      case 2 :
          if (/* XXX */constant.tag === "Constant_int") {
            return constant;
          } else {
            return invalid_default_value(field_name$1, "invalid default type (int expected)", "()");
          }
      case 3 :
          if (/* XXX */constant.tag === "Constant_int") {
            if (constant[0] >= 0) {
              return constant;
            } else {
              return invalid_default_value(field_name$1, "negative default value for unsigned int", "()");
            }
          } else {
            return invalid_default_value(field_name$1, "invalid default type (int expected)", "()");
          }
      
    }
  }
  
}

function get_default(field_name, field_options, field_type) {
  var constant;
  try {
    constant = List.assoc("default", field_options);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return ;
    } else {
      throw exn;
    }
  }
  return Caml_option.some(constant);
}

function compile_field_p1(field_parsed) {
  var field_options = field_parsed[/* field_options */4];
  var field_type = field_type_of_string(field_parsed[/* field_type */3]);
  var field_default = get_default(field_parsed[/* field_name */0], field_options, field_type);
  return /* record */[
          /* field_parsed */field_parsed,
          /* field_type */field_type,
          /* field_default */field_default,
          /* field_options */field_options
        ];
}

function compile_map_p1(param) {
  return /* record */[
          /* map_name */param[/* map_name */0],
          /* map_number */param[/* map_number */1],
          /* map_key_type */field_type_of_string(param[/* map_key_type */2]),
          /* map_value_type */field_type_of_string(param[/* map_value_type */3]),
          /* map_options */param[/* map_options */4]
        ];
}

function compile_oneof_p1(param) {
  return /* record */[
          /* oneof_name */param[/* oneof_name */0],
          /* oneof_fields */List.map(compile_field_p1, param[/* oneof_fields */1])
        ];
}

function not_found(f) {
  try {
    Curry._1(f, "()");
    return false;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return true;
    } else {
      throw exn;
    }
  }
}

function list_assoc2(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_equal(match[1], x)) {
        return match[0];
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function type_of_spec(file_name, file_options, id, scope, spec) {
  return /* record */[
          /* scope */scope,
          /* id */id,
          /* file_name */file_name,
          /* file_options */file_options,
          /* spec */spec
        ];
}

function compile_enum_p1(file_name, file_options, scope, param) {
  var enum_values = List.map((function (enum_value) {
          return /* record */[
                  /* enum_value_name */enum_value[/* enum_value_name */0],
                  /* enum_value_int */enum_value[/* enum_value_int */1]
                ];
        }), param[/* enum_values */2]);
  return type_of_spec(file_name, file_options, param[/* enum_id */0], scope, /* constructor */{
              tag: "Enum",
              "0": /* record */[
                /* enum_name */param[/* enum_name */1],
                /* enum_values */enum_values
              ]
            });
}

function compile_message_p1(file_name, file_options, message_scope, param) {
  var message_name = param[/* message_name */1];
  var sub_scope_000 = /* packages */message_scope[/* packages */0];
  var sub_scope_001 = /* message_names */Pervasives.$at(message_scope[/* message_names */1], /* constructor */{
        tag: "::",
        "0": message_name,
        "1": "[]"
      });
  var sub_scope = /* record */[
    sub_scope_000,
    sub_scope_001
  ];
  var match = List.fold_left((function (param, param$1) {
          var all_types = param[2];
          var extensions = param[1];
          var message_body = param[0];
          switch (/* XXX */param$1.tag) {
            case "Message_field" :
                var field = /* constructor */{
                  tag: "Message_field",
                  "0": compile_field_p1(param$1[0])
                };
                return /* tuple */[
                        /* constructor */{
                          tag: "::",
                          "0": field,
                          "1": message_body
                        },
                        extensions,
                        all_types
                      ];
            case "Message_map_field" :
                var field$1 = /* constructor */{
                  tag: "Message_map_field",
                  "0": compile_map_p1(param$1[0])
                };
                return /* tuple */[
                        /* constructor */{
                          tag: "::",
                          "0": field$1,
                          "1": message_body
                        },
                        extensions,
                        all_types
                      ];
            case "Message_oneof_field" :
                var field$2 = /* constructor */{
                  tag: "Message_oneof_field",
                  "0": compile_oneof_p1(param$1[0])
                };
                return /* tuple */[
                        /* constructor */{
                          tag: "::",
                          "0": field$2,
                          "1": message_body
                        },
                        extensions,
                        all_types
                      ];
            case "Message_sub" :
                var all_sub_types = compile_message_p1(file_name, file_options, sub_scope, param$1[0]);
                return /* tuple */[
                        message_body,
                        extensions,
                        Pervasives.$at(all_types, all_sub_types)
                      ];
            case "Message_enum" :
                return /* tuple */[
                        message_body,
                        extensions,
                        Pervasives.$at(all_types, /* constructor */{
                              tag: "::",
                              "0": compile_enum_p1(file_name, file_options, sub_scope, param$1[0]),
                              "1": "[]"
                            })
                      ];
            case "Message_extension" :
                return /* tuple */[
                        message_body,
                        Pervasives.$at(extensions, param$1[0]),
                        all_types
                      ];
            
          }
        }), /* tuple */[
        "[]",
        "[]",
        "[]"
      ], param[/* message_body */2]);
  var message_body = List.rev(match[0]);
  var validate_duplicate = function (number_index, field) {
    var number = field_number(field);
    var name = field_name(field);
    if (not_found((function (param) {
              List.assoc(number, number_index);
              return "()";
            })) && not_found((function (param) {
              list_assoc2(name, number_index);
              return "()";
            }))) {
      return /* constructor */{
              tag: "::",
              "0": /* tuple */[
                number,
                name
              ],
              "1": number_index
            };
    } else {
      var field_name$1 = name;
      var previous_field_name = "";
      var message_name$1 = message_name;
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Duplicated_field_number",
              "0": /* record */[
                /* field_name */field_name$1,
                /* previous_field_name */previous_field_name,
                /* message_name */message_name$1
              ]
            }
          ];
    }
  };
  List.fold_left((function (number_index, param) {
          switch (/* XXX */param.tag) {
            case "Message_field" :
                return validate_duplicate(number_index, param[0]);
            case "Message_oneof_field" :
                return List.fold_left(validate_duplicate, number_index, param[0][/* oneof_fields */1]);
            case "Message_map_field" :
                return number_index;
            
          }
        }), "[]", message_body);
  return Pervasives.$at(match[2], /* constructor */{
              tag: "::",
              "0": type_of_spec(file_name, file_options, param[/* id */0], message_scope, /* constructor */{
                    tag: "Message",
                    "0": /* record */[
                      /* extensions */match[1],
                      /* message_name */message_name,
                      /* message_body */message_body
                    ]
                  }),
              "1": "[]"
            });
}

function compile_proto_p1(file_name, param) {
  var file_options = param[/* file_options */2];
  var scope = scope_of_package(param[/* package */3]);
  var pbtt_msgs = List.fold_right((function (e, pbtt_msgs) {
          return /* constructor */{
                  tag: "::",
                  "0": compile_enum_p1(file_name, file_options, scope, e),
                  "1": pbtt_msgs
                };
        }), param[/* enums */5], "[]");
  return List.fold_left((function (pbtt_msgs, pbpt_msg) {
                return Pervasives.$at(pbtt_msgs, compile_message_p1(file_name, file_options, scope, pbpt_msg));
              }), pbtt_msgs, param[/* messages */4]);
}

function type_scope_of_type(param) {
  return param[/* scope */0];
}

function is_empty_message(param) {
  var match = param[/* spec */4];
  if (/* XXX */match.tag === "Enum") {
    return false;
  } else {
    return 0 === List.length(match[0][/* message_body */2]);
  }
}

function type_name_of_type(param) {
  var match = param[/* spec */4];
  if (/* XXX */match.tag === "Enum") {
    return match[0][/* enum_name */0];
  } else {
    return match[0][/* message_name */1];
  }
}

function find_all_types_in_field_scope(all_types, scope) {
  return List.filter((function (t) {
                  var match = type_scope_of_type(t);
                  var dec_scope = Pervasives.$at(match[/* packages */0], match[/* message_names */1]);
                  return Caml_obj.caml_equal(dec_scope, scope);
                }))(all_types);
}

function compile_message_p2(types, param, message) {
  var message_name = message[/* message_name */1];
  var message_scope = Pervasives.$at(param[/* packages */0], Pervasives.$at(param[/* message_names */1], /* constructor */{
            tag: "::",
            "0": message_name,
            "1": "[]"
          }));
  var search_scopes = function (field_scope, from_root) {
    if (from_root) {
      return /* constructor */{
              tag: "::",
              "0": field_scope,
              "1": "[]"
            };
    } else {
      var loop = function (_scopes, _l) {
        while(true) {
          var l = _l;
          var scopes = _scopes;
          if (l) {
            _l = pop_last(l);
            _scopes = /* constructor */{
              tag: "::",
              "0": Pervasives.$at(l, field_scope),
              "1": scopes
            };
            continue ;
          } else {
            return /* constructor */{
                    tag: "::",
                    "0": field_scope,
                    "1": scopes
                  };
          }
        };
      };
      return List.rev(loop("[]", message_scope));
    }
  };
  var compile_field_p2 = function (field_name, field_type) {
    Curry._1(log(/* constructor */{
              tag: "Format",
              "0": /* constructor */{
                tag: "String_literal",
                "0": "[pbtt] field_name: ",
                "1": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "Char_literal",
                    "0": /* "\n" */10,
                    "1": "End_of_format"
                  }
                }
              },
              "1": "[pbtt] field_name: %s\n"
            }), field_name);
    if (typeof field_type === "number") {
      var param = field_type;
      if (typeof param === "number") {
        return param;
      } else {
        throw [
              Compilation_error,
              /* constructor */{
                tag: "Programatic_error",
                "0": "Unexpected_field_type"
              }
            ];
      }
    } else {
      var unresolved = field_type[0];
      var type_name = unresolved[/* type_name */1];
      endline("[pbtt] " + string_of_unresolved(unresolved));
      var search_scopes$1 = search_scopes(unresolved[/* scope */0], unresolved[/* from_root */2]);
      Curry._1(log(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String_literal",
                  "0": "[pbtt] message scope: ",
                  "1": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "Char_literal",
                      "0": /* "\n" */10,
                      "1": "End_of_format"
                    }
                  }
                },
                "1": "[pbtt] message scope: %s\n"
              }), string_of_string_list(message_scope));
      List.iteri((function (i, scope) {
              return Curry._2(log(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "[pbtt] search_scope[",
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
                                    tag: "String_literal",
                                    "0": "] : ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* "\n" */10,
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              },
                              "1": "[pbtt] search_scope[%2i] : %s\n"
                            }), i, string_of_string_list(scope));
            }), search_scopes$1);
      var id = apply_until((function (scope) {
              var types$1 = types;
              var scope$1 = scope;
              var type_name$1 = type_name;
              var types$2 = find_all_types_in_field_scope(types$1, scope$1);
              try {
                var t = List.find((function (t) {
                        return type_name$1 === type_name_of_type(t);
                      }), types$2);
                return type_id_of_type(t);
              }
              catch (exn){
                if (exn === Caml_builtin_exceptions.not_found) {
                  return ;
                } else {
                  throw exn;
                }
              }
            }), search_scopes$1);
      if (id !== undefined) {
        return /* constructor */{
                tag: "Field_type_type",
                "0": id
              };
      } else {
        var field_name$1 = field_name;
        var type_ = type_name;
        var message_name$1 = message_name;
        throw [
              Compilation_error,
              /* constructor */{
                tag: "Unresolved_type",
                "0": /* record */[
                  /* field_name */field_name$1,
                  /* type_ */type_,
                  /* message_name */message_name$1
                ]
              }
            ];
      }
    }
  };
  var message_body = List.fold_left((function (message_body, param) {
          switch (/* XXX */param.tag) {
            case "Message_field" :
                var field = param[0];
                var field_name$1 = field_name(field);
                var field_type$1 = field_type(field);
                var field_000 = /* field_parsed */field[/* field_parsed */0];
                var field_001 = /* field_type */compile_field_p2(field_name$1, field_type$1);
                var field_002 = /* field_default */field[/* field_default */2];
                var field_003 = /* field_options */field[/* field_options */3];
                var field$1 = /* record */[
                  field_000,
                  field_001,
                  field_002,
                  field_003
                ];
                var field_000$1 = field_000;
                var field_001$1 = field_001;
                var field_002$1 = /* field_default */compile_default_p2(types, field$1);
                var field_003$1 = field_003;
                var field$2 = /* record */[
                  field_000$1,
                  field_001$1,
                  field_002$1,
                  field_003$1
                ];
                return /* constructor */{
                        tag: "::",
                        "0": /* constructor */{
                          tag: "Message_field",
                          "0": field$2
                        },
                        "1": message_body
                      };
            case "Message_oneof_field" :
                var oneof = param[0];
                var oneof_fields = List.fold_left((function (oneof_fields, field) {
                        var field_name$2 = field_name(field);
                        var field_type$2 = field_type(field);
                        var field_type$3 = compile_field_p2(field_name$2, field_type$2);
                        return /* constructor */{
                                tag: "::",
                                "0": /* record */[
                                  /* field_parsed */field[/* field_parsed */0],
                                  /* field_type */field_type$3,
                                  /* field_default */field[/* field_default */2],
                                  /* field_options */field[/* field_options */3]
                                ],
                                "1": oneof_fields
                              };
                      }), "[]", oneof[/* oneof_fields */1]);
                var oneof_fields$1 = List.rev(oneof_fields);
                return /* constructor */{
                        tag: "::",
                        "0": /* constructor */{
                          tag: "Message_oneof_field",
                          "0": /* record */[
                            /* oneof_name */oneof[/* oneof_name */0],
                            /* oneof_fields */oneof_fields$1
                          ]
                        },
                        "1": message_body
                      };
            case "Message_map_field" :
                var map = param[0];
                var map_name = map[/* map_name */0];
                var map_key_type = compile_field_p2(map_name, map[/* map_key_type */2]);
                var map_value_type = compile_field_p2(map_name, map[/* map_value_type */3]);
                var resolved_map = /* constructor */{
                  tag: "Message_map_field",
                  "0": /* record */[
                    /* map_name */map_name,
                    /* map_number */map[/* map_number */1],
                    /* map_key_type */map_key_type,
                    /* map_value_type */map_value_type,
                    /* map_options */map[/* map_options */4]
                  ]
                };
                return /* constructor */{
                        tag: "::",
                        "0": resolved_map,
                        "1": message_body
                      };
            
          }
        }), "[]", message[/* message_body */2]);
  var message_body$1 = List.rev(message_body);
  return /* record */[
          /* extensions */message[/* extensions */0],
          /* message_name */message[/* message_name */1],
          /* message_body */message_body$1
        ];
}

function node_of_proto_type(param) {
  var match = param[/* spec */4];
  var id = param[/* id */1];
  if (/* XXX */match.tag === "Enum") {
    return /* record */[
            /* id */id,
            /* sub */"[]"
          ];
  } else {
    var sub = List.flatten(List.map((function (param) {
                switch (/* XXX */param.tag) {
                  case "Message_field" :
                      var field_type = param[0][/* field_type */1];
                      if (typeof field_type === "number") {
                        return "[]";
                      } else {
                        return /* constructor */{
                                tag: "::",
                                "0": field_type[0],
                                "1": "[]"
                              };
                      }
                  case "Message_oneof_field" :
                      return List.flatten(List.map((function (param) {
                                        var field_type = param[/* field_type */1];
                                        if (typeof field_type === "number") {
                                          return "[]";
                                        } else {
                                          return /* constructor */{
                                                  tag: "::",
                                                  "0": field_type[0],
                                                  "1": "[]"
                                                };
                                        }
                                      }), param[0][/* oneof_fields */1]));
                  case "Message_map_field" :
                      var map_value_type = param[0][/* map_value_type */3];
                      if (typeof map_value_type === "number") {
                        return "[]";
                      } else {
                        return /* constructor */{
                                tag: "::",
                                "0": map_value_type[0],
                                "1": "[]"
                              };
                      }
                  
                }
              }), match[0][/* message_body */2]));
    return /* record */[
            /* id */id,
            /* sub */sub
          ];
  }
}

function group(proto) {
  var g = List.map(node_of_proto_type, proto);
  var g$1 = List.fold_left((function (m, n) {
          var n$1 = n;
          var g = m;
          return add(n$1[/* id */0], n$1, g);
        }), "Empty", g);
  var sccs = tarjan(g$1);
  return List.map((function (l) {
                return List.map((function (id) {
                              return List.find((function (param) {
                                            var input_id = id;
                                            var param$1 = param;
                                            return input_id === param$1[/* id */1];
                                          }), proto);
                            }), l);
              }), sccs);
}

function type_decl_of_and(param) {
  if (param !== undefined) {
    return "and";
  } else {
    return "type";
  }
}

function gen_type_record(mutable_, and_, param, sc) {
  var r_fields = param[/* r_fields */1];
  var r_name = param[/* r_name */0];
  var mutable_$1 = mutable_ !== undefined;
  var is_imperative_type = function (param) {
    switch (/* XXX */param.tag) {
      case "Rft_repeated_field" :
      case "Rft_associative_field" :
          if (param[0][0]) {
            return true;
          } else {
            return false;
          }
      default:
        return false;
    }
  };
  var field_prefix = function (field_type, field_mutable) {
    if (field_mutable || !(is_imperative_type(field_type) || !mutable_$1)) {
      return "mutable ";
    } else {
      return "";
    }
  };
  var r_name$1 = mutable_$1 ? r_name + "_mutable" : r_name;
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
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
                        "0": " = {",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s %s = {"
              }), type_decl_of_and(and_), r_name$1));
  scope(sc, (function (sc) {
          return List.iter((function (param) {
                        var rf_field_type = param[/* rf_field_type */1];
                        var prefix = field_prefix(rf_field_type, param[/* rf_mutable */2]);
                        var type_string = string_of_record_field_type(rf_field_type);
                        return line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "String",
                                              "0": "No_padding",
                                              "1": /* constructor */{
                                                tag: "String",
                                                "0": "No_padding",
                                                "1": /* constructor */{
                                                  tag: "String_literal",
                                                  "0": " : ",
                                                  "1": /* constructor */{
                                                    tag: "String",
                                                    "0": "No_padding",
                                                    "1": /* constructor */{
                                                      tag: "Char_literal",
                                                      "0": /* ";" */59,
                                                      "1": "End_of_format"
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "1": "%s%s : %s;"
                                          }), prefix, param[/* rf_label */0], type_string));
                      }), r_fields);
        }));
  return line$1(sc, "}");
}

function gen_type_variant(and_, variant, sc) {
  var v_constructors = variant[/* v_constructors */1];
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
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
                        "0": " =",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s %s ="
              }), type_decl_of_and(and_), variant[/* v_name */0]));
  return scope(sc, (function (sc) {
                return List.iter((function (param) {
                              var vc_field_type = param[/* vc_field_type */1];
                              var vc_constructor = param[/* vc_constructor */0];
                              if (vc_field_type) {
                                var type_string = string_of_field_type(vc_field_type[0]);
                                return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " of ",
                                                          "1": /* constructor */{
                                                            tag: "String",
                                                            "0": "No_padding",
                                                            "1": "End_of_format"
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "1": "| %s of %s"
                                                  }), vc_constructor, type_string));
                              } else {
                                return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": "End_of_format"
                                                      }
                                                    },
                                                    "1": "| %s"
                                                  }), vc_constructor));
                              }
                            }), v_constructors);
              }));
}

function gen_type_const_variant(and_, param, sc) {
  var cv_constructors = param[/* cv_constructors */1];
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
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
                        "0": " =",
                        "1": "End_of_format"
                      }
                    }
                  }
                },
                "1": "%s %s ="
              }), type_decl_of_and(and_), param[/* cv_name */0]));
  return scope(sc, (function (sc) {
                return List.iter((function (param) {
                              return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                  tag: "Format",
                                                  "0": /* constructor */{
                                                    tag: "String_literal",
                                                    "0": "| ",
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
                                                  "1": "| %s "
                                                }), param[0]));
                            }), cv_constructors);
              }));
}

function gen_struct$2(and_, t, scope) {
  var match = t[/* spec */1];
  switch (/* XXX */match.tag) {
    case "Record" :
        var r = match[0];
        gen_type_record(undefined, and_, r, scope);
        line$1(scope, "");
        gen_type_record("()", "()", r, scope);
        break;
    case "Variant" :
        gen_type_variant(and_, match[0], scope);
        break;
    case "Const_variant" :
        gen_type_const_variant(and_, match[0], scope);
        break;
    
  }
  return true;
}

function gen_sig$2(and_, t, scope) {
  var match = t[/* spec */1];
  switch (/* XXX */match.tag) {
    case "Record" :
        gen_type_record(undefined, and_, match[0], scope);
        break;
    case "Variant" :
        gen_type_variant(and_, match[0], scope);
        break;
    case "Const_variant" :
        gen_type_const_variant(and_, match[0], scope);
        break;
    
  }
  return true;
}

var Codegen_type = {
  gen_sig: gen_sig$2,
  gen_struct: gen_struct$2,
  ocamldoc_title: "Types"
};

function gen_encode_field_key(sc, number, pk, is_packed) {
  var s = string_of_payload_kind(undefined, pk, is_packed);
  var s$1 = Caml_bytes.bytes_to_string(Bytes.lowercase(Caml_bytes.bytes_of_string(s)));
  return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String_literal",
                        "0": "Pbrt.Encoder.key (",
                        "1": /* constructor */{
                          tag: "Int",
                          "0": "Int_i",
                          "1": "No_padding",
                          "2": "No_precision",
                          "3": /* constructor */{
                            tag: "String_literal",
                            "0": ", Pbrt.",
                            "1": /* constructor */{
                              tag: "String",
                              "0": "No_padding",
                              "1": /* constructor */{
                                tag: "String_literal",
                                "0": ") encoder; ",
                                "1": "End_of_format"
                              }
                            }
                          }
                        }
                      },
                      "1": "Pbrt.Encoder.key (%i, Pbrt.%s) encoder; "
                    }), number, Caml_bytes.bytes_to_string(Bytes.capitalize(Caml_bytes.bytes_of_string(s$1)))));
}

function encode_basic_type(bt, pk) {
  return runtime_function(/* tuple */[
              /* Encode */779642422,
              pk,
              bt
            ]);
}

function gen_encode_field_type(with_key, sc, var_name, encoding_number, pk, is_packed, field_type) {
  var encode_key = function (sc) {
    if (with_key !== undefined) {
      return gen_encode_field_key(sc, encoding_number, pk, is_packed);
    } else {
      return "()";
    }
  };
  if (typeof field_type === "string") {
    encode_key(sc);
    return line$1(sc, "Pbrt.Encoder.empty_nested encoder;");
  } else if (/* XXX */field_type.tag === "Ft_basic_type") {
    encode_key(sc);
    var rt = encode_basic_type(field_type[0], pk);
    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
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
                                "0": " encoder;",
                                "1": "End_of_format"
                              }
                            }
                          }
                        },
                        "1": "%s %s encoder;"
                      }), rt, var_name));
  } else {
    var ud = field_type[0];
    encode_key(sc);
    var f_name = function_name_of_user_defined("encode", ud);
    if (ud[/* udt_nested */2]) {
      return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String_literal",
                            "0": "Pbrt.Encoder.nested (",
                            "1": /* constructor */{
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
                                    "0": ") encoder;",
                                    "1": "End_of_format"
                                  }
                                }
                              }
                            }
                          },
                          "1": "Pbrt.Encoder.nested (%s %s) encoder;"
                        }), f_name, var_name));
    } else {
      return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
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
                                  "0": " encoder;",
                                  "1": "End_of_format"
                                }
                              }
                            }
                          },
                          "1": "%s %s encoder;"
                        }), f_name, var_name));
    }
  }
}

function gen_encode_record(and_, param, sc) {
  var r_fields = param[/* r_fields */1];
  var r_name = param[/* r_name */0];
  Curry._1(log(/* constructor */{
            tag: "Format",
            "0": /* constructor */{
              tag: "String_literal",
              "0": "gen_encode_record record_name: ",
              "1": /* constructor */{
                tag: "String",
                "0": "No_padding",
                "1": /* constructor */{
                  tag: "Char_literal",
                  "0": /* "\n" */10,
                  "1": "End_of_format"
                }
              }
            },
            "1": "gen_encode_record record_name: %s\n"
          }), r_name);
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " encode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") encoder = ",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s encode_%s (v:%s) encoder = "
              }), let_decl_of_and(and_), r_name, r_name));
  return scope(sc, (function (sc) {
                List.iter((function (record_field) {
                        var rf_field_type = record_field[/* rf_field_type */1];
                        var rf_label = record_field[/* rf_label */0];
                        switch (/* XXX */rf_field_type.tag) {
                          case "Rft_required" :
                              var match = rf_field_type[0];
                              var var_name = Curry._1(Printf.sprintf(/* constructor */{
                                        tag: "Format",
                                        "0": /* constructor */{
                                          tag: "String_literal",
                                          "0": "v.",
                                          "1": /* constructor */{
                                            tag: "String",
                                            "0": "No_padding",
                                            "1": "End_of_format"
                                          }
                                        },
                                        "1": "v.%s"
                                      }), rf_label);
                              return gen_encode_field_type("()", sc, var_name, match[1], match[2], false, match[0]);
                          case "Rft_optional" :
                              var match$1 = rf_field_type[0];
                              var pk = match$1[2];
                              var encoding_number = match$1[1];
                              var field_type = match$1[0];
                              line$1(sc, "(");
                              scope(sc, (function (sc) {
                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "match v.",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " with ",
                                                          "1": "End_of_format"
                                                        }
                                                      }
                                                    },
                                                    "1": "match v.%s with "
                                                  }), rf_label));
                                      line$1(sc, Printf.sprintf(/* constructor */{
                                                tag: "Format",
                                                "0": /* constructor */{
                                                  tag: "String_literal",
                                                  "0": "| Some x -> (",
                                                  "1": "End_of_format"
                                                },
                                                "1": "| Some x -> ("
                                              }));
                                      scope(sc, (function (sc) {
                                              return gen_encode_field_type("()", sc, "x", encoding_number, pk, false, field_type);
                                            }));
                                      line$1(sc, ")");
                                      return line$1(sc, "| None -> ();");
                                    }));
                              return line$1(sc, ");");
                          case "Rft_repeated_field" :
                              var match$2 = rf_field_type[0];
                              var is_packed = match$2[4];
                              var pk$1 = match$2[3];
                              var encoding_number$1 = match$2[2];
                              var field_type$1 = match$2[1];
                              if (match$2[0]) {
                                if (is_packed) {
                                  gen_encode_field_key(sc, encoding_number$1, pk$1, is_packed);
                                  line$1(sc, "Pbrt.Encoder.nested (fun encoder ->");
                                  scope(sc, (function (sc) {
                                          line$1(sc, "Pbrt.Repeated_field.iter (fun x -> ");
                                          scope(sc, (function (sc) {
                                                  return gen_encode_field_type(undefined, sc, "x", encoding_number$1, pk$1, is_packed, field_type$1);
                                                }));
                                          return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                              tag: "Format",
                                                              "0": /* constructor */{
                                                                tag: "String_literal",
                                                                "0": ") v.",
                                                                "1": /* constructor */{
                                                                  tag: "String",
                                                                  "0": "No_padding",
                                                                  "1": /* constructor */{
                                                                    tag: "Char_literal",
                                                                    "0": /* ";" */59,
                                                                    "1": "End_of_format"
                                                                  }
                                                                }
                                                              },
                                                              "1": ") v.%s;"
                                                            }), rf_label));
                                        }));
                                  return line$1(sc, ") encoder;");
                                } else {
                                  line$1(sc, "Pbrt.Repeated_field.iter (fun x -> ");
                                  scope(sc, (function (sc) {
                                          return gen_encode_field_type("()", sc, "x", encoding_number$1, pk$1, is_packed, field_type$1);
                                        }));
                                  return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                      tag: "Format",
                                                      "0": /* constructor */{
                                                        tag: "String_literal",
                                                        "0": ") v.",
                                                        "1": /* constructor */{
                                                          tag: "String",
                                                          "0": "No_padding",
                                                          "1": /* constructor */{
                                                            tag: "Char_literal",
                                                            "0": /* ";" */59,
                                                            "1": "End_of_format"
                                                          }
                                                        }
                                                      },
                                                      "1": ") v.%s;"
                                                    }), rf_label));
                                }
                              } else if (is_packed) {
                                gen_encode_field_key(sc, encoding_number$1, pk$1, is_packed);
                                line$1(sc, "Pbrt.Encoder.nested (fun encoder ->");
                                scope(sc, (function (sc) {
                                        line$1(sc, "List.iter (fun x -> ");
                                        scope(sc, (function (sc) {
                                                return gen_encode_field_type(undefined, sc, "x", encoding_number$1, pk$1, is_packed, field_type$1);
                                              }));
                                        return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                            tag: "Format",
                                                            "0": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": ") v.",
                                                              "1": /* constructor */{
                                                                tag: "String",
                                                                "0": "No_padding",
                                                                "1": /* constructor */{
                                                                  tag: "Char_literal",
                                                                  "0": /* ";" */59,
                                                                  "1": "End_of_format"
                                                                }
                                                              }
                                                            },
                                                            "1": ") v.%s;"
                                                          }), rf_label));
                                      }));
                                return line$1(sc, ") encoder;");
                              } else {
                                line$1(sc, "List.iter (fun x -> ");
                                scope(sc, (function (sc) {
                                        return gen_encode_field_type("()", sc, "x", encoding_number$1, pk$1, is_packed, field_type$1);
                                      }));
                                return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": ") v.",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "Char_literal",
                                                          "0": /* ";" */59,
                                                          "1": "End_of_format"
                                                        }
                                                      }
                                                    },
                                                    "1": ") v.%s;"
                                                  }), rf_label));
                              }
                          case "Rft_associative_field" :
                              var match$3 = rf_field_type[0];
                              var match$4 = match$3[3];
                              var value_pk = match$4[1];
                              var value_type = match$4[0];
                              var match$5 = match$3[2];
                              var key_pk = match$5[1];
                              var encoding_number$2 = match$3[1];
                              line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                            tag: "Format",
                                            "0": /* constructor */{
                                              tag: "String_literal",
                                              "0": "let encode_key = ",
                                              "1": /* constructor */{
                                                tag: "String",
                                                "0": "No_padding",
                                                "1": /* constructor */{
                                                  tag: "String_literal",
                                                  "0": " in",
                                                  "1": "End_of_format"
                                                }
                                              }
                                            },
                                            "1": "let encode_key = %s in"
                                          }), encode_basic_type(match$5[0], key_pk)));
                              line$1(sc, "let encode_value = (fun x encoder ->");
                              scope(sc, (function (sc) {
                                      return gen_encode_field_type(undefined, sc, "x", -1, value_pk, false, value_type);
                                    }));
                              line$1(sc, ") in");
                              if (match$3[0]) {
                                line$1(sc, "Hashtbl.iter (fun k v ->");
                              } else {
                                line$1(sc, "List.iter (fun (k, v) ->");
                              }
                              scope(sc, (function (sc) {
                                      gen_encode_field_key(sc, encoding_number$2, "Pk_bytes", false);
                                      line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "let map_entry = (k, Pbrt.",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": "), (v, Pbrt.",
                                                          "1": /* constructor */{
                                                            tag: "String",
                                                            "0": "No_padding",
                                                            "1": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": ") in",
                                                              "1": "End_of_format"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "1": "let map_entry = (k, Pbrt.%s), (v, Pbrt.%s) in"
                                                  }), string_of_payload_kind("()", key_pk, false), string_of_payload_kind("()", value_pk, false)));
                                      return line$1(sc, "Pbrt.Encoder.map_entry ~encode_key ~encode_value map_entry encoder");
                                    }));
                              return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                  tag: "Format",
                                                  "0": /* constructor */{
                                                    tag: "String_literal",
                                                    "0": ") v.",
                                                    "1": /* constructor */{
                                                      tag: "String",
                                                      "0": "No_padding",
                                                      "1": /* constructor */{
                                                        tag: "Char_literal",
                                                        "0": /* ";" */59,
                                                        "1": "End_of_format"
                                                      }
                                                    }
                                                  },
                                                  "1": ") v.%s;"
                                                }), rf_label));
                          case "Rft_variant_field" :
                              var v_constructors = rf_field_type[0][/* v_constructors */1];
                              line$1(sc, "(");
                              scope(sc, (function (sc) {
                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "match v.",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " with",
                                                          "1": "End_of_format"
                                                        }
                                                      }
                                                    },
                                                    "1": "match v.%s with"
                                                  }), rf_label));
                                      return List.iter((function (param) {
                                                    var vc_payload_kind = param[/* vc_payload_kind */3];
                                                    var vc_encoding_number = param[/* vc_encoding_number */2];
                                                    var vc_field_type = param[/* vc_field_type */1];
                                                    var vc_constructor = param[/* vc_constructor */0];
                                                    if (vc_field_type) {
                                                      var field_type = vc_field_type[0];
                                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                                    tag: "Format",
                                                                    "0": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": "| ",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": " x -> (",
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    },
                                                                    "1": "| %s x -> ("
                                                                  }), vc_constructor));
                                                      scope(sc, (function (sc) {
                                                              return gen_encode_field_type("()", sc, "x", vc_encoding_number, vc_payload_kind, false, field_type);
                                                            }));
                                                      return line$1(sc, ")");
                                                    } else {
                                                      line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                                                    tag: "Format",
                                                                    "0": /* constructor */{
                                                                      tag: "String_literal",
                                                                      "0": "| ",
                                                                      "1": /* constructor */{
                                                                        tag: "String",
                                                                        "0": "No_padding",
                                                                        "1": /* constructor */{
                                                                          tag: "String_literal",
                                                                          "0": " -> (",
                                                                          "1": "End_of_format"
                                                                        }
                                                                      }
                                                                    },
                                                                    "1": "| %s -> ("
                                                                  }), vc_constructor));
                                                      scope(sc, (function (sc) {
                                                              gen_encode_field_key(sc, vc_encoding_number, vc_payload_kind, false);
                                                              return line$1(sc, "Pbrt.Encoder.empty_nested encoder");
                                                            }));
                                                      return line$1(sc, ")");
                                                    }
                                                  }), v_constructors);
                                    }));
                              return line$1(sc, ");");
                          
                        }
                      }), r_fields);
                return line$1(sc, "()");
              }));
}

function gen_encode_variant(and_, variant, sc) {
  var v_name = variant[/* v_name */0];
  var v_constructors = variant[/* v_constructors */1];
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " encode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") encoder = ",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s encode_%s (v:%s) encoder = "
              }), let_decl_of_and(and_), v_name, v_name));
  return scope(sc, (function (sc) {
                line$1(sc, "match v with");
                return List.iter((function (param) {
                              var vc_payload_kind = param[/* vc_payload_kind */3];
                              var vc_encoding_number = param[/* vc_encoding_number */2];
                              var vc_field_type = param[/* vc_field_type */1];
                              var vc_constructor = param[/* vc_constructor */0];
                              if (vc_field_type) {
                                var field_type = vc_field_type[0];
                                line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "String_literal",
                                                "0": "| ",
                                                "1": /* constructor */{
                                                  tag: "String",
                                                  "0": "No_padding",
                                                  "1": /* constructor */{
                                                    tag: "String_literal",
                                                    "0": " x -> (",
                                                    "1": "End_of_format"
                                                  }
                                                }
                                              },
                                              "1": "| %s x -> ("
                                            }), vc_constructor));
                                scope(sc, (function (sc) {
                                        return gen_encode_field_type("()", sc, "x", vc_encoding_number, vc_payload_kind, false, field_type);
                                      }));
                                return line$1(sc, ")");
                              } else {
                                line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "String_literal",
                                                "0": "| ",
                                                "1": /* constructor */{
                                                  tag: "String",
                                                  "0": "No_padding",
                                                  "1": /* constructor */{
                                                    tag: "String_literal",
                                                    "0": " -> (",
                                                    "1": "End_of_format"
                                                  }
                                                }
                                              },
                                              "1": "| %s -> ("
                                            }), vc_constructor));
                                scope(sc, (function (sc) {
                                        gen_encode_field_key(sc, vc_encoding_number, vc_payload_kind, false);
                                        return line$1(sc, "Pbrt.Encoder.empty_nested encoder");
                                      }));
                                return line$1(sc, ")");
                              }
                            }), v_constructors);
              }));
}

function gen_encode_const_variant(and_, param, sc) {
  var cv_constructors = param[/* cv_constructors */1];
  var cv_name = param[/* cv_name */0];
  line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String",
                  "0": "No_padding",
                  "1": /* constructor */{
                    tag: "String_literal",
                    "0": " encode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " (v:",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": ") encoder =",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  }
                },
                "1": "%s encode_%s (v:%s) encoder ="
              }), let_decl_of_and(and_), cv_name, cv_name));
  return scope(sc, (function (sc) {
                line$1(sc, "match v with");
                return List.iter((function (param) {
                              var value = param[1];
                              var name = param[0];
                              return line$1(sc, value > 0 ? Curry._2(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " -> Pbrt.Encoder.int_as_varint ",
                                                          "1": /* constructor */{
                                                            tag: "Int",
                                                            "0": "Int_i",
                                                            "1": "No_padding",
                                                            "2": "No_precision",
                                                            "3": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": " encoder",
                                                              "1": "End_of_format"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "1": "| %s -> Pbrt.Encoder.int_as_varint %i encoder"
                                                  }), name, value) : Curry._2(Printf.sprintf(/* constructor */{
                                                    tag: "Format",
                                                    "0": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": "| ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "String_literal",
                                                          "0": " -> Pbrt.Encoder.int_as_varint (",
                                                          "1": /* constructor */{
                                                            tag: "Int",
                                                            "0": "Int_i",
                                                            "1": "No_padding",
                                                            "2": "No_precision",
                                                            "3": /* constructor */{
                                                              tag: "String_literal",
                                                              "0": ") encoder",
                                                              "1": "End_of_format"
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "1": "| %s -> Pbrt.Encoder.int_as_varint (%i) encoder"
                                                  }), name, value));
                            }), cv_constructors);
              }));
}

function gen_struct$3(and_, t, sc) {
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        tmp = /* tuple */[
          gen_encode_record(and_, match[0], sc),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          gen_encode_variant(and_, match[0], sc),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          gen_encode_const_variant(and_, match[0], sc),
          true
        ];
        break;
    
  }
  return tmp[1];
}

function gen_sig$3(and_, t, sc) {
  var f = function (type_name) {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "val encode_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " : ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": /* constructor */{
                            tag: "String_literal",
                            "0": " -> Pbrt.Encoder.t -> unit",
                            "1": "End_of_format"
                          }
                        }
                      }
                    }
                  },
                  "1": "val encode_%s : %s -> Pbrt.Encoder.t -> unit"
                }), type_name, type_name));
    return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "(** [encode_",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " v encoder] encodes [v] with the given [encoder] *)",
                              "1": "End_of_format"
                            }
                          }
                        },
                        "1": "(** [encode_%s v encoder] encodes [v] with the given [encoder] *)"
                      }), type_name));
  };
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        tmp = /* tuple */[
          f(match[0][/* r_name */0]),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          f(match[0][/* v_name */0]),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          f(match[0][/* cv_name */0]),
          true
        ];
        break;
    
  }
  return tmp[1];
}

var Codegen_encode = {
  gen_sig: gen_sig$3,
  gen_struct: gen_struct$3,
  ocamldoc_title: "Protobuf Toding"
};

function default_value_of_field_type(field_name, field_type, field_default) {
  if (typeof field_type === "string") {
    return "()";
  } else if (/* XXX */field_type.tag === "Ft_basic_type") {
    var field_name$1 = field_name;
    var basic_type = field_type[0];
    var field_default$1 = field_default;
    switch (basic_type) {
      case "Bt_string" :
          if (field_default$1 !== undefined) {
            var match = field_default$1;
            if (/* XXX */match.tag === "Constant_string") {
              return Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Char_literal",
                                "0": /* "\"" */34,
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "Char_literal",
                                    "0": /* "\"" */34,
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "\"%s\""
                            }), match[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "\"\"";
          }
      case "Bt_float" :
          if (field_default$1 !== undefined) {
            var match$1 = field_default$1;
            if (/* XXX */match$1.tag === "Constant_float") {
              return Pervasives.string_of_float(match$1[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "0.";
          }
      case "Bt_int" :
          if (field_default$1 !== undefined) {
            var match$2 = field_default$1;
            if (/* XXX */match$2.tag === "Constant_int") {
              return String(match$2[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "0";
          }
      case "Bt_int32" :
          if (field_default$1 !== undefined) {
            var match$3 = field_default$1;
            if (/* XXX */match$3.tag === "Constant_int") {
              return Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Int",
                                "0": "Int_i",
                                "1": "No_padding",
                                "2": "No_precision",
                                "3": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* "l" */108,
                                  "1": "End_of_format"
                                }
                              },
                              "1": "%il"
                            }), match$3[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "0l";
          }
      case "Bt_int64" :
          if (field_default$1 !== undefined) {
            var match$4 = field_default$1;
            if (/* XXX */match$4.tag === "Constant_int") {
              return Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "Int",
                                "0": "Int_i",
                                "1": "No_padding",
                                "2": "No_precision",
                                "3": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* "L" */76,
                                  "1": "End_of_format"
                                }
                              },
                              "1": "%iL"
                            }), match$4[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "0L";
          }
      case "Bt_bytes" :
          if (field_default$1 !== undefined) {
            var match$5 = field_default$1;
            if (/* XXX */match$5.tag === "Constant_string") {
              return Curry._1(Printf.sprintf(/* constructor */{
                              tag: "Format",
                              "0": /* constructor */{
                                tag: "String_literal",
                                "0": "Bytes.of_string \"",
                                "1": /* constructor */{
                                  tag: "String",
                                  "0": "No_padding",
                                  "1": /* constructor */{
                                    tag: "Char_literal",
                                    "0": /* "\"" */34,
                                    "1": "End_of_format"
                                  }
                                }
                              },
                              "1": "Bytes.of_string \"%s\""
                            }), match$5[0]);
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "Bytes.create 64";
          }
      case "Bt_bool" :
          if (field_default$1 !== undefined) {
            var match$6 = field_default$1;
            if (/* XXX */match$6.tag === "Constant_bool") {
              var b = match$6[0];
              if (b) {
                return "true";
              } else {
                return "false";
              }
            } else {
              return invalid_default_value(field_name$1, "invalid default type", "()");
            }
          } else {
            return "false";
          }
      
    }
  } else {
    return function_name_of_user_defined("default", field_type[0]) + " ()";
  }
}

function record_field_default_info(record_field) {
  var rf_field_type = record_field[/* rf_field_type */1];
  var rf_label = record_field[/* rf_label */0];
  var type_string = string_of_record_field_type(rf_field_type);
  var dfvft = function (field_type, defalut_value) {
    return default_value_of_field_type(rf_label, field_type, defalut_value);
  };
  var default_value;
  switch (/* XXX */rf_field_type.tag) {
    case "Rft_required" :
        var match = rf_field_type[0];
        default_value = dfvft(match[0], match[3]);
        break;
    case "Rft_optional" :
        var match$1 = rf_field_type[0];
        var default_value$1 = match$1[3];
        default_value = default_value$1 !== undefined ? Curry._1(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String_literal",
                      "0": "Some (",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* ")" */41,
                          "1": "End_of_format"
                        }
                      }
                    },
                    "1": "Some (%s)"
                  }), dfvft(match$1[0], default_value$1)) : "None";
        break;
    case "Rft_repeated_field" :
        var match$2 = rf_field_type[0];
        default_value = match$2[0] ? Curry._1(Printf.sprintf(/* constructor */{
                    tag: "Format",
                    "0": /* constructor */{
                      tag: "String_literal",
                      "0": "Pbrt.Repeated_field.make (",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* ")" */41,
                          "1": "End_of_format"
                        }
                      }
                    },
                    "1": "Pbrt.Repeated_field.make (%s)"
                  }), dfvft(match$2[1], undefined)) : "[]";
        break;
    case "Rft_associative_field" :
        default_value = rf_field_type[0][0] ? "Hashtbl.create 128" : "[]";
        break;
    case "Rft_variant_field" :
        var v_constructors = rf_field_type[0][/* v_constructors */1];
        if (v_constructors) {
          var match$3 = v_constructors[0];
          var vc_field_type = match$3[/* vc_field_type */1];
          var vc_constructor = match$3[/* vc_constructor */0];
          default_value = vc_field_type ? Curry._2(Printf.sprintf(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "String_literal",
                          "0": " (",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "Char_literal",
                              "0": /* ")" */41,
                              "1": "End_of_format"
                            }
                          }
                        }
                      },
                      "1": "%s (%s)"
                    }), vc_constructor, dfvft(vc_field_type[0], undefined)) : vc_constructor;
        } else {
          throw [
                Caml_builtin_exceptions.assert_failure,
                /* tuple */[
                  "codegen_default.ml",
                  74,
                  15
                ]
              ];
        }
        break;
    
  }
  return /* tuple */[
          rf_label,
          default_value,
          type_string
        ];
}

function gen_default_record(mutable_, and_, param, sc) {
  var r_name = param[/* r_name */0];
  var fields_default_info = List.map(record_field_default_info, param[/* r_fields */1]);
  if (mutable_ !== undefined) {
    var rn = r_name + "_mutable";
    line$1(sc, Curry._3(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": " default_",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "String_literal",
                          "0": " () : ",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " = {",
                              "1": "End_of_format"
                            }
                          }
                        }
                      }
                    }
                  },
                  "1": "%s default_%s () : %s = {"
                }), let_decl_of_and(and_), rn, rn));
    scope(sc, (function (sc) {
            return List.iter((function (param) {
                          return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "String",
                                                "0": "No_padding",
                                                "1": /* constructor */{
                                                  tag: "String_literal",
                                                  "0": " = ",
                                                  "1": /* constructor */{
                                                    tag: "String",
                                                    "0": "No_padding",
                                                    "1": /* constructor */{
                                                      tag: "Char_literal",
                                                      "0": /* ";" */59,
                                                      "1": "End_of_format"
                                                    }
                                                  }
                                                }
                                              },
                                              "1": "%s = %s;"
                                            }), param[0], param[1]));
                        }), fields_default_info);
          }));
  } else {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": " default_",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "Char_literal",
                          "0": /* " " */32,
                          "1": "End_of_format"
                        }
                      }
                    }
                  },
                  "1": "%s default_%s "
                }), let_decl_of_and(and_), r_name));
    scope(sc, (function (sc) {
            List.iter((function (param) {
                    var fname = param[0];
                    return line$1(sc, Curry._4(Printf.sprintf(/* constructor */{
                                        tag: "Format",
                                        "0": /* constructor */{
                                          tag: "Char_literal",
                                          "0": /* "?" */63,
                                          "1": /* constructor */{
                                            tag: "String",
                                            "0": "No_padding",
                                            "1": /* constructor */{
                                              tag: "String_literal",
                                              "0": ":((",
                                              "1": /* constructor */{
                                                tag: "String",
                                                "0": "No_padding",
                                                "1": /* constructor */{
                                                  tag: "Char_literal",
                                                  "0": /* ":" */58,
                                                  "1": /* constructor */{
                                                    tag: "String",
                                                    "0": "No_padding",
                                                    "1": /* constructor */{
                                                      tag: "String_literal",
                                                      "0": ") = ",
                                                      "1": /* constructor */{
                                                        tag: "String",
                                                        "0": "No_padding",
                                                        "1": /* constructor */{
                                                          tag: "Char_literal",
                                                          "0": /* ")" */41,
                                                          "1": "End_of_format"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "1": "?%s:((%s:%s) = %s)"
                                      }), fname, fname, param[2], param[1]));
                  }), fields_default_info);
            return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                tag: "Format",
                                "0": /* constructor */{
                                  tag: "String_literal",
                                  "0": "() : ",
                                  "1": /* constructor */{
                                    tag: "String",
                                    "0": "No_padding",
                                    "1": /* constructor */{
                                      tag: "String_literal",
                                      "0": "  = {",
                                      "1": "End_of_format"
                                    }
                                  }
                                },
                                "1": "() : %s  = {"
                              }), r_name));
          }));
    scope(sc, (function (sc) {
            return List.iter((function (param) {
                          return line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                              tag: "Format",
                                              "0": /* constructor */{
                                                tag: "String",
                                                "0": "No_padding",
                                                "1": /* constructor */{
                                                  tag: "Char_literal",
                                                  "0": /* ";" */59,
                                                  "1": "End_of_format"
                                                }
                                              },
                                              "1": "%s;"
                                            }), param[0]));
                        }), fields_default_info);
          }));
  }
  return line$1(sc, "}");
}

function gen_default_variant(and_, param, sc) {
  var v_constructors = param[/* v_constructors */1];
  var v_name = param[/* v_name */0];
  if (v_constructors) {
    var match = v_constructors[0];
    var vc_field_type = match[/* vc_field_type */1];
    var vc_constructor = match[/* vc_constructor */0];
    var decl = let_decl_of_and(and_);
    if (vc_field_type) {
      var default_value = default_value_of_field_type(v_name, vc_field_type[0], undefined);
      return line$1(sc, Curry._5(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " default_",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "String_literal",
                                  "0": " () : ",
                                  "1": /* constructor */{
                                    tag: "String",
                                    "0": "No_padding",
                                    "1": /* constructor */{
                                      tag: "String_literal",
                                      "0": " = ",
                                      "1": /* constructor */{
                                        tag: "String",
                                        "0": "No_padding",
                                        "1": /* constructor */{
                                          tag: "String_literal",
                                          "0": " (",
                                          "1": /* constructor */{
                                            tag: "String",
                                            "0": "No_padding",
                                            "1": /* constructor */{
                                              tag: "Char_literal",
                                              "0": /* ")" */41,
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
                          },
                          "1": "%s default_%s () : %s = %s (%s)"
                        }), decl, v_name, v_name, vc_constructor, default_value));
    } else {
      return line$1(sc, Curry._4(Printf.sprintf(/* constructor */{
                          tag: "Format",
                          "0": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " default_",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "String_literal",
                                  "0": " (): ",
                                  "1": /* constructor */{
                                    tag: "String",
                                    "0": "No_padding",
                                    "1": /* constructor */{
                                      tag: "String_literal",
                                      "0": " = ",
                                      "1": /* constructor */{
                                        tag: "String",
                                        "0": "No_padding",
                                        "1": "End_of_format"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "1": "%s default_%s (): %s = %s"
                        }), decl, v_name, v_name, vc_constructor));
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "programmatic TODO error"
        ];
  }
}

function gen_default_const_variant(and_, param, sc) {
  var cv_constructors = param[/* cv_constructors */1];
  var cv_name = param[/* cv_name */0];
  var first_constructor_name;
  if (cv_constructors) {
    first_constructor_name = cv_constructors[0][0];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "programmatic TODO error"
        ];
  }
  return line$1(sc, Curry._4(Printf.sprintf(/* constructor */{
                      tag: "Format",
                      "0": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "String_literal",
                          "0": " default_",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " () = (",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "Char_literal",
                                  "0": /* ":" */58,
                                  "1": /* constructor */{
                                    tag: "String",
                                    "0": "No_padding",
                                    "1": /* constructor */{
                                      tag: "Char_literal",
                                      "0": /* ")" */41,
                                      "1": "End_of_format"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "1": "%s default_%s () = (%s:%s)"
                    }), let_decl_of_and(and_), cv_name, first_constructor_name, cv_name));
}

function gen_struct$4(and_, t, sc) {
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        var r = match[0];
        tmp = /* tuple */[
          (gen_default_record(undefined, and_, r, sc), line$1(sc, ""), gen_default_record("()", "()", r, sc)),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          gen_default_variant(and_, match[0], sc),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          gen_default_const_variant(undefined, match[0], sc),
          true
        ];
        break;
    
  }
  return tmp[1];
}

function gen_sig_record(sc, param) {
  var r_name = param[/* r_name */0];
  line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String_literal",
                  "0": "val default_",
                  "1": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": " : ",
                      "1": "End_of_format"
                    }
                  }
                },
                "1": "val default_%s : "
              }), r_name));
  var fields_default_info = List.map(record_field_default_info, param[/* r_fields */1]);
  scope(sc, (function (sc) {
          List.iter((function (param) {
                  return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                                      tag: "Format",
                                      "0": /* constructor */{
                                        tag: "Char_literal",
                                        "0": /* "?" */63,
                                        "1": /* constructor */{
                                          tag: "String",
                                          "0": "No_padding",
                                          "1": /* constructor */{
                                            tag: "Char_literal",
                                            "0": /* ":" */58,
                                            "1": /* constructor */{
                                              tag: "String",
                                              "0": "No_padding",
                                              "1": /* constructor */{
                                                tag: "String_literal",
                                                "0": " ->",
                                                "1": "End_of_format"
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "1": "?%s:%s ->"
                                    }), param[0], param[2]));
                }), fields_default_info);
          line$1(sc, "unit ->");
          return line$1(sc, r_name);
        }));
  line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String_literal",
                  "0": "(** [default_",
                  "1": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": " ()] is the default value for type [",
                      "1": /* constructor */{
                        tag: "String",
                        "0": "No_padding",
                        "1": /* constructor */{
                          tag: "String_literal",
                          "0": "] *)",
                          "1": "End_of_format"
                        }
                      }
                    }
                  }
                },
                "1": "(** [default_%s ()] is the default value for type [%s] *)"
              }), r_name, r_name));
  return "()";
}

function gen_sig$4(and_, t, sc) {
  var f = function (type_name) {
    line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                  tag: "Format",
                  "0": /* constructor */{
                    tag: "String_literal",
                    "0": "val default_",
                    "1": /* constructor */{
                      tag: "String",
                      "0": "No_padding",
                      "1": /* constructor */{
                        tag: "String_literal",
                        "0": " : unit -> ",
                        "1": /* constructor */{
                          tag: "String",
                          "0": "No_padding",
                          "1": "End_of_format"
                        }
                      }
                    }
                  },
                  "1": "val default_%s : unit -> %s"
                }), type_name, type_name));
    return line$1(sc, Curry._2(Printf.sprintf(/* constructor */{
                        tag: "Format",
                        "0": /* constructor */{
                          tag: "String_literal",
                          "0": "(** [default_",
                          "1": /* constructor */{
                            tag: "String",
                            "0": "No_padding",
                            "1": /* constructor */{
                              tag: "String_literal",
                              "0": " ()] is the default value for type [",
                              "1": /* constructor */{
                                tag: "String",
                                "0": "No_padding",
                                "1": /* constructor */{
                                  tag: "String_literal",
                                  "0": "] *)",
                                  "1": "End_of_format"
                                }
                              }
                            }
                          }
                        },
                        "1": "(** [default_%s ()] is the default value for type [%s] *)"
                      }), type_name, type_name));
  };
  var match = t[/* spec */1];
  var tmp;
  switch (/* XXX */match.tag) {
    case "Record" :
        tmp = /* tuple */[
          gen_sig_record(sc, match[0]),
          true
        ];
        break;
    case "Variant" :
        tmp = /* tuple */[
          f(match[0][/* v_name */0]),
          true
        ];
        break;
    case "Const_variant" :
        tmp = /* tuple */[
          f(match[0][/* cv_name */0]),
          true
        ];
        break;
    
  }
  return tmp[1];
}

var Codegen_default = {
  gen_sig: gen_sig$4,
  gen_struct: gen_struct$4,
  ocamldoc_title: "Default values"
};

function rev_split_by_naming_convention(s) {
  var is_uppercase = function (c) {
    if (64 < c) {
      return c < 91;
    } else {
      return false;
    }
  };
  var add_sub_string = function (start_i, end_i, l) {
    if (start_i === end_i) {
      return l;
    } else {
      return /* constructor */{
              tag: "::",
              "0": $$String.sub(s, start_i, end_i - start_i | 0),
              "1": l
            };
    }
  };
  var match = string_fold_lefti((function (param, i, c) {
          var start_i = param[1];
          var l = param[0];
          if (c !== 95) {
            if (param[2] || !is_uppercase(c)) {
              return /* tuple */[
                      l,
                      start_i,
                      is_uppercase(c)
                    ];
            } else {
              return /* tuple */[
                      add_sub_string(start_i, i, l),
                      i,
                      true
                    ];
            }
          } else {
            return /* tuple */[
                    add_sub_string(start_i, i, l),
                    i + 1 | 0,
                    false
                  ];
          }
        }), /* tuple */[
        "[]",
        0,
        false
      ], s);
  var len = s.length;
  return add_sub_string(match[1], len, match[0]);
}

function fix_ocaml_keyword_conflict(s) {
  switch (s) {
    case "and" :
    case "as" :
    case "asr" :
    case "assert" :
    case "begin" :
    case "class" :
    case "constraint" :
    case "do" :
    case "done" :
    case "downto" :
    case "else" :
    case "end" :
    case "exception" :
    case "external" :
    case "false" :
    case "for" :
    case "fun" :
    case "function" :
    case "functor" :
    case "if" :
    case "in" :
    case "include" :
    case "inherit" :
    case "initializer" :
    case "land" :
    case "lazy" :
    case "let" :
    case "lor" :
    case "lsl" :
    case "lsr" :
    case "lxor" :
    case "match" :
    case "method" :
    case "mod" :
    case "module" :
    case "mutable" :
    case "new" :
    case "nonrec" :
    case "object" :
    case "of" :
    case "open" :
    case "or" :
    case "private" :
    case "rec" :
    case "sig" :
    case "struct" :
    case "then" :
    case "to" :
    case "true" :
    case "try" :
    case "type" :
    case "val" :
    case "virtual" :
    case "when" :
    case "while" :
    case "with" :
        return s + "_";
    default:
      return s;
  }
}

function constructor_name(s) {
  var s$1 = $$String.concat("_", List.rev(rev_split_by_naming_convention(s)));
  var s$2 = Caml_bytes.bytes_to_string(Bytes.lowercase(Caml_bytes.bytes_of_string(s$1)));
  return Caml_bytes.bytes_to_string(Bytes.capitalize(Caml_bytes.bytes_of_string(s$2)));
}

function label_name_of_field_name(s) {
  var s$1 = $$String.concat("_", List.rev(rev_split_by_naming_convention(s)));
  return fix_ocaml_keyword_conflict(Caml_bytes.bytes_to_string(Bytes.lowercase(Caml_bytes.bytes_of_string(s$1))));
}

function module_of_file_name(file_name) {
  var file_name$1 = Curry._1(Filename.basename, file_name);
  var dot_index;
  try {
    dot_index = $$String.rindex(file_name$1, /* "." */46);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Invalid_file_name",
              "0": file_name$1
            }
          ];
    }
    throw exn;
  }
  return constructor_name($$String.sub(file_name$1, 0, dot_index) + "_pb");
}

function type_name(message_scope, name) {
  var all_names = Pervasives.$at(message_scope, /* constructor */{
        tag: "::",
        "0": name,
        "1": "[]"
      });
  var all_names$1 = List.map((function (s) {
          return List.map($$String.lowercase, List.rev(rev_split_by_naming_convention(s)));
        }), all_names);
  var all_names$2 = List.flatten(all_names$1);
  if (all_names$2) {
    if (all_names$2[1]) {
      return $$String.concat("_", all_names$2);
    } else {
      return fix_ocaml_keyword_conflict(all_names$2[0]);
    }
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "Programmatic error"
        ];
  }
}

function encoding_info_of_field_type(all_types, field_type) {
  if (typeof field_type === "number") {
    switch (field_type) {
      case "Field_type_sint32" :
      case "Field_type_sint64" :
          return /* constructor */{
                  tag: "Pk_varint",
                  "0": true
                };
      case "Field_type_float" :
      case "Field_type_fixed32" :
      case "Field_type_sfixed32" :
          return "Pk_bits32";
      case "Field_type_double" :
      case "Field_type_fixed64" :
      case "Field_type_sfixed64" :
          return "Pk_bits64";
      case "Field_type_int32" :
      case "Field_type_int64" :
      case "Field_type_uint32" :
      case "Field_type_uint64" :
      case "Field_type_bool" :
          return /* constructor */{
                  tag: "Pk_varint",
                  "0": false
                };
      case "Field_type_string" :
      case "Field_type_bytes" :
          return "Pk_bytes";
      
    }
  } else {
    var match = type_of_id(all_types, field_type[0]);
    if (/* XXX */match[/* spec */4].tag === "Enum") {
      return /* constructor */{
              tag: "Pk_varint",
              "0": false
            };
    } else {
      return "Pk_bytes";
    }
  }
}

function encoding_of_field(all_types, field) {
  var match = field_option(field, "packed");
  var packed;
  if (match !== undefined) {
    var match$1 = match;
    if (/* XXX */match$1.tag === "Constant_bool") {
      packed = match$1[0];
    } else {
      var field_name$1 = field_name(field);
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Invalid_packed_option",
              "0": field_name$1
            }
          ];
    }
  } else {
    packed = false;
  }
  var pk = encoding_info_of_field_type(all_types, field_type(field));
  return /* tuple */[
          pk,
          field_number(field),
          packed,
          field_default(field)
        ];
}

function compile_field_type(field_name, all_types, file_options, field_options, file_name, field_type) {
  var match = find_field_option(field_options, "ocaml_type");
  var ocaml_type;
  if (match !== undefined) {
    var match$1 = match;
    ocaml_type = /* XXX */match$1.tag === "Constant_litteral" && match$1[0] === "int_t" ? /* Int_t */-783406652 : /* None */870530776;
  } else {
    ocaml_type = /* None */870530776;
  }
  var match$2 = file_option(file_options, "int32_type");
  var int32_type;
  if (match$2 !== undefined) {
    var match$3 = match$2;
    int32_type = /* XXX */match$3.tag === "Constant_litteral" ? (
        match$3[0] === "int_t" ? /* constructor */({
              tag: "Ft_basic_type",
              "0": "Bt_int"
            }) : /* constructor */({
              tag: "Ft_basic_type",
              "0": "Bt_int32"
            })
      ) : /* constructor */({
          tag: "Ft_basic_type",
          "0": "Bt_int32"
        });
  } else {
    int32_type = /* constructor */{
      tag: "Ft_basic_type",
      "0": "Bt_int32"
    };
  }
  var match$4 = file_option(file_options, "int64_type");
  var int64_type;
  if (match$4 !== undefined) {
    var match$5 = match$4;
    int64_type = /* XXX */match$5.tag === "Constant_litteral" ? (
        match$5[0] === "int_t" ? /* constructor */({
              tag: "Ft_basic_type",
              "0": "Bt_int"
            }) : /* constructor */({
              tag: "Ft_basic_type",
              "0": "Bt_int64"
            })
      ) : /* constructor */({
          tag: "Ft_basic_type",
          "0": "Bt_int64"
        });
  } else {
    int64_type = /* constructor */{
      tag: "Ft_basic_type",
      "0": "Bt_int64"
    };
  }
  if (typeof field_type === "number") {
    switch (field_type) {
      case "Field_type_double" :
      case "Field_type_float" :
          return /* constructor */{
                  tag: "Ft_basic_type",
                  "0": "Bt_float"
                };
      case "Field_type_int32" :
      case "Field_type_uint32" :
      case "Field_type_sint32" :
      case "Field_type_fixed32" :
          if (ocaml_type !== -783406652) {
            return int32_type;
          } else {
            return /* constructor */{
                    tag: "Ft_basic_type",
                    "0": "Bt_int"
                  };
          }
      case "Field_type_int64" :
      case "Field_type_uint64" :
      case "Field_type_sint64" :
      case "Field_type_fixed64" :
          if (ocaml_type !== -783406652) {
            return int64_type;
          } else {
            return /* constructor */{
                    tag: "Ft_basic_type",
                    "0": "Bt_int"
                  };
          }
      case "Field_type_sfixed32" :
          return unsupported_field_type(field_name, "sfixed32", "OCaml", "()");
      case "Field_type_sfixed64" :
          return unsupported_field_type(field_name, "sfixed64", "OCaml", "()");
      case "Field_type_bool" :
          return /* constructor */{
                  tag: "Ft_basic_type",
                  "0": "Bt_bool"
                };
      case "Field_type_string" :
          return /* constructor */{
                  tag: "Ft_basic_type",
                  "0": "Bt_string"
                };
      case "Field_type_bytes" :
          return /* constructor */{
                  tag: "Ft_basic_type",
                  "0": "Bt_bytes"
                };
      
    }
  } else {
    var all_types$1 = all_types;
    var file_name$1 = file_name;
    var i = field_type[0];
    var module_ = module_of_file_name(file_name$1);
    var t;
    try {
      t = type_of_id(all_types$1, i);
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        throw [
              Compilation_error,
              /* constructor */{
                tag: "Programatic_error",
                "0": "No_type_found_for_id"
              }
            ];
      }
      throw exn;
    }
    if (is_empty_message(t)) {
      return "Ft_unit";
    } else {
      var udt_nested;
      udt_nested = /* XXX */t[/* spec */4].tag === "Enum" ? false : true;
      var field_type_module = module_of_file_name(t[/* file_name */2]);
      var match$6 = type_scope_of_type(t);
      var udt_type_name = type_name(match$6[/* message_names */1], type_name_of_type(t));
      if (field_type_module === module_) {
        return /* constructor */{
                tag: "Ft_user_defined_type",
                "0": /* record */[
                  /* udt_module */undefined,
                  /* udt_type_name */udt_type_name,
                  /* udt_nested */udt_nested
                ]
              };
      } else {
        return /* constructor */{
                tag: "Ft_user_defined_type",
                "0": /* record */[
                  /* udt_module */field_type_module,
                  /* udt_type_name */udt_type_name,
                  /* udt_nested */udt_nested
                ]
              };
      }
    }
  }
}

function is_mutable(field_name, field_options) {
  var match = find_field_option(field_options, "ocaml_mutable");
  if (match !== undefined) {
    var match$1 = match;
    if (/* XXX */match$1.tag === "Constant_bool") {
      return match$1[0];
    } else {
      throw [
            Compilation_error,
            /* constructor */{
              tag: "Invalid_mutable_option",
              "0": field_name
            }
          ];
    }
  } else {
    return false;
  }
}

function ocaml_container(field_options) {
  var match = find_field_option(field_options, "ocaml_container");
  if (match !== undefined) {
    var match$1 = match;
    if (/* XXX */match$1.tag === "Constant_litteral") {
      return match$1[0];
    } else {
      return ;
    }
  }
  
}

function variant_of_oneof(include_oneof_name, outer_message_names, all_types, file_options, file_name, oneof_field) {
  var v_constructors = List.map((function (field) {
          var pbtt_field_type = field_type(field);
          var field_type$1 = compile_field_type(field_name(field), all_types, file_options, field_options(field), file_name, pbtt_field_type);
          var match = encoding_of_field(all_types, field);
          var vc_constructor = constructor_name(field_name(field));
          return /* record */[
                  /* vc_constructor */vc_constructor,
                  /* vc_field_type */typeof field_type$1 === "number" ? "Vct_nullary" : /* constructor */({
                        tag: "Vct_non_nullary_constructor",
                        "0": field_type$1
                      }),
                  /* vc_encoding_number */match[1],
                  /* vc_payload_kind */match[0]
                ];
        }), oneof_field[/* oneof_fields */1]);
  var v_name = include_oneof_name !== undefined ? type_name(outer_message_names, oneof_field[/* oneof_name */0]) : type_name(outer_message_names, "");
  return /* record */[
          /* v_name */v_name,
          /* v_constructors */v_constructors
        ];
}

function compile_enum(file_name, scope, param) {
  var module_ = module_of_file_name(file_name);
  var cv_constructors = List.map((function (param) {
          return /* tuple */[
                  constructor_name(param[/* enum_value_name */0]),
                  param[/* enum_value_int */1]
                ];
        }), param[/* enum_values */1]);
  return /* record */[
          /* module_ */module_,
          /* spec : constructor */{
            tag: "Const_variant",
            "0": /* record */[
              /* cv_name */type_name(scope[/* message_names */1], param[/* enum_name */0]),
              /* cv_constructors */cv_constructors
            ]
          }
        ];
}

var all_code_gen = /* constructor */{
  tag: "::",
  "0": Codegen_type,
  "1": /* constructor */{
    tag: "::",
    "0": Codegen_default,
    "1": /* constructor */{
      tag: "::",
      "0": Codegen_decode,
      "1": /* constructor */{
        tag: "::",
        "0": Codegen_encode,
        "1": /* constructor */{
          tag: "::",
          "0": Codegen_pp,
          "1": "[]"
        }
      }
    }
  }
};

function compile(proto_definition) {
  var lexbuf = Lexing.from_string(proto_definition);
  var proto;
  try {
    proto = proto_(lexer, lexbuf);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    throw add_loc(from_lexbuf(lexbuf), exn);
  }
  var all_pbtt_msgs = compile_proto_p1("tmp.proto", proto);
  var all_pbtt_msgs$1 = List.map((function (param) {
          var all_types = all_pbtt_msgs;
          var t = param;
          var spec = t[/* spec */4];
          var file_options = t[/* file_options */3];
          var file_name = t[/* file_name */2];
          var id = t[/* id */1];
          var scope = t[/* scope */0];
          if (/* XXX */spec.tag === "Enum") {
            return /* record */[
                    /* scope */scope,
                    /* id */id,
                    /* file_name */file_name,
                    /* file_options */file_options,
                    /* spec */spec
                  ];
          } else {
            return /* record */[
                    /* scope */scope,
                    /* id */id,
                    /* file_name */file_name,
                    /* file_options */file_options,
                    /* spec : constructor */{
                      tag: "Message",
                      "0": compile_message_p2(all_types, scope, spec[0])
                    }
                  ];
          }
        }), all_pbtt_msgs);
  var grouped_pbtt_msgs = List.rev(group(all_pbtt_msgs$1));
  var grouped_ocaml_types = List.map((function (pbtt_msgs) {
          return List.map((function (pbtt_msg) {
                        var all_types = all_pbtt_msgs$1;
                        var param = pbtt_msg;
                        var match = param[/* spec */4];
                        var file_name = param[/* file_name */2];
                        var scope = param[/* scope */0];
                        if (/* XXX */match.tag === "Enum") {
                          return /* constructor */{
                                  tag: "::",
                                  "0": compile_enum(file_name, scope, match[0]),
                                  "1": "[]"
                                };
                        } else {
                          var file_options = param[/* file_options */3];
                          var all_types$1 = all_types;
                          var file_name$1 = file_name;
                          var scope$1 = scope;
                          var message = match[0];
                          var module_ = module_of_file_name(file_name$1);
                          var message_names = scope$1[/* message_names */1];
                          var message_body = message[/* message_body */2];
                          var message_name = message[/* message_name */1];
                          if (message_body) {
                            var match$1 = message_body[0];
                            switch (/* XXX */match$1.tag) {
                              case "Message_oneof_field" :
                                  if (!message_body[1]) {
                                    var outer_message_names = Pervasives.$at(message_names, /* constructor */{
                                          tag: "::",
                                          "0": message_name,
                                          "1": "[]"
                                        });
                                    var variant = variant_of_oneof(undefined, outer_message_names, all_types$1, file_options, file_name$1, match$1[0]);
                                    return /* constructor */{
                                            tag: "::",
                                            "0": /* record */[
                                              /* module_ */module_,
                                              /* spec : constructor */{
                                                tag: "Variant",
                                                "0": variant
                                              }
                                            ],
                                            "1": "[]"
                                          };
                                  }
                                  break;
                              case "Message_field" :
                              case "Message_map_field" :
                                  break;
                              
                            }
                          } else {
                            return "[]";
                          }
                          var match$2 = List.fold_left((function (param, param$1) {
                                  var fields = param[1];
                                  var variants = param[0];
                                  switch (/* XXX */param$1.tag) {
                                    case "Message_field" :
                                        var field = param$1[0];
                                        var match = encoding_of_field(all_types$1, field);
                                        var encoding_number = match[1];
                                        var pk = match[0];
                                        var field_name$1 = field_name(field);
                                        var field_options$1 = field_options(field);
                                        var field_type$1 = compile_field_type(field_name$1, all_types$1, file_options, field_options$1, file_name$1, field_type(field));
                                        var field_default$1 = field_default(field);
                                        var mutable_ = is_mutable(field_name$1, field_options$1);
                                        var match$1 = field_label(field);
                                        var record_field_type;
                                        if (match$1 !== -132092992) {
                                          if (match$1 >= 202657151) {
                                            record_field_type = /* constructor */{
                                              tag: "Rft_required",
                                              "0": /* tuple */[
                                                field_type$1,
                                                encoding_number,
                                                pk,
                                                field_default$1
                                              ]
                                            };
                                          } else {
                                            var match$2 = ocaml_container(field_options$1);
                                            var repeated_type;
                                            if (match$2 !== undefined) {
                                              if (match$2 === "repeated_field") {
                                                repeated_type = "Rt_repeated_field";
                                              } else {
                                                throw [
                                                      Caml_builtin_exceptions.failure,
                                                      "Invalid ocaml_container attribute value"
                                                    ];
                                              }
                                            } else {
                                              repeated_type = "Rt_list";
                                            }
                                            record_field_type = /* constructor */{
                                              tag: "Rft_repeated_field",
                                              "0": /* tuple */[
                                                repeated_type,
                                                field_type$1,
                                                encoding_number,
                                                pk,
                                                match[2]
                                              ]
                                            };
                                          }
                                        } else {
                                          record_field_type = /* constructor */{
                                            tag: "Rft_optional",
                                            "0": /* tuple */[
                                              field_type$1,
                                              encoding_number,
                                              pk,
                                              field_default$1
                                            ]
                                          };
                                        }
                                        var record_field_000 = /* rf_label */label_name_of_field_name(field_name$1);
                                        var record_field = /* record */[
                                          record_field_000,
                                          /* rf_field_type */record_field_type,
                                          /* rf_mutable */mutable_
                                        ];
                                        return /* tuple */[
                                                variants,
                                                /* constructor */{
                                                  tag: "::",
                                                  "0": record_field,
                                                  "1": fields
                                                }
                                              ];
                                    case "Message_oneof_field" :
                                        var field$1 = param$1[0];
                                        var outer_message_names = Pervasives.$at(message_names, /* constructor */{
                                              tag: "::",
                                              "0": message_name,
                                              "1": "[]"
                                            });
                                        var variant = variant_of_oneof("()", outer_message_names, all_types$1, file_options, file_name$1, field$1);
                                        var record_field_000$1 = /* rf_label */label_name_of_field_name(field$1[/* oneof_name */0]);
                                        var record_field_001 = /* rf_field_type : constructor */{
                                          tag: "Rft_variant_field",
                                          "0": variant
                                        };
                                        var record_field$1 = /* record */[
                                          record_field_000$1,
                                          record_field_001,
                                          /* rf_mutable */false
                                        ];
                                        var variants$1 = /* constructor */{
                                          tag: "::",
                                          "0": /* record */[
                                            /* module_ */module_,
                                            /* spec : constructor */{
                                              tag: "Variant",
                                              "0": variant
                                            }
                                          ],
                                          "1": variants
                                        };
                                        var fields$1 = /* constructor */{
                                          tag: "::",
                                          "0": record_field$1,
                                          "1": fields
                                        };
                                        return /* tuple */[
                                                variants$1,
                                                fields$1
                                              ];
                                    case "Message_map_field" :
                                        var mf = param$1[0];
                                        var map_options = mf[/* map_options */4];
                                        var map_value_type = mf[/* map_value_type */3];
                                        var map_key_type = mf[/* map_key_type */2];
                                        var map_name = mf[/* map_name */0];
                                        var key_type = compile_field_type(Curry._1(Printf.sprintf(/* constructor */{
                                                      tag: "Format",
                                                      "0": /* constructor */{
                                                        tag: "String_literal",
                                                        "0": "key of ",
                                                        "1": /* constructor */{
                                                          tag: "String",
                                                          "0": "No_padding",
                                                          "1": "End_of_format"
                                                        }
                                                      },
                                                      "1": "key of %s"
                                                    }), map_name), all_types$1, file_options, map_options, file_name$1, map_key_type);
                                        var key_pk = encoding_info_of_field_type(all_types$1, map_key_type);
                                        var key_type$1;
                                        if (typeof key_type === "string") {
                                          throw [
                                                Caml_builtin_exceptions.failure,
                                                "Only Basic Types are supported for map keys"
                                              ];
                                        } else if (/* XXX */key_type.tag === "Ft_basic_type") {
                                          key_type$1 = key_type[0];
                                        } else {
                                          throw [
                                                Caml_builtin_exceptions.failure,
                                                "Only Basic Types are supported for map keys"
                                              ];
                                        }
                                        var value_type = compile_field_type(Curry._1(Printf.sprintf(/* constructor */{
                                                      tag: "Format",
                                                      "0": /* constructor */{
                                                        tag: "String_literal",
                                                        "0": "value of ",
                                                        "1": /* constructor */{
                                                          tag: "String",
                                                          "0": "No_padding",
                                                          "1": "End_of_format"
                                                        }
                                                      },
                                                      "1": "value of %s"
                                                    }), map_name), all_types$1, file_options, map_options, file_name$1, map_value_type);
                                        var value_pk = encoding_info_of_field_type(all_types$1, map_value_type);
                                        var match$3 = ocaml_container(map_options);
                                        var associative_type;
                                        if (match$3 !== undefined) {
                                          if (match$3 === "hashtbl") {
                                            associative_type = "At_hashtable";
                                          } else {
                                            throw [
                                                  Caml_builtin_exceptions.failure,
                                                  "Invalid ocaml_container attribute value for map"
                                                ];
                                          }
                                        } else {
                                          associative_type = "At_list";
                                        }
                                        var record_field_type$1 = /* constructor */{
                                          tag: "Rft_associative_field",
                                          "0": /* tuple */[
                                            associative_type,
                                            mf[/* map_number */1],
                                            /* tuple */[
                                              key_type$1,
                                              key_pk
                                            ],
                                            /* tuple */[
                                              value_type,
                                              value_pk
                                            ]
                                          ]
                                        };
                                        var record_field_000$2 = /* rf_label */label_name_of_field_name(map_name);
                                        var record_field_002 = /* rf_mutable */is_mutable(map_name, map_options);
                                        var record_field$2 = /* record */[
                                          record_field_000$2,
                                          /* rf_field_type */record_field_type$1,
                                          record_field_002
                                        ];
                                        return /* tuple */[
                                                variants,
                                                /* constructor */{
                                                  tag: "::",
                                                  "0": record_field$2,
                                                  "1": fields
                                                }
                                              ];
                                    
                                  }
                                }), /* tuple */[
                                "[]",
                                "[]"
                              ], message_body);
                          var record_000 = /* r_name */type_name(message_names, message_name);
                          var record_001 = /* r_fields */List.rev(match$2[1]);
                          var record = /* record */[
                            record_000,
                            record_001
                          ];
                          var type__001 = /* spec : constructor */{
                            tag: "Record",
                            "0": record
                          };
                          var type_ = /* record */[
                            /* module_ */module_,
                            type__001
                          ];
                          return List.rev(/* constructor */{
                                      tag: "::",
                                      "0": type_,
                                      "1": match$2[0]
                                    });
                        }
                      }), pbtt_msgs);
        }), grouped_pbtt_msgs);
  var all_ocaml_types = List.flatten(grouped_ocaml_types);
  var otypes = all_ocaml_types;
  var proto_file_name = "tmp.proto";
  var gen = function (otypes, sc, fs) {
    return List.iter((function (param) {
                  var ocamldoc_title = param[1];
                  var f = param[0];
                  if (ocamldoc_title !== undefined) {
                    line$1(sc, "");
                    line$1(sc, Curry._1(Printf.sprintf(/* constructor */{
                                  tag: "Format",
                                  "0": /* constructor */{
                                    tag: "String_literal",
                                    "0": "(** {2 ",
                                    "1": /* constructor */{
                                      tag: "String",
                                      "0": "No_padding",
                                      "1": /* constructor */{
                                        tag: "String_literal",
                                        "0": "} *)",
                                        "1": "End_of_format"
                                      }
                                    }
                                  },
                                  "1": "(** {2 %s} *)"
                                }), ocamldoc_title));
                    line$1(sc, "");
                  }
                  return List.iter((function (types) {
                                List.fold_left((function (first, type_) {
                                        var has_encoded = first ? Curry._3(f, undefined, type_, sc) : Curry._3(f, "()", type_, sc);
                                        line$1(sc, "");
                                        if (first) {
                                          return !has_encoded;
                                        } else {
                                          return false;
                                        }
                                      }), true, types);
                                return "()";
                              }), otypes);
                }), fs);
  };
  var sc = /* record */[/* items */"[]"];
  line$1(sc, "[@@@ocaml.warning \"-30\"]");
  line$1(sc, "");
  gen(otypes, sc, List.map((function (m) {
              return /* tuple */[
                      m.gen_struct,
                      undefined
                    ];
            }), all_code_gen));
  var struct_string = print(sc);
  var sc$1 = /* record */[/* items */"[]"];
  line$1(sc$1, Curry._1(Printf.sprintf(/* constructor */{
                tag: "Format",
                "0": /* constructor */{
                  tag: "String_literal",
                  "0": "(** ",
                  "1": /* constructor */{
                    tag: "String",
                    "0": "No_padding",
                    "1": /* constructor */{
                      tag: "String_literal",
                      "0": " Generated Types and Encoding *)",
                      "1": "End_of_format"
                    }
                  }
                },
                "1": "(** %s Generated Types and Encoding *)"
              }), Curry._1(Filename.basename, proto_file_name)));
  gen(otypes, sc$1, List.map((function (m) {
              return /* tuple */[
                      m.gen_sig,
                      m.ocamldoc_title
                    ];
            }), all_code_gen));
  var sig_string = print(sc$1);
  return /* tuple */[
          sig_string,
          struct_string
        ];
}

var match = compile("message T {required int32 j = 1; }");

var suites = /* record */[/* contents */"[]"];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: "::",
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: "Eq",
                  "0": x,
                  "1": y
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

eq("File \"ocaml_protc_test.ml\", line 10, characters 5-12", match[0], "(** tmp.proto Generated Types and Encoding *)\n\n(** {2 Types} *)\n\ntype t = {\n  j : int32;\n}\n\n\n(** {2 Default values} *)\n\nval default_t : \n  ?j:int32 ->\n  unit ->\n  t\n(** [default_t ()] is the default value for type [t] *)\n\n\n(** {2 Protobuf Decoding} *)\n\nval decode_t : Pbrt.Decoder.t -> t\n(** [decode_t decoder] decodes a [t] value from [decoder] *)\n\n\n(** {2 Protobuf Toding} *)\n\nval encode_t : t -> Pbrt.Encoder.t -> unit\n(** [encode_t v encoder] encodes [v] with the given [encoder] *)\n\n\n(** {2 Formatters} *)\n\nval pp_t : Format.formatter -> t -> unit \n(** [pp_t v] formats v] *)\n");

eq("File \"ocaml_protc_test.ml\", line 46, characters 5-12", match[1], "[@@@ocaml.warning \"-30\"]\n\ntype t = {\n  j : int32;\n}\n\nand t_mutable = {\n  mutable j : int32;\n}\n\nlet rec default_t \n  ?j:((j:int32) = 0l)\n  () : t  = {\n  j;\n}\n\nand default_t_mutable () : t_mutable = {\n  j = 0l;\n}\n\nlet rec decode_t d =\n  let v = default_t_mutable () in\n  let rec loop () = \n    match Pbrt.Decoder.key d with\n    | None -> (\n    )\n    | Some (1, Pbrt.Varint) -> (\n      v.j <- Pbrt.Decoder.int32_as_varint d;\n      loop ()\n    )\n    | Some (1, pk) -> raise (\n      Protobuf.Decoder.Failure (Protobuf.Decoder.Unexpected_payload (\"Message(t), field(1)\", pk))\n    )\n    | Some (n, payload_kind) -> Pbrt.Decoder.skip d payload_kind; loop ()\n  in\n  loop ();\n  let v:t = Obj.magic v in\n  v\n\nlet rec encode_t (v:t) encoder = \n  Pbrt.Encoder.key (1, Pbrt.Varint) encoder; \n  Pbrt.Encoder.int32_as_varint v.j encoder;\n  ()\n\nlet rec pp_t fmt (v:t) = \n  let pp_i fmt () =\n    Format.pp_open_vbox fmt 1;\n    Pbrt.Pp.pp_record_field \"j\" Pbrt.Pp.pp_int32 fmt v.j;\n    Format.pp_close_box fmt ()\n  in\n  Pbrt.Pp.pp_brk pp_i fmt ()\n");

Mt.from_pair_suites("Ocaml_proto_test", suites[0]);

/*  Not a pure module */

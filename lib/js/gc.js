'use strict';

var Curry = require("./curry.js");
var Printf = require("./printf.js");
var Caml_gc = require("./caml_gc.js");

var dummy_stat = /* record */[
  /* minor_words */0,
  /* promoted_words */0,
  /* major_words */0,
  /* minor_collections */0,
  /* major_collections */0,
  /* heap_words */0,
  /* heap_chunks */0,
  /* live_words */0,
  /* live_blocks */0,
  /* free_words */0,
  /* free_blocks */0,
  /* largest_free */0,
  /* fragments */0,
  /* compactions */0,
  /* top_heap_words */0,
  /* stack_size */0
];

function stat(param) {
  return dummy_stat;
}

function quick_stat(param) {
  return dummy_stat;
}

function get(param) {
  return /* record */[
          /* minor_heap_size */0,
          /* major_heap_increment */0,
          /* space_overhead */0,
          /* verbose */0,
          /* max_overhead */0,
          /* stack_limit */0,
          /* allocation_policy */0
        ];
}

function print_stat(c) {
  var st = stat(/* () */0);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "minor_words: ",
              "1": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* constructor */{
                  tag: 0,
                  name: "Lit_precision",
                  length: 1,
                  "0": 0
                },
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "minor_words: %.0f\n"
          }), st[/* minor_words */0]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "promoted_words: ",
              "1": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* constructor */{
                  tag: 0,
                  name: "Lit_precision",
                  length: 1,
                  "0": 0
                },
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "promoted_words: %.0f\n"
          }), st[/* promoted_words */1]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "major_words: ",
              "1": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* constructor */{
                  tag: 0,
                  name: "Lit_precision",
                  length: 1,
                  "0": 0
                },
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "major_words: %.0f\n"
          }), st[/* major_words */2]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "minor_collections: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "minor_collections: %d\n"
          }), st[/* minor_collections */3]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "major_collections: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "major_collections: %d\n"
          }), st[/* major_collections */4]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "heap_words: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "heap_words: %d\n"
          }), st[/* heap_words */5]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "heap_chunks: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "heap_chunks: %d\n"
          }), st[/* heap_chunks */6]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "top_heap_words: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "top_heap_words: %d\n"
          }), st[/* top_heap_words */14]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "live_words: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "live_words: %d\n"
          }), st[/* live_words */7]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "live_blocks: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "live_blocks: %d\n"
          }), st[/* live_blocks */8]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "free_words: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "free_words: %d\n"
          }), st[/* free_words */9]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "free_blocks: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "free_blocks: %d\n"
          }), st[/* free_blocks */10]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "largest_free: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "largest_free: %d\n"
          }), st[/* largest_free */11]);
  Curry._1(Printf.fprintf(c, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "fragments: ",
              "1": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              }
            },
            "1": "fragments: %d\n"
          }), st[/* fragments */12]);
  return Curry._1(Printf.fprintf(c, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "compactions: ",
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "\n" */10,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": "compactions: %d\n"
                }), st[/* compactions */13]);
}

function allocated_bytes(param) {
  var match = Caml_gc.caml_gc_counters(/* () */0);
  return (match[0] + match[2] - match[1]) * 4;
}

function call_alarm(arec) {
  if (arec[/* active */0][0]) {
    Caml_gc.caml_final_register(call_alarm, arec);
    return Curry._1(arec[/* f */1], /* () */0);
  } else {
    return 0;
  }
}

function create_alarm(f) {
  var arec_000 = /* active : record */[/* contents */true];
  var arec = /* record */[
    arec_000,
    /* f */f
  ];
  Caml_gc.caml_final_register(call_alarm, arec);
  return arec_000;
}

function delete_alarm(a) {
  a[0] = false;
  return /* () */0;
}

var finalise = Caml_gc.caml_final_register;

var finalise_release = Caml_gc.caml_final_release;

exports.stat = stat;
exports.quick_stat = quick_stat;
exports.get = get;
exports.print_stat = print_stat;
exports.allocated_bytes = allocated_bytes;
exports.finalise = finalise;
exports.finalise_release = finalise_release;
exports.create_alarm = create_alarm;
exports.delete_alarm = delete_alarm;
/* No side effect */

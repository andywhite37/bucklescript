'use strict';

var Mt = require("./mt.js");
var Caml_option = require("../../lib/js/caml_option.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "make",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": "null",
                "1": String(null).concat("")
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "fromCharCode",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": "a",
                  "1": String.fromCharCode(97)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "fromCharCodeMany",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": "az",
                    "1": String.fromCharCode(97, 122)
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "fromCodePoint",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": "a",
                      "1": String.fromCodePoint(97)
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "fromCodePointMany",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        "0": "az",
                        "1": String.fromCodePoint(97, 122)
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "length",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          "0": 3,
                          "1": "foo".length
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": /* tuple */[
                "get",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            "0": "a",
                            "1": "foobar"[4]
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": /* tuple */[
                  "charAt",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              "0": "a",
                              "1": "foobar".charAt(4)
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": /* tuple */[
                    "charCodeAt",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                "0": 97,
                                "1": "foobar".charCodeAt(4)
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": /* tuple */[
                      "codePointAt",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  "0": 97,
                                  "1": Caml_option.undefined_to_opt("foobar".codePointAt(4))
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": /* tuple */[
                        "codePointAt - out of bounds",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    "0": undefined,
                                    "1": Caml_option.undefined_to_opt("foobar".codePointAt(98))
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": /* tuple */[
                          "concat",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      "0": "foobar",
                                      "1": "foo".concat("bar")
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": /* tuple */[
                            "concatMany",
                            (function (param) {
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        "0": "foobarbaz",
                                        "1": "foo".concat("bar", "baz")
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": /* tuple */[
                              "endsWith",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          "0": true,
                                          "1": "foobar".endsWith("bar")
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              "0": /* tuple */[
                                "endsWithFrom",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            "0": false,
                                            "1": "foobar".endsWith("bar", 1)
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": /* tuple */[
                                  "includes",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              "0": true,
                                              "1": "foobarbaz".includes("bar")
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": /* tuple */[
                                    "includesFrom",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                "0": false,
                                                "1": "foobarbaz".includes("bar", 4)
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": /* tuple */[
                                      "indexOf",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  "0": 3,
                                                  "1": "foobarbaz".indexOf("bar")
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      "0": /* tuple */[
                                        "indexOfFrom",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    "0": -1,
                                                    "1": "foobarbaz".indexOf("bar", 4)
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": /* tuple */[
                                          "lastIndexOf",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      "0": 3,
                                                      "1": "foobarbaz".lastIndexOf("bar")
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          "0": /* tuple */[
                                            "lastIndexOfFrom",
                                            (function (param) {
                                                return /* constructor */{
                                                        tag: 0,
                                                        name: "Eq",
                                                        "0": 3,
                                                        "1": "foobarbaz".lastIndexOf("bar", 4)
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            "0": /* tuple */[
                                              "localeCompare",
                                              (function (param) {
                                                  return /* constructor */{
                                                          tag: 0,
                                                          name: "Eq",
                                                          "0": 0,
                                                          "1": "foo".localeCompare("foo")
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              "0": /* tuple */[
                                                "match",
                                                (function (param) {
                                                    return /* constructor */{
                                                            tag: 0,
                                                            name: "Eq",
                                                            "0": /* array */[
                                                              "na",
                                                              "na"
                                                            ],
                                                            "1": Caml_option.null_to_opt("banana".match((/na+/g)))
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                "0": /* tuple */[
                                                  "match - no match",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 0,
                                                              name: "Eq",
                                                              "0": undefined,
                                                              "1": Caml_option.null_to_opt("banana".match((/nanana+/g)))
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  "0": /* tuple */[
                                                    "normalize",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 0,
                                                                name: "Eq",
                                                                "0": "foo",
                                                                "1": "foo".normalize()
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    "0": /* tuple */[
                                                      "normalizeByForm",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  "0": "foo",
                                                                  "1": "foo".normalize("NFKD")
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      "0": /* tuple */[
                                                        "repeat",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 0,
                                                                    name: "Eq",
                                                                    "0": "foofoofoo",
                                                                    "1": "foo".repeat(3)
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        "0": /* tuple */[
                                                          "replace",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 0,
                                                                      name: "Eq",
                                                                      "0": "fooBORKbaz",
                                                                      "1": "foobarbaz".replace("bar", "BORK")
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          "0": /* tuple */[
                                                            "replaceByRe",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 0,
                                                                        name: "Eq",
                                                                        "0": "fooBORKBORK",
                                                                        "1": "foobarbaz".replace((/ba./g), "BORK")
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            "0": /* tuple */[
                                                              "unsafeReplaceBy0",
                                                              (function (param) {
                                                                  var replace = function (whole, offset, s) {
                                                                    if (whole === "bar") {
                                                                      return "BORK";
                                                                    } else {
                                                                      return "DORK";
                                                                    }
                                                                  };
                                                                  return /* constructor */{
                                                                          tag: 0,
                                                                          name: "Eq",
                                                                          "0": "fooBORKDORK",
                                                                          "1": "foobarbaz".replace((/ba./g), replace)
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              "0": /* tuple */[
                                                                "unsafeReplaceBy1",
                                                                (function (param) {
                                                                    var replace = function (whole, p1, offset, s) {
                                                                      if (whole === "bar") {
                                                                        return "BORK";
                                                                      } else {
                                                                        return "DORK";
                                                                      }
                                                                    };
                                                                    return /* constructor */{
                                                                            tag: 0,
                                                                            name: "Eq",
                                                                            "0": "fooBORKDORK",
                                                                            "1": "foobarbaz".replace((/ba./g), replace)
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                "0": /* tuple */[
                                                                  "unsafeReplaceBy2",
                                                                  (function (param) {
                                                                      var replace = function (whole, p1, p2, offset, s) {
                                                                        if (whole === "bar") {
                                                                          return "BORK";
                                                                        } else {
                                                                          return "DORK";
                                                                        }
                                                                      };
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              "0": "fooBORKDORK",
                                                                              "1": "foobarbaz".replace((/ba./g), replace)
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  "0": /* tuple */[
                                                                    "unsafeReplaceBy3",
                                                                    (function (param) {
                                                                        var replace = function (whole, p1, p2, p3, offset, s) {
                                                                          if (whole === "bar") {
                                                                            return "BORK";
                                                                          } else {
                                                                            return "DORK";
                                                                          }
                                                                        };
                                                                        return /* constructor */{
                                                                                tag: 0,
                                                                                name: "Eq",
                                                                                "0": "fooBORKDORK",
                                                                                "1": "foobarbaz".replace((/ba./g), replace)
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    "0": /* tuple */[
                                                                      "search",
                                                                      (function (param) {
                                                                          return /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "Eq",
                                                                                  "0": 3,
                                                                                  "1": "foobarbaz".search((/ba./g))
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      "0": /* tuple */[
                                                                        "slice",
                                                                        (function (param) {
                                                                            return /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "Eq",
                                                                                    "0": "bar",
                                                                                    "1": "foobarbaz".slice(3, 6)
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        "0": /* tuple */[
                                                                          "sliceToEnd",
                                                                          (function (param) {
                                                                              return /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "Eq",
                                                                                      "0": "barbaz",
                                                                                      "1": "foobarbaz".slice(3)
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          "0": /* tuple */[
                                                                            "split",
                                                                            (function (param) {
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        "0": /* array */[
                                                                                          "foo",
                                                                                          "bar",
                                                                                          "baz"
                                                                                        ],
                                                                                        "1": "foo bar baz".split(" ")
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            "0": /* tuple */[
                                                                              "splitAtMost",
                                                                              (function (param) {
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          "0": /* array */[
                                                                                            "foo",
                                                                                            "bar"
                                                                                          ],
                                                                                          "1": "foo bar baz".split(" ", 2)
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              "0": /* tuple */[
                                                                                "splitByRe",
                                                                                (function (param) {
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            "0": /* array */[
                                                                                              "a",
                                                                                              "#",
                                                                                              undefined,
                                                                                              "b",
                                                                                              "#",
                                                                                              ":",
                                                                                              "c"
                                                                                            ],
                                                                                            "1": "a#b#:c".split((/(#)(:)?/))
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                "0": /* tuple */[
                                                                                  "splitByReAtMost",
                                                                                  (function (param) {
                                                                                      return /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "Eq",
                                                                                              "0": /* array */[
                                                                                                "a",
                                                                                                "#",
                                                                                                undefined
                                                                                              ],
                                                                                              "1": "a#b#:c".split((/(#)(:)?/), 3)
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  "0": /* tuple */[
                                                                                    "startsWith",
                                                                                    (function (param) {
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                "0": true,
                                                                                                "1": "foobarbaz".startsWith("foo")
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    "0": /* tuple */[
                                                                                      "startsWithFrom",
                                                                                      (function (param) {
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  "0": false,
                                                                                                  "1": "foobarbaz".startsWith("foo", 1)
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      "0": /* tuple */[
                                                                                        "substr",
                                                                                        (function (param) {
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    "0": "barbaz",
                                                                                                    "1": "foobarbaz".substr(3)
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      "1": /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        "0": /* tuple */[
                                                                                          "substrAtMost",
                                                                                          (function (param) {
                                                                                              return /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "Eq",
                                                                                                      "0": "bar",
                                                                                                      "1": "foobarbaz".substr(3, 3)
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        "1": /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          "0": /* tuple */[
                                                                                            "substring",
                                                                                            (function (param) {
                                                                                                return /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "Eq",
                                                                                                        "0": "bar",
                                                                                                        "1": "foobarbaz".substring(3, 6)
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          "1": /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "::",
                                                                                            "0": /* tuple */[
                                                                                              "substringToEnd",
                                                                                              (function (param) {
                                                                                                  return /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "Eq",
                                                                                                          "0": "barbaz",
                                                                                                          "1": "foobarbaz".substring(3)
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            "1": /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "::",
                                                                                              "0": /* tuple */[
                                                                                                "toLowerCase",
                                                                                                (function (param) {
                                                                                                    return /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "Eq",
                                                                                                            "0": "bork",
                                                                                                            "1": "BORK".toLowerCase()
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              "1": /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "::",
                                                                                                "0": /* tuple */[
                                                                                                  "toLocaleLowerCase",
                                                                                                  (function (param) {
                                                                                                      return /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "Eq",
                                                                                                              "0": "bork",
                                                                                                              "1": "BORK".toLocaleLowerCase()
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                "1": /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "::",
                                                                                                  "0": /* tuple */[
                                                                                                    "toUpperCase",
                                                                                                    (function (param) {
                                                                                                        return /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "Eq",
                                                                                                                "0": "FUBAR",
                                                                                                                "1": "fubar".toUpperCase()
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  "1": /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "::",
                                                                                                    "0": /* tuple */[
                                                                                                      "toLocaleUpperCase",
                                                                                                      (function (param) {
                                                                                                          return /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "Eq",
                                                                                                                  "0": "FUBAR",
                                                                                                                  "1": "fubar".toLocaleUpperCase()
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    "1": /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "::",
                                                                                                      "0": /* tuple */[
                                                                                                        "trim",
                                                                                                        (function (param) {
                                                                                                            return /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "Eq",
                                                                                                                    "0": "foo",
                                                                                                                    "1": "  foo  ".trim()
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      "1": /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "::",
                                                                                                        "0": /* tuple */[
                                                                                                          "anchor",
                                                                                                          (function (param) {
                                                                                                              return /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "Eq",
                                                                                                                      "0": "<a name=\"bar\">foo</a>",
                                                                                                                      "1": "foo".anchor("bar")
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
                                                                                                        "1": /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          "0": /* tuple */[
                                                                                                            "link",
                                                                                                            (function (param) {
                                                                                                                return /* constructor */{
                                                                                                                        tag: 0,
                                                                                                                        name: "Eq",
                                                                                                                        "0": "<a href=\"https://reason.ml\">foo</a>",
                                                                                                                        "1": "foo".link("https://reason.ml")
                                                                                                                      };
                                                                                                              })
                                                                                                          ],
                                                                                                          "1": /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            "0": /* tuple */[
                                                                                                              "File \"js_string_test.ml\", line 211, characters 4-11",
                                                                                                              (function (param) {
                                                                                                                  return /* constructor */{
                                                                                                                          tag: 4,
                                                                                                                          name: "Ok",
                                                                                                                          "0": "ab".includes("a")
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
};

Mt.from_pair_suites("Js_string_test", suites);

exports.suites = suites;
/*  Not a pure module */

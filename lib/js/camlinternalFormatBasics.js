'use strict';


function erase_rel(param) {
  if (typeof param === "string") {
    return "End_of_fmtty";
  } else {
    switch (/* XXX */param.tag) {
      case "Char_ty" :
          return /* constructor */{
                  tag: "Char_ty",
                  "0": erase_rel(param[0])
                };
      case "String_ty" :
          return /* constructor */{
                  tag: "String_ty",
                  "0": erase_rel(param[0])
                };
      case "Int_ty" :
          return /* constructor */{
                  tag: "Int_ty",
                  "0": erase_rel(param[0])
                };
      case "Int32_ty" :
          return /* constructor */{
                  tag: "Int32_ty",
                  "0": erase_rel(param[0])
                };
      case "Nativeint_ty" :
          return /* constructor */{
                  tag: "Nativeint_ty",
                  "0": erase_rel(param[0])
                };
      case "Int64_ty" :
          return /* constructor */{
                  tag: "Int64_ty",
                  "0": erase_rel(param[0])
                };
      case "Float_ty" :
          return /* constructor */{
                  tag: "Float_ty",
                  "0": erase_rel(param[0])
                };
      case "Bool_ty" :
          return /* constructor */{
                  tag: "Bool_ty",
                  "0": erase_rel(param[0])
                };
      case "Format_arg_ty" :
          return /* constructor */{
                  tag: "Format_arg_ty",
                  "0": param[0],
                  "1": erase_rel(param[1])
                };
      case "Format_subst_ty" :
          var ty1 = param[0];
          return /* constructor */{
                  tag: "Format_subst_ty",
                  "0": ty1,
                  "1": ty1,
                  "2": erase_rel(param[2])
                };
      case "Alpha_ty" :
          return /* constructor */{
                  tag: "Alpha_ty",
                  "0": erase_rel(param[0])
                };
      case "Theta_ty" :
          return /* constructor */{
                  tag: "Theta_ty",
                  "0": erase_rel(param[0])
                };
      case "Any_ty" :
          return /* constructor */{
                  tag: "Any_ty",
                  "0": erase_rel(param[0])
                };
      case "Reader_ty" :
          return /* constructor */{
                  tag: "Reader_ty",
                  "0": erase_rel(param[0])
                };
      case "Ignored_reader_ty" :
          return /* constructor */{
                  tag: "Ignored_reader_ty",
                  "0": erase_rel(param[0])
                };
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "string") {
    return fmtty2;
  } else {
    switch (/* XXX */fmtty1.tag) {
      case "Char_ty" :
          return /* constructor */{
                  tag: "Char_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "String_ty" :
          return /* constructor */{
                  tag: "String_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Int_ty" :
          return /* constructor */{
                  tag: "Int_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Int32_ty" :
          return /* constructor */{
                  tag: "Int32_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Nativeint_ty" :
          return /* constructor */{
                  tag: "Nativeint_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Int64_ty" :
          return /* constructor */{
                  tag: "Int64_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Float_ty" :
          return /* constructor */{
                  tag: "Float_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Bool_ty" :
          return /* constructor */{
                  tag: "Bool_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Format_arg_ty" :
          return /* constructor */{
                  tag: "Format_arg_ty",
                  "0": fmtty1[0],
                  "1": concat_fmtty(fmtty1[1], fmtty2)
                };
      case "Format_subst_ty" :
          return /* constructor */{
                  tag: "Format_subst_ty",
                  "0": fmtty1[0],
                  "1": fmtty1[1],
                  "2": concat_fmtty(fmtty1[2], fmtty2)
                };
      case "Alpha_ty" :
          return /* constructor */{
                  tag: "Alpha_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Theta_ty" :
          return /* constructor */{
                  tag: "Theta_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Any_ty" :
          return /* constructor */{
                  tag: "Any_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Reader_ty" :
          return /* constructor */{
                  tag: "Reader_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case "Ignored_reader_ty" :
          return /* constructor */{
                  tag: "Ignored_reader_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "string") {
    return fmt2;
  } else {
    switch (/* XXX */fmt1.tag) {
      case "Char" :
          return /* constructor */{
                  tag: "Char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Caml_char" :
          return /* constructor */{
                  tag: "Caml_char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "String" :
          return /* constructor */{
                  tag: "String",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Caml_string" :
          return /* constructor */{
                  tag: "Caml_string",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Int" :
          return /* constructor */{
                  tag: "Int",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case "Int32" :
          return /* constructor */{
                  tag: "Int32",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case "Nativeint" :
          return /* constructor */{
                  tag: "Nativeint",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case "Int64" :
          return /* constructor */{
                  tag: "Int64",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case "Float" :
          return /* constructor */{
                  tag: "Float",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case "Bool" :
          return /* constructor */{
                  tag: "Bool",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Flush" :
          return /* constructor */{
                  tag: "Flush",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "String_literal" :
          return /* constructor */{
                  tag: "String_literal",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Char_literal" :
          return /* constructor */{
                  tag: "Char_literal",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Format_arg" :
          return /* constructor */{
                  tag: "Format_arg",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case "Format_subst" :
          return /* constructor */{
                  tag: "Format_subst",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case "Alpha" :
          return /* constructor */{
                  tag: "Alpha",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Theta" :
          return /* constructor */{
                  tag: "Theta",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Formatting_lit" :
          return /* constructor */{
                  tag: "Formatting_lit",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Formatting_gen" :
          return /* constructor */{
                  tag: "Formatting_gen",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Reader" :
          return /* constructor */{
                  tag: "Reader",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Scan_char_set" :
          return /* constructor */{
                  tag: "Scan_char_set",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case "Scan_get_counter" :
          return /* constructor */{
                  tag: "Scan_get_counter",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Scan_next_char" :
          return /* constructor */{
                  tag: "Scan_next_char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case "Ignored_param" :
          return /* constructor */{
                  tag: "Ignored_param",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case "Custom" :
          return /* constructor */{
                  tag: "Custom",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel = erase_rel;
exports.concat_fmt = concat_fmt;
/* No side effect */

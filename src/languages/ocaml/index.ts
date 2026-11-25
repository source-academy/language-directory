import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const ocamlJsOfOCaml: IEvaluatorDefinition = {
    id: "ocamlJsOfOCaml",
    name: "js_of_ocaml",
    path: "https://source-academy.github.io/ocaml-slang/OCamlEvaluator.js",
    capabilities: [],
    welcome: `You have chosen the **js_of_ocaml** evaluator for OCaml, which runs your program with the real OCaml toplevel (OCaml 5.5.2), compiled to JavaScript with [js_of_ocaml](https://ocsigen.org/js_of_ocaml/), entirely in your browser. See [ocaml-slang](https://github.com/source-academy/ocaml-slang).\n\nRunning a program shows what it prints and the value of its last expression. In the REPL you type phrases as in the \`ocaml\` toplevel.`
};

export const ocamlLanguage: ILanguageDefinition = {
    id: "ocaml",
    name: "OCaml",
    evaluators: [ocamlJsOfOCaml],
    documentation: { languageUrl: "https://docs.sourceacademy.org/ocaml/" },
    defaultFileExtension: "ml",
    defaultProgram: `(* Type your program in here! *)

`,
    welcome: `Welcome to the Source Academy playground!

The full [OCaml](https://ocaml.org/) language (OCaml 5.5.2) runs here, with the Stdlib, [Menhir](https://gitlab.inria.fr/fpottier/menhir) and its library MenhirLib, and \`ocamllex\`. \`.ml\`, \`.mli\`, \`.mll\` (ocamllex) and \`.mly\` (Menhir) files in the folder of the open file are modules of your program; the file that is open runs.

Not available: \`Unix\`, threads, and reading input with \`read_line\`. \`int\` has 32 bits, since the toplevel runs as JavaScript.`
};

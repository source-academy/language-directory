import { IEvaluatorDefinition, ILanguageDefinition } from "../../types";

const javaDefault: IEvaluatorDefinition = {
    id: "javaDefault",
    name: "Default",
    path: "https://source-academy.github.io/java-slang/index.js",
    capabilities: [],
    welcome: `You have chosen the **Default** evaluator for Java, which compiles your program to JVM bytecode with [java-slang](https://github.com/source-academy/java-slang) and runs it on a JVM implemented in TypeScript, entirely in your browser.\n\nExecution starts from the \`main\` method of the class named \`Main\`.`
};

export const javaLanguage: ILanguageDefinition = {
    id: "java",
    name: "Java",
    evaluators: [
        javaDefault
    ],
    // The evaluator compiles a single source chunk and has no local-file import support.
    foldersEnabled: false,
    defaultFileExtension: "java",
    defaultProgram: `// Type your program in here!

public class Main {
    public static void main(String[] args) {

    }
}
`,
};

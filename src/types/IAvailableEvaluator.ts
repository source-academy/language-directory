import { EvaluatorCapability } from "./EvaluatorCapability";

interface IAvailableEvaluator {
    /** The name of the evaluator. */
    readonly name: string;

    /** The path to the evaluator's script file. */
    readonly path: string;

    /** An array of this evaluator's capabilities. */
    readonly capabilities: EvaluatorCapability[];
}

export type { IAvailableEvaluator };

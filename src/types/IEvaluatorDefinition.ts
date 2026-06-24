import { EvaluatorCapability } from "./EvaluatorCapability";

interface IEvaluatorDefinition {
    /** The evaluator's identifier. */
    readonly id: string;

    /** The name of the evaluator. */
    readonly name: string;

    /** The path to the evaluator's script file. */
    readonly path: string;

    /** An array of this evaluator's capabilities. */
    readonly capabilities: EvaluatorCapability[];

    /** Welcome/introduction text shown in the playground when this evaluator is selected. Supports markdown. */
    readonly welcome?: string;
}

export type { IEvaluatorDefinition };

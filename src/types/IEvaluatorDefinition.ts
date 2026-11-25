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

    /**
     * The id, in the plugin directory, of the web plugin that presents what this evaluator computes
     * (for example `"stepper"`: the steps of a program), in a side-content tab of its own. Such an
     * evaluator is not for running a program in the editor: it is hidden from the evaluator dropdown,
     * and a host selects it when the user opens the plugin's tab (the plugin directory describes the
     * tab: its id, label, icon and behaviour) and deselects it when they leave it. A language offers
     * the tab iff one of its evaluators names the plugin.
     *
     * This says the same as the capabilities `STEPPER` and `E_STEPPER`, but names the plugin
     * rather than leaving it to the host to know which plugin goes with which capability, so that a
     * host needs no tool names.
     */
    readonly plugin?: string;

    /** Welcome/introduction text shown in the playground when this evaluator is selected. Supports markdown. */
    readonly welcome?: string;
}

export type { IEvaluatorDefinition };

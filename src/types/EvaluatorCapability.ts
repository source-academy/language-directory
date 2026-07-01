enum EvaluatorCapability {
    CSE = "cse",
    /**
     * Marks an evaluator as the substitution **stepper** for its language. Such an evaluator is hidden
     * from the evaluator dropdown and is selected automatically when the user opens the Stepper side-
     * content tab (and deselected when they leave it) — the tab is the only way to reach it. A language
     * offers stepping iff one of its evaluators carries this capability.
     */
    STEPPER = "stepper",
}

export { EvaluatorCapability };

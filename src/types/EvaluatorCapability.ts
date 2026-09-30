enum EvaluatorCapability {
    CSE = "cse",
    /**
     * Marks an evaluator as the substitution **stepper** for its language. Such an evaluator is hidden
     * from the evaluator dropdown and is selected automatically when the user opens the Stepper side-
     * content tab (and deselected when they leave it) — the tab is the only way to reach it. A language
     * offers stepping iff one of its evaluators carries this capability.
     */
    STEPPER = "stepper",
    /**
     * Marks an evaluator as its language's EV3 remote-execution evaluator. Such an evaluator is
     * hidden from the evaluator dropdown like STEPPER above, but is not reached through a side-
     * content tab — the consuming frontend resolves it directly by capability once a device is
     * connected in the remote execution tab, in place of a hardcoded local evaluator path.
     */
    EV3 = "ev3",
}

export { EvaluatorCapability };

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
    /**
     * Marks an evaluator as the environment stepper ("e-stepper") for its language: the stepper's
     * step-by-step rewriting of the program, with the environment frames and heap it refers to.
     * Like STEPPER, such an evaluator is hidden from the evaluator dropdown and selected when the
     * user opens its side-content tab (E-Stepper), deselected when they leave it.
     */
    E_STEPPER = "e-stepper",
}

export { EvaluatorCapability };

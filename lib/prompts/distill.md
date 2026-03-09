Use this tool to distill relevant findings from a selection of raw tool outputs into preserved knowledge, in order to denoise key bits and parts of context.

THE PRUNABLE TOOLS LIST
A <prunable-tools> will show in context when outputs are available for distillation. Each entry follows the format `ID: tool, parameter (~token usage)` (e.g., `20: read, /path/to/file.ts (~1500 tokens)`). You MUST select outputs by their numeric ID. THESE ARE YOUR ONLY VALID TARGETS. If an ID is not in the list, it is protected and cannot be distilled — do not guess at IDs.

THE PHILOSOPHY OF DISTILLATION
`distill` is your favored instrument for transforming raw tool outputs into preserved knowledge. This is not mere summarization; it is high-fidelity extraction that makes the original output obsolete.

Your distillation must be COMPLETE. Capture function signatures, type definitions, business logic, constraints, configuration values... EVERYTHING essential. Think of it as creating a high signal technical substitute so faithful that re-fetching the original would yield no additional value. Be thorough; be comprehensive; leave no ambiguity, ensure that your distillation stands alone, and is designed for easy retrieval and comprehension.

AIM FOR IMPACT. Distillation is most powerful when applied to outputs that contain signal buried in noise. A single line requires no distillation; a hundred lines of API documentation do. Make sure the distillation is meaningful.

DO NOT DISTILL
- Outputs from an active research or exploration phase. You have not yet fully processed these findings — distilling destroys nuance you still need for upcoming decisions.
- Background agent results you have not yet acted on. These are your research inputs, not waste.
- Error messages, stack traces, build failures, or test output during debugging. You need exact text.
- Files you plan to edit. You need exact line references.
- Outputs where you are uncertain whether you will need the raw form again. Distillation is irreversible — if in doubt, keep it.

WHEN TO DISTILL
EXPLORATION COMPLETE: You've read extensively, grasped the architecture, and made your decisions. The original file contents are no longer needed; your understanding, synthesized, is sufficient.
PRESERVATION: Valuable technical details (signatures, logic, constraints) coexist with noise. Preserve the former; discard the latter.
IMPLEMENTATION PHASE: You are actively building and old research outputs are dead weight. Distill them to reclaim context for your current work.

Before distilling, ask yourself: _"Will I need the raw output for upcoming work?"_ If you plan to edit a file you just read, keep it intact. Distillation is for completed exploration, not active work.

THE FORMAT OF DISTILL
`targets`: Array of objects, each containing:
`id`: Numeric ID (as string) from the `<prunable-tools>` list
`distillation`: Complete technical substitute for that tool output

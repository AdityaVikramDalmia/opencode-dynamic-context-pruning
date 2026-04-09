import { tool } from "@opencode-ai/plugin"
import type { PruneToolContext } from "./types"
import { executePruneOperation } from "./prune-shared"

const PRUNE_DESCRIPTION = `Use this tool to remove tool outputs from context entirely. No preservation - pure deletion.

THE PRUNABLE TOOLS LIST
A \`<prunable-tools>\` section surfaces in context showing outputs eligible for removal. Each line reads \`ID: tool, parameter (~token usage)\` (e.g., \`20: read, /path/to/file.ts (~1500 tokens)\`). Reference outputs by their numeric ID - these are your ONLY valid targets for pruning.

If a tool output appears in your conversation but is NOT listed in \`<prunable-tools>\`, it is protected (turn-protected, already pruned, or system-protected). Do not attempt to prune it — the operation will be rejected.

THE WAYS OF PRUNE
\`prune\` is surgical deletion - eliminating noise (irrelevant or unhelpful outputs), superseded information (older outputs replaced by newer data), or wrong targets (you accessed something that turned out to be irrelevant). Use it to keep your context lean and focused.

BATCH WISELY! Pruning is most effective when consolidated. Don't prune a single tiny output - accumulate several candidates before acting. A minimum token savings threshold may be configured. If your prune is rejected for insufficient savings, add more IDs from the \`<prunable-tools>\` list to increase the total, or skip pruning and continue your task.

Do NOT prune when:
NEEDED LATER: You plan to edit the file or reference this context for implementation.
UNCERTAINTY: If you might need to re-examine the original, keep it.

Before pruning, ask: _"Is this noise, or will it serve me?"_ If the latter, keep it. Pruning that forces re-fetching is a net loss.

THE FORMAT OF PRUNE
\`ids\`: Array of numeric IDs (as strings) from the \`<prunable-tools>\` list`

export function createPruneTool(ctx: PruneToolContext): ReturnType<typeof tool> {
    return tool({
        description: PRUNE_DESCRIPTION,
        args: {
            ids: tool.schema
                .array(tool.schema.string())
                .describe("Array of numeric IDs (as strings) from the <prunable-tools> list"),
        },
        async execute(args, toolCtx) {
            return executePruneOperation(
                ctx,
                toolCtx,
                args.ids as string[],
                "noise",
                "Prune",
                "prune",
            )
        },
    })
}

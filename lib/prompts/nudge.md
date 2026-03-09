<instruction name=context_management_reminder>
CONTEXT MAINTENANCE REMINDER
This is a scheduled reminder, not an emergency. Your current task always takes precedence.

Do not interrupt an atomic operation in progress. Once your immediate step is done, consider whether context management would be beneficial.

EVALUATE BEFORE ACTING
Review the <prunable-tools> list (if present). Only IDs explicitly listed there are valid targets. If no list is present, skip context management entirely.

<distill>DISTILL: If you have completed exploration outputs whose findings you have already absorbed and acted on, distill them into technical substitutes. Do NOT distill outputs from an active research or debugging phase — you still need the raw signal.</distill>
<compress>COMPRESS: If the user has moved on to a new phase and prior conversation is fully resolved, compress the completed phase. Do NOT compress based on your own assessment that you are done — wait for user signals.</compress>
<prune>PRUNE: If dead-end searches, failed commands, or superseded outputs are accumulating, batch them into a single prune call. A minimum token savings threshold may be configured — accumulate enough candidates to meet it.</prune>

ANTI-LOOP CHECK: If you have already performed context management in your last 2 responses, STOP managing and focus on your task. A read-prune-read cycle means you are pruning things you still need.
</instruction>

# Learning Lhotse: context persistence across dialogue

**Status:** exploratory research agenda (E0); not a validated model, a truthfulness score, or an AI-authorship detector. Frays.ai, November 2026.

## Question

Can a conversation remain fluent and locally coherent while failing to preserve its unanswered questions, contractual conditions or jointly understood purpose?

Two distinct properties matter:
1. **Local responsiveness:** did a reply address the immediately prior utterance?
2. **Long-range obligation continuity:** was an unresolved earlier question answered, explicitly declined, legitimately challenged or silently replaced?

A third, related question is whether known human editing of generated messages improves or worsens these properties, conditional on identical incoming context.

## Construct validity before scoring

Maintain separate observed labels for:
- question answered, challenged, declined, clarification required, unresolved;
- frame unchanged, explicitly contested, jointly revised, unilaterally substituted;
- evidence newly verified, self-declared, hypothetical or missing;
- who offered, accepted, rejected or withdrew a commercial proposal;
- message provenance and whether an actual transmitted message is distinct from an unsent draft.

Distinguish a speaker's *private intent* from a question actually communicated to the counterparty. Reframing can be rational: changing the subject is not always an error, and declining an invitation is a valid outcome.

## First bounded study

**Data:** use synthetically authored dialogues and, only with appropriate rights and permission, real conversations. Preserve exact messages, source order, visible timestamps, missingness and corrections. Never replace primary source text with model summaries.

**Conditions:** independent raters evaluate the same target response under (A) last 1+1 pair, (B) last alternating 2+2 window and (C) full available history plus an explicit unresolved-question ledger. Apply both speaker directions identically.

**Baselines:** deterministic exact-question matching, role/number preservation, simple dialogue-act extraction. Compare to grounded human annotation and any later model-based evaluator.

**Outcomes:** question recovery and coverage, unsupported frame substitution, accepted frame revisions, repair turns, independent new information, disagreement rates and abstentions.

**Falsifiers:** weak inter-rater agreement, poor out-of-sample transfer, consistent over-penalization of legitimate disagreement, or failure to outperform simpler baselines. Overlapping windows are dependent observations and not independent trial counts.

**Human–AI drafting:** if the complete draft/edit/sent history is voluntarily available, compare the unedited candidate with the actual transmitted version. If that history is missing, mark the drafting route UNKNOWN; never guess from polish, language ability or stylistic features.

## Privacy and publication

Two four-turn [fictional controls](../data/synthetic/fictional-control.json) demonstrates an invented question-preservation case. It is not a redacted real dialogue and does not support empirical claims about any named participant.

This public proposal contains no actual private chat logs, personally identifiable conversation metadata, individual evaluation scores or proprietary research assets.

## Invitation

Researchers in pragmatics, computational linguistics, conversation analysis, human–AI interaction, negotiation, epistemic provenance and evaluation science are invited to challenge the method or contribute synthetic tests, annotation guidelines and independent reviews.

Participation and IP rights are separately negotiated; informal discussion is neither a work order nor an automatic assignment of copyright.

Contact **hello@frays.ai**. Read the public [blog](https://frays.ai/blog/when-a-conversation-stops-answering-its-own-questions) and the [academic references](./REFERENCES.md).

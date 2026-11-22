<!-- SPDX-License-Identifier: CC-BY-4.0 -->
<!-- Canonical post: https://frays.ai/blog/when-a-conversation-stops-answering-its-own-questions -->

# When a Conversation Stops Answering Its Own Questions

*Learning Lhotse: a research invitation from Frays.ai | November 2026*

A conversation can sound intelligent and still stop making progress.

Imagine two colleagues exploring whether a new partnership could lower the cost of delivering a service. The opening question concerns a measurable economic opportunity. Several turns later, the exchange has shifted to the presentation of the service. Both participants offer plausible arguments. The original cost question remains unanswered. Nobody explicitly agreed to change the subject.

This is an invented illustration, not a published study result. It suggests a research problem: how do we distinguish a conversation that has moved forward from one that has merely kept talking?

## Fluency is not the same as fidelity

Modern language models can produce polished replies and maintain a locally coherent thread. But an answer can be relevant to the immediately preceding sentence while failing the longer-running purpose of the exchange. A smooth response may omit a condition, reverse who receives a benefit, assume agreement where none was given, or substitute a familiar problem for a less familiar one.

We call the broader research programme Learning Lhotse. Its central question is whether observable features of dialogue can help detect when the meaning, evidence or purpose of a conversation has drifted—and whether those features provide value beyond simpler checks.

Lhotse began as a provenance and information-integrity research concept. We are extending the inquiry from individual assertions toward multi-turn dialogue: not just 'Can this claim be traced to evidence?' but also 'Is this the question we are still trying to answer?'

## Three failures that should not be confused

First is context loss: a previous question or constraint is no longer retrieved or represented accurately. Second is unilateral frame substitution: a participant continues discussing a nearby subject without answering or explicitly rejecting the actual proposal. Third is legitimate reframing: a participant identifies a false premise, missing prerequisite or superior question and makes that change visible.

These cases may look similar at the level of word choice. They are not equivalent. A forceful objection can preserve the shared inquiry better than agreeable prose. A decision not to participate in a proposed negotiation is a valid response; it should not be scored as a failure to play. We therefore need a model of conversational obligations and acceptance, not just semantic similarity.

## There is a substantial academic foundation

Grosz and Sidner (1986) distinguished discourse structure, participants' intentions and the focus of attention. Craige Roberts (2012) formalized discourse in terms of Questions Under Discussion (QUD): utterances are interpreted against the questions they help resolve. Wu and colleagues' QUDeval (EMNLP 2023) translates several QUD constraints into an evaluation framework and finds that fluent outputs can still violate structural requirements.

Clark and Brennan's work on conversational grounding (1991) adds an equally important distinction: one participant making a proposal is not the same as both establishing shared understanding. The ISO 24617-2:2020 dialogue-act standard provides a vocabulary for questions, answers and other communicative functions. Atkinson, Bench-Capon and Walton (2013) show why persuasion and deliberation have different participant aims and success conditions. Negotiation adds yet another goal: finding a mutually acceptable exchange, not winning an argument.

Recent AI evaluation research contributes complementary methods. LoCoMo (Maharana et al., ACL 2024) and LongMemEval (Wu et al., ICLR 2025) address long-term conversational memory and temporal reasoning. Hong and colleagues' SYCON Bench (2025) evaluates stance changes and sycophancy over multiple turns. These projects are relevant foundations, but none should be treated as prior validation of a universal Lhotse score.

## What we want to measure

Our proposed unit of evidence is the original message, preserved verbatim with its source and timestamp uncertainty. A derived annotation layer then tracks explicit questions, offers, replies, objections, clarifications, changes of frame and their acceptance or rejection. The same requirements apply to both participants.

We would examine a 1+1 directed reply pair, a sliding 2+2 four-message window, and the longer history. At each level we ask whether the message responds to a live question, whether the participants accurately preserve important constraints, whether any reframing is explained, and whether independently sourced information advances a decision. We also count repair turns and unanswered obligations rather than rewarding verbosity.

An exploratory 0–100 index can make patterns easier to inspect, but it is not a validated measure of intelligence, truthfulness, intent or overall dialogue quality. The more scientifically informative output is a vector: question coverage, frame shifts, evidence provenance, supported repairs, unresolved commitments and uncertainty. Null means insufficient evidence, not zero ability.

## Testing context persistence rather than prompting it

One candidate experiment compares three conditions for the same target reply: the evaluator sees only the latest 1+1 pair, the latest 2+2 window, or the full preceding history plus an explicit unresolved-question ledger. Independent annotators judge which earlier question, if any, remains active. We compare results to deterministic baselines such as exact question matching, numeric-constraint preservation and dialogue-act labels.

A second test examines low-information prompts. Instead of restating an entire proposal, a participant refers back to an earlier assumption and asks what specifically depends on it. Does the next answer recover the right context? A request for clarification may be legitimate, particularly if the original question was ambiguous. Success must be defined before looking at the response.

A third study uses known human–AI drafting histories. For an outgoing message, we can retain a model-generated suggestion, the user's edits or rejection, and the actual transmitted text. Comparing draft and final against identical preceding context might reveal when human intervention repairs drift—or makes the message less responsive. We cannot infer a stranger's AI use from writing style, and we cannot evaluate editing effects when draft provenance is missing.

## What would falsify the idea?

If blind annotators cannot reliably agree on whether a conversational obligation was met, there is no sound target for an automated score. If simple rule-based baselines recover the same obligations as a more complex model, extra complexity is not justified. If the method systematically penalizes legitimate dissent, refusal, indirect answers, multilingual expression or proposals to change the task, it needs revision. If an apparently useful feature fails on held-out dialogues or different domains, it is not ready for deployment.

A private exploratory transcript has motivated preliminary annotations, but we have not established generalizable predictive validity, independent calibration or a released public benchmark. No private counterparty dialogue is being offered as an open dataset. Any future real-world study would require appropriate authorization, confidentiality safeguards and a narrow intended use.

## Why this matters beyond chatbots

Collaboration depends on retaining commitments and assumptions across time. In hiring, procurement, partnerships, multi-agent systems and negotiations, fluent communication is not enough. We need to know which issue was resolved, what changed, who agreed and what remains unknown. A tool that makes that state legible could improve decision quality. That is the hypothesis, not a product claim.

## An open invitation

We are looking for collaborators in computational linguistics, pragmatics, discourse analysis, HCI, dialogue systems, negotiation and evaluation science. The initial contribution can be modest: challenge our assumptions, help define annotation guidelines, create synthetic adversarial examples or independently evaluate a small set of paired exchanges. We would rather falsify the premise early than decorate it with an impressive-looking score.

If this overlaps with your research, contact hello@frays.ai. Exploratory collaboration, access, authorship, resources and any commercial terms would be discussed separately.

## Academic references

Grosz, B. J., & Sidner, C. L. (1986). Attention, intentions, and the structure of discourse. Computational Linguistics, 12(3), 175–204. https://aclanthology.org/J86-3001/

Roberts, C. (2012). Information structure: Towards an integrated formal theory of pragmatics. Semantics and Pragmatics, 5(6). https://semprag.org/index.php/sp/article/view/sp.5.6

Clark, H. H., & Brennan, S. E. (1991). Grounding in communication. In Perspectives on Socially Shared Cognition. https://www.cs.cmu.edu/~illah/CLASSDOCS/Clark91.pdf

Wu, Y., Mangla, R., Durrett, G., & Li, J. J. (2023). QUDeval: The evaluation of Questions Under Discussion discourse parsing. EMNLP. https://aclanthology.org/2023.emnlp-main.325/

ISO. (2020). ISO 24617-2:2020: Language resource management — Semantic annotation framework — Part 2: Dialogue acts. https://www.iso.org/standard/76443.html

Atkinson, K., Bench-Capon, T., & Walton, D. (2013). Distinctive features of persuasion and deliberation dialogues. Argument & Computation, 4(2). https://doi.org/10.1080/19462166.2012.708670

Maharana, A., et al. (2024). Evaluating very long-term conversational memory of LLM agents. ACL. https://aclanthology.org/2024.acl-long.747/

Wu, D., et al. (2025). LongMemEval: Benchmarking chat assistants on long-term interactive memory. ICLR. https://proceedings.iclr.cc/paper_files/paper/2025/hash/d813d324dbf0598bbdc9c8e79740ed01-Abstract-Conference.html

Hong, J., Byun, G., Kim, S., & Shu, K. (2025). Measuring sycophancy of language models in multi-turn dialogues. Findings of EMNLP. https://aclanthology.org/2025.findings-emnlp.121/

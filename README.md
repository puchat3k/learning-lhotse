<!-- SPDX-License-Identifier: CC-BY-4.0 -->

# Learning Lhotse

**When a conversation stops answering its own questions.**

Research into **context persistence, semantic drift, dialogue grounding and human–AI co-authorship** at [Frays.ai](https://frays.ai/).

A conversation can remain fluent and persuasive while losing an unresolved question, quietly changing a commitment, or substituting one participant's preferred frame for a shared purpose. **Can this be observed reliably—and distinguished from a justified objection or change of plan?**

**Status: exploratory (E0).** This repository contains a study proposal, academic references and two entirely fictional test cases. It does **not** contain a validated model, a calibrated Lhotse score, authentic human conversation datasets, an AI-text detector, or a production Frays implementation.

## Start here

| Resource | What it contains |
| --- | --- |
| [Research protocol](docs/RESEARCH_PROTOCOL.md) | Falsifiable hypotheses, 1+1 / 2+2 / full-context evaluation, validity controls |
| [Researcher invitation](docs/RESEARCH_INVITATION.md) | Collaboration scope, expected contributions and limits |
| [Public blog post](docs/BLOG_POST.md) | Accessible introduction, academic background and methodological caveats |
| [Academic references](docs/REFERENCES.md) | Linguistics, discourse, dialogue acts, grounding and AI evaluation research |
| [Synthetic dialogue controls](data/synthetic/fictional-control.json) | Two **newly authored fictional** four-turn cases with observable labels |
| [Related Frays public research](docs/RESEARCH_PORTFOLIO.md) | Existing public SOAPS and Lineage studies, Atlas and Coalition Lab field notes |
| [Contribution guidance](CONTRIBUTING.md) | How to critique, contribute and avoid exposing personal data |
| [License scope](LICENSE.md) | CC BY 4.0 for public docs/data, Apache 2.0 for code |

## Research direction

The proposed evaluation distinguishes three importantly different phenomena:

1. **Context loss:** an earlier question or constraint no longer informs the response.
2. **Unilateral frame substitution:** an adjacent issue is discussed without addressing or explicitly contesting the original issue.
3. **Legitimate reframing:** a participant challenges a premise, declines, or proposes an alternative and makes the shift clear.

We aim to test whether independent raters can track the same outstanding question under three conditions: the last **1+1** exchange, a sliding **2+2** four-message window, and full history with a question/commitment ledger. Weak rater agreement, failure on held-out dialogues or no advantage over simple deterministic baselines would falsify stronger claims.

**The point is to challenge the method, not to reward agreement with a founder or infer anyone's hidden motives.**

## Run the reproducibility check

Requires Node.js 20 or later. No external dependencies or cloud credentials.

```sh
npm test
```

This checks **only the structure and fictional provenance labels** of the included control cases; it does not validate Lhotse scientifically or certify privacy. Synthetic examples must not be represented as authentic participant records.

## Published articles

- [When a Conversation Stops Answering Its Own Questions](https://frays.ai/blog/when-a-conversation-stops-answering-its-own-questions) — public research agenda and references.
- [Research collaborators wanted: When conversations lose the question](https://frays.ai/blog/research-collaborators-learning-lhotse) — invitation.
- [Related Frays research studies](docs/RESEARCH_PORTFOLIO.md) — public links only.

## Contribute or challenge

Researchers in computational linguistics, pragmatics, conversation analysis, human–AI interaction, negotiation and evaluation science are welcome to challenge assumptions, propose simple baselines, test annotation agreement, and author *fictional* counterexamples.

- [Open a public issue](https://github.com/puchat3k/learning-lhotse/issues) for non-sensitive research comments.
- For private collaboration or any nonpublic material, email **hello@frays.ai** rather than posting personal data.
- Read [CONTRIBUTING.md](CONTRIBUTING.md) and [LICENSE.md](LICENSE.md) before submitting text, examples or source code. Original contributions to this public repo use the applicable open license; separate commissioned or jointly owned IP requires a written agreement.

**Data boundary:** no private LinkedIn conversations, individual scoring, personal profiles, confidential negotiations, client data or hidden experiment forecasts are published here.

## Related projects

Frays studies [Coalition Intelligence](https://frays.ai/) and evidence-based collaboration. Related publicly accessible research includes [SOAPS](https://github.com/puchat3k/soaps-organizational-fabric) and [Lineage: A Collaboration](https://github.com/puchat3k/lineage-a-collaboration).

**Maintained by [puchat3k](https://github.com/puchat3k), founder of Frays.ai.**

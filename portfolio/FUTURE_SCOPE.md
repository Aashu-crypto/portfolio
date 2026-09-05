# Portfolio future scope

Recorded: 5 September 2026

Audience priority: approximately 90% recruiters and 10% clients. Preserve the
current dark, lime, and purple design. Focus the next improvements on clear
evidence of engineering ownership, consistent career information, and easier
scanning.

These are planned improvements, not completed changes.

## Priority 1: Align the résumé with the website

- [ ] Correct the professional summary in `scripts/generate_resume.py` and
  regenerate `public/Aashutosh_Resume.pdf`.
- [ ] Remove the claim of “4+ years delivering production mobile and web
  platforms,” or clearly distinguish overall professional experience from
  software-engineering experience.
- [ ] Keep role titles, employers, dates, and technical positioning consistent
  across the résumé and website.
- [ ] Render and inspect the regenerated PDF; confirm that its text is
  selectable and the website's résumé link serves the updated file.

The listed software-development roles begin in July 2023. The earlier role,
April 2022–July 2023, is computer science teaching. As of this review, those dates
do not substantiate four years delivering production platforms. A summary
without a tenure count avoids an unsupported claim and does not become stale.

Relevant files: `scripts/generate_resume.py`, `public/Aashutosh_Resume.pdf`,
`lib/content.ts`.

## Priority 1: Clarify the code link and polish its destination

- [ ] Rename Zaptric's “View code” link to “UI component library.”
- [ ] Review the linked repository's README and remove leftover template or
  editorial instructions.
- [ ] Ensure the README accurately describes the implemented components,
  installation, usage, and examples.
- [ ] Add a useful repository description and relevant topics.

The linked repository documents Switch, Slider, and Button components. The link
should clearly identify that scope so visitors know what code they will see.

Website file: `lib/content.ts`.

Repository: [react-native-zaptric-ui](https://github.com/Aashu-crypto/react-native-zaptric-ui).

The website label can be updated locally. README and repository metadata changes
belong to the separate component-library repository.

## Priority 2: Add one substantive technical case study

- [ ] Develop a concise case study for the Gemini/MCP operations agent at Zaptric.
- [ ] Describe the operational problem and who needed the solution.
- [ ] Explain Aashutosh's personal contribution and the relevant architecture.
- [ ] Describe one difficult engineering decision, the alternatives considered,
  and the tradeoff made.
- [ ] Explain the result and how it was evaluated.
- [ ] Link the case study from the Zaptric project entry.

Keep it specific enough to support an interview discussion. A small architecture
diagram can help if it explains the actual implementation.

Input needed: confirmed implementation details, personal ownership, the chosen
technical tradeoff, and outcomes suitable for public sharing. Do not invent
architecture details, responsibilities, or results.

## Priority 2: Add verified outcomes to project descriptions

- [ ] Identify one or two useful outcomes for each featured project.
- [ ] Record the source, measurement period, and context for each figure before
  publishing it.
- [ ] Distinguish the overall product's scale from Aashutosh's personal impact.
- [ ] Add concise outcome statements alongside the existing contribution bullets.

Possible evidence to request, where available:

- Drivers or vehicles supported over a defined period.
- Charging sessions processed over a defined period.
- Before-and-after latency or rendering measurements.
- Time or manual steps saved by an operations workflow.

These are examples of evidence to collect, not established facts about the
projects. When reliable metrics are unavailable, use concrete delivered scope
and a specific explanation of what changed.

Input needed: substantiated figures or factual before-and-after descriptions from
Aashutosh. Relevant file: `lib/content.ts`.

## Priority 2: Surface contributions earlier on mobile

- [ ] Place a short, factual contribution summary above each large project image.
- [ ] Keep the project name and role visible alongside that summary.
- [ ] Retain detailed contributions, stack, and proof links without unnecessary
  repetition.
- [ ] Check narrow and typical phone widths, desktop layout, heading order, and
  keyboard navigation after the change.

The goal is to let a visitor understand what Aashutosh built before scrolling
through the full screenshot. Preserve the existing visual character.

Relevant files: `app/page.tsx`, `app/globals.css`, `lib/content.ts`.

## Suggested sequence

1. Correct the résumé and clarify the code-link label.
2. Polish the component-library README in its own repository.
3. Improve mobile contribution placement.
4. Gather the facts needed for the case study and outcome statements.
5. Add and verify the case study and evidence-backed outcomes.

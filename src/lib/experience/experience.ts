import { md_link as link } from '$lib/util/linkStyles';
import type { ExperienceMetaData } from '$lib/experience/experience.types';
import { importsToMap } from '$lib/homeLinks';

const iconImports = import.meta.glob('$lib/assets/experience/*.{png,gif}', {
	eager: true,
	import: 'default',
	query: { enhanced: true }
});
export const iconImgs = importsToMap(iconImports);

export const experiences: Array<ExperienceMetaData> = [
	{
		org: 'Amazon',
		role: 'Software Development Engineer',
		start: new Date(2025, 7),
		icon_url: 'amazon.png',
		iconBackdrop: '#241F20',
		// details: '_**Brand Analytics, Seller Central**_'
		details: [
			'Maintained **data lake infrastructure** for Amazon Brand Analytics, monitoring **sales performance for 2B+ products**.',
			'Orchestrated pipelines to transform **\~100 TB/week** of raw purchase activity into curated datasets for analysis.',
			"Developed an **explainable ML root cause analysis service** with **Shapley value feature attribution** to diagnose product underperformance in Amazon's catalog."
		]
	},
	{
		org: 'D2I Lab @ Georgia Tech',
		role: 'Researcher',
		start: new Date(2025, 0),
		icon_url: 'd2i.png',
		iconBackdrop: 'white',
		details: [
			'Experimented with latency reduction in **multi-tenant LLMs** by overlapping document retrieval and prefill stages.',
			`Devised an **agentic web retrieval system** via reverse-engineering from SoTA commercial Deep Research products
			_(e.g. **OpenAI, Grok, Perplexity**, etc.)_ to benchmark our experiments under realistic workloads.`,
			`Analyzed results for and **co-authored MLSys research paper** demonstrating
			up to **11x lower latencies** in time-to-first-token (TTFT).`,
			`Under the supervision of ${link('Dr. Kexin Rong', 'https://kexinrong.github.io/')} and
			${link('Rajveer Bachkaniwala', 'https://www.rajveerbachkaniwala.com/')}.`
		]
	},
	{
		org: 'Amazon Web Services',
		role: 'SWE Intern',
		start: new Date(2024, 4),
		end: new Date(2024, 7),
		icon_url: 'amazon.png',
		iconBackdrop: '#241F20',
		details: [
			`Implemented **ML-driven analysis of developer workflows** to enable
			quantitative DX comparison between cloud platforms and **drive AWS
			roadmap decisions**.`,
			`Re-architected a batch inference pipeline to exploit parallelism, **reducing
			runtime by >85% (hours → minutes)**.`,
			`Automated developer intent and task classification from desktop screenshots
			using AWS **Rekognition**, **Textract**, and **multi-modal LLM prompting on Bedrock**.`
		]
	},
	{
		org: 'Georgia Tech College of Computing',
		role: 'Senior Teaching Assistant',
		start: new Date(2023, 0),
		end: new Date(2024, 4),
		icon_url: 'gt.png',
		iconBackdrop: 'white',
		details: [
			'Lectured biweekly to 50+ students on computer architecture foundations, the C language, and memory allocation concepts.',
			`Developed unit testing suites, docker images for auto-grading, and ${link('course software', 'https://github.com/gt-cs2110')} for **1000+ students per semester**.`
		]
	},
	{
		org: 'Tanium',
		role: 'SWE Intern',
		start: new Date(2023, 5),
		end: new Date(2023, 7),
		icon_url: 'tanium.png',
		iconBackdrop: 'white',
		details: [
			`Built CRUD logging to Tanium console's PostgreSQL backend and REST
			endpoints to support a **customer-facing audit feature**, allowing review of
			console activity and detection of unauthorized configuration changes.`,
			`Resolved **50+ feature/bug tickets** within a 10-week internship maintaining
			a Knex.js + React TypeScript codebase.`,
			`Ensured code quality and correctness by applying **TDD + validation best
			practices** using Jest, Jasmine, and Joi.`
		]
	}
];

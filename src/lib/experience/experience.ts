import { md_link as link } from '$lib/animLink';
import type { ExperienceMetaData } from '$lib/experience/experience.types';

export const experiences: Array<ExperienceMetaData> = [
	{
		org: 'Amazon',
		role: 'Current SDE',
		start: new Date(2025, 7),
		icon_url: 'amazon.png',
		iconBackdrop: '#241F20',
		details: []
	},
	{
		org: 'D2I Lab @ Georgia Tech',
		role: 'Researcher',
		start: new Date(2025, 0),
		icon_url: 'd2i.png',
		iconBackdrop: 'white',
		details: [
			'Experimented new schemes for **faster, scalable LLM inference** in **retrieval-augmented generation** (RAG) workloads.',
			`Devised an **agentic web retrieval system** via reverse-engineering from SoTA commercial Deep Research products
			_(e.g. **OpenAI, Grok, Perplexity**, etc.)_.`,
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
			'Analyzed developer experience across AWS through quantitative features extracted from recorded workflow sessions.',
			'**Reduced runtime by >85%** of a data pipeline by leveraging a parallelized fork-join model with AWS Lambda functions.',
			"Automated activity labeling of session screenshots using Amazon Rekognition, Textract, and Anthropic's Claude LLMs."
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
			'Implemented CRUD logging into a backend PostgreSQL database and REST API to elevate user visibility of Tanium Server.',
			'Rapidly tackled **50+ feature/bug tickets** within a 10-week internship maintaining a Knex.js and React TypeScript codebase.',
			'Exercised test-driven development and data validation best practices using Jest, Jasmine, and Joi.'
		]
	}
];

import type { ExperienceMetaData } from '$lib/experience/experience';

const experiences: Array<ExperienceMetaData> = [
	{
		org: 'Amazon Web Services',
		role: 'Software Engineering Intern',
		start: new Date(2024, 4),
		end: new Date(2024, 7),
		icon: 'amazon.png',
		details: [
			'Analyzed developer experience across AWS through quantitative features extracted from recorded workflow sessions.',
			'**Reduced runtime by >85%** of a data pipeline by leveraging a parallelized fork-join model with AWS Lambda functions.',
			"Automated activity labeling of session screenshots using Amazon Rekognition, Textract, and Anthropic's Claude LLMs."
		]
	},
	{
		org: 'Tanium',
		role: 'Software Engineering Intern',
		start: new Date(2023, 5),
		end: new Date(2023, 7),
		icon: 'amazon.png',
		details: [
			'Implemented CRUD logging into a backend PostgreSQL database and REST API to elevate user visibility of Tanium Server.',
			'Rapidly tackled **50+ feature/bug tickets** within a 10-week internship maintaining a Knex.js and React TypeScript codebase.',
			'Exercised test-driven development and data validation best practices using Jest, Jasmine, and Joi.'
		]
	},
	{
		org: 'Georgia Tech College of Computing',
		role: 'Senior Teaching Assistant',
		start: new Date(2023, 0),
		end: new Date(2024, 4),
		icon: 'amazon.png',
		details: [
			'Lectured biweekly to 50+ students on computer architecture foundations, the C language, and memory allocation concepts.',
			'Developed unit testing suites, docker images for auto-grading, and course software for **1000+ students per semester**.'
		]
	},
	{
		org: 'Georgia Tech College of Computing',
		role: 'Senior Teaching Assistant',
		start: new Date(2023, 0),
		end: new Date(2024, 4),
		icon: 'amazon.png',
		details: [
			'Lectured biweekly to 50+ students on computer architecture foundations, the C language, and memory allocation concepts.',
			'Developed unit testing suites, docker images for auto-grading, and course software for **1000+ students per semester**.'
		]
	}
	/* {
		org: 'Amazon Web Services',
		role: 'Software Engineer',
		start: new Date(2024, 4),
		end: new Date(2024, 7),
		icon: 'amazon.png',
		details: [
			'Developed a serverless application using AWS Lambda and API Gateway to provide a RESTful API for a mobile app.',
			'Developed a serverless application using AWS Lambda and API Gateway to provide a RESTful API for a mobile app.'
		]
	} */
];

export async function load() {
	return {
		experiences
	};
}

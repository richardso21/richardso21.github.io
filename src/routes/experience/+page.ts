import type { ExperienceMetaData } from '$lib/experience/experience';

const experiences: Array<ExperienceMetaData> = [
	{
		org: 'Amazon Web Services',
		role: 'Software Engineer',
		start: new Date(2024, 4),
		end: new Date(2024, 7),
		icon: 'amazon.png',
		details:
			'Developed a serverless application using AWS Lambda and API Gateway to provide a RESTful API for a mobile app.'
	},
	{
		org: 'Amazon Web Services',
		role: 'Software Engineer',
		start: new Date(2024, 4),
		end: new Date(2024, 7),
		icon: 'amazon.png',
		details: [
			'Developed a serverless application using AWS Lambda and API Gateway to provide a RESTful API for a mobile app.',
			'Developed a serverless application using AWS Lambda and API Gateway to provide a RESTful API for a mobile app.'
		]
	}
];

export async function load() {
	return {
		experiences
	};
}

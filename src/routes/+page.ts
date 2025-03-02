import type { LinkMetaData } from '$lib';

const site_links: Array<LinkMetaData> = [
	{
		href: '/experience',
		text: 'Experience'
	},
	{
		href: '/projects',
		text: 'Projects'
	},
	{
		href: '/resume-frame',
		text: 'Resume'
	}
];

const external_links: Array<LinkMetaData> = [
	{
		href: 'https://www.linkedin.com/in/richardso21',
		text: 'LinkedIn'
	},
	{
		href: 'https://github.com/richardso21',
		text: 'GitHub'
	}
];

export async function load() {
	return {
		site_links,
		external_links
	};
}

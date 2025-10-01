export type LinkMetaData = {
	href: string;
	text: string;
};

export const site_links: Array<LinkMetaData> = [
	{
		href: '/experience',
		text: 'experience'
	},
	{
		href: '/projects',
		text: 'projects'
	},
	{
		href: '/resume',
		text: 'resume'
	},
	{
		href: '/blog',
		text: 'blog'
	}
];

export const external_links: Array<LinkMetaData> = [
	{
		href: 'https://www.linkedin.com/in/richardso21',
		text: 'linkedIn'
	},
	{
		href: 'https://github.com/richardso21',
		text: 'gitHub'
	}
];

export const importsToMap = (imports: Record<string, unknown>): Record<string, any> =>
	Object.fromEntries(
		Object.entries(imports).map(([path, mod]) => [path.split('/').pop()!, mod as unknown as any])
	);

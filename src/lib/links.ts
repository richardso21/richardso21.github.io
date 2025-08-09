export type LinkMetaData = {
	href: string;
	text: string;
};

export const site_links: Array<LinkMetaData> = [
	{
		href: '/experience',
		text: 'Experience'
	},
	{
		href: '/projects',
		text: 'Projects'
	},
	{
		href: '/resume',
		text: 'Resume'
	},
	{
		href: '/blog',
		text: 'Blog'
	}
];

export const external_links: Array<LinkMetaData> = [
	{
		href: 'https://www.linkedin.com/in/richardso21',
		text: 'LinkedIn'
	},
	{
		href: 'https://github.com/richardso21',
		text: 'GitHub'
	}
];

export const importImgLookup = (imports: Record<string, unknown>): Record<string, string> =>
	Object.fromEntries(
		Object.entries(imports).map(([path, mod]) => [path.split('/').pop()!, mod as unknown as string])
	);

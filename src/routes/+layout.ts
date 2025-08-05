export const prerender = true;

export const load = ({ url }) => {
	const { pathname } = url;

	const vanta_zoom = (): number => {
		switch (pathname) {
			case '/':
				return 1;
			case '/resume-frame':
				return 1;
			case '/experience':
				return 1.5;
			case '/projects':
				return 1.25;
			default:
				return 1.75;
		}
	};

	return {
		pathname,
		vanta_zoom
	};
};

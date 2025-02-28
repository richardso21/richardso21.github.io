export const load = ({ url }) => {
	const { pathname } = url;

	const vanta_zoom = (): number => {
		switch (pathname) {
			case '/':
				return 1;
			case '/resume-frame':
				return 0.7;
			case '/experience':
				return 1.35;
			case '/projects':
				return 0.85;
			default:
				return 1.5;
		}
	};

	return {
		pathname,
		vanta_zoom
	};
};

export const load = ({ url }) => {
	const { pathname } = url;

	const vanta_zoom = (): number => {
		switch (pathname) {
			case '/':
				return 1;
			case '/resume':
				return 0.75;
			default:
				return 1.5;
		}
	};

	return {
		pathname,
		vanta_zoom
	};
};

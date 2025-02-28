import { redirect } from '@sveltejs/kit';

export const load = () => {
	redirect(301, 'https://richardso21.github.io/resume');
};

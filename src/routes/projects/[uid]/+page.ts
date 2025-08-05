import { projects } from '$lib/projects/projects';
import type { ProjectMetaData } from '$lib/projects/projects.types';
import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export function load({ params }): { project: ProjectMetaData } {
	const { uid } = params;

	const project = projects[uid];

	if (!project) error(404, `Project [${uid}] not found`);

	return {
		project: {
			...project,
			uid
		}
	};
}

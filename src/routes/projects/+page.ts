import { projects } from '$lib/projects/projects';
import type { ProjectMetaData } from '$lib/projects/projects.types';

// list out all project metadata with their uid
const projects_arr: Array<ProjectMetaData> = Object.entries(projects).map(([uid, project]) => ({
	uid,
	...project
}));

projects_arr.sort((a, b) => {
	// sort by date descending
	return b.date.getTime() - a.date.getTime();
});

export async function load() {
	return {
		projects: projects_arr
	};
}

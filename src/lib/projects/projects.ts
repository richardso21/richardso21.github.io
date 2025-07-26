import { anim_link_tw } from '$lib/animLink';
import type { ProjectMetaData } from './projects.types';

const link = (text: string, href: string) =>
	`<a class="inline-block underline ${anim_link_tw}" href="${href}" target="_blank">${text}</a>`;

// object keys are their respective UIDs
export const projects: Record<string, Omit<ProjectMetaData, 'uid'>> = {
	lc3tools: {
		title: 'LC3Tools',
		tech_stack: ['C++', 'Vue', 'Electron'],
		date: new Date(2024, 3),
		image_url: 'lc3tools_demo.gif',
		details: `Testing`
	}
};

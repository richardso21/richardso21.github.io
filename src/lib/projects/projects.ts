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
		details: `
Revived and maintained the LC3Tools project, an educational
software suite to write, simulate, and debug assembly for the
${link('Little Computer 3', 'https://en.wikipedia.org/wiki/Little_Computer_3')}.

Worked on this as a **CS 2110 TA**, used by over **1000 students per
semester**. Completely revamped its testing suite, resolved
tokenizer nuances, and made countless QoL UI improvements.

_View the gt-cs2110 fork of LC3Tools_
${link('here', 'https://github.com/gt-cs2110/lc3tools')}.
`
	}
};

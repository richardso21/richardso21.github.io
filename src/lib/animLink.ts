const anim_link_base =
	'transition ease-out hover:animate-pulse hover:skew-x-0 active:text-blue-400 cursor-pointer';

const anim_link_base_group =
	'transition ease-out group-hover:animate-pulse group-hover:skew-x-0 active:text-blue-400 cursor-pointer';

export const anim_link_hero_tw = `${anim_link_base} -skew-x-12 hover:scale-125 active:scale-110`;
export const anim_link_tw = `${anim_link_base} -skew-x-12 hover:scale-105 active:scale-95`;
export const anim_link_tw_group = `${anim_link_base_group} -skew-x-12 group-hover:scale-105 active:scale-95`;

export const md_link = (text: string, href: string) =>
	`<a class="inline-block underline ${anim_link_tw}" href="${href}" target="_blank">${text}</a>`;

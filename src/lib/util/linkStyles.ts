const link_base_tw = 'underline-offset-2 transition ease-out active:text-blue-400 cursor-pointer';

const anim_link_base_tw = `${link_base_tw} hover:animate-pulse hover:skew-x-0`;

const anim_link_base_group_tw = `${link_base_tw} group-hover:animate-pulse group-hover:skew-x-0`;

export const anim_link_hero_tw = `${anim_link_base_tw} -skew-x-12 hover:scale-125 active:scale-110`;
export const anim_link_tw = `${anim_link_base_tw} -skew-x-12 hover:scale-[102%] active:scale-95`;
export const anim_link_no_skew_group_tw = `${anim_link_base_group_tw} group-hover:scale-[102%] group-active:scale-95`;

export const md_link = (text: string, href: string) =>
	`<a class="inline-block underline ${anim_link_tw}" href="${href}" target="_blank">${text}</a>`;

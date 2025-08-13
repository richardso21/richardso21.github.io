<script lang="ts">
	import { anim_link_hero_tw } from './animLink';
	import type { LinkMetaData } from './links';

	const { link, new_page = false }: { link: LinkMetaData; new_page?: boolean } = $props();
</script>

<div class="group {anim_link_hero_tw}">
	<a
		href={link.href}
		data-flip-id={link.href}
		target={new_page ? '_blank' : ''}
		class="inline-block"
	>
		{link.text}
		<!-- animated underline -->
		<span
			class="-mt-0.5 block h-0.5 max-w-full bg-blue-300 transition-all duration-150 group-hover:max-w-full sm:max-w-0"
		></span>
	</a>
</div>

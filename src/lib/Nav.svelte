<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { anim_link_tw } from './animLink';

	// Create a derived store for breadcrumb segments
	const breadcrumbs = $derived.by(() => {
		const segments = page.url.pathname.split('/').filter(Boolean);
		let path = '';
		return segments.map((segment, i) => {
			path += '/' + segment;
			return {
				name: segment,
				path,
				isLast: i === segments.length - 1
			};
		});
	});

	$effect(() => {
		// when page URL changes, ensure we scroll nav to right
		page.url.pathname;
		const nav = document.querySelector('nav');
		if (nav) {
			nav.scrollLeft = nav.scrollWidth; // scroll to the right end
		}
	});

	const breadcrumb_separator_tw = 'px-1.5 font-light text-gray-50';
	const background_skew_tw =
		'bg-navy -skew-x-[20deg] child:skew-x-[20deg] pl-2 pr-5 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]';
</script>

{#if !['/', '/resume'].includes(page.url.pathname)}
	<nav
		transition:fly={{ x: -50, duration: 200 }}
		class="no-scrollbar fixed z-10 w-full overflow-x-auto scroll-smooth pb-5 text-lg text-gray-300 sm:text-xl"
	>
		<ul
			class="m-0 flex w-fit list-none items-center px-0 py-1 whitespace-nowrap select-none {background_skew_tw}"
		>
			<li class={breadcrumb_separator_tw}>/</li>
			<li>
				<div class={anim_link_tw}>
					<a href="/">home</a>
				</div>
			</li>
			{#if breadcrumbs.length}
				{#each breadcrumbs as crumb}
					<li class={breadcrumb_separator_tw}>/</li>
					<li>
						{#if !crumb.isLast}
							<div class={anim_link_tw}>
								<a href={crumb.path}>{crumb.name}</a>
							</div>
						{:else}
							<span class="font-bold">{crumb.name}</span>
						{/if}
					</li>
				{/each}
			{/if}
		</ul>
	</nav>
{/if}

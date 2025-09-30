<script lang="ts">
	import { state as internal_state } from '$lib/util/state.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

	const background_skew_vt_tw =
		'bg-navy -skew-x-[20deg] child:skew-x-[20deg] drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]';

	const option_disabled_tw = 'opacity-35';
	const option_enabled_tw = 'opacity-100 font-bold text-blue-300';

	const toggleVanta = () => {
		internal_state.isVantaUserEnabled = !internal_state.isVantaUserEnabled;
	};

	let mounted = $state(false);

	onMount(() => {
		gsap.fromTo(
			'.vanta-toggler',
			{ y: -100, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, ease: 'circ.out', duration: 0.5 }
		);
		mounted = true;
	});
</script>

{#if !internal_state.isUserMobile && page.url.pathname === '/'}
	<div
		class="vanta-toggler fixed top-0 z-10 {mounted ? 'visible' : 'invisible'}"
		transition:fly={{ x: -50, duration: 200 }}
	>
		<button
			class="group cursor-pointer {background_skew_vt_tw} text-md pt-1.5 pr-3 pb-1.5 pl-4 transition-all hover:scale-110 active:scale-105"
			onclick={toggleVanta}
		>
			<span class="font-light">Background</span>
			<span class={internal_state.isVantaUserEnabled ? option_disabled_tw : option_enabled_tw}
				>OFF</span
			><span class="px-[3px]">/</span><span
				class={internal_state.isVantaUserEnabled ? option_enabled_tw : option_disabled_tw}>ON</span
			>
			<!-- animated underline -->
			<span
				class="-mt-0.5 block h-0.5 max-w-full bg-blue-300 transition-all duration-150 group-hover:max-w-full sm:max-w-0"
			></span>
		</button>
	</div>
{/if}

<style>
</style>

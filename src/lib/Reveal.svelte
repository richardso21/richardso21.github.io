<script lang="ts">
	import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let {
		width = 'fit-content',
		duration = 0.5,
		delay = 0,
		className = '',
		ease = circOut,
		children
	} = $props();

	let mounted = $state(false);

	onMount(async () => {
		mounted = true;
	});
</script>

<div
	class="relative overflow-visible transition {className} {mounted
		? 'pointer-events-auto'
		: 'pointer-events-none'}"
	style="width:{width}"
>
	{#if mounted}
		<div transition:fly={{ y: 100, duration: duration * 1000, delay: delay * 1000, easing: ease }}>
			{@render children?.()}
		</div>
	{/if}
</div>

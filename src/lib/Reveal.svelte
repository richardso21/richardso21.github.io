<script>
	import { onMount } from 'svelte';
	import { Motion, useAnimation } from 'svelte-motion';

	let {
		width = 'fit-content',
		duration = 0.5,
		delay = 0,
		className = '',
		ease = 'circOut',
		layoutId = undefined,
		children
	} = $props();

	let revealed = $state(false);

	let mainControls = useAnimation();

	onMount(async () => {
		await mainControls.start('visible');
		revealed = true;
	});
</script>

<div
	class="relative overflow-visible transition {className} {revealed
		? 'pointer-events-auto'
		: 'pointer-events-none'}"
	style="width:{width}"
>
	<Motion
		let:motion
		variants={{
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0 }
		}}
		initial="hidden"
		animate={mainControls}
		transition={{
			duration: duration ? duration : 0.5,
			delay: 0.25 + (delay ? delay : 0),
			ease: ease ? ease : 'circOut'
		}}
		{layoutId}
		layout
	>
		<div use:motion>
			{@render children?.()}
		</div>
	</Motion>
</div>

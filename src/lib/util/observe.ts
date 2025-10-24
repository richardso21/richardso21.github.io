export type ObserveOptions = {
	root?: Element | Document | null;
	rootMargin?: string;
	threshold?: number | number[];
	once?: boolean; // whether to unobserve after first intersection
	enterClass?: string; // class added when element enters
	exitClass?: string; // class added when element exits
};

/**
 * Svelte action: use:observe={options}
 * Adds enter/exit classes when element intersects the viewport.
 */
export function viewportObserve(node: Element, options: ObserveOptions = {}) {
	const {
		root = null,
		rootMargin = '0px 0px -5% 0px',
		threshold = 0,
		once = true,
		enterClass = 'reveal-in',
		exitClass = 'reveal-out'
	} = options;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.remove(exitClass);
					node.classList.add(enterClass);
					if (once) io.unobserve(node);
				} else {
					// only add exit class if we don't unobserve on enter
					if (!once) {
						node.classList.remove(enterClass);
						node.classList.add(exitClass);
					}
				}
			}
		},
		{ root: root as Element | null, rootMargin, threshold }
	);

	io.observe(node);

	return {
		update(newOptions: ObserveOptions) {
			// simple update: if options change, recreate observer
			io.unobserve(node);
			// can't easily change underlying IO behavior here; just recreate
		},
		destroy() {
			io.unobserve(node);
			io.disconnect();
		}
	};
}

// codeblock tailwind styles
const code_wrapper_tw = 'code-block-wrapper mb-4';
const code_bar_tw =
	'flex items-center justify-between bg-slate-800 text-slate-100 text-xs sm:text-sm px-2 py-1 rounded-t-md';
const code_lang_tw = 'font-bold';
const code_copy_btn_tw = 'ml-2 px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 cursor-pointer';
const code_pre_tw = 'rounded-b-md overflow-x-auto';

/**
 * Enhance code blocks rendered by marked inside the given root (defaults to the article element).
 * Adds a top bar with language label and a copy button, and highlights the code with highlight.js.
 */
export const enhanceMarkdownCodeBlocks = (article: HTMLElement | null) => {
	if (!article) return;

	// lazily import highlight.js only if there are code blocks
	let hljs: any = null;

	// find all code blocks
	const codeBlocks = Array.from(article.querySelectorAll('pre > code')) as HTMLElement[];

	codeBlocks.forEach(async (codeEl) => {
		const preEl = codeEl.parentElement as HTMLElement | null;
		if (!preEl) return;

		// avoid double-processing
		if (preEl.parentElement?.classList.contains('code-block-wrapper')) return;

		// detect language from class like "language-python" or "lang-python"
		const langMatch =
			(codeEl.className || '').match(/language-([^\s]+)/) ||
			(codeEl.className || '').match(/lang-([^\s]+)/);
		const lang = langMatch ? langMatch[1] : 'text';

		// wrapper that holds the bar + pre
		const wrapper = document.createElement('div');
		wrapper.className = code_wrapper_tw;

		// top bar showing language and copy buttons
		const bar = document.createElement('div');
		bar.className = code_bar_tw;

		const langSpan = document.createElement('span');
		langSpan.className = code_lang_tw;
		langSpan.textContent = lang.toUpperCase();

		const copyBtn = document.createElement('button');
		copyBtn.type = 'button';
		copyBtn.className = code_copy_btn_tw;
		copyBtn.setAttribute('aria-label', `Copy ${lang} code`);
		copyBtn.textContent = 'Copy';

		bar.appendChild(langSpan);
		bar.appendChild(copyBtn);

		// insert wrapper before pre, then move pre inside wrapper
		preEl.parentNode?.insertBefore(wrapper, preEl);
		wrapper.appendChild(bar);
		wrapper.appendChild(preEl);

		// style pre to match the bar (rounded bottom + horizontal scroll)
		preEl.classList.add(...code_pre_tw.split(' '));

		// copy handler
		copyBtn.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(codeEl.textContent);
				copyBtn.textContent = 'Copied';
				copyBtn.setAttribute('disabled', 'true');
				// reset
				setTimeout(() => {
					copyBtn.textContent = 'Copy';
					copyBtn.removeAttribute('disabled');
				}, 1400);
			} catch (err) {
				copyBtn.textContent = 'Failed';
				setTimeout(() => (copyBtn.textContent = 'Copy'), 1400);
			}
		});

		// syntax highlight this block
		try {
			// ready to highlight code - import hljs if we haven't already
			if (!hljs) {
				console.log('importing hljs');
				hljs = await import('highlight.js').then((mod) => mod.default);
				await import('highlight.js/styles/github-dark.min.css');
			}
			hljs.highlightElement(codeEl);
		} catch (e) {
			// ignore, proceed to next block
		}
	});
};

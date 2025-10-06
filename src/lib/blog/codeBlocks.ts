import { state } from '$lib/util/state.svelte';

const isUserMobile = state.isUserMobile;

// codeblock tailwind styles
const code_wrapper_tw = 'code-block-wrapper relative overflow-y-hidden';
const text_tw = 'absolute text-slate-100 bg-slate-800/90 text-sm px-2 py-1 backdrop-blur-sm z-10';
const code_copy_btn_tw = `${text_tw} ${isUserMobile ? 'top-0' : '-top-10'} right-0 rounded-bl rounded-tr hover:bg-slate-700/90 cursor-pointer transition-all`;
const code_lang_tw = `${text_tw} bottom-0 right-0 italic font-bold rounded-tl rounded-br`;

// track hover timeout for stable rapid mouseenter/mouseleave events
let hoverTimeout: NodeJS.Timeout | null = null;

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

		// wrapper that holds the pre with copy and language overlay
		const wrapper = document.createElement('div');
		wrapper.className = code_wrapper_tw;

		const copyBtn = document.createElement('button');
		copyBtn.type = 'button';
		copyBtn.className = code_copy_btn_tw;
		copyBtn.setAttribute('aria-label', `Copy ${lang} code`);
		copyBtn.textContent = 'copy';

		// language label positioned at bottom right corner
		const langSpan = document.createElement('span');
		langSpan.className = code_lang_tw;
		langSpan.textContent = lang;

		// insert wrapper before pre, then move pre inside wrapper and add copy button + language
		preEl.parentNode?.insertBefore(wrapper, preEl);
		wrapper.appendChild(preEl);
		wrapper.appendChild(copyBtn);
		wrapper.appendChild(langSpan);

		if (!state.isUserMobile) {
			wrapper.addEventListener('mouseenter', () => {
				hoverTimeout && clearTimeout(hoverTimeout);
				copyBtn.classList.remove('-top-10');
				copyBtn.classList.add('top-0');
			});

			wrapper.addEventListener('mouseleave', () => {
				hoverTimeout = setTimeout(() => {
					copyBtn.classList.remove('top-0');
					copyBtn.classList.add('-top-10');
				}, 500);
			});
		}

		// copy handler
		copyBtn.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText(codeEl.textContent);
				copyBtn.textContent = 'copied';
				copyBtn.setAttribute('disabled', 'true');
				// reset
				setTimeout(() => {
					copyBtn.textContent = 'copy';
					copyBtn.removeAttribute('disabled');
				}, 1400);
			} catch (err) {
				copyBtn.textContent = 'Failed';
				setTimeout(() => (copyBtn.textContent = 'copy'), 1400);
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

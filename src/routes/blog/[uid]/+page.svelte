<script lang="ts">
	import { marked, type Tokens } from 'marked';
	import { onMount, tick } from 'svelte';
	import fm from 'front-matter';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/all';
	import Giscus from '@giscus/svelte';
	import { enhanceMarkdownCodeBlocks } from '$lib/blog/codeBlocks.js';
	import { anim_link_tw } from '$lib/util/linkStyles.js';

	const { data } = $props();
	const { blogContent, blogMetadata } = data;

	// customizations to our markdown renderer
	marked.use({
		hooks: {
			// only process the body of the markdown file
			preprocess: (markdown: string) => fm(markdown).body
		},
		renderer: {
			// custom headings with anchor link
			heading(args: Tokens.Heading) {
				const { text, depth } = args;
				const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
				// extra invisible anchor to respect the heading's margin
				return `
				<div class="block">
					<div class="header-anchor inline-block">
						<a name="${escapedText}"></a>
						<h${depth}>
							<a class="anchor no-underline font-bold" href="#${escapedText}">
								${'='.repeat(depth)} ${text}
							</a>
						</h${depth}>
					</div>
				</div>
				`.trim();
			},
			// anchor links open on new pages, with styling
			link(args: Tokens.Link) {
				const { href, text } = args;
				return `
				<span class="${anim_link_tw} inline-block">
					<a href="${href}" target="_blank" rel="noopener" class="inline-block">${text}</a>
				</span>
				`.trim();
			}
		}
	});

	let wordCount = $state(0);

	onMount(async () => {
		// animate whole article into view
		gsap.from('article', { autoAlpha: 0, x: 150, ease: 'circ.out', duration: 0.5 });

		// count words
		const article = document.querySelector('article');
		const nodes = Array.from(article?.children ?? []) as HTMLElement[];
		for (let i = 0; i < nodes.length; i++) {
			wordCount += nodes[i].textContent.trim().split(/\s+/).length;
		}
		// wait for wordCount to update in DOM before animating title + metadata
		await tick();

		// animate article metadata into view with a small character stagger
		new SplitText('.article-metadata', {
			type: 'chars',
			autoSplit: true,
			smartWrap: true,
			onSplit: (self) => {
				gsap.from(self.chars, {
					y: 50,
					opacity: 0,
					stagger: 0.01,
					duration: 0.5,
					ease: 'elastic.out(1, 0.9)'
				});
			}
		});
	});

	// blog styling
	const pre_code_tw = '[&_pre]:p-0 [&_pre]:m-0';
	const prose_tw = 'prose prose-lg md:prose-xl 2xl:prose-2xl max-w-full prose-invert';
	const article_tw = `${prose_tw} ${pre_code_tw}`;
</script>

<svelte:head>
	<title>{blogMetadata.title} | Richard So</title>
	<meta name="description" content={blogMetadata.description} />
	<meta name="date" content={blogMetadata.date.toISOString()} />
</svelte:head>

<div class="relative w-full xl:w-3/4 2xl:mx-auto 2xl:w-7/12">
	<article class={article_tw} use:enhanceMarkdownCodeBlocks>
		<div class="article-metadata">
			<h1 class="not-prose mb-0 py-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
				{blogMetadata.title}
			</h1>
			<p class="not-prose my-0 py-2 text-xl text-blue-300 italic sm:text-2xl md:text-3xl">
				{blogMetadata.description}
			</p>
			<p class="not-prose text-md py-2 text-gray-500 sm:text-lg md:text-xl">
				{new Date(blogMetadata.date).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})} | {wordCount} words
			</p>
		</div>
		<hr class="not-prose mt-5 mb-10 border-t border-gray-700" />
		{@html marked.parse(blogContent, { async: false, gfm: true })}
		<hr class="border-2 border-gray-700" />
		<div class="not-prose">
			<Giscus
				id="comments"
				repo="richardso21/richardso21.github.io"
				repoId="R_kgDOHriupA"
				category="Announcements"
				categoryId="DIC_kwDOHriupM4CxEzX"
				mapping="pathname"
				strict="0"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="top"
				theme="transparent_dark"
				lang="en"
				loading="lazy"
				term=""
			/>
		</div>
	</article>
</div>

<style scoped>
	article {
		visibility: hidden;
	}
</style>

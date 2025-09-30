import type { BlogMetadata } from '$lib/blog/blogMetadataType';
import { blogMetadataMap, blogPosts } from '$lib/blog/blogs.js';
import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ params }): Promise<{
	blogContent: string;
	blogMetadata: BlogMetadata;
}> {
	const { uid } = params;
	const key = `${uid}.md`;

	if (!uid || !blogPosts[key]) throw error(404, `Blog id [${uid}] not found`);

	// since blogs are being lazily imported, the map entry returns an async function
	const blogMarkdownFn = blogPosts[key];

	const blogContent = await blogMarkdownFn();

	return {
		blogContent,
		blogMetadata: blogMetadataMap[uid]
	};
}

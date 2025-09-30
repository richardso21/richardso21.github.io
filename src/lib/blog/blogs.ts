import { importsToMap } from '$lib/homeLinks';

const importedBlogPosts = import.meta.glob('$lib/assets/blog/*.md', {
	eager: false, // we don't want to load all blog post contents at once
	import: 'default',
	query: '?raw'
});

export const blogPosts = importsToMap(importedBlogPosts);

export { blogMetadataMap } from '$lib/blog/blogMetadata.generated';

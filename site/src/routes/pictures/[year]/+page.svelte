<script>
	import ContentBlock from '$lib/ui/blocks/ContentBlock.svelte';
	import GalleryBlock from '$lib/ui/blocks/GalleryBlock.svelte';
	import { getImagesAndThumbs } from '$lib/utils/imageUtils';

	export let data;

	let { images, thumbs, dayCount } = getImagesAndThumbs(data.year);
</script>

{#if dayCount > 1}
	<ContentBlock title={data.year} titleSecond>
		<div class="flex flex-wrap justify-center gap-1">
			{#each Array(dayCount) as _, i}
				<a href={`/pictures/${data.year}/${i + 1}`}>Day {i + 1}</a>
			{/each}
		</div>
	</ContentBlock>
{:else}
	<GalleryBlock images={images[0]} thumbs={thumbs[0]} />
{/if}

<style>
	a {
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		border: 1px solid #7d0000;
		transition:
			background-color 0.2s,
			color 0.2s;
	}
	a:hover {
		background-color: #7d0000;
		color: white;
	}
</style>

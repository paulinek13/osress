<script>
	import GalleryBlock from '$lib/ui/blocks/GalleryBlock.svelte';
	import { getImagesAndThumbs } from '$lib/utils/imageUtils';

	export let data;

	let { images, thumbs } = getImagesAndThumbs(data.year, parseInt(data.day));
</script>

<GalleryBlock images={images[0]} thumbs={thumbs[0]} />

<script>
	import GalleryBlock from '$lib/ui/blocks/GalleryBlock.svelte';

	export let data;
</script>

<GalleryBlock images={data.images[0]} thumbs={data.thumbs[0]} />

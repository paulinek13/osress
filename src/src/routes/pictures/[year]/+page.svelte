<script>
	import GalleryBlock from '$lib/ui/blocks/GalleryBlock.svelte';

	export let data;

	let imageCounts = {
		'2013': 56,
		'2019': 155
	};

	let images = [];
	let thumbs = [];
	let count = imageCounts[data.year] || 0;

	for (let i = 0; i < count; i++) {
		images.push(
			`https://osress-${data.year}.pages.dev/osress_${data.year}_${i.toString().padStart(3, '0')}.jpg`
		);
		thumbs.push(
			`https://osress-${data.year}.pages.dev/thumb/osress_${data.year}_${i.toString().padStart(3, '0')}.jpg`
		);
	}
</script>

<GalleryBlock {images} {thumbs} />

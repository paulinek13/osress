<script>
	import ContentBlock from '$lib/ui/blocks/ContentBlock.svelte';
</script>

<ContentBlock title="Pictures" titleSecond>
	Welcome to our visual journey. Here you will find a collection of images from various OSRESS
	editions. Enjoy browsing through the memories!
	<br />
	<br />

	<div class="py-4 lg:py-8 flex flex-col items-center gap-4">
		<a href="/pictures/2019">🇵🇱 <span>2019</span> Biała Podlaska</a>
		<a href="/pictures/2013">🇵🇱 <span>2013</span> Biała Podlaska</a>
	</div>
</ContentBlock>

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

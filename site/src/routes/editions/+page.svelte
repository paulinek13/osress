<script>
	export let data;
</script>

<div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 my-16 max-w-4xl m-auto">
	{#each data.editions as edition}
		<a
			class="border border-black text-black hover:bg-black hover:text-neutral-200 px-8 py-2 transition-all duration-200 bg-neutral-50 w-full text-center"
			href={`/editions/${edition}`}>{edition}</a
		>
	{/each}
</div>

<style>
	a {
		font-size: 1.2rem;
		padding: 0.5rem 2.4rem;
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

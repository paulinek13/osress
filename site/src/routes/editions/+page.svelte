<script>
	export let data;
</script>

<div class="p-4 flex flex-wrap items-center justify-center gap-2 mt-4 max-w-xl m-auto">
	{#each data.editions as edition}
		<a
			class="border border-black text-black hover:bg-black hover:text-neutral-200 px-8 py-2 transition-all duration-200"
			href={`/editions/${edition}`}>{edition}</a
		>
	{/each}
</div>

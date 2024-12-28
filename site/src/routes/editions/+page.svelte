<script>
	// const LATEST_EDITION = 2024;
	// const editions = Array.from(
	// 	{ length: LATEST_EDITION - 2010 + 1 },
	// 	(_, i) => 2010 + i
	// );
	const editions = [2010, 2011, 2012, 2013, 2014, 2020]; // REVIEW: Hardcoded for now, will be dynamic later
</script>

<div class="p-4 flex flex-wrap items-center justify-center gap-2 mt-4">
	{#each editions as edition}
		<a
			class="border border-black text-black hover:bg-black hover:text-neutral-200 px-8 py-2 transition-all duration-200"
			href={`/editions/${edition}`}>{edition}</a
		>
	{/each}
</div>

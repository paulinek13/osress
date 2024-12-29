<script>
	import { onMount } from "svelte";

	export let data;

	let content;

	async function fetchContent() {
		const response = await fetch(`/ext/content/editions/${data.year}/main.html`);
		content = await response.text();
	}

	onMount(() => {
		fetchContent();
	});
</script>

<div>
    {@html content}
</div>

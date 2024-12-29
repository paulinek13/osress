<script>
	import { onMount } from "svelte";

	let content;

	async function fetchContent() {
		const response = await fetch('/ext/content/consortium/main.html');
		content = await response.text();
	}

	onMount(() => {
		fetchContent();
	});
</script>

<div class="consortium">
    {@html content}
</div>

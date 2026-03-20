<script>
	import '../app.css';

	import Footer from '$lib/ui/layout/Footer.svelte';
	import TopNav from '$lib/ui/layout/TopNav.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>OSRESS Summer School</title>
</svelte:head>

<div
	id="OSRESS"
	class="fixed top-0 left-0 bottom-0 w-full overflow-auto flex flex-col bg-neutral-100 text-black"
>
	<TopNav />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>

<script>
	import '../app.css';

	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	import Footer from '$lib/ui/layout/Footer.svelte';
	import TopNav from '$lib/ui/layout/TopNav.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>OSRESS Summer School</title>
</svelte:head>

<div
	id="OSRESS"
	class="fixed top-0 left-0 bottom-0 w-full overflow-auto flex flex-col bg-neutral-50 text-black"
>
	<TopNav />

	<main class="flex-1">
		<ParaglideJS {i18n}>
			{@render children()}
		</ParaglideJS>
	</main>

	<Footer />
</div>

<script>
	import NavLink from '../common/NavLink.svelte';
</script>

<nav class="bg-neutral-100 text-black">
	<a class="flex" href="/">
		<div class="flex-1 bg-[#7D0000]"></div>
		<img class="" src="/top.svg" alt="OSRESS" />
		<div class="flex-1 bg-neutral-100"></div>
	</a>

	<div class="bg-neutral-100 text-black font-bold flex flex-wrap justify-center">
		<NavLink href="/news">News</NavLink>
		<NavLink href="/consortium">Consortium</NavLink>
		<NavLink href="/committee">Committee</NavLink>
		<NavLink href="/editions">Editions</NavLink>
		<NavLink href="/pictures">Pictures</NavLink>
		<NavLink href="/videos">Videos</NavLink>
	</div>
</nav>

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

	<div class="bg-neutral-100 text-black font-bold flex flex-wrap justify-center">
		<a href="/news" class="p-2 text-center w-full bg-amber-200">
			<span class="text-[#7D0000]">Latest News:</span>
			<span class="ml-2">Summer School 2025 is organised by Vilnius University!</span>
		</a>
	</div>
</nav>

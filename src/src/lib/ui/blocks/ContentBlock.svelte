<script>
	export let title;
	export let titleSecond = false;
	export let colored = false;
</script>

<div class={colored ? 'bg-[#7D0000] text-neutral-100' : 'text-black bg-neutral-100'}>
	<div
		class="justify-evenly gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16 flex flex-col md:flex-row max-w-5xl m-auto"
	>
		<h1 class="font-extrabold text-2xl {titleSecond ? 'md:order-2' : ''} text-center min-w-fit">
			{title}
		</h1>
		<div class="">
			<slot />
		</div>
	</div>
</div>

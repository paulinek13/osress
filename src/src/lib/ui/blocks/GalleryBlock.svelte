<script>
	import { onMount, afterUpdate } from 'svelte';

	export let images = [];

	let selectedImage = null;
	let selectedIndex = -1;
	let touchStartX = 0;
	let touchEndX = 0;
	let modal;

	function openModal(image, index) {
		selectedImage = image;
		selectedIndex = index;
	}

	function closeModal() {
		selectedImage = null;
		selectedIndex = -1;
	}

	function showNextImage() {
		if (selectedIndex < images.length - 1) {
			selectedIndex++;
			selectedImage = images[selectedIndex];
		}
	}

	function showPreviousImage() {
		if (selectedIndex > 0) {
			selectedIndex--;
			selectedImage = images[selectedIndex];
		}
	}

	function handleKeydown(event) {
		if (event.key === 'ArrowRight') showNextImage();
		else if (event.key === 'ArrowLeft') showPreviousImage();
		else if (event.key === 'Escape') closeModal();
	}

	function handleTouchStart(event) {
		touchStartX = event.changedTouches[0].screenX;
	}

	function handleTouchEnd(event) {
		touchEndX = event.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		if (touchEndX < touchStartX) showNextImage();
		if (touchEndX > touchStartX) showPreviousImage();
	}

	onMount(() => {
		if (modal) modal.focus();
	});

	afterUpdate(() => {
		if (modal) modal.focus();
	});
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 max-w-screen-xl mx-auto"
>
	{#each images as image, index}
		<button class="relative w-full h-64" on:click={() => openModal(image, index)}>
			<img
				src={image}
				alt="OSRESS Gallery Item"
				class="absolute top-0 left-0 w-full h-full object-cover hover:opacity-70"
			/>
		</button>
	{/each}
</div>

{#if selectedImage}
	<div
		role="button"
		tabindex="0"
		class="fixed inset-0 bg-black bg-opacity-80 flex z-50 cursor-default"
		on:click={closeModal}
		on:keydown={handleKeydown}
		on:touchstart={handleTouchStart}
		on:touchend={handleTouchEnd}
		bind:this={modal}
	>
		<button
			on:click|stopPropagation={showPreviousImage}
			class="text-2xl px-2 xl:text-4xl xl:px-4 hidden sm:block text-neutral-400 hover:text-neutral-300"
			>←</button
		>
		<div class="flex-1 max-h-fit self-center">
			<img src={selectedImage} alt="Selected OSRESS Gallery Item" class="m-auto my-auto" />
		</div>
		<button
			on:click|stopPropagation={showNextImage}
			class="text-2xl px-2 xl:text-4xl xl:px-4 hidden sm:block text-neutral-400 hover:text-neutral-300"
			>→</button
		>
	</div>
{/if}

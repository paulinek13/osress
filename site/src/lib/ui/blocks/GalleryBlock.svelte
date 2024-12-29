<script>
	import { onMount, afterUpdate } from 'svelte';

	export let images = [];
	export let thumbs = [];

	let selectedImage = null;
	let selectedIndex = -1;
	let touchStartX = 0;
	let touchEndX = 0;
	let modal;
	let isImageLoading = false;

	function openModal(image, index) {
		isImageLoading = true;
		selectedImage = image;
		selectedIndex = index;
	}

	function closeModal() {
		selectedImage = null;
		selectedIndex = -1;
		isImageLoading = false;
	}

	function showNextImage() {
		if (selectedIndex < images.length - 1 && !isImageLoading) {
			isImageLoading = true;
			selectedIndex++;
			selectedImage = images[selectedIndex];
		}
	}

	function showPreviousImage() {
		if (selectedIndex > 0 && !isImageLoading) {
			isImageLoading = true;
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

	function handleImageLoad() {
		isImageLoading = false;
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
	{#each thumbs as thumb, index}
		<button class="relative w-full h-64" on:click={() => openModal(images[index], index)}>
			<img
				src={thumb}
				alt="OSRESS Gallery Item"
				class="absolute top-0 left-0 w-full h-full object-cover hover:opacity-70"
			/>
		</button>
	{/each}
</div>

<!-- Preload full-resolution images -->
<!-- <div class="hidden">
	{#each images as image}
		<img src={image} alt="Preloaded OSRESS Gallery Item" />
	{/each}
</div> -->

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
		<div class="flex-1 max-h-fit self-center relative">
			{#if isImageLoading}
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="loader"></div>
				</div>
			{/if}
			<img src={selectedImage} alt="Selected OSRESS Gallery Item" class="m-auto my-auto" on:load={handleImageLoad} />
		</div>
		<button
			on:click|stopPropagation={showNextImage}
			class="text-2xl px-2 xl:text-4xl xl:px-4 hidden sm:block text-neutral-400 hover:text-neutral-300"
			>→</button
		>
	</div>
{/if}

<style>
	.loader {
		border: 4px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		border-top: 4px solid white;
		width: 40px;
		height: 40px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>

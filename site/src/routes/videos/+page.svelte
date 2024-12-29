<script>
	import ContentBlock from '$lib/ui/blocks/ContentBlock.svelte';
</script>

<div id="_videos" class="flex flex-col gap-4">
	<ContentBlock title="Summer School 2013 Biała Podlaska" titleSecond>
		<div class="videosWrapper">
			<div class="videoWrapper">
				<iframe
					title="Summer school 2013 Biala Podlaska_picture review"
					src="https://www.youtube.com/embed/aJjeD-wEHsI"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="Summer school 2013 Biala Podlaska_video"
					src="https://www.youtube.com/embed/E_5uIynctMY"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</ContentBlock>
	<ContentBlock title="Summer School 2012 Madona">
		<div class="videosWrapper">
			<div class="videoWrapper">
				<iframe
					title="Starptautiskā studentu un pasniedzēju nometne Smeceres silā"
					src="https://www.youtube.com/embed/VRgbEXfzS2s"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</ContentBlock>
	<ContentBlock title="Summer School 2011 Madona" titleSecond>
		<div class="videosWrapper">
			<div class="videoWrapper">
				<iframe
					title="Starptautiskā vasaras skola Madonā"
					src="https://www.youtube.com/embed/_Rk_GZU5ttw"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</ContentBlock>
	<ContentBlock title="Games from Summer School 2012">
		<div class="videosWrapper">
			<div class="videoWrapper">
				<iframe title="Karogi" src="https://www.youtube.com/embed/LHJOFb3a2K8" allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="Kalim bam bam"
					src="https://www.youtube.com/embed/gOHJrAUDOeM"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe title="gurki" src="https://www.youtube.com/embed/DoqN55M1dJ0" allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="akmentin lec lauka"
					src="https://www.youtube.com/embed/9V7b8urfAko"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="No money no honey"
					src="https://www.youtube.com/embed/9OpzSL-E5fY"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="adamam bij 7 deli"
					src="https://www.youtube.com/embed/28kUt5ojMfQ"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="lenak brauksi talak tiksi"
					src="https://www.youtube.com/embed/LIbafQaUYN8"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="paslepes ar tuk tukiem"
					src="https://www.youtube.com/embed/MR140NIfa_8"
					allowfullscreen
				></iframe>
			</div>
			<div class="videoWrapper">
				<iframe
					title="Pedejais paris skiras"
					src="https://www.youtube.com/embed/qXz-SbekBIU"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</ContentBlock>
</div>

<style>
	#_videos {
		/* max-width: 600px; */
		margin: 0 auto;
	}

	.videoWrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.videoWrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.videosWrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 500px));
		gap: 1rem;
	}
</style>

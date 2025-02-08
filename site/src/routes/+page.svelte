<script>
	import ContentBlock from '$lib/ui/blocks/ContentBlock.svelte';
	import EditionsTable from '$lib/ui/blocks/EditionsTable.svelte';
	import SquareListItem from '$lib/ui/common/SquareListItem.svelte';
	import UnorderedList from '$lib/ui/common/UnorderedList.svelte';
</script>

<div class="flex flex-col">
	<img src="./top.jpg" alt="" />
</div>

<ContentBlock title="What is OSRESS?"
	>OSRESS stands for <b>Outdoor Sports and Recreation Education Summer School</b>, an innovative
	international academic initiative that transforms traditional learning through immersive,
	cross-cultural experiences. <br /> <br /> Launched in 2010 by the
	<a href="https://www.lspa.eu">Latvian Academy of Sport Education</a> and the
	<a href="https://www.awf-bp.edu.pl"
		>Józef Piłsudski University of Physical Education in Warsaw - Branch in Biała Podlaska</a
	>, this program brings together students, doctoral candidates, and academics from various European
	universities. <br />
	<br />
	By creating a dynamic educational platform that extends beyond conventional academic boundaries, OSRESS
	promotes personal development, intercultural understanding, and practical learning in natural environments.
</ContentBlock>

<ContentBlock title="The primary aims of OSRESS" colored>
	<UnorderedList>
		<SquareListItem
			>Developing practical skills in planning and organizing outdoor activities and sports programs</SquareListItem
		>
		<SquareListItem>
			Expanding theoretical knowledge about recreation, physical education, and sports through
			hands-on research</SquareListItem
		>
		<SquareListItem
			>Supporting interdisciplinary learning through practical experiences in natural environments</SquareListItem
		>
		<SquareListItem>Encouraging sustainable and healthy lifestyle practices</SquareListItem>
		<SquareListItem
			>Fostering personal growth and communication skills in a diverse, multilingual environment</SquareListItem
		>
		<SquareListItem
			>Create networking opportunities for students and academics across European educational
			institutions</SquareListItem
		>
	</UnorderedList>
</ContentBlock>

<ContentBlock title="All editions of the Summer School" titleSecond>
	<EditionsTable />
</ContentBlock>

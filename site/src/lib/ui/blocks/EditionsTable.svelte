<script>
	import EditionRow from '../common/EditionRow.svelte';

	const editions = [
		{ flag: '🇱🇹', year: 2024, city: 'Kaunas', country: 'Lithuania' },
		{ flag: '🇱🇻', year: 2023, city: 'Riga', country: 'Latvia' },
		{ flag: '🇮🇹', year: 2022, city: 'Verona', country: 'Italy' },
		{ flag: '🇵🇱', year: 2019, city: 'Biała Podlaska', country: 'Poland' },
		{ flag: '🇱🇹', year: 2018, city: 'Klaipėda', country: 'Lithuania' },
		{ flag: '🇱🇻', year: 2017, city: 'Madona', country: 'Latvia' },
		{ flag: '🇵🇱', year: 2016, city: 'Biała Podlaska', country: 'Poland' },
		{ flag: '🇪🇸', year: 2015, city: 'Málaga', country: 'Spain' },
		{ flag: '🇱🇻', year: 2014, city: 'Madona', country: 'Latvia' },
		{ flag: '🇵🇱', year: 2013, city: 'Biała Podlaska', country: 'Poland' },
		{ flag: '🇱🇻', year: 2012, city: 'Madona', country: 'Latvia' },
		{ flag: '🇱🇻', year: 2011, city: 'Madona', country: 'Latvia' },
		{ flag: '🇱🇻', year: 2010, city: 'Madona', country: 'Latvia' }
	];
</script>

<table>
	<tbody>
		{#each editions as edition}
			<EditionRow
				flag={edition.flag}
				year={edition.year}
				city={edition.city}
				country={edition.country}
			/>
		{/each}
	</tbody>
</table>

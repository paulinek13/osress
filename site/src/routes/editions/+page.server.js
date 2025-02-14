export function load() {
	const editions = [...Array(2024 - 2010 + 1).keys()].map(i => 2024 - i).filter(year => year !== 2021);
	return { editions };
}

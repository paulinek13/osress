export function load() {
	const editions = [...Array(2025 - 2010 + 1).keys()].map(i => 2025 - i).filter(year => year !== 2021);
	return { editions };
}

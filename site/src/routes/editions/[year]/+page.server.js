export async function load({ params, fetch }) {
	const response = await fetch(
		`/ext/content/editions/${params.year}/main.html`,
	);
	const content = await response.text();
	return {
		year: params.year,
		content,
	};
}

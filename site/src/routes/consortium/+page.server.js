export async function load({ fetch }) {
	const response = await fetch("/ext/content/consortium/main.html");
	const content = await response.text();
	return { content };
}

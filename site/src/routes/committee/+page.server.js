export async function load({ fetch }) {
	const response = await fetch("/ext/content/committee/main.html");
	const content = await response.text();
	return { content };
}

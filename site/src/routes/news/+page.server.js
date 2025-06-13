export async function load({ fetch }) {
	const response = await fetch("/ext/content/news/osress-2025.html");
	const content = await response.text();
	return { content };
}

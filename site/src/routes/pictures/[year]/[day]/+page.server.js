import { getImagesAndThumbs } from "$lib/utils/imageUtils";

export function load({ params }) {
	const { images, thumbs } = getImagesAndThumbs(
		params.year,
		Number.parseInt(params.day),
	);
	return {
		year: params.year,
		day: params.day,
		images,
		thumbs,
	};
}

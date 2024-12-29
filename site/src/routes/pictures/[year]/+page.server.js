import { getImagesAndThumbs } from "$lib/utils/imageUtils";

export function load({ params }) {
	const { images, thumbs, dayCount } = getImagesAndThumbs(params.year);
	return {
		year: params.year,
		images,
		thumbs,
		dayCount,
	};
}

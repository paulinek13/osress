export function getImagesAndThumbs(year, day = null) {
    let imageCounts = {
        '2013': 56,
        '2015': [7, 44, 109, 26, 47],
        '2017': [80, 63, 48, 14, 51],
        '2019': 155
    };

    let days = {
        '2013': 1,
        '2015': 5,
        '2017': 5,
        '2019': 1
    };

    let images = [];
    let thumbs = [];
    let count = imageCounts[year] || 0;
    let dayCount = days[year] || 1;

    function generateImageUrls(year, day, count) {
        let images = [];
        let thumbs = [];
        for (let i = 0; i < count; i++) {
            let dayPath = day !== null && dayCount > 1 ? `/${day}` : '';
            images.push(
                `https://osress-${year}.pages.dev${dayPath}/osress_${year}_${i.toString().padStart(3, '0')}.jpg`
            );
            thumbs.push(
                `https://osress-${year}.pages.dev${dayPath}/thumb/osress_${year}_${i.toString().padStart(3, '0')}.jpg`
            );
        }
        return { images, thumbs };
    }

    let processDay = (day) => {
        let dayImageCount = Array.isArray(count) ? count[day - 1] : count / dayCount;
        let { images: dayImages, thumbs: dayThumbs } = generateImageUrls(year, day, dayImageCount);
        images.push(dayImages);
        thumbs.push(dayThumbs);
    };

    if (day !== null) {
        processDay(day);
    } else {
        for (let day = 1; day <= dayCount; day++) {
            processDay(day);
        }
    }

    return { images, thumbs, dayCount };
}
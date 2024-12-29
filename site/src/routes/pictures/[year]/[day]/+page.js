export async function load({ params }) {
    const { year } = params;
    const { day } = params;
    return { year, day };
}
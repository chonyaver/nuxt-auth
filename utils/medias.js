export function getStrapiMedia(url) {
    if (url.startsWith('/')) {
        return `${process.env.API_AUTH_URL}${url}`;
    }

    return url;
};
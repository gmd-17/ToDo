export function setupMediaQuery(callback) {
    const media = window.matchMedia("(width < 600px)");
    callback(media);

    media.addEventListener('change', (e) => {
        callback(e);
    });
    return media
}
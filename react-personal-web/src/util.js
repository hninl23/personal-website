export const getImgUrl = (path) => {
    return new URL(`/img/${path}`, import.meta.url).href;
}
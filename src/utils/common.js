export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = (url, params) => {
    let urlWithPrarams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? '?' : '&';
            urlWithPrarams += `${sign}${key}=${value}`
    });
    return urlWithPrarams
}

export const sumBy = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
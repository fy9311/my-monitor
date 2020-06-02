export function getSelector(path) {
    if (Array.isArray(path)) {
        return getSelectors(path);
    }
}

function getSelectors(path) {
    return path
        .reverse()
        .filter(el => {
            return el !== document && el !== window
        })
        .map(el => {
            let selector = "";
            if (el.id) {
                selector = `${el.nodeName.toLowerCase()}#${el.id}`
            } else if (el.className && typeof el.className === 'string') {
                selector = `${el.nodeName.toLowerCase()}.${el.className}`
            } else {
                selector = el.nodeName.toLowerCase();
            }
            return selector;
        })
        .join(' ');
}
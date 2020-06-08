// 空白屏
import tracker from '../utils/tracker';

export function blank() {
    // 哪些算是空白节点
    let wrapperElements = ['html', 'body', '#content', '.box'];
    // 空节点计数
    let emptyPoints = 0;

    function isWrapper(el) {
        let selector = getSelector(el);
        if (wrapperElements.includes(selector) !== -1) {
            emptyPoints++;
        }
    }



    for (let i = 1; i <= 99; i++) {
        let xElements = document.elementsFromPoint(window.innerWidth * i / 100, window.innerHeight / 2);
        let yElements = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight * i / 100);
        isWrapper(xElements[0]);
        isWrapper(yElements[0]);
    }

    console.log(emptyPoints)
}

function getSelector(el) {
    if (el.id) {
        return '#' + el.id
    } else if (el.className) {
        return '.' + el.className
    } else {
        return el.nodeName.toLowerCase();
    }
}
// 空白屏
import tracker from '../utils/tracker';

export function blank() {
    for(let i = 1; i <= 9; i++) {
        let xElement = document.elementsFromPoint(window.innerWidth * i / 10, window.innerHeight * i / 10);
    }
}
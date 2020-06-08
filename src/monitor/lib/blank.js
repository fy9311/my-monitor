// 空白屏
import tracker from "../utils/tracker";
import onload from '../utils/onload';

export function blank() {
  // 哪些算是空白节点
  let wrapperElements = ["html", "body", "#content", ".box"];
  // 空节点计数
  let emptyPoints = 0;

  function isWrapper(el) {
    let selector = getSelector(el);
    if (wrapperElements.includes(selector)) {
      emptyPoints++;
    }
  }

  function getSelector(el) {
  
    if (el.id) {
      return "#" + el.id;
    } else if (el.className) {
      return "." + el.className.split(' ').filter(item => !!item).join('.');
    } else {
      return el.nodeName.toLowerCase();
    }
  }

  onload(function () {
    for (let i = 1; i <= 9; i++) {
      let xElements = document.elementsFromPoint(
        (window.innerWidth * i) / 100,
        window.innerHeight / 2
      );
  
      
      let yElements = document.elementsFromPoint(
        window.innerWidth / 2,
        (window.innerHeight * i) / 100
      );
      isWrapper(xElements[0])
      isWrapper(yElements[0])
    }
    // debugger
    console.log(emptyPoints)
    if (emptyPoints > 16) {
      tracker.send({
        kind: 'stability',
        type: 'blank screen',
        emptyPoints,
        screen: window.screen.width + 'x' + window.screen.height,
        viewPoint: window.innerWidth + 'x' + window.innerHeight,
        
      })
    }
  })
  

}



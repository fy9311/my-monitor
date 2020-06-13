import getLastEvent from "../utils/getLastEvent.js";
import { getSelector } from "../utils/getSelector.js";
import tracker from "../utils/tracker.js";

export function jsError() {
  // 监听全局未捕获错误
  window.addEventListener(
    "error",
    function (event) {
      // console.log(event);

      let lastEvent = getLastEvent();
      let errData;
      if ((event.target && event.target.src) || event.target.href) {
        // 资源加载错误 
        errData = {
          kind: "stability", // 类别-稳定性
          type: "error", // 问题类型
          errorType: "resourceError", // 错误类型 资源加载错误
          message: "资源加载错误", // 报错信息
          filename: event.target.src || event.target.href, // 报错文件
          tagName: event.target.tagName,
        };
      } else {
        // 普通js错误
        errData = {
          kind: "stability", // 类别-稳定性
          type: "error", // 问题类型
          errorType: "jsError", // 错误类型
          message: event.message, // 报错信息
          filename: event.filename, // 报错文件
          position: `${event.lineno}:${event.colno}`, // 报错位置
          stack: event.error.stack, // 错误堆栈信息
          selector: lastEvent ? getSelector(lastEvent.path) : null, // 最后一个交互元素
        };
      }
      // console.log(errData);

      // 上报数据
      tracker.send(errData);
    },
    true
  );


}

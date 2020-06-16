import getLastEvent from "../utils/getLastEvent.js";
import { getSelector } from "../utils/getSelector.js";
import tracker from "../utils/tracker.js";

export function promiseError() {


  // 捕获promise错误
  window.addEventListener(
    "unhandledrejection",
    function (event) {
      let lastEvent = getLastEvent();
      let message; // 错误信息
      let filename; // 文件名
      let line; // 行
      let column; // 列
      let stack; // 堆栈
      let { reason } = event;

      if (typeof reason === "string") {
        message = reason;
      } else if (typeof reason === "object") {
        message = reason.message;
        if (reason.stack) {
          var matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
          if (matchResult) {
            filename = matchResult[1];
            line = matchResult[2];
            column = matchResult[3];
          }
          stack = reason.stack;
        }
      }

      tracker.send({
        //未捕获的promise错误
        kind: "stability", //稳定性指标
        type: "error", //jsError
        errorType: "promiseError", //unhandledrejection
        message: message, //标签名
        filename: filename,
        position: line + ":" + column, //行列
        stack,
        selector: lastEvent
          ? getSelector(lastEvent.path || lastEvent.target)
          : "",
      });
    },
    true
  );

}


import Tracker from "../utils/tracker.js";

export function vueError(config, Vue) {
  if (!Vue) {
    console.log('并未检测到Vue实例')
    return
  }

  Vue.config.errorHandler = (error, vm, info) => {
    let filename, lineno, colno
    if (error.stack) {
      const matchResult = error.stack.match(/at\s+(.+):(\d+):(\d+)/);
      if (matchResult) {
        filename = matchResult[1];
        lineno = matchResult[2];
        colno = matchResult[3];
      }
    }

    let errData = {
      kind: "stability", // 类别-稳定性
      type: "error", // 问题类型
      errorType: "vueError", // 错误类型
      message: error.message, // 报错信息
      filename: filename, // 报错文件
      position: `${lineno}:${colno}`, // 报错位置
      stack: error.stack, // 错误堆栈信息
    };

    new Tracker(config).send(errData)
  }

}
// 加载时间
import tracker from "../utils/tracker";
import onload from '../utils/onload';

export function loadTime() {
  onload(function () {
    setTimeout(() => {
      const { fetchStart, connectStart, connectEnd, requestStart, responseStart, responseEnd, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd, loadEventStart, loadEventEnd } = performance.timing;
      tracker.send({
        kind: 'experience', // 用户体验
        type: 'timing', // 页面各个阶段时间
        connectTime: connectEnd - connectStart, // 连接时间
        ttfbTime: responseStart - requestStart, // 请求响应时间，首字节接收时间
        responseTime: responseEnd - responseStart, // 响应读取时间
        domParseTime: loadEventStart - domLoading, // dom解析时间
        domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart, // dom完成时间
        timeToInteractive: domInteractive - fetchStart, // 可交互时间
        loadTime: loadEventStart - fetchStart, // 完整的加载时间
      })
    }, 2000)
  })
}

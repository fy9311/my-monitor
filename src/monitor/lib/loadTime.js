// 加载时间
import tracker from "../utils/tracker";
import onload from '../utils/onload';

export function loadTime() {
  let FMP, LCP;
  new PerformanceObserver((entryList, observer) => {
    let perfEntries = entryList.getEntries();
    FMP = perfEntries[0];
    observer.disconnect(); // 停止观察
  }).observe({ entryTypes: ['element'] }); // 观察页面中有意义的元素

  new PerformanceObserver((entryList, observe) => {
    let perfEntries = entryList.getEntries();
    LCP = perfEntries[0];
    observe.disconnect();
  }).observe({entryTypes: ['largest-contentful-paint']})


  onload(function () {
    setTimeout(() => {
      const { fetchStart, connectStart, connectEnd, requestStart, responseStart, responseEnd, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd, loadEventStart, loadEventEnd } = performance.timing;
      // tracker.send({
      //   kind: 'experience', // 用户体验
      //   type: 'timing', // 页面各个阶段时间
      //   connectTime: connectEnd - connectStart, // 连接时间
      //   ttfbTime: responseStart - requestStart, // 请求响应时间，首字节接收时间
      //   responseTime: responseEnd - responseStart, // 响应读取时间
      //   domParseTime: loadEventStart - domLoading, // dom解析时间
      //   domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart, // dom完成时间
      //   timeToInteractive: domInteractive - fetchStart, // 可交互时间
      //   loadTime: loadEventStart - fetchStart, // 完整的加载时间
      // })
      let FP = performance.getEntriesByName('first-paint')[0];
      let FCP = performance.getEntriesByName('first-contentful-paint')[0];

      console.log(FP, FCP, LCP, FMP)
    }, 3000)
  })
}

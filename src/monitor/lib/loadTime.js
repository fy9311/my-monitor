// 加载时间
import tracker from "../utils/tracker";
import onload from '../utils/onload';
import formatTime from '../utils/formatTime';
import getLastEvent from '../utils/getLastEvent';

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
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  new PerformanceObserver(function (entryList, observer) {
    let lastEvent = getLastEvent();
    const firstInput = entryList.getEntries()[0];
    if (firstInput) {
      let inputDelay = firstInput.processingStart - firstInput.startTime;//处理延迟
      let duration = firstInput.duration;//处理耗时
      if (firstInput > 0 || duration > 0) {
        tracker.send({
          kind: 'experience',
          type: 'firstInputDelay',
          inputDelay: inputDelay ? formatTime(inputDelay) : 0,
          duration: duration ? formatTime(duration) : 0,
          startTime: firstInput.startTime,
          selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : ''
        });
      }
    }
    observer.disconnect();
  }).observe({ type: 'first-input', buffered: true });

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
      let FP = performance.getEntriesByName('first-paint')[0];
      let FCP = performance.getEntriesByName('first-contentful-paint')[0];

      setTimeout(() => {
        tracker.send({
          kind: 'experience',
          type: 'paint',
          firstPaint: FP ? formatTime(FP.startTime) : 0,
          firstContentPaint: FCP ? formatTime(FCP.startTime) : 0,
          firstMeaningfulPaint: FMP ? formatTime(FMP.startTime) : 0,
          largestContentfulPaint: LCP ? formatTime(LCP.renderTime || LCP.loadTime) : 0
        });
      }, 100)
    }, 3000)
  })
}

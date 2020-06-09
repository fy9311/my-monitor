// 加载时间
import tracker from "../utils/tracker";
import onload from '../utils/onload';

export function loadTime() {
  onload(function () {
    setTimeout(() => {
      const { fetchStart, connectStart, connectEnd, requestStart, responseStart } = performance.timing;
    }, 2000)
  })
}

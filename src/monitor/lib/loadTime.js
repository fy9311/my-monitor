// 加载时间
import tracker from "../utils/tracker";
import onload from '../utils/onload';
import formatTime from '../utils/formatTime';
import getLastEvent from '../utils/getLastEvent';
import { getSelector } from '../utils/getSelector';

function loadTime() {
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


const pagePerformance = {

  getTiming() {
    try {
      if (!window.performance || !window.performance.timing) {
        console.log('你的浏览器不支持 performance 操作');
        return;
      }
      var t = window.performance.timing;
      var times = {};
      var loadTime = t.loadEventEnd - t.loadEventStart;
      if (loadTime < 0) {
        setTimeout(function () {
          pagePerformance.getTiming();
        }, 200);
        return;
      }
      //【重要】重定向的时间
      times.redirectTime = t.redirectEnd - t.redirectStart;
      //【重要】DNS 查询时间
      times.dnsTime = t.domainLookupEnd - t.domainLookupStart;
      //【重要】读取页面第一个字节的时间
      times.ttfbTime = t.responseStart - t.navigationStart;
      //DNS 缓存时间
      times.appcacheTime = t.domainLookupStart - t.fetchStart;
      //卸载页面的时间
      times.unloadTime = t.unloadEventEnd - t.unloadEventStart;
      //tcp连接耗时
      times.tcpTime = t.connectEnd - t.connectStart;
      //【重要】内容加载完成的时间
      times.reqTime = t.responseEnd - t.responseStart;
      //解析dom树耗时
      times.analysisTime = t.domComplete - t.domInteractive;
      //白屏时间
      times.blankTime = t.domLoading - t.navigationStart;
      //domReadyTime
      times.domReadyTime = t.domContentLoadedEventEnd - t.domContentLoadedEventStart;
      //【重要】页面加载完成的时间
      times.loadPage = t.loadEventEnd - t.fetchStart;

      return times;

    } catch (e) {
      console.log(e)
    }
  },

  getEntries() {
    if (!window.performance || !window.performance.getEntries) {
      console.log("该浏览器不支持performance.getEntries方法");
      return;
    }
    let entryTimesList = [];
    let entryList = window.performance.getEntries();
    if (!entryList || entryList.length == 0) {
      return entryTimesList;
    }
    entryList.forEach((item, index) => {
      let templeObj = {};
      let usefulType = ['script', 'css', 'fetch', 'xmlhttprequest', 'link', 'img']; //'navigation'
      if (usefulType.indexOf(item.initiatorType) > -1) {
        //请求资源路径
        templeObj.name = item.name;
        //发起资源类型
        templeObj.initiatorType = item.initiatorType;
        //http协议版本
        templeObj.nextHopProtocol = item.nextHopProtocol;
        //dns查询耗时
        templeObj.dnsTime = item.domainLookupEnd - item.domainLookupStart;
        //tcp链接耗时
        templeObj.tcpTime = item.connectEnd - item.connectStart;
        //请求时间
        templeObj.reqTime = item.responseEnd - item.responseStart;
        //重定向时间
        templeObj.redirectTime = item.redirectEnd - item.redirectStart;
        entryTimesList.push(templeObj);
      }
    });
    return entryTimesList;
  },

};



export function getPerformance() {
  let resourceList = pagePerformance.getEntries()
  let performance = pagePerformance.getTiming()

  let result = {
    time: new Date().getTime(),
    performance: performance,
    resourceList: resourceList,
  };
  console.log(result)
}

// class MonitorPerformance {

//   constructor() {
//     this.isPage = true; //是否上报页面性能数据
//     this.isResource = true; //是否上报页面资源数据
//     this.outTime = 50;
//     this.config = {
//       resourceList: [], //资源列表
//       performance: {}, //页面性能列表
//     };
//   }

//   /**
//    * 记录页面信息
//    * @param {*} params  {pageId ：页面标示,url ：上报地址}
//    */
//   record(params) {
//     setTimeout(() => {
//       if (this.isPage) {
//         this.config.performance = pagePerformance.getTiming();
//       }
//       if (this.isResource) {
//         this.config.resourceList = pagePerformance.getEntries();
//       }
//       let result = {
//         time: new Date().getTime(),
//         performance: this.config.performance,
//         resourceList: this.config.resourceList,
//         markUser: this.markUser(),
//         markUv: this.markUv(),
//         pageId: params ? params.pageId : "",
//         deviceInfo: this.getDeviceInfo()
//       };
//       console.log("report data =", result);
//       //发送监控数据
//       new API(params.url).report(result);
//       this.clearPerformance();
//     }, this.outTime);
//   }

//   /**
//    * 获取设备信息
//    */
//   getDeviceInfo() {
//     try {
//       let deviceInfo = DeviceInfo.getDeviceInfo();
//       return JSON.stringify(deviceInfo);
//     } catch (error) {
//       console.log(error);
//       return "";
//     }
//   }

//   randomString(len) {
//     len = len || 10;
//     var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
//     var maxPos = $chars.length;
//     var pwd = '';
//     for (let i = 0; i < len; i++) {
//       pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos));
//     }
//     return pwd + new Date().getTime();
//   }

//   /**
//    * 获得markpage
//    */
//   markUser() {
//     let psMarkUser = sessionStorage.getItem('ps_markUser') || '';
//     if (!psMarkUser) {
//       psMarkUser = this.randomString();
//       sessionStorage.setItem('ps_markUser', psMarkUser);
//     }
//     return psMarkUser;
//   }

//   /**
//    * 获得Uv
//    */
//   markUv() {
//     const date = new Date();
//     let psMarkUv = localStorage.getItem('ps_markUv') || '';
//     const datatime = localStorage.getItem('ps_markUvTime') || '';
//     const today = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' 23:59:59';
//     if ((!psMarkUv && !datatime) || (date.getTime() > datatime * 1)) {
//       psMarkUv = this.randomString();
//       localStorage.setItem('ps_markUv', psMarkUv);
//       localStorage.setItem('ps_markUvTime', new Date(today).getTime());
//     }
//     return psMarkUv;
//   }

//   clearPerformance() {
//     if (window.performance && window.performance.clearResourceTimings) {
//       performance.clearResourceTimings();
//       this.config.performance = {};
//       this.config.resourceList = '';
//     }
//   }

// }

// export default MonitorPerformance;
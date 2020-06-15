/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_user-agent@1.0.4@user-agent/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack:///./node_modules/_user-agent@1.0.4@user-agent/index.js?");

/***/ }),

/***/ "./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack:///./node_modules/_user-agent@1.0.4@user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Monitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor/index */ \"./src/monitor/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Monitor\", function() { return _monitor_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\nwindow.monitor = _monitor_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError */ \"./src/monitor/lib/jsError.js\");\n/* harmony import */ var _lib_promiseError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/promiseError */ \"./src/monitor/lib/promiseError.js\");\n/* harmony import */ var _lib_ajaxError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ajaxError */ \"./src/monitor/lib/ajaxError.js\");\n/* harmony import */ var _lib_blankScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/blankScreen */ \"./src/monitor/lib/blankScreen.js\");\n/* harmony import */ var _lib_getPerformance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getPerformance */ \"./src/monitor/lib/getPerformance.js\");\n/* harmony import */ var _lib_vueError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/vueError */ \"./src/monitor/lib/vueError.js\");\n/* harmony import */ var _lib_custom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/custom */ \"./src/monitor/lib/custom.js\");\n\n\n\n\n\n\n\n\nclass Monitor {\n  constructor() {\n    this.ajaxFocus = true\n    this.blankFocus = true\n    this.performanceFocus = true\n    this.jsFocus = true\n    this.promiseFocus = true\n    this.vueFocus = true\n    this.custom = true\n  }\n\n\n  init(options) {\n    if (options.env !== 'prod') {\n      window.monitor = null\n      return\n    }\n    this.ajaxFocus = options.ajax || this.ajaxFocus\n    this.blankFocus = options.blank || this.blankFocus\n    this.performanceFocus = options.performance || this.performanceFocus\n    this.jsFocus = options.js || this.jsFocus\n    this.promiseFocus = options.promise || this.promiseFocus\n    this.vueFocus = options.vue || this.vueFocus\n    this.custom = options.custom || this.custom\n    let url = options.url\n    let appId = options.appId\n    let config = { url, appId }\n\n    if (this.ajaxFocus) {\n      Object(_lib_ajaxError__WEBPACK_IMPORTED_MODULE_2__[\"ajaxError\"])(config)\n    }\n\n    if (this.blankFocus) {\n      Object(_lib_blankScreen__WEBPACK_IMPORTED_MODULE_3__[\"blankScreen\"])(config)\n    }\n\n    if (this.performanceFocus) {\n      Object(_lib_getPerformance__WEBPACK_IMPORTED_MODULE_4__[\"getPerformance\"])(config)\n    }\n\n    if (this.jsFocus) {\n      Object(_lib_jsError__WEBPACK_IMPORTED_MODULE_0__[\"jsError\"])(config)\n    }\n\n    if (this.promiseFocus) {\n      Object(_lib_promiseError__WEBPACK_IMPORTED_MODULE_1__[\"promiseError\"])(config)\n    }\n\n    if (this.vueFocus) {\n      Object(_lib_vueError__WEBPACK_IMPORTED_MODULE_5__[\"vueError\"])(config)\n    }\n  }\n\n  sendCustom(params) {\n    if (this.custom) {\n      Object(_lib_custom__WEBPACK_IMPORTED_MODULE_6__[\"custom\"])(params)\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monitor);\n\n\n\n\n\n//# sourceURL=webpack:///./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/ajaxError.js":
/*!**************************************!*\
  !*** ./src/monitor/lib/ajaxError.js ***!
  \**************************************/
/*! exports provided: ajaxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajaxError\", function() { return ajaxError; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\nfunction ajaxError() {\n  // 缓存当前全局方法\n  let XMLHttpRequest = window.XMLHttpRequest;\n\n  // 重写全局open\n  let oldOpen = XMLHttpRequest.prototype.open;\n\n  XMLHttpRequest.prototype.open = function (method, url, async) {\n    // logstores 数据仓库相关   sockjs webpack相关\n    if (!url.match(/logstores/) && !url.match(/sockjs/)) {\n      this.logData = {\n        method,\n        url,\n        async,\n      };\n    }\n    return oldOpen.apply(this, arguments);\n  };\n\n  // 重写全局send\n  let oldSend = XMLHttpRequest.prototype.send;\n\n  XMLHttpRequest.prototype.send = function (body) {\n    if (this.logData) {\n      let startTime = Date.now(); // 记录开始时间\n      let handler = (type) => (event) => {\n        if (this.status === 200) {\n          return\n        }\n        let duration = Date.now() - startTime; // 计算持续时间\n        let status = this.status;\n        let statusText = this.statusText;\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n          kind: \"stability\", // 类别-稳定性\n          type: \"xhr\", // 问题类型-请求问题\n          errorType: type, // 错误类型,\n          pathname: this.logData.url, // 请求路径\n          duration: duration, // 持续时间\n          status: `${status}-${statusText}`, // 状态码\n          response: this.response ? JSON.stringify(this.response) : \"\", // 响应体\n          params: body || \"\", // 参数\n        });\n      };\n      this.addEventListener(\"error\", handler(\"error\"), false);\n      this.addEventListener(\"load\", handler(\"load\"), false);\n      this.addEventListener(\"abort\", handler(\"abort\"), false);\n    }\n\n    return oldSend.apply(this, arguments);\n  };\n}\n\n\n//# sourceURL=webpack:///./src/monitor/lib/ajaxError.js?");

/***/ }),

/***/ "./src/monitor/lib/blankScreen.js":
/*!****************************************!*\
  !*** ./src/monitor/lib/blankScreen.js ***!
  \****************************************/
/*! exports provided: blankScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blankScreen\", function() { return blankScreen; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n// 空白屏\n\n\n\nfunction blankScreen() {\n  // 哪些算是空白节点\n  let wrapperElements = [\"html\", \"body\", \"#content\", \".box\"];\n  // 空节点计数\n  let emptyPoints = 0;\n\n  function isWrapper(el) {\n    let selector = getSelector(el);\n    if (wrapperElements.includes(selector)) {\n      emptyPoints++;\n    }\n  }\n\n  function getSelector(el) {\n\n    if (el.id) {\n      return \"#\" + el.id;\n    } else if (el.className) {\n      return \".\" + el.className.split(' ').filter(item => !!item).join('.');\n    } else {\n      return el.nodeName.toLowerCase();\n    }\n  }\n\n  Object(_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    for (let i = 1; i <= 9; i++) {\n      let xElements = document.elementsFromPoint(\n        (window.innerWidth * i) / 100,\n        window.innerHeight / 2\n      );\n      let yElements = document.elementsFromPoint(\n        window.innerWidth / 2,\n        (window.innerHeight * i) / 100\n      );\n      isWrapper(xElements[0])\n      isWrapper(yElements[0])\n    }\n    if (emptyPoints > 16) {\n      _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n        kind: 'stability',\n        type: 'blank screen',\n        emptyPoints,\n        screen: window.screen.width + 'x' + window.screen.height,\n        viewPoint: window.innerWidth + 'x' + window.innerHeight,\n\n      })\n    }\n  })\n\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/monitor/lib/blankScreen.js?");

/***/ }),

/***/ "./src/monitor/lib/custom.js":
/*!***********************************!*\
  !*** ./src/monitor/lib/custom.js ***!
  \***********************************/
/*! exports provided: custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"custom\", function() { return custom; });\n/* harmony import */ var _utils_tracker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker.js */ \"./src/monitor/utils/tracker.js\");\n\n\nfunction custom(params) {\n  if (typeof params === 'object') {\n    _utils_tracker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(params)\n  } else {\n    console.log('上传数据格式应为对象')\n  }\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/custom.js?");

/***/ }),

/***/ "./src/monitor/lib/getPerformance.js":
/*!*******************************************!*\
  !*** ./src/monitor/lib/getPerformance.js ***!
  \*******************************************/
/*! exports provided: getPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPerformance\", function() { return getPerformance; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n// 加载时间\n\n\n\n\n\nconst pagePerformance = {\n\n  getTiming() {\n    try {\n      if (!window.performance || !window.performance.timing) {\n        console.log('你的浏览器不支持 performance 操作');\n        return;\n      }\n      var t = window.performance.timing;\n      var times = {};\n      var loadTime = t.loadEventEnd - t.loadEventStart;\n      if (loadTime < 0) {\n        setTimeout(function () {\n          pagePerformance.getTiming();\n        }, 200);\n        return;\n      }\n      //【重要】重定向的时间\n      times.redirectTime = t.redirectEnd - t.redirectStart;\n      //【重要】DNS 查询时间\n      times.dnsTime = t.domainLookupEnd - t.domainLookupStart;\n      //【重要】读取页面第一个字节的时间\n      times.ttfbTime = t.responseStart - t.navigationStart;\n      //DNS 缓存时间\n      times.appcacheTime = t.domainLookupStart - t.fetchStart;\n      //卸载页面的时间\n      times.unloadTime = t.unloadEventEnd - t.unloadEventStart;\n      //tcp连接耗时\n      times.tcpTime = t.connectEnd - t.connectStart;\n      //【重要】内容加载完成的时间\n      times.reqTime = t.responseEnd - t.responseStart;\n      //解析dom树耗时\n      times.analysisTime = t.domComplete - t.domInteractive;\n      //白屏时间\n      times.blankTime = t.domLoading - t.navigationStart;\n      //domReadyTime\n      times.domReadyTime = t.domContentLoadedEventEnd - t.domContentLoadedEventStart;\n      //【重要】页面加载完成的时间\n      times.loadPage = t.loadEventEnd - t.fetchStart;\n\n      return times;\n\n    } catch (e) {\n      console.log(e)\n    }\n  },\n\n  getEntries() {\n    if (!window.performance || !window.performance.getEntries) {\n      console.log(\"该浏览器不支持performance.getEntries方法\");\n      return;\n    }\n    let entryTimesList = [];\n    let entryList = window.performance.getEntries();\n    if (!entryList || entryList.length == 0) {\n      return entryTimesList;\n    }\n    entryList.forEach((item, index) => {\n      let templeObj = {};\n      let usefulType = ['script', 'css', 'fetch', 'xmlhttprequest', 'link', 'img']; //'navigation'\n      if (usefulType.indexOf(item.initiatorType) > -1) {\n        //请求资源路径\n        templeObj.name = item.name;\n        //发起资源类型\n        templeObj.initiatorType = item.initiatorType;\n        //http协议版本\n        templeObj.nextHopProtocol = item.nextHopProtocol;\n        //dns查询耗时\n        templeObj.dnsTime = item.domainLookupEnd - item.domainLookupStart;\n        //tcp链接耗时\n        templeObj.tcpTime = item.connectEnd - item.connectStart;\n        //请求时间\n        templeObj.reqTime = item.responseEnd - item.responseStart;\n        //重定向时间\n        templeObj.redirectTime = item.redirectEnd - item.redirectStart;\n        entryTimesList.push(templeObj);\n      }\n    });\n    return entryTimesList;\n  },\n\n};\n\n\n\nfunction getPerformance() {\n  let resourceList = pagePerformance.getEntries()\n  let performance = pagePerformance.getTiming()\n\n  let result = {\n    kind: 'experience',\n    type: 'performance',\n    performance: JSON.stringify(performance),\n    resourceList: JSON.stringify(resourceList),\n  };\n  setTimeout(() => {\n    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(result)\n  }, 5000)\n}\n\n\n//# sourceURL=webpack:///./src/monitor/lib/getPerformance.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/*! exports provided: jsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsError\", function() { return jsError; });\n/* harmony import */ var _utils_getLastEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent.js */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector.js */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker.js */ \"./src/monitor/utils/tracker.js\");\n\n\n\n\nfunction jsError() {\n  // 监听全局未捕获错误\n  window.addEventListener(\n    \"error\",\n    function (event) {\n\n      let lastEvent = Object(_utils_getLastEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      let errData;\n      if ((event.target && event.target.src) || event.target.href) {\n        // 资源加载错误 \n        errData = {\n          kind: \"stability\", // 类别-稳定性\n          type: \"error\", // 问题类型\n          errorType: \"resourceError\", // 错误类型 资源加载错误\n          message: \"资源加载错误\", // 报错信息\n          filename: event.target.src || event.target.href, // 报错文件\n          tagName: event.target.tagName,\n        };\n      } else {\n        // 普通js错误\n        errData = {\n          kind: \"stability\", // 类别-稳定性\n          type: \"error\", // 问题类型\n          errorType: \"jsError\", // 错误类型\n          message: event.message, // 报错信息\n          filename: event.filename, // 报错文件\n          position: `${event.lineno}:${event.colno}`, // 报错位置\n          stack: event.stack, // 错误堆栈信息\n          selector: lastEvent ? Object(_utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__[\"getSelector\"])(lastEvent.path) : null, // 最后一个交互元素\n        };\n      }\n      // console.log(errData);\n\n      // 上报数据\n      _utils_tracker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(errData);\n    },\n    true\n  );\n\n\n}\n\n\n//# sourceURL=webpack:///./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/lib/promiseError.js":
/*!*****************************************!*\
  !*** ./src/monitor/lib/promiseError.js ***!
  \*****************************************/
/*! exports provided: promiseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"promiseError\", function() { return promiseError; });\n/* harmony import */ var _utils_getLastEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent.js */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector.js */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker.js */ \"./src/monitor/utils/tracker.js\");\n\n\n\n\nfunction promiseError() {\n\n\n  // 捕获promise错误\n  window.addEventListener(\n    \"unhandledrejection\",\n    function (event) {\n      let lastEvent = Object(_utils_getLastEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      let message; // 错误信息\n      let filename; // 文件名\n      let line; // 行\n      let column; // 列\n      let stack; // 堆栈\n      let { reason } = event;\n\n      if (typeof reason === \"string\") {\n        message = reason;\n      } else if (typeof reason === \"object\") {\n        message = reason.message;\n        if (reason.stack) {\n          var matchResult = reason.stack.match(/at\\s+(.+):(\\d+):(\\d+)/);\n          if (matchResult) {\n            filename = matchResult[1];\n            line = matchResult[2];\n            column = matchResult[3];\n          }\n          stack = reason.stack;\n        }\n      }\n\n      _utils_tracker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n        //未捕获的promise错误\n        kind: \"stability\", //稳定性指标\n        type: \"error\", //jsError\n        errorType: \"promiseError\", //unhandledrejection\n        message: message, //标签名\n        filename: filename,\n        position: line + \":\" + column, //行列\n        stack,\n        selector: lastEvent\n          ? Object(_utils_getSelector_js__WEBPACK_IMPORTED_MODULE_1__[\"getSelector\"])(lastEvent.path || lastEvent.target)\n          : \"\",\n      });\n    },\n    true\n  );\n\n}\n\n\n//# sourceURL=webpack:///./src/monitor/lib/promiseError.js?");

/***/ }),

/***/ "./src/monitor/lib/vueError.js":
/*!*************************************!*\
  !*** ./src/monitor/lib/vueError.js ***!
  \*************************************/
/*! exports provided: vueError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vueError\", function() { return vueError; });\n/* harmony import */ var _utils_tracker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker.js */ \"./src/monitor/utils/tracker.js\");\n\n\n\nfunction vueError() {\n\n  if (!window.Vue) {\n    console.log('并未检测到Vue实例')\n    return\n  }\n\n  Vue.config.errorHandler = (error, vm, info) => {\n    // console.log(error, vm, info)\n    let filename, lineno, colno\n    if (error.stack) {\n      const matchResult = error.stack.match(/at\\s+(.+):(\\d+):(\\d+)/);\n      if (matchResult) {\n        filename = matchResult[1];\n        lineno = matchResult[2];\n        colno = matchResult[3];\n      }\n    }\n\n    let errData = {\n      kind: \"stability\", // 类别-稳定性\n      type: \"error\", // 问题类型\n      errorType: \"vueError\", // 错误类型\n      message: error.message, // 报错信息\n      filename: filename, // 报错文件\n      position: `${lineno}:${colno}`, // 报错位置\n      stack: error.stack, // 错误堆栈信息\n    };\n\n    _utils_tracker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(errData)\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/monitor/lib/vueError.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet lastEvent;\n\n['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(type => {\n    document.addEventListener(type, (event) => {\n        lastEvent = event\n    },{\n        capture: true, // 捕获阶段执行\n        passive: true, // 默认不阻止默认事件\n    })\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    return lastEvent;\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/*! exports provided: getSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSelector\", function() { return getSelector; });\nfunction getSelector(path) {\n    if (Array.isArray(path)) {\n        return getSelectors(path);\n    }\n}\n\nfunction getSelectors(path) {\n    return path\n        .reverse()\n        .filter(el => {\n            return el !== document && el !== window\n        })\n        .map(el => {\n            let selector = \"\";\n            if (el.id) {\n                selector = `${el.nodeName.toLowerCase()}#${el.id}`\n            } else if (el.className && typeof el.className === 'string') {\n                selector = `${el.nodeName.toLowerCase()}.${el.className}`\n            } else {\n                selector = el.nodeName.toLowerCase();\n            }\n            return selector;\n        })\n        .join(' ');\n}\n\n//# sourceURL=webpack:///./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/onload.js":
/*!*************************************!*\
  !*** ./src/monitor/utils/onload.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onload; });\nfunction onload(cb) {\n  if (document.readyState === 'complete') {\n    cb();\n  } else {\n    window.addEventListener('load', cb);\n  }\n}\n\n//# sourceURL=webpack:///./src/monitor/utils/onload.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 服务主机名\nconst host = 'cn-chengdu.log.aliyuncs.com';\n// 项目名\nconst project = 'my-monitor';\n// 存储空间名\nconst logstoreName = 'monitor-store';\n// 获取用户浏览器信息\nconst userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/_user-agent@1.0.4@user-agent/index.js\");\n\n// 为data添加额外信息\nfunction getExtraData() {\n    return {\n        title: document.title,\n        // url: location.url,\n        timeStamp: Date.now(),\n        userAgent: userAgent.parse(navigator.userAgent).name\n    }\n}\n\nclass sendTracker {\n    constructor() {\n        // 坑点，如果不加http://则会把当前域名加进去\n        this.url = `http://${project}.${host}/logstores/${logstoreName}/track`; // 上报路径\n        this.xhr = new XMLHttpRequest;\n    }\n\n    send(data = {}) {\n        let extraData = getExtraData();\n        let logs = {\n            ...extraData,\n            ...data\n        };\n        for (let key in logs) {\n            if (typeof logs[key] === 'number') {\n                logs[key] = `${logs[key]}`;\n            }\n        }\n\n        let body = JSON.stringify({\n            __logs__: [logs]\n        });\n\n        this.xhr.open('POST', this.url, true);\n        // 版本\n        this.xhr.setRequestHeader('x-log-apiversion', '0.6.0');\n        // 请求体大小\n        this.xhr.setRequestHeader('x-log-bodyrawsize', body.length);\n        // 压缩算法\n        // this.xhr.setRequestHeader('x-log-compresstype', 'lz4');\n        // 内容类型\n        this.xhr.setRequestHeader('Content-Type', 'application/json');\n        // 发送\n        this.xhr.send(body);\n        // 错误监听\n        this.xhr.onerror = () => {\n            // console.log(this.xhr.response);\n        };\n        // 完成监听\n        this.xhr.onload = () => {\n            // console.log(this.xhr.response);\n        }\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new sendTracker());\n\n//# sourceURL=webpack:///./src/monitor/utils/tracker.js?");

/***/ })

/******/ });
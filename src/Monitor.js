import {
  jsError
} from './lib/jsError';
import {
  promiseError
} from './lib/promiseError';
import {
  ajaxError
} from './lib/ajaxError';
import {
  blankScreen
} from './lib/blankScreen';
import {
  getPerformance
} from './lib/getPerformance';
import {
  vueError
} from './lib/vueError';
import {
  custom
} from './lib/custom';


class Monitor {
  /**
  * @param {*} options
  * 新建监控实例参数说明:
  * disabled 表示是否启用监听
  * console 表示是否抛出错误
  * url 表示上报接口地址
  * appId 表示当前项目标识
  * vueErr 表示是否监听vue错误，需要与instance配合使用
  * ajax 表示是否监听ajax错误
  * js 表示是否监听js错误
  * promise  表示是否监听promise错误
  * blank  表示是否监控首页白屏
  * instance vue实例，与vueErr配合使用
  * performance  表示是否启用性能监控
  * custom 表示是否启用自定义上报
  */
  constructor(options) {
    this.ajaxErr = options.ajax || false
    this.blankErr = options.blank || false
    this.performanceErr = options.performance || false
    this.jsErr = options.js || false
    this.promiseErr = options.promise || false
    this.vueErr = options.vueErr || false
    this.customErr = options.custom || false
    this.appId = options.appId || 'test'
    this.url = options.url || 'test-url'
    this.disabled = options.disabled || false
    this.instance = options.instance || null
    this.console = options.console || false
    this.config = {
      url: this.url,
      appId: this.appId,
      console: this.console
    }
    this.init()
  }


  init() {
    if (!this.disabled) {
      return
    }

    if (this.ajaxErr) {
      ajaxError(this.config)
    }

    if (this.blankErr) {
      blankScreen(this.config)
    }

    if (this.performanceErr) {
      getPerformance(this.config)
    }

    if (this.jsErr) {
      jsError(this.config)
    }

    if (this.promiseErr) {
      promiseError(this.config)
    }

    if (this.vueErr && this.instance) {
      vueError(this.config, this.instance)
    }
  }

  sendCustom(params) {
    if (this.customErr && !this.disabled) {
      custom(this.config, params)
    }
  }
}

export default Monitor
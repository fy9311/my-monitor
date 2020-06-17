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
    this.env = options.env || false
    this.instance = options.instance || null
    this.config = {
      url: this.url,
      appId: this.appId
    }
    this.init()
  }


  init() {
    if (this.env) {
      window.monitor = null
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
    if (this.customErr) {
      custom(this.config, params)
    }
  }
}

export default Monitor
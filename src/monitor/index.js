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

class monitor {
  constructor() {
    this.ajaxFocus = true
    this.blankFocus = true
    this.performanceFocus = true
    this.jsFocus = true
    this.promiseFocus = true
    this.vueFocus = true
    this.custom = true
  }


  init(options) {
    this.ajaxFocus = options.ajax || this.ajaxFocus
    this.blankFocus = options.blank || this.blankFocus
    this.performanceFocus = options.performance || this.performanceFocus
    this.jsFocus = options.js || this.jsFocus
    this.promiseFocus = options.promise || this.promiseFocus
    this.vueFocus = options.vue || this.vueFocus
    this.custom = options.custom || this.custom
    let url = options.url
    let appId = options.appId
    let config = { url, appId }

    if (this.ajaxFocus) {
      ajaxError(config)
    }

    if (this.blankFocus) {
      blankScreen(config)
    }

    if (this.performanceFocus) {
      getPerformance(config)
    }

    if (this.jsFocus) {
      jsError(config)
    }

    if (this.promiseFocus) {
      promiseError(config)
    }

    if (this.vueFocus) {
      vueError(config)
    }
  }

  sendCustom(params) {
    if (this.custom) {
      custom(params)
    }
  }
}

export default monitor




export interface options {
  disabled: Boolean,
  console: Boolean,
  url: String,
  appId: String,
  vueErr: Boolean,
  ajax: Boolean,
  js: Boolean,
  promise: Boolean,
  blank: Boolean,
  instance: Object,
  performance: Boolean,
  custom: Boolean
}

export declare class Monitor {
  constructor(options?: options)
}

export default Monitor

import Tracker from "../utils/tracker.js";

export function custom(config, params) {
  if (typeof params === 'object') {
    new Tracker(config).send(params)
  } else {
    console.log('上传数据格式应为对象')
  }
}
import tracker from "../utils/tracker.js";

export function custom(params) {
  if (typeof params === 'object') {
    tracker.send(params)
  } else {
    console.log('上传数据格式应为对象')
  }
}
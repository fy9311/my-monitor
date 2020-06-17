
// 获取用户浏览器信息
import userAgent from 'user-agent'

// 为data添加额外信息
function getExtraData() {
  return {
    title: document.title,
    href: location.url,
    timeStamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name
  }
}

class Tracker {
  constructor(options) {
    // 坑点，如果不加http://则会把当前域名加进去
    this.url = options.url; // 上报路径
    this.appId = options.appId

  }

  send(data = {}) {
    let xhr = new XMLHttpRequest();
    let extraData = getExtraData();
    let logs = {
      errData: {
        ...extraData,
        ...data
      }
    }

    let body = JSON.stringify(logs);

    xhr.open('POST', this.url, true);
    // 内容类型
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 发送
    xhr.send(body);

  }
}

export default Tracker;
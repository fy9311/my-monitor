
// 获取用户浏览器信息
import userAgent from 'user-agent'

class Tracker {
  constructor(options) {
    // 坑点，如果不加http://则会把当前域名加进去
    this.url = options.url; // 上报路径
    this.appId = options.appId

  }

  send(data = {}) {
    let xhr = new XMLHttpRequest();
    let logs = {
      content: JSON.stringify({ ...data }),
      application: this.appId,
      stack: data.stack || '',
      type: data.type,
      url: location.href,
      userAgent: userAgent.parse(navigator.userAgent).name
    }
    let body = JSON.stringify(logs)

    xhr.open('POST', this.url, true);
    // 内容类型
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 发送
    xhr.send(body);

  }
}

export default Tracker;